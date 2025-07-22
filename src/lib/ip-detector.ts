/**
 * @file: ip-detector.ts
 * @responsibility: Captura IP address do usuário para envio à API de conversões
 * @exports: getUserIP, IPDetector class
 * @layer: lib
 */

import { debugLog } from './facebook-conversions';

// ==============================================
// CONFIGURAÇÕES
// ==============================================

const IP_SERVICES = [
  {
    name: 'ipify',
    url: 'https://api.ipify.org?format=json',
    timeout: 3000,
    parseResponse: (data: any) => data.ip
  },
  {
    name: 'ipapi',
    url: 'https://ipapi.co/json/',
    timeout: 3000,
    parseResponse: (data: any) => data.ip
  },
  {
    name: 'ip-api',
    url: 'http://ip-api.com/json/',
    timeout: 3000,
    parseResponse: (data: any) => data.query
  },
  {
    name: 'jsonip',
    url: 'https://jsonip.com/',
    timeout: 3000,
    parseResponse: (data: any) => data.ip
  }
];

// ==============================================
// CACHE DE IP
// ==============================================

interface IPCacheEntry {
  ip: string;
  timestamp: number;
  ttl: number;
}

const IP_CACHE_KEY = 'user_ip_cache';
const IP_CACHE_TTL = 30 * 60 * 1000; // 30 minutos

/**
 * Salva IP no cache
 */
function cacheIP(ip: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const cacheEntry: IPCacheEntry = {
      ip,
      timestamp: Date.now(),
      ttl: IP_CACHE_TTL
    };
    
    localStorage.setItem(IP_CACHE_KEY, JSON.stringify(cacheEntry));
    debugLog('IP cached', { ip, ttl: IP_CACHE_TTL });
  } catch (error) {
    debugLog('Erro ao cachear IP', error);
  }
}

/**
 * Obtém IP do cache se válido
 */
function getCachedIP(): string | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = localStorage.getItem(IP_CACHE_KEY);
    if (!cached) return null;
    
    const cacheEntry: IPCacheEntry = JSON.parse(cached);
    const isExpired = Date.now() - cacheEntry.timestamp > cacheEntry.ttl;
    
    if (isExpired) {
      localStorage.removeItem(IP_CACHE_KEY);
      debugLog('Cache de IP expirado');
      return null;
    }
    
    debugLog('IP do cache utilizado', { ip: cacheEntry.ip });
    return cacheEntry.ip;
  } catch (error) {
    debugLog('Erro ao ler cache de IP', error);
    localStorage.removeItem(IP_CACHE_KEY);
    return null;
  }
}

// ==============================================
// DETECÇÃO DE IP
// ==============================================

/**
 * Tenta obter IP de um serviço específico
 */
