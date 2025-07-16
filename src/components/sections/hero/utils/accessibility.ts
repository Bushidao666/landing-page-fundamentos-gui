/**
 * @file: accessibility.ts
 * @responsibility: Accessibility utilities for Hero Section
 * @exports: a11yUtils, useReducedMotion, useFocusVisible
 * @layer: utils
 */

"use client";

import { useEffect, useState } from "react";

/**
 * Check if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Check if focus is visible
 */
export function useFocusVisible(): boolean {
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        setFocusVisible(true);
      }
    };

    const handleMouseDown = () => {
      setFocusVisible(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return focusVisible;
}

/**
 * Accessibility utilities
 */
export const a11yUtils = {
  /**
   * Generate unique ID for accessibility
   */
  generateId: (prefix: string): string => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  /**
   * Screen reader only class
   */
  srOnly: "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",

  /**
   * Focus visible styles
   */
  focusVisible: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F]",

  /**
   * Skip link styles
   */
  skipLink: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#D4AF37] focus:text-[#0A192F] focus:rounded-md focus:font-semibold",

  /**
   * Announce to screen readers
   */
  announce: (message: string, priority: "polite" | "assertive" = "polite"): void => {
    const announcement = document.createElement("div");
    announcement.setAttribute("role", "status");
    announcement.setAttribute("aria-live", priority);
    announcement.className = a11yUtils.srOnly;
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
};