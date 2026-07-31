import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { methodologyConfig } from '../config';

export default function Methodology() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    const observers: IntersectionObserver[] = [];

    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 40 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                delay: index * 0.15,
                ease: 'power3.out',
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  if (!methodologyConfig.sectionLabel && methodologyConfig.items.length === 0) {
    return null;
  }

  return (
    <section
      id="methodology"
      ref={sectionRef}
      aria-labelledby="methodology-title"
      className="relative"
      style={{
        padding: '150px 5vw',
        minHeight: '60vh',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {methodologyConfig.sectionLabel && (
          <div
            className="mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.6,
            }}
          >
            {methodologyConfig.sectionLabel}
          </div>
        )}
        <div
          className="mb-16"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        {methodologyConfig.title && (
          <h2
            id="methodology-title"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 64px)',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              color: '#ffffff',
              margin: '0 0 24px 0',
              textWrap: 'balance',
            }}
          >
            {methodologyConfig.title}
          </h2>
        )}

        {methodologyConfig.description && (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 200,
              fontSize: 17,
              lineHeight: 1.85,
              color: '#dadada',
              margin: '0 0 80px 0',
              maxWidth: 720,
              textWrap: 'pretty',
            }}
          >
            {methodologyConfig.description}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 40 }}>
          {methodologyConfig.items.map((item, i) => (
            <div
              key={item.acronym}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="group"
              style={{
                padding: 36,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.01)',
                transition: 'border-color 0.4s ease, background 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 170, 130, 0.4)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
              }}
            >
              <div
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(200, 170, 130, 1)',
                  marginBottom: 12,
                }}
              >
                {item.acronym}
              </div>
              <h3
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 400,
                  fontSize: 24,
                  color: '#ffffff',
                  margin: '0 0 16px 0',
                  lineHeight: 1.2,
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: '#dadada',
                  margin: 0,
                  opacity: 0.85,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