async function fetchIPFromService(service: typeof IP_SERVICES[0]): Promise<string | null> {
  try {
    debugLog(`Tentando obter IP de ${service.name}`, service.url);
    
    const response = await fetch(service.url, {
      method: 'GET',
      signal: AbortSignal.timeout(service.timeout),
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const ip = service.parseResponse(data);
    
    if (!ip || !isValidIP(ip)) {
      throw new Error('IP inválido recebido');
    }

    debugLog(`✅ IP obtido de ${service.name}`, { ip });
    return ip;
  } catch (error) {
    debugLog(`❌ Falha ao obter IP de ${service.name}`, error);
    return null;
  }
}

/**
 * Valida se é um IP válido
 */
function isValidIP(ip: string): boolean {
  // IPv4 regex
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  
  // IPv6 regex (básico)
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

/**
 * Tenta obter IP de múltiplos serviços em paralelo
 */
async function detectIPParallel(): Promise<string | null> {
  try {
    debugLog('Iniciando detecção paralela de IP');
    
    // Criar promises para todos os serviços
    const promises = IP_SERVICES.map(service => fetchIPFromService(service));
    
    // Promise.race retorna o primeiro que resolver
    const ip = await Promise.race(promises);
    
    if (ip) {
      debugLog('✅ IP detectado com sucesso (paralelo)', { ip });
      cacheIP(ip);
      return ip;
    }
    
    throw new Error('Nenhum serviço retornou IP válido');
    
  } catch (error) {
    debugLog('❌ Falha na detecção paralela de IP', error);
    return null;
  }
}

/**
 * Tenta obter IP de serviços em sequência (fallback)
 */
async function detectIPSequential(): Promise<string | null> {
  debugLog('Iniciando detecção sequencial de IP (fallback)');
  
  for (const service of IP_SERVICES) {
    const ip = await fetchIPFromService(service);
    if (ip) {
      cacheIP(ip);
      return ip;
    }
  }
  
  debugLog('❌ Todos os serviços falharam na detecção sequencial');
  return null;
}

// ==============================================
// API PRINCIPAL
// ==============================================

/**
 * Obtém IP do usuário (principal função pública)
 */
export async function getUserIP(): Promise<string | null> {
  // 1. Verificar cache primeiro
  const cachedIP = getCachedIP();
  if (cachedIP) return cachedIP;
  
  // 2. Tentar detecção paralela
  const parallelIP = await detectIPParallel();
  if (parallelIP) return parallelIP;
  
  // 3. Fallback para detecção sequencial
  const sequentialIP = await detectIPSequential();
  if (sequentialIP) return sequentialIP;
  
  // 4. Último fallback - undefined será tratado pelo servidor
  debugLog('⚠️ Não foi possível detectar IP do usuário');
  return null;
}

// ==============================================
// CLASSE AVANÇADA (OPCIONAL)
// ==============================================

/**
 * Classe para gerenciamento avançado de detecção de IP
 */
export class IPDetector {
  private static instance: IPDetector | null = null;
  private ipPromise: Promise<string | null> | null = null;
  private lastIP: string | null = null;

  private constructor() {}

  /**
   * Singleton instance
   */
  static getInstance(): IPDetector {
    if (!IPDetector.instance) {
      IPDetector.instance = new IPDetector();
    }
    return IPDetector.instance;
  }

  /**
   * Obtém IP com cache de promise (evita múltiplas chamadas simultâneas)
   */
  async getIP(): Promise<string | null> {
    // Se já tem uma promise em andamento, retorna ela
    if (this.ipPromise) {
      return this.ipPromise;
    }

    // Se já tem IP cached, retorna
    if (this.lastIP) {
      return this.lastIP;
    }

    // Criar nova promise de detecção
    this.ipPromise = getUserIP();
    
    try {
      this.lastIP = await this.ipPromise;
      return this.lastIP;
    } finally {
      // Limpar promise para permitir novas tentativas
      this.ipPromise = null;
    }
  }

  /**
   * Força refresh do IP
   */
  async refreshIP(): Promise<string | null> {
    this.lastIP = null;
    this.ipPromise = null;
    
    // Limpar cache
    if (typeof window !== 'undefined') {
      localStorage.removeItem(IP_CACHE_KEY);
    }
    
    return this.getIP();
  }

  /**
   * Obtém último IP conhecido
   */
  getLastKnownIP(): string | null {
    return this.lastIP || getCachedIP();
  }
}

// ==============================================
// UTILIDADES DE DEBUG
// ==============================================

/**
 * Testa todos os serviços de IP
 */
export async function testAllIPServices(): Promise<void> {
  if (!process.env.NEXT_PUBLIC_DEBUG_MODE) return;

  console.group('🌐 Teste de Serviços de IP');
  
  for (const service of IP_SERVICES) {
    const ip = await fetchIPFromService(service);
    console.log(`${service.name}:`, ip || '❌ Falhou');
  }
  
  console.groupEnd();
}

/**
 * Debug de informações de IP
 */
export function debugIPInfo(): void {
  if (!process.env.NEXT_PUBLIC_DEBUG_MODE) return;

  console.group('🔍 IP Detection Debug');
  console.log('Cached IP:', getCachedIP());
  console.log('Cache TTL:', IP_CACHE_TTL + 'ms');
  console.log('Services:', IP_SERVICES.length);
  console.log('Last Detection:', IPDetector.getInstance().getLastKnownIP());
  console.groupEnd();
}

// ==============================================
// INICIALIZAÇÃO AUTOMÁTICA
// ==============================================

/**
 * Pre-aquece o cache de IP ao carregar o módulo
 */
if (typeof window !== 'undefined') {
  // Pré-carregar IP em background
  setTimeout(() => {
    const detector = IPDetector.getInstance();
    detector.getIP().catch(() => {
      // Silencioso - apenas pre-aquecimento
    });
  }, 1000); // 1s após carregar a página
} 