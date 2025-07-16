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
    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A192F]" />
    </div>
    {/* Subtle glow on hover - handled by parent */}
    <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/20 blur-xl transition-all duration-300" />
  </div>
);

export default FAQIcon;