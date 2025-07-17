/**
 * @file: BonusHeaderV2.tsx
 * @responsibility: optimized header with focused value proposition and emotional hook
 * @exports: BonusHeaderV2
 * @imports: framer-motion, lucide-react, ValueStack, optimized tokens
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Gift, Crown, ArrowDown } from "lucide-react";
import { ValueStack } from "../index";
import { bonusMetrics } from "../data/bonusData";
import "../styles/optimized-tokens.css";

interface BonusHeaderV2Props {
  variant?: 'mobile' | 'desktop';
  animated?: boolean;
  className?: string;
}

export default function BonusHeaderV2({ 
  variant = 'mobile', 
  animated = true, 
  className = "" 
}: BonusHeaderV2Props) {
  const isMobile = variant === 'mobile';

  return (
    <motion.header 
      className={`bonus-header-v2 text-center ${className}`}
      initial={animated ? { opacity: 0, y: 30 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      transition={animated ? { duration: 0.6, ease: "easeOut" } : undefined}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Aristocratic Badge - Refined & Elegant */}
      <motion.div
        className="inline-flex items-center gap-2 mb-4 md:mb-6"
        initial={animated ? { scale: 0.9, opacity: 0 } : undefined}
        whileInView={animated ? { scale: 1, opacity: 1 } : undefined}
        transition={animated ? { duration: 0.4, delay: 0.2 } : undefined}
      >
        <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/15 backdrop-blur-sm border border-primary/20 px-3 py-2 rounded-full shadow-card">
          <Gift className="w-4 h-4 text-primary" />
          <span className="text-small text-primary font-semibold uppercase tracking-wide">
            Bônus Exclusivos
          </span>
          <Crown className="w-4 h-4 text-primary" />
        </div>
      </motion.div>

      {/* Emotional Hook - Compact & Powerful */}
      <motion.div 
        className="mb-6 md:mb-8"
        initial={animated ? { opacity: 0, y: 20 } : undefined}
        whileInView={animated ? { opacity: 1, y: 0 } : undefined}
        transition={animated ? { duration: 0.5, delay: 0.4 } : undefined}
      >
        <p className="text-body text-secondary-muted mb-3 font-medium">
          Mas eu não quero te dar só o alicerce.
        </p>
        
        <h1 className={`
          font-black leading-tight tracking-tight text-secondary mb-4
          ${isMobile ? 'text-2xl md:text-3xl' : 'text-4xl lg:text-5xl xl:text-6xl'}
        `}>
          Quero te dar a{" "}
          <motion.span 
            className="text-primary relative inline-block"
            animate={animated ? {
              textShadow: [
                "0 0 0px var(--color-primary)",
                "0 0 20px var(--color-primary-30)",
                "0 0 0px var(--color-primary)"
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            casa toda
            {/* Subtle glow background */}
            <motion.span
              className="absolute -inset-1 bg-primary/10 blur-sm -z-10 rounded"
              animate={animated ? { opacity: [0.3, 0.6, 0.3] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.span>
          {!isMobile && <br />}
          {" "}com a{" "}
          <motion.span 
            className="text-primary relative inline-block"
            animate={animated ? {
              textShadow: [
                "0 0 0px var(--color-primary)",
                "0 0 20px var(--color-primary-30)",
                "0 0 0px var(--color-primary)"
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            chave na mão
            <motion.span
              className="absolute -inset-1 bg-primary/10 blur-sm -z-10 rounded"
              animate={animated ? { opacity: [0.3, 0.6, 0.3] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.span>
          .
        </h1>

        <p className="text-h3 text-secondary-muted font-medium">
          Por isso, você leva um arsenal de bônus de
        </p>
      </motion.div>

      {/* Value Stack - The Hero Element */}
      <motion.div
        className="mb-6 md:mb-8"
        initial={animated ? { scale: 0.95, opacity: 0 } : undefined}
        whileInView={animated ? { scale: 1, opacity: 1 } : undefined}
        transition={animated ? { duration: 0.6, delay: 0.6 } : undefined}
      >
        <ValueStack
          totalValue={bonusMetrics.totalValue}
          finalPrice={bonusMetrics.finalPrice}
          variant="compact"
          showProgress={false}
          animated={animated}
          className="max-w-md mx-auto"
        />
      </motion.div>

      {/* Directional CTA - Elegant */}
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={animated ? { opacity: 0, y: 15 } : undefined}
        whileInView={animated ? { opacity: 1, y: 0 } : undefined}
        transition={animated ? { duration: 0.4, delay: 0.8 } : undefined}
      >
        <motion.p 
          className="text-small text-secondary-soft font-medium"
          animate={animated ? { opacity: [0.7, 1, 0.7] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          👇 Veja o que você leva 👇
        </motion.p>
        
        <motion.div
          animate={animated ? { 
            y: [0, 5, 0],
            scale: [1, 1.05, 1]
          } : {}}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      {/* Background Enhancement - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10 rounded-xl" />
    </motion.header>
  );
} 