/**
 * @file: FinalCTA.tsx
 * @responsibility: final call to action with value reveal and next step indicator
 * @exports: FinalCTA
 * @imports: framer-motion, lucide-react, bonusData
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, ArrowRight } from "lucide-react";
import { bonusMetrics } from "../data/bonusData";

interface FinalCTAProps {
  className?: string;
}

const itemVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function FinalCTA({ className = "" }: FinalCTAProps) {
  return (
    <motion.div 
      className={`text-center max-w-5xl mx-auto mt-8 md:mt-12 lg:mt-16 ${className}`}
      variants={itemVariants}
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className="bg-gradient-to-br from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 backdrop-blur-xl rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 xl:p-10 border border-[#D4AF37]/30 shadow-2xl"
        whileHover={{ scale: 1.01, y: -3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 lg:mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#D4AF37]" />
          </motion.div>
          
          <div className="text-center flex-1">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0A192F] mb-1 md:mb-2">
              Todo esse arsenal de{" "}
              <span className="text-[#D4AF37]">R$ {bonusMetrics.totalValue.toLocaleString()}</span>
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
              será SEU por apenas R$ {bonusMetrics.finalPrice}. Sim, você leu certo.
            </p>
          </div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Award className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#D4AF37]" />
          </motion.div>
        </div>
        
        {/* Indicador de Próximo Passo */}
        <motion.div
          className="inline-flex items-center gap-2 md:gap-3 text-[#D4AF37] font-semibold text-sm md:text-base lg:text-lg"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
          <span>Próximo: Descubra por que esse preço absurdo</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
        </motion.div>

        {/* Detalhamento dos Valores */}
        <motion.div
          className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[#D4AF37]/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6 text-center">
            <div className="bg-white/50 rounded-lg md:rounded-xl p-3 md:p-4">
              <p className="text-xs md:text-sm text-gray-600 mb-1">Comunidade Vitalícia</p>
              <p className="text-sm md:text-base lg:text-lg font-bold text-[#0A192F]">
                R$ {bonusMetrics.communityValue}
              </p>
            </div>
            <div className="bg-white/50 rounded-lg md:rounded-xl p-3 md:p-4">
              <p className="text-xs md:text-sm text-gray-600 mb-1">Passaporte + 7 GPTs</p>
              <p className="text-sm md:text-base lg:text-lg font-bold text-[#0A192F]">
                R$ {bonusMetrics.passportValue + bonusMetrics.gptsValue}
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-lg md:rounded-xl p-3 md:p-4">
              <p className="text-xs md:text-sm text-[#0A192F] mb-1 font-medium">Seu Investimento</p>
              <p className="text-sm md:text-base lg:text-lg font-black text-[#0A192F]">
                R$ {bonusMetrics.finalPrice}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ROI Visual */}
        <motion.div
          className="mt-4 md:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs md:text-sm text-gray-600 mb-2">
            Economia de{" "}
            <span className="text-green-600 font-bold">
              {Math.round(((bonusMetrics.totalValue - bonusMetrics.finalPrice) / bonusMetrics.totalValue) * 100)}%
            </span>
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "95.5%" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 