"use client";

import { motion } from "framer-motion";
import { Brain, CalendarX, BookOpen, TrendingUp, DollarSign, Timer } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ThinkAboutIt() {
  const reduced = useReducedMotion();
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-12"
    >
      {/* Título principal - EXATAMENTE como na copy */}
      <motion.div
        variants={itemVariants}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <Brain className="w-10 h-10 text-purple-600" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
            Pense Nisso Por Um Segundo...
          </h2>
          <Brain className="w-10 h-10 text-purple-600" />
        </div>
      </motion.div>

      {/* Container das perguntas reflexivas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pergunta 1 - Valor do investimento */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-full shrink-0">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              O que vale mais?
            </h3>
          </div>
          
          <div className="space-y-6">
            {/* Opção A - Com o sistema */}
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-lg text-gray-800">
                  Ter o <span className="font-black text-blue-600">mapa completo</span> para 
                  acelerar seu e-commerce por <span className="font-black text-green-600">R$ 197 hoje</span>...
                </p>
              </div>
            </div>

            <div className="text-center py-2">
              <span className="text-2xl font-bold text-gray-400">OU</span>
            </div>

            {/* Opção B - Sem o sistema */}
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <CalendarX className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-lg text-gray-800">
                  Passar os próximos <span className="font-bold text-red-600">6 meses</span> tentando 
                  descobrir tudo isso sozinho, <span className="font-black text-red-600 underline decoration-2">
                  deixando potencialmente dezenas de milhares de reais na mesa</span>?
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pergunta 2 - Acesso ao conhecimento */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl border-2 border-green-200 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full shrink-0">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              O que é mais inteligente?
            </h3>
          </div>
          
          <div className="space-y-6">
            {/* Opção A - Com o sistema */}
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-lg text-gray-800">
                  Ter acesso a <span className="font-black text-green-600">mais de 150 aulas detalhadas 
                  e processos prontos</span> agora...
                </p>
              </div>
            </div>

            <div className="text-center py-2">
              <span className="text-2xl font-bold text-gray-400">OU</span>
            </div>

            {/* Opção B - Sem o sistema */}
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Timer className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-lg text-gray-800">
                  Ficar <span className="font-bold text-red-600">paralisado</span> sem saber qual 
                  o próximo passo depois de aprender os fundamentos?
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indicador visual de scroll */}
      <motion.div
        animate={reduced ? undefined : { y: [0, 10, 0] }}
        transition={reduced ? undefined : { duration: 2, repeat: 2, repeatType: "loop" }}
        className="flex justify-center pt-4"
      >
        <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent rounded-full" />
      </motion.div>
    </motion.div>
  );
}