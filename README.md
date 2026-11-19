# Portafolio de Ciberseguridad — Anny Vargas

Sitio web estático (HTML + CSS + JavaScript, sin dependencias ni paso de compilación), con identidad visual Purple Team.
Se publica gratis en **GitHub Pages**, con HTTPS y disponible 24/7 sin que tu computadora esté encendida.

> **¿Por qué no React?** Este portafolio es de contenido (no una aplicación con estado complejo). HTML/CSS/JS puro carga más rápido, no necesita `npm`, no se rompe con actualizaciones de librerías y GitHub Pages lo publica tal cual. Los "componentes reutilizables" son las funciones de `assets/js/app.js` que generan cada tarjeta a partir de los datos.

---

## 1. Estructura

```
.
├── index.html                  # Estructura de la página (hero, sobre mí, contacto…)
├── data/content.js             # ★ TODO tu contenido: certificaciones, proyectos, etc.
├── assets/
│   ├── css/styles.css          # Estilos y paleta (variables en :root)
│   ├── js/app.js               # Genera las tarjetas, modal, GitHub API, formulario
│   └── img/                    # Imágenes: badges/, projects/, recognitions/, activities/
├── .github/workflows/deploy.yml# Despliegue automático a GitHub Pages
├── 404.html · robots.txt · sitemap.xml · .nojekyll
└── docs/DOMINIO-DNS-IP.md      # Dominio propio, DNS, IP fija y costos
```

**Regla de oro:** para cambiar contenido solo editas `data/content.js`.

## 2. Ver el sitio en tu computadora (opcional)

Abre `index.html` con doble clic, o mejor, desde la carpeta del proyecto:

```bash
python -m http.server 8000     # luego abre http://localhost:8000
```

## 3. Subir el proyecto a GitHub

El nombre del repositorio **debe** ser `Anny-Vargas.github.io` para que el sitio quede en `https://anny-vargas.github.io/` (sitio de usuario).

1. Entra a GitHub con tu cuenta → **New repository**.
2. Nombre: `Anny-Vargas.github.io` · visibilidad **Public** · no agregues README (ya existe).
3. En tu computadora, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/Anny-Vargas/Anny-Vargas.github.io.git
git push -u origin main
```

(Si no usas la terminal: en la página del repo → **Add file → Upload files**, y arrastra todo el contenido de la carpeta, incluida `.github`. Si tu sistema oculta carpetas que empiezan con punto, usa la terminal.)

## 4. Publicar con GitHub Pages (despliegue automático)

1. En el repo: **Settings → Pages**.
2. En **Build and deployment → Source** elige **GitHub Actions**.
3. Ve a la pestaña **Actions**: verás el workflow *Deploy a GitHub Pages* ejecutándose. Cuando termine en verde, el sitio está en vivo en `https://anny-vargas.github.io/`.

Desde ese momento, **cada `git push` a `main` actualiza el sitio automáticamente** (tarda ~1 minuto). También puedes editar archivos directamente en github.com (lápiz ✏️ → *Commit changes*) y se publicará solo.

Si el workflow falla en "Configure Pages", confirma el paso 2 (Source = GitHub Actions).

> Si usas otro nombre de repositorio (por ejemplo `portafolio`), el sitio quedará en `https://anny-vargas.github.io/portafolio/` y deberás cambiar las URLs en `index.html` (canonical, og:url, JSON-LD), `sitemap.xml`, `robots.txt` y las rutas con `/` inicial de `404.html`.

## 5. Cómo agregar contenido (todo en `data/content.js`)

Copia un bloque `{ ... }` de la lista, pégalo debajo (separado por coma) y edita los textos. Un campo en `null` o `""` simplemente no se muestra.

