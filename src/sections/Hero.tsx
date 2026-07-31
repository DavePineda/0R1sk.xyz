import { useRef, useEffect, useState } from 'react';
import AmberCascades from './AmberCascades';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { heroConfig } from '../config';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!heroConfig.title) {
    return null;
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      <AmberCascades />
      <div
        className="relative z-10 flex flex-col justify-between pointer-events-none"
        style={{
          height: '100%',
          padding: '28vh 5vw 8vh',
        }}
      >
        <div>
          <h1
            id="hero-title"
            ref={titleRef}
            className="text-white"
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 400,
              fontSize: 'clamp(48px, 6vw, 96px)',
              lineHeight: 1.0,
              letterSpacing: '-3px',
              textShadow: '0 4px 24px rgba(0,0,0,0.8)',
              marginBottom: 'clamp(32px, 4vw, 56px)',
              width: 'fit-content',
            }}
          >
            {heroConfig.title}
          </h1>
          {heroConfig.subtitleLine1 && (
            <p
              style={{
                fontFamily: "'GeistMono', monospace",
                fontWeight: 200,
                fontSize: 'clamp(15px, 1.5vw, 22px)',
                lineHeight: 1.7,
                letterSpacing: '-0.3px',
                color: '#ffffff',
                margin: '0 0 12px 0',
                width: titleWidth || 'auto',
                maxWidth: '100%',
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              {heroConfig.subtitleLine1}
            </p>
          )}
          {heroConfig.subtitleLine2 && (
            <p
              style={{
                fontFamily: "'GeistMono', monospace",
                fontWeight: 200,
                fontSize: 'clamp(15px, 1.5vw, 22px)',
                lineHeight: 1.7,
                letterSpacing: '-0.3px',
                color: '#ffffff',
                margin: 0,
                width: titleWidth || 'auto',
                maxWidth: '100%',
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              {heroConfig.subtitleLine2}
            </p>
          )}
        </div>

        <div
          className="pointer-events-auto flex flex-col sm:flex-row items-center justify-center"
          style={{ gap: 20 }}
        >
          {heroConfig.ctaText && (
            <LiquidGlassButton
              onClick={() => scrollTo('#curriculum')}
              aria-label="Conocer nuestros servicios de ciberseguridad"
            >
              {heroConfig.ctaText}
            </LiquidGlassButton>
          )}
          {heroConfig.secondaryCtaText && (
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-full"
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 14,
                fontWeight: 300,
                letterSpacing: '0.5px',
                padding: '16px 40px',
                borderRadius: 999,
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: 'transparent',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {heroConfig.secondaryCtaText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
