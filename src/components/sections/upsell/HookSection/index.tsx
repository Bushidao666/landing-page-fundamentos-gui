"use client";

import { motion } from "framer-motion";
import { ProgressBar } from "./components/ProgressBar";
import { InterruptionHeadline } from "./components/InterruptionHeadline";
import { VideoArea } from "./components/VideoArea";

export function HookSection() {
  return (
    <section className="relative min-h-screen">
      {/* Barra de Progresso - Fixa no topo */}
      <div className="sticky top-0 z-50">
        <ProgressBar />
      </div>

      {/* Container principal com padding responsivo */}
      <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Background decorativo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Conteúdo da seção */}
          <div className="relative z-10 space-y-12">
            {/* Headlines de Interrupção */}
            <InterruptionHeadline />

            {/* Área do Vídeo e Sub-headline da Oportunidade */}
            <VideoArea />
          </div>

          {/* Indicador de scroll - sutil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="text-gray-400"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { HookSection as default };