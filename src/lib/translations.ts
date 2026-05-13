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
      status: "active" | "completed" | "placeholder";
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
          role: "Desarrollador Frontend",
          company: "Servicios Paquetodo",
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
          status: "active",
        },
        {
          title: "Plataforma Paquetodo",
          description:
            "App móvil en Flutter y paneles administrativos en Angular con integración de pasarelas de pago seguras y flujo de transacciones optimizado.",
          tags: ["Flutter", "Angular", "Pasarelas de pago", "GitLab"],
          status: "completed",
        },
        {
          title: "Próximamente",
          description:
            "Espacio reservado para nuevos proyectos personales y experimentos con Kotlin, React y Node.js.",
          tags: ["Kotlin", "React", "Node.js"],
          status: "placeholder",
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
          role: "Frontend Developer",
          company: "Servicios Paquetodo",
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
          status: "active",
        },
        {
          title: "Paquetodo Platform",
          description:
            "Flutter mobile app and Angular admin panels integrating secure payment gateways and an optimized transaction flow.",
          tags: ["Flutter", "Angular", "Payment gateways", "GitLab"],
          status: "completed",
        },
        {
          title: "Coming soon",
          description:
            "Reserved spot for new personal projects and experiments with Kotlin, React and Node.js.",
          tags: ["Kotlin", "React", "Node.js"],
          status: "placeholder",
        },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js and Tailwind CSS.",
    },
  },
};
