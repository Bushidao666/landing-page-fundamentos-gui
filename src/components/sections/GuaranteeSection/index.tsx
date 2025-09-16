"use client";

import { GuaranteeCard } from "./organisms/GuaranteeCard";

const GuaranteeSection = () => {
  return (
    <section
      id="guarantee"
      className="
        relative 
        py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32
        overflow-hidden cv-auto
      "
      aria-labelledby="guarantee-heading"
    >
      {/* Optimized Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#1a2444] to-[#0f1419]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <GuaranteeCard />
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;