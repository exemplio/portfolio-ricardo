export type Locale = "es" | "en";

export type Translation = {
  nav: {
    home: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    available: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      mobile: string;
      web: string;
      database: string;
      devops: string;
      agile: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    items: {
      role: string;
      company: string;
      period: string;
      bullets: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    sourceCode: string;
    inProgress: string;
    items: {
      title: string;
      description: string;
      tags: string[];
      period: string;
      status: "active" | "completed";
    }[];
  };
  footer: {
    rights: string;
    builtWith: string;
  };
};

export const translations: Record<Locale, Translation> = {
  es: {
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Mobile & Web",
      description:
        "Desarrollador de software especializado en aplicaciones móviles y web. Cuento con experiencia sólida en todo el ciclo de vida del desarrollo, desde la arquitectura y el consumo de APIs RESTful hasta el despliegue y mantenimiento. Enfocado en código limpio, escalable y en la mejora continua de la experiencia de usuario bajo metodologías ágiles.",
      ctaPrimary: "Contáctame",
      ctaSecondary: "Ver proyectos",
      available: "Disponible para nuevos proyectos",
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle:
        "Tecnologías y herramientas con las que construyo soluciones end-to-end.",
      categories: {
        mobile: "Mobile",
        web: "Web & Backend",
        database: "Bases de Datos",
        devops: "DevOps & Colaboración",
        agile: "Metodologías Ágiles",
      },
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle:
        "Construyendo productos reales: desde chats en tiempo real hasta plataformas con pasarelas de pago.",
      present: "Presente",
      items: [
        {
          role: "Desarrollador Flutter",
          company: "Soluciones Epale Chat",
          period: "Oct 2025 — Presente",
          bullets: [
            "Lidero la construcción de un sistema de chat en tiempo real con Flutter, optimizando la latencia y la experiencia de mensajería instantánea.",
            "Diseño la integración con APIs RESTful en el backend y gestiono la persistencia de datos local (cache y funcionalidad offline) implementando SQLite.",
            "Gestiono el control de versiones en GitHub/GitLab, asegurando la entrega continua (CI/CD) y la calidad del código mediante revisiones por pares bajo metodologías ágiles.",
          ],
        },
        {
          role: "Desarrollador Backend (Freelance)",
          company: "Proyectos Independientes",
          period: "2026",
          bullets: [
            "Desarrollé un chatbot de ventas en tiempo real sobre WebSockets, integrando IA (Claude de Anthropic) para interpretar la intención del cliente, con memoria conversacional (Zep) e integración con WhatsApp.",
            "Construí un bot de WhatsApp de atención automática por FAQs con panel de administración web, base de datos SQLite y despliegue con Docker en Railway.",
            "Implementé el backend en Node.js + TypeScript con APIs REST, alertas por correo y una arquitectura orientada a producción.",
          ],
        },
        {
          role: "Desarrollador Frontend",
          company: "Servicios Paguetodo",
          period: "Mayo 2023 — Oct 2025",
          bullets: [
            "Desarrollé y mantuve interfaces de usuario escalables en Flutter, mejorando significativamente la usabilidad y experiencia del usuario móvil.",
            "Construí módulos y paneles administrativos web con Angular, asegurando coherencia visual entre plataformas.",
            "Implementé pasarelas de pago seguras, optimizando el flujo de transacciones dentro de la aplicación.",
            "Administré repositorios en GitLab, gestionando ramas y aprobando Pull Requests en un entorno colaborativo.",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle:
        "Una selección de productos en los que he participado o estoy construyendo actualmente.",
      viewProject: "Ver proyecto",
      sourceCode: "Código",
      inProgress: "En desarrollo",
      items: [
        {
          title: "Epale Chat",
          description:
            "App de mensajería en tiempo real construida con Flutter. Latencia optimizada, soporte offline con SQLite y arquitectura escalable conectada a APIs RESTful.",
          tags: ["Flutter", "Dart", "SQLite", "REST API", "CI/CD"],
          period: "2025",
          status: "active",
        },
        {
          title: "Plataforma Paguetodo",
          description:
            "App móvil en Flutter y paneles administrativos en Angular con integración de pasarelas de pago seguras y flujo de transacciones optimizado.",
          tags: ["Flutter", "Angular", "Pasarelas de pago", "GitLab"],
          period: "2023 — 2025",
          status: "completed",
        },
        {
          title: "Chatbot de Ventas con IA",
          description:
            "Chatbot de ventas en tiempo real sobre WebSockets, potenciado con IA (Claude de Anthropic) para entender la intención del cliente. Memoria conversacional con Zep, gestión de catálogo y carrito, e integración con WhatsApp. Backend en Node.js + TypeScript. Proyecto freelance.",
          tags: ["Node.js", "TypeScript", "WebSockets", "Claude AI", "WhatsApp"],
          period: "2026",
          status: "completed",
        },
        {
          title: "WhatsApp FAQ Bot — Aural",
          description:
            "Bot de WhatsApp para atención automática por preguntas frecuentes, con panel de administración web y base de datos SQLite. Conexión directa vía Baileys, alertas por email y despliegue con Docker en Railway. Freelance para Aural Venezuela.",
          tags: ["Node.js", "TypeScript", "WhatsApp", "SQLite", "Docker"],
          period: "2026",
          status: "completed",
        },
      ],
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Next.js y Tailwind CSS.",
    },
  },
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Mobile & Web Developer",
      description:
        "Software developer specialized in mobile and web applications. I bring solid experience across the full development lifecycle — from architecture and consuming RESTful APIs to deployment and maintenance. Focused on clean, scalable code and continuously improving the user experience through agile methodologies.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View projects",
      available: "Available for new projects",
    },
    skills: {
      title: "Technical Skills",
      subtitle: "The technologies and tools I use to build end-to-end solutions.",
      categories: {
        mobile: "Mobile",
        web: "Web & Backend",
        database: "Databases",
        devops: "DevOps & Collaboration",
        agile: "Agile Methodologies",
      },
    },
    experience: {
      title: "Work Experience",
      subtitle:
        "Shipping real products: from real-time chat platforms to apps with secure payment gateways.",
      present: "Present",
      items: [
        {
          role: "Flutter Developer",
          company: "Soluciones Epale Chat",
          period: "Oct 2025 — Present",
          bullets: [
            "Leading the development of a real-time chat system in Flutter, optimizing latency and the instant-messaging experience.",
            "Designing the integration with backend RESTful APIs and managing local data persistence (cache and offline functionality) with SQLite.",
            "Owning version control on GitHub/GitLab, enforcing CI/CD and code quality through peer reviews under agile methodologies.",
          ],
        },
        {
          role: "Backend Developer (Freelance)",
          company: "Independent Projects",
          period: "2026",
          bullets: [
            "Built a real-time sales chatbot over WebSockets, integrating AI (Anthropic's Claude) to interpret customer intent, with conversational memory (Zep) and WhatsApp integration.",
            "Developed an automated WhatsApp FAQ bot with a web admin panel, SQLite database, and Docker deployment on Railway.",
            "Implemented the backend in Node.js + TypeScript with REST APIs, email alerts, and a production-oriented architecture.",
          ],
        },
        {
          role: "Frontend Developer",
          company: "Servicios Paguetodo",
          period: "May 2023 — Oct 2025",
          bullets: [
            "Built and maintained scalable Flutter UIs, significantly improving mobile usability and user experience.",
            "Built admin modules and web panels with Angular, ensuring visual consistency across platforms.",
            "Implemented secure payment gateways, optimizing the in-app transaction flow.",
            "Managed GitLab repositories, handling branches and approving Pull Requests in a collaborative environment.",
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "A selection of products I've contributed to or am currently building.",
      viewProject: "View project",
      sourceCode: "Source",
      inProgress: "In progress",
      items: [
        {
          title: "Epale Chat",
          description:
            "Real-time messaging app built with Flutter. Optimized latency, offline support with SQLite, and a scalable architecture connected to RESTful APIs.",
          tags: ["Flutter", "Dart", "SQLite", "REST API", "CI/CD"],
          period: "2025",
          status: "active",
        },
        {
          title: "Paguetodo Platform",
          description:
            "Flutter mobile app and Angular admin panels integrating secure payment gateways and an optimized transaction flow.",
          tags: ["Flutter", "Angular", "Payment gateways", "GitLab"],
          period: "2023 — 2025",
          status: "completed",
        },
        {
          title: "AI Sales Chatbot",
          description:
            "Real-time sales chatbot over WebSockets, powered by AI (Anthropic's Claude) to understand customer intent. Conversational memory with Zep, catalog and cart management, and WhatsApp integration. Node.js + TypeScript backend. Freelance project.",
          tags: ["Node.js", "TypeScript", "WebSockets", "Claude AI", "WhatsApp"],
          period: "2026",
          status: "completed",
        },
        {
          title: "WhatsApp FAQ Bot — Aural",
          description:
            "WhatsApp bot for automated FAQ support, with a web admin panel and SQLite database. Direct connection via Baileys, email alerts, and Docker deployment on Railway. Freelance for Aural Venezuela.",
          tags: ["Node.js", "TypeScript", "WhatsApp", "SQLite", "Docker"],
          period: "2026",
          status: "completed",
        },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js and Tailwind CSS.",
    },
  },
};
