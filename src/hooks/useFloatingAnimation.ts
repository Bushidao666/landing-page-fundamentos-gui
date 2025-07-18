import { useState, useEffect } from 'react';

/**
 * Hook customizado para animação flutuante segura
 * Evita erros de hidratação iniciando animação apenas no cliente
 */
export const useFloatingAnimation = (delay: number = 2) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // Aguarda hidratação completa + delay personalizado
    const timer = setTimeout(() => {
      setIsClient(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return isClient;
};

/**
 * Variantes de animação flutuante para framer-motion
 */
export const createFloatingVariants = (duration: number = 4, yRange: number = 3) => ({
  initial: { y: 0 },
  animate: {
    y: [-yRange, yRange, -yRange],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut" as const,
    }
  }
}); 