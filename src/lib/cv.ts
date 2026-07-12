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
    photo: string;
    photoOn: string;
    photoOff: string;
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
    photo: "Foto",
    photoOn: "Con foto",
    photoOff: "Sin foto",
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
    photo: "Photo",
    photoOn: "With photo",
    photoOff: "No photo",
    print: "Download PDF",
    variantNames: { mobile: "Mobile", fullstack: "Full-Stack" },
  },
  pt: {
    profile: "Resumo",
    experience: "Experiência Profissional",
    projects: "Projetos",
    education: "Formação",
    skills: "Habilidades Técnicas",
    additional: "Informações Adicionais",
    languages: "Idiomas",
    present: "Presente",
    variant: "Perfil",
    language: "Idioma",
    photo: "Foto",
    photoOn: "Com foto",
    photoOff: "Sem foto",
    print: "Baixar PDF",
    variantNames: { mobile: "Mobile", fullstack: "Full-Stack" },
  },
};

/** Job title shown under the name, per variant + locale. */
export const cvRole: Record<CvVariant, Record<Locale, string>> = {
  mobile: {
    es: "Desarrollador Mobile & Full-Stack",
    en: "Mobile & Full-Stack Developer",
    pt: "Desenvolvedor Mobile & Full-Stack",
  },
  fullstack: {
    es: "Desarrollador Full-Stack & Mobile",
    en: "Full-Stack & Mobile Developer",
    pt: "Desenvolvedor Full-Stack & Mobile",
  },
};

/** Professional summary tuned per variant + locale. */
export const cvSummary: Record<CvVariant, Record<Locale, string>> = {
  mobile: {
    es: "Desarrollador de software con foco en aplicaciones móviles (Flutter, Kotlin) y experiencia full-stack (Angular, React, Node.js). Sólido en todo el ciclo de vida: arquitectura, consumo de APIs RESTful, persistencia offline, despliegue y mantenimiento. Enfocado en código limpio, escalable y en la mejora continua de la experiencia de usuario bajo metodologías ágiles.",
    en: "Software developer focused on mobile applications (Flutter, Kotlin) with full-stack experience (Angular, React, Node.js). Strong across the whole lifecycle: architecture, consuming RESTful APIs, offline persistence, deployment and maintenance. Focused on clean, scalable code and continuously improving the user experience through agile methodologies.",
    pt: "Desenvolvedor de software com foco em aplicativos mobile (Flutter, Kotlin) e experiência full-stack (Angular, React, Node.js). Sólido em todo o ciclo de vida: arquitetura, consumo de APIs RESTful, persistência offline, deploy e manutenção. Focado em código limpo, escalável e na melhoria contínua da experiência do usuário sob metodologias ágeis.",
  },
  fullstack: {
    es: "Desarrollador full-stack con experiencia en backend (Node.js, TypeScript, WebSockets, APIs REST) y frontend web y móvil (Angular, React, Flutter). He construido desde chatbots en tiempo real con integración de IA hasta plataformas con pasarelas de pago. Enfocado en código limpio, escalable y orientado a producción bajo metodologías ágiles.",
    en: "Full-stack developer with backend experience (Node.js, TypeScript, WebSockets, REST APIs) and web & mobile frontends (Angular, React, Flutter). I've built everything from real-time chatbots with AI integration to platforms with payment gateways. Focused on clean, scalable, production-oriented code under agile methodologies.",
    pt: "Desenvolvedor full-stack com experiência em backend (Node.js, TypeScript, WebSockets, APIs REST) e frontend web e mobile (Angular, React, Flutter). Já construí desde chatbots em tempo real com integração de IA até plataformas com gateways de pagamento. Focado em código limpo, escalável e orientado a produção sob metodologias ágeis.",
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
  pt: [
    {
      institution: "Instituto Universitario de Tecnología Venezuela (IUTV)",
      degree: "Tecnólogo em Informática",
      period: "2018 — 2023",
    },
  ],
};

export const cvLanguages: Record<Locale, string[]> = {
  es: ["Español (Nativo)", "Inglés (Intermedio, B1)"],
  en: ["Spanish (Native)", "English (Intermediate, B1)"],
  pt: ["Espanhol (Nativo)", "Inglês (Intermediário, B1)"],
};
