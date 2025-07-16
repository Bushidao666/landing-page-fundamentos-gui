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
      <motion.div 
        className="relative bg-gradient-to-br from-white/90 via-gray-50/95 to-white/90 backdrop-blur-2xl border border-gray-200/50 rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 xl:p-10 shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.01, y: -3 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${backgroundPattern} opacity-50`} />
        
        {/* Header do Bônus */}
        <div className="relative z-10 mb-6 md:mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
            <motion.div 
              className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${iconColor} rounded-lg md:rounded-xl flex items-center justify-center shadow-2xl flex-shrink-0`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <span className={`px-2 md:px-3 py-1 md:py-1.5 bg-${badgeColor}/20 text-${badgeColor} text-xs md:text-sm font-bold uppercase tracking-wider rounded-full border border-${badgeColor}/30 mb-2 md:mb-3 inline-block`}>
                {badgeText}
              </span>
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0A192F] mb-1 md:mb-2">
                {title}
              </h3>
              {value && (
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-base md:text-lg lg:text-xl font-black text-[#D4AF37]">
                    {value}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Badge Flutuante - Se fornecido */}
        {FloatingIcon && (
          <motion.div
            className="absolute -top-3 -right-3 md:-top-4 md:-right-4 lg:-top-6 lg:-right-6 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center border-2 md:border-4 border-[#0A192F] shadow-2xl"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FloatingIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-[#0A192F]" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
} 