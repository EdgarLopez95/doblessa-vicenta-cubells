# Estado técnico — Dra. Vicenta Cubells

## Estado actual

Mockup estático completo del rediseño: 10 pantallas, sistema visual propio, componentes reutilizables, SEO técnico y formulario demostrativo. Huecos de confianza y SEO cerrados: schema FAQPage retirado a propósito de JSON-LD, directiva `noindex,follow` global en todas las pantallas por prudencia YMYL (mockup en github.io + inyecciones de casino en dominio legacy), fecha de revisión médica visible en el pie de todas las páginas, avisos normativos de NAP, tarifas y marca PnK®, y navegación móvil completada con «La clínica». Documentados `GAPS.md` y `BUGS.md`. Presentable al cliente; contenido pendiente de validación clínica, legal y de marca.

## Base técnica

- Framework: Astro 7 + TypeScript + CSS nativo (sin Tailwind ni dependencias nuevas).
- `base`: `/doblessa-vicenta-cubells` (configuración original de `astro.config.mjs` sin cambios).
- GitHub Pages: `https://edgarlopez95.github.io/doblessa-vicenta-cubells/`.
- Validación: `npm run build`.
- Meta robots: `noindex, follow` en todas las páginas por prudencia YMYL hasta el despliegue en dominio canónico limpio.

## Rutas creadas

| Ruta | Página | Robots |
|---|---|---|
| `/` | Inicio | `noindex, follow` |
| `/consulta-control-peso-castellon/` | Consulta (servicio principal) | `noindex, follow` |
| `/metodo-pnk-castellon/` | Método PnK® | `noindex, follow` |
| `/como-es-la-primera-consulta/` | Primera valoración | `noindex, follow` |
| `/dra-vicenta-cubells/` | Perfil profesional | `noindex, follow` |
| `/clinica/` | La clínica CLIN&DIET | `noindex, follow` |
| `/preguntas-frecuentes/` | FAQ extensa (4 categorías) | `noindex, follow` |
| `/contacto/` | Solicita una valoración | `noindex, follow` |
| `/politica-de-privacidad/` | Legal (borrador) | `noindex, follow` (fuera del sitemap) |
| `/aviso-legal/` | Legal (borrador) | `noindex, follow` (fuera del sitemap) |
| `/sitemap.xml`, `/robots.txt` | Endpoints estáticos | — |

## Componentes construidos (`src/components/`)

`Header` (sticky, navegación, CTA persistente, sublista móvil para «La consulta» con «Cómo es la primera consulta» y «La clínica», menú accesible con Escape y `aria-expanded` sin duplicar `aria-current`) · `Footer` (navegación, teléfonos, legal, aviso médico, nota de revisión médica con fecha y aviso de NAP pendiente) · `MobileActionBar` (Llamar + Solicitar valoración en <720 px; oculta en contacto) · `Hero` (inicio / interior, con imagen o ficha lateral) · `Breadcrumbs` · `SectionHeader` · `PillarCard` · `Timeline` (horizontal / vertical) · `Credentials` (compacto / completo, con aviso de verificación) · `ResourceCard` (recurso de muestra) · `Faq` (`<details>` nativo) · `DemoForm` (sin atributos name, seguro contra envíos GET) · `CtaBlock` (oscuro / sage) · `PhoneList` · `ReviewNote` · `Icon` (iconos lineales SVG) · `SectionNav` (navegación local de la rama «La consulta») · `StatementBand` (banda editorial a todo el ancho).

Layout SEO: `src/layouts/BaseLayout.astro` (title, description, canonical, Open Graph, `noindex,follow` global, preload del hero y JSON-LD sin FAQPage). Datos: `src/data/site.ts` y `src/data/faqs.ts`. Rutas: `src/lib/url.ts` (`url()` y `absoluteUrl()` sobre `import.meta.env.BASE_URL`).

## Imágenes copiadas (`public/images/`)

- `marca/logo-dra-vicenta-cubells.png` → logotipo blanco, usado en el pie.
- `inicio/consulta-control-de-peso.png` → **es el logotipo CLIN&DIET en gris, no una foto**; usado en la cabecera.
- `doctora/dra-vicenta-cubells-retrato.jpg` → hero de inicio y perfil (alt «Dra. Vicenta Cubells», precargada).
- `doctora/dra-vicenta-cubells-en-consulta.jpg` → módulo de la doctora en inicio y perfil (alt «Dra. Vicenta Cubells en consulta», lazy).

