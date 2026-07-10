import type { Locale } from "./translations";
import type { SkillCategoryKey } from "./profile";

export type CvVariant = "mobile" | "fullstack";

/** Section headings for the CV, per locale. */
export const cvLabels: Record<
  Locale,
  {
    profile: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    additional: string;
    languages: string;
    present: string;
    variant: string;
    language: string;
    print: string;
    variantNames: Record<CvVariant, string>;
  }
> = {
  es: {
    profile: "Perfil",
    experience: "Experiencia Laboral",
    projects: "Proyectos",
    education: "Educación",
    skills: "Conocimientos Técnicos",
    additional: "Información Adicional",
    languages: "Idiomas",
    present: "Presente",
    variant: "Perfil",
    language: "Idioma",
    print: "Descargar PDF",
    variantNames: { mobile: "Mobile", fullstack: "Full-Stack" },
  },
  en: {
    profile: "Summary",
    experience: "Work Experience",
    projects: "Projects",
    education: "Education",
    skills: "Technical Skills",
    additional: "Additional Information",
    languages: "Languages",
    present: "Present",
    variant: "Profile",
    language: "Language",
    print: "Download PDF",
    variantNames: { mobile: "Mobile", fullstack: "Full-Stack" },
  },
};

/** Job title shown under the name, per variant + locale. */
export const cvRole: Record<CvVariant, Record<Locale, string>> = {
  mobile: {
    es: "Desarrollador Mobile & Full-Stack",
    en: "Mobile & Full-Stack Developer",
  },
  fullstack: {
    es: "Desarrollador Full-Stack & Mobile",
    en: "Full-Stack & Mobile Developer",
  },
};

/** Professional summary tuned per variant + locale. */
export const cvSummary: Record<CvVariant, Record<Locale, string>> = {
  mobile: {
    es: "Desarrollador de software con foco en aplicaciones móviles (Flutter, Kotlin) y experiencia full-stack (Angular, React, Node.js). Sólido en todo el ciclo de vida: arquitectura, consumo de APIs RESTful, persistencia offline, despliegue y mantenimiento. Enfocado en código limpio, escalable y en la mejora continua de la experiencia de usuario bajo metodologías ágiles.",
    en: "Software developer focused on mobile applications (Flutter, Kotlin) with full-stack experience (Angular, React, Node.js). Strong across the whole lifecycle: architecture, consuming RESTful APIs, offline persistence, deployment and maintenance. Focused on clean, scalable code and continuously improving the user experience through agile methodologies.",
  },
  fullstack: {
    es: "Desarrollador full-stack con experiencia en backend (Node.js, TypeScript, WebSockets, APIs REST) y frontend web y móvil (Angular, React, Flutter). He construido desde chatbots en tiempo real con integración de IA hasta plataformas con pasarelas de pago. Enfocado en código limpio, escalable y orientado a producción bajo metodologías ágiles.",
    en: "Full-stack developer with backend experience (Node.js, TypeScript, WebSockets, REST APIs) and web & mobile frontends (Angular, React, Flutter). I've built everything from real-time chatbots with AI integration to platforms with payment gateways. Focused on clean, scalable, production-oriented code under agile methodologies.",
  },
};

/** Order in which skill categories are listed, per variant. */
export const cvSkillOrder: Record<CvVariant, SkillCategoryKey[]> = {
  mobile: ["mobile", "web", "database", "devops", "agile"],
  fullstack: ["web", "mobile", "database", "devops", "agile"],
};

export const cvEducation: Record<
  Locale,
  { institution: string; degree: string; period: string }[]
> = {
  es: [
    {
      institution: "Instituto Universitario de Tecnología Venezuela (IUTV)",
      degree: "T.S.U. en Informática",
      period: "2018 — 2023",
    },
  ],
  en: [
    {
      institution: "Instituto Universitario de Tecnología Venezuela (IUTV)",
      degree: "Associate Degree in Computer Science",
      period: "2018 — 2023",
    },
  ],
};

export const cvLanguages: Record<Locale, string[]> = {
  es: ["Español (Nativo)", "Inglés (Intermedio, B1)"],
  en: ["Spanish (Native)", "English (Intermediate, B1)"],
};
