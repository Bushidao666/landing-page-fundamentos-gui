"use client";

import { motion } from "framer-motion";
import { GuaranteeSeal } from "../molecules/GuaranteeSeal";
import { GuaranteeText } from "../molecules/GuaranteeText";
import { CTAButton } from "../atoms/CTAButton";
import { TrustIndicators } from "../molecules/TrustIndicators";

export const GuaranteeCard = () => (
  <motion.div 
    className="text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <GuaranteeSeal />
    <GuaranteeText />
    
    <div className="space-y-6 md:space-y-8">
      <CTAButton />
      <TrustIndicators />
    </div>
  </motion.div>
);