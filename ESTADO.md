# Estado técnico — Dra. Vicenta Cubells

## Estado actual

Mockup estático completo del rediseño tras la auditoría de herencia y sustento del 25 de septiembre de 2026. Se aplica la regla central del proyecto: **lo publicado en la web original se hereda y rediseña**, registrando en `GAPS.md` la verificación de vigencia antes de una publicación real.

- **Ubicación y contacto**: Rectificada la inferencia errónea que situaba la consulta en Castellón de la Plana. La consulta está documentada en **Nules (provincia de Castellón)**, con dirección física en **C/ Faustino Valentín 9, 12520 Nules**, correo **hola@vicentacubells.com** y **médica colegiada nº 2664**, junto con los dos teléfonos públicos (964 671 300 y 616 42 43 25).
- **Método PnK® recuperado**: Reconstruido con los elementos propios publicados en la web original: control médico prescriptor en CLIN&DIET diferenciado del ecosistema de apoyo PnK® (dietistas-coach, técnicos y Club PnK®), abordaje de la **lipoinflamación**, formulación **ProteinDHA®**, suplementación con **DHA**, y la estructura documentada de **dos momentos y cinco pasos**. Todo redactado con prudencia sanitaria y sin promesas de eficacia garantizada.
- **CLIN&DIET**: Recuperada la trayectoria histórica con inicio de actividad documentado en 2007 y un inventario claro y compacto de la oferta publicada (tratamiento médico y dietético, consejo nutricional, actividad física, apoyo emocional, dietas adaptadas y actividades grupales como alimentación consciente, sofrología, cocina y salidas), distinguiendo la oferta histórica de la confirmación de disponibilidad actual en consulta. Se mantiene la reserva para fotografía autorizada del espacio real.
- **Perfil profesional**: Incorporados los estudios de Sofrología Médica, Diplomatura en Traumatología Laboral, charlas de alimentación saludable y preparación al parto, la colegiación nº 2664 y la contextualización de los «más de 30 años de experiencia» como declaración histórica fechada.
- **Primera consulta**: Desacopladas las promesas operativas y protocolos cerrados; presentada de forma transparente como una **propuesta orientativa de experiencia**, preservando la mención documentada de «cita sin compromiso» (sin equipararla a gratuidad).
- **Preguntas frecuentes**: Incorporadas preguntas procedentes de la FAQ original (lipoinflamación, ProteinDHA®, DHA, etapas del método, equipo prescriptor vs. soporte), con respuestas prudentes y sin atribución de prácticas no sustentadas.
- **Textos legales y privacidad**: Corregida la contradicción sobre fuentes (se especifica el autoalojamiento local en WOFF2) e incorporados los datos de titularidad, sede en Nules y colegiación documentados, dejando los campos sin fuente (NIF, condiciones RGPD definitivas) marcados honestamente como pendientes de la asesoría legal.

## Base técnica

- Framework: Astro 7 + TypeScript + CSS nativo (sin dependencias adicionales).
- Tipografías: Cormorant Garamond y DM Sans autoalojadas localmente en WOFF2 en `public/fonts/`, servidas mediante `@font-face` con `font-display: swap` y fallbacks del sistema (`Georgia, serif` y `system-ui, sans-serif`), con preloads en `BaseLayout.astro`. Cero llamadas a Google Fonts.
- Base GitHub Pages: `/doblessa-vicenta-cubells/` (`https://edgarlopez95.github.io/doblessa-vicenta-cubells/`).
- Validación: `npm run build` genera 10 páginas estáticas + `robots.txt` + `sitemap.xml` sin errores ni advertencias.
- Meta robots: `<meta name="robots" content="noindex, follow" />` incondicional en todas las páginas por prudencia YMYL.
- Datos estructurados: JSON-LD con `WebSite`, `Person` (nombre, colegiación, teléfonos, email, dirección en Nules), `MedicalWebPage` / `ProfilePage` / `AboutPage` / `ContactPage` y `BreadcrumbList`. Cero schemas de `FAQPage`.

## Rutas creadas

| Ruta | Página | Robots |
|---|---|---|
| `/` | Inicio | `noindex, follow` |
| `/consulta-control-peso-castellon/` | Consulta (servicio principal) | `noindex, follow` |
| `/metodo-pnk-castellon/` | Método PnK® (dos momentos, cinco pasos, ProteinDHA®) | `noindex, follow` |
| `/como-es-la-primera-consulta/` | Primera valoración (propuesta orientativa) | `noindex, follow` |
| `/dra-vicenta-cubells/` | Perfil profesional (colegiada 2664, credenciales completas) | `noindex, follow` |
| `/clinica/` | La consulta CLIN&DIET (historia 2007, inventario de servicios) | `noindex, follow` |
| `/preguntas-frecuentes/` | FAQ extensa con preguntas originales de PnK® | `noindex, follow` |
| `/contacto/` | Solicita valoración (dirección en Nules, email, colegiación) | `noindex, follow` |
| `/politica-de-privacidad/` | Legal (borrador con datos documentados y WOFF2 local) | `noindex, follow` (fuera del sitemap) |
| `/aviso-legal/` | Legal (borrador con datos documentados en Nules) | `noindex, follow` (fuera del sitemap) |
| `/sitemap.xml`, `/robots.txt` | Endpoints estáticos | — |

## Clasificación de datos pendientes (GAPS)

1. **Datos heredados de la web original pendientes de confirmar vigencia**:
   - Vigencia de la colegiación médica nº 2664 e identificación del Colegio Oficial (COM Castellón u otro).
   - Vigencia de la sede física en C/ Faustino Valentín 9, Nules (Castellón).
   - Acceso operativo al buzón hola@vicentacubells.com.
   - Verificación documental de títulos universitarios y acreditaciones formativas.
   - Decisión sobre el uso del hito histórico «más de 30 años de experiencia».
   - Disponibilidad actual de talleres grupales de CLIN&DIET (alimentación consciente, sofrología, salidas).
   - Autorización de uso de marca y acuerdo formal con PronoKal Group / Nestlé Health Science.

2. **Datos no encontrados (pendientes de provisión por cliente/legal)**:
   - NIF de la doctora o CIF de la sociedad titular.
   - Franjas horarias de apertura y recepción telefónica de la consulta física.
   - Fotografías reales y autorizadas de las instalaciones de CLIN&DIET en Nules.
   - Tarifas oficiales de consulta o confirmación de política de precio exclusivamente por teléfono.
   - Redacción legal definitiva de política de privacidad y aviso legal con canal formal ARCO.
   - Backend seguro y pasarela de formulario para la web en producción.
   - Saneamiento de malware/casino en el hosting del dominio original antes de redirigir.
   - Autorización formal para retirar la directiva `noindex, follow` al publicar en dominio canónico.

## Límites y bloqueos

- No hay bloqueos técnicos en el mockup estático.
- Las decisiones clínicas, de contratación legal, de marca o de backend corresponden al cliente y al orquestador.
