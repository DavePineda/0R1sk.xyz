// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
  tagline: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  language: "es",
  brandName: "Zero R1sk",
  tagline: "Consultoría en Ciberseguridad - Protegemos tu información y sistemas de las amenazas digitales.",
  url: "https://0r1sk.xyz",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#curriculum" },
    { label: "Metodología", href: "#methodology" },
    { label: "Nosotros", href: "#cinematic" },
    { label: "Contacto", href: "#contact" },
  ],
  ctaText: "Contactar",
};

// ============================================================
// Hero
// ============================================================

export interface HeroStat {
  value: string;
  label: string;
}

export interface TerminalLine {
  kind: "cmd" | "ok" | "warn" | "info" | "done";
  text: string;
}

export interface HeroConfig {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaText: string;
  secondaryCtaText: string;
  stats: HeroStat[];
  backgroundImage: string;
  terminalTitle: string;
  terminalLines: TerminalLine[];
}

export const heroConfig: HeroConfig = {
  eyebrow: "Pentesting · Evaluación de vulnerabilidades · Consultoría",
  title: "Encontramos tus vulnerabilidades",
  titleHighlight: "antes que los atacantes.",
  subtitle:
    "Consultoría en ciberseguridad con enfoque ofensivo. Simulamos ataques reales sobre tu infraestructura y te entregamos un plan claro y priorizado para cerrar cada brecha.",
  ctaText: "Solicitar evaluación",
  secondaryCtaText: "Ver servicios",
  stats: [
    { value: "2020", label: "Protegiendo empresas desde" },
    { value: "OWASP · NIST · PTES", label: "Metodologías aplicadas" },
    { value: "ISO 27001 · eJPT · FCA", label: "Credenciales del equipo" },
    { value: "< 24 h", label: "Tiempo de respuesta" },
  ],
  backgroundImage: "images/research-1.jpg",
  terminalTitle: "zr@pentest: ~/engagement",
  terminalLines: [
    { kind: "cmd", text: "zr-audit --objetivo empresa.co --alcance autorizado" },
    { kind: "info", text: "Reconocimiento pasivo (OSINT, DNS, subdominios)" },
    { kind: "ok", text: "42 activos expuestos identificados" },
    { kind: "info", text: "Escaneo y enumeración de servicios" },
    { kind: "warn", text: "3 servicios con configuración insegura" },
    { kind: "warn", text: "1 vulnerabilidad crítica · CVSS 9.8" },
    { kind: "done", text: "Informe priorizado y plan de remediación listo" },
  ],
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  title: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "Servicios",
  title: "Soluciones de seguridad adaptadas a tu infraestructura",
  items: [
    {
      title: "Reconocimiento",
      slug: "reconocimiento",
      description:
        "Análisis profundo y no intrusivo de tu entorno. Mapeamos tu infraestructura para detectar posibles puntos débiles sin interrumpir tu operación. Utilizamos técnicas avanzadas para recopilar información crítica sobre tu red, servidores y sistemas, garantizando una visión clara de las áreas que requieren atención.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Escaneo y Enumeración",
      slug: "escaneo-enumeracion",
      description:
        "Identificación exhaustiva de puertos y servicios vulnerables. Escaneo minucioso con herramientas avanzadas para obtener una visión precisa de las superficies de ataque y sus puntos críticos, permitiéndote reforzar las áreas que minimizan los riesgos de seguridad.",
      image: "images/capability-2.jpg",
    },
    {
      title: "Evaluación de Vulnerabilidades",
      slug: "evaluacion-vulnerabilidades",
      description:
        "Análisis detallado y priorización de amenazas. No solo identificamos las debilidades, sino que las clasificamos y priorizamos en función de su nivel de riesgo, entregando un informe claro con recomendaciones accionables para fortalecer tu infraestructura.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Consultoría Integral",
      slug: "consultoria-integral",
      description:
        "Estrategias personalizadas de ciberseguridad end-to-end. Desde la gestión de riesgos hasta la respuesta a incidentes, fortalecemos tu defensa con soluciones innovadoras que se adaptan a un entorno tecnológico en constante evolución.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Servicio",
  backLinkText: "Volver al inicio",
  prevLabel: "Anterior",
  nextLabel: "Siguiente",
  notFoundText: "Servicio no encontrado.",
  capabilities: {
    reconocimiento: {
      title: "Reconocimiento",
      subtitle: "Análisis Profundo y No Intrusivo de tu Entorno",
      paragraphs: [
        "En Zero R1sk iniciamos el proceso con un análisis exhaustivo y discreto de tu infraestructura, utilizando técnicas avanzadas para recopilar información crítica sobre tu red, servidores y sistemas, sin generar ninguna interrupción en su funcionamiento.",
        "Esta fase nos permite mapear y comprender la estructura de tu entorno, detectando posibles puntos débiles o vulnerabilidades que podrían ser aprovechados por un atacante. Así, garantizamos una visión clara de las áreas que requieren atención para fortalecer la seguridad global de tu infraestructura.",
        "Nuestro enfoque proactivo asegura que identifiquemos riesgos antes de que se conviertan en incidentes, permitiéndote tomar decisiones informadas sobre la protección de tus activos digitales.",
      ],
    },
    "escaneo-enumeracion": {
      title: "Escaneo y Enumeración",
      subtitle: "Identificación Exhaustiva de Puertos y Servicios Vulnerables",
      paragraphs: [
        "Llevamos a cabo un escaneo minucioso de tu red para identificar todos los puertos abiertos, servicios activos y configuraciones expuestas. Utilizamos herramientas avanzadas y especializadas para detectar posibles vulnerabilidades.",
        "Este proceso nos permite obtener una visión precisa de las superficies de ataque y sus puntos críticos. Este proceso nos proporciona una evaluación clara de las áreas que deben ser reforzadas para minimizar los riesgos de seguridad.",
        "Cada resultado es analizado por nuestros expertos para proporcionarte un informe detallado con recomendaciones accionables y priorizadas según el nivel de riesgo.",
      ],
    },
    "evaluacion-vulnerabilidades": {
      title: "Evaluación de Vulnerabilidades",
      subtitle: "Análisis Detallado y Priorización de Amenazas",
      paragraphs: [
        "Una vez recopilada la información, realizamos un análisis exhaustivo de las vulnerabilidades en tu sistema. No solo identificamos las debilidades, sino que las clasificamos y priorizamos en función de su nivel de riesgo.",
        "Te entregamos un informe claro y detallado, permitiéndote focalizar los esfuerzos en las áreas más críticas y tomar medidas correctivas de manera eficiente para fortalecer la seguridad de tu infraestructura.",
        "Nuestro equipo se mantiene actualizado con las últimas amenazas del panorama de la ciberseguridad para garantizar que tu organización esté protegida contra las técnicas de ataque más recientes.",
      ],
    },
    "consultoria-integral": {
      title: "Consultoría Integral",
      subtitle: "Estrategias End-to-End de Ciberseguridad",
      paragraphs: [
        "En Zero R1sk ofrecemos soluciones de ciberseguridad integrales que abarcan desde la gestión de riesgos hasta la respuesta a incidentes. Nuestro equipo de expertos trabaja incansablemente para identificar vulnerabilidades y proporcionar estrategias personalizadas.",
        "Fundada en el año 2020, nuestra misión es ofrecer soluciones innovadoras y efectivas que se adapten a un entorno tecnológico en constante evolución. Combinamos tecnología de vanguardia con un profundo conocimiento del panorama de la ciberseguridad.",
        "Creemos que la ciberseguridad no solo se trata de tecnología, sino también de educación y concientización. Por eso, nos esforzamos por capacitar a nuestros clientes, brindándoles las herramientas y conocimientos necesarios.",
      ],
    },
  },
};

// ============================================================
// Methodology
// ============================================================

export interface MethodologyItem {
  acronym: string;
  name: string;
  description: string;
}

export interface MethodologyConfig {
  sectionLabel: string;
  title: string;
  description: string;
  items: MethodologyItem[];
}

export const methodologyConfig: MethodologyConfig = {
  sectionLabel: "Metodología",
  title: "Frameworks reconocidos internacionalmente",
  description:
    "Aplicamos estándares y metodologías líderes en la industria para garantizar evaluaciones rigurosas, reproducibles y alineadas con las mejores prácticas globales de ciberseguridad.",
  items: [
    {
      acronym: "OWASP",
      name: "Open Web Application Security Project",
      description:
        "Evaluamos la seguridad de aplicaciones web y APIs siguiendo el Top 10 de OWASP, identificando vulnerabilidades como inyecciones, autenticación deficiente, exposición de datos y configuraciones incorrectas.",
    },
    {
      acronym: "NIST",
      name: "National Institute of Standards and Technology",
      description:
        "Nos alineamos con el Marco de Ciberseguridad del NIST para identificar, proteger, detectar, responder y recuperar activos críticos, asegurando una gestión integral del riesgo.",
    },
    {
      acronym: "PTES",
      name: "Penetration Testing Execution Standard",
      description:
        "Ejecutamos pruebas de intrusión estructuradas en sus siete fases: pre-interacción, recopilación de inteligencia, modelado de amenazas, análisis de vulnerabilidades, explotación, post-explotación e informe.",
    },
  ],
};

// ============================================================
// Certifications
// ============================================================

export interface CertificationItem {
  name: string;
  fullName: string;
  issuer: string;
  description: string;
  verifyUrl?: string;
  verifyNote?: string;
}

export interface CertificationsConfig {
  sectionLabel: string;
  title: string;
  items: CertificationItem[];
}

export const certificationsConfig: CertificationsConfig = {
  sectionLabel: "Certificaciones",
  title: "Compromiso validado con la excelencia",
  items: [
    {
      name: "ISO 27001",
      fullName: "Auditor Interno ISO/IEC 27001",
      issuer: "Cualicontrol-ACI · TÜV NORD Group",
      description:
        "Formación certificada como auditor interno de Sistemas de Gestión de Seguridad de la Información (SGSI): contexto y liderazgo, planificación y gestión de riesgos, controles de seguridad, evaluación del desempeño y mejora continua.",
      verifyNote: "Verificable bajo solicitud",
    },
    {
      name: "eJPT",
      fullName: "Junior Penetration Tester",
      issuer: "INE Security",
      description:
        "Contamos con certificación práctica en pruebas de intrusión que valida nuestras capacidades reales en reconocimiento, escaneo, enumeración y explotación controlada de vulnerabilidades.",
      verifyUrl: "https://certs.ine.com/1057e728-490d-46b8-b29a-d8ede2bbb3fa",
    },
    {
      name: "FCA",
      fullName: "Fortinet Certified Associate in Cybersecurity",
      issuer: "Fortinet",
      description:
        "Certificación de Fortinet (antes NSE 3) que valida nuestro dominio de los fundamentos de ciberseguridad: panorama de amenazas, seguridad de red, firewalls, protección de endpoints y seguridad en la nube.",
      verifyUrl: "https://www.credly.com/badges/a8e3c28b-b3e9-4d1c-9d02-6b73ce769e92",
    },
  ],
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
  values: string[];
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Nosotros",
  videoPath: "/videos/cinematic-vision.mp4",
  title: "Acerca de Zero R1sk",
  description:
    "En Zero R1sk somos apasionados por proteger lo que más importa: la información y los activos digitales de nuestros clientes. Nuestro equipo de expertos combina tecnología de vanguardia con un profundo conocimiento del panorama de la ciberseguridad. Creemos en la proactividad sobre la reactividad, la educación, la adaptabilidad continua y la ética con enfoque personalizado.",
  values: ["Proactividad sobre reactividad", "Educación y concientización", "Adaptabilidad continua", "Ética y enfoque personalizado"],
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  title: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Áreas de Expertise",
  title: "Cobertura completa de tu superficie de ataque",
  projects: [
    { title: "Pentesting", discipline: "Pruebas de intrusión", image: "images/research-6.jpg" },
    { title: "Análisis de Amenazas", discipline: "Inteligencia de amenazas", image: "images/research-4.jpg" },
    { title: "Seguridad de Redes", discipline: "Infraestructura", image: "images/research-1.jpg" },
    { title: "Seguridad en la Nube", discipline: "Cloud security", image: "images/capability-1.jpg" },
    { title: "Auditoría de Seguridad", discipline: "Evaluación de controles", image: "images/capability-3.jpg" },
    { title: "Protección de Datos", discipline: "Cumplimiento normativo", image: "images/research-3.jpg" },
    { title: "Concienciación", discipline: "Formación y capacitación", image: "images/research-2.jpg" },
    { title: "Gestión de Riesgos", discipline: "Estrategia de seguridad", image: "images/research-5.jpg" },
  ],
};

// ============================================================
// Contact
// ============================================================

export interface ContactConfig {
  sectionLabel: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  web3formsKey: string;
  email: string;
  schedule: string;
  location: string;
  formLabels: {
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}

export const contactConfig: ContactConfig = {
  sectionLabel: "Contacto",
  title: "Hablemos de seguridad",
  description:
    "Cuéntanos sobre tu empresa o infraestructura. Nuestro equipo analizará tu caso y te contactará en menos de 24 horas.",
  phone: "+57 300 436 97 73",
  whatsapp: "573004369773",
  whatsappMessage: "Hola Zero R1sk, quiero información sobre una evaluación de seguridad.",
  // Access key de https://web3forms.com (es pública: está pensada para ir en el frontend)
  web3formsKey: "1664d893-8182-45f8-98cf-3e7f0c5d15d9",
  email: "david.garcia@0r1sk.xyz",
  schedule: "Lunes a Viernes 07:00-18:00",
  location: "Cali, Colombia",
  formLabels: {
    name: "Nombre completo",
    email: "Correo electrónico",
    company: "Empresa",
    message: "¿En qué podemos ayudarte?",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado. Te contactaremos pronto.",
    error: "Ocurrió un error. Inténtalo de nuevo o escríbenos directamente.",
  },
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "¿Listo para poner a prueba tu seguridad?",
  columns: [
    {
      title: "Servicios",
      links: [
        { label: "Reconocimiento", href: "/capability/reconocimiento" },
        { label: "Escaneo y Enumeración", href: "/capability/escaneo-enumeracion" },
        { label: "Evaluación de Vulnerabilidades", href: "/capability/evaluacion-vulnerabilidades" },
        { label: "Consultoría Integral", href: "/capability/consultoria-integral" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "Tel: +57 300 436 97 73", href: "tel:+573004369773" },
        { label: "Lunes a Viernes 07:00-18:00", href: "#contact" },
        { label: "Cali, Colombia", href: "#contact" },
      ],
    },
  ],
  copyright: "Copyright Zero R1sk Co. | Diseño: Zero R1sk",
  bottomLinks: [
    { label: "Youtube", href: "https://www.youtube.com/@0R1sk" },
    { label: "Twitter", href: "https://x.com/Resilienciax100" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/davidjuliangarcia" },
  ],
};
