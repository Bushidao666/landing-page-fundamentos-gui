/**
 * @file: FacebookPixel.tsx
 * @responsibility: Componente para carregar e configurar Facebook Pixel
 * @exports: FacebookPixel, PixelEvents
 * @layer: components/analytics
 */

"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import { debugLog } from '@/lib/facebook-conversions';

// ==============================================
// CONFIGURAÇÕES
// ==============================================

const PIXEL_CONFIG = {
  pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
  debugMode: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true',
};

// ==============================================
// COMPONENTE PRINCIPAL
// ==============================================

export default function FacebookPixel() {
  // Verificar se o Pixel ID está configurado
  if (!PIXEL_CONFIG.pixelId) {
    if (PIXEL_CONFIG.debugMode) {
      console.warn('[FACEBOOK PIXEL] NEXT_PUBLIC_FB_PIXEL_ID não configurado');
    }
    return null;
  }

  const handlePixelLoad = () => {
    debugLog('Facebook Pixel carregado com sucesso', {
      pixelId: PIXEL_CONFIG.pixelId,
      debugMode: PIXEL_CONFIG.debugMode
    });

    // Configurar modo debug se ativo
    if (PIXEL_CONFIG.debugMode && typeof window !== 'undefined' && window.fbq) {
      window.fbq('set', 'debug', true);
      debugLog('Facebook Pixel debug mode ativado');
    }

    // Inicializar Pixel
    window.fbq('init', PIXEL_CONFIG.pixelId);
    
    // Enviar PageView inicial (será deduplicado com CAPI)
    window.fbq('track', 'PageView');
    
    debugLog('Facebook Pixel inicializado', { pixelId: PIXEL_CONFIG.pixelId });
  };

  const handlePixelError = (error: any) => {
    console.error('[FACEBOOK PIXEL] Erro ao carregar:', error);
  };

  return (
    <>
      {/* Facebook Pixel Base Script */}
      <Script
        id="facebook-pixel-base"
        strategy="afterInteractive"
        onLoad={handlePixelLoad}
        onError={handlePixelError}
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `
        }}
      />

      {/* NoScript Fallback */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_CONFIG.pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

// ==============================================
// EXTENSÃO DO WINDOW OBJECT
// ==============================================

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// ==============================================
// EVENTOS DO PIXEL
// ==============================================

export class PixelEvents {
  /**
   * Verifica se o Pixel está disponível
   */
  static isAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.fbq && !!PIXEL_CONFIG.pixelId;
  }

  /**
   * Envia evento para o Pixel com deduplicação
   */
  static track(eventName: string, parameters: any = {}, eventId?: string): void {
    if (!this.isAvailable()) {
      debugLog(`Pixel não disponível para evento ${eventName}`);
      return;
    }

    try {
      const pixelParams = { ...parameters };
      
      // Adicionar eventID para deduplicação com CAPI
      if (eventId) {
        pixelParams.eventID = eventId;
      }

      window.fbq('track', eventName, pixelParams);
      
      debugLog(`Pixel event enviado: ${eventName}`, {
        eventId,
        parameters: pixelParams
      });
    } catch (error) {
      console.error(`[PIXEL] Erro ao enviar ${eventName}:`, error);
    }
  }

  /**
   * Eventos específicos com parâmetros otimizados
   */
  static trackPageView(eventId?: string): void {
    this.track('PageView', {}, eventId);
  }

  static trackViewContent(data: {
    content_name: string;
    content_category?: string;
    content_ids?: string[];
    value?: number;
    currency?: string;
  }, eventId?: string): void {
    const pixelParams = {
      content_name: data.content_name,
      content_category: data.content_category,
      content_ids: data.content_ids,
      value: data.value,
      currency: data.currency || 'BRL'
    };

    this.track('ViewContent', pixelParams, eventId);
  }

  static trackLead(data: {
    content_name?: string;
    content_category?: string;
    value?: number;
    currency?: string;
  }, eventId?: string): void {
    const pixelParams = {
      content_name: data.content_name || 'Lead',
      content_category: data.content_category || 'Lead Generation',
      value: data.value || 0,
      currency: data.currency || 'BRL'
    };

    this.track('Lead', pixelParams, eventId);
  }

  static trackInitiateCheckout(data: {
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
    value: number;
    currency?: string;
    num_items?: number;
  }, eventId?: string): void {
    const pixelParams = {
      content_name: data.content_name,
      content_category: data.content_category,
      content_ids: data.content_ids,
      value: data.value,
      currency: data.currency || 'BRL',
      num_items: data.num_items || 1
    };

    this.track('InitiateCheckout', pixelParams, eventId);
  }

  /**
   * Configura parâmetros avançados do Pixel
   */
  static configure(options: {
    autoConfig?: boolean;
    debug?: boolean;
    [key: string]: any;
  }): void {
    if (!this.isAvailable()) return;

    try {
      Object.entries(options).forEach(([key, value]) => {
        window.fbq('set', key, value);
      });

      debugLog('Pixel configurado', options);
    } catch (error) {
      console.error('[PIXEL] Erro na configuração:', error);
    }
  }
}

// ==============================================
// VALIDAÇÃO DE CONFIGURAÇÃO
// ==============================================

export function validatePixelConfig(): { isValid: boolean; issues: string[] } {
  const issues: string[] = [];

  if (!PIXEL_CONFIG.pixelId) {
    issues.push('NEXT_PUBLIC_FB_PIXEL_ID não configurado');
  }

  if (PIXEL_CONFIG.pixelId && !/^\d+$/.test(PIXEL_CONFIG.pixelId)) {
    issues.push('Pixel ID deve conter apenas números');
  }

  return {
    isValid: issues.length === 0,
    issues
  };
}

// ==============================================
// DEBUG TOOLS
// ==============================================

export const PixelDebug = {
  /**
   * Mostra informações do Pixel
   */
  info: () => {
    if (!PIXEL_CONFIG.debugMode) return;

    console.group('📊 Facebook Pixel Debug');
    console.log('Pixel ID:', PIXEL_CONFIG.pixelId || '[NÃO CONFIGURADO]');
    console.log('Disponível:', PixelEvents.isAvailable());
    console.log('Debug Mode:', PIXEL_CONFIG.debugMode);
    console.log('Validation:', validatePixelConfig());
    console.groupEnd();
  },

  /**
   * Testa evento do Pixel
   */
  testEvent: (eventName: string = 'Test') => {
    if (!PIXEL_CONFIG.debugMode) return;

    PixelEvents.track(eventName, {
      test: true,
      timestamp: Date.now()
    }, `test-${Date.now()}`);
  }
};

// Expor debug no window para desenvolvimento
if (typeof window !== 'undefined' && PIXEL_CONFIG.debugMode) {
  (window as any).PixelDebug = PixelDebug;
} 