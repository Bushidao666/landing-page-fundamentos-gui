import { useEffect } from 'react';

export function useWebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reportWebVitals = async () => {
      if ('web-vitals' in window) return;
      
      try {
        const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals');
        
        // Log metrics in development
        if (process.env.NODE_ENV === 'development') {
          onCLS((metric) => console.log('CLS:', metric.value));
          onFID((metric) => console.log('FID:', metric.value));
          onFCP((metric) => console.log('FCP:', metric.value));
          onLCP((metric) => console.log('LCP:', metric.value));
          onTTFB((metric) => console.log('TTFB:', metric.value));
        }
      } catch (error) {
        console.error('Failed to load web-vitals:', error);
      }
    };

    reportWebVitals();
  }, []);
}