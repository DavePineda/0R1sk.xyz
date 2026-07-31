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

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
  secondaryCtaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Zero R1sk",
  subtitleLine1:
    "Consultoría en Ciberseguridad. Protegemos tu información y sistemas de las amenazas digitales.",
  subtitleLine2: "Tecnología de vanguardia con enfoque proactivo.",
  ctaText: "Conocer servicios",
  secondaryCtaText: "Hablar con un experto",
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
  description: string;
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
      fullName: "ISO/IEC 27001",
      description:
        "Gestionamos la seguridad de la información bajo un Sistema de Gestión de Seguridad de la Información (SGSI) certificado, garantizando confidencialidad, integridad y disponibilidad de tus datos.",
    },
    {
      name: "eJPT",
      fullName: "Junior Penetration Tester",
      description:
        "Contamos con certificación práctica en pruebas de intrusión que valida nuestras capacidades reales en reconocimiento, escaneo, enumeración y explotación controlada de vulnerabilidades.",
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
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Nosotros",
  videoPath: "/videos/cinematic-vision.mp4",
  title: "Acerca de Zero R1sk",
  description:
    "En Zero R1sk somos apasionados por proteger lo que más importa: la información y los activos digitales de nuestros clientes. Nuestro equipo de expertos combina tecnología de vanguardia con un profundo conocimiento del panorama de la ciberseguridad. Creemos en la proactividad sobre la reactividad, la educación, la adaptabilidad continua y la ética con enfoque personalizado.",
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Áreas de Expertise",
  projects: [
    {
      title: "Gestión de Riesgos",
      year: "2025",
      discipline: "Estrategia de Seguridad",
      image: "images/research-1.jpg",
    },
    {
      title: "Protección de Datos",
      year: "2025",
      discipline: "Cumplimiento Normativo",
      image: "images/research-3.jpg",
    },
    {
      title: "Análisis de Amenazas",
      year: "2025",
      discipline: "Inteligencia de Amenazas",
      image: "images/research-4.jpg",
    },
    {
      title: "Seguridad en la Nube",
      year: "2024",
      discipline: "Cloud Security",
      image: "images/capability-1.jpg",
    },
    {
      title: "Auditoría de Seguridad",
      year: "2024",
      discipline: "Evaluación de Controles",
      image: "images/capability-3.jpg",
    },
    {
      title: "Seguridad de Redes",
      year: "2023",
      discipline: "Infraestructura",
      image: "images/research-1.jpg",
    },
    {
      title: "Concienciación",
      year: "2023",
      discipline: "Formación y Capacitación",
      image: "images/research-2.jpg",
    },
    {
      title: "Pentesting",
      year: "2023",
      discipline: "Pruebas de Intrusión",
      image: "images/research-3.jpg",
    },
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
  heading: "Contáctenos",
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
