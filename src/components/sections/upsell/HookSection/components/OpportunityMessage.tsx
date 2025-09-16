"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Target } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function OpportunityMessage() {
  const reduced = useReducedMotion();
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Sub-headline da Oportunidade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 italic">
          O que você acabou de aprender é a chave de ignição. 
        </p>
        <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Agora, eu quero te oferecer o carro de corrida inteiro.
        </p>
      </motion.div>

      {/* Card de destaque visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative max-w-3xl mx-auto"
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Padrão de fundo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400"></div>
          </div>

          {/* Conteúdo do card */}
          <div className="relative p-8 sm:p-10 md:p-12">
            <div className="flex flex-col items-center space-y-6">
              {/* Ícone principal */}
              <motion.div
                animate={reduced ? undefined : { rotate: [0, 360] }}
                transition={reduced ? undefined : { duration: 10, repeat: 0, ease: "linear" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
                <Rocket className="relative w-16 h-16 sm:w-20 sm:h-20 text-yellow-400" />
              </motion.div>

              {/* Título do sistema */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  Sistema de Tração
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">
                  A metodologia completa para escalar seu e-commerce
                </p>
              </div>

              {/* Benefícios em destaque */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4"
                >
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base font-medium">
                    Crescimento Previsível
                  </span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4"
                >
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base font-medium">
                    Resultado Garantido
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Badge de urgência */}
          <motion.div
            animate={reduced ? undefined : { y: [0, -5, 0] }}
            transition={reduced ? undefined : { duration: 2, repeat: 2, repeatType: "reverse" }}
            className="absolute -top-3 right-4 sm:right-6 bg-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm uppercase shadow-lg"
          >
            Oferta Especial
          </motion.div>
        </div>
      </motion.div>

      {/* Mensagem do Guilherme */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">
          "E aí! Massa que você tá aqui. Se você pegou o Fundamentos, é porque você tá sério sobre ter resultado. 
          Mas deixa eu te fazer uma pergunta... Você quer só 'melhorar' seu Google Ads ou quer construir um 
          <span className="font-bold text-gray-900"> sistema de tração</span> que faz seu e-commerce inteiro 
          decolar de forma previsível? O que eu vou te mostrar nesta página é esse sistema. Fica comigo, isso é importante."
        </p>
        <p className="mt-3 text-gray-700 font-semibold">
          - Guilherme Mornatti
        </p>
      </motion.div>
    </div>
  );
}