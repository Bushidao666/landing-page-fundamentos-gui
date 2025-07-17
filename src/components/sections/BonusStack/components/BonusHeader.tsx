/**
 * @file: BonusHeader.tsx
 * @responsibility: professional header with unified copy block and aristocratic styling
 * @exports: BonusHeader
 * @imports: framer-motion, lucide-react, bonusData, aristocratic tokens
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Gift, Crown } from "lucide-react";
import { bonusMetrics } from "../data/bonusData";
import "../styles/aristocratic-tokens.css";

interface BonusHeaderProps {
  className?: string;
}

// Simplified animation variants - maximum 3 per viewport
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.15,
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

export default function BonusHeader({ className = "" }: BonusHeaderProps) {
  return (
    <motion.header 
      className={`text-center max-w-6xl mx-auto mb-6 md:mb-8 lg:mb-10 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={headerVariants}
    >
      {/* Aristocratic Badge - Refined */}
      <motion.div
        className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-imperial-gold/15 to-imperial-gold-light/15 backdrop-blur-sm border border-imperial-gold/30 px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-gold-sm mb-4 md:mb-6"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02,
          backgroundColor: "var(--imperial-gold-10)"
        }}
        transition={{ duration: 0.2 }}
        role="banner"
        aria-label="Seção de bônus exclusivos"
      >
        <Gift className="w-4 h-4 md:w-5 md:h-5 text-imperial-primary" />
        <span className="text-imperial-primary font-semibold text-xs md:text-sm uppercase tracking-wide">
          Bônus Exclusivos
        </span>
        <Crown className="w-4 h-4 md:w-5 md:h-5 text-imperial-primary" />
      </motion.div>

      {/* Unified Copy Block - Professional Hierarchy */}
      <motion.div className="unified-copy-block mb-6 md:mb-8" variants={itemVariants}>
        <div className="text-center space-y-4 md:space-y-6" role="heading" aria-level={2}>
          {/* Emotional Setup - Aristocratic */}
          <motion.p 
            className="text-aristocrat-secondary text-sm md:text-base font-normal opacity-90"
            variants={itemVariants}
          >
            Mas eu não quero te dar só o alicerce.
          </motion.p>
          
          {/* Main Promise - Aristocratic Typography */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight text-aristocrat-primary font-serif"
            variants={itemVariants}
          >
            Quero te dar a{" "}
            <span className="text-imperial-primary relative">
              casa toda
              <motion.span
                className="absolute -inset-1 bg-imperial-gold/10 blur-sm -z-10"
                animate={{ opacity: [0, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            ,<br className="hidden md:block" />
            {" "}com a{" "}
            <span className="text-imperial-primary relative">
              chave na mão
              <motion.span
                className="absolute -inset-1 bg-imperial-gold/10 blur-sm -z-10"
                animate={{ opacity: [0, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </span>
            .
          </motion.h2>
          
          {/* Transition to Value - Aristocratic */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-aristocrat-secondary font-medium"
            variants={itemVariants}
          >
            Por isso, você leva um arsenal de bônus de
          </motion.p>
        </div>
      </motion.div>

      {/* Value Showcase - Professional Implementation */}
      <motion.div 
        className="value-showcase relative inline-block"
        variants={itemVariants}
      >
        <div className="relative">
          {/* Main Value - Aristocratic Focus */}
          <motion.div 
            className="bg-gradient-to-r from-imperial-gold via-imperial-gold-light to-imperial-gold rounded-2xl md:rounded-3xl px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 shadow-gold-lg relative overflow-hidden"
            whileHover={{ 
              scale: 1.01, 
              boxShadow: "var(--shadow-glow-gold)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Aristocratic Shimmer - Performance Optimized */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-elegant-white/8 to-transparent -skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-aristocrat-primary relative z-10 block font-serif">
              R$ {bonusMetrics.totalValue.toLocaleString('pt-BR')}
            </span>
          </motion.div>
          
          {/* FREE Badge - Aristocratic Mobile Optimized */}
          <motion.div
            className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 lg:-bottom-4 lg:-right-4"
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: -6 }}
            transition={{ delay: 0.3, duration: 0.4, type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-r from-aristocrat-primary to-aristocrat-blue-dark text-elegant-white font-black text-sm md:text-base lg:text-lg xl:text-xl px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-aristocrat-lg transform hover:scale-105 transition-transform duration-200">
              <span className="tracking-tight">DE GRAÇA!</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </motion.header>
  );
} 