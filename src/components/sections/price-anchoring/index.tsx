/**
 * @file: PriceAnchoringSectionComplete-v2.tsx
 * @responsibility: Main orchestrator for refactored PriceAnchoring section
 * @exports: PriceAnchoringSectionComplete
 * @imports: All optimized price anchoring components
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PriceAnchoringProvider, usePriceAnchoring } from "./hooks/usePriceAnchoring";
import { SPACING, COLORS } from "./data/constants";
import { staggerContainerVariants, slideUpVariants } from "./utils/animations";

// Optimized imports
import PremiumBackground from "./components/organisms/PremiumBackground";

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
  // Intersection observer for animations
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      id="price-anchoring"
      className="relative overflow-hidden cv-auto"
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
            <Suspense fallback={<PriceSkeleton />}>
              <PriceRevealOptimized 
                isRevealed={true}
                paymentOption="installments"
                onCtaClick={() => {
                  // Abre modal de captura de lead
                  window.dispatchEvent(new CustomEvent('openLeadCaptureModal'));
                }}
              />
            </Suspense>

            {/* Security badges */}
            <Suspense fallback={null}>
              <SecurityBadges />
            </Suspense>
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