/**
 * @file: webhook-sender.ts
 * @responsibility: Envio seguro de dados para webhook com retry e monitoramento
 * @exports: sendToWebhook, WebhookSender class
 * @layer: lib
 */

import { getGlobalUserData, getUrlParameters, debugLog, generateSessionId } from './facebook-conversions';
import { getUserIP } from './ip-detector';
import type { LeadFormData, WebhookPayload } from '@/types/facebook-conversions';

// ==============================================
// CONFIGURAÇÕES
// ==============================================

const WEBHOOK_CONFIG = {
  url: process.env.NEXT_PUBLIC_WEBHOOK_URL || '',
  timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000'),
  retryAttempts: parseInt(process.env.NEXT_PUBLIC_RETRY_ATTEMPTS || '3'),
  retryDelay: 1000, // 1 segundo
  maxRetryDelay: 5000, // 5 segundos
};

// ==============================================
// INTERFACES
// ==============================================

interface WebhookResponse {
  success: boolean;
  message?: string;
  id?: string;
  timestamp?: string;
  error?: string;
}

interface WebhookSendOptions {
  retries?: number;
  timeout?: number;
  includeMetadata?: boolean;
}

// ==============================================
// FUNÇÃO PRINCIPAL DE ENVIO
// ==============================================

/**
 * Envia dados do lead para webhook com retry automático
 */
export async function sendToWebhook(
  formData: LeadFormData,
  options: WebhookSendOptions = {}
): Promise<WebhookResponse> {
  
  if (!WEBHOOK_CONFIG.url) {
    const error = 'URL do webhook não configurada';
    debugLog('ERRO: ' + error);
    return { success: false, error };
  }

  const payload = await buildWebhookPayload(formData, options.includeMetadata !== false);
  
  debugLog('Enviando dados para webhook', {
    url: WEBHOOK_CONFIG.url,
    payload: { 
      ...payload, 
      leadData: { ...payload.leadData, phone: '[REDACTED]' },
      meta: { ...payload.meta, ip_address: payload.meta.ip_address ? '[CAPTURED]' : undefined }
    }
  });

  return sendWithRetry(payload, options.retries || WEBHOOK_CONFIG.retryAttempts);
}

// ==============================================
// CONSTRUÇÃO DO PAYLOAD
// ==============================================

/**
 * Constrói payload completo para envio ao webhook
 */
async function buildWebhookPayload(formData: LeadFormData, includeMetadata: boolean = true): Promise<WebhookPayload> {
  const globalData = getGlobalUserData();
  const urlParams = getUrlParameters();

  // Capturar IP do usuário
  const userIP = await getUserIP();

  const payload: WebhookPayload = {
    leadData: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    },
    tracking: {
      external_id: globalData.external_id,
      fbp: globalData.fbp,
      fbc: globalData.fbc,
      utm_params: urlParams,
      timestamp: new Date().toISOString(),
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      session_id: generateSessionId()
    },
    meta: {
      user_agent: typeof window !== 'undefined' ? navigator.userAgent : '',
      referrer: typeof window !== 'undefined' ? document.referrer : '',
      ip_address: userIP || undefined, // IP do usuário para geo-enrichment
    }
  };

  // Adicionar metadados opcionais
  if (includeMetadata && typeof window !== 'undefined') {
    payload.meta = {
      ...payload.meta,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      platform: navigator.platform,
    };
  }

  return payload;
}

// ==============================================
// RETRY LOGIC
// ==============================================

/**
 * Envia com retry automático em caso de falha
 */
