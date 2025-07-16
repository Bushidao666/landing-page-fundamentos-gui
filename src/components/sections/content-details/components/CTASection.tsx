/**
 * @file: CTASection.tsx
 * @responsibility: call to action section component
 * @exports: CTASection
 * @imports: motion, Zap, TrendingUp, MotionWrapper, itemVariants, cn
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";
import { itemVariants } from "../animations/variants";
import type { CTASectionProps } from "../types";

export function CTASection({ className = "" }: CTASectionProps) {
  return (
    <motion.div 
      className={cn("text-center mt-12 sm:mt-16 md:mt-20", className)}
      variants={itemVariants}
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MotionWrapper 
        className={cn(
          "inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3",
          "bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20",
          "backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8",
          "border border-[#D4AF37]/40 shadow-2xl",
          "max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto",
          "transition-all duration-300"
        )}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] flex-shrink-0" />
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
            Pronto para transformar teoria em{" "}
            <span className="text-[#D4AF37]">lucro real</span>?
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            Cada módulo foi desenhado para te dar resultados práticos imediatos.
          </p>
        </div>
        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] flex-shrink-0" />
      </MotionWrapper>
    </motion.div>
  );
}