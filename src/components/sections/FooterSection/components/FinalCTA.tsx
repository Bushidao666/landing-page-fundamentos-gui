/**
 * @file: FinalCTA.tsx
 * @responsibility: final call-to-action component
 * @exports: FinalCTA
 * @imports: motion, Button, icons, MotionWrapper
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight, CheckCircle, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

const indicators = [
  { icon: CheckCircle, text: "13+ Anos de Experiência" },
  { icon: Star, text: "300+ Cases de Sucesso" },
  { icon: Globe, text: "Parceiro Oficial Google" },
];

export function FinalCTA() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <MotionWrapper
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-block"
      >
        <Button 
          size="lg" 
          className="relative overflow-hidden 
            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
            px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 
            py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 
            h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] 
            hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] 
            text-[#0A192F] font-black 
            shadow-lg sm:shadow-xl md:shadow-2xl shadow-[#D4AF37]/40 sm:shadow-[#D4AF37]/50 md:shadow-[#D4AF37]/60 
            border-2 sm:border-3 md:border-4 border-[#D4AF37]/30 sm:border-[#D4AF37]/40 
            rounded-xl sm:rounded-2xl md:rounded-3xl 
            transition-all duration-500 backdrop-blur-sm"
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
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
          
          <span className="relative flex items-center gap-2 sm:gap-3 md:gap-4 z-10">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 
              group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide sm:tracking-wider">
              GARANTO MEU ATALHO PARA O SUCESSO!
            </span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 
              text-[#0A192F] group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </Button>
      </MotionWrapper>

      {/* Indicators */}
      <motion.div 
        className="flex flex-wrap items-center justify-center 
          gap-3 sm:gap-4 md:gap-6 
          pt-6 sm:pt-8 text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {indicators.map((indicator, index) => (
          <motion.div 
            key={index}
            className="flex items-center gap-1.5 sm:gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
          >
            <indicator.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm md:text-base">{indicator.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}