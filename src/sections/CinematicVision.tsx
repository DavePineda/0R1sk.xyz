import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { architectureConfig } from '../config';

export default function CinematicVision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    gsap.set(text, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(text, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power3.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  if (!architectureConfig.sectionLabel && !architectureConfig.title) {
    return null;
  }

  return (
    <section
      id="cinematic"
      ref={sectionRef}
      aria-labelledby="cinematic-title"
      style={{
        padding: '150px 5vw 80px',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {architectureConfig.sectionLabel && (
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
            {architectureConfig.sectionLabel}
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

        <div className="relative">
          {architectureConfig.videoPath && (
            <div
              className="relative overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '80vw',
                margin: '0 auto',
                aspectRatio: '16/9',
              }}
            >
              <video
                ref={videoRef}
                src={architectureConfig.videoPath}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
                aria-label="Video corporativo de Zero R1sk"
              />
            </div>
          )}

          <div
            ref={textRef}
            className="flex flex-col md:flex-row md:items-center"
            style={{ marginTop: 100, gap: '60px' }}
          >
            {architectureConfig.title && (
              <h2
                id="cinematic-title"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(32px, 4vw, 64px)',
                  lineHeight: 1.15,
                  letterSpacing: '-1px',
                  color: '#ffffff',
                  margin: 0,
                  flex: '0 0 50%',
                  textWrap: 'balance',
                }}
              >
                {architectureConfig.title}
              </h2>
            )}
            {architectureConfig.description && (
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: '#dadada',
                  margin: 0,
                  flex: '1 1 50%',
                  textWrap: 'pretty',
                }}
              >
                {architectureConfig.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
