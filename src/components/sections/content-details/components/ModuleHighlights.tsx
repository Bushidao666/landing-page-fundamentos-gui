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
      className="space-y-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h4 className="text-[#D4AF37] font-bold text-lg lg:text-xl flex items-center justify-center lg:justify-start gap-3">
        <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />
        Pontos-Chave:
      </h4>
      
      {/* Layout Mobile Centralizado */}
      <div className="block lg:hidden">
        <div className="flex flex-wrap justify-center gap-2">
          {highlights.map((highlight, i) => (
            <motion.div 
              key={i}
              className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full text-gray-200"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full flex-shrink-0" />
              <span className="font-medium text-sm">
                {highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Layout Desktop Alinhado à Esquerda */}
      <div className="hidden lg:block">
        <div className="grid gap-3">
          {highlights.map((highlight, i) => (
            <motion.div 
              key={i}
              className="flex items-center gap-3 text-gray-200"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full flex-shrink-0" />
              <span className="font-medium text-base lg:text-lg">
                {highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}