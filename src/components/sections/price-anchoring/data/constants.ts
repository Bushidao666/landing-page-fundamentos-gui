/**
 * @file: constants.ts
 * @responsibility: Design system constants for PriceAnchoring section
 * @exports: SPACING, TYPOGRAPHY, BREAKPOINTS, ANIMATION
 * @layer: constants
 */

// Fluid spacing system using clamp()
export const SPACING = {
  xs: 'clamp(0.25rem, 1vw, 0.5rem)',
  sm: 'clamp(0.5rem, 2vw, 1rem)',
  md: 'clamp(1rem, 3vw, 1.5rem)',
  lg: 'clamp(1.5rem, 4vw, 2rem)',
  xl: 'clamp(2rem, 5vw, 3rem)',
  '2xl': 'clamp(3rem, 6vw, 4rem)',
  '3xl': 'clamp(4rem, 8vw, 6rem)',
} as const;

// Fluid typography scale
export const TYPOGRAPHY = {
  // Display sizes
  display: {
    xl: 'clamp(2.5rem, 5vw + 1rem, 3.5rem)',
    lg: 'clamp(2rem, 4vw + 0.5rem, 3rem)',
    md: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)',
    sm: 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)',
  },
  // Heading sizes
  heading: {
    xl: 'clamp(1.75rem, 3vw + 0.25rem, 2.25rem)',
    lg: 'clamp(1.5rem, 2.5vw + 0.25rem, 1.875rem)',
    md: 'clamp(1.25rem, 2vw + 0.25rem, 1.5rem)',
    sm: 'clamp(1.125rem, 1.5vw + 0.25rem, 1.25rem)',
  },
  // Body sizes
  body: {
    lg: 'clamp(1rem, 1vw + 0.25rem, 1.125rem)',
    md: 'clamp(0.875rem, 1vw + 0.125rem, 1rem)',
    sm: 'clamp(0.75rem, 0.5vw + 0.125rem, 0.875rem)',
  },
  // Price display
  price: {
    main: 'clamp(2.5rem, 6vw + 0.5rem, 4rem)',
    currency: 'clamp(1.25rem, 2vw + 0.25rem, 1.75rem)',
    decimal: 'clamp(1.5rem, 3vw + 0.25rem, 2.25rem)',
  },
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Animation configurations
export const ANIMATION = {
  // Durations
  duration: {
    instant: 150,
    fast: 300,
    normal: 500,
    slow: 800,
    slower: 1200,
  },
  // Easing functions
  easing: {
    smooth: [0.25, 0.1, 0.25, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    expo: [0.16, 1, 0.3, 1],
    linear: [0, 0, 1, 1],
  },
  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
    slower: 0.2,
  },
} as const;

// Color system
export const COLORS = {
  primary: '#D4AF37',
  primaryDark: '#B8941F',
  primaryLight: '#FFD700',
  background: {
    dark: '#0A192F',
    darker: '#050d1a',
    overlay: 'rgba(10, 25, 47, 0.9)',
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.9)',
    muted: 'rgba(255, 255, 255, 0.6)',
    disabled: 'rgba(255, 255, 255, 0.4)',
  },
  border: {
    default: 'rgba(255, 255, 255, 0.08)',
    hover: 'rgba(212, 175, 55, 0.2)',
    active: 'rgba(212, 175, 55, 0.4)',
  },
  surface: {
    glass: 'rgba(255, 255, 255, 0.02)',
    glassHover: 'rgba(255, 255, 255, 0.04)',
    overlay: 'rgba(212, 175, 55, 0.03)',
  },
} as const;

// Touch target sizes (accessibility)
export const TOUCH_TARGET = {
  min: '44px',
  comfortable: '48px',
  large: '56px',
} as const;

// Z-index scale
export const Z_INDEX = {
  background: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  tooltip: 50,
} as const;