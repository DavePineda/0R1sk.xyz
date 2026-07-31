import { useEffect, useState } from 'react';
import { siteConfig, navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!siteConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navegación principal"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-colors duration-500"
        style={{
          height: 80,
          padding: '0 5vw',
          backgroundColor: scrolled || mobileOpen ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
          backdropFilter: scrolled || mobileOpen ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        }}
      >
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="text-white no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm"
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: '-0.5px',
          }}
          aria-label={`${siteConfig.brandName} - Inicio`}
        >
          {siteConfig.brandName}
        </a>

        <div className="hidden md:flex items-center" style={{ gap: 40 }}>
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

        <div className="hidden md:flex items-center" style={{ gap: 40 }}>
          {navigationConfig.ctaText && (
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="nav-link"
              aria-label="Contactar con Zero R1sk"
            >
              {navigationConfig.ctaText}
            </a>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden relative w-10 h-10 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 rounded-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="sr-only">Menú</span>
          <div className="flex flex-col justify-center items-center w-6 h-5 relative">
            <span
              className="block absolute h-0.5 bg-white transition-all duration-300 ease-out"
              style={{
                width: 24,
                top: mobileOpen ? '50%' : 0,
                transform: mobileOpen ? 'translateY(-50%) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block absolute h-0.5 bg-white transition-all duration-300 ease-out"
              style={{
                width: 24,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block absolute h-0.5 bg-white transition-all duration-300 ease-out"
              style={{
                width: 24,
                bottom: mobileOpen ? '50%' : 0,
                transform: mobileOpen ? 'translateY(50%) rotate(-45deg)' : 'none',
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className="md:hidden fixed inset-0 z-40 flex flex-col justify-center transition-opacity duration-500"
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.98)',
          backdropFilter: 'blur(12px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          paddingTop: 80,
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col items-center" style={{ gap: 32 }}>
          {navigationConfig.links.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-white no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm"
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 24,
                  fontWeight: 300,
                  letterSpacing: '-0.5px',
                  opacity: isActive ? 1 : 0.6,
                  transition: 'opacity 0.3s ease',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}
          {navigationConfig.ctaText && (
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="mt-8 text-white no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm"
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 18,
                fontWeight: 300,
                letterSpacing: '0.5px',
                padding: '14px 32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 999,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {navigationConfig.ctaText}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
