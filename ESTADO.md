# Estado técnico — Dra. Vicenta Cubells

## Estado actual

Mockup estático completo del rediseño: 10 pantallas, sistema visual propio, componentes reutilizables, SEO técnico y formulario demostrativo. Presentable al cliente; contenido pendiente de validación clínica, legal y de marca.

## Base técnica

- Framework: Astro 7 + TypeScript + CSS nativo (sin Tailwind ni dependencias nuevas).
- `base`: `/doblessa-vicenta-cubells` (configuración original de `astro.config.mjs` sin cambios).
- GitHub Pages: `https://edgarlopez95.github.io/doblessa-vicenta-cubells/`.
- Validación: `npm run build`.

## Rutas creadas

| Ruta | Página | Indexable |
|---|---|---|
| `/` | Inicio | Sí |
| `/consulta-control-peso-castellon/` | Consulta (servicio principal) | Sí |
| `/metodo-pnk-castellon/` | Método PnK® | Sí |
| `/como-es-la-primera-consulta/` | Primera valoración | Sí |
| `/dra-vicenta-cubells/` | Perfil profesional | Sí |
| `/clinica/` | La clínica CLIN&DIET | Sí |
| `/preguntas-frecuentes/` | FAQ extensa (4 categorías) | Sí |
| `/contacto/` | Solicita una valoración | Sí |
| `/politica-de-privacidad/` | Legal (borrador) | `noindex`, fuera del sitemap |
| `/aviso-legal/` | Legal (borrador) | `noindex`, fuera del sitemap |
| `/sitemap.xml`, `/robots.txt` | Endpoints estáticos | — |

## Componentes construidos (`src/components/`)

`Header` (sticky, navegación, CTA persistente, menú móvil accesible con Escape y `aria-expanded`) · `Footer` (navegación, teléfonos, legal, aviso médico) · `MobileActionBar` (Llamar + Solicitar valoración en <720 px; oculta en contacto) · `Hero` (inicio / interior, con imagen o ficha lateral) · `Breadcrumbs` · `SectionHeader` · `PillarCard` · `Timeline` (horizontal / vertical) · `Credentials` (compacto / completo, con aviso de verificación) · `ResourceCard` (recurso de muestra) · `Faq` (`<details>` nativo) · `DemoForm` · `CtaBlock` (oscuro / sage) · `PhoneList` · `ReviewNote` · `Icon` (iconos lineales SVG).

Layout SEO: `src/layouts/BaseLayout.astro` (title, description, canonical, Open Graph, `noindex` opcional, preload del hero y JSON-LD). Datos: `src/data/site.ts` y `src/data/faqs.ts`. Rutas: `src/lib/url.ts` (`url()` y `absoluteUrl()` sobre `import.meta.env.BASE_URL`).

## Imágenes copiadas (`public/images/`)

- `marca/logo-dra-vicenta-cubells.png` → logotipo blanco, usado en el pie.
- `inicio/consulta-control-de-peso.png` → **es el logotipo CLIN&DIET en gris, no una foto**; usado en la cabecera.
- `doctora/dra-vicenta-cubells-retrato.jpg` → hero de inicio y perfil (alt «Dra. Vicenta Cubells», precargada).
- `doctora/dra-vicenta-cubells-en-consulta.jpg` → módulo de la doctora en inicio y perfil (alt «Dra. Vicenta Cubells en consulta», lazy).

## Decisiones de implementación

- Elemento memorable: la barra diagonal de latón del logotipo CLIN&DIET reutilizada en etiquetas, hero, timeline y CTA.
- Tokens obligatorios en `:root`; derivados semánticos mínimos (líneas, borde de controles y `--error-700` para errores de formulario).
- Navegación completa desde 1180 px; por debajo, menú móvil con CTA y teléfonos.
- Formulario sin atributos `name` y con `preventDefault`: incluso sin JavaScript no serializa datos en la URL. Valida junto a cada campo, enfoca el primer error y muestra el mensaje demostrativo exigido.
- JSON-LD prudente: `WebSite`, `Person` (nombre, «Médica», teléfonos públicos e imagen), `MedicalWebPage` / `ProfilePage` / `AboutPage` / `ContactPage` / `FAQPage`, `BreadcrumbList` y `FAQPage` solo con las FAQs visibles en cada página. Sin dirección, reseñas, ofertas ni resultados.
- La foto «en consulta» no muestra la clínica: en `/clinica/` hay un bloque neutro reservado para una fotografía autorizada, en lugar de presentarla como el espacio.
- Se descartó el revelado al hacer scroll: ocultaba pasos del timeline en capturas y herramientas que no desplazan. Solo hay transiciones de 200 ms en hover, foco y acordeón, anuladas con `prefers-reduced-motion`.
- No se generan variantes WebP/AVIF: las imágenes se sirven desde `public/` tal y como se pidió.
- Documentos de diseño en `design/brief.md` y `design/direction.md`. Las capturas de QA (`design/qa/`) quedan fuera de git.

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

## Próxima acción

Revisión con la doctora de los contenidos marcados abajo, y crítica de diseño independiente para pulir detalles.

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
