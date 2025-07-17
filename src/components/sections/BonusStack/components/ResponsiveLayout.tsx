/**
 * @file: ResponsiveLayout.tsx
 * @responsibility: intelligent responsive layout detector and renderer
 * @exports: ResponsiveLayout
 * @imports: BonusStackSectionV2, responsive detection hooks, optimized tokens
 * @layer: layout
 */

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BonusStackSectionV2 from "../BonusStackSectionV2";
import "../styles/optimized-tokens.css";

interface ResponsiveLayoutProps {
  animated?: boolean;
  className?: string;
}

// Breakpoint configuration
const BREAKPOINTS = {
  mobile: 768,    // Below this = mobile layout
  desktop: 1024,  // Above this = desktop optimized
} as const;

// Custom hook for responsive detection
function useResponsiveLayout() {
  const [variant, setVariant] = useState<'mobile' | 'desktop'>('mobile');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const updateVariant = () => {
      const width = window.innerWidth;
      
      if (width >= BREAKPOINTS.desktop) {
        setVariant('desktop');
      } else {
        setVariant('mobile');
      }
    };

    // Initial detection
    updateVariant();

    // Listen for resize with debounce
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateVariant, 150);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return { variant, isClient };
}

export default function ResponsiveLayout({
  animated = true,
  className = ""
}: ResponsiveLayoutProps) {
  const { variant, isClient } = useResponsiveLayout();

  // Show loading state or initial mobile layout until client-side hydration
  if (!isClient) {
    return (
      <div className={`responsive-layout-placeholder ${className}`}>
        <BonusStackSectionV2 
          variant="mobile"
          animated={false}
        />
      </div>
    );
  }

  return (
    <motion.div
      className={`responsive-layout ${className}`}
      key={variant} // Force re-render when variant changes
      initial={animated ? { opacity: 0 } : undefined}
      animate={animated ? { opacity: 1 } : undefined}
      transition={animated ? { duration: 0.3 } : undefined}
    >
      <BonusStackSectionV2 
        variant={variant}
        animated={animated}
      />
      
      {/* Debug info - only in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-secondary text-bg-main px-3 py-1 rounded text-micro font-mono z-50 opacity-50">
          Layout: {variant} | Client: {isClient ? 'Yes' : 'No'}
        </div>
      )}
    </motion.div>
  );
} 