"use client";

import { motion } from "framer-motion";
import HotmartWidget from "@/components/integrations/HotmartWidget";
import { Rocket, Target } from "lucide-react";
import { ThinkAboutIt } from "./components/ThinkAboutIt";
import { AcceleratorMessage } from "./components/AcceleratorMessage";

export function ReinforcementSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Background decorativo mais sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" role="presentation">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl"
        />
        {/* Elementos decorativos estáticos (sem loop infinito) */}
        <div className="hidden md:block absolute top-10 right-10 w-20 h-20 bg-yellow-200 rounded-full opacity-10 blur-xl" />
        <div className="hidden lg:block absolute bottom-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-10 blur-xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container com espaçamento otimizado entre componentes */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {/* Seção de reflexão */}
          <ThinkAboutIt />

          {/* Mensagem do acelerador */}
          <AcceleratorMessage />

          {/* Widget Hotmart Final - Botões de Aceite e Recusa */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            {/* Texto motivacional antes do widget */}
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed text-center mb-8"
            >
              Clique no botão abaixo e adicione o Sistema de Tração ao seu pedido.
              <span className="block mt-3 text-green-600 font-black">
                A gente se vê do outro lado, pronto para construir.
              </span>
            </motion.p>
            
            {/* Container do Widget Hotmart */}
            <div id="hotmart-sales-funnel-reinforcement"></div>
            <HotmartWidget containerId="hotmart-sales-funnel-reinforcement" type="salesFunnel" />
            
            {/* Mensagem final de construção */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="pt-8 text-center"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full">
                <Rocket className="w-8 h-8 text-blue-600" />
                <p className="text-lg font-semibold text-gray-800">
                  Vamos construir algo extraordinário juntos
                </p>
                <Target className="w-8 h-8 text-orange-600" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Separador visual final - estático */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-50" />
    </section>
  );
}

export { ReinforcementSection as default };