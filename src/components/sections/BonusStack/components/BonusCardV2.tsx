/**
 * @file: BonusCardV2.tsx
 * @responsibility: optimized bonus card template with performance-first approach
 * @exports: BonusCardV2
 * @imports: framer-motion, lucide-react, optimized tokens
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import "../styles/optimized-tokens.css";

interface BonusCardV2Props {
  // Header props - simplified
  title: string;
  value?: string;
  badgeText: string;
  icon: LucideIcon;
  
  // Content
  children: ReactNode;
  
  // Style variants
  variant?: 'primary' | 'secondary' | 'tertiary';
  
  // Behavior
  index?: number;
  animated?: boolean;
  className?: string;
}

// Color variants - performance optimized
const getVariantStyles = (variant: 'primary' | 'secondary' | 'tertiary') => {
  const variants = {
    primary: {
      badge: 'bg-secondary text-bg-main',
      icon: 'bg-secondary text-bg-main',
      border: 'border-secondary-20',
      titleColor: 'text-secondary'
    },
    secondary: {
      badge: 'bg-primary text-secondary',
      icon: 'bg-primary text-secondary',
      border: 'border-primary-20',
      titleColor: 'text-secondary'
    },
    tertiary: {
      badge: 'bg-gradient-to-r from-secondary to-secondary-light text-bg-main',
      icon: 'bg-gradient-to-r from-secondary to-secondary-light text-bg-main',
      border: 'border-secondary-15',
      titleColor: 'text-secondary'
    }
  };
  
  return variants[variant];
};

export default function BonusCardV2({
  title,
  value,
  badgeText,
  icon: Icon,
  children,
  variant = 'primary',
  index = 0,
  animated = true,
  className = ""
}: BonusCardV2Props) {
  const styles = getVariantStyles(variant);

  return (
    <motion.article
      className={`bonus-card-v2 ${className}`}
      initial={animated ? { opacity: 0, y: 20 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      transition={animated ? { 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      } : undefined}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className={`
          bg-card backdrop-blur-sm border ${styles.border} rounded-lg
          p-4 md:p-6 shadow-card hover:shadow-card-hover 
          transition-smooth overflow-hidden relative
        `}
        whileHover={animated ? { 
          y: -2,
          boxShadow: "0 10px 25px rgba(10, 25, 47, 0.1), 0 0 20px rgba(212, 175, 55, 0.05)"
        } : undefined}
        transition={{ duration: 0.2 }}
      >
        {/* Background Pattern - Subtle */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        {/* Header Section */}
        <header className="relative z-10 mb-4 md:mb-6">
          
          {/* Badge */}
          <motion.div
            className={`
              inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
              text-small font-semibold uppercase tracking-wide mb-3
              ${styles.badge} shadow-card
            `}
            whileHover={animated ? { scale: 1.02 } : undefined}
            transition={{ duration: 0.2 }}
          >
            <span>{badgeText}</span>
          </motion.div>

          {/* Title and Icon Row */}
          <div className="flex items-start gap-3 md:gap-4">
            
            {/* Icon */}
            <motion.div
              className={`
                flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg
                flex items-center justify-center shadow-card
                ${styles.icon}
              `}
              whileHover={animated ? { 
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(10, 25, 47, 0.15)"
              } : undefined}
              transition={{ duration: 0.2 }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>

            {/* Title Area */}
            <div className="flex-1 min-w-0">
              <h3 className={`
                text-h2 ${styles.titleColor} font-bold leading-tight mb-2
              `}>
                {title}
              </h3>
              
              {value && (
                <motion.div
                  className="inline-block"
                  animate={animated ? {
                    textShadow: [
                      "0 0 0px var(--color-primary)",
                      "0 0 8px var(--color-primary-30)",
                      "0 0 0px var(--color-primary)"
                    ]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-h3 text-primary font-black">
                    {value}
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl" />
      </motion.div>
    </motion.article>
  );
} 