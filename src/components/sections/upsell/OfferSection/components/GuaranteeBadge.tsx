"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

export function GuaranteeBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="max-w-3xl mx-auto mt-8"
    >
      <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Selo de garantia */}
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="bg-green-500 rounded-full p-4">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1">
                <CheckCircle className="w-6 h-6 text-gray-900" />
              </div>
            </div>
          </motion.div>

          {/* Texto da garantia - EXATAMENTE como na copy */}
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-xl font-bold text-green-800">
              Garantia Blindada de 7 Dias
            </h3>
            <p className="text-gray-700">
              Sua compra continua 100% segura e protegida pela nossa Garantia Blindada de 7 Dias. 
              Se você não achar que este é o guia de execução mais completo que já viu, 
              peça seu reembolso total. O risco é todo meu.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}