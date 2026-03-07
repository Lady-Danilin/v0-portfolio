export type Lang = "en" | "es"

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      subtitles: [
        "Digital Communication Strategist",
        "Social Media Expert",
        "Content Creator",
        "Digital Marketing Specialist",
        "Communication Professional",
      ],
      description:
        "Passionate about digital communication, social media strategy, and content creation. I specialize in building digital communities, developing comprehensive marketing strategies, and creating engaging content that drives results across multiple platforms.",
      ctaContact: "Get In Touch",
      ctaWork: "View My Work",
    },
    profileTabs: {
      heading: "Where do we start?",
      subheading: "Digital strategy, professional voice and user-centered design — all in one person.",
      tabs: [
        {
          id: "social",
          label: "Digital Communication",
          emoji: "📱",
          tagline: "Strategy, content and digital communities",
          description:
            "I design digital communication strategies that connect brands with their audiences. With experience in educational institutions and creative agencies, I translate objectives into content that generates real impact.",
          highlights: [
            "Management of creative teams of up to 8 people",
            "Metrics analysis and continuous campaign optimization",
            "Multi-channel strategy: Instagram, LinkedIn, Facebook, TikTok",
          ],
          skills: ["Meta Business Suite", "Google Analytics", "Metricool", "Hootsuite", "Canva Pro", "ChatGPT"],
          cta: { label: "Let's talk strategy", href: "#contact" },
        },
        {
          id: "voice",
          label: "Voice & Radio",
          emoji: "🎙️",
          tagline: "Your voice, your story, digitally realized",
          description:
            "With experience in radio production and professional voice acting, I adapt my voice to convey the exact tone and message your brand needs. From advertising to narration, every word has intention.",
          highlights: [
            "Radio producer at Radio Mitre — \"Mitre y el Campo\" program",
            "Commercial, narrative and institutional voice acting",
            "Audio content production for digital platforms",
          ],
          skills: ["Commercial Voice", "Radio Production", "Narration", "Adobe Audition", "Podcast", "Voice-over"],
          cta: { label: "Listen to demo", href: "#broadcaster" },
        },
        {
          id: "ux",
          label: "UX/UI & Design",
          emoji: "🎨",
          tagline: "User-centered design, with purpose",
          description:
            "I combine strategic thinking with creative execution to create digital experiences that not only look great, but work intuitively. Every design decision has a reason.",
          highlights: [
            "Real case: FCEFyN-UNC Extension Secretariat website",
            "Usability testing and applied heuristic evaluation",
            "Figma, Adobe XD, wireframing and prototypes",
          ],
          skills: ["Figma", "Adobe XD", "Wagtail CMS", "User Testing", "Wireframing", "Nielsen Heuristics"],
          cta: { label: "See case study", href: "#ux-ui-designer" },
          caseStudy: {
            title: "Extension Secretariat — FCEFyN UNC",
            role: "Digital Communication Manager · 2024–present",
            tests: [
              {
                id: "TC-01",
                name: "Program registration flow",
                scenario: "A new visitor tries to find how to enroll in an extension program in under 3 clicks.",
                finding: "✅ Clear flow: Home → Extension → Programs → Form.",
              },
              {
                id: "TC-02",
                name: "Mobile readability",
                scenario: "Mobile user tries to read a recent news article.",
                finding: "⚠️ Adequate typography, but secondary CTAs require excessive scrolling.",
              },
              {
                id: "TC-03",
                name: "Visual consistency across sections",
                scenario: "Does the site maintain consistent visual hierarchy throughout all sections?",
                finding: "⚠️ Consistent palette, but header usage varies between subsections.",
              },
              {
                id: "TC-04",
                name: "Contact accessibility",
                scenario: "Can a user find how to contact the secretariat without prior knowledge of the site?",
                finding: "✅ Footer with visible data. Suggested improvement: contact CTA in hero section.",
              },
            ],
          },
        },
      ],
    },
    about: {
      title: "About Me",
      subtitle: "Get to know me better",
      heading: "Strategic Communication for Impact.",
      p1: "I am a results-driven Digital Communications Specialist with 5+ years of experience in developing cross-platform content strategies, optimizing user experiences (UX/UI), and implementing data-driven marketing campaigns. My journey has allowed me to contribute to various sectors, including education, creative agencies, and technology.",
      p2: "With a proven track record in team leadership, performance analysis, and creative direction, I am passionate about leveraging digital technologies to deliver impactful brand communication solutions. I help organizations establish strong digital presences and connect meaningfully with their audiences by focusing on engagement and achieving business goals.",
      stats: [
        { number: 10, suffix: "+", label: "Years Experience" },
        { number: 20, suffix: "+", label: "Clients Served" },
        { number: 100, suffix: "%", label: "Client Satisfaction" },
      ],
    },
    resume: {
      title: "Download My CV",
      description: "Get a comprehensive overview of my professional experience, skills, and achievements. Available in English and Spanish.",
      features: ["Complete work history", "Detailed skill breakdown", "Education & certifications", "Contact information"],
      downloadEn: "Download CV (English)",
      downloadEs: "Descargar CV (Español)",
      updated: "Updated 2025",
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Comprehensive toolkit for digital success",
      alwaysLearning: "Always Learning",
      alwaysLearningDesc: "Continuously expanding expertise in emerging technologies",
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
    },
    broadcaster: {
      title: "Broadcaster & Voice Actor",
      subtitle: "Your Voice, Your Vision, Digitally Realized.",
      heading: "Your Professional Voice",
      description: "With extensive experience in radio production and voice acting, I bring professionalism and versatility to every project. From commercial advertising to narrative storytelling, my voice adapts to convey the right tone and message for your brand.",
      audioTitle: "Main Presentation Audio",
      audioSubtitle: "Voice demo",
      audioNote: "Further audio examples coming soon (e.g., advertising, narrative, voice acting styles).",
      gallery: "Gallery",
      galleryItems: [
        { caption: "Voice & Presence" },
        { caption: "Studio Session" },
      ],
    },
    uxui: {
      title: "UX/UI Design Approach",
      subtitle: "Design & Dialogue: Crafting Digital Experiences.",
      heading: "The Power of User-Centric Design",
      description: "In today's digital landscape, exceptional user experience is not just a competitive advantage—it's essential. My approach to UX/UI design combines strategic thinking with creative execution, ensuring that every interface not only looks beautiful but functions intuitively.",
      principles: [
        { title: "User-Centered Design", description: "Every design decision is made with the end user in mind, ensuring intuitive and accessible experiences." },
        { title: "Goal-Oriented Approach", description: "Aligning design solutions with business objectives and user needs to create meaningful interactions." },
        { title: "Iterative Process", description: "Continuous testing, feedback, and refinement to optimize user experience and interface design." },
        { title: "Visual Storytelling", description: "Creating compelling visual narratives that communicate brand values and enhance user engagement." },
      ],
      process: {
        title: "My Design Process",
        steps: [
          { step: "01", title: "Research", desc: "Understanding users and business goals" },
          { step: "02", title: "Ideate", desc: "Brainstorming and concept development" },
          { step: "03", title: "Design", desc: "Creating wireframes and prototypes" },
          { step: "04", title: "Test", desc: "Validating and iterating solutions" },
        ],
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's work together",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      subtitles: [
        "Estratega en Comunicación Digital",
        "Experta en Redes Sociales",
        "Creadora de Contenido",
        "Especialista en Marketing Digital",
        "Profesional de la Comunicación",
      ],
      description:
        "Apasionada por la comunicación digital, la estrategia en redes sociales y la creación de contenido. Me especializo en construir comunidades digitales, desarrollar estrategias de marketing integrales y crear contenido que genera resultados en múltiples plataformas.",
      ctaContact: "Hablemos",
      ctaWork: "Ver mi trabajo",
    },
    profileTabs: {
      heading: "¿Por dónde empezamos?",
      subheading: "Estrategia digital, voz profesional y diseño centrado en el usuario — todo en una sola persona.",
      tabs: [
        {
          id: "social",
          label: "Comunicación Digital",
          emoji: "📱",
          tagline: "Estrategia, contenido y comunidades digitales",
          description:
            "Diseño estrategias de comunicación digital que conectan marcas con sus audiencias. Con experiencia en instituciones educativas y agencias creativas, traduzco objetivos en contenido que genera impacto real.",
          highlights: [
            "Gestión de equipos creativos de hasta 8 personas",
            "Análisis de métricas y optimización continua de campañas",
            "Estrategia multicanal: Instagram, LinkedIn, Facebook, TikTok",
          ],
          skills: ["Meta Business Suite", "Google Analytics", "Metricool", "Hootsuite", "Canva Pro", "ChatGPT"],
          cta: { label: "Hablemos de tu estrategia", href: "#contact" },
        },
        {
          id: "voice",
          label: "Locutora & Productora",
          emoji: "🎙️",
          tagline: "Tu voz, tu historia, digitalmente realizada",
          description:
            "Con experiencia en producción radial y locución profesional, adapto mi voz para transmitir el tono y mensaje exacto que tu marca necesita. Desde publicidad hasta narración, cada palabra tiene intención.",
          highlights: [
            "Productora en Radio Mitre — programa \"Mitre y el Campo\"",
            "Locución comercial, narrativa e institucional",
            "Producción de contenido de audio para plataformas digitales",
          ],
          skills: ["Locución comercial", "Producción radial", "Narración", "Adobe Audition", "Podcast", "Voice-over"],
          cta: { label: "Escuchar demo", href: "#broadcaster" },
        },
        {
          id: "ux",
          label: "UX/UI & Diseño",
          emoji: "🎨",
          tagline: "Diseño centrado en el usuario, con propósito",
          description:
            "Combino pensamiento estratégico con ejecución creativa para crear experiencias digitales que no solo se ven bien, sino que funcionan de manera intuitiva. Cada decisión de diseño tiene un por qué.",
          highlights: [
            "Caso real: sitio de la Secretaría de Extensión FCEFyN-UNC",
            "Test de usabilidad y evaluación heurística aplicada",
            "Figma, Adobe XD, wireframing y prototipos",
          ],
          skills: ["Figma", "Adobe XD", "Wagtail CMS", "User Testing", "Wireframing", "Heurísticas Nielsen"],
          cta: { label: "Ver caso de estudio", href: "#ux-ui-designer" },
          caseStudy: {
            title: "Secretaría de Extensión — FCEFyN UNC",
            role: "Responsable de comunicación digital · 2024–presente",
            tests: [
              {
                id: "TC-01",
                name: "Flujo de inscripción a programas",
                scenario: "Un visitante nuevo busca inscribirse a un programa de extensión en menos de 3 clics.",
                finding: "✅ Flujo claro: Inicio → Extensión → Programas → Formulario.",
              },
              {
                id: "TC-02",
                name: "Legibilidad en mobile",
                scenario: "Usuario en celular intenta leer un artículo de noticias reciente.",
                finding: "⚠️ Tipografía adecuada, pero CTAs secundarios requieren scroll excesivo.",
              },
              {
                id: "TC-03",
                name: "Consistencia visual entre secciones",
                scenario: "¿Mantiene el sitio jerarquía visual coherente en todas sus secciones?",
                finding: "⚠️ Paleta consistente, pero variación en uso de headers entre subsecciones.",
              },
              {
                id: "TC-04",
                name: "Accesibilidad de contacto",
                scenario: "¿Puede un usuario encontrar cómo contactar a la secretaría sin conocer el sitio?",
                finding: "✅ Footer con datos visibles. Mejora sugerida: CTA de contacto en hero.",
              },
            ],
          },
        },
      ],
    },
    about: {
      title: "Sobre mí",
      subtitle: "Conoceme mejor",
      heading: "Comunicación estratégica para el impacto.",
      p1: "Soy una especialista en comunicación digital orientada a resultados, con más de 5 años de experiencia desarrollando estrategias de contenido multiplataforma, optimizando experiencias de usuario (UX/UI) e implementando campañas de marketing basadas en datos. Mi trayectoria me ha permitido contribuir en educación, agencias creativas y tecnología.",
      p2: "Con trayectoria comprobada en liderazgo de equipos, análisis de rendimiento y dirección creativa, me apasiona aprovechar las tecnologías digitales para ofrecer soluciones de comunicación de marca con impacto real.",
      stats: [
        { number: 10, suffix: "+", label: "Años de experiencia" },
        { number: 20, suffix: "+", label: "Clientes atendidos" },
        { number: 100, suffix: "%", label: "Satisfacción" },
      ],
    },
    resume: {
      title: "Descargá mi CV",
      description: "Obtené una visión completa de mi experiencia profesional, habilidades y logros. Disponible en inglés y español.",
      features: ["Historial laboral completo", "Desglose detallado de habilidades", "Educación y certificaciones", "Información de contacto"],
      downloadEn: "Download CV (English)",
      downloadEs: "Descargar CV (Español)",
      updated: "Actualizado 2025",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Kit completo para el éxito digital",
      alwaysLearning: "Siempre aprendiendo",
      alwaysLearningDesc: "Expandiendo continuamente mi expertise en tecnologías emergentes",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional",
    },
    broadcaster: {
      title: "Locutora & Productora",
      subtitle: "Tu voz, tu visión, digitalmente realizada.",
      heading: "Tu voz profesional",
      description: "Con amplia experiencia en producción radial y locución, aporto profesionalismo y versatilidad a cada proyecto. Desde publicidad comercial hasta narración, mi voz se adapta para transmitir el tono y mensaje correctos para tu marca.",
      audioTitle: "Audio de presentación principal",
      audioSubtitle: "Demo de locución",
      audioNote: "Próximamente más ejemplos (publicidad, narrativa, voice acting).",
      gallery: "Galería",
      galleryItems: [
        { caption: "Presencia y voz" },
        { caption: "Sesión de estudio" },
      ],
    },
    uxui: {
      title: "Enfoque UX/UI",
      subtitle: "Diseño y diálogo: creando experiencias digitales.",
      heading: "El poder del diseño centrado en el usuario",
      description: "En el panorama digital actual, una experiencia de usuario excepcional no es solo una ventaja competitiva, es esencial. Mi enfoque de diseño UX/UI combina pensamiento estratégico con ejecución creativa.",
      principles: [
        { title: "Diseño centrado en el usuario", description: "Cada decisión de diseño se toma pensando en el usuario final, garantizando experiencias intuitivas y accesibles." },
        { title: "Enfoque orientado a objetivos", description: "Alineando soluciones de diseño con objetivos de negocio y necesidades del usuario para crear interacciones significativas." },
        { title: "Proceso iterativo", description: "Pruebas continuas, retroalimentación y refinamiento para optimizar la experiencia e interfaz de usuario." },
        { title: "Narración visual", description: "Creando narrativas visuales que comunican los valores de la marca y mejoran el engagement del usuario." },
      ],
      process: {
        title: "Mi proceso de diseño",
        steps: [
          { step: "01", title: "Investigar", desc: "Comprender usuarios y objetivos del negocio" },
          { step: "02", title: "Idear", desc: "Brainstorming y desarrollo de conceptos" },
          { step: "03", title: "Diseñar", desc: "Crear wireframes y prototipos" },
          { step: "04", title: "Testear", desc: "Validar e iterar soluciones" },
        ],
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "Trabajemos juntos",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
}
