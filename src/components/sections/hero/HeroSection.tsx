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
            <motion.div
              className={heroStyles.badge}
              variants={heroAnimations.item}
              {...createHoverScale(1.02)}
            >
              <BadgeIcon className={heroStyles.iconSmall} />
              <span className="font-semibold uppercase tracking-wider">
                {HERO_CONTENT.badge.text}
              </span>
              <BadgeTrailingIcon className={heroStyles.iconSmall} />
            </motion.div>

            {/* Main Headline */}
            <motion.div className={heroStyles.headlineWrapper} variants={heroAnimations.item}>
              <motion.h1
                className={heroStyles.headline}
                variants={heroAnimations.item}
              >
                <span className="block text-gray-200 font-normal mb-2 sm:mb-3">
                  {HERO_CONTENT.headline.prefix}
                </span>
                <motion.span 
                  className={heroStyles.shimmerText}
                  {...createShimmerAnimation()}
                >
                  {HERO_CONTENT.headline.highlight}
                </motion.span>
                <span className="block text-gray-100 font-light mt-2 sm:mt-3">
                  {HERO_CONTENT.headline.suffix}
                </span>
              </motion.h1>
              
              {/* Impact Metric */}
              <motion.div 
                className={heroStyles.metric}
                variants={heroAnimations.item}
              >
                <MetricIcon className={cn(heroStyles.iconMedium, "flex-shrink-0")} />
                <span className="text-center">{HERO_CONTENT.metric.text}</span>
              </motion.div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div className="space-y-4 sm:space-y-6" variants={heroAnimations.item}>
              <p className={heroStyles.valueProp}>
                {HERO_CONTENT.valueProp.main}{" "}
                <span className="text-[#D4AF37] font-semibold relative">
                  {HERO_CONTENT.valueProp.highlight1}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                  />
                </span>{" "}
                com o Kit de Inteligência Estratégica que te coloca no{" "}
                <span className="text-white font-semibold">{HERO_CONTENT.valueProp.highlight2}</span> das suas campanhas.
              </p>
              
              {/* USPs */}
              <div className={heroStyles.uspContainer}>
                {HERO_CONTENT.usps.map((usp, index) => {
                  const UspIcon = iconMap[usp.icon as keyof typeof iconMap];
                  return (
                    <motion.div 
                      key={index}
                      className={heroStyles.uspItem}
                      custom={index}
                      variants={heroAnimations.item}
                    >
                      <UspIcon className={cn(heroStyles.iconSmall, "text-[#D4AF37]")} />
                      <span>{usp.text}</span>
                    </motion.div>
                  );
                })}
              </div>
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