### Nueva certificación / insignia
```js
{
  name: "Nombre de la certificación",
  issuer: "Institución",
  date: "2026",
  type: "badge",                       // "badge" = insignia digital · "traditional" = sin insignia digital
  badgeImage: "assets/img/badges/mi-insignia.png",
  verifyUrl: "https://www.credly.com/badges/xxxxxxxx",
  description: "Breve descripción."
},
```
Para la imagen: en Credly abre la insignia → descarga la imagen y guárdala en `assets/img/badges/`. Para el enlace: botón de compartir → copiar enlace público de la insignia. Si no hay enlace, deja `verifyUrl: null`.

### Nuevo reconocimiento
Agrégalo a `recognitions: [ ... ]` (mientras esté vacío se muestra "Próximamente"):
```js
{ name: "…", issuer: "…", year: "2026", description: "…", image: "assets/img/recognitions/foto.jpg" }
```

### Nueva actividad
En `activities`: `name`, `period` (ej. "2025–2026"), `role`, `description`, `image` (opcional), `icon` (`users`, `terminal`, `shield`, `bug`, `award`, `search`, `network`, `server`) y `featured: true` para resaltarla.

### Nuevo proyecto
En `projects`: `id`, `name`, `icon`, `image` (captura en `assets/img/projects/`), `tech: [...]`, `description`, `objective`, `learnings: [...]` y `github: "https://github.com/Anny-Vargas/mi-repo"`.

**Proyectos desde GitHub (automático):** debajo de los proyectos destacados, el sitio consulta la API pública de GitHub y muestra tus 6 repositorios públicos más recientes (excluye forks, archivados y el repo del propio portafolio) con su descripción, lenguaje y botón "Visitar proyecto". Solo necesitas **escribir una descripción** en cada repositorio (campo *About* en GitHub). Si quieres que un proyecto salga con más detalle, agrégalo también a `projects`.

### Formación, experiencia y habilidades
- `education`: completa `institution` y `period` del Bachillerato cuando tengas los datos.
- `experience`: agrega un bloque nuevo por cada práctica o empleo; `showExperiencePlaceholder` controla la tarjeta "Próximas experiencias".
- `skills`: `level` 0 = En formación, 1 = Básico, 2 = Intermedio, 3 = Avanzado. **Ajusta los niveles a tu criterio**: los que puse son una propuesta inicial.

### Imágenes
Usa formatos web (`.webp`, `.jpg`, `.png`), de preferencia menores a 300 KB. Las rutas empiezan por `assets/…`.

### Formulario de contacto
Por defecto abre el correo del visitante con el mensaje ya escrito (funciona siempre, sin servidor). Para recibir los mensajes directamente: crea una cuenta gratuita en [formspree.io](https://formspree.io), crea un formulario con tu correo y pega su URL en `formEndpoint` (`https://formspree.io/f/xxxxxxx`).

## 6. Personalizar colores
En `assets/css/styles.css`, bloque `:root` (`--purple`, `--neon`, `--surface`, `--silver`, `--bg`, `--text`).

## 7. Seguridad, rendimiento y accesibilidad incluidos
- Política CSP estricta (sin scripts inline), `rel="noopener noreferrer"` en enlaces externos, textos insertados con `textContent`, validación de URLs, campo anti-spam y HTTPS forzado por GitHub Pages.
- Sin librerías: ~50 KB de código; imágenes con `loading="lazy"`; animaciones solo con CSS y respetan `prefers-reduced-motion`.
- Enlace "Saltar al contenido", navegación con teclado, `aria-*`, contraste alto, modal accesible (`<dialog>`), diseño responsive.
- SEO: `title`, `description`, Open Graph, datos estructurados JSON-LD, `sitemap.xml` y `robots.txt`. Cuando esté en línea, registra el sitio en [Google Search Console](https://search.google.com/search-console).

## 8. Dominio propio, DNS e IP fija
Lee [`docs/DOMINIO-DNS-IP.md`](docs/DOMINIO-DNS-IP.md). Resumen: **no necesitas IP fija**; GitHub Pages ya te da alojamiento permanente con HTTPS.
