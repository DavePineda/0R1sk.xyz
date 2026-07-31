import { Link } from 'react-router-dom';
import { footerConfig } from '../config';

export default function Footer() {
  if (!footerConfig.heading && footerConfig.columns.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      id="footer"
      style={{
        padding: '120px 5vw 60px',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {footerConfig.heading && (
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="block text-white no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm"
            style={{ width: 'fit-content', marginBottom: 80 }}
            aria-label="Ir al formulario de contacto"
          >
            <h2
              style={{
                fontFamily: "'EB Garamond', serif",
                fontWeight: 400,
                fontSize: 'clamp(40px, 5vw, 80px)',
                lineHeight: 1.1,
                letterSpacing: '-1.44px',
                color: '#ffffff',
                margin: 0,
                transition: 'color 0.4s ease',
              }}
              className="hover:text-[rgba(200,170,130,1)]"
            >
              {footerConfig.heading}
            </h2>
          </a>
        )}

        {footerConfig.columns.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: 60, marginBottom: 120 }}
          >
            {footerConfig.columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col" style={{ gap: 16 }}>
                {column.title && (
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      fontWeight: 300,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: '#dadada',
                      opacity: 0.6,
                      marginBottom: 8,
                    }}
                  >
                    {column.title}
                  </span>
                )}
                {column.links.map((link) => (
                  link.href.startsWith('/') ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="nav-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm"
                      style={{ width: 'fit-content' }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="nav-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm"
                      style={{ width: 'fit-content' }}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>
            ))}
          </div>
        )}

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between"
          style={{
            paddingTop: 24,
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            gap: 16,
          }}
        >
          {footerConfig.copyright && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 200,
                fontSize: 12,
                color: '#dadada',
                opacity: 0.7,
              }}
            >
              {footerConfig.copyright}
            </span>
          )}
          {footerConfig.bottomLinks.length > 0 && (
            <div className="flex items-center" style={{ gap: 24 }}>
              {footerConfig.bottomLinks.map((bottomLink) => (
                <a
                  key={bottomLink.label}
                  href={bottomLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: 12,
                    color: '#dadada',
                    opacity: 0.7,
                    textDecoration: 'none',
                    transition: 'opacity 0.3s',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = '1'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = '0.7'; }}
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
