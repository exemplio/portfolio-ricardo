export type Locale = "es" | "en" | "pt";

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
  pt: {
    nav: {
      home: "Início",
      skills: "Habilidades",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, sou",
      role: "Desenvolvedor Mobile & Web",
      description:
        "Desenvolvedor de software especializado em aplicativos mobile e web. Tenho experiência sólida em todo o ciclo de vida do desenvolvimento, desde a arquitetura e o consumo de APIs RESTful até o deploy e a manutenção. Focado em código limpo, escalável e na melhoria contínua da experiência do usuário sob metodologias ágeis.",
      ctaPrimary: "Entre em contato",
      ctaSecondary: "Ver projetos",
      available: "Disponível para novos projetos",
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle:
        "Tecnologias e ferramentas com as quais construo soluções end-to-end.",
      categories: {
        mobile: "Mobile",
        web: "Web & Backend",
        database: "Bancos de Dados",
        devops: "DevOps & Colaboração",
        agile: "Metodologias Ágeis",
      },
    },
    experience: {
      title: "Experiência Profissional",
      subtitle:
        "Construindo produtos reais: de chats em tempo real a plataformas com gateways de pagamento.",
      present: "Presente",
      items: [
        {
          role: "Desenvolvedor Flutter",
          company: "Soluciones Epale Chat",
          period: "Out 2025 — Presente",
          bullets: [
            "Lidero a construção de um sistema de chat em tempo real com Flutter, otimizando a latência e a experiência de mensagens instantâneas.",
            "Projeto a integração com APIs RESTful no backend e gerencio a persistência de dados local (cache e funcionalidade offline) implementando SQLite.",
            "Gerencio o controle de versões no GitHub/GitLab, garantindo a entrega contínua (CI/CD) e a qualidade do código por meio de revisões por pares sob metodologias ágeis.",
          ],
        },
        {
          role: "Desenvolvedor Backend (Freelance)",
          company: "Projetos Independentes",
          period: "2026",
          bullets: [
            "Desenvolvi um chatbot de vendas em tempo real sobre WebSockets, integrando IA (Claude da Anthropic) para interpretar a intenção do cliente, com memória conversacional (Zep) e integração com WhatsApp.",
            "Construí um bot de WhatsApp de atendimento automático por FAQs com painel de administração web, banco de dados SQLite e deploy com Docker no Railway.",
            "Implementei o backend em Node.js + TypeScript com APIs REST, alertas por e-mail e uma arquitetura orientada a produção.",
          ],
        },
        {
          role: "Desenvolvedor Frontend",
          company: "Servicios Paguetodo",
          period: "Maio 2023 — Out 2025",
          bullets: [
            "Desenvolvi e mantive interfaces de usuário escaláveis em Flutter, melhorando significativamente a usabilidade e a experiência do usuário mobile.",
            "Construí módulos e painéis administrativos web com Angular, garantindo consistência visual entre plataformas.",
            "Implementei gateways de pagamento seguros, otimizando o fluxo de transações dentro do aplicativo.",
            "Administrei repositórios no GitLab, gerenciando branches e aprovando Pull Requests em um ambiente colaborativo.",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle:
        "Uma seleção de produtos dos quais participei ou estou construindo atualmente.",
      viewProject: "Ver projeto",
      sourceCode: "Código",
      inProgress: "Em desenvolvimento",
      items: [
        {
          title: "Epale Chat",
          description:
            "App de mensagens em tempo real construído com Flutter. Latência otimizada, suporte offline com SQLite e arquitetura escalável conectada a APIs RESTful.",
          tags: ["Flutter", "Dart", "SQLite", "REST API", "CI/CD"],
          period: "2025",
          status: "active",
        },
        {
          title: "Plataforma Paguetodo",
          description:
            "App mobile em Flutter e painéis administrativos em Angular com integração de gateways de pagamento seguros e fluxo de transações otimizado.",
          tags: ["Flutter", "Angular", "Gateways de pagamento", "GitLab"],
          period: "2023 — 2025",
          status: "completed",
        },
        {
          title: "Chatbot de Vendas com IA",
          description:
            "Chatbot de vendas em tempo real sobre WebSockets, com IA (Claude da Anthropic) para entender a intenção do cliente. Memória conversacional com Zep, gestão de catálogo e carrinho, e integração com WhatsApp. Backend em Node.js + TypeScript. Projeto freelance.",
          tags: ["Node.js", "TypeScript", "WebSockets", "Claude AI", "WhatsApp"],
          period: "2026",
          status: "completed",
        },
        {
          title: "WhatsApp FAQ Bot — Aural",
          description:
            "Bot de WhatsApp para atendimento automático por perguntas frequentes, com painel de administração web e banco de dados SQLite. Conexão direta via Baileys, alertas por e-mail e deploy com Docker no Railway. Freelance para Aural Venezuela.",
          tags: ["Node.js", "TypeScript", "WhatsApp", "SQLite", "Docker"],
          period: "2026",
          status: "completed",
        },
      ],
    },
    footer: {
      rights: "Todos os direitos reservados.",
      builtWith: "Construído com Next.js e Tailwind CSS.",
    },
  },
};
