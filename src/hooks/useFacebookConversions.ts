/**
 * @file: useFacebookConversions.ts
 * @responsibility: Hook principal para gerenciar eventos Facebook Conversions API
 * @exports: useFacebookConversions com todos os métodos de envio
 * @layer: hooks
 */

"use client";

import { useCallback, useEffect, useRef } from 'react';
import { 
  getGlobalUserData, 
  updateGlobalUserData,
  getUrlParameters,
  shouldSendEvent,
  markPageViewSent,
  generateUUID,
  debugLog,
  FACEBOOK_CONVERSIONS_CONFIG
} from '@/lib/facebook-conversions';

import { getUserIP } from '@/lib/ip-detector';
import { PixelEvents } from '@/components/analytics/FacebookPixel';

import type {
  FacebookEventPayload,
  FacebookUserData,
  FacebookCustomData,
  FacebookApiResponse,
  LeadFormData,
  CheckoutData,
  ViewContentData,
  FacebookEventType
} from '@/types/facebook-conversions';

// ==============================================
// TIPOS ESPECÍFICOS DO HOOK
// ==============================================

interface UseFacebookConversionsReturn {
  // Eventos principais
  sendPageView: () => Promise<FacebookApiResponse | null>;
  sendViewContent: (data: ViewContentData) => Promise<FacebookApiResponse | null>;
  sendInitiateCheckout: (data: CheckoutData) => Promise<FacebookApiResponse | null>;
  sendLead: (data: LeadFormData) => Promise<FacebookApiResponse | null>;
  
  // Gestão de dados do usuário
  updateUserData: (data: Partial<LeadFormData>) => void;
  getUserData: () => FacebookUserData;
  
  // Utilidades
  isReady: boolean;
  debugInfo: () => void;
}

// ==============================================
// HOOK PRINCIPAL
// ==============================================

