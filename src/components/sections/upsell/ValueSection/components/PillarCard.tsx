"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  pillar: {
    id: number;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
    color: string;
  };
  index: number;
}

const colorVariants = {
  blue: "bg-blue-100 text-blue-600 border-blue-200",
  green: "bg-green-100 text-green-600 border-green-200",
  red: "bg-red-100 text-red-600 border-red-200",
  purple: "bg-purple-100 text-purple-600 border-purple-200",
};

const iconColorVariants = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  red: "bg-red-500",
  purple: "bg-purple-500",
};

export function PillarCard({ pillar, index }: PillarCardProps) {
  const Icon = pillar.icon;
  const bgColor = colorVariants[pillar.color as keyof typeof colorVariants];
  const iconBg = iconColorVariants[pillar.color as keyof typeof iconColorVariants];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`relative p-6 rounded-2xl border-2 ${bgColor} overflow-hidden`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4">
        {/* Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2
          }}
          className="flex justify-center"
        >
          <div className={`${iconBg} p-4 rounded-2xl shadow-lg`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Title - EXATAMENTE como na copy */}
        <div className="text-center">
          <h3 className="text-xl font-black text-gray-900">
            Pilar {pillar.id}: {pillar.title}
          </h3>
          <p className="text-sm font-semibold text-gray-700 mt-1">
            ({pillar.subtitle})
          </p>
        </div>

        {/* Description - EXATAMENTE como na copy */}
        <p className="text-sm text-gray-700 leading-relaxed">
          {pillar.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mt-4">
          {pillar.highlights.map((highlight, idx) => (
            <span
              key={idx}
              className="text-xs font-bold bg-white/70 px-2 py-1 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}