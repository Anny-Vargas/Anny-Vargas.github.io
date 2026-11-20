/* ==========================================================================
   CONTENIDO DEL PORTAFOLIO — ÚNICO ARCHIVO QUE NECESITAS EDITAR
   --------------------------------------------------------------------------
   Para agregar algo, copia un bloque { ... } de la lista correspondiente,
   pégalo debajo y cambia los textos. Guía completa: README.md
   Campos con null (o vacíos) simplemente no se muestran.
   ========================================================================== */
window.PORTFOLIO = {

  /* ---------- Enlaces y configuración ---------- */
  links: {
    linkedin: "https://www.linkedin.com/in/annyvargas-desiree/",
    github: "https://github.com/Anny-Vargas",
    githubUser: "Anny-Vargas",
    credly: "https://www.credly.com/users/anny-vargas.302dcb76/badges/credly",
    whatsapp: "https://wa.me/50768669815",
    whatsappDisplay: "+507 6866-9815",
    email: "Anny_Vargas_Desiree@outlook.com"
  },

  /* Formulario de contacto.
     - Con formEndpoint vacío, el formulario abre el correo del visitante con el mensaje ya redactado.
     - Para recibir mensajes sin abrir el correo: crea un formulario gratis en https://formspree.io
       y pega aquí su URL (ej. "https://formspree.io/f/xxxxxxx"). */
  formEndpoint: "",

  /* ---------- Certificaciones e insignias ----------
     type: "badge" (insignia digital) | "traditional" (certificación sin insignia digital)
     badgeImage: ruta a la imagen de la insignia (ej. "assets/img/badges/linux-essentials.png").
                 Descárgala desde tu perfil de Credly. Si está vacío se muestra un emblema genérico.
     verifyUrl: enlace de verificación (en Credly: abre la insignia → botón "Share"/compartir → copiar enlace).
                Si es null, la tarjeta indica que la verificación aún no está enlazada. */
  certifications: [
    {
      name: "Google Cloud Computing Foundations Certificate",
      issuer: "Google / INADEH",
      date: "2026",
      type: "badge",
      badgeImage: "",
      verifyUrl: "https://www.credly.com/badges/2fb6bebd-1456-4200-b0ee-6d4ad56fb9fe/public_url",
      description: "Fundamentos de computación en la nube con Google Cloud: conceptos, servicios principales y modelos de despliegue."
    },
    {
      name: "Build a Secure Google Cloud Network Skill Badge",
      issuer: "Google Cloud",
      date: 2026,
      type: "badge",
      badgeImage: "",
      verifyUrl: "https://www.credly.com/badges/22addfed-2875-4bfa-95c6-1ad651f872ed/public_url",
      description: "Insignia de habilidad de Google Cloud sobre cómo construir y asegurar redes en Google Cloud."
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: 2026,
      type: "traditional",
      badgeImage: "",
      verifyUrl: null,
      description: "Conceptos esenciales de ciberseguridad: tipos de amenazas, ataques y principios de protección de datos y redes."
    },
    {
      name: "Linux Essentials",
      issuer: "Cisco",
      date: 2026,
      type: "traditional",
      badgeImage: "",
      verifyUrl: null,
      description: "Fundamentos del sistema operativo Linux: línea de comandos, archivos, permisos y administración básica."
    },
    {
      name: "Excel Avanzado",
      issuer: "INADEH",
      date: 2026,
      type: "traditional",
      badgeImage: "",
      verifyUrl: "http://portal.inadeh.edu.pa/certificados/validar_certificado?sesion=2714P2260254&usuario=1000287203",
      description: "Formación avanzada en hojas de cálculo para el análisis y la organización de datos."
    },
    {
      name: "Power BI",
      issuer: "INADEH",
      date: 2026,
      type: "traditional",
      badgeImage: "",
      verifyUrl: "https://portal.inadeh.edu.pa/certificados/validar_certificado?sesion=2714P2260258&usuario=1000287203",
      description: "Formación complementaria en visualización y análisis de datos con Power BI."
    },
    {
      name: "Técnico en Sistemas Informáticos",
      issuer: "Dell Technologies / Glasswing",
      date: "2025",
      type: "traditional",
      badgeImage: "",
      verifyUrl: null,
      description: "Formación técnica en hardware, software, sistemas operativos, redes y soporte técnico."
    }
  ],

  /* ---------- Reconocimientos ----------
     Agrega aquí tus reconocimientos reales dentro de los corchetes [ ]. Ejemplo:
     {
       name: "Nombre del reconocimiento",
       issuer: "Institución que lo otorga",
       year: "2026",
       description: "Por qué te lo otorgaron.",
       image: "assets/img/recognitions/mi-reconocimiento.jpg"   // opcional
     }
     (Mientras la lista esté vacía, el sitio muestra una tarjeta "Próximamente".) */
  recognitions: [],

  /* ---------- Actividades y participación ---------- */
  activities: [
    {
      name: "IEEE Student Branch UTP / TEMS UTP",
      period: null,
      role: "Tesorera",
      featured: true,
      icon: "users",
      description: "Responsable de la tesorería de la rama estudiantil: control de recursos y apoyo a las actividades técnicas y académicas de la comunidad.",
      image: ""
    },
    {
      name: "Comunidad Dojo",
      period: null,
      role: null,
      icon: "terminal",
      description: "Participación en una comunidad tecnológica para aprender, compartir conocimiento y practicar.",
      image: ""
    },
    {
      name: "Women of Security Panamá",
      period: null,
      role: null,
      icon: "shield",
      description: "Participación en la comunidad de mujeres en ciberseguridad de Panamá.",
      image: ""
    },
    {
      name: "Bootcamps de ciberseguridad",
      period: null,
      role: null,
      icon: "bug",
      description: "Entrenamientos intensivos para reforzar habilidades prácticas en seguridad.",
      image: ""
    },
    {
      name: "Charlas y eventos tecnológicos",
      period: null,
      role: null,
      icon: "award",
      description: "Asistencia a charlas y eventos para mantenerme al día con las tendencias de la industria.",
      image: ""
    },
    {
      name: "Talleres y actividades académicas",
      period: null,
      role: null,
      icon: "search",
      description: "Talleres prácticos y actividades académicas complementarias a la carrera.",
      image: ""
    }
  ],

  /* ---------- Formación académica (el primero es el más reciente) ---------- */
  education: [
    {
      title: "Licenciatura en Ciberseguridad",
      institution: "Universidad Tecnológica de Panamá (UTP)",
      period: "2025 – 2029",
      current: true,
      status: "Cursando segundo año",
      description: "Formación en redes, sistemas operativos, programación, seguridad informática y protección de infraestructuras tecnológicas."
    },
    {
      title: "Técnico en Sistemas Informáticos",
      institution: "Dell Technologies / Glasswing",
      period: "2025",
      current: false,
      status: null,
      description: "Formación en hardware, software, sistemas operativos, redes y soporte técnico."
    },
    {
      title: "Bachillerato en Ciencias",
      institution: null,   // ← agrega el nombre del colegio
      period: null,        // ← agrega el año de graduación
      current: false,
      status: null,
      description: "Base científica que sustenta el pensamiento analítico aplicado a la ciberseguridad."
    }
  ],

  /* ---------- Experiencia profesional ---------- */
  experience: [
    {
      title: "Asistente de Soporte Técnico / Evaluación de Equipos",
      company: "Globalcom Solutions",
      period: "2026",
      type: "Trabajo eventual",
      tasks: [
        "Revisión y evaluación de equipos informáticos.",
        "Pruebas de hardware y software.",
        "Verificación de componentes y funcionamiento.",
        "Identificación y documentación de fallas.",
        "Elaboración de reportes.",
        "Escalamiento de incidencias según los procedimientos establecidos."
      ],
      highlight: "Esta experiencia fortaleció mis conocimientos en diagnóstico, soporte técnico y evaluación de infraestructura informática."
    }
  ],
  /* Muestra una tarjeta "Próximas experiencias" al final (true/false) */
  showExperiencePlaceholder: true,

  /* ---------- Proyectos ----------
     github: URL del repositorio (o null si aún no está publicado).
     image: captura opcional (ej. "assets/img/projects/wazuh.png"). Si está vacío se usa una ilustración.
     Además, debajo de estos proyectos el sitio lista automáticamente tus repositorios públicos de GitHub. */
  projects: [
    {
      id: "vuln-analysis",
      name: "Análisis de vulnerabilidades",
      icon: "search",
      image: "",
      tech: ["Nessus Essentials", "OpenVAS", "Kali Linux", "Debian"],
      description: "Escaneos de vulnerabilidades sobre entornos virtualizados para identificar puertos y servicios expuestos, con documentación de hallazgos y recomendaciones de mitigación.",
      objective: "Identificar y priorizar debilidades en sistemas de laboratorio y proponer cómo reducir la superficie de ataque.",
      learnings: [
        "Ejecución de escaneos con Nessus Essentials y OpenVAS.",
        "Identificación de puertos y servicios expuestos.",
        "Documentación de hallazgos y propuesta de recomendaciones de mitigación."
      ],
      github: null
    },
    {
      id: "malware-analysis",
      name: "Análisis de malware",
      icon: "bug",
      image: "",
      tech: ["ANY.RUN"],
      description: "Análisis de muestras en un entorno sandbox, identificando indicadores de comportamiento malicioso y observando las acciones ejecutadas por archivos sospechosos.",
      objective: "Entender cómo se comporta el software malicioso para reconocer indicadores útiles en la detección y respuesta.",
      learnings: [
        "Análisis dinámico de muestras en un sandbox.",
        "Identificación de indicadores de comportamiento malicioso.",
        "Observación de las acciones ejecutadas por archivos sospechosos."
      ],
      github: null
    },
    {
      id: "network-design",
      name: "Diseño de redes empresariales",
      icon: "network",
      image: "",
      tech: ["Cisco Packet Tracer", "VLAN", "Routers", "Switches"],
      description: "Diseño y configuración de redes empresariales con VLAN, direccionamiento IP, routers y switches, aplicando buenas prácticas de seguridad.",
      objective: "Diseñar redes segmentadas y ordenadas que sirvan de base para una infraestructura segura.",
      learnings: [
        "Segmentación con VLAN y planificación de direccionamiento IP.",
        "Configuración de routers y switches.",
        "Aplicación de buenas prácticas de seguridad en la red."
      ],
      github: null
    },
    {
      id: "soc-log-analysis",
      name: "Monitoreo y análisis de logs SOC",
      icon: "terminal",
      image: "",
      tech: ["Análisis de logs", "Detección de amenazas"],
      description: "Propuesta de herramienta para analizar archivos de registros de seguridad y detectar comportamientos sospechosos como fuerza bruta, password spraying, movimientos laterales, creación de cuentas y modificaciones de registros de auditoría.",
      objective: "Automatizar la detección de patrones sospechosos en registros para apoyar el trabajo de un analista SOC.",
      learnings: [
        "Reconocimiento de patrones de fuerza bruta y password spraying.",
        "Detección de movimientos laterales y creación de cuentas.",
        "Identificación de modificaciones en registros de auditoría."
      ],
      github: null
    },
    {
      id: "wazuh-infra",
      name: "Infraestructura de seguridad con Wazuh",
      icon: "server",
      image: "",
      tech: ["Wazuh SIEM/XDR", "Windows Server", "Windows 10/11", "Ubuntu Server", "Kali Linux", "Sysmon"],
      description: "Implementación académica de una infraestructura de monitoreo y análisis de eventos de seguridad con Wazuh SIEM/XDR, agentes y simulaciones de eventos en entornos virtualizados.",
      objective: "Montar un entorno de monitoreo centralizado y observar cómo se detectan y registran eventos de seguridad.",
      learnings: [
        "Despliegue de Wazuh y de agentes en distintos sistemas operativos.",
        "Recolección de telemetría con Sysmon.",
        "Simulación y análisis de eventos de seguridad en un laboratorio virtual."
      ],
      github: null
    }
  ],

  /* ---------- Habilidades ----------
     level: 1 = Básico, 2 = Intermedio, 3 = Avanzado, 0 = En formación
     Ajusta los niveles a tu criterio: son etiquetas, no porcentajes. */
  skills: [
    {
      category: "Ciberseguridad",
      icon: "shield",
      items: [
        { name: "Análisis de vulnerabilidades", level: 2 },
        { name: "Fundamentos de SOC", level: 3 },
        { name: "Análisis de malware", level: 2 },
        { name: "Monitoreo de eventos", level: 2 },
        { name: "Fundamentos de seguridad informática", level: 2 }
      ]
    },
    {
      category: "Herramientas",
      icon: "terminal",
      items: [
        { name: "Nessus", level: 2 },
        { name: "OpenVAS", level: 2 },
        { name: "ANY.RUN", level: 2 },
        { name: "Wazuh", level: 1 },
        { name: "Kali Linux", level: 3 },
        { name: "Debian", level: 3 },
        { name: "Cisco Packet Tracer", level: 2 }
      ]
    },
    {
      category: "Sistemas y redes",
      icon: "network",
      items: [
        { name: "Windows", level: 2 },
        { name: "Linux", level: 2 },
        { name: "TCP/IP", level: 2 },
        { name: "DNS", level: 2 },
        { name: "DHCP", level: 2 },
        { name: "VLAN", level: 2 },
        { name: "Routers y switches", level: 2 }
      ]
    },
    {
      category: "Programación y análisis",
      icon: "chart",
      items: [
        { name: "Python", level: 3 },
        { name: "SQL", level: 2},
        { name: "Excel avanzado", level: 2 },
        { name: "Power BI", level: 2 },
        { name: "Bases de datos", level: 2 }
      ]
    }
  ]
};
