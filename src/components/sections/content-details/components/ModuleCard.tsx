/**
 * @file: ModuleCard.tsx
 * @responsibility: individual module card component
 * @exports: ModuleCard
 * @imports: motion, AnimatePresence, ChevronDown, Sparkles, MotionWrapper, ModuleHighlights, ModuleLessons
 * @layer: components
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";
import { ModuleHighlights } from "./ModuleHighlights";
import { ModuleLessons } from "./ModuleLessons";
import type { ModuleCardProps } from "../types";

export function ModuleCard({ module, isActive, onToggle }: ModuleCardProps) {
  return (
    <MotionWrapper 
      className="relative group"
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card Container */}
      <div className={cn(
        "relative bg-gradient-to-br from-white/10 via-white/5 to-white/10",
        "backdrop-blur-2xl border border-white/20",
        "rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl",
        "transition-all duration-300 transform-gpu",
        "hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
      )}>
        
        {/* Module Header */}
        <motion.div
          className={cn(
            "relative p-4 sm:p-6 md:p-8 cursor-pointer touch-manipulation",
            "transition-colors duration-300",
            "hover:bg-white/5"
          )}
          onClick={onToggle}
          whileTap={{ scale: 0.98 }}
        >
          {/* Background Pattern */}
          <div className={`absolute inset-0 bg-gradient-to-r ${module.bgColor} opacity-50`} />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-1 min-w-0">
              {/* Module Icon */}
              <MotionWrapper 
                className={cn(
                  "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
                  "bg-gradient-to-br rounded-xl sm:rounded-2xl",
                  "flex items-center justify-center shadow-2xl flex-shrink-0",
                  "transition-all duration-300",
                  module.color
                )}
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <module.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </MotionWrapper>

              {/* Header Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className={cn(
                    "px-2 sm:px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37]",
                    "text-[10px] sm:text-xs font-bold uppercase tracking-wider",
                    "rounded-full border border-[#D4AF37]/30 w-fit"
                  )}>
                    Módulo {module.id}
                  </span>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-1 w-fit"
                    >
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                      <span className="text-[#D4AF37] text-xs font-medium">Expandido</span>
                    </motion.div>
                  )}
                </div>
                
                <h3 className={cn(
                  "text-lg sm:text-xl md:text-2xl font-bold text-white",
                  "mb-1 sm:mb-2 group-hover:text-[#D4AF37]",
                  "transition-colors duration-300 leading-tight"
                )}>
                  {module.title}
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                  {module.subtitle}
                </p>
              </div>
            </div>

            {/* Chevron */}
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-2 sm:ml-4 flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                {/* Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-4 sm:mb-6 md:mb-8" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Description and Highlights */}
                  <div className="space-y-4 sm:space-y-6">
                    <motion.p 
                      className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {module.description.split('**').map((part, i) => 
                        i % 2 === 0 ? part : <span key={i} className="text-[#D4AF37] font-semibold">{part}</span>
                      )}
                    </motion.p>

                    <ModuleHighlights highlights={module.highlights} />
                  </div>

                  {/* Lessons */}
                  <ModuleLessons lessons={module.lessons} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Module Number */}
      <MotionWrapper
        className={cn(
          "absolute -top-2 sm:-top-3 md:-top-4 -left-2 sm:-left-3 md:-left-4",
          "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
          "bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full",
          "flex items-center justify-center",
          "border-2 sm:border-[3px] md:border-4 border-[#0A192F]",
          "shadow-2xl z-20"
        )}
        whileHover={{ scale: 1.2 }}
        style={{
          boxShadow: `0 0 20px rgba(212, 175, 55, 0.6)`,
        }}
      >
        <span className="text-[#0A192F] font-bold text-sm sm:text-base md:text-lg">{module.id}</span>
      </MotionWrapper>
    </MotionWrapper>
  );
}