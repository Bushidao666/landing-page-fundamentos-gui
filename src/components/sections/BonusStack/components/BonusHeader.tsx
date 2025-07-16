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
      {/* Badge de Impacto - Refinado */}
      <motion.div
        className="inline-flex items-center gap-2 md:gap-3 lg:gap-4 bg-gradient-to-r from-[#D4AF37]/40 via-[#FFD700]/30 to-[#D4AF37]/40 backdrop-blur-2xl border border-[#D4AF37]/60 px-4 md:px-6 lg:px-8 py-2.5 md:py-3.5 lg:py-4 rounded-full shadow-2xl mb-8 md:mb-10 lg:mb-12"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.03, 
          y: -1,
          boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)"
        }}
        whileTap={{ scale: 0.98 }}
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
        role="banner"
        aria-label="Seção de bônus exclusivos"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Gift className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#D4AF37]" />
        </motion.div>
        <span className="text-[#D4AF37] font-bold text-xs md:text-sm lg:text-base uppercase tracking-wider select-none">
          Bônus Exclusivos
        </span>
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2.5 }}
        >
          <Crown className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#D4AF37]" />
        </motion.div>
      </motion.div>

      {/* Headline Épica - Hierarquia Refinada */}
      <motion.div className="space-y-4 md:space-y-5 lg:space-y-6 mb-8 md:mb-10 lg:mb-12" variants={itemVariants}>
        <header className="text-center" role="heading" aria-level={2}>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-black leading-[1.1] tracking-tight text-[#0A192F]">
            <motion.span 
              className="block text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl font-normal mb-3 md:mb-4 opacity-90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Mas eu não quero te dar só o alicerce.
            </motion.span>
            <motion.span 
              className="block text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl font-medium mb-3 md:mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Quero te dar a casa toda, com a chave na mão.
            </motion.span>
            <motion.span 
              className="block text-gray-600 text-xs md:text-sm lg:text-base xl:text-lg font-light mb-4 md:mb-5 lg:mb-6 opacity-85"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Por isso, ao garantir seu acesso ao Fundamentos HOJE, você leva um
            </motion.span>
            <motion.span 
              className="block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] via-[#FFA500] to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%] font-bold"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                opacity: { delay: 0.8, duration: 0.6 },
                scale: { delay: 0.8, duration: 0.6 },
                backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
              }}
            >
              arsenal de bônus avaliado em
            </motion.span>
          </h2>
        </header>

        {/* Revelação Dramática do Valor - Premium Experience */}
        <motion.div 
          className="relative group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          {/* Valor Principal com Micro-interactions */}
          <motion.div 
            className="inline-flex items-center gap-3 md:gap-4 lg:gap-5 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-xl md:rounded-2xl lg:rounded-3xl px-5 md:px-7 lg:px-9 py-4 md:py-5 lg:py-7 shadow-2xl border-2 md:border-4 border-white/30 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 0 60px rgba(212, 175, 55, 0.8)"
            }}
            whileTap={{ scale: 0.98 }}
            role="presentation"
            aria-label={`Valor total dos bônus: R$ ${bonusMetrics.totalValue.toLocaleString()}`}
          >
            {/* Shimmer effect no hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.8 }}
            />
            
            <motion.span 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0A192F] relative z-10 select-none"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(10, 25, 47, 0)",
                  "0 0 20px rgba(10, 25, 47, 0.3)",
                  "0 0 0px rgba(10, 25, 47, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              R$ {bonusMetrics.totalValue.toLocaleString()}
            </motion.span>
            
            <motion.div
              className="relative z-10"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 1
              }}
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-[#0A192F] drop-shadow-lg" />
            </motion.div>
          </motion.div>
          
          {/* DE GRAÇA - Explosão Premium */}
          <motion.div
            className="absolute -bottom-5 md:-bottom-6 lg:-bottom-7 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ scale: 0, rotate: -25, y: 20 }}
            animate={{ scale: 1, rotate: 2, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, type: "spring", bounce: 0.6 }}
            whileHover={{ 
              scale: 1.05, 
              rotate: -2,
              boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)"
            }}
          >
            <div className="bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white font-black text-sm md:text-lg lg:text-xl xl:text-2xl px-4 md:px-5 lg:px-7 py-2 md:py-2.5 lg:py-3 rounded-lg md:rounded-xl shadow-2xl border-2 md:border-4 border-white relative overflow-hidden">
              {/* Pulse effect interno */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="relative z-10 select-none tracking-wide">DE GRAÇA!</span>
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