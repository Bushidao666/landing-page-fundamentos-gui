/**
 * @file: HeroHeadline.tsx
 * @responsibility: Main headline component with animated highlight
 * @exports: HeroHeadline
 * @imports: motion, heroStyles, heroAnimations, createShimmerAnimation
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { heroStyles, cn } from "../styles";
import { heroAnimations, createShimmerAnimation } from "../animations";

interface HeroHeadlineProps {
  prefix: string;
  highlight: string;
  suffix: string;
  className?: string;
  animate?: boolean;
}

export default function HeroHeadline({
  prefix,
  highlight,
  suffix,
  className,
  animate = true,
}: HeroHeadlineProps) {
  const MotionWrapper = animate ? motion.h1 : "h1";
  const animationProps = animate
    ? {
        variants: heroAnimations.item,
      }
    : {};

  return (
    <MotionWrapper
      className={cn(heroStyles.headline, className)}
      {...animationProps}
    >
      <span className="block text-gray-200 font-normal mb-2 sm:mb-3">
        {prefix}
      </span>
      
      <motion.span 
        className={heroStyles.shimmerText}
        {...(animate ? createShimmerAnimation() : {})}
      >
        {highlight}
      </motion.span>
      
      <span className="block text-gray-100 font-light mt-2 sm:mt-3">
        {suffix}
      </span>
    </MotionWrapper>
  );
}