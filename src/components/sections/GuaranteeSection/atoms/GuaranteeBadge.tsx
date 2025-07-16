"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const GuaranteeBadge = () => (
  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4">
    <motion.div 
      className="
        w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
        bg-gradient-to-br from-green-500 to-green-600
        rounded-full flex items-center justify-center 
        border-[3px] md:border-4 border-white 
        shadow-[0_4px_20px_rgba(34,197,94,0.4)]
      "
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        delay: 0.5, 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
    >
      <CheckCircle className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" strokeWidth={3} />
    </motion.div>
  </div>
);