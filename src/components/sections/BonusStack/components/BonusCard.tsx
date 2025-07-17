/**
 * @file: BonusCard.tsx
 * @responsibility: professional bonus card template with optimized spacing and performance
 * @exports: BonusCard
 * @imports: framer-motion, lucide-react, ReactNode
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface BonusCardProps {
  // Header props
  badgeText: string;
  badgeColor?: string;
  title: string;
  value?: string;
  icon: LucideIcon;
  iconColor: string;
  
  // Content props
  children: ReactNode;
  
  // Animation props
  index?: number;
  
  // Style props
  className?: string;
  backgroundPattern?: string;
  
  // Badge floating icon
  floatingIcon?: LucideIcon;
}

// Optimized animation variants - cleaner and faster
const bonusVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

export default function BonusCard({
  badgeText,
  badgeColor = "red-500",
  title,
  value,
  icon: Icon,
  iconColor,
  children,
  index = 0,
  className = "",
  backgroundPattern = "from-blue-500/10 to-purple-600/10",
  floatingIcon: FloatingIcon
}: BonusCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      custom={index}
      variants={bonusVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.article 
        className="relative bg-gradient-to-br from-white/98 to-gray-50/95 backdrop-blur-sm border border-gray-200/40 rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg overflow-hidden"
        whileHover={{ 
          y: -3,
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
          borderColor: "rgba(212, 175, 55, 0.2)"
        }}
        transition={{ 
          duration: 0.2
        }}
        role="article"
        tabIndex={0}
      >
        {/* Background Pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${backgroundPattern} opacity-50`} />
        
        {/* Header do Bônus - Professional */}
        <header className="relative z-10 mb-4 md:mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 lg:gap-5 mb-3 md:mb-4 lg:mb-5">
            {/* Icon - Clean Professional */}
            <motion.div 
              className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${iconColor} rounded-lg md:rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)"
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
            </motion.div>
            
            {/* Content Area com Melhor Typography */}
            <div className="flex-1 min-w-0">
              {/* Badge Professional */}
              <motion.span 
                className={`px-3 md:px-4 py-1.5 md:py-2 bg-${badgeColor}/15 text-${badgeColor} text-xs md:text-sm font-bold uppercase tracking-wider rounded-full border border-${badgeColor}/25 mb-2 md:mb-3 inline-block backdrop-blur-sm`}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: `rgba(${badgeColor === 'red-400' ? '248, 113, 113' : '59, 130, 246'}, 0.1)`
                }}
                transition={{ duration: 0.2 }}
              >
                {badgeText}
              </motion.span>
              
              {/* Title - Clean Typography */}
              <motion.h3 
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0A192F] mb-2 md:mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300"
                initial={{ opacity: 0.95 }}
                whileHover={{ opacity: 1 }}
              >
                {title}
              </motion.h3>
              
              {/* Value - Professional Highlight */}
              {value && (
                <motion.div 
                  className="flex items-center gap-2 md:gap-3"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span 
                    className="text-base md:text-lg lg:text-xl font-black text-[#D4AF37] relative"
                    whileHover={{ scale: 1.01 }}
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(212, 175, 55, 0)",
                        "0 0 8px rgba(212, 175, 55, 0.3)",
                        "0 0 0px rgba(212, 175, 55, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {value}
                  </motion.span>
                </motion.div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Professional Floating Badge - Simplified */}
        {FloatingIcon && (
          <motion.div
            className="absolute -top-3 -right-3 md:-top-4 md:-right-4 lg:-top-5 lg:-right-5 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center border-2 md:border-3 border-[#0A192F] shadow-lg cursor-pointer group z-20"
            animate={{ 
              rotate: [0, 4, -4, 0],
              scale: [1, 1.04, 1],
            }}
            whileHover={{
              scale: 1.08,
              rotate: 8,
              boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 3, repeat: Infinity }}
            role="button"
            aria-label="Badge de destaque"
            tabIndex={0}
          >
            {/* Subtle pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#D4AF37]/40"
              animate={{
                scale: [1, 1.3],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            
            {/* Inner highlight */}
            <motion.div
              className="absolute inset-1 bg-gradient-to-br from-white/25 to-transparent rounded-full"
              animate={{ opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.div
              animate={{ 
                rotate: [0, -6, 6, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1.5 
              }}
            >
              <FloatingIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#0A192F] drop-shadow-sm relative z-10" />
            </motion.div>
          </motion.div>
        )}
      </motion.article>
    </motion.div>
  );
} 