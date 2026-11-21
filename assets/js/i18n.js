/* ==========================================================================
   Idioma ES / EN
   - Los textos fijos de index.html llevan data-i18n="clave". El español sale del propio HTML;
     el inglés sale de EN (abajo).
   - El contenido de data/content.js se traduce con GLOSS (texto en español -> inglés).
     Si un texto no está en GLOSS, se muestra en español. Para traducir un texto nuevo,
     agrégalo a GLOSS, o añade en el bloque el mismo campo con sufijo _en
     (ej. description_en: "...").
   ========================================================================== */
(function () {
  "use strict";
  var KEY = "portfolio-lang";
  var lang = "es";
  try { var saved = localStorage.getItem(KEY); if (saved === "en" || saved === "es") lang = saved; } catch (e) { /* sin almacenamiento */ }
  var listeners = [];

  /* ---------- Textos de la interfaz que genera app.js ---------- */
  var UI = {
    es: {
      "ui.badge": "Insignia digital", "ui.cert": "Certificación", "ui.verify": "Verificar",
      "ui.noverify": "Verificación aún no enlazada", "ui.viewcert": "Ver certificado",
      "ui.badgeAlt": "Insignia", "ui.evidence": "Evidencia", "ui.logo": "Logo", "ui.fullcert": "Ver certificado completo",
      "ui.soon": "Próximamente", "ui.recsEmpty": "Aquí aparecerán mis reconocimientos académicos, profesionales y tecnológicos.",
      "ui.todoInst": "Institución por agregar", "ui.todoYear": "Año de graduación por agregar",
      "ui.nextExp": "Próximas experiencias", "ui.nextExpText": "Espacio reservado para futuras experiencias laborales y prácticas profesionales.",
      "ui.close": "Cerrar", "ui.shot": "Captura de", "ui.objective": "// OBJETIVO", "ui.results": "// RESULTADOS Y APRENDIZAJES",
      "ui.tech": "// TECNOLOGÍAS", "ui.viewGithub": "Ver en GitHub", "ui.projArt": "Ilustración del proyecto",
      "ui.more": "Ver más detalles", "ui.visit": "Visitar proyecto", "ui.noDesc": "Repositorio sin descripción todavía.",
      "ui.ghLoading": "Cargando repositorios desde GitHub…",
      "ui.ghNone": "Aún no hay repositorios públicos para mostrar. Cuando publiques proyectos en GitHub aparecerán aquí automáticamente.",
      "ui.ghOk": "Se actualiza automáticamente desde mi cuenta de GitHub (@%s).",
      "ui.ghErr": "No pude cargar los repositorios en este momento. Puedes verlos directamente en mi perfil de GitHub.",
      "ui.lv0": "En formación", "ui.lv1": "Básico", "ui.lv2": "Intermedio", "ui.lv3": "Avanzado",
      "ui.menuOpen": "Abrir menú", "ui.menuClose": "Cerrar menú", "ui.langSwitch": "Switch to English",
      "ui.formBad": "Revisa los campos marcados: todos son obligatorios y el correo debe ser válido.",
      "ui.formOk": "¡Mensaje enviado! Te responderé pronto.", "ui.formFail": "No se pudo enviar. Escríbeme por WhatsApp o por correo.",
      "ui.formMail": "Se abrió tu aplicación de correo con el mensaje listo para enviar.",
      "ui.mailHi": "Hola Anny,"
    },
    en: {
      "ui.badge": "Digital badge", "ui.cert": "Certification", "ui.verify": "Verify",
      "ui.noverify": "Verification not linked yet", "ui.viewcert": "View certificate",
      "ui.badgeAlt": "Badge", "ui.evidence": "Evidence", "ui.logo": "Logo", "ui.fullcert": "View full certificate",
      "ui.soon": "Coming soon", "ui.recsEmpty": "My academic, professional and technology recognitions will appear here.",
      "ui.todoInst": "Institution to be added", "ui.todoYear": "Graduation year to be added",
      "ui.nextExp": "Upcoming experience", "ui.nextExpText": "Space reserved for future jobs and professional internships.",
      "ui.close": "Close", "ui.shot": "Screenshot of", "ui.objective": "// OBJECTIVE", "ui.results": "// RESULTS AND LEARNINGS",
      "ui.tech": "// TECHNOLOGIES", "ui.viewGithub": "View on GitHub", "ui.projArt": "Project illustration",
      "ui.more": "See details", "ui.visit": "Visit project", "ui.noDesc": "Repository without a description yet.",
      "ui.ghLoading": "Loading repositories from GitHub…",
      "ui.ghNone": "There are no public repositories to show yet. When I publish projects on GitHub they will appear here automatically.",
      "ui.ghOk": "Updated automatically from my GitHub account (@%s).",
      "ui.ghErr": "I couldn't load the repositories right now. You can see them directly on my GitHub profile.",
      "ui.lv0": "Learning", "ui.lv1": "Basic", "ui.lv2": "Intermediate", "ui.lv3": "Advanced",
      "ui.menuOpen": "Open menu", "ui.menuClose": "Close menu", "ui.langSwitch": "Cambiar a español",
      "ui.formBad": "Please check the highlighted fields: all are required and the email must be valid.",
      "ui.formOk": "Message sent! I'll reply soon.", "ui.formFail": "The message could not be sent. Write to me on WhatsApp or by email.",
      "ui.formMail": "Your email app opened with the message ready to send.",
      "ui.mailHi": "Hi Anny,"
    }
  };

  /* ---------- Textos fijos de index.html (inglés) ---------- */
  var EN = {
    "skip": "Skip to content",
    "nav.home": "Home", "nav.about": "About", "nav.certs": "Certifications", "nav.recs": "Recognitions", "nav.acts": "Activities",
    "nav.edu": "Education", "nav.exp": "Experience", "nav.proj": "Projects", "nav.skills": "Skills", "nav.contact": "Contact",
    "hero.eyebrow": "Purple Team mindset · Panama",
    "hero.hi": "Hi, I'm",
    "hero.role1": "Cybersecurity Student",
    "hero.role2": "Exploring SOC · Ethical Hacking · Forensics · Auditing",
    "hero.quote": "“A cybersecurity student who learns by doing and is finding her path among ethical hacking, digital forensics, SOC and auditing”.",
    "hero.desc": "Second-year student at the Technological University of Panama. I document rigorously, learn fast and work in an organized way. I am training in Linux, networking, cloud and data, and exploring ethical hacking, digital forensics, SOC and auditing to define my specialization.",
    "hero.cta1": "See my projects", "hero.cta2": "Contact me",
    "about.kicker": "01 · About me", "about.title": "Learn by doing, defend with method",
    "about.p1": "I'm Anny Vargas, a second-year Cybersecurity student at the Technological University of Panama. I'm passionate about understanding how networks and systems are protected, and I practice with real projects: I analyze vulnerabilities with Nessus and OpenVAS, study malware behavior in ANY.RUN and design networks in Cisco Packet Tracer.",
    "about.p2": "I completed a science high school track and trained as an IT Systems Technician with Dell Technologies and Glasswing. I also have experience in technical support and computer equipment evaluation.",
    "about.p3": "I'm known for documenting rigorously, learning fast and working in an organized way. I'm exploring areas such as ethical hacking, digital forensics, SOC and auditing to define my specialization, with the goal of contributing to the defense of organizations.",
    "about.f1": "Location", "about.f1v": "Panama City, Panama",
    "about.f2": "University", "about.f2v": "Technological University of Panama (UTP)",
    "about.f3": "Goal", "about.f3v": "Explore SOC, ethical hacking, forensics and auditing",
    "about.interests": "Areas of interest",
    "int.0": "Security Operations Center (SOC)", "int.1": "Blue Team", "int.2": "Purple Team", "int.3": "Vulnerability analysis",
    "int.4": "Malware analysis", "int.5": "Network security", "int.6": "Risk management", "int.7": "Information security",
    "sec.certs.k": "02 · Certifications and badges", "sec.certs.t": "Certified training",
    "sec.certs.l": "My certifications and courses. Digital badges are verified on Credly.",
    "certs.credly": "See all my badges on Credly",
    "sec.recs.k": "03 · Recognitions", "sec.recs.t": "Achievements and distinctions",
    "sec.recs.l": "Academic, professional and technology recognitions.",
    "sec.acts.k": "04 · Activities and participation", "sec.acts.t": "Community and leadership",
    "sec.acts.l": "Participation in tech communities and extracurricular activities.",
    "sec.edu.k": "05 · Education", "sec.edu.t": "My study path",
    "sec.exp.k": "06 · Professional experience", "sec.exp.t": "Hands-on experience",
    "sec.proj.k": "07 · Cybersecurity projects", "sec.proj.t": "Labs and projects",
    "sec.proj.l": "Academic and lab projects in controlled, virtualized environments.",
    "gh.title": "GitHub repositories", "gh.all": "See all",
    "sec.skills.k": "08 · Technical skills", "sec.skills.t": "Stack and tools",
    "sec.skills.l": "Indicative levels: Learning, Basic, Intermediate.",
    "sec.contact.k": "09 · Contact", "sec.contact.t": "Let's talk",
    "sec.contact.l": "An opportunity, an internship or a collaboration? Write to me.",
    "c.wa": "WhatsApp:", "c.mail": "Email:", "c.btnwa": "Contact on WhatsApp", "c.btnmail": "Send email",
    "f.title": "Send me a message", "f.name": "Name", "f.email": "Email", "f.subject": "Subject", "f.msg": "Message", "f.send": "Send message",
    "foot.l": "Cybersecurity · Panama City", "foot.r": "Built with HTML, CSS and JavaScript · Hosted on GitHub Pages",
    "meta.title": "Anny Vargas | Cybersecurity Student | Exploring SOC · Ethical Hacking · Digital Forensics",
    "meta.desc": "Portfolio of Anny Vargas, cybersecurity student at UTP (Panama). Projects in vulnerability analysis, malware, networking and Wazuh SIEM/XDR. Exploring SOC, ethical hacking, digital forensics and auditing.",
    "meta.og": "A cybersecurity student who learns by doing and explores ethical hacking, digital forensics, SOC and auditing."
  };

  /* ---------- Contenido de data/content.js: español -> inglés ---------- */
  var GLOSS = {
    /* Certificaciones */
    "Fundamentos de computación en la nube con Google Cloud: conceptos, servicios principales y modelos de despliegue.": "Cloud computing fundamentals with Google Cloud: concepts, core services and deployment models.",
    "Insignia de habilidad de Google Cloud sobre cómo construir y asegurar redes en Google Cloud.": "Google Cloud skill badge on building and securing networks in Google Cloud.",
    "Conceptos esenciales de ciberseguridad: tipos de amenazas, ataques y principios de protección de datos y redes.": "Essential cybersecurity concepts: types of threats, attacks and principles of data and network protection.",
    "Fundamentos del sistema operativo Linux: línea de comandos, archivos, permisos y administración básica.": "Linux operating system fundamentals: command line, files, permissions and basic administration.",
    "Excel Avanzado": "Advanced Excel",
    "Formación avanzada en hojas de cálculo para el análisis y la organización de datos.": "Advanced spreadsheet training for data analysis and organization.",
    "Formación complementaria": "Complementary training",
    "Formación complementaria en visualización y análisis de datos con Power BI.": "Complementary training in data visualization and analysis with Power BI.",
    "Técnico en Sistemas Informáticos": "IT Systems Technician",
    "Formación técnica en hardware, software, sistemas operativos, redes y soporte técnico.": "Technical training in hardware, software, operating systems, networking and technical support.",
    /* Actividades */
    "Tesorera": "Treasurer",
    "Responsable de la tesorería de la rama estudiantil: control de recursos y apoyo a las actividades técnicas y académicas de la comunidad.": "In charge of the student branch treasury: managing resources and supporting the community's technical and academic activities.",
    "Comunidad Dojo": "Dojo Community",
    "Participación en una comunidad tecnológica para aprender, compartir conocimiento y practicar.": "Participation in a tech community to learn, share knowledge and practice.",
    "Women of Security Panamá": "Women of Security Panama",
    "Participación en la comunidad de mujeres en ciberseguridad de Panamá.": "Participation in Panama's women in cybersecurity community.",
    "Bootcamps de ciberseguridad": "Cybersecurity bootcamps",
    "Entrenamientos intensivos para reforzar habilidades prácticas en seguridad.": "Intensive training to strengthen hands-on security skills.",
    "Charlas y eventos tecnológicos": "Tech talks and events",
    "Asistencia a charlas y eventos para mantenerme al día con las tendencias de la industria.": "Attending talks and events to stay up to date with industry trends.",
    "Talleres y actividades académicas": "Workshops and academic activities",
    "Talleres prácticos y actividades académicas complementarias a la carrera.": "Hands-on workshops and academic activities that complement my degree.",
    /* Formación */
    "Licenciatura en Ciberseguridad": "Bachelor's Degree in Cybersecurity",
    "Universidad Tecnológica de Panamá (UTP)": "Technological University of Panama (UTP)",
    "Cursando segundo año": "Second year in progress",
    "Formación en redes, sistemas operativos, programación, seguridad informática y protección de infraestructuras tecnológicas.": "Training in networking, operating systems, programming, information security and protection of technology infrastructure.",
    "Formación en hardware, software, sistemas operativos, redes y soporte técnico.": "Training in hardware, software, operating systems, networking and technical support.",
    "Bachillerato en Ciencias": "High School Diploma in Sciences",
    "Base científica que sustenta el pensamiento analítico aplicado a la ciberseguridad.": "Scientific foundation that supports analytical thinking applied to cybersecurity.",
    /* Experiencia */
    "Asistente de Soporte Técnico / Evaluación de Equipos": "Technical Support / Equipment Evaluation Assistant",
    "Trabajo eventual": "Temporary job",
    "Revisión y evaluación de equipos informáticos.": "Review and evaluation of computer equipment.",
    "Pruebas de hardware y software.": "Hardware and software testing.",
    "Verificación de componentes y funcionamiento.": "Verification of components and operation.",
    "Identificación y documentación de fallas.": "Identification and documentation of faults.",
    "Elaboración de reportes.": "Preparation of reports.",
    "Escalamiento de incidencias según los procedimientos establecidos.": "Escalation of incidents following established procedures.",
    "Esta experiencia fortaleció mis conocimientos en diagnóstico, soporte técnico y evaluación de infraestructura informática.": "This experience strengthened my knowledge of diagnostics, technical support and IT infrastructure evaluation.",
    /* Proyectos */
    "Análisis de vulnerabilidades": "Vulnerability analysis",
    "Escaneos de vulnerabilidades sobre entornos virtualizados para identificar puertos y servicios expuestos, con documentación de hallazgos y recomendaciones de mitigación.": "Vulnerability scans on virtualized environments to identify exposed ports and services, with documented findings and mitigation recommendations.",
    "Identificar y priorizar debilidades en sistemas de laboratorio y proponer cómo reducir la superficie de ataque.": "Identify and prioritize weaknesses in lab systems and propose how to reduce the attack surface.",
    "Ejecución de escaneos con Nessus Essentials y OpenVAS.": "Running scans with Nessus Essentials and OpenVAS.",
    "Identificación de puertos y servicios expuestos.": "Identifying exposed ports and services.",
    "Documentación de hallazgos y propuesta de recomendaciones de mitigación.": "Documenting findings and proposing mitigation recommendations.",
    "Análisis de malware": "Malware analysis",
    "Análisis de muestras en un entorno sandbox, identificando indicadores de comportamiento malicioso y observando las acciones ejecutadas por archivos sospechosos.": "Analysis of samples in a sandbox environment, identifying indicators of malicious behavior and observing the actions performed by suspicious files.",
    "Entender cómo se comporta el software malicioso para reconocer indicadores útiles en la detección y respuesta.": "Understand how malicious software behaves to recognize indicators useful for detection and response.",
    "Análisis dinámico de muestras en un sandbox.": "Dynamic analysis of samples in a sandbox.",
    "Identificación de indicadores de comportamiento malicioso.": "Identifying indicators of malicious behavior.",
    "Observación de las acciones ejecutadas por archivos sospechosos.": "Observing the actions performed by suspicious files.",
    "Diseño de redes empresariales": "Enterprise network design",
    "Diseño y configuración de redes empresariales con VLAN, direccionamiento IP, routers y switches, aplicando buenas prácticas de seguridad.": "Design and configuration of enterprise networks with VLANs, IP addressing, routers and switches, applying security best practices.",
    "Diseñar redes segmentadas y ordenadas que sirvan de base para una infraestructura segura.": "Design segmented, well-organized networks that serve as the foundation for a secure infrastructure.",
    "Segmentación con VLAN y planificación de direccionamiento IP.": "VLAN segmentation and IP addressing planning.",
    "Configuración de routers y switches.": "Router and switch configuration.",
    "Aplicación de buenas prácticas de seguridad en la red.": "Applying network security best practices.",
    "Monitoreo y análisis de logs SOC": "SOC log monitoring and analysis",
    "Análisis de logs": "Log analysis",
    "Detección de amenazas": "Threat detection",
    "Propuesta de herramienta para analizar archivos de registros de seguridad y detectar comportamientos sospechosos como fuerza bruta, password spraying, movimientos laterales, creación de cuentas y modificaciones de registros de auditoría.": "Proposal for a tool that analyzes security log files and detects suspicious behavior such as brute force, password spraying, lateral movement, account creation and audit log modifications.",
    "Automatizar la detección de patrones sospechosos en registros para apoyar el trabajo de un analista SOC.": "Automate the detection of suspicious patterns in logs to support the work of a SOC analyst.",
    "Reconocimiento de patrones de fuerza bruta y password spraying.": "Recognizing brute force and password spraying patterns.",
    "Detección de movimientos laterales y creación de cuentas.": "Detecting lateral movement and account creation.",
    "Identificación de modificaciones en registros de auditoría.": "Identifying modifications to audit logs.",
    "Infraestructura de seguridad con Wazuh": "Security infrastructure with Wazuh",
    "Implementación académica de una infraestructura de monitoreo y análisis de eventos de seguridad con Wazuh SIEM/XDR, agentes y simulaciones de eventos en entornos virtualizados.": "Academic implementation of a security event monitoring and analysis infrastructure with Wazuh SIEM/XDR, agents and event simulations in virtualized environments.",
    "Montar un entorno de monitoreo centralizado y observar cómo se detectan y registran eventos de seguridad.": "Set up a centralized monitoring environment and observe how security events are detected and logged.",
    "Despliegue de Wazuh y de agentes en distintos sistemas operativos.": "Deploying Wazuh and agents on different operating systems.",
    "Recolección de telemetría con Sysmon.": "Telemetry collection with Sysmon.",
    "Simulación y análisis de eventos de seguridad en un laboratorio virtual.": "Simulating and analyzing security events in a virtual lab.",
    /* Habilidades */
    "Ciberseguridad": "Cybersecurity", "Herramientas": "Tools", "Sistemas y redes": "Systems and networking",
    "Programación y análisis": "Programming and analysis",
    "Fundamentos de SOC": "SOC fundamentals", "Monitoreo de eventos": "Event monitoring",
    "Fundamentos de seguridad informática": "Information security fundamentals",
    "Routers y switches": "Routers and switches", "Excel avanzado": "Advanced Excel", "Bases de datos": "Databases",
    /* Nombres de proyectos/certs que ya están en inglés o son iguales se muestran tal cual */
    "Reconocimientos": "Recognitions"
  };

  function t(key, fallback) {
    var d = UI[lang] && UI[lang][key];
    if (d != null) return d;
    d = UI.es[key];
    return d != null ? d : (fallback != null ? fallback : key);
  }
  function tr(s) {
    if (lang !== "en" || typeof s !== "string") return s;
    return Object.prototype.hasOwnProperty.call(GLOSS, s) ? GLOSS[s] : s;
  }
  /* Valor de un campo según el idioma: usa campo_en si existe; si no, el glosario; si no, el español. */
  function pick(obj, field) {
    if (!obj) return obj;
    var v = obj[field];
    if (lang !== "en") return v;
    var alt = obj[field + "_en"];
    if (alt != null && alt !== "") return alt;
    if (Array.isArray(v)) return v.map(tr);
    return tr(v);
  }

  /* ---------- Aplicar idioma a los textos fijos ---------- */
  var esMeta = {};
  function metaEl(sel) { return document.querySelector(sel); }
  function apply() {
    document.documentElement.setAttribute("lang", lang);
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (n) {
      var k = n.getAttribute("data-i18n");
      if (n._es === undefined) n._es = n.textContent;
      var txt = lang === "en" ? EN[k] : n._es;
      if (txt != null) n.textContent = txt;
    });
    if (esMeta.title === undefined) {
      esMeta.title = document.title;
      var d = metaEl('meta[name="description"]'), o = metaEl('meta[property="og:description"]');
      esMeta.desc = d ? d.getAttribute("content") : null;
      esMeta.og = o ? o.getAttribute("content") : null;
    }
    document.title = lang === "en" ? EN["meta.title"] : esMeta.title;
    var dm = metaEl('meta[name="description"]'), om = metaEl('meta[property="og:description"]');
    if (dm) dm.setAttribute("content", lang === "en" ? EN["meta.desc"] : esMeta.desc);
    if (om) om.setAttribute("content", lang === "en" ? EN["meta.og"] : esMeta.og);
    var tg = document.getElementById("lang-toggle");
    if (tg) {
      tg.setAttribute("aria-label", t("ui.langSwitch"));
      Array.prototype.forEach.call(tg.querySelectorAll(".lang-opt"), function (o) {
        var on = o.getAttribute("data-l") === lang;
        o.classList.toggle("on", on);
        if (on) o.setAttribute("aria-current", "true"); else o.removeAttribute("aria-current");
      });
    }
  }

  function set(l) {
    if (l !== "es" && l !== "en") return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) { /* sin almacenamiento */ }
    apply();
    listeners.forEach(function (fn) { try { fn(l); } catch (e) { /* ignorar */ } });
  }

  window.I18N = {
    get lang() { return lang; },
    t: t, tr: tr, pick: pick, set: set,
    onChange: function (fn) { listeners.push(fn); }
  };

  function init() {
    apply();
    var tg = document.getElementById("lang-toggle");
    if (tg) tg.addEventListener("click", function () { set(lang === "es" ? "en" : "es"); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
