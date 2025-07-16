/**
 * @file: HeroMetric.tsx
 * @responsibility: Impact metric display component
 * @exports: HeroMetric
 * @imports: motion, LucideIcon, heroStyles, heroAnimations
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { heroStyles, cn } from "../styles";
import { heroAnimations } from "../animations";

interface HeroMetricProps {
  icon: LucideIcon;
  text: string;
  className?: string;
  animate?: boolean;
}

export default function HeroMetric({
  icon: Icon,
  text,
  className,
  animate = true,
}: HeroMetricProps) {
  const MotionWrapper = animate ? motion.div : "div";
  const animationProps = animate
    ? {
        variants: heroAnimations.item,
      }
    : {};

  return (
    <MotionWrapper
      className={cn(heroStyles.metric, className)}
      {...animationProps}
    >
      <Icon 
        className={cn(heroStyles.iconMedium, "flex-shrink-0")} 
        aria-hidden="true"
      />
      <span className="text-center">{text}</span>
    </MotionWrapper>
  );
}