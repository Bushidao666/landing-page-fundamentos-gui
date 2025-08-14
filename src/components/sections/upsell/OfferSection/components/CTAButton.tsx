"use client";

import { motion } from "framer-motion";
import { ArrowRight, MousePointer } from "lucide-react";

export function CTAButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative max-w-3xl mx-auto"
    >
      {/* Setas animadas apontando para o botão */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ 
            x: [-20, -10, -20],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute left-0 hidden lg:block"
        >
          <ArrowRight className="w-12 h-12 text-orange-500" />
        </motion.div>
        
        <motion.div
          animate={{ 
            x: [20, 10, 20],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute right-0 hidden lg:block"
        >
          <ArrowRight className="w-12 h-12 text-orange-500 rotate-180" />
        </motion.div>
      </div>

      {/* Botão principal - EXATAMENTE como na copy */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(251, 146, 60, 0.3)",
            "0 0 40px rgba(251, 146, 60, 0.5)",
            "0 0 20px rgba(251, 146, 60, 0.3)",
          ]
        }}
        transition={{ 
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        className="relative w-full bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white rounded-2xl shadow-2xl overflow-hidden group"
      >
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        
        {/* Conteúdo do botão */}
        <div className="relative px-8 py-6 sm:py-8 space-y-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wide leading-tight">
            SIM, GUILHERME! QUERO ADICIONAR O SISTEMA DE TRAÇÃO COMPLETO AO MEU PEDIDO COM R$ 800 DE DESCONTO!
          </p>
          
          {/* Ícone de clique */}
          <motion.div
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="flex justify-center mt-2"
          >
            <MousePointer className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Badge de urgência no botão */}
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-xs uppercase shadow-lg"
        >
          Clique Aqui
        </motion.div>
      </motion.button>

      {/* Texto de segurança abaixo do botão */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-center"
      >
        <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
          <span className="text-green-600">🔒</span>
          Compra 100% segura e protegida
        </p>
      </motion.div>
    </motion.div>
  );
}