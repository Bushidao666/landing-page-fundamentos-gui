/**
 * @file: responsive.ts
 * @responsibility: responsive design tokens and utilities
 * @exports: breakpoints, spacing, typography, layout utilities
 * @imports: none
 * @layer: styles
 */

export const breakpoints = {
  mobile: '320px',
  mobileLg: '475px', 
  tablet: '768px',
  desktop: '1024px',
  desktopLg: '1440px'
} as const;

export const spacing = {
  // Section spacing
  section: {
    mobile: 'py-12',
    tablet: 'py-16', 
    desktop: 'py-20',
    desktopLg: 'py-24'
  },
  
  // Card spacing
  card: {
    mobile: 'p-4',
    tablet: 'p-6',
    desktop: 'p-8',
    desktopLg: 'p-12'
  },
  
  // Component gaps
  gap: {
    mobile: 'gap-4',
    tablet: 'gap-6',
    desktop: 'gap-8',
    desktopLg: 'gap-12'
  }
} as const;

export const typography = {
  // Display text
  display: {
    mobile: 'text-2xl',
    tablet: 'text-3xl',
    desktop: 'text-4xl',
    desktopLg: 'text-5xl'
  },
  
  // Headline text
  headline: {
    mobile: 'text-lg',
    tablet: 'text-xl',
    desktop: 'text-2xl',
    desktopLg: 'text-3xl'
  },
  
  // Body text
  body: {
    mobile: 'text-sm',
    tablet: 'text-base',
    desktop: 'text-lg',
    desktopLg: 'text-xl'
  },
  
  // Small text
  small: {
    mobile: 'text-xs',
    tablet: 'text-sm',
    desktop: 'text-base',
    desktopLg: 'text-lg'
  }
} as const;

export const layout = {
  // Container max widths
  container: {
    mobile: 'max-w-xs',
    tablet: 'max-w-2xl',
    desktop: 'max-w-4xl',
    desktopLg: 'max-w-6xl'
  },
  
  // Statistics grid
  statistics: {
    mobile: 'grid-cols-1',
    tablet: 'grid-cols-2',
    desktop: 'grid-cols-3'
  },
  
  // Card layout
  cards: {
    mobile: 'space-y-8',
    tablet: 'space-y-10',
    desktop: 'space-y-12',
    desktopLg: 'space-y-16'
  }
} as const;

export const icons = {
  // Icon sizes
  size: {
    mobile: 'w-6 h-6',
    tablet: 'w-7 h-7',
    desktop: 'w-8 h-8',
    desktopLg: 'w-10 h-10'
  },
  
  // Container sizes
  container: {
    mobile: 'w-12 h-12',
    tablet: 'w-14 h-14',
    desktop: 'w-16 h-16',
    desktopLg: 'w-20 h-20'
  }
} as const;

export const animations = {
  // Transition durations
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms'
  },
  
  // Easing functions
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  }
} as const;