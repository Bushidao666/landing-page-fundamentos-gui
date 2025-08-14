"use client";

import { motion } from "framer-motion";
import { ObjectionHeadline } from "./components/ObjectionHeadline";
import { PillarsGrid } from "./components/PillarsGrid";
import { ExpertsSection } from "./components/ExpertsSection";

export function ValueSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-300 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-300 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container com espaçamento entre componentes */}
        <div className="space-y-12">
          {/* Headline de Objeção e Resposta */}
          <ObjectionHeadline />

          {/* Grid dos 4 Pilares */}
          <PillarsGrid />

          {/* Seção de Especialistas */}
          <ExpertsSection />
        </div>
      </div>

      {/* Separador visual entre seções */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
      />
    </section>
  );
}

export { ValueSection as default };