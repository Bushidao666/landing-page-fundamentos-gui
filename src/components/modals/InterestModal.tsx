/**
 * @file: InterestModal.tsx
 * @responsibility: Modal de pré-checkout para captura de leads interessados (50% da jornada)
 * @exports: InterestModal
 * @imports: React, motion, Dialog, Form components
 * @layer: components
 */

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Check, Phone, Mail, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFacebookConversions } from '@/hooks/useFacebookConversions';
import { buildCheckoutUrl } from '@/lib/checkout-url-builder';
import { sendToWebhook } from '@/lib/webhook-sender';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueToCheckout: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function InterestModal({
  isOpen,
  onClose,
  onContinueToCheckout
}: InterestModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Hook do Facebook Conversions
  const { sendLead, sendInitiateCheckout } = useFacebookConversions();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro ao digitar
    if (error) setError(null);
  };

  const handleCheckout = async () => {
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Enviar evento Lead para Facebook
      console.log('📤 Enviando evento Lead...');
      await sendLead(formData);

      // 2. Enviar evento InitiateCheckout para Facebook
      console.log('📤 Enviando evento InitiateCheckout...');
      await sendInitiateCheckout({
        value: 47,
        currency: 'BRL',
        productName: 'Kit Inteligência Estratégica',
        category: 'Digital Product',
        productIds: ['kit-inteligencia-estrategica'],
        numItems: 1
      });

      // 3. Enviar dados para webhook
      console.log('📡 Enviando dados para webhook...');
      await sendToWebhook(formData, {
        includeMetadata: true,
        retries: 3,
        timeout: 10000
      });

      // 4. Construir URL de checkout com parâmetros
      console.log('🔗 Construindo URL de checkout...');
      const checkoutUrl = buildCheckoutUrl(formData);

      // 5. Fechar modal e executar callback se fornecido
      onClose();
      if (onContinueToCheckout) {
        onContinueToCheckout();
      }

      // 6. Redirecionar para checkout
      console.log('↗️ Redirecionando para checkout...', checkoutUrl);
      
      // Pequeno delay para garantir que o modal feche suavemente
      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 300);

    } catch (error) {
      console.error('❌ Erro no processo de checkout:', error);
      setError('Ocorreu um erro. Tente novamente em alguns segundos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full max-w-md bg-gradient-to-br from-[#0A192F] via-[#1A2444] to-[#0A192F] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Header Premium */}
              <div className="relative bg-gradient-to-br from-[#D4AF37]/30 via-[#FFD700]/20 to-[#D4AF37]/30 p-6 text-center overflow-hidden">
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(45deg, #D4AF37 1px, transparent 1px), linear-gradient(-45deg, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Você descobriu o <span className="text-white font-bold">Kit de Inteligência Estratégica</span> que vai transformar suas campanhas de 
                    <span className="text-red-400 font-medium"> "queimadoras de dinheiro"</span> em 
                    <span className="text-[#D4AF37] font-bold"> máquinas de lucro previsível</span>.
                  </p>
                  <p className="text-lg text-gray-400">
                    <span className="text-[#D4AF37] font-semibold">Apenas R$ 47</span> separam você do controle total sobre seu Google Ads. 
                    Garante sua vaga antes que a oferta expire.
                  </p>
                </motion.div>

                {/* Form Premium */}
                <motion.div 
                  className="space-y-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37] transition-colors duration-200" />
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full pl-13 pr-4 py-4 bg-gradient-to-r from-white/5 to-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:from-[#D4AF37]/5 focus:to-[#FFD700]/5 transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37] transition-colors duration-200" />
                    <input
                      type="email"
                      placeholder="Seu melhor email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-13 pr-4 py-4 bg-gradient-to-r from-white/5 to-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:from-[#D4AF37]/5 focus:to-[#FFD700]/5 transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#D4AF37] transition-colors duration-200" />
                    <input
                      type="tel"
                      placeholder="Seu WhatsApp"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-13 pr-4 py-4 bg-gradient-to-r from-white/5 to-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:from-[#D4AF37]/5 focus:to-[#FFD700]/5 transition-all duration-300 text-lg"
                    />
                  </div>
                </motion.div>

                {/* Action Button Premium */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative group"
                  >
                    <Button
                      onClick={handleCheckout}
                      disabled={!isFormValid || isSubmitting}
                      className={`relative w-full py-6 text-xl font-black rounded-2xl overflow-hidden transition-all duration-500 ${
                        isFormValid && !isSubmitting
                          ? 'bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] shadow-2xl shadow-[#D4AF37]/40'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {/* Shimmer Effect */}
                      {isFormValid && !isSubmitting && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      
                      <span className="relative flex items-center justify-center gap-3 z-10">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span className="tracking-wide">Processando...</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                            <span className="tracking-wide">Garantir minha vaga</span>
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.span>
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center"
                    >
                      <p className="text-red-400 font-medium text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                        {error}
                      </p>
                    </motion.div>
                  )}

                  {/* Price Highlight */}
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <p className="text-[#D4AF37] font-bold text-lg">
                      ⚡ Apenas R$ 47 • Acesso Vitalício • Garantia Blindada
                    </p>
                  </motion.div>
                </motion.div>

                {/* Trust Indicators Premium */}
                <motion.div 
                  className="flex items-center justify-center gap-6 text-sm pt-6 border-t border-[#D4AF37]/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  <motion.div 
                    className="flex items-center gap-2 text-gray-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#0A192F]" strokeWidth={3} />
                    </div>
                    <span className="font-medium">Pagamento 100% Seguro</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-gray-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#0A192F]" strokeWidth={3} />
                    </div>
                    <span className="font-medium">Acesso Imediato</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 