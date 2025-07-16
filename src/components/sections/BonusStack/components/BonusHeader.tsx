/**
 * @file: BonusHeader.tsx
 * @responsibility: header section with badge, headline and value reveal
 * @exports: BonusHeader
 * @imports: framer-motion, lucide-react, bonusData
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Gift, Crown, Sparkles } from "lucide-react";
import { bonusMetrics } from "../data/bonusData";

interface BonusHeaderProps {
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

export default function BonusHeader({ className = "" }: BonusHeaderProps) {
  return (
    <motion.div 
      className={`text-center max-w-6xl mx-auto mb-8 md:mb-12 lg:mb-16 ${className}`}
      variants={itemVariants}
    >
      {/* Badge de Impacto - OTIMIZADO */}
      <motion.div
        className="inline-flex items-center gap-2 md:gap-3 lg:gap-4 bg-gradient-to-r from-[#D4AF37]/40 via-[#FFD700]/30 to-[#D4AF37]/40 backdrop-blur-2xl border border-[#D4AF37]/60 px-3 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 rounded-full shadow-2xl mb-6 md:mb-8 lg:mb-10"
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -2 }}
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(212, 175, 55, 0.3)", 
            "0 0 30px rgba(212, 175, 55, 0.5)", 
            "0 0 20px rgba(212, 175, 55, 0.3)"
          ]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity }
        }}
      >
        <Gift className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#D4AF37]" />
        <span className="text-[#D4AF37] font-bold text-xs md:text-sm lg:text-base uppercase tracking-wider">
          Bônus Exclusivos
        </span>
        <Crown className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#D4AF37]" />
      </motion.div>

      {/* Headline Épica - TYPOGRAPHY OTIMIZADA */}
      <motion.div className="space-y-3 md:space-y-4 lg:space-y-6 mb-6 md:mb-8 lg:mb-10" variants={itemVariants}>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-black leading-tight tracking-tight text-[#0A192F]">
          <span className="block text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl font-normal mb-2 md:mb-3">
            Mas eu não quero te dar só o alicerce.
          </span>
          <span className="block text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl font-normal mb-2 md:mb-3">
            Quero te dar a casa toda, com a chave na mão.
          </span>
          <span className="block text-gray-600 text-xs md:text-sm lg:text-base xl:text-lg font-light mb-3 md:mb-4 lg:mb-5">
            Por isso, ao garantir seu acesso ao Fundamentos HOJE, você leva um
          </span>
          <motion.span 
            className="block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] via-[#FFA500] to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            arsenal de bônus avaliado em
          </motion.span>
        </h2>

        {/* Revelação Dramática do Valor - TIMING OTIMIZADO */}
        <motion.div 
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 md:gap-3 lg:gap-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-xl md:rounded-2xl lg:rounded-3xl px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-6 shadow-2xl border-2 md:border-4 border-white/20">
            <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0A192F]">
              R$ {bonusMetrics.totalValue.toLocaleString()}
            </span>
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-[#0A192F]" />
            </motion.div>
          </div>
          
          {/* DE GRAÇA - Explosão - POSITIONING OTIMIZADO */}
          <motion.div
            className="absolute -bottom-4 md:-bottom-5 lg:-bottom-6 left-1/2 transform -translate-x-1/2"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.8, duration: 0.6, type: "spring", bounce: 0.5 }}
          >
            <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-black text-sm md:text-lg lg:text-xl xl:text-2xl px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 rounded-lg md:rounded-xl shadow-2xl border-2 md:border-4 border-white transform rotate-2">
              DE GRAÇA!
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
} 