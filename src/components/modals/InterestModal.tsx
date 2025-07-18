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
import { X, Target, ShoppingCart, Check, Phone, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueToCheckout: () => void;
  onContinueReading: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function InterestModal({
  isOpen,
  onClose,
  onContinueToCheckout,
  onContinueReading
}: InterestModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckout = () => {
    // Aqui você pode salvar os dados do lead
    console.log('Lead capturado:', formData);
    onContinueToCheckout();
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

              {/* Header */}
              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 p-6 text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/20 rounded-full mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                >
                  <Target className="w-8 h-8 text-[#D4AF37]" />
                </motion.div>
                
                <h2 className="text-2xl font-bold text-white mb-2">
                  Já viu o valor?
                </h2>
                <p className="text-[#D4AF37] font-medium">
                  Quer garantir por R$ 47?
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-gray-300 text-center leading-relaxed">
                  Você já viu todo o conteúdo incrível que vai receber. 
                  <span className="text-[#D4AF37] font-medium"> Que tal garantir sua vaga agora</span> e começar sua transformação hoje mesmo?
                </p>

                {/* Form */}
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-200"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Seu melhor email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-200"
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Seu WhatsApp"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleCheckout}
                      disabled={!isFormValid}
                      className={`w-full py-4 text-lg font-bold rounded-xl transition-all duration-300 ${
                        isFormValid
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] text-[#0A192F]'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Quero Garantir Minha Vaga Agora
                    </Button>
                  </motion.div>

                  <Button
                    variant="ghost"
                    onClick={onContinueReading}
                    className="w-full py-3 text-gray-300 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300"
                  >
                    Ainda Quero Ver Mais
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Acesso Imediato</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 