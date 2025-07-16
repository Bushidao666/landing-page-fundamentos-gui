/**
 * @file: HeroScrollIndicator.tsx
 * @responsibility: Animated scroll indicator component
 * @exports: HeroScrollIndicator
 * @imports: motion, heroStyles, heroAnimations, createFloatingAnimation
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { heroStyles, cn } from "../styles";
import { heroAnimations, createFloatingAnimation } from "../animations";

interface HeroScrollIndicatorProps {
  className?: string;
  animate?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function HeroScrollIndicator({
  className,
  animate = true,
  onClick,
  ariaLabel = "Scroll para baixo",
}: HeroScrollIndicatorProps) {
  const MotionWrapper = animate ? motion.div : "div";
  const animationProps = animate
    ? {
        variants: heroAnimations.floating,
      }
    : {};

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default scroll behavior
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <MotionWrapper 
      className={cn(heroStyles.scrollIndicator, className)}
      {...animationProps}
    >
      <motion.button
        className={heroStyles.scrollIndicatorOuter}
        onClick={handleClick}
        aria-label={ariaLabel}
        {...(animate ? createFloatingAnimation() : {})}
      >
        <motion.div 
          className={heroStyles.scrollIndicatorInner}
          animate={animate ? { 
            opacity: [1, 0.3, 1],
            height: ["12px", "6px", "12px"],
          } : undefined}
          transition={animate ? { 
            duration: 2.5, 
            repeat: Infinity 
          } : undefined}
        />
      </motion.button>
    </MotionWrapper>
  );
}