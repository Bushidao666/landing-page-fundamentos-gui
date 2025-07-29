/**
 * @file: CTASection.tsx
 * @responsibility: call to action section component
 * @exports: CTASection
 * @imports: motion, Zap, TrendingUp, MotionWrapper, itemVariants, cn
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";
import { itemVariants } from "../animations/variants";
import type { CTASectionProps } from "../types";

export function CTASection({ className = "" }: CTASectionProps) {
  const handleScrollToBonusStack = () => {
    document.getElementById("bonus-stack")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

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
      
      {/* Botão de Navegação para Bônus */}
      <motion.div 
        className="mt-8 md:mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="group"
        >
          <Button 
            onClick={handleScrollToBonusStack}
            size="lg" 
            className="relative overflow-hidden px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 h-auto bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-700 hover:via-emerald-600 hover:to-emerald-700 text-white font-bold shadow-2xl shadow-emerald-500/40 border-2 border-emerald-500/30 rounded-xl transition-all duration-500 backdrop-blur-sm text-base sm:text-lg max-w-full"
          >
            {/* Efeito de Brilho */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
            
            <span className="relative flex items-center gap-3 z-10">
              <Gift className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="tracking-wide hidden sm:inline">E Tem Mais! Ver os Bônus Exclusivos</span>
              <span className="tracking-wide sm:hidden">Ver Bônus</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}