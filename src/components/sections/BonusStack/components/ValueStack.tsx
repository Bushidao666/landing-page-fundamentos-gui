/**
 * @file: ValueStack.tsx
 * @responsibility: value progression component with anchor pricing psychology
 * @exports: ValueStack
 * @imports: framer-motion, optimized tokens, value calculation utilities
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingDown, ArrowRight } from "lucide-react";
import "../styles/optimized-tokens.css";

interface ValueStackProps {
  totalValue: number;
  finalPrice: number;
  variant?: 'compact' | 'expanded';
  showProgress?: boolean;
  animated?: boolean;
  className?: string;
}

interface ValueStackData {
  totalValue: number;
  finalPrice: number;
  savings: number;
  savingsPercentage: number;
}

const calculateValueMetrics = (totalValue: number, finalPrice: number): ValueStackData => {
  const savings = totalValue - finalPrice;
  const savingsPercentage = Math.round((savings / totalValue) * 100);
  
  return {
    totalValue,
    finalPrice,
    savings,
    savingsPercentage
  };
};

export default function ValueStack({
  totalValue,
  finalPrice,
  variant = 'expanded',
  showProgress = true,
  animated = true,
  className = ""
}: ValueStackProps) {
  const metrics = calculateValueMetrics(totalValue, finalPrice);
  const isCompact = variant === 'compact';

  return (
    <motion.div
      className={`value-stack ${className}`}
      initial={animated ? { opacity: 0, y: 20 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      transition={animated ? { duration: 0.4 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Value Display Container */}
      <div className={`
        value-display bg-card backdrop-blur-sm border border-primary-20 
        ${isCompact ? 'p-4 rounded-lg' : 'p-6 md:p-8 rounded-xl md:rounded-2xl'}
        shadow-card transition-smooth hover:shadow-card-hover
      `}>
        
        {/* Header Badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          <span className="text-small text-primary font-semibold uppercase tracking-wide">
            Seu Arsenal Vale
          </span>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        </div>

        {/* Value Progression */}
        <div className={`text-center ${isCompact ? 'space-y-3' : 'space-y-4 md:space-y-6'}`}>
          
          {/* Total Value - Anchor Price */}
          <div className="relative">
            <div className={`
              value-display-main bg-primary rounded-lg md:rounded-xl 
              ${isCompact ? 'py-3 px-4' : 'py-4 md:py-6 px-6 md:px-8'}
              shadow-glow relative overflow-hidden
            `}>
              {/* Background shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                animate={animated ? { x: ["-100%", "200%"] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <span className={`
                text-hero text-secondary font-black relative z-10 block
                ${isCompact ? 'text-2xl md:text-3xl' : ''}
              `}>
                R$ {totalValue.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>

          {/* Arrow Transition */}
          {!isCompact && (
            <div className="flex items-center justify-center">
              <motion.div
                className="flex items-center gap-2 text-secondary-muted"
                animate={animated ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
                <span className="text-small">transforma em</span>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          )}

          {/* Final Price - The Hook */}
          <div className="relative">
            <div className="text-center">
              <div className="text-body text-secondary-muted mb-2">
                Seu investimento hoje:
              </div>
              <div className={`
                inline-block bg-secondary text-bg-main rounded-lg
                ${isCompact ? 'py-2 px-4' : 'py-3 md:py-4 px-6 md:px-8'}
                shadow-card-hover relative
              `}>
                <span className={`
                  font-black text-primary-light
                  ${isCompact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl lg:text-4xl'}
                `}>
                  R$ {finalPrice}
                </span>
              </div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className={`text-center ${isCompact ? 'pt-2' : 'pt-4'}`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-success" />
              <span className="text-small text-success font-semibold">
                Economia de {metrics.savingsPercentage}%
              </span>
            </div>
            <div className="text-micro text-secondary-soft">
              Você economiza R$ {metrics.savings.toLocaleString('pt-BR')}
            </div>
          </div>

          {/* Progress Bar */}
          {showProgress && !isCompact && (
            <div className="pt-4">
              <div className="bg-subtle rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${metrics.savingsPercentage}%` }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={animated ? { x: ["-100%", "200%"] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expanded Version - Trust Signals */}
      {!isCompact && (
        <div className="mt-4 grid grid-cols-3 gap-2 md:gap-4 text-center">
          <div className="bg-subtle rounded-lg p-2 md:p-3">
            <div className="w-2 h-2 bg-success rounded-full mx-auto mb-1 animate-pulse"></div>
            <div className="text-micro text-secondary-soft">Acesso Imediato</div>
          </div>
          <div className="bg-subtle rounded-lg p-2 md:p-3">
            <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-1 animate-pulse"></div>
            <div className="text-micro text-secondary-soft">Garantia 30d</div>
          </div>
          <div className="bg-subtle rounded-lg p-2 md:p-3">
            <div className="w-2 h-2 bg-secondary rounded-full mx-auto mb-1 animate-pulse"></div>
            <div className="text-micro text-secondary-soft">Suporte Incluso</div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Export utility function for other components
export { calculateValueMetrics }; 