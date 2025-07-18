/**
 * @file: TrustIndicators.tsx
 * @responsibility: Trust indicator badges for building confidence
 * @exports: TrustIndicators
 * @imports: motion (from framer-motion), LucideIcon (from lucide-react)
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TrustIndicatorItem {
  icon: LucideIcon;
  text: string;
}

interface TrustIndicatorsProps {
  items: TrustIndicatorItem[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function TrustIndicators({
  items,
  className = ""
}: TrustIndicatorsProps) {
  return (
    <motion.div 
      className={`grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6 ${className}`}
      variants={containerVariants}
    >
      {items.map((item, index) => (
        <motion.div 
          key={index}
          className="flex items-center gap-3 md:gap-4 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-xl px-4 md:px-5 py-3 md:py-3.5 rounded-xl md:rounded-2xl border border-white/40 shadow-lg text-sm md:text-base text-gray-700 font-medium hover:shadow-xl transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -2, backgroundColor: "rgba(255,255,255,0.8)" }}
        >
          <item.icon className="h-5 w-5 md:h-6 md:w-6 text-[#D4AF37] flex-shrink-0" />
          <span className="text-left leading-tight">{item.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}