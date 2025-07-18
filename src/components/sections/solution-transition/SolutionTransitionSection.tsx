"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SolutionTransitionSection() {
  const handleScrollToSolution = () => {
    document.getElementById("solution")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section 
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      id="solution-transition"
    >
      {/* Background Azul Premium */}
      <div className="absolute inset-0">
        {/* Gradiente Base Azul */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#1A2444] to-[#0A192F]" />
        
        {/* Grid Pattern Unificado */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Overlay de Profundidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-[#0A192F]/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          
          {/* Linha de Transição */}
          <motion.div 
            className="relative"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </motion.div>

          {/* Texto de Transição */}
          <motion.p 
            className="text-xl md:text-2xl text-[#D4AF37] font-light italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Mas existe uma saída...
          </motion.p>

          {/* Card Principal da Solução */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative bg-gradient-to-br from-[rgba(212,175,55,0.15)] to-[rgba(212,175,55,0.05)] backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16">
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -skew-x-12 animate-shimmer opacity-50" />
              
              <div className="relative space-y-6 md:space-y-8">
                
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-2 rounded-full"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[#D4AF37] font-bold text-sm md:text-base uppercase tracking-wider">
                    A SOLUÇÃO
                  </span>
                </motion.div>
                
                {/* Título Principal */}
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Chega. O problema não é você.{" "}
                  <span className="text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text animate-gradient bg-[length:200%_100%]">
                    É a falta do ALICERCE.
                  </span>
                </motion.h2>
                
                {/* Descrição */}
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Tentar otimizar campanhas sem entender os{" "}
                  <span className="font-bold text-[#D4AF37]">FUNDAMENTOS</span>{" "}
                  é como tentar construir uma casa começando pelo telhado. 
                  Não se sustenta. Você fica refém de "hacks" que param de funcionar 
                  e de um algoritmo que parece ter vida própria.
                </motion.p>
                
                {/* Ênfase */}
                <motion.div
                  className="p-6 md:p-8 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 border border-[#D4AF37]/20 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed">
                    É hora de parar de ser um "operador de painel" e se tornar o{" "}
                    <span className="font-bold text-[#D4AF37]">
                      ARQUITETO DO SEU PRÓPRIO LUCRO.
                    </span>
                  </p>
                </motion.div>
                
                {/* CTA Button */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button 
                    onClick={handleScrollToSolution}
                    className="group relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] text-[#0A192F] font-black text-lg md:text-xl rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Mostrar a Solução Completa</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
} 