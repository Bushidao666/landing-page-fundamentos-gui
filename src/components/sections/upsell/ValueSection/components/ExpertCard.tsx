"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

interface ExpertCardProps {
  expert: {
    id: number;
    name: string;
    expertise: string;
    image: string;
    color: string;
  };
  index: number;
}

const borderColorVariants = {
  yellow: "border-yellow-400",
  blue: "border-blue-400",
  purple: "border-purple-400",
  green: "border-green-400",
  red: "border-red-400",
};

export function ExpertCard({ expert, index }: ExpertCardProps) {
  const borderColor = borderColorVariants[expert.color as keyof typeof borderColorVariants];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center space-y-3"
    >
      {/* Foto circular - usando placeholder por enquanto */}
      <div className={`relative w-24 h-24 rounded-full border-4 ${borderColor} overflow-hidden bg-gray-100`}>
        {/* Placeholder icon - substituir por imagem real depois */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
          <User className="w-12 h-12 text-gray-600" />
        </div>
        
        {/* Quando tiver as imagens reais, descomentar: */}
        {/* <Image
          src={expert.image}
          alt={expert.name}
          fill
          className="object-cover"
        /> */}
      </div>

      {/* Nome - EXATAMENTE como na copy */}
      <h4 className="font-bold text-gray-900 text-lg">
        {expert.name}
      </h4>

      {/* Expertise - EXATAMENTE como na copy */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
        {expert.expertise}
      </p>
    </motion.div>
  );
}