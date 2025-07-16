/**
 * @file: ModuleHighlights.tsx
 * @responsibility: module highlights list component
 * @exports: ModuleHighlights
 * @imports: motion, TrendingUp, ModuleHighlightsProps
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { ModuleHighlightsProps } from "../types";

export function ModuleHighlights({ highlights }: ModuleHighlightsProps) {
  return (
    <motion.div 
      className="space-y-3"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h4 className="text-[#D4AF37] font-bold text-base sm:text-lg flex items-center gap-2">
        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
        Pontos-Chave:
      </h4>
      <div className="grid gap-2">
        {highlights.map((highlight, i) => (
          <motion.div 
            key={i}
            className="flex items-center gap-2 sm:gap-3 text-gray-300"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#D4AF37] rounded-full flex-shrink-0" />
            <span className="font-medium text-xs sm:text-sm md:text-base">{highlight}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}