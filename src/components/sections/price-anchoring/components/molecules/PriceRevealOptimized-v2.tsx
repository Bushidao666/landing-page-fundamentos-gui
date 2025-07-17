/**
 * @file: PriceRevealOptimized-v2.tsx
 * @responsibility: Optimized price reveal component with enhanced performance
 * @exports: PriceRevealOptimized
 * @imports: motion, types, constants, animations
 * @layer: components
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { memo, useState, useEffect, useCallback } from "react";
import { ShoppingCart, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PriceRevealProps } from "../../types";
import { COLORS, SPACING, TYPOGRAPHY, TOUCH_TARGET } from "../../data/constants";
import { priceRevealVariants, createHoverAnimation, prefersReducedMotion } from "../../utils/animations";

// Urgency messages
const urgencyMessages = [
  "Última chance com este preço",
  "Oferta por tempo limitado",
  "Apenas hoje com desconto especial"
];

// Price display component
const PriceDisplay = memo(({ 
  paymentOption, 
  basePrice = 47 
}: { 
  paymentOption: 'installments' | 'cash';
  basePrice?: number;
}) => {
  const installmentPrice = (basePrice / 12).toFixed(2).replace('.', ',');
  const cashPrice = basePrice.toFixed(2).replace('.', ',');

  return (
    <motion.div
      className="relative"
      whileHover={prefersReducedMotion() ? {} : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {/* Subtle glow effect */}
      <div 
        className="absolute inset-0 blur-3xl opacity-20"
        style={{ 
          background: `radial-gradient(circle, ${COLORS.primary}40, transparent)`
        }}
        aria-hidden="true"
      />
      
      {/* Price content */}
      <div className="relative space-y-2">
        {paymentOption === 'installments' ? (
          <>
            <motion.h3 
              className="font-black text-transparent bg-clip-text
                         bg-gradient-to-r animate-gradient leading-tight"
              style={{
                fontSize: TYPOGRAPHY.display.xl,
                backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primaryLight}, ${COLORS.primary})`,
              }}
              animate={prefersReducedMotion() ? {} : { 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              12x R$ {installmentPrice}
            </motion.h3>
            
            <motion.p 
              className="font-medium"
              style={{
                fontSize: TYPOGRAPHY.heading.md,
                color: COLORS.text.secondary
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              ou <span className="font-bold" style={{ color: COLORS.text.primary }}>
                R$ {cashPrice} à vista
              </span>
            </motion.p>
          </>
        ) : (
          <>
            <motion.h3 
              className="font-black text-transparent bg-clip-text
                         bg-gradient-to-r animate-gradient leading-tight"
              style={{
                fontSize: TYPOGRAPHY.display.xl,
                backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primaryLight}, ${COLORS.primary})`,
              }}
              animate={prefersReducedMotion() ? {} : { 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              R$ {cashPrice}
            </motion.h3>
            
            <motion.p 
              className="font-medium"
              style={{
                fontSize: TYPOGRAPHY.heading.md,
                color: COLORS.text.secondary
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              ou <span className="font-bold" style={{ color: COLORS.text.primary }}>
                12x de R$ {installmentPrice}
              </span>
            </motion.p>
          </>
        )}
      </div>
    </motion.div>
  );
});

PriceDisplay.displayName = 'PriceDisplay';

// CTA Button component
const CTAButton = memo(({ 
  onClick,
  disabled = false 
}: { 
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    if (disabled || isLoading) return;
    
    setIsLoading(true);
    onClick?.();
    
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 2000);
  }, [onClick, disabled, isLoading]);

  return (
    <motion.div
      className="relative"
      {...createHoverAnimation(1.03)}
    >
      <Button
        onClick={handleClick}
        disabled={disabled || isLoading}
        className="relative group w-full sm:w-auto
                   font-bold tracking-wide uppercase
                   transition-all duration-300
                   shadow-[0_8px_32px_rgba(212,175,55,0.3)]"
        style={{
          minHeight: TOUCH_TARGET.large,
          fontSize: TYPOGRAPHY.body.lg,
          padding: `${SPACING.md} ${SPACING.xl}`,
          backgroundColor: COLORS.primary,
          color: COLORS.background.dark,
          borderRadius: SPACING.md,
        }}
        aria-label="Garantir oferta especial agora"
      >
        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-3">
          {isLoading ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Processando...</span>
            </>
          ) : (
            <>
              <ShoppingCart size={20} aria-hidden="true" />
              <span>GARANTIR MINHA VAGA AGORA</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </>
          )}
        </span>

        {/* Hover effect overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
          style={{
            background: `linear-gradient(to right, ${COLORS.primaryLight}20, transparent)`,
            borderRadius: SPACING.md,
          }}
        />
      </Button>
    </motion.div>
  );
});

CTAButton.displayName = 'CTAButton';

// Main component
const PriceRevealOptimized = memo(({ 
  isRevealed, 
  paymentOption,
  basePrice = 47,
  className = "",
  onCtaClick
}: PriceRevealProps) => {
  const [urgencyIndex, setUrgencyIndex] = useState(0);

  // Rotate urgency messages
  useEffect(() => {
    if (!isRevealed || prefersReducedMotion()) return;
    
    const interval = setInterval(() => {
      setUrgencyIndex((prev) => (prev + 1) % urgencyMessages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isRevealed]);

  return (
    <AnimatePresence mode="wait">
      {isRevealed && (
        <motion.div
          className={`${className}`}
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING.xl,
            alignItems: 'center'
          }}
          variants={priceRevealVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Price Display Section */}
          <div 
            className="text-center"
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: SPACING.md,
              alignItems: 'center'
            }}
          >
            {/* Urgency badge */}
            <motion.div
              className="inline-flex items-center rounded-full"
              style={{
                gap: SPACING.xs,
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                paddingInline: SPACING.md,
                paddingBlock: SPACING.sm,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1 }}
            >
              <Zap size={16} style={{ color: '#ef4444' }} aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={urgencyIndex}
                  className="font-medium"
                  style={{ 
                    fontSize: TYPOGRAPHY.body.sm,
                    color: '#ef4444'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {urgencyMessages[urgencyIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Price display */}
            <PriceDisplay 
              paymentOption={paymentOption} 
              basePrice={basePrice}
            />
          </div>

          {/* CTA Button */}
          <CTAButton onClick={onCtaClick} />

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap items-center justify-center"
            style={{ gap: SPACING.lg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center" style={{ gap: SPACING.xs }}>
              <Shield size={20} style={{ color: '#10b981' }} aria-hidden="true" />
              <span style={{ 
                fontSize: TYPOGRAPHY.body.sm,
                color: COLORS.text.secondary
              }}>
                Compra Segura
              </span>
            </div>
            <div className="flex items-center" style={{ gap: SPACING.xs }}>
              <Clock size={20} style={{ color: '#3b82f6' }} aria-hidden="true" />
              <span style={{ 
                fontSize: TYPOGRAPHY.body.sm,
                color: COLORS.text.secondary
              }}>
                Acesso Imediato
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

PriceRevealOptimized.displayName = 'PriceRevealOptimized';

export default PriceRevealOptimized;