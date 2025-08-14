"use client";

import { motion } from "framer-motion";
import { TrapHeadline } from "./components/TrapHeadline";
import { PainAgitation } from "./components/PainAgitation";
import { FerrariAnalogy } from "./components/FerrariAnalogy";
import { SolutionPresentation } from "./components/SolutionPresentation";

export function VehicleSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-red-300 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container com espaçamento entre componentes */}
        <div className="space-y-16 sm:space-y-20">
          {/* Headline da Armadilha */}
          <TrapHeadline />

          {/* Agitação da Dor */}
          <PainAgitation />

          {/* Analogia Ferrari */}
          <FerrariAnalogy />

          {/* Apresentação da Solução */}
          <SolutionPresentation />
        </div>
      </div>

      {/* Separador visual entre seções */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
      />
    </section>
  );
}

export { VehicleSection as default };