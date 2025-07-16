"use client";

import { motion, useMotionValue } from "framer-motion";
import { Award, Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

interface TotalValueOptimizedProps {
  total: number;
}

// Enhanced counter with smooth easing and currency formatting
const AnimatedTotalPrice = ({ target }: { target: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const motionValue = useMotionValue(0);
  
  useEffect(() => {
    motionValue.set(target);
    
    const unsubscribe = motionValue.on("change", (latest) => {
      const formatted = Math.floor(latest).toLocaleString('pt-BR');
      setDisplayValue(formatted);
    });
    
    // Animate to target
    const timer = setTimeout(() => {
      motionValue.set(0);
      const startTime = Date.now();
      const duration = 2500;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Custom easing for dramatic effect
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        motionValue.set(target * easeOutExpo);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }, 100);
    
    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [target, motionValue]);

  return <span>{displayValue}</span>;
};

export default function TotalValueOptimized({ total }: TotalValueOptimizedProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Enhanced separator with gradient animation */}
      <motion.div 
        className="relative py-6 sm:py-8 lg:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated line */}
        <motion.div 
          className="absolute inset-0 flex items-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full h-px bg-gradient-to-r 
                          from-transparent via-[#D4AF37]/40 to-transparent" />
        </motion.div>
        
        {/* Central badge with enhanced design */}
        <motion.div 
          className="relative flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r 
                            from-[#D4AF37] to-[#FFD700] 
                            rounded-full blur-xl opacity-50 
                            group-hover:opacity-70 transition-opacity" />
            
            {/* Badge content */}
            <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#FFD700] 
                            text-[#0A192F] 
                            px-4 sm:px-6 lg:px-8 
                            py-2 sm:py-2.5 lg:py-3 
                            rounded-full 
                            font-bold text-xs sm:text-sm lg:text-base
                            shadow-2xl shadow-[#D4AF37]/20
                            flex items-center gap-2
                            uppercase tracking-wider">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Valor Total</span>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Total Value Display - Dramatic presentation */}
      <motion.div
        className="text-center py-4 sm:py-6 lg:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 20 
        }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {/* Value container with premium styling */}
        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r 
                       from-[#D4AF37]/20 via-[#FFD700]/30 to-[#D4AF37]/20 
                       blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Main price container */}
          <motion.div
            className="relative bg-gradient-to-br 
                       from-[#D4AF37] via-[#FFD700] to-[#D4AF37] 
                       rounded-2xl sm:rounded-3xl 
                       px-6 sm:px-10 lg:px-14 
                       py-4 sm:py-6 lg:py-8
                       shadow-2xl border-4 border-white/20
                       overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            {/* Shine effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr 
                         from-transparent via-white/20 to-transparent 
                         -skew-x-12"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />

            {/* Price content */}
            <div className="relative flex items-center justify-center gap-3 sm:gap-4">
              {/* Currency symbol */}
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 
                               font-black text-[#0A192F]/90">
                R$
              </span>
              
              {/* Animated price */}
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
                               font-black text-[#0A192F] 
                               tabular-nums tracking-tight">
                <AnimatedTotalPrice target={total} />
              </span>
              
              {/* Animated sparkle icon */}
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 
                                   text-[#0A192F]" />
              </motion.div>
            </div>

            {/* Crossed out price for anchor effect */}
            <motion.div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6
                         bg-red-500 text-white 
                         px-3 sm:px-4 py-1 sm:py-1.5 
                         rounded-full text-xs sm:text-sm font-bold
                         rotate-12 shadow-lg"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 12 }}
              transition={{ delay: 1.5, type: "spring" }}
            >
              <span className="line-through opacity-80">R$ 1.088</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Supporting text with animation */}
        <motion.p 
          className="text-sm sm:text-base lg:text-lg 
                     text-gray-400 mt-4 sm:mt-6
                     font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Economia de{" "}
          <span className="text-[#D4AF37] font-bold">
            {((1 - (47 / total)) * 100).toFixed(0)}%
          </span>
          {" "}no valor total
        </motion.p>
      </motion.div>
    </>
  );
}