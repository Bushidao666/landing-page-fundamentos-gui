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
      className={`grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6 ${className}`}
      variants={containerVariants}
    >
      {items.map((item, index) => (
        <motion.div 
          key={index}
          className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-xl px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-white/30 shadow-lg text-sm md:text-base text-gray-700 font-medium"
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -2 }}
        >
          <item.icon className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37] flex-shrink-0" />
          <span className="whitespace-nowrap">{item.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}