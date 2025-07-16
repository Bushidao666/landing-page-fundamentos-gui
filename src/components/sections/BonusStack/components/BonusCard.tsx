/**
 * @file: BonusCard.tsx
 * @responsibility: reusable bonus card template with optimized responsive design
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

const bonusVariants = {
  hidden: { y: 80, opacity: 0, scale: 0.95 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.3,
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
        className="relative bg-gradient-to-br from-white/90 via-gray-50/95 to-white/90 backdrop-blur-2xl border border-gray-200/50 rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 xl:p-10 shadow-2xl overflow-hidden focus-within:ring-2 focus-within:ring-[#D4AF37]/50 focus-within:ring-offset-2"
        whileHover={{ 
          scale: 1.015, 
          y: -4,
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(212, 175, 55, 0.1)"
        }}
        whileTap={{ scale: 0.995 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
        role="article"
        tabIndex={0}
        style={{
          willChange: 'transform, box-shadow',
          transform: 'translateZ(0)'
        }}
      >
        {/* Background Pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${backgroundPattern} opacity-50`} />
        
        {/* Header do Bônus - Enhanced */}
        <header className="relative z-10 mb-6 md:mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
            {/* Icon com Micro-interactions Premium */}
            <motion.div 
              className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${iconColor} rounded-lg md:rounded-xl flex items-center justify-center shadow-2xl flex-shrink-0 relative overflow-hidden cursor-pointer group`}
              whileHover={{ 
                scale: 1.05, 
                rotate: 8,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              role="button"
              tabIndex={0}
              aria-label={`Ícone do ${title}`}
            >
              {/* Glow effect interno */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-lg md:rounded-xl"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white drop-shadow-lg relative z-10" />
              </motion.div>
            </motion.div>
            
            {/* Content Area com Melhor Typography */}
            <div className="flex-1 min-w-0">
              {/* Badge Refinado */}
              <motion.span 
                className={`px-3 md:px-4 py-1.5 md:py-2 bg-${badgeColor}/20 text-${badgeColor} text-xs md:text-sm font-bold uppercase tracking-wider rounded-full border border-${badgeColor}/30 mb-3 md:mb-4 inline-block backdrop-blur-sm`}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: `var(--${badgeColor.replace('-', '')})20`
                }}
                transition={{ duration: 0.2 }}
              >
                {badgeText}
              </motion.span>
              
              {/* Title com Focus State */}
              <motion.h3 
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0A192F] mb-2 md:mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                {title}
              </motion.h3>
              
              {/* Value com Shimmer */}
              {value && (
                <motion.div 
                  className="flex items-center gap-2 md:gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.span 
                    className="text-base md:text-lg lg:text-xl font-black text-[#D4AF37] relative"
                    whileHover={{ scale: 1.02 }}
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(212, 175, 55, 0)",
                        "0 0 10px rgba(212, 175, 55, 0.4)",
                        "0 0 0px rgba(212, 175, 55, 0)"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
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

        {/* Badge Flutuante Premium - Se fornecido */}
        {FloatingIcon && (
          <motion.div
            className="absolute -top-4 -right-4 md:-top-5 md:-right-5 lg:-top-7 lg:-right-7 w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center border-3 md:border-4 border-[#0A192F] shadow-2xl cursor-pointer group z-20"
            animate={{ 
              rotate: [0, 8, -8, 0],
              scale: [1, 1.08, 1],
              y: [0, -2, 0],
            }}
            whileHover={{
              scale: 1.15,
              rotate: 15,
              boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 4, repeat: Infinity }}
            role="button"
            aria-label="Badge de destaque"
            tabIndex={0}
          >
            {/* Pulse ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/50"
              animate={{
                scale: [1, 1.4],
                opacity: [0.8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            
            {/* Inner glow */}
            <motion.div
              className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                repeatDelay: 1 
              }}
            >
              <FloatingIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 text-[#0A192F] drop-shadow-sm relative z-10" />
            </motion.div>
          </motion.div>
        )}
      </motion.article>
    </motion.div>
  );
} 