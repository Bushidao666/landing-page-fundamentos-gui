/**
 * @file: ProductMockup.tsx
 * @responsibility: Product image showcase with premium visual effects
 * @exports: ProductMockup
 * @imports: motion (from framer-motion), Image (from next/image), Award (from lucide-react)
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

interface ProductMockupProps {
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  className?: string;
}

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const floatingVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.2,
    },
  },
};

export default function ProductMockup({ 
  imageSrc,
  imageAlt,
  badgeText,
  className = ""
}: ProductMockupProps) {
  return (
    <motion.div 
      className={`relative order-2 lg:order-1 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 ${className}`}
      variants={itemVariants}
    >
      {/* Container Principal da Imagem com Glassmorphism */}
      <motion.div 
        className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border border-white/20 overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          rotateY: 1,
          boxShadow: "0 25px 50px rgba(212, 175, 55, 0.3)"
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Efeito de Brilho no Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent skew-x-12 opacity-0"
          whileHover={{ opacity: 1, x: ["100%", "-100%"] }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Container da Imagem Principal */}
        <div className="relative">
          <motion.div
            className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
              quality={95}
            />
            
            {/* Overlay Sutil para Integração Visual */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-xl md:rounded-2xl" />
          </motion.div>
        </div>

        {/* Status Badge Flutuante */}
        <motion.div 
          className="absolute -top-3 md:-top-4 lg:-top-6 -right-3 md:-right-4 lg:-right-6 bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-[#0A192F] px-4 md:px-5 lg:px-6 py-2.5 md:py-3 lg:py-3.5 rounded-full font-bold text-sm md:text-base shadow-2xl border-2 border-white/20 z-10"
          variants={floatingVariants}
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <Award className="w-4 h-4 md:w-5 md:h-5" />
            <span>{badgeText}</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}