## Decisiones de implementación

- Elemento memorable: la barra diagonal de latón del logotipo CLIN&DIET reutilizada en etiquetas, hero, timeline y CTA.
- Tokens obligatorios en `:root`; derivados semánticos mínimos (líneas, borde de controles y `--error-700` para errores de formulario).
- Navegación completa desde 1180 px; por debajo, menú móvil con CTA, teléfonos y sublista de «La consulta» (`como-es-la-primera-consulta/` y `clinica/`).
- Jerarquía de navegación: `/como-es-la-primera-consulta/` y `/clinica/` son hijas de «La consulta». El menú de escritorio marca la sección padre, el menú móvil muestra la sublista y solo la coincidencia exacta recibe `aria-current="page"`. Los breadcrumbs tienen tres niveles y las tres páginas comparten SectionNav local.
- El pie usa un verde más profundo (`--clinic-950`) con filete de latón, navegación en dos columnas, enlaces legales y bloque persistente de revisión médica fechada en septiembre de 2026.
- Formulario 100% libre de atributos `name`, con exclusión mutua de radios vía `data-group`, `preventDefault`, `action="javascript:void(0);"` y `onsubmit="return false;"`: imposible serializar datos en la URL ni aun desactivando JavaScript.
- JSON-LD prudente: `WebSite`, `Person` (nombre, «Médica», teléfonos públicos e imagen, sin address), `MedicalWebPage` / `ProfilePage` / `AboutPage` / `ContactPage`, `BreadcrumbList`. **Se eliminó a propósito el schema `@type: FAQPage`** (Google ha limitado los rich snippets de FAQ y el contenido está pendiente de revisión clínica). Sin dirección, reseñas, ofertas ni resultados.
- La foto «en consulta» no muestra la clínica: en `/clinica/` hay un bloque neutro reservado con el texto explícito *«Falta una fotografía autorizada de la consulta CLIN&DIET»*, en lugar de presentarla como el espacio.
- Se descartó el revelado al hacer scroll: ocultaba pasos del timeline en capturas y herramientas que no desplazan. Solo hay transiciones de 200 ms en hover, foco y acordeón, anuladas con `prefers-reduced-motion`.
- Documentación de control y auditoría: `GAPS.md` para elementos pendientes del cliente/médica/legal y `BUGS.md` para registro de correcciones técnicas. Documentos de diseño en `design/brief.md` y `design/direction.md`.

## Resultado de build y QA

- `npm run build`: 10 páginas + `robots.txt` + `sitemap.xml`, sin errores ni avisos.
- Un único H1 por página; canonical correcto bajo la base; sin `href="#"`, sin enlaces vacíos ni rutas absolutas sin base; todos los enlaces internos resuelven a archivos generados.
- Capturas revisadas en 390, 768, 1024 y 1440 px sin desbordamiento horizontal.
- Formulario verificado en navegador: 4 errores en envío vacío, foco en el primero, mensaje demostrativo al enviar válido, sin navegación ni errores de consola.

## Crítica y refinamiento

- Ronda 1 de crítica independiente: 73.5/100, sin bloqueantes (`design/critiques/ronda-1.md`).
- Refinamiento (`83c5852`):
  - Nuevo componente `StatementBand` con bandas editoriales a todo el ancho.
  - La diagonal de latón se aplica al timeline y a las fotos enmarcadas.
  - Todo el texto de contenido sube a 17 px.
  - Los avisos de revisión salen de los heroes y se compactan.
  - Los placeholders se reducen a bandas bajas.
  - Nueva maquetación de los pilares a 1024 px y en móvil.
  - El hero del perfil usa la foto «en consulta» recortada en vertical.
