/**
 * @file: ModuleLessons.tsx
 * @responsibility: module lessons list component
 * @exports: ModuleLessons
 * @imports: motion, PlayCircle, CheckCircle, cn, ModuleLessonsProps
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { PlayCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ModuleLessonsProps } from "../types";

export function ModuleLessons({ lessons }: ModuleLessonsProps) {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <h4 className="text-white font-bold text-lg lg:text-xl flex items-center gap-3">
        <PlayCircle className="w-5 h-5 lg:w-6 lg:h-6 text-[#D4AF37]" />
        O que você vai aprender:
      </h4>
      
      {/* Grid de Mini Cards Quadrados - 4 Cards Perfeito - APENAS DESKTOP */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-3">
        {lessons.map((lesson, i) => (
          <motion.div 
            key={i}
            className={cn(
              "relative aspect-square",
              "p-2.5",
              "rounded-lg bg-white/5 border border-white/10",
              "hover:bg-white/10 transition-all duration-300",
              "group cursor-pointer overflow-hidden",
              "flex flex-col items-center justify-center text-center"
            )}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ 
              scale: 1.03,
              y: -1,
              transition: { type: "spring", stiffness: 400, damping: 30 }
            }}
          >
            {/* Background Gradient Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            
            {/* Check Icon */}
            <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mb-2 group-hover:scale-105 transition-transform duration-300 relative z-10" />
            
            {/* Lesson Text */}
            <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-base font-medium leading-tight relative z-10">
              {lesson}
            </span>

            {/* Number Badge */}
            <div className="absolute top-2 right-2 w-4 h-4 bg-[#D4AF37]/20 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[#D4AF37] text-[10px] font-bold">{i + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}