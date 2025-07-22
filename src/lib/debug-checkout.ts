/**
 * @file: debug-checkout.ts
 * @responsibility: Utilitários de debug para checkout
 * @exports: DebugCheckout
 * @layer: lib/debug
 */

import { buildCheckoutUrl, buildCheckoutParams } from './checkout-url-builder';
import type { LeadFormData } from '@/types/facebook-conversions';

// ==============================================
// DEBUG UTILITIES
// ==============================================

export const DebugCheckout = {
  /**
   * Testa a construção de URL com dados de exemplo
   */
  testUrlBuilder: (sampleData?: Partial<LeadFormData>) => {
    const testData: LeadFormData = {
      name: sampleData?.name || 'João Silva',
      email: sampleData?.email || 'joao@email.com',
      phone: sampleData?.phone || '(11) 99999-9999'
    };

    console.group('🔗 DEBUG: Checkout URL Builder');
    console.log('📋 Dados de entrada:', testData);
    
    const params = buildCheckoutParams(testData);
    console.log('⚙️ Parâmetros construídos:', params);
    
    const url = buildCheckoutUrl(testData);
    console.log('🌐 URL final:', url);
    
    // Extrair e mostrar parâmetros da URL
    if (url !== '#') {
      const urlObj = new URL(url);
      const urlParams = Object.fromEntries(urlObj.searchParams.entries());
      console.log('📊 Parâmetros na URL:', urlParams);
      
             // Verificar se telefone está presente (formato correto)
       if (urlParams.phoneac && urlParams.phonenumber) {
         console.log('✅ Telefone encontrado na URL:');
         console.log(`   📞 DDD: ${urlParams.phoneac}`);
         console.log(`   📱 Número: ${urlParams.phonenumber}`);
       } else {
         console.warn('❌ Telefone NÃO encontrado na URL!');
         console.warn(`   phoneac: ${urlParams.phoneac || 'AUSENTE'}`);
         console.warn(`   phonenumber: ${urlParams.phonenumber || 'AUSENTE'}`);
       }
    }
    
    console.groupEnd();
    return { testData, params, url };
  },

  /**
   * Valida se a URL de checkout está correta
   */
  validateCheckoutUrl: (url: string) => {
    console.group('✅ VALIDAÇÃO: Checkout URL');
    
    if (!url || url === '#') {
      console.error('❌ URL inválida ou não configurada');
      console.groupEnd();
      return false;
    }

    try {
      const urlObj = new URL(url);
      const params = Object.fromEntries(urlObj.searchParams.entries());
      
      console.log('🌐 URL válida:', url);
      console.log('📋 Parâmetros encontrados:');
      
             // Verificar parâmetros essenciais
       const essentialParams = ['name', 'email', 'phoneac', 'phonenumber'];
       let allEssentialPresent = true;
       
       essentialParams.forEach(param => {
         if (params[param]) {
           console.log(`✅ ${param}: ${params[param]}`);
         } else {
           console.warn(`❌ ${param}: AUSENTE`);
           allEssentialPresent = false;
         }
       });

      // Verificar parâmetros de rastreamento
      const trackingParams = ['s1_extid', 's2_fbp', 's3_fbc'];
      trackingParams.forEach(param => {
        if (params[param]) {
          console.log(`🎯 ${param}: ${params[param]}`);
        }
      });

      // Verificar UTMs
      const utmParams = Object.keys(params).filter(key => key.startsWith('utm_'));
      if (utmParams.length > 0) {
        console.log('📊 UTM params:', utmParams.map(key => `${key}: ${params[key]}`));
      }

      console.log(`\n📋 RESULTADO: ${allEssentialPresent ? '✅ VÁLIDA' : '❌ INCOMPLETA'}`);
      console.groupEnd();
      
      return allEssentialPresent;
    } catch (error) {
      console.error('❌ Erro ao validar URL:', error);
      console.groupEnd();
      return false;
    }
  },

  /**
   * Testa diferentes formatos de telefone
   */
  testPhoneFormats: () => {
    const phoneFormats = [
      '(11) 99999-9999',
      '11999999999',
      '+5511999999999',
      '5511999999999',
      '11 99999-9999',
      '(11)99999-9999'
    ];

    console.group('📞 TESTE: Formatos de Telefone');
    
    phoneFormats.forEach(phone => {
      const testData: LeadFormData = {
        name: 'Teste',
        email: 'teste@email.com',
        phone
      };
      
             const params = buildCheckoutParams(testData);
       console.log(`📱 "${phone}" → DDD:${params.phoneac} | NUM:${params.phonenumber}`);
    });
    
    console.groupEnd();
  },

  /**
   * Simula o fluxo completo do modal
   */
  simulateModalFlow: (formData: LeadFormData) => {
    console.group('🎭 SIMULAÇÃO: Fluxo do Modal');
    console.log('📝 Dados do formulário:', formData);
    
    // Construir URL
    const checkoutUrl = buildCheckoutUrl(formData);
    console.log('🔗 URL construída:', checkoutUrl);
    
    // Validar URL
    const isValid = DebugCheckout.validateCheckoutUrl(checkoutUrl);
    
    if (isValid) {
      console.log('✅ Fluxo simulado com sucesso!');
      console.log('📋 Próximos passos:');
      console.log('1. Modal seria fechado');
      console.log('2. Redirecionamento seria feito para:', checkoutUrl);
    } else {
      console.error('❌ Fluxo falhou na validação da URL');
    }
    
    console.groupEnd();
    return { formData, checkoutUrl, isValid };
  }
};

// Expor no window para uso no console
if (typeof window !== 'undefined') {
  (window as any).DebugCheckout = DebugCheckout;
} 