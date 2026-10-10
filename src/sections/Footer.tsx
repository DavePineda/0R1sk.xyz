import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BrandMark from '../components/BrandMark';
import { footerConfig, siteConfig } from '../config';

export default function Footer() {
  if (!footerConfig.heading && footerConfig.columns.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="relative z-[2] border-t border-zr-line">
      <div className="zr-container py-16 md:py-20">
        {footerConfig.heading && (
          <div className="relative mb-16 flex flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl border border-zr-accent/25 p-8 md:flex-row md:items-center md:p-12">
            <img
              src="/images/research-2.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zr-bg via-zr-bg/85 to-zr-bg/30"
              aria-hidden="true"
            />
            <h2 className="relative max-w-xl font-display text-[clamp(26px,3vw,40px)] font-semibold leading-tight text-white">
              {footerConfig.heading}
            </h2>
            <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="zr-btn-primary relative shrink-0">
              Agenda una evaluación
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        )}

        <div className="mb-14 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-zr-muted">{siteConfig.tagline}</p>
          </div>
          {footerConfig.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3.5">
              {column.title && <span className="zr-label mb-1">{column.title}</span>}
              {column.links.map((link) =>
                link.href.startsWith('/') ? (
                  <Link key={link.label} to={link.href} className="nav-link w-fit">
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="nav-link w-fit"
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-zr-line pt-6 md:flex-row md:items-center">
          {footerConfig.copyright && (
            <span className="font-mono text-[12px] text-zr-muted">
              © {new Date().getFullYear()} {footerConfig.copyright.replace(/^Copyright\s*/i, '')}
            </span>
          )}
          {footerConfig.bottomLinks.length > 0 && (
            <div className="flex items-center gap-6">
              {footerConfig.bottomLinks.map((bottomLink) => (
                <a
                  key={bottomLink.label}
                  href={bottomLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link !text-[12px]"
                >
                  {bottomLink.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
