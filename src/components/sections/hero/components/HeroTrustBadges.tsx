/**
 * @file: HeroTrustBadges.tsx
 * @responsibility: Trust indicators badges component
 * @exports: HeroTrustBadges
 * @imports: motion, LucideIcon, heroStyles, heroAnimations, createHoverScale
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { heroStyles, cn } from "../styles";
import { heroAnimations, createHoverScale } from "../animations";

interface TrustBadgeItem {
  icon: LucideIcon;
  text: string;
}

interface HeroTrustBadgesProps {
  items: TrustBadgeItem[];
  className?: string;
  animate?: boolean;
  staggerDelay?: number;
}

export default function HeroTrustBadges({
  items,
  className,
  animate = true,
  staggerDelay = 0.1,
}: HeroTrustBadgesProps) {
  const MotionWrapper = animate ? motion.div : "div";
  const containerProps = animate
    ? {
        variants: heroAnimations.floating,
      }
    : {};

  return (
    <MotionWrapper
      className={cn(heroStyles.trustContainer, className)}
      {...containerProps}
    >
      {items.map((trust, index) => {
        const Icon = trust.icon;
        const BadgeWrapper = animate ? motion.div : "div";
        const badgeProps = animate
          ? {
              ...createHoverScale(1.05),
              custom: index,
              variants: heroAnimations.item,
              initial: "hidden",
              animate: "visible",
              transition: {
                delay: index * staggerDelay,
              },
            }
          : {};

        return (
          <BadgeWrapper
            key={index}
            className={heroStyles.trustBadge}
            {...badgeProps}
          >
            <Icon 
              className={cn(
                heroStyles.iconMedium, 
                "text-[#D4AF37] flex-shrink-0"
              )} 
              aria-hidden="true"
            />
            <span className="font-medium whitespace-nowrap">
              {trust.text}
            </span>
          </BadgeWrapper>
        );
      })}
    </MotionWrapper>
  );
}