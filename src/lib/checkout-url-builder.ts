/**
 * @file: checkout-url-builder.ts
 * @responsibility: Construir URLs de checkout com parâmetros de rastreamento
 * @exports: buildCheckoutUrl, buildCheckoutParams
 * @layer: lib
 */

import { getGlobalUserData, getUrlParameters, debugLog } from './facebook-conversions';
import type { LeadFormData, CheckoutUrlParams, UrlParameters } from '@/types/facebook-conversions';

// ==============================================
// CONFIGURAÇÕES
// ==============================================

const CHECKOUT_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL || '',
  trackingParams: {
    externalIdParam: 's1_extid',
    fbpParam: 's2_fbp',
    fbcParam: 's3_fbc',
    fbqParam: 's4_fbq', // Para fbq se necessário
  },
  utmParams: ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'],
  additionalParams: ['gclid', 'msclkid', 'fbclid'] // Outros parâmetros de rastreamento
};

// ==============================================
// CONSTRUTOR PRINCIPAL
// ==============================================

/**
 * Constrói URL completa de checkout com todos os parâmetros
 */
export function buildCheckoutUrl(formData: LeadFormData): string {
  if (!CHECKOUT_CONFIG.baseUrl) {
    console.error('[CHECKOUT URL] URL base não configurada');
    return '#';
  }

  const params = buildCheckoutParams(formData);
  const urlParams = new URLSearchParams();

  // Adicionar todos os parâmetros
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      urlParams.append(key, value);
    }
  });

  const finalUrl = `${CHECKOUT_CONFIG.baseUrl}?${urlParams.toString()}`;
  
  debugLog('URL de checkout construída', {
    baseUrl: CHECKOUT_CONFIG.baseUrl,
    totalParams: Object.keys(params).length,
    finalUrl
  });

  return finalUrl;
}

/**
 * Sanitiza o número de telefone removendo caracteres especiais
 */
function sanitizePhone(phone: string): string {
  if (!phone) return '';
  
  // Remover todos os caracteres não numéricos exceto o '+'
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Se não começar com +55 e tiver 11 dígitos, adicionar +55
  if (!cleaned.startsWith('+55') && cleaned.length === 11) {
    return `+55${cleaned}`;
  }
  
  // Se começar com 55 mas não com +55, adicionar o +
  if (cleaned.startsWith('55') && !cleaned.startsWith('+55')) {
    return `+${cleaned}`;
  }
  
  return cleaned;
}

/**
 * Constrói objeto com todos os parâmetros de checkout
 */
export function buildCheckoutParams(formData: LeadFormData): CheckoutUrlParams {
  const globalData = getGlobalUserData();
  const urlParams = getUrlParameters();

  // Sanitizar telefone para garantir formato correto na URL
  const sanitizedPhone = sanitizePhone(formData.phone);

  // Parâmetros base do cliente (pré-preenchimento)
  const baseParams: CheckoutUrlParams = {
    name: formData.name,
    email: formData.email,
    phone: sanitizedPhone,
    s1_extid: globalData.external_id,
  };

  // Parâmetros de rastreamento Facebook
  const trackingParams: Partial<CheckoutUrlParams> = {};
  
  if (globalData.fbp) {
    trackingParams.s2_fbp = globalData.fbp;
  }
  
  if (globalData.fbc) {
    trackingParams.s3_fbc = globalData.fbc;
  }

  // Parâmetros UTM (preservar da URL atual)
  const utmParams: Partial<CheckoutUrlParams> = {};
  CHECKOUT_CONFIG.utmParams.forEach(param => {
    if (urlParams[param]) {
      utmParams[param as keyof CheckoutUrlParams] = urlParams[param];
    }
  });

  // Combinar todos os parâmetros
  const allParams = {
    ...baseParams,
    ...trackingParams,
    ...utmParams
  };

  debugLog('Parâmetros de checkout construídos', {
    baseParams: {
      ...baseParams,
      phone: `${formData.phone} → ${sanitizedPhone}` // Mostrar transformação
    },
    trackingParams,
    utmParams,
    totalParams: Object.keys(allParams).length
  });

  return allParams;
}

// ==============================================
// FUNÇÕES AUXILIARES
// ==============================================

/**
 * Valida se a URL base de checkout está configurada
 */
export function validateCheckoutConfig(): { isValid: boolean; issues: string[] } {
  const issues: string[] = [];

  if (!CHECKOUT_CONFIG.baseUrl) {
    issues.push('NEXT_PUBLIC_CHECKOUT_URL não configurada');
  }

  if (CHECKOUT_CONFIG.baseUrl && !isValidUrl(CHECKOUT_CONFIG.baseUrl)) {
    issues.push('URL de checkout inválida');
  }

  return {
    isValid: issues.length === 0,
    issues
  };
}

/**
 * Valida se uma string é uma URL válida
 */
function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

/**
 * Adiciona parâmetros customizados à URL (para casos especiais)
 */
export function addCustomParams(
  baseParams: CheckoutUrlParams, 
  customParams: Record<string, string>
): CheckoutUrlParams {
  return {
    ...baseParams,
    ...customParams
  };
}

/**
 * Encoda parâmetros para URL de forma segura
 */
export function encodeParamsForUrl(params: Record<string, any>): Record<string, string> {
  const encoded: Record<string, string> = {};
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      encoded[key] = encodeURIComponent(String(value));
    }
  });
  
  return encoded;
}

/**
 * Constrói URL com encoding seguro
 */
export function buildSecureCheckoutUrl(formData: LeadFormData): string {
  const params = buildCheckoutParams(formData);
  const encodedParams = encodeParamsForUrl(params);
  
  const urlParams = new URLSearchParams();
  Object.entries(encodedParams).forEach(([key, value]) => {
    urlParams.append(key, value);
  });

  return `${CHECKOUT_CONFIG.baseUrl}?${urlParams.toString()}`;
}

// ==============================================
// DEBUGGING E MONITORAMENTO
// ==============================================

/**
 * Mostra informações de debug sobre a construção da URL
 */
export function debugCheckoutUrl(formData: LeadFormData): void {
  if (!process.env.NEXT_PUBLIC_DEBUG_MODE) return;

  console.group('🔗 Checkout URL Debug');
  console.log('Form Data:', formData);
  console.log('Global Data:', getGlobalUserData());
  console.log('URL Params:', getUrlParameters());
  console.log('Final URL:', buildCheckoutUrl(formData));
  console.log('Validation:', validateCheckoutConfig());
  console.groupEnd();
}

/**
 * Testa a construção da URL com dados mock
 */
export function testCheckoutUrl(): string {
  const mockFormData: LeadFormData = {
    name: 'João Silva',
    email: 'joao@exemplo.com',
    phone: '11999999999'
  };

  return buildCheckoutUrl(mockFormData);
} 