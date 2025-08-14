"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function TrapHeadline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {/* Ícone de alerta */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="flex justify-center"
      >
        <div className="bg-red-100 p-4 rounded-full">
          <AlertTriangle className="w-12 h-12 text-red-600" />
        </div>
      </motion.div>

      {/* Headline principal - EXATAMENTE como na copy */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 text-center leading-tight">
        A Armadilha que 99% dos Donos de E-commerce Caem
        <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-gray-700 font-bold">
          (e Como VOCÊ Vai Evitá-la)
        </span>
      </h2>
    </motion.div>
  );
}