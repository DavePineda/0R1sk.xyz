import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { certificationsConfig } from '../config';

export default function Certifications() {
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
                delay: index * 0.2,
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

  if (!certificationsConfig.sectionLabel && certificationsConfig.items.length === 0) {
    return null;
  }

  return (
    <section
      id="certifications"
      ref={sectionRef}
      aria-labelledby="certifications-title"
      style={{
        padding: '120px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{ gap: 40, marginBottom: 60 }}
        >
          <div>
            {certificationsConfig.sectionLabel && (
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
                {certificationsConfig.sectionLabel}
              </div>
            )}
            {certificationsConfig.title && (
              <h2
                id="certifications-title"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(32px, 4vw, 64px)',
                  lineHeight: 1.15,
                  letterSpacing: '-1px',
                  color: '#ffffff',
                  margin: 0,
                  textWrap: 'balance',
                }}
              >
                {certificationsConfig.title}
              </h2>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 32 }}>
          {certificationsConfig.items.map((item, i) => (
            <div
              key={item.name}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="flex flex-col md:flex-row md:items-start"
              style={{
                gap: 24,
                padding: 32,
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
                  flex: '0 0 80px',
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(200, 170, 130, 0.3)',
                  borderRadius: '50%',
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 20,
                  fontWeight: 400,
                  color: 'rgba(200, 170, 130, 1)',
                }}
                aria-hidden="true"
              >
                {item.name.split(' ')[0]}
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 400,
                    fontSize: 26,
                    color: '#ffffff',
                    margin: '0 0 8px 0',
                    lineHeight: 1.2,
                  }}
                >
                  {item.fullName}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
