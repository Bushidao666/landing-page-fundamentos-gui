/**
 * @file: useCounterAnimation.ts
 * @responsibility: animated counter logic
 * @exports: useCounterAnimation hook
 * @imports: react, framer-motion
 * @layer: hooks
 */

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseCounterAnimationProps {
  target: number;
  duration?: number;
  easing?: (t: number) => number;
}

export function useCounterAnimation({ 
  target, 
  duration = 2000,
  easing = (t: number) => 1 - Math.pow(1 - t, 3) // easeOutCubic
}: UseCounterAnimationProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const hasAnimated = useRef(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Reset animation flag when target changes
    hasAnimated.current = false;
  }, [target]);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        
        setCount(Math.floor(target * easedProgress));
        
        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };
      
      animate();
      
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    } else if (!isInView) {
      // Reset counter when out of view
      hasAnimated.current = false;
      setCount(0);
      
      // Cancel any running animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, [isInView, target, duration, easing]);

  return { count, ref };
}