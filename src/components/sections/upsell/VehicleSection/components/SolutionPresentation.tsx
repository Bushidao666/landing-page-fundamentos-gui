"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function SolutionPresentation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      {/* Container com destaque visual */}
      <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-300 p-1 rounded-3xl">
        <div className="bg-white rounded-3xl p-8 sm:p-12">
          {/* "Apresentando..." com efeito typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                Apresentando...
              </p>
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </div>
          </motion.div>

          {/* Título principal - EXATAMENTE como na copy */}
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.7, 
              type: "spring",
              stiffness: 100
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-900 mb-6"
          >
            O Sistema de Tração para E-commerce:
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-yellow-600">
              O Guia de Execução Completo
            </span>
          </motion.h2>

          {/* Descrição - EXATAMENTE como na copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <p className="text-lg sm:text-xl text-gray-700 text-center leading-relaxed">
              Este não é um "aprofundamento" do Fundamentos. 
              É a <span className="font-bold text-gray-900 bg-yellow-100 px-2 py-1 rounded">PLANTA BAIXA COMPLETA</span> para 
              você sair da teoria e construir um negócio que escala.
            </p>
            
            <p className="text-lg sm:text-xl text-gray-700 text-center leading-relaxed">
              É o passo a passo detalhado, o 
              <span className="font-bold text-gray-900 text-2xl block mt-2">"COMO FAZER"</span> 
              para cada área crítica da sua operação.
            </p>
          </motion.div>

          {/* Call to action visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex justify-center"
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="bg-green-100 text-green-700 px-6 py-3 rounded-full flex items-center gap-2 font-bold"
            >
              <span>Continue lendo para descobrir tudo</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Efeito de brilho animado */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 pointer-events-none rounded-3xl"
            style={{
              backgroundSize: "200% 100%",
              backgroundPosition: "0% 50%",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}