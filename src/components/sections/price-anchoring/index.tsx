/**
 * @file: PriceAnchoringSectionComplete-v2.tsx
 * @responsibility: Main orchestrator for refactored PriceAnchoring section
 * @exports: PriceAnchoringSectionComplete
 * @imports: All optimized price anchoring components
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PriceAnchoringProvider, usePriceAnchoring } from "./hooks/usePriceAnchoring";
import { SPACING, COLORS } from "./data/constants";
import { staggerContainerVariants, slideUpVariants } from "./utils/animations";

// Optimized imports
import PremiumBackground from "./components/organisms/PremiumBackground";
import OfferHeaderOptimized from "./components/molecules/OfferHeaderOptimized";
import ValueBreakdownOptimized from "./components/molecules/ValueBreakdownOptimized";
import TotalValueOptimized from "./components/molecules/TotalValueOptimized";

// Lazy load heavy components
const PriceRevealOptimized = lazy(() => import("./components/molecules/PriceRevealOptimized-v2"));
const SecurityBadges = lazy(() => import("./components/molecules/SecurityBadges"));

// Loading skeleton components
const CardSkeleton = () => (
  <div className="animate-pulse" style={{ marginBottom: SPACING.lg }}>
    <div className="h-24 rounded-2xl" style={{ backgroundColor: `${COLORS.text.primary}10` }} />
  </div>
);

const PriceSkeleton = () => (
  <div className="animate-pulse flex flex-col items-center" style={{ gap: SPACING.md }}>
    <div className="h-20 w-64 rounded-lg" style={{ backgroundColor: `${COLORS.text.primary}10` }} />
    <div className="h-14 w-80 rounded-lg" style={{ backgroundColor: `${COLORS.text.primary}10` }} />
  </div>
);

// Section content component
function PriceAnchoringContent() {
  const { 
    totalValue, 
    priceRevealed, 
    setPriceRevealed 
  } = usePriceAnchoring();
  
  // Intersection observer for animations
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
    freezeOnceVisible: true,
  });

  // Progressive price reveal
  useEffect(() => {
    if (hasIntersected && totalValue > 0) {
      const timer = setTimeout(() => {
        setPriceRevealed(true);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [hasIntersected, totalValue, setPriceRevealed]);

  return (
    <section
      ref={ref}
      id="price-anchoring"
      className="relative overflow-hidden"
      aria-labelledby="price-section-title"
      style={{ 
        isolation: 'isolate' // Performance optimization
      }}
    >
      {/* Responsive padding system */}
      <div style={{ 
        paddingBlock: SPACING['3xl'],
        position: 'relative'
      }}>
        
        {/* Premium background */}
        <PremiumBackground 
          className="z-0"
          reducedMotion={!hasIntersected}
        />

        {/* Main content container */}
        <motion.div 
          className="relative z-10 w-full mx-auto"
          style={{ 
            maxWidth: '90rem',
            paddingInline: SPACING.lg
          }}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          {/* Section header */}
          <div id="price-section-title" style={{ marginBottom: SPACING['2xl'] }}>
            <OfferHeaderOptimized />
          </div>

          {/* Value breakdown section */}
          <motion.div 
            className="mx-auto"
            style={{ 
              maxWidth: '80rem',
              marginBottom: SPACING['3xl']
            }}
            variants={slideUpVariants}
          >
            {/* Premium card container */}
            <div className="relative">
              {/* Card glow effect */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-xl opacity-50"
                style={{ 
                  background: `linear-gradient(to right, ${COLORS.primary}20, transparent, ${COLORS.primary}20)`,
                }}
                aria-hidden="true"
              />
              
              {/* Main card */}
              <div 
                className="relative backdrop-blur-xl rounded-3xl shadow-2xl"
                style={{
                  background: `linear-gradient(to bottom right, ${COLORS.surface.glass}, ${COLORS.surface.glassHover})`,
                  border: `1px solid ${COLORS.border.default}`,
                  padding: SPACING['2xl'],
                }}
              >
                {/* Value items with loading state */}
                <Suspense fallback={
                  <div>
                    {[1,2,3,4].map(i => <CardSkeleton key={i} />)}
                  </div>
                }>
                  <ValueBreakdownOptimized />
                </Suspense>
                
                {/* Total value display */}
                {totalValue > 0 && (
                  <Suspense fallback={<CardSkeleton />}>
                    <TotalValueOptimized total={totalValue} />
                  </Suspense>
                )}
              </div>
            </div>
          </motion.div>

          {/* Price reveal section */}
          <motion.div 
            className="mx-auto"
            style={{ maxWidth: '64rem' }}
            variants={slideUpVariants}
          >
            {/* Section title */}
            <motion.h3
              className="text-center font-serif font-semibold leading-tight"
              style={{
                fontSize: SPACING['2xl'],
                color: COLORS.text.primary,
                marginBottom: SPACING.xl
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: hasIntersected ? 1 : 0, y: hasIntersected ? 0 : 20 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Seu Investimento para{" "}
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primaryLight})`,
                }}
              >
                Dominar Google Ads
              </span>
            </motion.h3>


            {/* Price reveal and CTA */}
            <Suspense fallback={priceRevealed ? <PriceSkeleton /> : null}>
              <PriceRevealOptimized 
                isRevealed={priceRevealed}
                onCtaClick={() => {
                  // Handle CTA click
                  console.log('CTA clicked');
                }}
              />
            </Suspense>

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
          background: `linear-gradient(to top, ${COLORS.background.dark}, transparent)`,
        }}
        aria-hidden="true"
      />
      
      {/* Global animations */}
      <style jsx>{`
        @keyframes animate-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 100%;
          animation: animate-gradient 3s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

// Main export with provider
export default function PriceAnchoringSectionComplete() {
  return (
    <PriceAnchoringProvider>
      <PriceAnchoringContent />
    </PriceAnchoringProvider>
  );
}