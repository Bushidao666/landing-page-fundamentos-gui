/**
 * @file: HeroUSPs.tsx
 * @responsibility: Unique Selling Points display component
 * @exports: HeroUSPs
 * @imports: motion, LucideIcon, heroStyles, heroAnimations
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { heroStyles, cn } from "../styles";
import { heroAnimations } from "../animations";

interface USPItem {
  icon: LucideIcon;
  text: string;
}

interface HeroUSPsProps {
  items: USPItem[];
  className?: string;
  animate?: boolean;
}

export default function HeroUSPs({
  items,
  className,
  animate = true,
}: HeroUSPsProps) {
  return (
    <div className={cn(heroStyles.uspContainer, className)}>
      {items.map((usp, index) => {
        const Icon = usp.icon;
        const MotionWrapper = animate ? motion.div : "div";
        const animationProps = animate
          ? {
              custom: index,
              variants: heroAnimations.item,
            }
          : {};

        return (
          <MotionWrapper
            key={index}
            className={heroStyles.uspItem}
            {...animationProps}
          >
            <Icon 
              className={cn(heroStyles.iconSmall, "text-[#D4AF37]")} 
              aria-hidden="true"
            />
            <span>{usp.text}</span>
          </MotionWrapper>
        );
      })}
    </div>
  );
}