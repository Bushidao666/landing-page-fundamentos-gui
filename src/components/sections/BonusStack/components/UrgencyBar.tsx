/**
 * @file: UrgencyBar.tsx
 * @responsibility: urgency and scarcity visualization component
 * @exports: UrgencyBar
 * @imports: framer-motion, lucide-react, optimized tokens
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Clock, Users, TrendingDown, AlertCircle } from "lucide-react";
import "../styles/optimized-tokens.css";

interface UrgencyBarProps {
  percentage: number;
  label: string;
  urgencyText?: string;
  variant?: 'savings' | 'scarcity' | 'progress';
  animated?: boolean;
  showIcon?: boolean;
  className?: string;
}

export default function UrgencyBar({
  percentage,
  label,
  urgencyText = "Últimas vagas disponíveis",
  variant = 'savings',
  animated = true,
  showIcon = true,
  className = ""
}: UrgencyBarProps) {
  
  // Color and icon configuration based on variant
  const getVariantConfig = () => {
    switch (variant) {
      case 'savings':
        return {
          barColor: 'from-success to-primary',
          textColor: 'text-success',
          icon: TrendingDown,
          bgColor: 'bg-success/10'
        };
      case 'scarcity':
        return {
          barColor: 'from-warning to-error',
          textColor: 'text-warning',
          icon: AlertCircle,
          bgColor: 'bg-warning/10'
        };
      case 'progress':
        return {
          barColor: 'from-primary to-primary-light',
          textColor: 'text-primary',
          icon: Users,
          bgColor: 'bg-primary/10'
        };
      default:
        return {
          barColor: 'from-primary to-primary-light',
          textColor: 'text-primary',
          icon: Clock,
          bgColor: 'bg-primary/10'
        };
    }
  };

  const config = getVariantConfig();
  const IconComponent = config.icon;

  return (
    <motion.div
      className={`urgency-bar ${className}`}
      initial={animated ? { opacity: 0, y: 10 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      transition={animated ? { duration: 0.4 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header with urgency text */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {showIcon && (
            <motion.div
              animate={animated ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <IconComponent className={`w-4 h-4 ${config.textColor}`} />
            </motion.div>
          )}
          <span className="text-small font-semibold text-secondary">
            {urgencyText}
          </span>
        </div>
        
        <motion.span
          className={`text-small font-black ${config.textColor}`}
          animate={animated ? {
            scale: [1, 1.05, 1],
            textShadow: [
              "0 0 0px currentColor",
              "0 0 8px currentColor",
              "0 0 0px currentColor"
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {percentage}%
        </motion.span>
      </div>

      {/* Progress bar container */}
      <div className={`
        relative rounded-full h-3 overflow-hidden
        ${config.bgColor} border border-primary-20
      `}>
        {/* Progress bar fill */}
        <motion.div
          className={`
            h-full bg-gradient-to-r ${config.barColor} 
            rounded-full relative overflow-hidden
          `}
          initial={animated ? { width: 0 } : { width: `${percentage}%` }}
          whileInView={animated ? { width: `${percentage}%` } : undefined}
          transition={animated ? { 
            duration: 1.5, 
            ease: "easeOut",
            delay: 0.2 
          } : undefined}
          viewport={{ once: true }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            animate={animated ? { x: ["-100%", "200%"] } : {}}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "linear",
              delay: 1.5 
            }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 w-1 h-5 bg-white rounded-full shadow-md"
          initial={animated ? { left: "0%" } : { left: `${percentage}%` }}
          whileInView={animated ? { left: `${percentage}%` } : undefined}
          transition={animated ? { 
            duration: 1.5, 
            ease: "easeOut",
            delay: 0.2 
          } : undefined}
          viewport={{ once: true }}
        />
      </div>

      {/* Label */}
      <div className="flex items-center justify-center mt-2">
        <span className="text-micro text-secondary-muted">
          {label}
        </span>
      </div>
    </motion.div>
  );
} 