"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ShoppingCart, TrendingUp, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface PriceRevealOptimizedProps {
  isRevealed: boolean;
  paymentOption: 'installments' | 'cash';
}

// Animation variants optimized for performance
const priceRevealVariants = {
  hidden: { 
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Urgency indicators
const urgencyMessages = [
  "Última chance com este preço",
  "Oferta por tempo limitado",
  "Apenas hoje com desconto especial"
];

export default function PriceRevealOptimized({ 
  isRevealed, 
  paymentOption 
}: PriceRevealOptimizedProps) {
  const [urgencyIndex, setUrgencyIndex] = useState(0);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  
  // Mouse tracking for button effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to gradient position
  const gradientX = useTransform(mouseX, [-100, 100], [0, 100]);
  const gradientY = useTransform(mouseY, [-100, 100], [0, 100]);

  // Rotate urgency messages
  useEffect(() => {
    const interval = setInterval(() => {
      setUrgencyIndex((prev) => (prev + 1) % urgencyMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <AnimatePresence mode="wait">
      {isRevealed && (
        <motion.div
          className="space-y-6 sm:space-y-8 lg:space-y-10"
          variants={priceRevealVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Price Display Section */}
          <motion.div 
            className="text-center space-y-4"
            variants={itemVariants}
          >
            {/* Urgency message */}
            <motion.div
              className="inline-flex items-center gap-2 
                         bg-red-500/10 border border-red-500/30 
                         px-3 sm:px-4 py-1.5 sm:py-2 
                         rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={urgencyIndex}
                  className="text-xs sm:text-sm text-red-400 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {urgencyMessages[urgencyIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Main price display with enhanced animation */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r 
                              from-[#D4AF37]/20 to-[#FFD700]/20 
                              blur-3xl animate-pulse" />
              
              {/* Price content */}
              <div className="relative">
                {paymentOption === 'installments' ? (
                  <div className="space-y-2">
                    {/* Main price */}
                    <motion.h3 
                      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
                                 font-black text-transparent bg-clip-text
                                 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]
                                 animate-gradient leading-tight"
                      animate={{ 
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      12x R$ 4,70
                    </motion.h3>
                    
                    {/* Alternative price */}
                    <motion.p 
                      className="text-lg sm:text-xl lg:text-2xl text-gray-300
                                 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      ou <span className="font-bold text-white">R$ 47 à vista</span>
                    </motion.p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <motion.h3 
                      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
                                 font-black text-transparent bg-clip-text
                                 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]
                                 animate-gradient leading-tight"
                      animate={{ 
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      R$ 47,00
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg sm:text-xl lg:text-2xl text-gray-300
                                 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      ou <span className="font-bold text-white">12x de R$ 4,70</span>
                    </motion.p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Value proposition */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-300 
                         max-w-2xl mx-auto px-4
                         leading-relaxed"
              variants={itemVariants}
            >
              Investimento único para{" "}
              <span className="font-bold text-[#D4AF37] relative">
                transformar seu negócio
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 
                             bg-gradient-to-r from-[#D4AF37] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
              {" "}com Google Ads profissional
            </motion.p>
          </motion.div>

          {/* CTA Section with enhanced interactions */}
          <motion.div
            className="pt-2 sm:pt-4"
            variants={itemVariants}
          >
            {/* Main CTA Button */}
            <motion.div
              className="max-w-xl mx-auto px-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="relative w-full overflow-hidden group
                           text-base sm:text-lg lg:text-xl
                           px-6 sm:px-8 lg:px-10 
                           py-5 sm:py-6 lg:py-7 
                           h-auto 
                           bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]
                           hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700]
                           text-[#0A192F] font-bold
                           shadow-2xl shadow-[#D4AF37]/30 
                           border-2 border-[#D4AF37]/20 
                           rounded-xl sm:rounded-2xl
                           transition-all duration-300
                           transform-gpu"
                onClick={() => window.dispatchEvent(new CustomEvent('openLeadCaptureModal'))}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsCtaHovered(true)}
                onMouseLeave={() => setIsCtaHovered(false)}
                aria-label="Comprar agora o kit completo por R$ 47"
              >
                {/* Dynamic gradient effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30"
                  style={{
                    background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                  }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r 
                             from-transparent via-white/30 to-transparent 
                             -skew-x-12"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center 
                                 gap-2 sm:gap-3 uppercase tracking-wide">
                  <motion.div
                    animate={isCtaHovered ? {
                      rotate: [0, -10, 10, -10, 0],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  
                  <span>Garantir Minha Vaga Agora</span>
                  
                  <motion.div
                    animate={isCtaHovered ? {
                      x: [0, 5, 0],
                    } : {}}
                    transition={{ 
                      duration: 0.5,
                      repeat: isCtaHovered ? Infinity : 0
                    }}
                  >
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                </span>

                {/* Pulse rings on hover */}
                <AnimatePresence>
                  {isCtaHovered && (
                    <>
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-xl sm:rounded-2xl 
                                     border-2 border-[#D4AF37]/30"
                          initial={{ scale: 1, opacity: 0 }}
                          animate={{ 
                            scale: 1.1 + i * 0.1, 
                            opacity: [0, 0.3, 0] 
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap items-center justify-center 
                         gap-3 sm:gap-4 lg:gap-6 
                         mt-4 sm:mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Acesso Imediato</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}