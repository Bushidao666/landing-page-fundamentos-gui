/**
 * @file: SolutionBadge.tsx
 * @responsibility: Premium badge component for solution presentation
 * @exports: SolutionBadge
 * @imports: motion (from framer-motion), Brain, TrendingUp (from lucide-react)
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp } from "lucide-react";

interface SolutionBadgeProps {
  text: string;
  className?: string;
}

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

export default function SolutionBadge({ 
  text,
  className = ""
}: SolutionBadgeProps) {
  return (
    <motion.div
      className={`inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 backdrop-blur-xl border border-[#D4AF37]/40 px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 rounded-full shadow-lg ${className}`}
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <motion.div
        className="w-2 h-2 md:w-3 md:h-3 bg-[#D4AF37] rounded-full"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <Brain className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
      <span className="text-[#D4AF37] font-bold text-sm md:text-base lg:text-lg uppercase tracking-[0.1em] md:tracking-[0.15em]">
        {text}
      </span>
      <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
    </motion.div>
  );
}