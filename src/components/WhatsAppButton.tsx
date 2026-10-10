import WhatsAppIcon from './WhatsAppIcon';
import { contactConfig } from '../config';

export default function WhatsAppButton() {
  if (!contactConfig.whatsapp) return null;

  const href = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:-translate-y-1"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
