const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Ruta interna compatible con el `base` de GitHub Pages. `url('contacto/')` → `/doblessa-vicenta-cubells/contacto/`. */
export function url(path = ''): string {
  return `${base}/${path.replace(/^\/+/, '')}`;
}

/** URL absoluta (canonical, Open Graph, JSON-LD, sitemap). */
export function absoluteUrl(path = ''): string {
  return new URL(url(path), import.meta.env.SITE).href;
}
