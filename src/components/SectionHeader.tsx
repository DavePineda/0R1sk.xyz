interface SectionHeaderProps {
  id: string;
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ id, index, label, title, description, align = 'left' }: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <header className={`mb-14 md:mb-16 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <div className={`zr-label mb-5 ${centered ? 'justify-center' : ''}`}>
        <span className="text-zr-amber">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-zr-amber to-zr-accent" aria-hidden="true" />
        <span>{label}</span>
      </div>
      <h2
        id={id}
        className="font-display text-[clamp(30px,4vw,52px)] font-semibold leading-[1.1] text-white"
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[17px] leading-relaxed text-zr-muted" style={{ textWrap: 'pretty' }}>
          {description}
        </p>
      )}
    </header>
  );
}
