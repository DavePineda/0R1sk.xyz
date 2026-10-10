import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Anima la entrada (fade + slide up) de los elementos registrados
 * cuando aparecen en el viewport. Uso: ref={reveal(i)}.
 */
export function useReveal<T extends HTMLElement = HTMLElement>({ y = 32, stagger = 0.1, duration = 0.8 } = {}) {
  const items = useRef<(T | null)[]>([]);

  useEffect(() => {
    const els = items.current.filter(Boolean) as T[];
    if (els.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.set(els, { opacity: 0, y });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = els.indexOf(entry.target as T);
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration,
            delay: (idx % 4) * stagger,
            ease: 'power3.out',
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [y, stagger, duration]);

  return (i: number) => (el: T | null) => {
    items.current[i] = el;
  };
}