- Ronda 2: 78.3/100, sin bloqueantes (`design/critiques/ronda-2.md`).
- Refinamiento de la ronda 3:
  - En la home, "Quién te atiende" pasa a declaración a todo el ancho con los principios en fila.
  - Nueva variante compacta del timeline, que solo aparece completo en la página de primera consulta.
  - En contacto, el orden en móvil es teléfonos → formulario → pasos.
  - Se ocultan con `clip-path` los lemas pequeños del logotipo en cabecera y pie; los archivos originales no se tocan.
  - Todos los CTA finales van en verde.
  - En el perfil, el aviso de revisión pasa a la columna izquierda (sticky).
  - Recortes cuadrados en el segundo uso de cada foto.
- Los textos de CTA se mantienen porque los fija el encargo por página.
- Ronda 3: 81.25/100, todas las categorías ≥7.5, sin bloqueantes (`design/critiques/ronda-3.md`).
- Refinamiento de la ronda 4 (última):
  - Nuevas composiciones en páginas interiores: preguntas en rejilla con numerales, temas de consulta en 2×2 y banda de declaración en clínica.
  - "La propuesta" pasa a 3 columnas.
  - Las cajas de detalle de la primera consulta aportan información nueva.
  - Rejillas fijas para los pasos compactos.
  - Hero en dos columnas a 768px.
  - Radios en columna en móvil.
  - Logo más grande.
  - Se elimina la franja bajo el pie en móvil.
- **Ronda 4 (final): 83.75/100.** Todas las categorías ≥8 y sin bloqueantes, pero no llega al umbral de 85 (`design/critiques/ronda-4.md`). Evolución: 73.5 → 78.3 → 81.25 → 83.75.
- Correcciones posteriores a la ronda 4 (sin nueva puntuación, se agotaron las rondas):
  - La banda de declaración queda solo en inicio y método.
  - Se elimina la sección vacía "El espacio" de clínica y su estado pasa a la ficha del hero.
  - Corregido un bug: faltaba la rejilla de 2 columnas de las preguntas de método.
  - Se retiran los pasos compactos de consulta.
  - Orden móvil corregido en ubicación de contacto.
  - La barra de acciones móvil aparece solo cuando los CTA del hero salen de pantalla; sin JS se ve siempre.
  - Ficha lateral del hero alineada arriba.
  - Logo del pie sin carga diferida.

## Próxima acción

Presentar el mockup al cliente y revisar con la doctora los contenidos marcados abajo. Si se quiere superar el 85 de la crítica, lo siguiente sería incorporar fotografías reales y autorizadas de la consulta: con solo dos fotos, la variedad visual tiene un techo.

## Validación pendiente (doctora, legal, marca)

- **Credenciales**: Licenciada en Medicina y Cirugía, Máster en Nutrición y Dietética, Especialista en Medicina del Trabajo y formadora de métodos Pronokal / PnK / Diaprokal. Se tomaron de la auditoría y deben verificarse documentalmente.
- **Número de colegiación**: pendiente de aportar.
- **Omitido a propósito**: los «más de 30 años de experiencia» de la web antigua.
- **Uso de marca**: PnK® / Pronokal / Diaprokal y descripción del método, pendientes de validación clínica, legal y con el titular de la marca.
- **Logotipo blanco**: incluye el lema «medicina estética», que no encaja con el posicionamiento de consulta médica de control de peso. Conviene una versión sin lema o validarlo.
- **Fotografías**: confirmar vigencia y permiso de uso. La foto «en consulta» no está tomada en la clínica. Faltan fotos reales del espacio.
- **NAP y ubicación**: dirección, horario, email y mapa pendientes; no se muestran.
- **Textos**: copy de enfoque, FAQs y proceso de primera consulta (incluido que «la consulta te contacta») pendientes de revisión médica.
- **Legal**: privacidad y aviso legal son borradores con campos pendientes (titular, NIF, conservación, destinatarios, canal de derechos).
- **Formulario real**: requiere solución segura de envío y consentimiento antes de publicar.
- **Indexación**: el mockup es indexable en github.io con el nombre de la doctora; valorar `noindex` global hasta tener los contenidos aprobados.
- **Web antigua**: sigue pendiente limpiar el contenido de casino inyectado antes de migrar o redirigir.

## Límites y bloqueos

- No hay bloqueos técnicos.
- Las decisiones de marca, alcance o contenido nuevo vuelven al orquestador.
