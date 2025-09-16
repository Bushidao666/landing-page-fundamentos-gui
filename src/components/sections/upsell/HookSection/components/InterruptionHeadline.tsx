"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export function InterruptionHeadline() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* ESPERE! - Elemento de interrupção */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.2,
          type: "spring",
          stiffness: 200
        }}
        className="flex items-center justify-center gap-2 sm:gap-3"
      >
        <motion.div
          animate={{ 
            rotate: [0, -10, 10, -10, 10, 0],
          }}
          transition={{ 
            duration: 0.5,
            delay: 0.7,
            repeat: 2,
            repeatDelay: 1
          }}
        >
          <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-red-500 uppercase"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: 1,
            repeatType: "reverse"
          }}
        >
          ESPERE!
        </motion.h1>
      </motion.div>

      {/* Headline principal */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center leading-tight px-2"
      >
        Sua Compra Está Quase Completa... 
        <span className="block text-yellow-600 mt-1 sm:mt-2">
          Mas Falta a Peça Mais Importante.
        </span>
      </motion.h2>

      {/* Sub-headline - Validação e nova oportunidade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-4"
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center leading-relaxed px-2">
          Você acabou de garantir o <span className="font-bold text-gray-900">alicerce</span> com o Fundamentos. 
          <span className="text-green-600 font-bold"> Parabéns!</span> Essa foi a decisão mais inteligente 
          que você poderia tomar hoje. Mas... e se eu te dissesse que o verdadeiro jogo 
          da aceleração <span className="font-bold text-gray-900 underline decoration-yellow-400 decoration-2 sm:decoration-4">começa agora?</span>
        </p>
      </motion.div>
    </div>
  );
}