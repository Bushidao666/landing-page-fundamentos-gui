/**
 * @file: AnimatedCounter.tsx
 * @responsibility: Componente de contador animado para estatísticas
 * @exports: AnimatedCounter
 * @imports: React, useState, useEffect
 * @layer: components
 */

import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  shouldAnimate?: boolean;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  shouldAnimate = true
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function para animação mais suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldAnimate]);

  return (
    <span className="animated-counter">
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};