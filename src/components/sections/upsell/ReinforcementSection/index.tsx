"use client";

import { motion } from "framer-motion";
import { ThinkAboutIt } from "./components/ThinkAboutIt";
import { AcceleratorMessage } from "./components/AcceleratorMessage";
import { FinalCTA } from "./components/FinalCTA";

export function ReinforcementSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full blur-3xl"
        />
        {/* Partículas flutuantes */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-10 blur-xl"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-10 left-10 w-32 h-32 bg-green-300 rounded-full opacity-10 blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container com espaçamento entre componentes */}
        <div className="space-y-16">
          {/* Seção de reflexão */}
          <ThinkAboutIt />

          {/* Mensagem do acelerador */}
          <AcceleratorMessage />

          {/* CTA Final */}
          <FinalCTA />
        </div>
      </div>

      {/* Separador visual final */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
      />
    </section>
  );
}

export { ReinforcementSection as default };