"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  text: string;
  color: string;
  delay?: number;
}

export const TrustBadge = ({ 
  icon: Icon, 
  text, 
  color,
  delay = 0 
}: TrustBadgeProps) => (
  <motion.div 
    className="
      flex items-center gap-2.5 md:gap-3
      px-4 py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5
      bg-white/[0.08] backdrop-blur-md
      rounded-full border border-white/20
      shadow-[0_2px_10px_rgba(0,0,0,0.1)]
      hover:bg-white/[0.12] hover:border-white/30
      transition-all duration-300
    "
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className={`w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 ${color}`} strokeWidth={2.5} />
    <span className="text-sm md:text-base lg:text-lg text-white/95 font-medium tracking-wide">
      {text}
    </span>
  </motion.div>
);