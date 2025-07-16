/**
 * @file: TransformationSection.tsx
 * @responsibility: transformation call-to-action section
 * @exports: TransformationSection component
 * @imports: framer-motion, icons, floating elements, animations
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Brain, Target, TrendingUp, DollarSign } from "lucide-react";
import { FloatingElements } from "./FloatingElements";
import { transformationVariants, hoverVariants } from "../styles/animations";
import { typography, spacing, icons } from "../styles/responsive";

export function TransformationSection() {
  return (
    <motion.div 
      className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-8 sm:mb-12 md:mb-16"
      variants={transformationVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Efeito de Ruptura Visual */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>

      {/* Container da Transformação */}
      <motion.div 
        className="relative bg-gradient-to-br from-[#0A192F] via-[#1a2444] to-[#0A192F] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-20 border border-[#D4AF37]/30 shadow-2xl overflow-hidden"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={hoverVariants.card}
      >
        {/* Partículas de fundo */}
        <div className="absolute inset-0 opacity-20">
          <FloatingElements count={8} />
        </div>

        {/* Ícone Central Transformador */}
        <motion.div 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 md:mb-10 shadow-2xl"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: { scale: 1, rotate: 0 },
            hover: { 
              scale: 1.2, 
              rotate: 360,
              transition: { duration: 0.8 }
            }
          }}
        >
          <Brain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#0A192F]" />
        </motion.div>

        {/* Texto de Transformação */}
        <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 md:mb-8">
            Chega. O problema não é você. É a falta do ALICERCE.
          </h3>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto font-light">
            Tentar otimizar campanhas sem entender os{" "}
            <span className="font-bold text-[#D4AF37]">FUNDAMENTOS</span>{" "}
            é como tentar construir uma casa começando pelo telhado. Não se sustenta. 
            Você fica refém de &quot;hacks&quot; que param de funcionar e de um algoritmo que parece ter vida própria.
          </p>
          
          {/* Call to Transformation */}
          <motion.div 
            className="bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#D4AF37]/40 backdrop-blur-xl"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverVariants.card}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#D4AF37]" />
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#D4AF37]" />
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#D4AF37]" />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center leading-tight">
              É hora de parar de ser um &quot;operador de painel&quot; e se tornar o{" "}
              <motion.span 
                className="text-transparent bg-gradient-to-r from-[#D4AF37] via-yellow-400 to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ARQUITETO DO SEU PRÓPRIO LUCRO.
              </motion.span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}