"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Header() {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className="text-center mb-12 md:mb-16 lg:mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
    >
      {/* Badge Premium */}
      <motion.div
        className="inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 backdrop-blur-xl border border-amber-500/30 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg mb-8 md:mb-12"
        whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
      >
        <Target className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
        <span className="text-amber-700 font-bold text-sm md:text-base uppercase tracking-[0.15em] md:tracking-[0.2em]">
          A Verdade por Trás do Preço
        </span>
        <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
      </motion.div>

      {/* Pergunta Principal */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black leading-tight tracking-tight text-slate-900 mb-4 md:mb-6">
        Por que um valor{" "}
        <span className="text-transparent bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text animate-gradient bg-[length:200%_100%]">
          tão baixo?
        </span>
      </h2>

      <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 font-light max-w-3xl mx-auto">
        A resposta é simples e egoísta (da minha parte).
      </p>
    </motion.div>
  );
}