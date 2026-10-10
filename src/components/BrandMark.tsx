import { siteConfig } from '../config';

export default function BrandMark() {
  return (
    <span className="flex items-center gap-2.5 text-white">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-md border border-zr-accent/40 bg-zr-accent/10 font-mono text-[13px] text-zr-accent"
        aria-hidden="true"
      >
        &gt;_
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">{siteConfig.brandName}</span>
    </span>
  );
}
