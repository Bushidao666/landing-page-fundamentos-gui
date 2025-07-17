/**
 * @file: PremiumBackground.tsx
 * @responsibility: Optimized premium background component for PriceAnchoring section
 * @exports: PremiumBackground
 * @imports: motion from framer-motion
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";

interface PremiumBackgroundProps {
  className?: string;
  reducedMotion?: boolean;
}

export default function PremiumBackground({ 
  className = "", 
  reducedMotion = false 
}: PremiumBackgroundProps) {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Base gradient - Optimized with CSS native gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#1a2444] to-[#0f1419]" />
      
      {/* Premium accent layer - Reduced complexity */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: reducedMotion ? 0.3 : 1 }}
        transition={{ duration: reducedMotion ? 0 : 1.5 }}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-1/4 w-[min(600px,50vw)] h-[min(600px,50vh)] bg-gradient-radial from-[#D4AF37]/8 to-transparent rounded-full blur-3xl will-change-transform animate-pulse-subtle" />
        
        {/* Bottom accent */}
        <div className="absolute bottom-0 right-1/4 w-[min(500px,40vw)] h-[min(500px,40vh)] bg-gradient-radial from-blue-600/6 to-transparent rounded-full blur-2xl will-change-transform animate-pulse-subtle-delayed" />
      </motion.div>
      
      {/* Vignette effect for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
      
      {/* Performance optimization styles */}
      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% { 
            opacity: 0.8;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.05);
          }
        }
        
        @keyframes pulse-subtle-delayed {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 8s ease-in-out infinite;
        }
        
        .animate-pulse-subtle-delayed {
          animation: pulse-subtle-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-subtle,
          .animate-pulse-subtle-delayed {
            animation: none;
          }
        }
        
        /* GPU optimization */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from), transparent);
          contain: layout style paint;
        }
      `}</style>
    </div>
  );
}