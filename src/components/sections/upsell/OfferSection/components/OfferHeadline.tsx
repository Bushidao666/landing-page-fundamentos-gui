"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export function OfferHeadline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-4"
    >
      {/* Ícone de presente/oferta */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: 0.2, 
          type: "spring", 
          stiffness: 200,
          duration: 0.8
        }}
        className="flex justify-center"
      >
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-5 rounded-full shadow-2xl">
          <Gift className="w-14 h-14 text-white" />
        </div>
      </motion.div>

      {/* Headline principal - EXATAMENTE como na copy */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
        OK, Qual é a Oferta Única e Insana de Hoje?
      </h2>
    </motion.div>
  );
}