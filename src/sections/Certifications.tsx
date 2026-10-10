import { BadgeCheck } from 'lucide-react';
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

        <div className="grid gap-5 md:grid-cols-2">
          {certificationsConfig.items.map((item, i) => (
            <div key={item.name} ref={reveal(i)} className="zr-card flex flex-col gap-6 p-7 sm:flex-row sm:items-start md:p-8">
              <div
                className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl border border-zr-accent/30 bg-gradient-to-br from-zr-accent/15 to-transparent"
                aria-hidden="true"
              >
                <BadgeCheck size={22} className="mb-1 text-zr-accent" strokeWidth={1.75} />
                <span className="font-mono text-[13px] text-white">{item.name.split(' ')[0]}</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 font-display text-xl font-semibold text-white">{item.fullName}</h3>
                <p className="text-[15px] leading-relaxed text-zr-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
