import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { researchConfig } from '../config';

export default function AlumniArchives() {
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

    items.forEach((item) => {
      gsap.set(item, { opacity: 0, y: 30 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target as HTMLDivElement);
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: (idx % 4) * 0.1,
              ease: 'power2.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  if (!researchConfig.sectionLabel && researchConfig.projects.length === 0) {
    return null;
  }

  return (
    <section
      id="alumni"
      aria-labelledby="alumni-title"
      style={{
        padding: '150px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: 24, marginBottom: 60 }}>
          <div>
            <h2
              id="alumni-title"
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
              {researchConfig.sectionLabel}
            </h2>
          </div>
        </div>
        <div
          className="mb-16"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 0 }}
        >
          {researchConfig.projects.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="group"
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: (i + 1) % 4 !== 0 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                padding: '24px 20px',
                transition: 'background 0.4s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              <div
                className="relative overflow-hidden mb-4"
                style={{ aspectRatio: '1/1' }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      opacity: 1,
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLImageElement).style.transform = 'scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLImageElement).style.transform = 'scale(1)';
                    }}
                    loading="lazy"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h4
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 400,
                  fontSize: 18,
                  color: '#ffffff',
                  margin: '0 0 6px 0',
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </h4>
              <div
                className="flex items-center justify-between"
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: 12,
                    color: '#dadada',
                    opacity: 0.8,
                  }}
                >
                  {project.discipline}
                </span>
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontWeight: 400,
                    fontSize: 11,
                    color: '#dadada',
                    opacity: 0.6,
                  }}
                >
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
