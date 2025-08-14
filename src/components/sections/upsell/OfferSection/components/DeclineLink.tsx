"use client";

import { motion } from "framer-motion";

export function DeclineLink() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 }}
      className="text-center mt-6"
    >
      {/* Link discreto de recusa - EXATAMENTE como na copy */}
      <button className="text-sm text-gray-500 underline hover:text-gray-600 transition-colors">
        Não, obrigado. Entendo que esta é uma oferta única e abro mão do desconto de R$ 800. 
        Quero seguir apenas com os Fundamentos por enquanto e descobrir o caminho mais longo sozinho.
      </button>
    </motion.div>
  );
}