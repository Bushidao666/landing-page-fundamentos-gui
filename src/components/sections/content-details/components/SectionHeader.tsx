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
      className={cn("text-center mx-auto mb-16 sm:mb-20 md:mb-24", className)}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Premium Badge */}
      <MotionWrapper
        className={cn(
          "inline-flex items-center gap-2 sm:gap-3",
          "bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37]/20 to-[#D4AF37]/30",
          "backdrop-blur-2xl border border-[#D4AF37]/50",
          "px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4",
          "rounded-full shadow-2xl mb-8 sm:mb-10 md:mb-12",
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
      <motion.div 
        className="space-y-6 sm:space-y-8 mb-10 sm:mb-12 md:mb-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-black leading-[0.9] sm:leading-[0.85] tracking-tight text-white">
          <span className="block text-gray-200 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-3 sm:mb-4 md:mb-6">
            O Que Você Vai Dominar
          </span>
          <motion.span 
            className="block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] via-[#FFA500] to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Módulo a Módulo
          </motion.span>
          <span className="block text-gray-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-3 sm:mt-4 md:mt-6">
            O Alicerce do Seu Lucro
          </span>
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-200 leading-relaxed max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto font-light"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
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