import { ArrowRight } from 'lucide-react';
import DigitalRain from './DigitalRain';
import TerminalWindow from '../components/TerminalWindow';
import { heroConfig } from '../config';

export default function Hero() {
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
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      {/* Imagen cinematográfica de fondo */}
      <img
        src={heroConfig.backgroundImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
        fetchPriority="high"
      />
      <div className="absolute inset-0 opacity-70">
        <DigitalRain />
      </div>
      {/* Velo para que el texto se lea sobre la imagen y la lluvia */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(4,6,12,0.94) 0%, rgba(4,6,12,0.7) 45%, rgba(4,6,12,0.25) 100%), linear-gradient(0deg, #04060c 0%, transparent 35%), radial-gradient(800px 500px at 80% 45%, rgba(79,209,255,0.12), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="zr-container pointer-events-none relative z-10 flex flex-1 flex-col justify-center pb-10 pt-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {heroConfig.eyebrow && (
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-zr-accent/30 bg-zr-accent/[0.07] px-4 py-1.5 font-mono text-[12px] text-zr-accent">
                <span className="zr-pulse-dot" aria-hidden="true" />
                {heroConfig.eyebrow}
              </div>
            )}

            <h1
              id="hero-title"
              className="font-display text-[clamp(38px,4.4vw,64px)] font-bold leading-[1.02] tracking-[-0.035em] text-white"
              style={{ textWrap: 'balance' }}
            >
              {heroConfig.title}{' '}
              <span className="bg-gradient-to-r from-zr-accent via-zr-cyan to-zr-amber bg-clip-text text-transparent">
                {heroConfig.titleHighlight}
              </span>
            </h1>

            {heroConfig.subtitle && (
              <p className="mt-7 max-w-xl text-[clamp(16px,1.35vw,19px)] leading-relaxed text-zr-muted" style={{ textWrap: 'pretty' }}>
                {heroConfig.subtitle}
              </p>
            )}

            <div className="pointer-events-auto mt-10 flex flex-col gap-4 sm:flex-row">
              {heroConfig.ctaText && (
                <button type="button" onClick={() => scrollTo('#contact')} className="zr-btn-primary">
                  {heroConfig.ctaText}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              )}
              {heroConfig.secondaryCtaText && (
                <button type="button" onClick={() => scrollTo('#curriculum')} className="zr-btn-ghost">
                  {heroConfig.secondaryCtaText}
                </button>
              )}
            </div>
          </div>

          {heroConfig.terminalLines.length > 0 && (
            <div className="hidden md:block">
              <TerminalWindow title={heroConfig.terminalTitle} lines={heroConfig.terminalLines} />
            </div>
          )}
        </div>
      </div>

      {heroConfig.stats.length > 0 && (
        <div className="relative z-10 border-t border-zr-line bg-zr-bg/70 backdrop-blur-sm">
          <dl className="zr-container grid grid-cols-2 gap-x-6 gap-y-6 py-7 lg:grid-cols-4">
            {heroConfig.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1.5">
                <dt className="text-[13px] text-zr-muted">{stat.label}</dt>
                <dd className="font-mono text-[15px] text-white md:text-base">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}
