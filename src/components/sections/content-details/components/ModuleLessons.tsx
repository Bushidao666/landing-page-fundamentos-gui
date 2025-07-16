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
      <h4 className="text-white font-bold text-base sm:text-lg flex items-center gap-2 mb-4 sm:mb-6">
        <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
        O que você vai aprender:
      </h4>
      
      <div className="space-y-2 sm:space-y-3">
        {lessons.map((lesson, i) => (
          <motion.div 
            key={i}
            className={cn(
              "flex items-start gap-2 sm:gap-3 p-3 sm:p-4",
              "rounded-lg sm:rounded-xl bg-white/5 border border-white/10",
              "hover:bg-white/10 transition-all duration-300",
              "group cursor-pointer"
            )}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ x: 5 }}
          >
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base">
              {lesson}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}