/**
 * @file: facebook-conversions.ts
 * @responsibility: Utilitários core para Facebook Conversions API
 * @exports: Funções para cookies, UUID, parâmetros, gestão de dados globais
 * @layer: lib
 */

import type { 
  GlobalUserData, 
  UrlParameters, 
  FacebookConversionsConfig,
  CacheEntry,
  EventCache
} from '@/types/facebook-conversions';

// ==============================================
// CONFIGURAÇÃO GLOBAL
// ==============================================

export const FACEBOOK_CONVERSIONS_CONFIG: FacebookConversionsConfig = {
  apiUrl: process.env.NEXT_PUBLIC_FB_CONVERSIONS_API_URL || '',
  pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  currency: process.env.NEXT_PUBLIC_DEFAULT_CURRENCY || 'BRL',
  debugMode: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true',
  timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000'),
  retryAttempts: parseInt(process.env.NEXT_PUBLIC_RETRY_ATTEMPTS || '3'),
};

// ==============================================
// UTILITÁRIOS DE COOKIES
// ==============================================

/**
 * Obtém o valor de um cookie específico
 */
export function getCookie(name: string): string | undefined {
  if (typeof window === 'undefined') return undefined;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
}

/**
 * Define um cookie com configurações otimizadas
 */
export function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof window === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
}

/**
 * Remove um cookie específico
 */
export function removeCookie(name: string): void {
  if (typeof window === 'undefined') return;
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
}

// ==============================================
// GERAÇÃO DE IDENTIFICADORES
// ==============================================

/**
 * Gera UUID v4 compatível com navegadores antigos
 */
export function generateUUID(): string {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }
  
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Gera ID de sessão único
 */
export function generateSessionId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substr(2, 9);
  return `sess_${timestamp}_${randomPart}`;
}

/**
 * Obtém ou gera external_id persistente
 */
export function getExternalId(): string {
  let externalId = getCookie('fb_external_id');
  
  if (!externalId) {
    externalId = generateUUID();
    setCookie('fb_external_id', externalId, 365);
    debugLog('Novo external_id gerado', { externalId });
  }
  
  return externalId;
}

// ==============================================
// PARÂMETROS DE URL E RASTREAMENTO
// ==============================================

/**
 * Extrai todos os parâmetros da URL atual
 */
export function getUrlParameters(): UrlParameters {
  if (typeof window === 'undefined') return {};
  
  const params: UrlParameters = {};
  const urlParams = new URLSearchParams(window.location.search);
  
  for (const [key, value] of urlParams) {
    params[key] = value;
  }
  
  return params;
}

/**
 * Obtém e processa fbclid da URL
 */
export function getFbclid(): string | undefined {
  const urlParams = getUrlParameters();
  return urlParams.fbclid;
}

/**
 * Atualiza fbc baseado em fbclid da URL
 */
export function updateFbcFromUrl(): string | undefined {
  const fbclid = getFbclid();
  
  if (fbclid) {
    const timestamp = Math.floor(Date.now() / 1000);
    const fbc = `fb.1.${timestamp}.${fbclid}`;
    setCookie('_fbc', fbc, 90); // Facebook recomenda 90 dias
    debugLog('FBC atualizado via fbclid', { fbclid, fbc });
    return fbc;
  }
  
  return getCookie('_fbc');
}

// ==============================================
// GESTÃO DE DADOS GLOBAIS DO USUÁRIO
// ==============================================

let globalUserDataCache: GlobalUserData | null = null;

/**
 * Inicializa dados globais do usuário
 */
export function initializeGlobalUserData(): GlobalUserData {
  if (globalUserDataCache) {
    return globalUserDataCache;
  }
  
  const external_id = getExternalId();
  const fbp = getCookie('_fbp');
  const fbc = updateFbcFromUrl() || getCookie('_fbc');
  
  globalUserDataCache = {
    external_id,
    fbp,
    fbc,
    em: undefined,
    ph: undefined,
    fn: undefined,
    ln: undefined,
    lastUpdated: Date.now(),
  };
  
  // Tentar carregar dados salvos do localStorage
  loadUserDataFromStorage();
  
  debugLog('Dados globais inicializados', globalUserDataCache);
  return globalUserDataCache;
}

/**
 * Atualiza dados globais do usuário
 */
export function updateGlobalUserData(newData: Partial<GlobalUserData>): GlobalUserData {
  if (!globalUserDataCache) {
    initializeGlobalUserData();
  }
  
  globalUserDataCache = {
    ...globalUserDataCache!,
    ...newData,
    lastUpdated: Date.now(),
  };
  
  // Salvar no localStorage
  saveUserDataToStorage();
  
  debugLog('Dados globais atualizados', globalUserDataCache);
  return globalUserDataCache;
}

/**
 * Obtém dados globais atuais do usuário
 */
export function getGlobalUserData(): GlobalUserData {
  if (!globalUserDataCache) {
    return initializeGlobalUserData();
  }
  return globalUserDataCache;
}

// ==============================================
// PERSISTÊNCIA NO LOCALSTORAGE
// ==============================================

const STORAGE_KEY = 'fb_user_data';
const CACHE_TTL = parseInt(process.env.NEXT_PUBLIC_USER_DATA_CACHE_TTL || '86400000'); // 24h

/**
 * Salva dados do usuário no localStorage
 */
