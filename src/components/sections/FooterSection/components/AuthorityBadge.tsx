/**
 * @file: AuthorityBadge.tsx
 * @responsibility: authority badge component
 * @exports: AuthorityBadge
 * @imports: motion, icons, MotionWrapper
 * @layer: components
 */

"use client";

import { Users, Sparkles } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

export function AuthorityBadge() {
  return (
    <MotionWrapper
      className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 
        bg-gradient-to-r from-[#D4AF37]/30 via-[#FFD700]/20 to-[#D4AF37]/30 
        backdrop-blur-xl border border-[#D4AF37]/50 
        px-4 sm:px-6 md:px-8 lg:px-10 
        py-3 sm:py-4 md:py-5 
        rounded-full shadow-lg"
      whileHover={{ scale: 1.02, y: -1 }}
      transition={{ duration: 0.2 }}
    >
      <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#D4AF37]" />
      <span className="text-[#D4AF37] font-bold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wider sm:tracking-[0.15em] md:tracking-[0.2em]">
        O Homem Por Trás da Estratégia
      </span>
      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#D4AF37]" />
    </MotionWrapper>
  );
}