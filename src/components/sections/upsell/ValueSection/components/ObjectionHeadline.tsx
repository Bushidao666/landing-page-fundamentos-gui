"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export function ObjectionHeadline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6 max-w-4xl mx-auto"
    >
      {/* Ícone de questionamento */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="flex justify-center"
      >
        <div className="bg-blue-100 p-4 rounded-full">
          <HelpCircle className="w-12 h-12 text-blue-600" />
        </div>
      </motion.div>

      {/* Headline de objeção - EXATAMENTE como na copy */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        "Ok, Gui, mas eu não tenho tempo/conhecimento pra gerenciar TUDO isso!"
      </h2>

      {/* Resposta - EXATAMENTE como na copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-4"
      >
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
          Eu sei. E é por isso que o Sistema de Tração não é só mais "conteúdo". 
          É um <span className="font-bold text-gray-900 bg-yellow-100 px-2 py-1 rounded">
            conjunto de PROCESSOS, CHECKLISTS e AULAS COM ESPECIALISTAS
          </span> para que você ou sua equipe possam executar com clareza, sem achismo.
        </p>
      </motion.div>

      {/* Chamada para os pilares - EXATAMENTE como na copy */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8"
      >
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
          Imagine Ter Acesso Imediato a Isso:
        </h3>
      </motion.div>
    </motion.div>
  );
}