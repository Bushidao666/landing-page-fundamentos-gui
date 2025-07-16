"use client";

import { motion } from "framer-motion";
import { useEffect, Suspense, lazy, memo } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  PriceAnchoringProvider,
  usePriceAnchoring,
  OfferHeaderOptimized,
  ValueBreakdownOptimized,
  TotalValueOptimized,
  PaymentOptionsOptimized,
  PriceRevealOptimized,
  PremiumBackground,
  SPACING,
  TYPOGRAPHY,
  COLORS,
  ANIMATION
} from "./offer-summary";

// Lazy load security badges
const SecurityBadges = lazy(() => import("./offer-summary/SecurityBadges"));

// Removed - now imported from offer-summary

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.slow / 1000,
      staggerChildren: ANIMATION.stagger.normal,
    },
  },
};

const sectionVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.slow / 1000,
      ease: ANIMATION.easing.smooth,
    },
  },
};

// Inner component that uses the context
const PriceAnchoringContent = memo(() => {
  const {
    totalValue,
    priceRevealed,
    selectedPayment,
    setPriceRevealed,
    setSelectedPayment,
    setTotalValue
  } = usePriceAnchoring();
  
  // Intersection observer
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
    freezeOnceVisible: true,
  });

  // Progressive price reveal with performance optimization
  useEffect(() => {
    if (hasIntersected && totalValue > 0) {
      const timer = setTimeout(() => {
        setPriceRevealed(true);
      }, ANIMATION.duration.slower);
      
      return () => clearTimeout(timer);
    }
  }, [hasIntersected, totalValue, setPriceRevealed]);

  return (
    <section
      ref={ref}
      id="price-anchoring"
      className="relative overflow-hidden"
      aria-labelledby="price-section-title"
    >
      {/* Responsive padding with fluid system */}
      <div 
        style={{
          paddingTop: SPACING['3xl'],
          paddingBottom: SPACING['3xl']
        }}
      >
        {/* Premium background */}
        <PremiumBackground reducedMotion={false} />

        {/* Main content container */}
        <motion.div 
          className="relative z-10 container-fluid"
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section header */}
          <div 
            id="price-section-title" 
            style={{ marginBottom: SPACING['2xl'] }}
          >
            <OfferHeaderOptimized />
          </div>

          {/* Value breakdown section */}
          <motion.div 
            className="max-w-5xl mx-auto"
            style={{ marginBottom: SPACING['3xl'] }}
            variants={sectionVariants}
          >
            {/* Premium card container */}
            <div className="relative">
              {/* Card glow effect */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-xl opacity-50"
                style={{
                  background: `linear-gradient(to right, ${COLORS.primary}20, transparent, ${COLORS.primary}20)`
                }}
              />
              
              {/* Main card */}
              <div 
                className="relative backdrop-blur-xl rounded-3xl shadow-2xl"
                style={{
                  background: `linear-gradient(to bottom right, ${COLORS.surface.glass}, ${COLORS.surface.glass}50)`,
                  padding: SPACING['2xl'],
                  border: `1px solid ${COLORS.border.default}`,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                {/* Value items */}
                <Suspense fallback={
                  <div className="space-y-4">
                    {[1,2,3,4].map(i => (
                      <div 
                        key={i} 
                        className="animate-pulse h-20 rounded-xl"
                        style={{ backgroundColor: COLORS.surface.glassHover }}
                      />
                    ))}
                  </div>
                }>
                  <ValueBreakdownOptimized onTotalCalculated={setTotalValue} />
                </Suspense>
                
                {/* Total value display */}
                {totalValue > 0 && (
                  <Suspense fallback={
                    <div 
                      className="animate-pulse h-32 rounded-xl mt-6"
                      style={{ backgroundColor: COLORS.surface.glassHover }}
                    />
                  }>
                    <TotalValueOptimized total={totalValue} />
                  </Suspense>
                )}
              </div>
            </div>
          </motion.div>

          {/* Price reveal section */}
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={sectionVariants}
          >
            {/* Section title */}
            <motion.h3
              className="text-center font-serif font-semibold leading-tight"
              style={{
                fontSize: TYPOGRAPHY.display.md,
                color: COLORS.text.primary,
                marginBottom: SPACING['2xl']
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: hasIntersected ? 1 : 0, y: hasIntersected ? 0 : 20 }}
              transition={{ delay: 1, duration: ANIMATION.duration.slow / 1000 }}
            >
              Seu Investimento para{" "}
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primaryLight})`
                }}
              >
                Dominar Google Ads
              </span>
            </motion.h3>

            {/* Payment options */}
            {hasIntersected && totalValue > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: priceRevealed ? 1 : 0, y: priceRevealed ? 0 : 20 }}
                transition={{ duration: ANIMATION.duration.normal / 1000 }}
              >
                <PaymentOptionsOptimized 
                  selectedOption={selectedPayment}
                  onOptionChange={setSelectedPayment}
                />
              </motion.div>
            )}

            {/* Price reveal and CTA */}
            <div style={{ marginTop: SPACING['2xl'] }}>
              <PriceRevealOptimized 
                isRevealed={priceRevealed}
                paymentOption={selectedPayment}
              />
            </div>

            {/* Security badges */}
            {priceRevealed && (
              <Suspense fallback={null}>
                <SecurityBadges />
              </Suspense>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '8rem',
          background: `linear-gradient(to top, ${COLORS.background.dark}, transparent)`
        }}
      />
    </section>
  );
});

PriceAnchoringContent.displayName = 'PriceAnchoringContent';

// Main component with provider
export default function PriceAnchoringSectionComplete() {
  return (
    <PriceAnchoringProvider>
      <PriceAnchoringContent />
    </PriceAnchoringProvider>
  );
}