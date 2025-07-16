"use client";

import { motion } from "framer-motion";
import { Zap, Award } from "lucide-react";
import { GuaranteeShield } from "../atoms/GuaranteeShield";
import { GuaranteeBadge } from "../atoms/GuaranteeBadge";

export const GuaranteeSeal = () => (
  <motion.div 
    className="inline-block mb-8 md:mb-10 lg:mb-12"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ 
      delay: 0.1, 
      duration: 0.6, 
      type: "spring",
      stiffness: 100
    }}
  >
    <div className="relative">
      <motion.div 
        className="
          relative 
          bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#D4AF37]
          rounded-2xl md:rounded-3xl
          p-8 md:p-10 lg:p-12 xl:p-14
          shadow-[0_20px_50px_rgba(212,175,55,0.25)]
          backdrop-blur-sm
        "
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 60px rgba(212,175,55,0.35)"
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25 
        }}
      >
        <GuaranteeShield />

        <div className="text-center space-y-3 md:space-y-4">
          <h2 
            id="guarantee-heading"
            className="
              text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              font-black text-[#0A192F] 
              leading-[0.9] tracking-tighter
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]
            "
          >
            GARANTIA BLINDADA
          </h2>
          <p className="
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl
            font-bold text-[#0A192F]/90
            leading-none
          ">
            DE 7 DIAS
          </p>
          
          <motion.div 
            className="
              inline-block mt-4 md:mt-5
              bg-[#0A192F] text-[#D4AF37]
              px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5
              rounded-xl md:rounded-2xl
              shadow-[0_10px_25px_rgba(10,25,47,0.3)]
            "
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px_35px rgba(10,25,47,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="
              text-base md:text-lg lg:text-xl xl:text-2xl
              font-black uppercase tracking-wider
              flex items-center gap-2 md:gap-3
            ">
              <Zap className="w-5 h-5 md:w-6 md:h-6" />
              Risco ZERO Absoluto!
              <Award className="w-5 h-5 md:w-6 md:h-6" />
            </span>
          </motion.div>
        </div>

        <GuaranteeBadge />
      </motion.div>

      <div className="
        absolute inset-0 rounded-2xl md:rounded-3xl 
        bg-gradient-to-b from-transparent to-black/30 
        -z-10 translate-y-3 blur-2xl scale-95
      " />
    </div>
  </motion.div>
);