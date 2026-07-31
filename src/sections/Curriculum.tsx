import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { capabilitiesConfig } from '../config';

export default function Curriculum() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    const observers: IntersectionObserver[] = [];

    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 60 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.0,
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

  if (!capabilitiesConfig.sectionLabel && capabilitiesConfig.items.length === 0) {
    return null;
  }

  return (
    <section
      id="curriculum"
      ref={sectionRef}
      aria-labelledby="curriculum-title"
      className="relative"
      style={{
        padding: '150px 5vw',
        minHeight: '100vh',
        background: 'transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {capabilitiesConfig.sectionLabel && (
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
            {capabilitiesConfig.sectionLabel}
          </div>
        )}
        <div
          className="mb-10"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        {capabilitiesConfig.title && (
          <h2
            id="curriculum-title"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 64px)',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              color: '#ffffff',
              margin: '0 0 80px 0',
              maxWidth: 800,
              textWrap: 'balance',
            }}
          >
            {capabilitiesConfig.title}
          </h2>
        )}

        <div className="flex flex-col" style={{ gap: 100 }}>
          {capabilitiesConfig.items.map((discipline, i) => (
            <article
              key={discipline.title}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="flex flex-col md:flex-row md:items-start group"
              style={{ gap: '40px', cursor: 'pointer' }}
              onClick={() => navigate(`/capability/${discipline.slug}`)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-labelledby={`service-title-${discipline.slug}`}
            >
              <div style={{ flex: '0 0 70%' }}>
                <h3
                  id={`service-title-${discipline.slug}`}
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 400,
                    fontSize: 'clamp(40px, 5.4vw, 86.4px)',
                    lineHeight: 1.05,
                    letterSpacing: '-1.44px',
                    color: hoveredIndex === i ? 'rgba(200, 170, 130, 1)' : '#ffffff',
                    margin: 0,
                    textWrap: 'balance',
                    transition: 'color 0.4s ease',
                  }}
                >
                  {discipline.title}
                </h3>
              </div>
              <div
                className="flex items-start"
                style={{
                  flex: '1 1 30%',
                  paddingTop: 'clamp(4px, 1vw, 16px)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: hoveredIndex === i ? 200 : 'auto',
                  transition: 'min-height 0.4s ease',
                }}
              >
                {/* Description text — fades out on hover */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: '#dadada',
                    margin: 0,
                    textWrap: 'pretty',
                    opacity: hoveredIndex === i ? 0 : 1,
                    transition: 'opacity 0.35s ease',
                  }}
                >
                  {discipline.description}
                </p>

                {/* Image — fades in on hover */}
                {discipline.image && (
                  <img
                    src={discipline.image}
                    alt=""
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: hoveredIndex === i ? 1 : 0,
                      transform: hoveredIndex === i ? 'scale(1)' : 'scale(1.05)',
                      transition: 'opacity 0.45s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      filter: 'grayscale(30%)',
                    }}
                    loading="lazy"
                    aria-hidden="true"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
