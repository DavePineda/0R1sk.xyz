import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import DigitalRain from './DigitalRain';
import BrandMark from '../components/BrandMark';
import WhatsAppButton from '../components/WhatsAppButton';
import { capabilitiesConfig, capabilityDetailConfig } from '../config';

const SLUGS = Object.keys(capabilityDetailConfig.capabilities);

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? capabilityDetailConfig.capabilities[slug] : null;
  const image = capabilitiesConfig.items.find((item) => item.slug === slug)?.image;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zr-bg">
        <p className="font-mono text-zr-muted">{capabilityDetailConfig.notFoundText || 'No encontrado.'}</p>
        <Link to="/" className="zr-btn-ghost">
          {capabilityDetailConfig.backLinkText}
        </Link>
      </div>
    );
  }

  const currentIndex = SLUGS.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? SLUGS[currentIndex - 1] : null;
  const nextSlug = currentIndex < SLUGS.length - 1 ? SLUGS[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zr-bg">
      {/* Lluvia digital de fondo, atenuada */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-screen opacity-25">
        <DigitalRain />
      </div>
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-zr-bg/40 via-zr-bg/85 to-zr-bg"
        aria-hidden="true"
      />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-zr-line bg-zr-bg/85 backdrop-blur-md">
        <div className="zr-container flex h-[72px] items-center justify-between">
          <Link to="/" className="rounded-sm no-underline" aria-label="Zero R1sk - Inicio">
            <BrandMark />
          </Link>
          {capabilityDetailConfig.backLinkText && (
            <Link to="/" className="nav-link inline-flex items-center gap-2">
              <ArrowLeft size={14} aria-hidden="true" />
              {capabilityDetailConfig.backLinkText}
            </Link>
          )}
        </div>
      </nav>

      <main className="relative z-[2]">
        <header className="mx-auto max-w-3xl px-5 pb-14 pt-40 sm:px-8 md:pt-48">
          <div className="zr-label mb-6">
            <span className="text-zr-amber">0{currentIndex + 1}</span>
            <span className="h-px w-10 bg-gradient-to-r from-zr-amber to-zr-accent" aria-hidden="true" />
            <span>{capabilityDetailConfig.sectionLabel}</span>
          </div>
          <h1
            className="mb-6 font-display text-[clamp(38px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
            style={{ textWrap: 'balance' }}
          >
            {data.title}
          </h1>
          {data.subtitle && <p className="max-w-xl text-lg leading-relaxed text-zr-muted">{data.subtitle}</p>}
        </header>

        {image && (
          <div className="mx-auto mb-16 max-w-4xl px-5 sm:px-8">
            <div className="zr-media zr-media-soft aspect-[1184/864] rounded-2xl border border-zr-line shadow-[0_40px_100px_-40px_rgba(79,209,255,0.45)]">
              <img src={`/${image}`} alt="" aria-hidden="true" />
            </div>
          </div>
        )}

        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-7 border-l border-zr-accent/30 pl-6 md:pl-8">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.85] text-zr-text/90" style={{ textWrap: 'pretty' }}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-xl border border-zr-accent/25 bg-zr-accent/[0.06] p-7 sm:flex-row sm:items-center">
            <p className="font-display text-xl font-semibold text-white">¿Quieres aplicar este servicio en tu empresa?</p>
            <Link to="/#contact" className="zr-btn-primary shrink-0">
              Hablar con un experto
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </article>

        <nav aria-label="Otros servicios" className="mx-auto max-w-3xl px-5 pb-28 pt-16 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {prevSlug ? (
              <Link to={`/capability/${prevSlug}`} className="zr-card group flex flex-col gap-1 p-5 no-underline">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-zr-muted">
                  <ArrowLeft size={12} aria-hidden="true" />
                  {capabilityDetailConfig.prevLabel}
                </span>
                <span className="font-display font-semibold text-white">
                  {capabilityDetailConfig.capabilities[prevSlug].title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
            {nextSlug && (
              <Link
                to={`/capability/${nextSlug}`}
                className="zr-card group flex flex-col items-end gap-1 p-5 text-right no-underline"
              >
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-zr-muted">
                  {capabilityDetailConfig.nextLabel}
                  <ArrowRight size={12} aria-hidden="true" />
                </span>
                <span className="font-display font-semibold text-white">
                  {capabilityDetailConfig.capabilities[nextSlug].title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </main>
      <WhatsAppButton />
    </div>
  );
}
