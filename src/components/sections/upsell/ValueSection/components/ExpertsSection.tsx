"use client";

import { motion } from "framer-motion";
import { ExpertCard } from "./ExpertCard";
import { expertsData } from "../data/experts";
import { Users } from "lucide-react";

export function ExpertsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      {/* Background decorativo */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-3xl -z-10 blur-xl opacity-50"></div>
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
          {/* Headline - EXATAMENTE como na copy */}
          <div className="text-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex justify-center mb-4"
            >
              <div className="bg-orange-100 p-3 rounded-full">
                <Users className="w-10 h-10 text-orange-600" />
              </div>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              E Eu Não Fiz Isso Sozinho...
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              (Quebrando a Crença Externa da Concorrência/Mercado)
            </p>
          </div>

          {/* Texto introdutório - EXATAMENTE como na copy */}
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Pra vencer em um mercado competitivo, você precisa das melhores estratégias. 
            Por isso, eu trouxe um time de <span className="font-bold text-gray-900">
            especialistas renomados</span> para dentro do Sistema de Tração, 
            que vão te entregar o ouro em áreas cruciais:
          </p>

          {/* Grid de especialistas */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {expertsData.map((expert, index) => (
              <ExpertCard key={expert.id} expert={expert} index={index} />
            ))}
          </div>

          {/* "E muitos outros..." - EXATAMENTE como na copy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-lg font-bold text-gray-700">
              E muitos outros...
            </p>
          </motion.div>

          {/* Texto final - EXATAMENTE como na copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl"
          >
            <p className="text-center text-lg text-gray-800 font-medium">
              Enquanto seus concorrentes se batem para descobrir o que funciona, 
              você terá acesso direto ao conhecimento de quem já está no campo de batalha 
              <span className="font-bold text-green-600"> vencendo</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}