async function sendWithRetry(payload: WebhookPayload, maxRetries: number): Promise<WebhookResponse> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      debugLog(`Tentativa ${attempt}/${maxRetries} de envio ao webhook`);
      
      const response = await fetch(WEBHOOK_CONFIG.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Timestamp': new Date().toISOString(),
          'X-Attempt': attempt.toString(),
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(WEBHOOK_CONFIG.timeout)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

             const result: WebhookResponse = await response.json();
       
       debugLog('✅ Webhook enviado com sucesso', {
         attempt,
         response: result
       });

       return { ...result, success: true };

    } catch (error) {
      lastError = error as Error;
      
      debugLog(`❌ Erro na tentativa ${attempt}:`, error);

      // Se não é a última tentativa, aguardar antes de tentar novamente
      if (attempt < maxRetries) {
        const delay = Math.min(
          WEBHOOK_CONFIG.retryDelay * Math.pow(2, attempt - 1), // Exponential backoff
          WEBHOOK_CONFIG.maxRetryDelay
        );
        
        debugLog(`Aguardando ${delay}ms antes da próxima tentativa...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // Todas as tentativas falharam
  const errorMessage = `Falha após ${maxRetries} tentativas: ${lastError?.message}`;
  debugLog('❌ Webhook falhou completamente', { error: errorMessage });
  
  return {
    success: false,
    error: errorMessage
  };
}

// ==============================================
// CLASSE WEBHOOK SENDER (AVANÇADA)
// ==============================================

/**
 * Classe para gerenciamento avançado de webhooks
 */
export class WebhookSender {
  private queue: WebhookPayload[] = [];
  private isProcessing: boolean = false;
  private failedAttempts: number = 0;

  constructor(
    private webhookUrl: string = WEBHOOK_CONFIG.url,
    private maxRetries: number = WEBHOOK_CONFIG.retryAttempts
  ) {}

  /**
   * Adiciona payload à fila de envio
   */
  async enqueue(formData: LeadFormData): Promise<void> {
    const payload = await buildWebhookPayload(formData);
    this.queue.push(payload);
    
    if (!this.isProcessing) {
      this.processQueue();
    }
  }

  /**
   * Processa fila de webhooks
   */
  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.queue.length === 0) return;
    
    this.isProcessing = true;

    while (this.queue.length > 0) {
      const payload = this.queue.shift()!;
      
      try {
        const result = await sendWithRetry(payload, this.maxRetries);
        
        if (result.success) {
          this.failedAttempts = 0; // Reset contador de falhas
        } else {
          this.failedAttempts++;
          // Recolocar na fila se falhar
          this.queue.unshift(payload);
          break;
        }
      } catch (error) {
        debugLog('Erro no processamento da fila', error);
        this.failedAttempts++;
        break;
      }
    }

    this.isProcessing = false;
  }

  /**
   * Obtém status da fila
   */
  getStatus(): { queueSize: number; isProcessing: boolean; failedAttempts: number } {
    return {
      queueSize: this.queue.length,
      isProcessing: this.isProcessing,
      failedAttempts: this.failedAttempts
    };
  }

  /**
   * Limpa a fila
   */
  clearQueue(): void {
    this.queue = [];
    this.isProcessing = false;
    this.failedAttempts = 0;
  }
}

// ==============================================
// INSTÂNCIA GLOBAL DO SENDER
// ==============================================

let globalWebhookSender: WebhookSender | null = null;

/**
 * Obtém instância global do webhook sender
 */
export function getWebhookSender(): WebhookSender {
  if (!globalWebhookSender) {
    globalWebhookSender = new WebhookSender();
  }
  return globalWebhookSender;
}

// ==============================================
// UTILITÁRIOS DE VALIDAÇÃO
// ==============================================

/**
 * Valida configuração do webhook
 */
export function validateWebhookConfig(): { isValid: boolean; issues: string[] } {
  const issues: string[] = [];

  if (!WEBHOOK_CONFIG.url) {
    issues.push('NEXT_PUBLIC_WEBHOOK_URL não configurada');
  }

  if (WEBHOOK_CONFIG.url && !isValidUrl(WEBHOOK_CONFIG.url)) {
    issues.push('URL do webhook inválida');
  }

  if (WEBHOOK_CONFIG.timeout < 1000) {
    issues.push('Timeout muito baixo (mínimo 1000ms)');
  }

  return {
    isValid: issues.length === 0,
    issues
  };
}

/**
 * Testa conectividade com o webhook
 */
export async function testWebhookConnection(): Promise<boolean> {
  if (!WEBHOOK_CONFIG.url) return false;

  try {
    const testPayload = {
      test: true,
      timestamp: new Date().toISOString()
    };

    const response = await fetch(WEBHOOK_CONFIG.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testPayload),
      signal: AbortSignal.timeout(5000)
    });

    return response.ok;
  } catch {
    return false;
  }
}

// ==============================================
// FUNÇÕES AUXILIARES
// ==============================================

function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
}

/**
 * Debug das configurações do webhook
 */
export function debugWebhookConfig(): void {
  if (!process.env.NEXT_PUBLIC_DEBUG_MODE) return;

  console.group('📡 Webhook Configuration Debug');
  console.log('URL:', WEBHOOK_CONFIG.url || '[NÃO CONFIGURADA]');
  console.log('Timeout:', WEBHOOK_CONFIG.timeout + 'ms');
  console.log('Max Retries:', WEBHOOK_CONFIG.retryAttempts);
  console.log('Validation:', validateWebhookConfig());
  console.groupEnd();
} 