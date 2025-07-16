"use client";

import { motion } from "framer-motion";
import { Shield, Clock, RefreshCw } from "lucide-react";

const badges = [
  {
    icon: Shield,
    label: "Pagamento Seguro",
    color: "text-green-500"
  },
  {
    icon: Clock,
    label: "Acesso Imediato", 
    color: "text-blue-500"
  },
  {
    icon: RefreshCw,
    label: "Garantia 7 Dias",
    color: "text-purple-500"
  }
];

export default function SecurityBadges() {
  return (
    <motion.div 
      className="flex flex-wrap items-center justify-center 
                 gap-4 sm:gap-6 lg:gap-8 
                 pt-6 sm:pt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2 text-sm sm:text-base"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <badge.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${badge.color}`} />
          <span className="text-gray-300 font-medium">{badge.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}