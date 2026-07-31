import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { contactConfig } from '../config';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    const elements = [formRef.current, infoRef.current].filter(Boolean) as HTMLElement[];
    const observers: IntersectionObserver[] = [];

    elements.forEach((el, index) => {
      gsap.set(el, { opacity: 0, y: 40 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                delay: index * 0.15,
                ease: 'power3.out',
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    const subject = encodeURIComponent(`Consulta de ${formData.name} - Zero R1sk`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\nEmpresa: ${formData.company || 'No especificada'}\n\nMensaje:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 600);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
      style={{
        padding: '150px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {contactConfig.sectionLabel && (
          <div
            className="mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.6,
            }}
          >
            {contactConfig.sectionLabel}
          </div>
        )}
        <div
          className="mb-16"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80 }}>
          <div ref={infoRef}>
            <h2
              id="contact-title"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontWeight: 400,
                fontSize: 'clamp(32px, 4vw, 64px)',
                lineHeight: 1.15,
                letterSpacing: '-1px',
                color: '#ffffff',
                margin: '0 0 24px 0',
                textWrap: 'balance',
              }}
            >
              {contactConfig.title}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 200,
                fontSize: 17,
                lineHeight: 1.85,
                color: '#dadada',
                margin: '0 0 48px 0',
                maxWidth: 480,
                textWrap: 'pretty',
              }}
            >
              {contactConfig.description}
            </p>

            <div className="flex flex-col" style={{ gap: 20 }}>
              <a
                href={`tel:${contactConfig.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 text-white no-underline group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm"
                style={{ width: 'fit-content' }}
              >
                <Phone size={18} className="text-[rgba(200,170,130,1)]" aria-hidden="true" />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 200,
                    color: '#dadada',
                    transition: 'color 0.3s ease',
                  }}
                  className="group-hover:text-white"
                >
                  {contactConfig.phone}
                </span>
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                className="flex items-center gap-4 text-white no-underline group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm"
                style={{ width: 'fit-content' }}
              >
                <Mail size={18} className="text-[rgba(200,170,130,1)]" aria-hidden="true" />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 200,
                    color: '#dadada',
                    transition: 'color 0.3s ease',
                  }}
                  className="group-hover:text-white"
                >
                  {contactConfig.email}
                </span>
              </a>
              <div
                className="flex items-center gap-4"
                style={{ width: 'fit-content' }}
              >
                <MapPin size={18} className="text-[rgba(200,170,130,1)]" aria-hidden="true" />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 200,
                    color: '#dadada',
                  }}
                >
                  {contactConfig.location}
                </span>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col"
            style={{ gap: 24 }}
            aria-label="Formulario de contacto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 24 }}>
              <div className="flex flex-col" style={{ gap: 8 }}>
                <label
                  htmlFor="contact-name"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 300,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#dadada',
                    opacity: 0.7,
                  }}
                >
                  {contactConfig.formLabels.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[rgba(200,170,130,0.6)] transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 200,
                  }}
                />
              </div>
              <div className="flex flex-col" style={{ gap: 8 }}>
                <label
                  htmlFor="contact-email"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 300,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#dadada',
                    opacity: 0.7,
                  }}
                >
                  {contactConfig.formLabels.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[rgba(200,170,130,0.6)] transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 200,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col" style={{ gap: 8 }}>
              <label
                htmlFor="contact-company"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 300,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#dadada',
                  opacity: 0.7,
                }}
              >
                {contactConfig.formLabels.company}
              </label>
              <input
                id="contact-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[rgba(200,170,130,0.6)] transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 200,
                }}
              />
            </div>

            <div className="flex flex-col" style={{ gap: 8 }}>
              <label
                htmlFor="contact-message"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 300,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#dadada',
                  opacity: 0.7,
                }}
              >
                {contactConfig.formLabels.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[rgba(200,170,130,0.6)] transition-colors resize-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 200,
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="self-start text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 14,
                fontWeight: 300,
                letterSpacing: '0.5px',
                padding: '16px 40px',
                borderRadius: 999,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                if (status === 'sending' || status === 'success') return;
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {status === 'sending'
                ? contactConfig.formLabels.sending
                : status === 'success'
                ? contactConfig.formLabels.success
                : contactConfig.formLabels.submit}
            </button>

            {status === 'error' && (
              <p
                role="alert"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: '#ff9999',
                }}
              >
                {contactConfig.formLabels.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
