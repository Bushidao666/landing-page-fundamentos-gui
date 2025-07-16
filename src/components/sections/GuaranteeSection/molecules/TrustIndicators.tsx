"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Clock } from "lucide-react";
import { TrustBadge } from "../atoms/TrustBadge";

export const TrustIndicators = () => (
  <motion.div 
    className="
      flex flex-wrap items-center justify-center 
      gap-3 md:gap-4 lg:gap-5
    "
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <TrustBadge 
      icon={CheckCircle} 
      text="Acesso Instantâneo" 
      color="text-green-400" 
      delay={0.9}
    />
    <TrustBadge 
      icon={Shield} 
      text="100% Garantido" 
      color="text-[#D4AF37]" 
      delay={1.0}
    />
    <TrustBadge 
      icon={Clock} 
      text="Sem Pegadinhas" 
      color="text-blue-400" 
      delay={1.1}
    />
  </motion.div>
);