import { useEffect, useState } from 'react';
import { siteConfig, navigationConfig } from '../config';
import BrandMark from '../components/BrandMark';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navigationConfig.links.map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!siteConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  const solid = scrolled || mobileOpen;

  return (
    <>
      <nav
        aria-label="Navegación principal"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? 'border-b border-zr-line bg-zr-bg/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="zr-container flex h-[72px] items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="rounded-sm no-underline"
            aria-label={`${siteConfig.brandName} - Inicio`}
          >
            <BrandMark />
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navigationConfig.links.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="nav-link"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {navigationConfig.ctaText && (
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="zr-btn-primary hidden !px-5 !py-2.5 !text-[13px] md:inline-flex"
              aria-label="Contactar con Zero R1sk"
            >
              {navigationConfig.ctaText}
            </a>
          )}

          {/* Botón menú móvil */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-md md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <div className="relative h-4 w-6">
              <span
                className="absolute left-0 block h-0.5 w-6 bg-white transition-all duration-300"
                style={{ top: mobileOpen ? 7 : 0, transform: mobileOpen ? 'rotate(45deg)' : 'none' }}
              />
              <span
                className="absolute left-0 top-[7px] block h-0.5 w-6 bg-zr-accent transition-opacity duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-0.5 w-6 bg-white transition-all duration-300"
                style={{ top: mobileOpen ? 7 : 14, transform: mobileOpen ? 'rotate(-45deg)' : 'none' }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-40 flex flex-col justify-center bg-zr-bg/[0.98] pt-[72px] backdrop-blur-lg transition-opacity duration-500 md:hidden"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="zr-container flex flex-col gap-2">
          {navigationConfig.links.map((link, i) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                tabIndex={mobileOpen ? 0 : -1}
                className={`flex items-baseline gap-4 border-b border-zr-line py-4 font-display text-3xl font-medium no-underline transition-colors ${
                  isActive ? 'text-white' : 'text-zr-muted'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="font-mono text-xs text-zr-accent">0{i + 1}</span>
                {link.label}
              </a>
            );
          })}
          {navigationConfig.ctaText && (
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              tabIndex={mobileOpen ? 0 : -1}
              className="zr-btn-primary mt-8"
            >
              {navigationConfig.ctaText}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
