import { useState, useEffect } from "react";

/**
 * @file: useDebounce.ts
 * @responsibility: Debounce hook for search optimization
 * @exports: useDebounce
 * @layer: hooks
 */

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}