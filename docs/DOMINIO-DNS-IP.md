# Dominio, hosting, DNS e IP fija

## 1. ¿Necesito una IP pública fija? **No.**

Con GitHub Pages tu sitio vive en la infraestructura de GitHub, no en tu computadora ni en un servidor tuyo:

- Está disponible 24/7 desde cualquier parte del mundo, sin iniciar sesión, mientras el repositorio sea público.
- Usa HTTPS automáticamente (certificado gratuito).
- Las direcciones IP detrás de `anny-vargas.github.io` son **compartidas** por miles de sitios y GitHub puede cambiarlas. Por eso nunca se apunta a una IP: se usa el nombre (`anny-vargas.github.io`) o, con dominio propio, los registros DNS que indica GitHub.
- Una IP fija propia solo sirve si tú administras un servidor (VPS) y no aporta ventajas a un portafolio estático.

Tu dirección pública inmediata es: **https://anny-vargas.github.io/** (gratis).

## 2. Dominio propio (opcional, recomendado para marca profesional)

Ejemplo: `annyvargas.com` o `annyvargas.dev`.

**Costo aproximado** (verifica precios actuales): `.com` ≈ US$10–15 al año; `.dev` ≈ US$12–20; `.me`/`.net` ≈ US$10–20. Registradores comunes: Cloudflare Registrar (a precio de costo), Namecheap, Porkbun, Google/Squarespace Domains. El primer año suele tener descuento.

### Configuración con GitHub Pages

1. En el repo: **Settings → Pages → Custom domain** → escribe `www.annyvargas.com` (o el dominio base) → *Save*. GitHub crea un archivo `CNAME` en el repo (haz `git pull` para traerlo).
2. En el panel DNS de tu registrador agrega:

| Tipo | Nombre | Valor |
|------|--------|-------|
| CNAME | `www` | `anny-vargas.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA (opcional) | `@` | `2606:50c0:8000::153` · `2606:50c0:8001::153` · `2606:50c0:8002::153` · `2606:50c0:8003::153` |

   Confirma siempre las direcciones vigentes en la documentación oficial de GitHub ("Managing a custom domain for your GitHub Pages site"), porque pueden cambiar.
3. Espera la propagación DNS (minutos a 24 h). Luego en **Settings → Pages** marca **Enforce HTTPS** cuando esté disponible.
4. Actualiza en el proyecto la URL del sitio (`canonical`, `og:url`, JSON-LD en `index.html`, `sitemap.xml`, `robots.txt`).
5. Seguridad: en GitHub → tu perfil → **Settings → Pages → Verified domains** verifica el dominio para evitar que otros lo reclamen ("domain takeover").

Verificar DNS: `nslookup www.annyvargas.com` o `dig annyvargas.com +short`.

## 3. Alternativas de hosting (todas con acceso 24/7)

| Opción | Costo aprox. | IP fija | Comentario |
|--------|--------------|---------|------------|
| **GitHub Pages** (elegida) | Gratis | No (compartida) | Despliegue automático desde GitHub, HTTPS incluido. Ideal. |
| Cloudflare Pages / Netlify / Vercel | Gratis (plan básico) | No (CDN) | También se conectan al repo; buen rendimiento global. |
| VPS (DigitalOcean, Vultr, Hetzner, Linode) | ≈ US$4–6/mes | **Sí**, incluida | Tú administras Linux, Nginx, certificados y actualizaciones. Solo si quieres practicar administración de servidores. |
| IP fija/reservada extra en nube | ≈ US$0–5/mes | Sí | En algunos proveedores la IP asociada a un VPS es gratis; una IP reservada sin uso puede cobrarse. |
| Hosting compartido tradicional | ≈ US$3–10/mes | A veces (dedicada con costo extra) | Innecesario para un sitio estático. |
| Internet residencial con IP fija | Cargo extra del ISP | Sí | No recomendado: depende de tu casa y tu computadora encendida. |

### Si algún día quieres una IP fija (VPS)
1. Crea un VPS Ubuntu (≈ US$4–6/mes); te asignan una IPv4 pública fija.
2. Instala Nginx, copia los archivos del sitio a `/var/www/html` y activa HTTPS con Let's Encrypt (`certbot --nginx`).
3. En tu DNS crea un registro `A` apuntando a esa IP.
4. Mantén el servidor actualizado y con firewall (UFW). Es un buen proyecto de práctica de seguridad, pero añade mantenimiento que GitHub Pages te ahorra.

## 4. Recomendación
Empieza con `https://anny-vargas.github.io/` (gratis, permanente). Cuando quieras reforzar tu marca, compra un dominio de ~US$12/año y apúntalo a GitHub Pages. Reserva el VPS para proyectos de laboratorio.
