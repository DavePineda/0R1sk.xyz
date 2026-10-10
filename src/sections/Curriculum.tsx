import { Link } from 'react-router-dom';
import { ArrowUpRight, Radar, ScanSearch, ShieldAlert, ShieldCheck, type LucideIcon } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/use-reveal';
import { capabilitiesConfig } from '../config';

const ICONS: Record<string, LucideIcon> = {
  reconocimiento: Radar,
  'escaneo-enumeracion': ScanSearch,
  'evaluacion-vulnerabilidades': ShieldAlert,
  'consultoria-integral': ShieldCheck,
};

export default function Curriculum() {
  const reveal = useReveal<HTMLAnchorElement>();

  if (!capabilitiesConfig.sectionLabel && capabilitiesConfig.items.length === 0) {
    return null;
  }

  return (
    <section id="curriculum" aria-labelledby="curriculum-title" className="zr-section">
      <div className="zr-container">
        <SectionHeader
          id="curriculum-title"
          index="01"
          label={capabilitiesConfig.sectionLabel}
          title={capabilitiesConfig.title}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {capabilitiesConfig.items.map((service, i) => {
            const Icon = ICONS[service.slug] ?? ShieldCheck;
            return (
              <Link
                key={service.slug}
                ref={reveal(i)}
                to={`/capability/${service.slug}`}
                className="zr-card group flex flex-col no-underline"
                aria-labelledby={`service-title-${service.slug}`}
              >
                <div className="zr-media aspect-[16/9]">
                  {service.image && <img src={service.image} alt="" loading="lazy" aria-hidden="true" />}
                  <span className="absolute right-4 top-4 z-[1] rounded-md border border-white/10 bg-zr-bg/60 px-2.5 py-1 font-mono text-xs text-zr-amber backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
                <div className="relative flex flex-1 flex-col p-7 pt-0 md:p-9 md:pt-0">
                  <span className="relative z-[1] -mt-7 mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-zr-accent/40 bg-zr-bg/80 text-zr-accent shadow-[0_0_30px_-5px_rgba(79,209,255,0.6)] backdrop-blur transition-colors group-hover:bg-zr-accent group-hover:text-zr-bg">
                    <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3
                    id={`service-title-${service.slug}`}
                    className="mb-3 font-display text-2xl font-semibold text-white md:text-[26px]"
                  >
                    {service.title}
                  </h3>
                  <p className="mb-8 flex-1 text-[15px] leading-relaxed text-zr-muted" style={{ textWrap: 'pretty' }}>
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[13px] text-zr-accent">
                    Ver detalle
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
