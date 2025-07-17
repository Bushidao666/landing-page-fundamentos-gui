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
      className={`relative max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 ${className}`}
      variants={itemVariants}
    >
      {/* Container Principal da Imagem - Padrão BonusStack */}
      <div className="relative group">
        {/* Glow effect behind the mockup */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-white/10 to-[#D4AF37]/20 rounded-2xl blur-lg"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Main mockup container */}
        <motion.div
          className="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500"
          whileHover={{ 
            y: -3,
            transition: { type: "spring", stiffness: 400, damping: 25 }
          }}
        >
          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
          
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={600}
            className="w-full h-auto rounded-lg shadow-2xl shadow-black/30 group-hover:shadow-[#D4AF37]/20 transition-shadow duration-500"
            priority
            quality={95}
          />
        </motion.div>

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
      </div>
    </motion.div>
  );
}