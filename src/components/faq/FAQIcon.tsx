"use client";

import React from "react";

/**
 * @file: FAQIcon.tsx
 * @responsibility: FAQ item icon with gradient background
 * @exports: FAQIcon
 * @imports: React
 * @layer: components
 */

interface FAQIconProps {
  icon: React.ComponentType<any>;
}

const FAQIcon: React.FC<FAQIconProps> = ({ icon: Icon }) => (
  <div className="relative flex-shrink-0">
    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center shadow-lg">
      <Icon className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#0A192F]" />
    </div>
    {/* Subtle glow on hover - handled by parent */}
    <div className="absolute inset-0 rounded-xl bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/20 blur-xl transition-all duration-300" />
  </div>
);

export default FAQIcon;