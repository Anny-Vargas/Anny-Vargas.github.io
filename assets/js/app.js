/* ==========================================================================
   Portafolio Anny Vargas — lógica de la página
   - Lee los datos de data/content.js (window.PORTFOLIO) y construye las tarjetas.
   - Todo el texto se inserta con textContent (nunca innerHTML) por seguridad.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SVGNS = "http://www.w3.org/2000/svg";

  /* ---------- Utilidades de DOM ---------- */
  function el(tag, props, children) {
    var n = document.createElement(tag);
    props = props || {};
    Object.keys(props).forEach(function (k) {
      var v = props[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function icon(name, cls) {
    var s = document.createElementNS(SVGNS, "svg");
    s.setAttribute("class", "icon" + (cls ? " " + cls : ""));
    s.setAttribute("aria-hidden", "true");
    var u = document.createElementNS(SVGNS, "use");
    u.setAttribute("href", "#i-" + name);
    s.appendChild(u);
    return s;
  }
  /* Solo permite enlaces http(s) — evita "javascript:" si algún dato se edita mal. */
  function safeUrl(u) { return typeof u === "string" && /^https?:\/\//i.test(u) ? u : null; }
  function safeImg(u) { return typeof u === "string" && /^(assets\/|https:\/\/)[^\s"'<>]+$/i.test(u) ? u : null; }
  function extLink(url, label, cls, withIcon) {
    var a = el("a", { href: safeUrl(url), target: "_blank", rel: "noopener noreferrer", class: cls || "btn btn-ghost btn-sm" });
    if (withIcon) a.appendChild(icon(withIcon));
    a.appendChild(document.createTextNode(label));
    return a;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }
  function mount(id, nodes) { var c = document.getElementById(id); if (!c) return; clear(c); nodes.forEach(function (n) { c.appendChild(n); }); }
  function card(cls) { return el("article", { class: "card reveal" + (cls ? " " + cls : "") }); }
  function addCard(c, kids) { kids.forEach(function (k) { if (k) c.appendChild(k); }); return c; }
  function emptyCard(title, text) {
    return addCard(card("empty"), [icon("plus"), el("h3", { text: title }), el("p", { text: text })]);
  }

  /* ---------- Certificaciones ---------- */
  function renderCerts() {
    var list = D.certifications || [];
    var nodes = list.map(function (c) {
      var isBadge = c.type === "badge";
      var img = safeImg(c.badgeImage);
      var visual = img
        ? el("div", { class: "hex hex-img" }, [el("img", { src: img, alt: "Insignia: " + c.name, loading: "lazy", width: "112", height: "112" })])
        : el("div", { class: "hex", role: "img", "aria-label": "Emblema de certificación" }, [icon(isBadge ? "award" : "shield")]);
      var meta = el("div", { class: "card-meta" }, [
        el("span", { text: c.issuer || "" }),
        c.date ? el("span", { text: c.date }) : null
      ]);
      var top = el("div", { class: "card-top" }, [
        el("span", { class: "tag" + (isBadge ? " neon" : ""), text: isBadge ? "Insignia digital" : "Certificación" })
      ]);
      var verify = safeUrl(c.verifyUrl)
        ? extLink(c.verifyUrl, "Verificar", "btn btn-primary btn-sm", "check")
        : el("span", { class: "verify-off", text: "Verificación aún no enlazada" });
      return addCard(card(), [
        top,
        el("div", { class: "badge-wrap" }, [visual]),
        el("h3", { text: c.name }),
        meta,
        c.description ? el("p", { text: c.description }) : null,
        el("div", { class: "card-actions" }, [verify])
      ]);
    });
    mount("cert-grid", nodes);
  }

  /* ---------- Reconocimientos ---------- */
  function renderRecs() {
    var list = D.recognitions || [];
    if (!list.length) {
      mount("rec-grid", [emptyCard("Próximamente", "Aquí aparecerán mis reconocimientos académicos, profesionales y tecnológicos.")]);
      return;
    }
    mount("rec-grid", list.map(function (r) {
      var img = safeImg(r.image);
      return addCard(card(), [
        img ? el("img", { class: "card-photo", src: img, alt: "Evidencia: " + r.name, loading: "lazy" }) : el("div", { class: "card-icon" }, [icon("award")]),
        el("h3", { text: r.name }),
        el("div", { class: "card-meta" }, [el("span", { text: r.issuer || "" }), r.year ? el("span", { text: String(r.year) }) : null]),
        r.description ? el("p", { text: r.description }) : null
      ]);
    }));
  }

  /* ---------- Actividades ---------- */
  function renderActs() {
    mount("act-grid", (D.activities || []).map(function (a) {
      var img = safeImg(a.image);
      var head = el("div", { class: "card-top" }, [
        el("div", { class: "card-icon" }, [icon(a.icon || "users")]),
        a.role ? el("span", { class: "tag neon", text: a.role }) : null
      ]);
      return addCard(card(a.featured ? "featured" : ""), [
        head,
        el("h3", { text: a.name }),
        a.period ? el("div", { class: "card-meta" }, [el("span", { text: String(a.period) })]) : null,
        a.description ? el("p", { text: a.description }) : null,
        img ? el("img", { class: "card-photo", src: img, alt: "Evidencia: " + a.name, loading: "lazy" }) : null
      ]);
    }));
  }

  /* ---------- Formación ---------- */
  function renderEdu() {
    var ol = document.getElementById("edu-timeline");
    if (!ol) return;
    clear(ol);
    (D.education || []).forEach(function (e) {
      var inst = e.institution ? el("span", { text: e.institution }) : el("span", { class: "todo", text: "Institución por agregar" });
      var per = e.period ? el("span", { text: e.period }) : el("span", { class: "todo", text: "Año de graduación por agregar" });
      var li = el("li", { class: "tl-item reveal" + (e.current ? " current" : "") });
      addCard(li, [addCard(el("div", { class: "card" }), [
        el("div", { class: "card-top" }, [
          el("h3", { text: e.title }),
          e.status ? el("span", { class: "tag neon", text: e.status }) : null
        ]),
        el("div", { class: "card-meta" }, [inst, per]),
        e.description ? el("p", { text: e.description }) : null
      ])]);
      ol.appendChild(li);
    });
  }

  /* ---------- Experiencia ---------- */
  function renderExp() {
    var nodes = (D.experience || []).map(function (x) {
      var ul = el("ul", { class: "task-list" }, (x.tasks || []).map(function (t) { return el("li", {}, [icon("check"), el("span", { text: t })]); }));
      return addCard(card(), [
        el("div", { class: "card-top" }, [el("div", { class: "card-icon" }, [icon("briefcase")]), x.type ? el("span", { class: "tag neon", text: x.type }) : null]),
        el("h3", { text: x.title }),
        el("div", { class: "card-meta" }, [el("span", { text: x.company || "" }), x.period ? el("span", { text: x.period }) : null]),
        ul,
        x.highlight ? el("p", { class: "highlight", text: x.highlight }) : null
      ]);
    });
    if (D.showExperiencePlaceholder) nodes.push(emptyCard("Próximas experiencias", "Espacio reservado para futuras experiencias laborales y prácticas profesionales."));
    mount("exp-grid", nodes);
  }

  /* ---------- Proyectos + modal ---------- */
  var modal = document.getElementById("project-modal");
  var lastFocus = null;

  function openProject(p) {
    var body = document.getElementById("modal-body");
    clear(body);
    var close = el("button", { class: "modal-close", type: "button", "aria-label": "Cerrar" }, [icon("close")]);
    close.addEventListener("click", function () { modal.close(); });
    var img = safeImg(p.image);
    body.appendChild(close);
    body.appendChild(img ? el("img", { class: "card-photo", src: img, alt: "Captura de " + p.name }) : el("div", { class: "proj-cover" }, [icon(p.icon || "shield")]));
    body.appendChild(el("h3", { id: "modal-title", text: p.name }));
    body.appendChild(el("p", { text: p.description }));
    if (p.objective) { body.appendChild(el("div", {}, [el("h4", { text: "// OBJETIVO" }), el("p", { text: p.objective })])); }
    if (p.learnings && p.learnings.length) {
      body.appendChild(el("div", {}, [el("h4", { text: "// RESULTADOS Y APRENDIZAJES" }),
        el("ul", { class: "task-list" }, p.learnings.map(function (l) { return el("li", {}, [icon("check"), el("span", { text: l })]); }))]));
    }
    body.appendChild(el("div", {}, [el("h4", { text: "// TECNOLOGÍAS" }), el("div", { class: "tags" }, (p.tech || []).map(function (t) { return el("span", { class: "tag neon", text: t }); }))]));
    if (safeUrl(p.github)) body.appendChild(el("div", { class: "card-actions" }, [extLink(p.github, "Ver en GitHub", "btn btn-primary btn-sm", "github")]));
    lastFocus = document.activeElement;
    if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
    close.focus();
  }
  if (modal) {
    modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
    modal.addEventListener("close", function () { if (lastFocus && lastFocus.focus) lastFocus.focus(); });
  }

  function renderProjects() {
    var list = D.projects || [];
    var nodes = list.map(function (p) {
      var img = safeImg(p.image);
      var cover = el("div", { class: "proj-cover", role: "img", "aria-label": "Ilustración del proyecto" }, [img ? el("img", { src: img, alt: "", loading: "lazy" }) : icon(p.icon || "shield")]);
      var more = el("button", { class: "btn btn-primary btn-sm", type: "button" }, [document.createTextNode("Ver más detalles")]);
      more.addEventListener("click", function () { openProject(p); });
      var actions = el("div", { class: "card-actions" }, [more, safeUrl(p.github) ? extLink(p.github, "GitHub", "btn btn-ghost btn-sm", "github") : null]);
      return addCard(card(), [
        cover,
        el("h3", { text: p.name }),
        el("p", { text: p.description }),
        el("div", { class: "tags" }, (p.tech || []).slice(0, 4).map(function (t) { return el("span", { class: "tag", text: t }); })),
        actions
      ]);
    });
    mount("proj-grid", nodes);
  }

  /* ---------- Repos de GitHub (API pública) ---------- */
  function renderRepos(repos) {
    var status = document.getElementById("gh-status");
    if (!repos.length) { status.textContent = "Aún no hay repositorios públicos para mostrar. Cuando publiques proyectos en GitHub aparecerán aquí automáticamente."; mount("gh-grid", []); return; }
    status.textContent = "Se actualiza automáticamente desde mi cuenta de GitHub (@" + (D.links.githubUser) + ").";
    mount("gh-grid", repos.map(function (r) {
      return addCard(card(), [
        el("div", { class: "card-top" }, [el("div", { class: "card-icon" }, [icon("github")]), r.language ? el("span", { class: "tag neon", text: r.language }) : null]),
        el("h3", { text: r.name }),
        el("p", { text: r.description || "Repositorio sin descripción todavía." }),
        el("div", { class: "repo-stats" }, [
          el("span", {}, [icon("star"), document.createTextNode(String(r.stargazers_count || 0))]),
          el("span", {}, [icon("fork"), document.createTextNode(String(r.forks_count || 0))])
        ]),
        el("div", { class: "card-actions" }, [extLink(r.html_url, "Visitar proyecto", "btn btn-ghost btn-sm", "external")])
      ]);
    }));
    observeReveal();
  }
  function loadRepos() {
    var status = document.getElementById("gh-status");
    var user = D.links && D.links.githubUser;
    if (!user) return;
    var key = "gh-repos-" + user, cached = null;
    try { cached = JSON.parse(sessionStorage.getItem(key) || "null"); } catch (e) { cached = null; }
    if (cached && Date.now() - cached.t < 600000) { renderRepos(cached.d); return; }
    fetch("https://api.github.com/users/" + encodeURIComponent(user) + "/repos?per_page=100&sort=pushed", { headers: { Accept: "application/vnd.github+json" } })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (all) {
        var repos = all.filter(function (r) { return !r.fork && !r.archived && r.name.toLowerCase() !== (user + ".github.io").toLowerCase() && r.name !== user; })
          .sort(function (a, b) { return new Date(b.pushed_at) - new Date(a.pushed_at); }).slice(0, 6);
        try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d: repos })); } catch (e) { /* sin almacenamiento */ }
        renderRepos(repos);
      })
      .catch(function () {
        status.textContent = "No pude cargar los repositorios en este momento. Puedes verlos directamente en mi perfil de GitHub.";
        mount("gh-grid", []);
      });
  }

  /* ---------- Habilidades ---------- */
  var LEVELS = { 0: "En formación", 1: "Básico", 2: "Intermedio", 3: "Avanzado" };
  function renderSkills() {
    mount("skill-grid", (D.skills || []).map(function (g) {
      var ul = el("ul", { class: "skill-list" }, g.items.map(function (s) {
        var dots = el("span", { class: "dots", "aria-hidden": "true" }, [1, 2, 3].map(function (i) { return el("i", { class: i <= s.level ? "on" : "" }); }));
        return el("li", {}, [el("span", { text: s.name }), el("span", { class: "skill-level" }, [dots, el("span", { text: LEVELS[s.level] || "" })])]);
      }));
      return addCard(card("skill-card"), [el("h3", {}, [icon(g.icon || "shield"), document.createTextNode(g.category)]), ul]);
    }));
  }

  /* ---------- Revelado al hacer scroll + brillo en tarjetas ---------- */
  var io = null;
  function observeReveal() {
    var items = $$(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || reduceMotion) { items.forEach(function (n) { n.classList.add("in"); }); return; }
    if (!io) io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (n) { io.observe(n); });
  }
  document.addEventListener("pointermove", function (e) {
    var c = e.target.closest && e.target.closest(".card");
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX - r.left) + "px");
    c.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, { passive: true });

  /* ---------- Navegación ---------- */
  function setupNav() {
    var header = $(".site-header"), nav = $("#nav"), toggle = $(".nav-toggle");
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 10); }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });

    var links = {}; $$("#nav ul a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    if ("IntersectionObserver" in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && links[e.target.id]) {
            $$("#nav ul a.active").forEach(function (a) { a.classList.remove("active"); a.removeAttribute("aria-current"); });
            links[e.target.id].classList.add("active"); links[e.target.id].setAttribute("aria-current", "true");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      $$("main section[id]").forEach(function (s) { spy.observe(s); });
    }
  }

  /* ---------- Terminal decorativa (efecto de escritura) ---------- */
  function setupTerminal() {
    var code = $("#terminal code");
    if (!code) return;
    // Texto decorativo e inofensivo: no ejecuta nada ni escanea nada.
    var lines = [
      [["p", "anny@soc-lab:~$ "], [null, "whoami"]],
      [["ok", "anny_vargas — cybersecurity student @ UTP"]],
      [["p", "anny@soc-lab:~$ "], [null, "cat focus.txt"]],
      [["w", "> SOC · Blue Team · Vulnerability Mgmt"]],
      [["p", "anny@soc-lab:~$ "], [null, "status --lab"]],
      [["ok", "[✓] Wazuh   [✓] Nessus   [✓] OpenVAS"]]
    ];
    var caret = el("span", { class: "caret" });
    if (reduceMotion) {
      lines.forEach(function (l) { l.forEach(function (s) { code.appendChild(el("span", { class: s[0] || "", text: s[1] })); }); code.appendChild(document.createTextNode("\n")); });
      return;
    }
    var li = 0, si = 0, ci = 0, cur = null;
    code.appendChild(caret);
    (function tick() {
      if (li >= lines.length) return;
      var seg = lines[li][si];
      if (!cur) { cur = el("span", { class: seg[0] || "" }); code.insertBefore(cur, caret); }
      var typed = !!seg[0] && seg[0] !== "p" ? false : seg[0] !== "p";
      if (seg[0] === "p") { cur.textContent = seg[1]; cur = null; ci = 0; si++; }
      else if (ci < seg[1].length) { cur.textContent += seg[1][ci++]; }
      else { cur = null; ci = 0; si++; }
      var lineDone = si >= lines[li].length;
      if (lineDone) { code.insertBefore(document.createTextNode("\n"), caret); li++; si = 0; }
      setTimeout(tick, lineDone ? 380 : (typed ? 40 : 26));
    })();
  }

  /* ---------- Formulario de contacto ---------- */
  function setupForm() {
    var form = document.getElementById("contact-form"), status = document.getElementById("form-status");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status"; status.textContent = "";
      var f = new FormData(form);
      if (f.get("website")) return; // anti-spam (honeypot)
      var fields = ["name", "email", "subject", "message"], ok = true;
      fields.forEach(function (k) {
        var inp = form.elements[k], v = (inp.value || "").trim();
        var bad = !v || (k === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
        inp.setAttribute("aria-invalid", bad ? "true" : "false");
        if (bad) ok = false;
      });
      if (!ok) { status.className = "form-status err"; status.textContent = "Revisa los campos marcados: todos son obligatorios y el correo debe ser válido."; return; }

      var name = f.get("name").trim(), email = f.get("email").trim(), subject = f.get("subject").trim(), msg = f.get("message").trim();
      var endpoint = D.formEndpoint;
      if (endpoint && /^https:\/\/formspree\.io\//.test(endpoint)) {
        var btn = form.querySelector("button[type=submit]"); btn.disabled = true;
        fetch(endpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ name: name, email: email, subject: subject, message: msg }) })
          .then(function (r) { if (!r.ok) throw new Error(); form.reset(); status.className = "form-status ok"; status.textContent = "¡Mensaje enviado! Te responderé pronto."; })
          .catch(function () { status.className = "form-status err"; status.textContent = "No se pudo enviar. Escríbeme por WhatsApp o por correo."; })
          .then(function () { btn.disabled = false; });
      } else {
        var body = "Hola Anny,\n\n" + msg + "\n\n— " + name + " (" + email + ")";
        window.location.href = "mailto:" + D.links.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        status.className = "form-status ok"; status.textContent = "Se abrió tu aplicación de correo con el mensaje listo para enviar.";
      }
    });
  }

  /* ---------- Inicio ---------- */
  renderCerts(); renderRecs(); renderActs(); renderEdu(); renderExp(); renderProjects(); renderSkills();
  setupNav(); setupTerminal(); setupForm(); observeReveal(); loadRepos();
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
