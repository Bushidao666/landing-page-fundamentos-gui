"use client";

import { motion } from "framer-motion";
import { PillarCard } from "./PillarCard";
import { pillarsData } from "../data/pillars";

export function PillarsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8 sm:mt-10 md:mt-12"
    >
      {/* Grid responsivo otimizado - 1 coluna mobile, 2 tablet/desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {pillarsData.map((pillar, index) => (
          <PillarCard key={pillar.id} pillar={pillar} index={index} />
        ))}
      </div>
    </motion.div>
  );
}