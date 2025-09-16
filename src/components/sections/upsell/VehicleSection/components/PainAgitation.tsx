"use client";

import { motion } from "framer-motion";
import { TrendingDown, XCircle, ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function PainAgitation() {
  const reduced = useReducedMotion();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6 max-w-3xl mx-auto"
    >
      {/* Primeiro parágrafo */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2"
      >
        A maioria das pessoas pega um curso como o Fundamentos, aprende a otimizar o Google Ads, 
        vê uma melhora no ROAS e pensa: 
        <span className="block mt-3 text-lg sm:text-xl md:text-2xl font-bold text-gray-900 bg-yellow-100 px-3 py-2 sm:px-4 sm:py-3 rounded-lg">
          "Pronto, agora é só aumentar a verba e escalar."
        </span>
      </motion.p>

      {/* Momento de quebra */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center my-6 sm:my-8"
      >
        <div className="text-center space-y-3">
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-600">
            E é aí que eles batem no teto.
          </p>
          <motion.div
            animate={reduced ? undefined : { y: [0, 8, 0] }}
            transition={reduced ? undefined : { duration: 1.5, repeat: 2 }}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mx-auto" />
          </motion.div>
        </div>
      </motion.div>

      {/* Lista de problemas */}
      <motion.div
        variants={itemVariants}
        className="bg-gray-50 border-l-4 border-red-500 p-4 sm:p-5 md:p-6 rounded-r-lg space-y-3 sm:space-y-4"
      >
        <div className="flex items-start gap-2 sm:gap-3">
          <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-0.5 sm:mt-1 flex-shrink-0" />
          <p className="text-sm sm:text-base md:text-lg text-gray-800">
            O faturamento <span className="font-bold text-red-600">estagna</span>.
          </p>
        </div>
        
        <div className="flex items-start gap-2 sm:gap-3">
          <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-0.5 sm:mt-1 flex-shrink-0" />
          <p className="text-sm sm:text-base md:text-lg text-gray-800">
            O lucro <span className="font-bold text-red-600">encolhe</span> a cada real a mais investido.
          </p>
        </div>
        
        <div className="flex items-start gap-2 sm:gap-3">
          <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-0.5 sm:mt-1 flex-shrink-0" />
          <p className="text-sm sm:text-base md:text-lg text-gray-800">
            A frustração <span className="font-bold text-red-600">volta</span>.
          </p>
        </div>
      </motion.div>

      {/* Pergunta retórica */}
      <motion.p
        variants={itemVariants}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900"
      >
        Por quê?
      </motion.p>
    </motion.div>
  );
}