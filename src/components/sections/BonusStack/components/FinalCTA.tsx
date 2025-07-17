/**
 * @file: FinalCTA.tsx
 * @responsibility: professional final CTA with urgency and optimized mobile experience
 * @exports: FinalCTA
 * @imports: framer-motion, lucide-react, bonusData
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, ArrowRight, Clock, Users } from "lucide-react";
import { bonusMetrics } from "../data/bonusData";

interface FinalCTAProps {
  className?: string;
}

// Simplified animations for better performance
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function FinalCTA({ className = "" }: FinalCTAProps) {
  return (
    <motion.div 
      className={`text-center max-w-5xl mx-auto mt-6 md:mt-8 lg:mt-12 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Savings Progress Bar - Above the fold */}
      <motion.div 
        className="mb-4 md:mb-6"
        variants={itemVariants}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm md:text-base font-semibold text-gray-700">Sua Economia:</span>
            <motion.span 
              className="text-lg md:text-xl font-black text-green-600"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 0px rgba(34, 197, 94, 0)",
                  "0 0 10px rgba(34, 197, 94, 0.3)",
                  "0 0 0px rgba(34, 197, 94, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {Math.round(((bonusMetrics.totalValue - bonusMetrics.finalPrice) / bonusMetrics.totalValue) * 100)}%
            </motion.span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: "95.5%" }}
              transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main CTA Container */}
      <motion.div 
        className="bg-gradient-to-br from-[#D4AF37]/8 via-[#FFD700]/4 to-[#D4AF37]/8 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-[#D4AF37]/20 shadow-xl"
        whileHover={{ scale: 1.005, y: -2 }}
        transition={{ duration: 0.3 }}
        variants={itemVariants}
      >
        {/* Header with Urgency */}
        <motion.div 
          className="text-center mb-6 md:mb-8"
          variants={itemVariants}
        >
          <motion.div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
            <span className="text-sm md:text-base font-semibold text-red-600 uppercase tracking-wide">
              Últimas Vagas Disponíveis
            </span>
            <Users className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
          </motion.div>
          
          <motion.h3 
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0A192F] mb-3 md:mb-4 leading-tight"
            variants={itemVariants}
          >
            Todo esse arsenal de{" "}
            <motion.span 
              className="text-[#D4AF37] font-black"
              animate={{
                textShadow: [
                  "0 0 0px rgba(212, 175, 55, 0)",
                  "0 0 15px rgba(212, 175, 55, 0.4)",
                  "0 0 0px rgba(212, 175, 55, 0)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              R$ {bonusMetrics.totalValue.toLocaleString('pt-BR')}
            </motion.span>
          </motion.h3>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium"
            variants={itemVariants}
          >
            será SEU por apenas{" "}
            <span className="text-[#D4AF37] font-black text-xl md:text-2xl lg:text-3xl">
              R$ {bonusMetrics.finalPrice}
            </span>
            . Sim, você leu certo.
          </motion.p>
        </motion.div>
        {/* Action Section */}
        <motion.div 
          className="text-center mb-6 md:mb-8"
          variants={itemVariants}
        >
          <motion.button
            className="bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-[#0A192F] font-black text-lg md:text-xl lg:text-2xl px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-4 md:mb-5 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">Garanta Seu Acesso Agora</span>
          </motion.button>
          
          <motion.div
            className="flex items-center justify-center gap-2 md:gap-3 text-gray-600 text-sm md:text-base"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            <span>Próximo: Descubra por que esse preço absurdo</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.div>
        </motion.div>

        {/* Value Breakdown - Simplified */}
        <motion.div
          className="pt-4 md:pt-6 border-t border-[#D4AF37]/15"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-center">
            <div className="bg-white/60 rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-200/30">
              <p className="text-xs md:text-sm text-gray-600 mb-1">Comunidade Vitalícia</p>
              <p className="text-sm md:text-base lg:text-lg font-bold text-[#0A192F]">
                R$ {bonusMetrics.communityValue}
              </p>
            </div>
            <div className="bg-white/60 rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-200/30">
              <p className="text-xs md:text-sm text-gray-600 mb-1">Passaporte + 7 GPTs</p>
              <p className="text-sm md:text-base lg:text-lg font-bold text-[#0A192F]">
                R$ {bonusMetrics.passportValue + bonusMetrics.gptsValue}
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-lg md:rounded-xl p-3 md:p-4 border border-[#D4AF37]/30">
              <p className="text-xs md:text-sm text-[#0A192F] mb-1 font-medium">Seu Investimento</p>
              <p className="text-sm md:text-base lg:text-lg font-black text-[#0A192F]">
                R$ {bonusMetrics.finalPrice}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          className="mt-4 md:mt-6 text-center"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-gray-600">
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Suporte Incluso</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Garantia 30 Dias</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 