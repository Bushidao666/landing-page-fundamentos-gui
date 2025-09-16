"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building, Gauge } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AcceleratorMessage() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Container principal com gradiente e borda */}
      <div className="relative bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 p-8 sm:p-12 rounded-3xl border-2 border-orange-300 shadow-2xl overflow-hidden">
        {/* Padrão de fundo decorativo */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 space-y-8">
          {/* Mensagem principal - EXATAMENTE como na copy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Esta oferta não é um "custo". 
              <span className="block text-orange-600 mt-2">É um acelerador.</span>
            </h3>
            
            <motion.div
              animate={reduced ? undefined : { scale: [1, 1.05, 1] }}
              transition={reduced ? undefined : { duration: 3, repeat: 1, repeatType: "reverse" }}
              className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg"
            >
              <Rocket className="w-8 h-8 text-orange-500" />
              <Gauge className="w-8 h-8 text-purple-500" />
              <TrendingUp className="w-8 h-8 text-green-500" />
            </motion.div>
          </motion.div>

          {/* Texto explicativo - EXATAMENTE como na copy */}
          <p className="text-xl sm:text-2xl text-gray-800 text-center leading-relaxed font-medium">
            É a decisão que separa quem tem uma 
            <span className="text-red-600 font-bold"> melhora pontual </span>
            de quem constrói um 
            <span className="text-green-600 font-bold"> crescimento exponencial</span>.
          </p>

          {/* Analogia do elevador - EXATAMENTE como na copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Ícone de escada */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-full mb-2">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h4v-4h4v-4h4v-4h4V3" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 font-medium">Escada</span>
                <span className="text-xs text-red-500">Lento e cansativo</span>
              </div>

              {/* VS */}
              <div className="text-2xl font-bold text-gray-400">VS</div>

              {/* Ícone de elevador */}
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-2">
                  <Building className="w-12 h-12 text-green-600" />
                </div>
                <span className="text-sm text-green-600 font-medium">Elevador</span>
                <span className="text-xs text-green-500">Rápido e eficiente</span>
              </div>
            </div>

            {/* Mensagem do elevador - EXATAMENTE como na copy */}
            <p className="text-lg sm:text-xl text-gray-900 text-center mt-6 font-bold">
              Você já deu o primeiro passo. 
              <span className="block mt-2 text-green-600">
                Agora é a hora de pegar o elevador em vez de continuar subindo pela escada.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Badge flutuante de destaque */}
        <motion.div
          animate={reduced ? undefined : { rotate: [-5, 5, -5], y: [-5, 5, -5] }}
          transition={reduced ? undefined : { duration: 4, repeat: 1, repeatType: "reverse" }}
          className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-bold text-sm uppercase shadow-xl"
        >
          Decisão inteligente
        </motion.div>
      </div>
    </motion.div>
  );
}