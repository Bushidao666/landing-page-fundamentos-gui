"use client";

import { motion } from "framer-motion";
import { Zap, AlertCircle, DollarSign, Fuel, CheckCircle, XCircle } from "lucide-react";

export function FerrariAnalogy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8 max-w-5xl mx-auto"
    >
      {/* Explicação principal - EXATAMENTE como na copy */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border border-orange-200">
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">
          Porque o problema <span className="font-black text-2xl text-red-600">NUNCA</span> foi só o tráfego. 
          Otimizar o Google Ads é como colocar um motor de Ferrari num Fusca com o pneu careca. 
          Não adianta ter o melhor motor do mundo (tráfego) se:
        </p>

        {/* Grid de analogias visuais */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Analogia 1: Motor Ferrari = Tráfego */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Motor de Ferrari</p>
                <p className="text-sm text-gray-600 flex items-center">= Tráfego Otimizado <CheckCircle className="w-5 h-5 text-green-600 ml-1" /></p>
              </div>
            </div>
          </motion.div>

          {/* Analogia 2: Pneu Careca = Loja não converte */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Pneu Careca</p>
                <p className="text-sm text-gray-600 flex items-center">= Sua loja não converte <XCircle className="w-5 h-5 text-red-600 ml-1" /></p>
              </div>
            </div>
          </motion.div>

          {/* Analogia 3: Suspensão Fraca = Precificação ruim */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-red-100 p-3 rounded-full">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Suspensão Fraca</p>
                <p className="text-sm text-gray-600 flex items-center">= Precificação esmaga a margem <XCircle className="w-5 h-5 text-red-600 ml-1" /></p>
              </div>
            </div>
          </motion.div>

          {/* Analogia 4: Tanque Vazio = Sem sistema de recompra */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-red-100 p-3 rounded-full">
                <Fuel className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Falta de Combustível</p>
                <p className="text-sm text-gray-600 flex items-center">= Sem sistema para recompra <XCircle className="w-5 h-5 text-red-600 ml-1" /></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Conclusão - EXATAMENTE como na copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center space-y-4"
      >
        <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed">
          O que você realmente precisa não é de um "melhoramento" no seu Google Ads. 
        </p>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900">
          É de uma <span className="text-yellow-600 underline decoration-4">NOVA OPORTUNIDADE</span>:
        </p>
        <p className="text-2xl sm:text-3xl font-black text-gray-900">
          um <span className="text-green-600">Sistema de Tração COMPLETO</span> que integra 
          todas as peças do seu e-commerce para criar um crescimento acelerado e sustentável.
        </p>
      </motion.div>
    </motion.div>
  );
}