/**
 * @file: performance.ts
 * @responsibility: Performance optimization utilities
 * @exports: performanceUtils, useIntersectionObserver, useLazyAnimation
 * @layer: utils
 */

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer hook for lazy loading
 */
interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "50px",
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;
        setIsVisible(isElementVisible);

        if (isElementVisible && freezeOnceVisible) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, freezeOnceVisible]);

  return { elementRef, isVisible };
}

/**
 * Lazy animation hook
 */
export function useLazyAnimation(delay: number = 0) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return shouldAnimate;
}

/**
 * Performance utilities
 */
export const performanceUtils = {
  /**
   * Debounce function
   */
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  /**
   * Throttle function
   */
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;

    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  /**
   * Request idle callback polyfill
   */
  requestIdleCallback: (callback: IdleRequestCallback, options?: IdleRequestOptions) => {
    if ("requestIdleCallback" in window) {
      return window.requestIdleCallback(callback, options);
    } else {
      const start = Date.now();
      return setTimeout(() => {
        callback({
          didTimeout: false,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
        });
      }, 1) as unknown as number;
    }
  },

  /**
   * Preload critical resources
   */
  preloadResources: (resources: { href: string; as: string }[]) => {
    resources.forEach(({ href, as }) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    });
  },

  /**
   * Check if device has low performance
   */
  isLowPerformanceDevice: (): boolean => {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return true;
    }

    // Check for low memory
    if ("deviceMemory" in navigator && (navigator as any).deviceMemory < 4) {
      return true;
    }

    // Check for slow connection
    if ("connection" in navigator) {
      const connection = (navigator as any).connection;
      if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") {
        return true;
      }
    }

    return false;
  },
};