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
      className="mt-12"
    >
      {/* Grid responsivo - 1 coluna mobile, 2 tablet, 2 desktop (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {pillarsData.map((pillar, index) => (
          <PillarCard key={pillar.id} pillar={pillar} index={index} />
        ))}
      </div>
    </motion.div>
  );
}