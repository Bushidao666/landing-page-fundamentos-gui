"use client";

import { useEffect, useRef } from "react";

type HotmartWidgetType = 'salesFunnel' | 'checkout';

interface HotmartWidgetProps {
  containerId: string;
  type?: HotmartWidgetType;
  retryIntervalMs?: number; // intervalo base
  maxRetries?: number; // limite de tentativas
  deferUntilVisible?: boolean; // monta somente quando container entra em viewport
  rootMargin?: string; // margem do viewport para disparo antecipado
}

/**
 * Monta o widget da Hotmart no container informado, com retry exponencial e cleanup seguro.
 * Requer que o script de checkout Elements já tenha sido carregado (use HotmartScript em nível de página).
 */
export default function HotmartWidget({
  containerId,
  type = 'salesFunnel',
  retryIntervalMs = 150,
  maxRetries = 40,
  deferUntilVisible = true,
  rootMargin = '200px',
}: HotmartWidgetProps) {
  const mountedRef = useRef(false);
  const instanceRef = useRef<any>(null);
  const retriesRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);
  const visibilityRef = useRef<boolean>(!deferUntilVisible);

  useEffect(() => {
    let cancelled = false;

    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const tryMount = () => {
      if (cancelled || mountedRef.current) return;
      if (!visibilityRef.current && deferUntilVisible) {
        scheduleRetry(retryIntervalMs);
        return;
      }
      const hasAPI = typeof window !== 'undefined' && !!(window as any).checkoutElements;
      const container = typeof document !== 'undefined' ? document.getElementById(containerId) : null;
      if (!container) {
        // container ausente: aguarda próximo loop curto
        scheduleRetry(retryIntervalMs);
        return;
      }

      if (hasAPI) {
        try {
          const api = (window as any).checkoutElements;
          const instance = api.init(type);
          instance.mount(`#${containerId}`);
          instanceRef.current = instance;
          mountedRef.current = true;
        } catch (err) {
          scheduleRetry(retryIntervalMs);
        }
      } else {
        scheduleRetry(retryIntervalMs);
      }
    };

    const scheduleRetry = (base: number) => {
      if (cancelled || mountedRef.current) return;
      if (retriesRef.current >= maxRetries) return; // para evitar loops infinitos
      const backoff = Math.min(base * Math.pow(1.25, retriesRef.current), 2000);
      retriesRef.current += 1;
      timeoutRef.current = window.setTimeout(tryMount, backoff);
    };

    // Observa visibilidade do container antes de montar (se configurado)
    let observer: IntersectionObserver | null = null;
    const observeVisibility = () => {
      if (!deferUntilVisible) return tryMount();
      const container = typeof document !== 'undefined' ? document.getElementById(containerId) : null;
      if (!container || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
        visibilityRef.current = true; // sem suporte: segue com montagem
        return tryMount();
      }
      observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry && (entry.isIntersecting || entry.intersectionRatio > 0)) {
          visibilityRef.current = true;
          observer && observer.disconnect();
          observeVisibilityCleanup();
          tryMount();
        }
      }, { root: null, rootMargin, threshold: 0 });
      observer.observe(container);
    };

    const observeVisibilityCleanup = () => {
      if (observer) {
        try { observer.disconnect(); } catch {}
        observer = null;
      }
    };

    // Inicializa visibilidade/montagem
    observeVisibility();

    // Cleanup
    return () => {
      cancelled = true;
      clearTimer();
      // cleanup observer
      try { /* @ts-ignore */ } finally {}
      try {
        if (instanceRef.current) {
          // tenta desmontar/destroi se disponível
          if (typeof instanceRef.current.unmount === 'function') {
            instanceRef.current.unmount();
          }
          if (typeof instanceRef.current.destroy === 'function') {
            instanceRef.current.destroy();
          }
        }
      } catch (e) {
        // silencioso
      } finally {
        instanceRef.current = null;
        mountedRef.current = false;
        observeVisibilityCleanup();
      }
    };
  }, [containerId, type, retryIntervalMs, maxRetries, deferUntilVisible, rootMargin]);

  return null;
}


