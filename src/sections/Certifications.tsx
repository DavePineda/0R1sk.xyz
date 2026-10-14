import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/use-reveal';
import { certificationsConfig } from '../config';

export default function Certifications() {
  const reveal = useReveal<HTMLDivElement>();

  if (!certificationsConfig.sectionLabel && certificationsConfig.items.length === 0) {
    return null;
  }

  return (
    <section id="certifications" aria-labelledby="certifications-title" className="zr-section">
      <div className="zr-container">
        <SectionHeader
          id="certifications-title"
          index="04"
          label={certificationsConfig.sectionLabel}
          title={certificationsConfig.title}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {certificationsConfig.items.map((item, i) => (
            <div
              key={item.name}
              ref={reveal(i)}
              className="zr-card flex flex-col gap-6 p-7 sm:flex-row sm:items-start md:p-8 lg:flex-col"
            >
              <div
                className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl border border-zr-accent/30 bg-gradient-to-br from-zr-accent/15 to-transparent"
                aria-hidden="true"
              >
                <BadgeCheck size={22} className="mb-1 text-zr-accent" strokeWidth={1.75} />
                <span className="font-mono text-[13px] text-white">{item.name.split(' ')[0]}</span>
              </div>
              <div className="flex flex-1 flex-col self-stretch">
                <span className="mb-2 font-mono text-[12px] uppercase tracking-wider text-zr-amber">{item.issuer}</span>
                <h3 className="mb-2 font-display text-xl font-semibold text-white">{item.fullName}</h3>
                <p className="mb-5 flex-1 text-[15px] leading-relaxed text-zr-muted" style={{ textWrap: 'pretty' }}>
                  {item.description}
                </p>
                {item.verifyNote && !item.verifyUrl && (
                  <span className="font-mono text-[13px] text-zr-muted">{item.verifyNote}</span>
                )}
                {item.verifyUrl && (
                  <a
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verificar credencial ${item.fullName} (abre en una nueva pestaña)`}
                    className="group inline-flex items-center gap-1.5 self-start font-mono text-[13px] text-zr-accent"
                  >
                    Verificar credencial
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
