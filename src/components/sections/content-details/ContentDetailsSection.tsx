/**
 * @file: ContentDetailsSection.tsx
 * @responsibility: main content details section orchestrator
 * @exports: ContentDetailsSection
 * @imports: motion, SectionBackground, SectionHeader, ModuleCard, CTASection, modules, variants
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "./components/SectionBackground";
import { SectionHeader } from "./components/SectionHeader";
import { ModuleCard } from "./components/ModuleCard";
import { CTASection } from "./components/CTASection";
import { modules } from "./data/modules";
import { containerVariants, accordionVariants } from "./animations/variants";
import "./styles/content-details.css";

export function ContentDetailsSection() {
  return (
    <motion.section
      id="content-details"
      className="relative py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Effects */}
      <SectionBackground />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <SectionHeader className="max-w-5xl" />

        {/* Module Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 lg:space-y-20">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                className="relative"
                custom={index}
                variants={accordionVariants}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <ModuleCard
                  module={module}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <CTASection />
      </div>
    </motion.section>
  );
}