function saveUserDataToStorage(): void {
  if (typeof window === 'undefined' || !globalUserDataCache) return;
  
  try {
    const cacheEntry: CacheEntry<GlobalUserData> = {
      data: globalUserDataCache,
      timestamp: Date.now(),
      ttl: CACHE_TTL,
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cacheEntry));
    debugLog('Dados salvos no localStorage', cacheEntry);
  } catch (error) {
    console.error('[FB CONVERSIONS] Erro ao salvar no localStorage:', error);
  }
}

/**
 * Carrega dados do usuário do localStorage
 */
function loadUserDataFromStorage(): void {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    
    const cacheEntry: CacheEntry<GlobalUserData> = JSON.parse(stored);
    const isExpired = Date.now() - cacheEntry.timestamp > cacheEntry.ttl;
    
    if (isExpired) {
      localStorage.removeItem(STORAGE_KEY);
      debugLog('Cache expirado, removido do localStorage');
      return;
    }
    
    // Merge com dados atuais (priorizar cookies atuais)
    if (globalUserDataCache) {
      globalUserDataCache = {
        ...cacheEntry.data,
        ...globalUserDataCache,
        lastUpdated: Date.now(),
      };
      debugLog('Dados mesclados do localStorage', globalUserDataCache);
    }
  } catch (error) {
    console.error('[FB CONVERSIONS] Erro ao carregar do localStorage:', error);
    localStorage.removeItem(STORAGE_KEY);
  }
}

// ==============================================
// CACHE DE EVENTOS
// ==============================================

let eventCache: EventCache | null = null;

/**
 * Inicializa cache de eventos
 */
export function initializeEventCache(): EventCache {
  if (eventCache) return eventCache;
  
  eventCache = {
    sentEvents: new Set<string>(),
    lastPageView: null,
    sessionId: generateSessionId(),
  };
  
  return eventCache;
}

/**
 * Verifica se um evento já foi enviado
 */
export function shouldSendEvent(eventType: string, identifier: string): boolean {
  const cache = initializeEventCache();
  const key = `${eventType}_${identifier}`;
  
  if (cache.sentEvents.has(key)) {
    debugLog('Evento já enviado nesta sessão', { eventType, identifier });
    return false;
  }
  
  cache.sentEvents.add(key);
  return true;
}

/**
 * Marca PageView como enviado
 */
export function markPageViewSent(url: string): void {
  const cache = initializeEventCache();
  cache.lastPageView = url;
  cache.sentEvents.add(`PageView_${url}`);
}

// ==============================================
// UTILITÁRIOS DE DEBUG
// ==============================================

/**
 * Log de debug condicional
 */
export function debugLog(message: string, data?: any): void {
  if (!FACEBOOK_CONVERSIONS_CONFIG.debugMode) return;
  
  const timestamp = new Date().toISOString();
  const prefix = `[FB CONVERSIONS] ${timestamp}`;
  
  console.log(`${prefix} ${message}`, data || '');
}

/**
 * Validação de configuração
 */
export function validateConfiguration(): { isValid: boolean; issues: string[] } {
  const issues: string[] = [];
  
  if (!FACEBOOK_CONVERSIONS_CONFIG.apiUrl) {
    issues.push('NEXT_PUBLIC_FB_CONVERSIONS_API_URL não configurada');
  }
  
  const userData = getGlobalUserData();
  if (!userData.external_id) {
    issues.push('external_id não foi gerado');
  }
  
  if (!userData.fbp && !userData.fbc) {
    issues.push('Nenhum identificador Facebook encontrado (fbp/fbc)');
  }
  
  return {
    isValid: issues.length === 0,
    issues,
  };
}

/**
 * Console de debug avançado
 */
export const FBConversionsDebug = {
  enabled: FACEBOOK_CONVERSIONS_CONFIG.debugMode,
  
  info: (message: string, data?: any) => debugLog(`INFO: ${message}`, data),
  warn: (message: string, data?: any) => debugLog(`WARN: ${message}`, data),
  error: (message: string, data?: any) => debugLog(`ERROR: ${message}`, data),
  
  showUserData: () => {
    if (typeof window !== 'undefined') {
      console.table(getGlobalUserData());
    }
  },
  
  showConfig: () => {
    if (typeof window !== 'undefined') {
      console.table(FACEBOOK_CONVERSIONS_CONFIG);
    }
  },
  
  validate: () => {
    const validation = validateConfiguration();
    if (validation.isValid) {
      debugLog('✅ Configuração válida');
    } else {
      debugLog('❌ Problemas encontrados:', validation.issues);
    }
    return validation;
  },
};

// Expor debug no objeto global (apenas em desenvolvimento)
if (typeof window !== 'undefined' && FACEBOOK_CONVERSIONS_CONFIG.debugMode) {
  (window as any).FBConversionsDebug = FBConversionsDebug;
}

// ==============================================
// INICIALIZAÇÃO AUTOMÁTICA
// ==============================================

/**
 * Auto-inicialização quando o módulo é carregado
 */
if (typeof window !== 'undefined') {
  // Inicializar dados globais
  initializeGlobalUserData();
  
  // Log de inicialização
  if (FACEBOOK_CONVERSIONS_CONFIG.debugMode) {
    console.log(
      '%c🚀 Facebook Conversions API Inicializado', 
      'background: #4267B2; color: white; padding: 8px 12px; border-radius: 4px; font-weight: bold;'
    );
    console.log('Use FBConversionsDebug.validate() para verificar configuração');
    console.log('Use FBConversionsDebug.showUserData() para ver dados do usuário');
  }
} 