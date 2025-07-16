"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const GuaranteeShield = () => (
  <motion.div 
    className="relative flex items-center justify-center mb-6 md:mb-8"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ 
      delay: 0.3, 
      type: "spring", 
      stiffness: 200,
      damping: 15
    }}
  >
    <div className="relative">
      <div className="
        w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
        bg-gradient-to-br from-[#0A192F] to-[#1a2444]
        rounded-full flex items-center justify-center 
        shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]
      ">
        <Shield className="
          w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 
          text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]
        " strokeWidth={2.5} />
      </div>
      
      <motion.div 
        className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  </motion.div>
);