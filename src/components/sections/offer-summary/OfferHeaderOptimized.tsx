"use client";

import { motion } from "framer-motion";
import { Calculator, Gift } from "lucide-react";

// Otimized animation variants with stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const badgeVariants = {
  hidden: { 
    y: -20, 
    opacity: 0,
    scale: 0.9
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // custom easing
    },
  },
};

const headlineVariants = {
  hidden: { 
    y: 30, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function OfferHeaderOptimized() {
  return (
    <motion.header 
      className="text-center w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="banner"
      aria-label="Resumo da oferta especial"
    >
      {/* Container with optimal max-width and padding */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Badge - Enhanced design */}
        <motion.div
          className="inline-flex items-center justify-center
                     gap-2 sm:gap-2.5 lg:gap-3
                     bg-gradient-to-r from-[#D4AF37]/15 via-[#D4AF37]/10 to-[#D4AF37]/15
                     backdrop-blur-md border border-[#D4AF37]/25
                     px-4 sm:px-5 lg:px-6 
                     py-2 sm:py-2.5 lg:py-3
                     rounded-full 
                     shadow-[0_8px_32px_rgba(212,175,55,0.12)]
                     mb-6 sm:mb-8 lg:mb-10"
          variants={badgeVariants}
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 12px 40px rgba(212,175,55,0.2)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Icon with responsive sizing */}
          <Calculator 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 
                       text-[#D4AF37] flex-shrink-0" 
            aria-hidden="true"
          />
          
          {/* Badge text with improved typography */}
          <span className="text-[#D4AF37] font-semibold 
                           text-[10px] sm:text-xs lg:text-sm 
                           uppercase tracking-[0.12em] sm:tracking-[0.15em] lg:tracking-[0.18em]
                           leading-none">
            Resumo da Oferta
          </span>
          
          {/* Second icon */}
          <Gift 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 
                       text-[#D4AF37] flex-shrink-0" 
            aria-hidden="true"
          />
        </motion.div>

        {/* Main Headline - Optimized typography scale */}
        <motion.h1
          className="font-serif font-bold text-white"
          variants={headlineVariants}
        >
          {/* Mobile-first responsive text sizing */}
          <span className="block text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[56px] 
                           leading-[1.1] sm:leading-[1.15] lg:leading-[1.2]
                           tracking-[-0.02em] sm:tracking-[-0.03em]">
            
            {/* First part with proper spacing */}
            <span className="inline-block">Recapitulando</span>
            
            {/* Animated highlight word */}
            <motion.span 
              className="inline-block mx-2 sm:mx-3
                         text-transparent bg-gradient-to-r 
                         from-[#D4AF37] via-[#FFD700] to-[#D4AF37] 
                         bg-clip-text bg-[length:200%_100%]
                         animate-gradient
                         relative"
              style={{
                // Add subtle glow effect
                filter: "drop-shadow(0 0 24px rgba(212,175,55,0.3))",
              }}
            >
              TUDO
            </motion.span>
            
            {/* Last part - responsive line break */}
            <span className="block sm:inline-block mt-1 sm:mt-0">
              o que você destrava hoje:
            </span>
          </span>
        </motion.h1>

        {/* Optional subtle divider for visual separation */}
        <motion.div
          className="mt-8 sm:mt-10 lg:mt-12 mx-auto
                     w-24 sm:w-32 lg:w-40 h-px
                     bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: 1, 
            opacity: 1,
            transition: { delay: 0.8, duration: 0.6 }
          }}
        />
      </div>
    </motion.header>
  );
}