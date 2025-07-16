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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-7 mb-6 md:mb-8 lg:mb-10">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <Sparkles className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 text-[#D4AF37] drop-shadow-lg" />
          </motion.div>
          
          <div className="text-center flex-1">
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0A192F] mb-2 md:mb-3"
              animate={{
                textShadow: [
                  "0 0 0px rgba(10, 25, 47, 0)",
                  "0 0 15px rgba(10, 25, 47, 0.2)",
                  "0 0 0px rgba(10, 25, 47, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Todo esse arsenal de{" "}
              <motion.span 
                className="text-[#D4AF37]"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(212, 175, 55, 0)",
                    "0 0 20px rgba(212, 175, 55, 0.6)",
                    "0 0 0px rgba(212, 175, 55, 0)"
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                R$ {bonusMetrics.totalValue.toLocaleString()}
              </motion.span>
            </motion.p>
            <motion.p 
              className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 font-medium"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              será SEU por apenas{" "}
              <span className="text-[#D4AF37] font-black">R$ {bonusMetrics.finalPrice}</span>. 
              Sim, você leu certo.
            </motion.p>
          </div>
          
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, delay: 1 }
            }}
          >
            <Award className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 text-[#D4AF37] drop-shadow-lg" />
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

        {/* ROI Visual Premium */}
        <motion.div
          className="mt-6 md:mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.p 
            className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 font-medium"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Você está economizando{" "}
            <motion.span 
              className="text-green-600 font-black text-lg md:text-xl"
              animate={{
                textShadow: [
                  "0 0 0px rgba(34, 197, 94, 0)",
                  "0 0 15px rgba(34, 197, 94, 0.5)",
                  "0 0 0px rgba(34, 197, 94, 0)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              {Math.round(((bonusMetrics.totalValue - bonusMetrics.finalPrice) / bonusMetrics.totalValue) * 100)}%
            </motion.span>
          </motion.p>
          
          <div className="relative w-full bg-gray-200 rounded-full h-3 md:h-4 overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "95.5%" }}
              transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
            >
              {/* Shimmer effect na progress bar */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Sparkle effect */}
            <motion.div
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                delay: 3,
                duration: 1,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 