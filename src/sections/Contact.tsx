import { useState } from 'react';
import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/use-reveal';
import { contactConfig } from '../config';

interface ContactItem {
  icon: React.ReactNode;
  brand?: boolean;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

export default function Contact() {
  const reveal = useReveal<HTMLDivElement>({ stagger: 0.15 });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const whatsappUrl = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;

  const items: ContactItem[] = [
    { icon: <WhatsAppIcon size={19} />, brand: true, label: 'WhatsApp', value: contactConfig.phone, href: whatsappUrl, external: true },
    { icon: <Phone size={18} strokeWidth={1.75} aria-hidden="true" />, label: 'Teléfono', value: contactConfig.phone, href: `tel:${contactConfig.phone.replace(/\s/g, '')}` },
    { icon: <Mail size={18} strokeWidth={1.75} aria-hidden="true" />, label: 'Correo', value: contactConfig.email, href: `mailto:${contactConfig.email}` },
    { icon: <Clock size={18} strokeWidth={1.75} aria-hidden="true" />, label: 'Horario', value: contactConfig.schedule },
    { icon: <MapPin size={18} strokeWidth={1.75} aria-hidden="true" />, label: 'Ubicación', value: contactConfig.location },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Campo trampa: los humanos no lo ven, los bots lo rellenan
    const botcheck = new FormData(e.currentTarget).get('botcheck');
    if (botcheck) return;

    setStatus('sending');

    // FormData (no JSON) para que sea una petición "simple" sin preflight CORS
    const payload = new FormData();
    payload.append('access_key', contactConfig.web3formsKey);
    payload.append('subject', `Nueva consulta web de ${formData.name}`);
    payload.append('from_name', 'Formulario web Zero R1sk');
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('empresa', formData.company || 'No especificada');
    payload.append('message', formData.message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });
      const data: { success?: boolean } = await res.json();
      if (!res.ok || !data.success) throw new Error('Envío rechazado');

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
    }
  };

  const labelClass = 'font-mono text-[12px] uppercase tracking-[0.12em] text-zr-muted';

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="zr-section overflow-hidden border-t border-zr-line bg-zr-surface/40"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-zr-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="zr-container relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div ref={reveal(0)}>
          <SectionHeader
            id="contact-title"
            index="06"
            label={contactConfig.sectionLabel}
            title={contactConfig.title}
            description={contactConfig.description}
          />

          <ul className="-mt-4 flex flex-col gap-3">
            {items.map(({ icon, brand, label, value, href, external }) => {
              const content = (
                <>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                      brand ? 'border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366]' : 'border-zr-line bg-zr-bg text-zr-accent'
                    }`}
                  >
                    {icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-zr-muted">{label}</span>
                    <span className="text-[15px] text-zr-text">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 rounded-lg p-1 no-underline transition-colors hover:bg-white/[0.03]"
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-1">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div ref={reveal(1)}>
          <form
            onSubmit={handleSubmit}
            className="zr-card flex flex-col gap-5 bg-zr-bg/80 p-6 hover:!shadow-none md:p-9"
            aria-label="Formulario de contacto"
          >
            <div className="mb-1 flex items-center gap-2 font-mono text-[13px] text-zr-muted">
              <span className="text-zr-accent">$</span> nueva-solicitud --confidencial
            </div>

            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className={labelClass}>
                  {contactConfig.formLabels.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="zr-input"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className={labelClass}>
                  {contactConfig.formLabels.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="zr-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-company" className={labelClass}>
                {contactConfig.formLabels.company}
              </label>
              <input
                id="contact-company"
                type="text"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                className="zr-input"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className={labelClass}>
                {contactConfig.formLabels.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="zr-input resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="zr-btn-primary mt-2 self-start"
            >
              {status === 'sending'
                ? contactConfig.formLabels.sending
                : status === 'success'
                ? '✓ Enviado'
                : contactConfig.formLabels.submit}
              {status === 'idle' && <ArrowRight size={16} aria-hidden="true" />}
            </button>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="text-sm text-zr-accent">{contactConfig.formLabels.success}</p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-sm text-zr-danger">
                  {contactConfig.formLabels.error}{' '}
                  <a href={`mailto:${contactConfig.email}`} className="underline">
                    {contactConfig.email}
                  </a>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
