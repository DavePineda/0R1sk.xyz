import {
  Bug,
  Cloud,
  ClipboardCheck,
  Crosshair,
  GraduationCap,
  Lock,
  Network,
  ShieldHalf,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/use-reveal';
import { researchConfig } from '../config';

const ICONS: Record<string, LucideIcon> = {
  Pentesting: Bug,
  'Análisis de Amenazas': Crosshair,
  'Seguridad de Redes': Network,
  'Seguridad en la Nube': Cloud,
  'Auditoría de Seguridad': ClipboardCheck,
  'Protección de Datos': Lock,
  'Gestión de Riesgos': ShieldHalf,
  Concienciación: GraduationCap,
};

export default function AlumniArchives() {
  const reveal = useReveal<HTMLDivElement>({ y: 24, stagger: 0.08 });

  if (!researchConfig.sectionLabel && researchConfig.projects.length === 0) {
    return null;
  }

  return (
    <section id="alumni" aria-labelledby="alumni-title" className="zr-section">
      <div className="zr-container">
        <SectionHeader id="alumni-title" index="03" label={researchConfig.sectionLabel} title={researchConfig.title} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {researchConfig.projects.map((area, i) => {
            const Icon = ICONS[area.title] ?? ShieldHalf;
            return (
              <div key={area.title} ref={reveal(i)} className="zr-card group">
                <div className="zr-media aspect-square">
                  {area.image && <img src={area.image} alt="" loading="lazy" aria-hidden="true" />}
                </div>
                <div className="absolute inset-x-0 bottom-0 z-[1] p-5">
                  <Icon
                    size={20}
                    strokeWidth={1.75}
                    className="mb-3 text-zr-accent drop-shadow-[0_0_8px_rgba(79,209,255,0.8)]"
                    aria-hidden="true"
                  />
                  <h3 className="mb-1 font-display text-lg font-semibold text-white">{area.title}</h3>
                  <p className="font-mono text-[12px] text-zr-amber/90">{area.discipline}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
