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
import { useFloatingAnimation, createFloatingVariants } from "../../../../hooks/useFloatingAnimation";

interface ProductMockupProps {
  imageSrc: string;
  imageAlt: string;
  badgeText?: string; // Opcional agora que removemos o badge
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

export default function ProductMockup({ 
  imageSrc,
  imageAlt,
  badgeText, // Não utilizado mas mantido para compatibilidade
  className = ""
}: ProductMockupProps) {
  const isFloating = useFloatingAnimation(2.5);
  const floatingVariants = createFloatingVariants(4.5, 3);
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Container do Mockup com z-index controlado */}
      <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
        {/* MOCKUP LIMPO COM SHIMMER DIRETO NA IMAGEM - Padrão BonusStack Otimizado */}
      <div className="relative group">
        <motion.div
            className="relative overflow-hidden rounded-2xl"
            variants={isFloating ? floatingVariants : undefined}
            initial="initial"
            animate={isFloating ? "animate" : "initial"}
          whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 25 }
          }}
        >
            {/* Shimmer effect DA ESQUERDA PARA DIREITA diretamente na imagem */}
          <motion.div
              className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
            transition={{ 
                duration: 2.5, 
              repeat: Infinity,
                repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
          
          <Image
            src={imageSrc}
            alt={imageAlt}
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl shadow-2xl shadow-black/30 group-hover:shadow-[#B8860B]/40 transition-shadow duration-500"
            priority
            quality={95}
          />
        </motion.div>
          </div>
      </div>
    </motion.div>
  );
}