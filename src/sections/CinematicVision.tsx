import { Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/use-reveal';
import { architectureConfig } from '../config';

export default function CinematicVision() {
  const reveal = useReveal<HTMLDivElement>({ stagger: 0.15 });

  if (!architectureConfig.sectionLabel && !architectureConfig.title) {
    return null;
  }

  return (
    <section id="cinematic" aria-labelledby="cinematic-title" className="zr-section">
      <div className="zr-container grid items-center gap-14 lg:grid-cols-2">
        <div ref={reveal(0)}>
          <SectionHeader
            id="cinematic-title"
            index="05"
            label={architectureConfig.sectionLabel}
            title={architectureConfig.title}
            description={architectureConfig.description}
          />
          {architectureConfig.values.length > 0 && (
            <ul className="-mt-4 grid gap-3 sm:grid-cols-2">
              {architectureConfig.values.map((value) => (
                <li key={value} className="flex items-center gap-3 text-[15px] text-zr-text">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zr-accent/15 text-zr-accent">
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {value}
                </li>
              ))}
            </ul>
          )}
        </div>

        {architectureConfig.videoPath && (
          <div ref={reveal(1)} className="relative">
            {/* Esquinas tipo visor */}
            <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-zr-accent" aria-hidden="true" />
            <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-zr-accent" aria-hidden="true" />
            <div className="relative aspect-video overflow-hidden rounded-xl border border-zr-line">
              <video
                src={architectureConfig.videoPath}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="block h-full w-full object-cover"
                aria-label="Video corporativo de Zero R1sk"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zr-bg/70 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-zr-bg/70 px-3 py-1.5 font-mono text-[11px] text-zr-accent backdrop-blur">
                <span className="zr-pulse-dot" aria-hidden="true" />
                Zero R1sk · desde 2020
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
