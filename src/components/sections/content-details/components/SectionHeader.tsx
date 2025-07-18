/**
 * @file: SectionHeader.tsx
 * @responsibility: content details section header component
 * @exports: SectionHeader
 * @imports: motion, Brain, Award, MotionWrapper, itemVariants, cn
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Brain, Award } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";
import { itemVariants, shimmerVariants } from "../animations/variants";
import type { SectionHeaderProps } from "../types";

export function SectionHeader({ className = "" }: SectionHeaderProps) {
  return (
    <motion.div 
      className={cn("text-center mx-auto mb-12 sm:mb-16 md:mb-20", className)} 
      variants={itemVariants}
    >
      {/* Premium Badge */}
      <MotionWrapper
        className={cn(
          "inline-flex items-center gap-2 sm:gap-3",
          "bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37]/20 to-[#D4AF37]/30",
          "backdrop-blur-2xl border border-[#D4AF37]/50",
          "px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4",
          "rounded-full shadow-2xl mb-6 sm:mb-8 md:mb-12",
          "transition-all duration-300"
        )}
        whileHover={{ scale: 1.05, y: -2 }}
      >
        <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
        <span className="text-[#D4AF37] font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em]">
          Conteúdo Exclusivo
        </span>
        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
      </MotionWrapper>

      {/* Headline */}
      <motion.div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 md:mb-12" variants={itemVariants}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-black leading-[0.9] sm:leading-[0.85] tracking-tight text-white">
          <span className="block text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-2 sm:mb-3 md:mb-4">
            O Que Você Vai Dominar
          </span>
          <motion.span 
            className="block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] via-[#FFA500] to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]"
            {...shimmerVariants}
          >
            Módulo a Módulo
          </motion.span>
          <span className="block text-gray-200 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-2 sm:mt-3 md:mt-4">
            O Alicerce do Seu Lucro
          </span>
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto font-light"
        variants={itemVariants}
      >
        Aqui não tem teoria vaga. É o{" "}
        <span className="text-[#D4AF37] font-semibold relative">
          mapa prático
          <motion.span
            className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent block"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2, duration: 1 }}
          />
        </span>{" "}
        para você construir seu conhecimento do zero, de forma{" "}
        <span className="text-white font-semibold">sólida</span>.
      </motion.p>
    </motion.div>
  );
}