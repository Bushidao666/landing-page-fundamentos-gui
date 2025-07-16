/**
 * @file: HeroValueProp.tsx
 * @responsibility: Value proposition text with highlights
 * @exports: HeroValueProp
 * @imports: motion, heroStyles, heroAnimations
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { heroStyles, cn } from "../styles";
import { heroAnimations } from "../animations";

interface HeroValuePropProps {
  mainText: string;
  highlights: {
    text: string;
    className?: string;
    underline?: boolean;
  }[];
  className?: string;
  animate?: boolean;
}

export default function HeroValueProp({
  mainText,
  highlights,
  className,
  animate = true,
}: HeroValuePropProps) {
  const parts = mainText.split(/\{(\d+)\}/);
  
  return (
    <p className={cn(heroStyles.valueProp, className)}>
      {parts.map((part, index) => {
        const highlightIndex = parseInt(part);
        
        if (!isNaN(highlightIndex) && highlights[highlightIndex]) {
          const highlight = highlights[highlightIndex];
          
          return (
            <span
              key={index}
              className={cn(
                "text-[#D4AF37] font-semibold",
                highlight.className,
                highlight.underline && "relative"
              )}
            >
              {highlight.text}
              {highlight.underline && animate && (
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                />
              )}
            </span>
          );
        }
        
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}