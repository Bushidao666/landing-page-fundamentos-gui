"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function OfferBox() {
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
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-3xl blur-xl"
      />

      {/* Caixa principal da oferta */}
      <div className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 border-4 border-yellow-400 rounded-3xl p-8 sm:p-12 shadow-2xl">
        
        {/* Sparkles decorativos */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-6 -left-6"
        >
          <Sparkles className="w-12 h-12 text-yellow-500" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-6 -right-6"
        >
          <Sparkles className="w-12 h-12 text-orange-500" />
        </motion.div>

        {/* Texto introdutório - EXATAMENTE como na copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xl font-bold text-gray-800 mb-6"
        >
          Seu investimento hoje para ter a Planta Completa é de apenas:
        </motion.p>

        {/* Preço principal - EXATAMENTE como na copy */}
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900">
            12x de R$ 19,70
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-gray-700">
            (ou R$ 197,00 à vista)
          </p>
        </motion.div>

        {/* Economia destacada - EXATAMENTE como na copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-red-100 border-2 border-red-500 rounded-full px-6 py-3">
            <p className="text-lg sm:text-xl font-bold text-red-700">
              Isso é um <span className="text-2xl">desconto de R$ 800,00</span> que não está disponível em nenhum outro lugar.
            </p>
          </div>
        </motion.div>

        {/* Badge de urgência */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -top-4 right-8 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm uppercase shadow-lg"
        >
          Oferta Única
        </motion.div>
      </div>
    </motion.div>
  );
}