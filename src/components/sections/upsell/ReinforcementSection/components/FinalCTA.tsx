"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MousePointer, Sparkles, CheckCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Container do CTA final */}
      <div className="text-center space-y-8">
        {/* Texto motivacional final - EXATAMENTE como na copy */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed"
        >
          Clique no botão acima e adicione o Sistema de Tração ao seu pedido.
          <span className="block mt-3 text-green-600 font-black">
            A gente se vê do outro lado, pronto para construir.
          </span>
        </motion.p>

        {/* Indicador visual para scroll up */}
        <motion.div
          animate={{ 
            y: [-10, -20, -10],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="flex justify-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full shadow-2xl">
            <ArrowUpRight className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Botão CTA espelhado do principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
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
              <ArrowUpRight className="w-12 h-12 text-green-500 rotate-180" />
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
              <ArrowUpRight className="w-12 h-12 text-green-500" />
            </motion.div>
          </div>

          {/* Botão principal */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(34, 197, 94, 0.3)",
                "0 0 40px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.3)",
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
            <div className="relative px-8 py-6 sm:py-8 space-y-3">
              <p className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wide leading-tight">
                QUERO O SISTEMA DE TRAÇÃO COMPLETO
              </p>
              <p className="text-sm sm:text-base opacity-90">
                Adicionar ao pedido com R$ 800 de desconto
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
              className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-xs uppercase shadow-lg flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              Última chance
            </motion.div>
          </motion.button>

          {/* Garantias abaixo do botão */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Compra 100% segura</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Acesso imediato</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Mensagem final de construção */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="pt-8"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full">
            <span className="text-2xl">🚀</span>
            <p className="text-lg font-semibold text-gray-800">
              Vamos construir algo extraordinário juntos
            </p>
            <span className="text-2xl">🎯</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}