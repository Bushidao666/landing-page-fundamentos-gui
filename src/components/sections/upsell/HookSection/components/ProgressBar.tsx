"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function ProgressBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white border-b border-gray-200 py-4 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Passo 1 - Completo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
              <Check className="w-5 h-5 text-white" />
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:inline">
              Passo 1: Seus Dados
            </span>
            <span className="ml-2 text-sm font-medium text-gray-700 sm:hidden">
              1
            </span>
          </div>

          {/* Linha conectora */}
          <div className="flex-1 mx-3">
            <div className="h-1 bg-gray-200 rounded">
              <div className="h-1 bg-green-500 rounded w-1/2"></div>
            </div>
          </div>

          {/* Passo 2 - Atual */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full animate-pulse">
              <span className="text-sm font-bold text-white">2</span>
            </div>
            <span className="ml-2 text-sm font-bold text-yellow-600 hidden sm:inline">
              Passo 2: Sua Oferta Especial
            </span>
            <span className="ml-2 text-sm font-bold text-yellow-600 sm:hidden">
              Oferta
            </span>
          </div>

          {/* Linha conectora */}
          <div className="flex-1 mx-3">
            <div className="h-1 bg-gray-200 rounded"></div>
          </div>

          {/* Passo 3 - Pendente */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
              <span className="text-sm font-medium text-gray-600">3</span>
            </div>
            <span className="ml-2 text-sm font-medium text-gray-500 hidden sm:inline">
              Passo 3: Acesso Liberado
            </span>
            <span className="ml-2 text-sm font-medium text-gray-500 sm:hidden">
              3
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}