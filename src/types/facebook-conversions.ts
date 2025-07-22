/**
 * @file: facebook-conversions.ts
 * @responsibility: Definições de tipos para Facebook Conversions API
 * @exports: Interfaces e types para eventos, userData, customData
 * @layer: types
 */

// ==============================================
// INTERFACES PRINCIPAIS
// ==============================================

export interface FacebookUserData {
  external_id?: string[];
  em?: string[];        // Email (raw - será hasheado pela API)
  ph?: string[];        // Phone (raw - será hasheado pela API)
  fn?: string[];        // First Name (raw - será hasheado pela API)
  ln?: string[];        // Last Name (raw - será hasheado pela API)
  fbc?: string;         // Facebook Click ID
  fbp?: string;         // Facebook Browser ID
}

export interface FacebookCustomData {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  contents?: FacebookContent[];
  value?: number;
  currency?: string;
  num_items?: number;
  lead_source?: string;
  form_name?: string;
  [key: string]: any;
}

export interface FacebookContent {
  id: string;
  quantity: number;
  item_price: number;
}

export interface FacebookEventPayload {
  eventId: string;
  userData: FacebookUserData;
  customData?: FacebookCustomData;
  eventSourceUrl: string;
  urlParameters: Record<string, string>;
  actionSource: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
  userIP?: string; // IP do usuário para enriquecimento geográfico
}

// ==============================================
// TIPOS DE EVENTOS
// ==============================================

export type FacebookEventType = 
  | 'PageView'
  | 'ViewContent' 
  | 'InitiateCheckout'
  | 'Lead'
  | 'Purchase'
  | 'AddToCart'
  | 'CompleteRegistration';

// ==============================================
// CONFIGURAÇÕES E ESTADOS
// ==============================================

export interface FacebookConversionsConfig {
  apiUrl: string;
  pixelId?: string;
  currency: string;
  debugMode: boolean;
  timeout: number;
  retryAttempts: number;
}

export interface GlobalUserData {
  external_id: string;
  fbp?: string;
  fbc?: string;
  em?: string;         // Email raw
  ph?: string;         // Phone raw
  fn?: string;         // First name raw
  ln?: string;         // Last name raw
  lastUpdated: number;
}

export interface UrlParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  [key: string]: string | undefined;
}

// ==============================================
// FORMULÁRIOS E DADOS DE ENTRADA
// ==============================================

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
}

export interface CheckoutData {
  productName?: string;
  category?: string;
  productIds?: string[];
  value?: number;
  currency?: string;
  numItems?: number;
  contents?: FacebookContent[];
}

export interface ViewContentData {
  content_name: string;
  content_category?: string;
  content_ids?: string[];
  value?: number;
  currency?: string;
}

// ==============================================
// RESPOSTAS DA API
// ==============================================

export interface FacebookApiResponse {
  success: boolean;
  message: string;
  fbtrace_id?: string;
  events_received?: number;
  events_dropped?: number;
  error?: {
    code: number;
    message: string;
    type: string;
  };
}

// ==============================================
// CACHE E PERSISTÊNCIA
// ==============================================

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export interface EventCache {
  sentEvents: Set<string>;
  lastPageView: string | null;
  sessionId: string;
}

// ==============================================
// WEBHOOK E CHECKOUT
// ==============================================

export interface WebhookPayload {
  leadData: LeadFormData;
  tracking: {
    external_id: string;
    fbp?: string;
    fbc?: string;
    utm_params: UrlParameters;
    timestamp: string;
    page_url: string;
    session_id: string;
  };
  meta: {
    user_agent: string;
    referrer: string;
    ip_address?: string; // IP do usuário para geo-enrichment
    screen_resolution?: string;
    viewport_size?: string;
    timezone?: string;
    language?: string;
    platform?: string;
    [key: string]: any; // Para propriedades adicionais
  };
}

export interface CheckoutUrlParams {
  name: string;
  email: string;
  phoneac: string; // Código DDD (ex: 21, 11, 47)
  phonenumber: string; // Número sem DDD (ex: 990478137)
  s1_extid: string;
  s2_fbp?: string;
  s3_fbc?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
} 