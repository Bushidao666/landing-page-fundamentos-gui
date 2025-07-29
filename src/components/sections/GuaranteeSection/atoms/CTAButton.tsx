"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTAButton = () => {
  // Função para abrir modal de captura
  const handleOpenModal = () => {
    window.dispatchEvent(new CustomEvent('openLeadCaptureModal'));
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        onClick={handleOpenModal} 
      size="lg" 
      className="
        relative w-full max-w-2xl
        text-base md:text-lg lg:text-xl xl:text-2xl
        px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 lg:px-10 lg:py-7
        h-auto min-h-[56px] md:min-h-[64px] lg:min-h-[72px]
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
          <span className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider">
            PEGAR MEU KIT COMPLETO
          </span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mt-1">
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
};
