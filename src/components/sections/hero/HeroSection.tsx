/**
 * @file: HeroSection.tsx
 * @responsibility: Main Hero Section orchestrator component
 * @exports: HeroSection
 * @imports: HeroBackground, heroAnimations, heroStyles, HERO_CONTENT
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle, Shield, Clock, TrendingUp, Target, Zap, Award 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground from "./components/HeroBackground";
import HeroBadge from "./components/HeroBadge";
import HeroHeadline from "./components/HeroHeadline";
import HeroMetric from "./components/HeroMetric";
import HeroValueProp from "./components/HeroValueProp";
import HeroUSPs from "./components/HeroUSPs";
import { heroAnimations, createShimmerAnimation, createHoverScale, createFloatingAnimation } from "./animations";
import { heroStyles, cn } from "./styles";
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
  const BadgeIcon = iconMap[HERO_CONTENT.badge.icon as keyof typeof iconMap];
  const BadgeTrailingIcon = iconMap[HERO_CONTENT.badge.trailingIcon as keyof typeof iconMap];
  const MetricIcon = iconMap[HERO_CONTENT.metric.icon as keyof typeof iconMap];
  const CTAIcon = iconMap[HERO_CONTENT.cta.icon as keyof typeof iconMap];
  const CTATrailingIcon = iconMap[HERO_CONTENT.cta.trailingIcon as keyof typeof iconMap];

  return (
    <motion.section
      id="hero"
      className={heroStyles.section}
      variants={heroAnimations.container}
      initial="hidden"
      animate="visible"
    >
      {/* Optimized Background Component */}
      <HeroBackground />

      <div className={heroStyles.container}>
        <div className={heroStyles.contentWrapper}>
          
          {/* Main Content Column */}
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

            {/* Main Headline */}
            <motion.div className={heroStyles.headlineWrapper} variants={heroAnimations.item}>
              <HeroHeadline
                prefix={HERO_CONTENT.headline.prefix}
                highlight={HERO_CONTENT.headline.highlight}
                suffix={HERO_CONTENT.headline.suffix}
              />
              
              {/* Impact Metric */}
              <HeroMetric
                icon={MetricIcon}
                text={HERO_CONTENT.metric.text}
              />
            </motion.div>

            {/* Value Proposition */}
            <motion.div className="space-y-4 sm:space-y-6" variants={heroAnimations.item}>
              <HeroValueProp
                mainText="Descubra como transformar cliques em {0} com o Kit de Inteligência Estratégica que te coloca no {1} das suas campanhas."
                highlights={[
                  { text: HERO_CONTENT.valueProp.highlight1, underline: true },
                  { text: HERO_CONTENT.valueProp.highlight2, className: "text-white" }
                ]}
              />
              
              {/* USPs */}
              <HeroUSPs
                items={HERO_CONTENT.usps.map(usp => ({
                  icon: iconMap[usp.icon as keyof typeof iconMap],
                  text: usp.text
                }))}
              />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className={heroStyles.ctaWrapper}
              variants={heroAnimations.item}
            >
              <motion.div
                {...createHoverScale()}
                className="group"
              >
                <Button 
                  size="lg" 
                  className={heroStyles.ctaButton}
                  aria-label={HERO_CONTENT.cta.text}
                >
                  {/* Shine Effect */}
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
                  
                  <span className="relative flex items-center gap-2 sm:gap-3 md:gap-4 z-10">
                    <CTAIcon className={cn(heroStyles.iconLarge, "group-hover:rotate-12 transition-transform duration-300")} />
                    <span className="tracking-wide">{HERO_CONTENT.cta.text}</span>
                    <CTATrailingIcon className={heroStyles.iconMedium} />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className={heroStyles.trustContainer}
              variants={heroAnimations.floating}
            >
              {HERO_CONTENT.trust.map((trust, index) => {
                const TrustIcon = iconMap[trust.icon as keyof typeof iconMap];
                return (
                  <motion.div 
                    key={index}
                    className={heroStyles.trustBadge}
                    {...createHoverScale(1.05)}
                    custom={index}
                    variants={heroAnimations.item}
                  >
                    <TrustIcon className={cn(heroStyles.iconMedium, "text-[#D4AF37] flex-shrink-0")} />
                    <span className="font-medium whitespace-nowrap">{trust.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className={heroStyles.scrollIndicator}
        variants={heroAnimations.floating}
      >
        <motion.div 
          className={heroStyles.scrollIndicatorOuter}
          {...createFloatingAnimation()}
        >
          <motion.div 
            className={heroStyles.scrollIndicatorInner}
            animate={{ 
              opacity: [1, 0.3, 1],
              height: ["12px", "6px", "12px"],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Shimmer Animation CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
}