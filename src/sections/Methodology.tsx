import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/use-reveal';
import { methodologyConfig } from '../config';

export default function Methodology() {
  const reveal = useReveal<HTMLDivElement>();

  if (!methodologyConfig.sectionLabel && methodologyConfig.items.length === 0) {
    return null;
  }

  return (
    <section
      id="methodology"
      aria-labelledby="methodology-title"
      className="zr-section overflow-hidden border-y border-zr-line bg-zr-surface/40"
    >
      <div className="zr-grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="zr-container relative">
        <SectionHeader
          id="methodology-title"
          index="02"
          label={methodologyConfig.sectionLabel}
          title={methodologyConfig.title}
          description={methodologyConfig.description}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {methodologyConfig.items.map((item, i) => (
            <div key={item.acronym} ref={reveal(i)} className="zr-card flex flex-col bg-zr-bg/80 p-7">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[28px] font-normal tracking-tight text-zr-accent">{item.acronym}</span>
                <span className="rounded-full border border-zr-amber/30 px-2.5 py-1 font-mono text-[11px] text-zr-amber">
                  framework
                </span>
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold leading-snug text-white">{item.name}</h3>
              <p className="text-[15px] leading-relaxed text-zr-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
