"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTAButton = () => (
  <motion.div
    className="w-full max-w-2xl mx-auto"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Button 
      size="lg" 
      className="
        relative w-full
        text-lg md:text-xl lg:text-2xl xl:text-3xl
        px-8 py-6 md:px-10 md:py-7 lg:px-12 lg:py-8
        h-auto min-h-[64px] md:min-h-[72px] lg:min-h-[80px]
        bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]
        hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700]
        text-[#0A192F] font-bold
        shadow-[0_10px_30px_rgba(212,175,55,0.3)]
        hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)]
        rounded-2xl
        transition-all duration-300
        overflow-hidden group
        transform-gpu
      "
      aria-label="Comprar curso com garantia de 7 dias por R$ 47"
    >
      <div className="
        absolute inset-0 -translate-x-full 
        group-hover:translate-x-full 
        transition-transform duration-1000 
        bg-gradient-to-r from-transparent via-white/25 to-transparent
      " />
      
      <span className="relative flex items-center justify-center gap-3 md:gap-4">
        <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0" strokeWidth={2.5} />
        <span className="flex flex-col items-center leading-none">
          <span className="text-base md:text-lg lg:text-xl uppercase tracking-wider">
            PEGAR MEU KIT COMPLETO
          </span>
          <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black mt-1.5">
            POR R$ 47 AGORA!
          </span>
        </span>
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowRight className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0" strokeWidth={2.5} />
        </motion.div>
      </span>
    </Button>
  </motion.div>
);