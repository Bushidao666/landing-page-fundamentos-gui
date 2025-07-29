/**
 * @file: HeroCTA.tsx
 * @responsibility: Call-to-action button component with premium effects
 * @exports: HeroCTA
 * @imports: motion, Button, LucideIcon, heroStyles, createHoverScale
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroStyles, cn } from "../styles";
import { heroAnimations, createHoverScale } from "../animations";

interface HeroCTAProps {
  text: string;
  icon?: LucideIcon;
  trailingIcon?: LucideIcon;
  onClick?: () => void;
  action?: string;
  className?: string;
  animate?: boolean;
  shimmerEffect?: boolean;
  ariaLabel?: string;
}

export default function HeroCTA({
  text,
  icon: Icon,
  trailingIcon: TrailingIcon,
  onClick,
  action,
  className,
  animate = true,
  shimmerEffect = true,
  ariaLabel,
}: HeroCTAProps) {
  
  const handleClick = () => {
    if (action === "scroll-to-pain-points") {
      document.getElementById("pain-points")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else if (onClick) {
      onClick();
    }
  };
  const MotionWrapper = animate ? motion.div : "div";
  const animationProps = animate
    ? {
        variants: heroAnimations.item,
      }
    : {};

  return (
    <MotionWrapper
      className={cn(heroStyles.ctaWrapper, className)}
      {...animationProps}
    >
      <motion.div
        {...(animate ? createHoverScale() : {})}
        className="group"
      >
        <Button 
          size="lg" 
          className={heroStyles.ctaButton}
          onClick={handleClick}
          aria-label={ariaLabel || text}
        >
          {/* Shimmer Effect */}
          {shimmerEffect && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          )}
          
          <span className="relative flex items-center gap-1.5 sm:gap-2 md:gap-3 z-10">
            {Icon && (
              <Icon 
                className={cn(
                  heroStyles.iconLarge, 
                  "group-hover:rotate-12 transition-transform duration-300 flex-shrink-0"
                )} 
                aria-hidden="true"
              />
            )}
            <span className="tracking-wide text-center">{text}</span>
            {TrailingIcon && (
              <TrailingIcon 
                className={cn(heroStyles.iconMedium, "flex-shrink-0")} 
                aria-hidden="true"
              />
            )}
          </span>
        </Button>
      </motion.div>
    </MotionWrapper>
  );
}