export const useFacebookConversions = (): UseFacebookConversionsReturn => {
  const isInitialized = useRef(false);
  const isReady = useRef(false);

  // ==============================================
  // INICIALIZAÇÃO
  // ==============================================

  useEffect(() => {
    if (isInitialized.current) return;
    
    // Verificar se estamos no cliente
    if (typeof window === 'undefined') return;
    
    try {
      // Validar configuração
      if (!FACEBOOK_CONVERSIONS_CONFIG.apiUrl) {
        debugLog('WARN: API URL não configurada');
        return;
      }
      
      isReady.current = true;
      isInitialized.current = true;
      
      debugLog('Hook Facebook Conversions inicializado', {
        apiUrl: FACEBOOK_CONVERSIONS_CONFIG.apiUrl,
        debugMode: FACEBOOK_CONVERSIONS_CONFIG.debugMode,
        userData: getGlobalUserData()
      });
      
    } catch (error) {
      console.error('[FB CONVERSIONS HOOK] Erro na inicialização:', error);
    }
  }, []);

  // ==============================================
  // FUNÇÃO GENÉRICA DE ENVIO
  // ==============================================

    const sendEventToAPI = useCallback(async (
    eventType: FacebookEventType,
    customData?: FacebookCustomData,
    skipDuplicateCheck: boolean = false
  ): Promise<FacebookApiResponse | null> => {
    
    if (!isReady.current) {
      debugLog('Hook não inicializado, ignorando evento', eventType);
      return null;
    }

    try {
      // Verificar duplicatas (exceto para PageView que tem sua própria lógica)
      if (!skipDuplicateCheck && eventType !== 'PageView') {
        const identifier = customData?.content_name || window.location.pathname;
        if (!shouldSendEvent(eventType, identifier)) {
          return null;
        }
      }

      // Gerar eventId único para deduplicação
      const eventId = generateUUID();

      // Obter dados atuais do usuário
      const globalUserData = getGlobalUserData();
      
      // Construir userData para a API (formato esperado)
      const userData: FacebookUserData = {
        external_id: globalUserData.external_id ? [globalUserData.external_id] : undefined,
        em: globalUserData.em ? [globalUserData.em] : undefined,
        ph: globalUserData.ph ? [globalUserData.ph] : undefined,
        fn: globalUserData.fn ? [globalUserData.fn] : undefined,
        ln: globalUserData.ln ? [globalUserData.ln] : undefined,
        fbc: globalUserData.fbc,
        fbp: globalUserData.fbp,
      };

      // Remover campos undefined
      Object.keys(userData).forEach(key => {
        if (userData[key as keyof FacebookUserData] === undefined) {
          delete userData[key as keyof FacebookUserData];
        }
      });

      // Obter parâmetros de URL e filtrar undefined
      const rawUrlParams = getUrlParameters();
      const urlParameters: Record<string, string> = {};
      Object.entries(rawUrlParams).forEach(([key, value]) => {
        if (value !== undefined) {
          urlParameters[key] = value;
        }
      });

      // Capturar IP do usuário para enriquecimento geográfico
      const userIP = await getUserIP() || undefined;

      // 🎯 ENVIAR PARA PIXEL (CLIENT-SIDE) PRIMEIRO
      await sendToPixel(eventType, customData, eventId);

      // Construir payload completo para CAPI
      const payload: FacebookEventPayload = {
        eventId,
        userData,
        customData: customData || {},
        eventSourceUrl: window.location.href,
        urlParameters,
        actionSource: 'website',
        userIP // Adicionar IP para processamento pela API
      };

      debugLog(`📤 Enviando evento ${eventType} para CAPI`, payload);

      // Enviar para CAPI (SERVER-SIDE)
      const response = await fetch(`${FACEBOOK_CONVERSIONS_CONFIG.apiUrl}/api/track/${eventType.toLowerCase()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(FACEBOOK_CONVERSIONS_CONFIG.timeout)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result: FacebookApiResponse = await response.json();
      
      if (result.message?.includes('successfully')) {
        debugLog(`✅ ${eventType} DUAL enviado com sucesso`, {
          eventId: payload.eventId,
          fbtrace_id: result.fbtrace_id,
          pixel: 'CLIENT-SIDE ✅',
          capi: 'SERVER-SIDE ✅'
        });
      } else {
        debugLog(`⚠️ ${eventType} - resposta inesperada`, result);
      }

      return result;

    } catch (error) {
      console.error(`[FB CONVERSIONS] Erro ao enviar ${eventType}:`, error);
      
      // Retry logic para falhas de rede
      if (error instanceof TypeError && error.message.includes('fetch')) {
        debugLog(`Tentando reenvio de ${eventType} em 2s...`);
        setTimeout(() => {
          sendEventToAPI(eventType, customData, true);
        }, 2000);
      }
      
      return null;
    }
  }, []);

  // ==============================================
  // ENVIO PARA PIXEL (CLIENT-SIDE)
  // ==============================================

  const sendToPixel = useCallback(async (
    eventType: FacebookEventType,
    customData?: FacebookCustomData,
    eventId?: string
  ): Promise<void> => {
    try {
      switch (eventType) {
        case 'PageView':
          PixelEvents.trackPageView(eventId);
          break;

        case 'ViewContent':
          if (customData) {
            PixelEvents.trackViewContent({
              content_name: customData.content_name || '',
              content_category: customData.content_category,
              content_ids: customData.content_ids,
              value: customData.value,
              currency: customData.currency
            }, eventId);
          }
          break;

        case 'Lead':
          PixelEvents.trackLead({
            content_name: customData?.content_name,
            content_category: customData?.content_category,
            value: customData?.value,
            currency: customData?.currency
          }, eventId);
          break;

        case 'InitiateCheckout':
          if (customData) {
            PixelEvents.trackInitiateCheckout({
              content_name: customData.content_name,
              content_category: customData.content_category,
              content_ids: customData.content_ids,
              value: customData.value || 0,
              currency: customData.currency,
              num_items: customData.num_items
            }, eventId);
          }
          break;

        default:
          debugLog(`Evento ${eventType} não suportado no Pixel`);
      }

      debugLog(`📊 Pixel event enviado: ${eventType}`, { eventId });
    } catch (error) {
      debugLog(`❌ Erro no envio para Pixel: ${eventType}`, error);
    }
  }, []);

  // ==============================================
  // EVENTOS ESPECÍFICOS
  // ==============================================

  const sendPageView = useCallback(async (): Promise<FacebookApiResponse | null> => {
    const currentUrl = window.location.href;
    
    // Verificar se PageView já foi enviado para esta URL
    if (!shouldSendEvent('PageView', currentUrl)) {
      return null;
    }

    const result = await sendEventToAPI('PageView', undefined, true);
    
    if (result) {
      markPageViewSent(currentUrl);
    }
    
    return result;
  }, [sendEventToAPI]);

  const sendViewContent = useCallback(async (data: ViewContentData): Promise<FacebookApiResponse | null> => {
    const customData: FacebookCustomData = {
      content_name: data.content_name,
      content_category: data.content_category || 'Website Section',
      content_ids: data.content_ids || [data.content_name.toLowerCase().replace(/\s+/g, '-')],
      content_type: 'website_section',
      value: data.value || 0,
      currency: data.currency || FACEBOOK_CONVERSIONS_CONFIG.currency,
      num_items: 1,
      contents: [{
        id: data.content_ids?.[0] || data.content_name.toLowerCase().replace(/\s+/g, '-'),
        quantity: 1,
        item_price: data.value || 0
      }]
    };

    return sendEventToAPI('ViewContent', customData);
  }, [sendEventToAPI]);

  const sendInitiateCheckout = useCallback(async (data: CheckoutData): Promise<FacebookApiResponse | null> => {
    const customData: FacebookCustomData = {
      content_name: data.productName || 'Kit Inteligência Estratégica',
      content_category: data.category || 'Digital Product',
      content_ids: data.productIds || ['kit-inteligencia-estrategica'],
      content_type: 'product',
      value: data.value || 47,
      currency: data.currency || FACEBOOK_CONVERSIONS_CONFIG.currency,
      num_items: data.numItems || 1,
      contents: data.contents || [{
        id: 'kit-inteligencia-estrategica',
        quantity: 1,
        item_price: data.value || 47
      }]
    };

    return sendEventToAPI('InitiateCheckout', customData);
  }, [sendEventToAPI]);

  const sendLead = useCallback(async (leadData: LeadFormData): Promise<FacebookApiResponse | null> => {
    // Primeiro, atualizar dados globais do usuário com os dados do lead
    const nameParts = leadData.name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || firstName;

    updateGlobalUserData({
      em: leadData.email.trim().toLowerCase(),
      ph: leadData.phone.replace(/\D/g, ''), // Apenas dígitos
      fn: firstName,
      ln: lastName
    });

    const customData: FacebookCustomData = {
      content_name: 'Lead Form Submission',
      content_category: 'Lead Generation',
      content_type: 'lead',
      lead_source: 'website_form',
      form_name: 'interest_modal',
      value: 0,
      currency: FACEBOOK_CONVERSIONS_CONFIG.currency,
      num_items: 1,
      contents: [{
        id: 'lead-submission',
        quantity: 1,
        item_price: 0
      }]
    };

    return sendEventToAPI('Lead', customData);
  }, [sendEventToAPI]);

  // ==============================================
  // GESTÃO DE DADOS DO USUÁRIO
  // ==============================================

  const updateUserData = useCallback((data: Partial<LeadFormData>): void => {
    const updateData: Partial<import('@/types/facebook-conversions').GlobalUserData> = {};

    if (data.name) {
      const nameParts = data.name.trim().split(' ');
      updateData.fn = nameParts[0];
      updateData.ln = nameParts.slice(1).join(' ') || nameParts[0];
    }

    if (data.email) {
      updateData.em = data.email.trim().toLowerCase();
    }

    if (data.phone) {
      updateData.ph = data.phone.replace(/\D/g, '');
    }

    updateGlobalUserData(updateData);
    debugLog('Dados do usuário atualizados', updateData);
  }, []);

  const getUserData = useCallback((): FacebookUserData => {
    const globalData = getGlobalUserData();
    
    return {
      external_id: globalData.external_id ? [globalData.external_id] : undefined,
      em: globalData.em ? [globalData.em] : undefined,
      ph: globalData.ph ? [globalData.ph] : undefined,
      fn: globalData.fn ? [globalData.fn] : undefined,
      ln: globalData.ln ? [globalData.ln] : undefined,
      fbc: globalData.fbc,
      fbp: globalData.fbp,
    };
  }, []);

  // ==============================================
  // UTILIDADES
  // ==============================================

  const debugInfo = useCallback((): void => {
    if (typeof window === 'undefined') return;
    
    console.group('🔍 Facebook Conversions Debug Info');
    console.log('Status:', isReady.current ? '✅ Pronto' : '❌ Não inicializado');
    console.log('Configuração:', FACEBOOK_CONVERSIONS_CONFIG);
    console.log('Dados do usuário:', getGlobalUserData());
    console.log('URL atual:', window.location.href);
    console.log('Parâmetros URL:', getUrlParameters());
    console.groupEnd();
  }, []);

  // ==============================================
  // RETORNO DO HOOK
  // ==============================================

  return {
    // Eventos principais
    sendPageView,
    sendViewContent,
    sendInitiateCheckout,
    sendLead,
    
    // Gestão de dados
    updateUserData,
    getUserData,
    
    // Utilidades
    isReady: isReady.current,
    debugInfo,
  };
};

// ==============================================
// HOOK DE CONVENIÊNCIA PARA AUTO-PAGEVIEW
// ==============================================

/**
 * Hook especializado para envio automático de PageView
 */
export const useAutoPageView = (): void => {
  const { sendPageView } = useFacebookConversions();
  
  useEffect(() => {
    // Enviar PageView após um pequeno delay para garantir inicialização
    const timer = setTimeout(() => {
      sendPageView();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [sendPageView]);
}; 