"use client";

import { motion } from "framer-motion";
import { TrendingDown, XCircle, ChevronDown } from "lucide-react";

export function PainAgitation() {
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
      className="space-y-6 max-w-4xl mx-auto"
    >
      {/* Primeiro parágrafo - EXATAMENTE como na copy */}
      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl text-gray-700 leading-relaxed"
      >
        A maioria das pessoas pega um curso como o Fundamentos, aprende a otimizar o Google Ads, 
        vê uma melhora no ROAS e pensa: 
        <span className="block mt-3 text-xl sm:text-2xl font-bold text-gray-900 bg-yellow-100 px-4 py-3 rounded-lg">
          "Pronto, agora é só aumentar a verba e escalar."
        </span>
      </motion.p>

      {/* Momento de quebra - EXATAMENTE como na copy */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center my-8"
      >
        <div className="text-center space-y-4">
          <p className="text-2xl sm:text-3xl font-black text-red-600">
            E é aí que eles batem no teto.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-red-600 mx-auto" />
          </motion.div>
        </div>
      </motion.div>

      {/* Lista de problemas - EXATAMENTE como na copy */}
      <motion.div
        variants={itemVariants}
        className="bg-gray-50 border-l-4 border-red-500 p-6 rounded-r-lg space-y-4"
      >
        <div className="flex items-start gap-3">
          <TrendingDown className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <p className="text-lg text-gray-800">
            O faturamento <span className="font-bold text-red-600">estagna</span>.
          </p>
        </div>
        
        <div className="flex items-start gap-3">
          <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <p className="text-lg text-gray-800">
            O lucro <span className="font-bold text-red-600">encolhe</span> a cada real a mais investido.
          </p>
        </div>
        
        <div className="flex items-start gap-3">
          <TrendingDown className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <p className="text-lg text-gray-800">
            A frustração <span className="font-bold text-red-600">volta</span>.
          </p>
        </div>
      </motion.div>

      {/* Pergunta retórica - EXATAMENTE como na copy */}
      <motion.p
        variants={itemVariants}
        className="text-2xl sm:text-3xl font-bold text-center text-gray-900"
      >
        Por quê?
      </motion.p>
    </motion.div>
  );
}