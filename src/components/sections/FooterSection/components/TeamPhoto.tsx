/**
 * @file: TeamPhoto.tsx
 * @responsibility: team photo display component
 * @exports: TeamPhoto
 * @imports: motion, Image, Building icon, MotionWrapper
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

export function TeamPhoto() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <MotionWrapper 
        className="relative bg-gradient-to-br from-[#D4AF37] to-yellow-400 
          rounded-2xl sm:rounded-3xl p-2 sm:p-3 
          shadow-xl sm:shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.01, rotate: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 opacity-50 pointer-events-none"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(212, 175, 55, 0.3)", 
              "0 0 40px rgba(212, 175, 55, 0.5)", 
              "0 0 20px rgba(212, 175, 55, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Frame */}
        <div className="relative rounded-xl sm:rounded-[20px] overflow-hidden bg-white p-0.5 sm:p-1">
          <Image
            src="/images/Gui Mornatti Fotos/Time Pushing.jpg"
            alt="Equipe Grupo Pushing - Aceleradora de E-commerces"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg sm:rounded-[16px]"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 via-transparent to-transparent rounded-lg sm:rounded-[16px]" />
          
          {/* Team badge */}
          <motion.div 
            className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 
              bg-gradient-to-r from-[#D4AF37] to-yellow-400 
              backdrop-blur-xl rounded-xl sm:rounded-2xl 
              px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 
              shadow-md sm:shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
              <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#0A192F]" />
              <span className="text-[#0A192F] font-black text-xs sm:text-sm">GRUPO PUSHING</span>
            </div>
          </motion.div>
        </div>
      </MotionWrapper>
    </motion.div>
  );
}