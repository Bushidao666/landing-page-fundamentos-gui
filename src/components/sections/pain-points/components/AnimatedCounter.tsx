/**
 * @file: AnimatedCounter.tsx
 * @responsibility: animated counter component
 * @exports: AnimatedCounter component
 * @imports: useCounterAnimation hook
 * @layer: components
 */

"use client";

import { useCounterAnimation } from "../hooks/useCounterAnimation";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ 
  target, 
  prefix = "", 
  suffix = "", 
  duration = 2000,
  className = ""
}: AnimatedCounterProps) {
  const { count, ref } = useCounterAnimation({ target, duration });

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
}