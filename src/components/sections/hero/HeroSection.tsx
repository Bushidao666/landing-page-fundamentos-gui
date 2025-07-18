/**
 * @file: HeroSection.tsx
 * @responsibility: Main Hero Section orchestrator component
 * @exports: HeroSection
 * @imports: All hero components, animations, styles, constants
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle, Shield, Clock, TrendingUp, Target, Zap, Award 
} from "lucide-react";
import {
  HeroBackground,
  HeroBadge,
  HeroHeadline,
  HeroMetric,
  HeroValueProp,
  HeroUSPs,
  HeroCTA,
  HeroTrustBadges,
  HeroScrollIndicator,
} from "./components";
import { heroAnimations } from "./animations";
import { heroStyles } from "./styles";
import { HERO_CONTENT } from "./constants";

const iconMap = {
  Target,
  TrendingUp,
  Zap,
  Award,
  Shield,
  Clock,
  CheckCircle,
} as const;

export default function HeroSection() {
  // Map icons from content
  const BadgeIcon = iconMap[HERO_CONTENT.badge.icon as keyof typeof iconMap];
  const BadgeTrailingIcon = iconMap[HERO_CONTENT.badge.trailingIcon as keyof typeof iconMap];
  const MetricIcon = iconMap[HERO_CONTENT.metric.icon as keyof typeof iconMap];
  const CTAIcon = iconMap[HERO_CONTENT.cta.icon as keyof typeof iconMap];
  const CTATrailingIcon = iconMap[HERO_CONTENT.cta.trailingIcon as keyof typeof iconMap];

  // Prepare data for components
  const uspItems = HERO_CONTENT.usps.map(usp => ({
    icon: iconMap[usp.icon as keyof typeof iconMap],
    text: usp.text,
  }));

  const trustItems = HERO_CONTENT.trust.map(trust => ({
    icon: iconMap[trust.icon as keyof typeof iconMap],
    text: trust.text,
  }));

  return (
    <motion.section
      id="hero"
      className={heroStyles.section}
      variants={heroAnimations.container}
      initial="hidden"
      animate="visible"
    >
      {/* Optimized Background */}
      <HeroBackground />

      {/* Main Content Container */}
      <div className={heroStyles.container}>
        <div className={heroStyles.contentWrapper}>
          
          {/* Content Column */}
          <motion.div
            className={heroStyles.contentColumn}
            variants={heroAnimations.container}
          >
            {/* Premium Badge */}
            <HeroBadge
              icon={BadgeIcon}
              text={HERO_CONTENT.badge.text}
              trailingIcon={BadgeTrailingIcon}
            />

            {/* Headline Group */}
            <motion.div 
              className={heroStyles.headlineWrapper} 
              variants={heroAnimations.item}
            >
              <HeroHeadline
                prefix={HERO_CONTENT.headline.prefix}
                highlight={HERO_CONTENT.headline.highlight}
                suffix={HERO_CONTENT.headline.suffix}
              />
              
              <HeroMetric
                icon={MetricIcon}
                text={HERO_CONTENT.metric.text}
              />
            </motion.div>

            {/* Value Proposition & USPs */}
            <motion.div 
              className="space-y-4 sm:space-y-6" 
              variants={heroAnimations.item}
            >
              <HeroValueProp
                mainText="Descubra como transformar cliques em {0} com o Kit de Inteligência Estratégica que te coloca no {1} das suas campanhas."
                highlights={[
                  { text: HERO_CONTENT.valueProp.highlight1, underline: true },
                  { text: HERO_CONTENT.valueProp.highlight2, className: "text-white" }
                ]}
              />
              
              <HeroUSPs items={uspItems} />
            </motion.div>

            {/* CTA Button */}
            <HeroCTA
              text={HERO_CONTENT.cta.text}
              icon={CTAIcon}
              trailingIcon={CTATrailingIcon}
              action={HERO_CONTENT.cta.action}
            />

            {/* Trust Indicators */}
            <HeroTrustBadges
              items={trustItems}
              staggerDelay={0.15}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <HeroScrollIndicator />

      {/* Global Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-shimmer {
            animation: none;
          }
        }
      `}</style>
    </motion.section>
  );
}