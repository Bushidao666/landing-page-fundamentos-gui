"use client";

import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Import optimized components
import OfferHeaderOptimized from "./offer-summary/OfferHeaderOptimized";
import ValueBreakdownOptimized from "./offer-summary/ValueBreakdownOptimized";
import TotalValueOptimized from "./offer-summary/TotalValueOptimized";
import PaymentOptionsOptimized from "./offer-summary/PaymentOptionsOptimized";
import PriceRevealOptimized from "./offer-summary/PriceRevealOptimized";

// Lazy load security badges for performance
const SecurityBadges = dynamic(() => import("./offer-summary/SecurityBadges"), {
  loading: () => null,
});

// Enhanced background with performance optimizations
const PremiumBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Base gradient - Optimized layers */}
    <div className="absolute inset-0 bg-gradient-to-br 
                    from-[#0A192F] via-[#1a2444] to-[#0f1419]" />
    
    {/* Premium texture overlay */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] 
                      bg-gradient-radial from-[#D4AF37]/10 to-transparent 
                      rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] 
                      bg-gradient-radial from-blue-600/10 to-transparent 
                      rounded-full blur-2xl" />
    </div>
    
    {/* Subtle grid pattern for depth */}
    <div className="absolute inset-0 opacity-[0.015]"
         style={{
           backgroundImage: `
             linear-gradient(to right, #D4AF37 1px, transparent 1px),
             linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
           `,
           backgroundSize: '100px 100px'
         }}
    />
    
    {/* Vignette effect */}
    <div className="absolute inset-0 
                    bg-gradient-to-t from-black/50 via-transparent to-black/30" />
  </div>
);

// Optimized container animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function PriceAnchoringSectionComplete() {
  const [priceRevealed, setPriceRevealed] = useState(false);
  const [paymentOption, setPaymentOption] = useState<'installments' | 'cash'>('installments');
  const [totalValue, setTotalValue] = useState(0);
  
  // Intersection observer for viewport-based animations
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
      }, 1800);
      
      return () => clearTimeout(timer);
    }
  }, [hasIntersected, totalValue]);

  return (
    <section
      ref={ref}
      id="price-anchoring"
      className="relative overflow-hidden"
      aria-labelledby="price-section-title"
    >
      {/* Responsive padding system */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        
        {/* Premium background */}
        <PremiumBackground />

        {/* Main content container with optimal constraints */}
        <motion.div 
          className="relative z-10 container-fluid"
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section header */}
          <div id="price-section-title" className="mb-8 sm:mb-12 lg:mb-16">
            <OfferHeaderOptimized />
          </div>

          {/* Value breakdown section */}
          <motion.div 
            className="max-w-5xl mx-auto mb-10 sm:mb-14 lg:mb-20"
            variants={sectionVariants}
          >
            {/* Premium card container */}
            <div className="relative">
              {/* Card glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r 
                              from-[#D4AF37]/20 via-transparent to-[#D4AF37]/20 
                              rounded-3xl blur-xl opacity-50" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br 
                              from-white/[0.03] to-white/[0.01]
                              backdrop-blur-xl 
                              rounded-2xl sm:rounded-3xl 
                              p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
                              border border-white/[0.08]
                              shadow-2xl shadow-black/20">
                
                {/* Value items with lazy loading */}
                <Suspense fallback={
                  <div className="space-y-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="animate-pulse h-20 bg-white/5 rounded-xl" />
                    ))}
                  </div>
                }>
                  <ValueBreakdownOptimized onTotalCalculated={setTotalValue} />
                </Suspense>
                
                {/* Total value display */}
                {totalValue > 0 && (
                  <Suspense fallback={<div className="animate-pulse h-32 bg-white/5 rounded-xl mt-6" />}>
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
              className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 
                         font-serif font-semibold text-white 
                         mb-8 sm:mb-10 lg:mb-12
                         leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: hasIntersected ? 1 : 0, y: hasIntersected ? 0 : 20 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Seu Investimento para{" "}
              <span className="text-transparent bg-clip-text 
                               bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
                Dominar Google Ads
              </span>
            </motion.h3>

            {/* Payment options - Only show when price is calculated */}
            {hasIntersected && totalValue > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: priceRevealed ? 1 : 0, y: priceRevealed ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <PaymentOptionsOptimized 
                  selectedOption={paymentOption}
                  onOptionChange={setPaymentOption}
                />
              </motion.div>
            )}

            {/* Price reveal and CTA */}
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <PriceRevealOptimized 
                isRevealed={priceRevealed}
                paymentOption={paymentOption}
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
      <div className="absolute bottom-0 left-0 right-0 h-32 
                      bg-gradient-to-t from-[#0A192F] to-transparent 
                      pointer-events-none" />
    </section>
  );
}