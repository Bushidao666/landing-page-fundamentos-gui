/**
 * @file: ValueCard.tsx
 * @responsibility: Individual value card component with optimized animations
 * @exports: ValueCard
 * @imports: motion, types, constants
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import React, { memo, useState } from "react";
import { ValueItem } from "../types";
import { COLORS, SPACING, TYPOGRAPHY, ANIMATION, TOUCH_TARGET } from "../constants";

interface ValueCardProps {
  item: ValueItem;
  index: number;
  onHover?: (isHovered: boolean) => void;
  animationDelay?: number;
}

// Memoized price formatter component
const AnimatedPrice = memo(({ 
  target, 
  delay = 0,
  duration = 1200 
}: { 
  target: number; 
  delay?: number;
  duration?: number;
}) => {
  const [displayValue, setDisplayValue] = useState("0");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Smooth easing
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(target * easeOutQuart);
        
        setDisplayValue(currentValue.toLocaleString('pt-BR'));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay, duration]);

  return <span>{displayValue}</span>;
});

AnimatedPrice.displayName = 'AnimatedPrice';

export const ValueCard = memo(({ 
  item, 
  index, 
  onHover,
  animationDelay = 0 
}: ValueCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  return (
    <motion.article
      className="relative group"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        delay: animationDelay + (index * ANIMATION.stagger.normal), 
        duration: ANIMATION.duration.normal / 1000,
        ease: ANIMATION.easing.smooth
      }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      role="listitem"
      aria-label={`${item.name}: R$ ${item.value}`}
    >
      {/* Card container */}
      <motion.div
        className="relative overflow-hidden rounded-2xl transition-all duration-300"
        style={{
          backgroundColor: COLORS.surface.glass,
          border: `1px solid ${isHovered ? COLORS.border.hover : COLORS.border.default}`,
        }}
        whileHover={{ 
          x: 6,
          transition: { duration: 0.2 }
        }}
      >
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `linear-gradient(to right, ${COLORS.surface.overlay}, transparent)`
          }}
        />

        {/* Content container */}
        <div 
          className="relative flex items-center gap-4 p-6"
          style={{ 
            minHeight: TOUCH_TARGET.large,
            padding: SPACING.md 
          }}
        >
          {/* Icon container */}
          <motion.div 
            className="relative flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div 
              className={`relative flex items-center justify-center rounded-2xl
                         bg-gradient-to-br ${item.gradient}
                         shadow-lg transition-shadow duration-300`}
              style={{
                width: '4rem',
                height: '4rem',
                boxShadow: isHovered ? '0 8px 24px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.2)'
              }}
            >
              {/* Icon */}
              <item.icon 
                className="relative z-10 text-white" 
                size={28}
                aria-hidden="true"
              />
              
              {/* Order badge */}
              <div 
                className="absolute -top-2 -right-2 
                           bg-[#0A192F] border-2 rounded-full 
                           flex items-center justify-center
                           text-xs font-bold"
                style={{
                  borderColor: `${COLORS.primary}30`,
                  color: COLORS.primary,
                  width: '1.75rem',
                  height: '1.75rem'
                }}
              >
                {item.order}
              </div>
            </div>
          </motion.div>
          
          {/* Content section */}
          <div className="flex-1 min-w-0 space-y-1">
            {/* Title row */}
            <div className="flex items-center gap-2 flex-wrap">
              <h3 
                className="font-semibold transition-colors duration-300"
                style={{ 
                  fontSize: TYPOGRAPHY.heading.md,
                  color: isHovered ? COLORS.text.primary : COLORS.text.secondary
                }}
              >
                {item.name}
              </h3>
              
              {item.highlight && (
                <motion.span 
                  className="inline-flex items-center px-3 py-1 
                             text-xs font-bold uppercase tracking-wider
                             rounded-full shadow-sm"
                  style={{
                    backgroundColor: `${COLORS.primary}20`,
                    border: `1px solid ${COLORS.primary}30`,
                    color: COLORS.primary
                  }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  {item.highlight}
                </motion.span>
              )}
            </div>
            
            {/* Description */}
            <p 
              className="transition-colors duration-300"
              style={{ 
                fontSize: TYPOGRAPHY.body.md,
                color: isHovered ? COLORS.text.secondary : COLORS.text.muted
              }}
            >
              {item.description}
            </p>
          </div>

          {/* Price section */}
          <div className="text-right flex-shrink-0 space-y-1">
            <motion.div 
              className="font-black tabular-nums"
              style={{ 
                fontSize: TYPOGRAPHY.price.main,
                color: COLORS.primary
              }}
              animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <span style={{ fontSize: TYPOGRAPHY.price.currency }}>R$</span>
              {" "}
              <AnimatedPrice 
                target={item.value} 
                delay={300 + (index * 150)}
                duration={1200}
              />
            </motion.div>
            
            <div 
              className="uppercase tracking-wider font-medium"
              style={{ 
                fontSize: TYPOGRAPHY.body.sm,
                color: COLORS.text.disabled
              }}
            >
              Valor Real
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5"
          style={{ backgroundColor: COLORS.primary }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ 
            delay: 0.5 + (index * 0.15), 
            duration: 0.8,
            ease: "easeOut"
          }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </motion.article>
  );
});

ValueCard.displayName = 'ValueCard';