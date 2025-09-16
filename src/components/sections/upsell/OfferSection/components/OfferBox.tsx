"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function OfferBox() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative max-w-3xl mx-auto"
    >
      {/* Glow effect animado */}
      <motion.div
        animate={reduced ? undefined : { opacity: [0.5, 0.8, 0.5] }}
        transition={reduced ? undefined : { duration: 2, repeat: 2, repeatType: "reverse" }}
        className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-3xl blur-xl"
      />

      {/* Caixa principal da oferta */}
      <div className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 border-2 sm:border-3 md:border-4 border-yellow-400 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
        
        {/* Sparkles decorativos - menores em mobile */}
        <div
          className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6"
        >
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-500" />
        </div>
        <div
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6"
        >
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500" />
        </div>

        {/* Texto introdutório */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4 sm:mb-6"
        >
          Seu investimento hoje para ter a Planta Completa é de apenas:
        </motion.p>

        {/* Preço principal */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.7,
            type: "spring",
            stiffness: 100
          }}
          className="text-center space-y-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
            12x de R$ 19,70
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">
            (ou R$ 197,00 à vista)
          </p>
        </motion.div>

        {/* Economia destacada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <div className="inline-block bg-red-100 border-2 border-red-500 rounded-full px-4 py-2 sm:px-6 sm:py-3">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-red-700">
              Isso é um <span className="text-lg sm:text-xl md:text-2xl">desconto de R$ 800,00</span> que não está disponível em nenhum outro lugar.
            </p>
          </div>
        </motion.div>

        {/* Badge de urgência */}
        <motion.div
          animate={reduced ? undefined : { scale: [1, 1.05, 1] }}
          transition={reduced ? undefined : { duration: 1.5, repeat: 2, repeatType: "reverse" }}
          className="absolute -top-3 right-4 sm:-top-4 sm:right-6 md:right-8 bg-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm uppercase shadow-lg"
        >
          Oferta Única
        </motion.div>
      </div>
    </motion.div>
  );
}