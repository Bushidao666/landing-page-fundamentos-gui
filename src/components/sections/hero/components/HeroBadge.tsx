/**
 * @file: HeroBadge.tsx
 * @responsibility: Premium badge component for Hero Section
 * @exports: HeroBadge
 * @imports: motion, heroStyles, heroAnimations, createHoverScale
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { heroStyles, cn } from "../styles";
import { heroAnimations, createHoverScale } from "../animations";

interface HeroBadgeProps {
  icon: LucideIcon;
  text: string;
  trailingIcon: LucideIcon;
  className?: string;
  animate?: boolean;
}

export default function HeroBadge({
  icon: Icon,
  text,
  trailingIcon: TrailingIcon,
  className,
  animate = true,
}: HeroBadgeProps) {
  const MotionWrapper = animate ? motion.div : "div";
  const animationProps = animate
    ? {
        variants: heroAnimations.item,
        ...createHoverScale(1.02),
      }
    : {};

  return (
    <MotionWrapper
      className={cn(heroStyles.badge, className)}
      {...animationProps}
    >
      <Icon className={heroStyles.iconSmall} aria-hidden="true" />
      <span className="font-semibold uppercase tracking-wider">
        {text}
      </span>
      <TrailingIcon className={heroStyles.iconSmall} aria-hidden="true" />
    </MotionWrapper>
  );
}