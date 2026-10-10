import { useEffect, useState } from 'react';
import type { TerminalLine } from '../config';

const PREFIX: Record<TerminalLine['kind'], { symbol: string; className: string }> = {
  cmd: { symbol: '$', className: 'text-zr-accent' },
  info: { symbol: '[*]', className: 'text-zr-cyan' },
  ok: { symbol: '[+]', className: 'text-zr-accent' },
  warn: { symbol: '[!]', className: 'text-zr-amber' },
  done: { symbol: '[✓]', className: 'text-zr-accent' },
};

interface TerminalWindowProps {
  title: string;
  lines: TerminalLine[];
}

export default function TerminalWindow({ title, lines }: TerminalWindowProps) {
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(reducedMotion ? lines.length : 0);

  useEffect(() => {
    if (reducedMotion) return;
    let count = 0;
    const timer = window.setInterval(() => {
      count += 1;
      setVisible(count);
      if (count >= lines.length) window.clearInterval(timer);
    }, 650);
    return () => window.clearInterval(timer);
  }, [lines.length, reducedMotion]);

  const finished = visible >= lines.length;

  return (
    <div
      className="overflow-hidden rounded-xl border border-zr-line bg-zr-surface/75 shadow-[0_30px_80px_-30px_rgba(79,209,255,0.35)] backdrop-blur-md"
      role="img"
      aria-label="Simulación de una auditoría de seguridad en una terminal"
    >
      <div className="flex items-center gap-2 border-b border-zr-line bg-white/[0.02] px-4 py-3" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-xs text-zr-muted">{title}</span>
      </div>
      <div className="min-h-[248px] space-y-2.5 p-5 font-mono text-[13px] leading-relaxed" aria-hidden="true">
        {lines.slice(0, visible).map((line, i) => {
          const prefix = PREFIX[line.kind];
          return (
            <div key={i} className="flex gap-3">
              <span className={`shrink-0 ${prefix.className}`}>{prefix.symbol}</span>
              <span className={line.kind === 'cmd' ? 'text-white' : 'text-zr-text/85'}>{line.text}</span>
            </div>
          );
        })}
        <div className="flex gap-3">
          <span className="text-zr-accent">{finished ? '$' : ''}</span>
          <span className="zr-cursor" />
        </div>
      </div>
    </div>
  );
}
