"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { benefits } from "./data";
import { itemVariants } from "./animations";

const MotionDiv = motion.div;

export const PatternSection = React.memo(() => {
  return (
    <MotionDiv className="mb-12 sm:mb-16 md:mb-20" variants={itemVariants}>
      <MotionDiv 
        className="bg-gradient-to-br from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 
          backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 
          border border-[#D4AF37]/30 shadow-2xl"
        whileHover={{ scale: 1.01, y: -3 }}
      >
        {/* Header */}
        <MotionDiv className="text-center mb-8 sm:mb-10 md:mb-12" variants={itemVariants}>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
            font-serif font-bold text-[#0A192F] mb-4 sm:mb-6">
            Percebeu o Padrão?
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
            text-gray-700 leading-relaxed max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
            Estes não são apenas &ldquo;alunos satisfeitos&rdquo;. São{" "}
            <span className="font-bold text-[#0A192F]">pessoas que já fizeram outros cursos</span>{" "}
            e podem{" "}
            <span className="font-bold text-[#0A192F]">comparar</span>. Pessoas que{" "}
            <span className="font-bold text-[#0A192F]">já tinham experiência</span>{" "}
            e ainda assim descobriram{" "}
            <span className="text-[#D4AF37] font-bold">lacunas gigantes</span>{" "}
            no conhecimento.
          </p>
        </MotionDiv>

        {/* O que todos têm em comum */}
        <MotionDiv className="mb-6 sm:mb-8 md:mb-10" variants={itemVariants}>
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
            text-[#0A192F] text-center mb-6 sm:mb-8">
            O que todos eles têm em comum?
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <MotionDiv
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 
                  bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl 
                  border border-gray-200/50 hover:border-[#D4AF37]/30 
                  transition-all duration-300 group"
                custom={index}
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                  }
                }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.6
                }}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                  bg-gradient-to-br from-[#D4AF37] to-yellow-400 
                  rounded-lg sm:rounded-xl flex items-center justify-center 
                  flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 
                    leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 
                      text-green-500 inline mr-2 mb-1" />
                    <span className="font-semibold text-[#0A192F]">
                      {benefit.text.split(':')[0]}:
                    </span>{" "}
                    {benefit.text.split(':')[1]}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
});

PatternSection.displayName = "PatternSection";