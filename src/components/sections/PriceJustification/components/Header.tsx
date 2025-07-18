"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Header() {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
      {/* Título Principal - Hierarquia Clara */}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-tight tracking-tight text-slate-900 mb-6 md:mb-8">
        Por que um valor{" "}
        <span className="text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text animate-gradient bg-[length:200%_100%] font-black">
          tão baixo?
        </span>
      </h2>

      {/* Subtítulo Simplificado - Hierarquia Secundária */}
      <p className="text-xl md:text-2xl lg:text-3xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
        A resposta é simples e estratégica.
      </p>
    </motion.div>
  );
}