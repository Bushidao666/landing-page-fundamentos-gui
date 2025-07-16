"use client";

import { motion } from "framer-motion";
import { Eye, ShoppingCart, ArrowRight, CheckCircle, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function DecisionSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Chamada Final */}
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-200 shadow-lg mb-8 md:mb-12"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-600 uppercase tracking-wide">
            A Decisão é Sua
          </span>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>

        <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-medium max-w-4xl mx-auto">
          Continuar operando na base da{" "}
          <span className="text-red-600 font-bold relative inline-block">
            sorte e da frustração
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500/30" />
          </span>
          , ou investir{" "}
          <span className="text-amber-600 font-bold text-2xl md:text-3xl lg:text-4xl">
            R$ 47
          </span>{" "}
          no conhecimento fundamental que coloca o{" "}
          <span className="text-amber-600 font-bold relative inline-block">
            controle absoluto do seu lucro
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500/40" />
          </span>{" "}
          de volta nas suas mãos?
        </p>
      </motion.div>

      {/* CTA Principal */}
      <motion.div variants={itemVariants}>
        <motion.div
          whileHover={!prefersReducedMotion ? { scale: 1.02, y: -2 } : {}}
          whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
          className="inline-block"
        >
          <Button 
            size="lg" 
            className="relative overflow-hidden text-lg md:text-xl lg:text-2xl px-8 md:px-12 lg:px-16 py-6 md:py-8 lg:py-10 h-auto bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-600 text-slate-900 font-black shadow-xl border-2 border-amber-600/30 rounded-xl md:rounded-2xl transition-all duration-300"
          >
            {/* Shine effect */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            )}
            
            <span className="relative flex items-center gap-3 md:gap-4 z-10">
              <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              <span className="tracking-wide uppercase">
                Quero o Kit Completo por Apenas R$ 47!
              </span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </span>
          </Button>
        </motion.div>

        {/* Indicadores */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 text-sm md:text-base text-gray-600"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
            <span>Decisão Inteligente</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
            <span>Investimento Estratégico</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
            <span>Futuro Promissor</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}