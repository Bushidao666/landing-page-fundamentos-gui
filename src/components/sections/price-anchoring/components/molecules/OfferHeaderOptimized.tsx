"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { Calculator, Gift } from "lucide-react";
import { OfferHeaderProps } from "../../types";
import { COLORS, SPACING, TYPOGRAPHY, ANIMATION } from "../../data/constants";

const OfferHeaderOptimized = memo(({ 
  className = "",
  animationConfig = {
    duration: ANIMATION.duration.normal,
    staggerChildren: ANIMATION.stagger.normal
  }
}: OfferHeaderProps) => {
  // Animation variants with customizable timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animationConfig.staggerChildren,
        delayChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: { 
      y: -20, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: animationConfig.duration / 1000,
        ease: animationConfig.ease || ANIMATION.easing.smooth,
      },
    },
  };

  const headlineVariants = {
    hidden: { 
      y: 30, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: (animationConfig.duration * 1.2) / 1000,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.header 
      className={`text-center w-full ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="region"
      aria-labelledby="offer-header-title"
    >
      {/* Container with fluid responsive padding */}
      <div 
        className="max-w-5xl mx-auto"
        style={{ paddingInline: SPACING.lg }}
      >
        
        {/* Premium Badge - Optimized with fluid sizing */}
        <motion.div
          className="inline-flex items-center justify-center
                     rounded-full backdrop-blur-md
                     transition-all duration-300"
          style={{
            gap: SPACING.sm,
            padding: `${SPACING.sm} ${SPACING.md}`,
            backgroundColor: `${COLORS.primary}15`,
            border: `1px solid ${COLORS.primary}25`,
            boxShadow: `0 8px 32px ${COLORS.primary}12`,
            marginBottom: SPACING.xl
          }}
          // @ts-expect-error - Framer Motion type inference issue
          variants={badgeVariants}
          whileHover={{ 
            scale: 1.03,
            boxShadow: `0 12px 40px ${COLORS.primary}20`,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          tabIndex={0}
          role="heading"
          aria-level={2}
        >
          {/* Icon with fluid sizing */}
          <Calculator 
            className="flex-shrink-0" 
            style={{ 
              width: 'clamp(1rem, 2vw, 1.25rem)',
              height: 'clamp(1rem, 2vw, 1.25rem)',
              color: COLORS.primary
            }}
            aria-hidden="true"
          />
          
          {/* Badge text with fluid typography */}
          <span 
            className="font-semibold uppercase leading-none"
            style={{ 
              fontSize: TYPOGRAPHY.body.sm,
              letterSpacing: '0.15em',
              color: COLORS.primary
            }}
          >
            Resumo da Oferta
          </span>
          
          {/* Second icon */}
          <Gift 
            className="flex-shrink-0" 
            style={{ 
              width: 'clamp(1rem, 2vw, 1.25rem)',
              height: 'clamp(1rem, 2vw, 1.25rem)',
              color: COLORS.primary
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Main Headline - Fluid typography */}
        <motion.h1
          id="offer-header-title"
          className="font-serif font-bold"
          style={{ 
            color: COLORS.text.primary,
            fontSize: TYPOGRAPHY.display.lg,
            lineHeight: 1.15,
            letterSpacing: '-0.02em'
          }}
          variants={headlineVariants}
        >
          {/* First part */}
          <span className="inline-block">Recapitulando</span>
          
          {/* Animated highlight word */}
          <motion.span 
            className="inline-block relative"
            style={{
              margin: `0 ${SPACING.sm}`,
              background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primaryLight}, ${COLORS.primary})`,
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 24px ${COLORS.primary}30)`,
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            TUDO
          </motion.span>
          
          {/* Last part */}
          <span className="block sm:inline-block">
            o que você destrava hoje:
          </span>
        </motion.h1>

        {/* Subtle divider with fluid sizing */}
        <motion.div
          className="mx-auto h-px"
          style={{
            marginTop: SPACING['2xl'],
            width: 'clamp(6rem, 20vw, 10rem)',
            background: `linear-gradient(to right, transparent, ${COLORS.primary}30, transparent)`
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: 1, 
            opacity: 1,
            transition: { delay: 0.8, duration: 0.6 }
          }}
          aria-hidden="true"
        />
      </div>
    </motion.header>
  );
});

OfferHeaderOptimized.displayName = 'OfferHeaderOptimized';

export default OfferHeaderOptimized;