/**
 * @file: performanceMonitor.ts
 * @responsibility: Performance monitoring utilities for FAQ section
 * @exports: measurePerformance, reportWebVitals
 * @layer: utils
 */

// Performance measurement utility
export const measurePerformance = (metricName: string) => {
  if (typeof window === "undefined" || !window.performance) return;

  const startMark = `${metricName}-start`;
  const endMark = `${metricName}-end`;
  const measureName = `${metricName}-duration`;

  return {
    start: () => performance.mark(startMark),
    end: () => {
      performance.mark(endMark);
      performance.measure(measureName, startMark, endMark);
      
      const measure = performance.getEntriesByName(measureName)[0];
      if (measure) {
        console.debug(`[Performance] ${metricName}: ${measure.duration.toFixed(2)}ms`);
      }
      
      // Clean up marks
      performance.clearMarks(startMark);
      performance.clearMarks(endMark);
      performance.clearMeasures(measureName);
      
      return measure?.duration;
    }
  };
};

// Web Vitals reporting
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === "production") {
    // Send to analytics in production
    console.log("Web Vital:", metric);
  }
};

// Intersection Observer for lazy loading
let intersectionObserver: IntersectionObserver | null = null;

export const getIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver => {
  if (!intersectionObserver) {
    intersectionObserver = new IntersectionObserver(callback, {
      rootMargin: "50px",
      threshold: 0.01,
      ...options
    });
  }
  return intersectionObserver;
};

// Memory usage monitoring
export const checkMemoryUsage = () => {
  if (typeof window === "undefined") return;
  
  const nav = navigator as any;
  if (nav.memory) {
    const memoryInfo = {
      usedJSHeapSize: (nav.memory.usedJSHeapSize / 1048576).toFixed(2),
      totalJSHeapSize: (nav.memory.totalJSHeapSize / 1048576).toFixed(2),
      jsHeapSizeLimit: (nav.memory.jsHeapSizeLimit / 1048576).toFixed(2)
    };
    
    console.debug("[Memory Usage]", memoryInfo);
    return memoryInfo;
  }
};

// FPS monitoring
export const monitorFPS = (duration: number = 1000) => {
  let lastTime = performance.now();
  let frames = 0;
  let fps = 0;

  const calculateFPS = () => {
    frames++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + duration) {
      fps = Math.round((frames * 1000) / (currentTime - lastTime));
      console.debug(`[FPS] ${fps}`);
      frames = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(calculateFPS);
  };

  requestAnimationFrame(calculateFPS);
  
  return () => fps;
};