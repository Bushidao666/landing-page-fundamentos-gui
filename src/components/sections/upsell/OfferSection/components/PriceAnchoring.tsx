"use client";

import { motion } from "framer-motion";

export function PriceAnchoring() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-4xl mx-auto space-y-6 text-center"
    >
      {/* Descrição do produto - EXATAMENTE como na copy */}
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
        O <span className="font-bold text-gray-900">Sistema de Tração para E-commerce</span> é 
        nosso treinamento completo, a nossa "planta baixa" para construir negócios de 7 dígitos. 
        O valor normal dele, vendido separadamente, é{" "}
        <motion.span
          initial={{ textDecoration: "none" }}
          whileInView={{ textDecoration: "line-through" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-2xl font-bold text-red-600 inline-block"
        >
          R$ 997,00
        </motion.span>
        . E vale cada centavo.
      </p>

      {/* MAS... - EXATAMENTE como na copy */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="py-4"
      >
        <p className="text-3xl sm:text-4xl font-black text-gray-900">
          MAS...
        </p>
      </motion.div>

      {/* Justificativa - EXATAMENTE como na copy */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="space-y-4"
      >
        <p className="text-lg sm:text-xl text-gray-700">
          Você acabou de tomar uma decisão. Você investiu nos Fundamentos e provou que está 
          <span className="font-bold text-gray-900 bg-yellow-100 px-2 py-1 rounded mx-1">
            comprometido(a) com seu crescimento
          </span>
          . E eu quero recompensar quem age.
        </p>

        <p className="text-lg sm:text-xl text-gray-800 font-semibold">
          Por isso, 
          <span className="text-2xl font-black text-red-600 block mt-2">
            SOMENTE NESTA PÁGINA, AQUI E AGORA
          </span>
          você tem uma oportunidade única de adicionar o 
          <span className="font-bold"> Sistema de Tração COMPLETO </span>
          ao seu pedido.
        </p>
      </motion.div>

      {/* Transição para o preço - EXATAMENTE como na copy */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="text-xl text-gray-700 font-medium mt-8"
      >
        Em vez de R$ 997...
      </motion.p>
    </motion.div>
  );
}