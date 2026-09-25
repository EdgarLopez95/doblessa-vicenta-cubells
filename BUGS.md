# BUGS — Dra. Vicenta Cubells (CLIN&DIET)

Registro de incidencias, vulnerabilidades técnicas, inconsistencias de navegación y datos estructurados detectados durante la auditoría del código y resueltos.

---

### BUG-01: Inyección indebida de schema `FAQPage` en JSON-LD
- **Severidad**: Alta (SEO / Calidad de datos estructurados Google).
- **Descripción**: `src/layouts/BaseLayout.astro` inyectaba un nodo con `@type: 'FAQPage'` de forma automática cada vez que se pasaba el prop `faqs`, generando schema FAQ en 5 páginas (`/`, `/consulta-control-peso-castellon/`, `/metodo-pnk-castellon/`, `/como-es-la-primera-consulta/` y `/preguntas-frecuentes/`). Además, Google ha restringido severamente los rich snippets de FAQPage a sitios gubernamentales y de salud de alta autoridad oficial. En un mockup sin revisión clínica aprobada, marcar FAQs como schema formal resultaba contraproducente.
- **Resolución**: Se eliminó por completo la generación del nodo `FAQPage` y la variante `FAQPage` de `PageType` en `BaseLayout.astro`. En `preguntas-frecuentes.astro` se actualizó `pageType` a `MedicalWebPage`. Las preguntas y respuestas en HTML se conservan íntegras para los usuarios.

---

### BUG-02: Ausencia de directiva `noindex` en páginas principales en entorno de pruebas
- **Severidad**: Alta (YMYL / Riesgo reputacional y de indexación cruzada).
- **Descripción**: Las 8 páginas principales del sitio se renderizaban sin `<meta name="robots" content="noindex, follow" />` (solo estaba activo en páginas legales). Dado que el sitio se aloja en `github.io`, con el nombre real de la profesional y mientras el dominio original `vicentacubells.com` contiene inyecciones de casino, existía riesgo de canibalización e indexación prematura de contenidos en borrador.
- **Resolución**: Se forzó la emisión incondicional de `<meta name="robots" content="noindex, follow" />` en `BaseLayout.astro` para todas las pantallas del mockup.

---

### BUG-03: Omisión de «La clínica» en el menú de navegación móvil
- **Severidad**: Media (UX / Arquitectura de información responsive).
- **Descripción**: El menú móvil (< 1180px) solo listaba los 5 elementos principales y añadía manualmente «Cómo es la primera consulta». La página «La clínica» (`/clinica/`) quedaba inaccesible desde el menú móvil a menos que el usuario navegase a través del pie o de enlaces de texto secundarios.
- **Resolución**: Se creó una sublista semántica (`.mobile-menu__sublist`) bajo «La consulta» en el menú móvil que muestra con claridad tanto «Cómo es la primera consulta» como «La clínica», con indentación y flechas de navegación visual.

---

### BUG-04: Riesgo de doble `aria-current="page"` en móvil para páginas secundarias
- **Severidad**: Baja (Accesibilidad WCAG).
- **Descripción**: Al navegar a páginas hijas de «La consulta», existía riesgo de que el elemento padre y el elemento hijo recibieran simultáneamente `aria-current="page"` en el menú móvil, confundiendo a lectores de pantalla y usuarios de teclado.
- **Resolución**: Se ajustó la función `isMobileCurrent` en `Header.astro` para que evalúe si la página activa es una de las sub-páginas (`currentInSub`), asegurando que únicamente la página exacta en navegación reciba `aria-current="page"`.

---

### BUG-05: Presencia de atributos `name` en inputs tipo radio del formulario demostrativo
- **Severidad**: Media (Seguridad y privacidad).
- **Descripción**: Los selectores de medio de contacto y franja horaria en `DemoForm.astro` incluían `name="demo-medio"` y `name="demo-franja"`. Si un usuario desactivaba JavaScript o realizaba un envío no interceptado, los valores se serializaban en la barra de direcciones (query params GET).
- **Resolución**: Se eliminaron todos los atributos `name` del formulario. La exclusión mutua de los radios se gestiona mediante `data-group` y JavaScript. Adicionalmente, el formulario cuenta con `action="javascript:void(0);"`, `onsubmit="return false;"` y `event.preventDefault()`.

---

### BUG-06: Disparidad en la visibilidad de la fecha de revisión médica
- **Severidad**: Media (Transparencia médica / E-E-A-T).
- **Descripción**: La nota de fecha de actualización y advertencia de contenido pendiente de revisión médica solo se mostraba en 3 páginas específicas, quedando oculta en el resto de páginas clave (como el perfil de la doctora, la clínica o la página de inicio).
- **Resolución**: Se incorporó el componente `ReviewNote` de manera persistente en `Footer.astro` con el texto normativo exacto: *«Contenido informativo actualizado en septiembre de 2026. Pendiente de revisión médica por la Dra. Vicenta Cubells antes de su publicación.»*, asegurando contraste accesible sobre fondo oscuro en todas las pantallas (10.37:1).

---

### BUG-07: Falta de avisos normativos de tarifas y NAP en la sección de contacto
- **Severidad**: Media (Expectativas de usuario y prudencia sanitaria).
- **Descripción**: La sección de contacto no especificaba la política de precios de la valoración médica ni aclaraba el estado de la dirección postal, horario y email, dando lugar a posibles malentendidos.
- **Resolución**: Se incorporó junto a los teléfonos el aviso: *«El importe de la valoración se consulta por teléfono o en la propia cita. Esta web no publica tarifas.»*, y en el pie y sección de ubicación el bloque: *«Ubicación, horario y correo de la consulta: pendientes de confirmar por CLIN&DIET. Mientras tanto, llama a los teléfonos de cabecera.»*.

---

### BUG-08: Prop `faqs` muerta e inoperativa en `BaseLayout.astro`
- **Severidad**: Baja (Higiene de código y arquitectura Astro).
- **Descripción**: Tras desacoplar las preguntas del schema de datos estructurados, la prop `faqs` en `BaseLayout.astro` continuaba declarada e importando `FaqItem`, y 5 páginas le pasaban arrays innecesariamente sin ningún uso en el layout.
- **Resolución**: Se eliminó la prop `faqs` y el tipo `FaqItem` de `BaseLayout.astro`, y se retiró el atributo `faqs={...}` de `index.astro`, `consulta-control-peso-castellon.astro`, `metodo-pnk-castellon.astro`, `como-es-la-primera-consulta.astro` y `preguntas-frecuentes.astro`.

---

### BUG-09: Dependencia externa de Google Fonts (`fonts.googleapis.com` / `fonts.gstatic.com`)
- **Severidad**: Media (Privacidad RGPD y rendimiento web).
- **Descripción**: La tipografía de diseño (`Cormorant Garamond` y `DM Sans`) dependía de conexiones a servidores de Google Fonts, generando transferencia de IP de usuarios y bloqueos de red externos.
- **Resolución**: Se descargaron localmente los archivos WOFF2 en `public/fonts/`, se declararon las reglas `@font-face` en `src/styles/global.css` con `font-display: swap` y fallbacks nativos (`Georgia, serif` y `system-ui, sans-serif`), se retiraron todos los enlaces a `googleapis` y `gstatic`, y se añadieron preloads de los 2 WOFF2 críticos en `BaseLayout.astro`.

---

### BUG-10: Inferencia geográfica errónea de ubicación en Castellón de la Plana y omisión de datos de contacto documentados
- **Severidad**: Alta (Fidelidad de negocio / SEO local / Confianza médica).
- **Descripción**: El mockup situaba la consulta en Castellón de la Plana e indicaba que la dirección, el correo corporativo y la colegiación médica «faltaban» o estaban «pendientes de aportar», cuando la web original publicaba explícitamente la dirección en Nules (Castellón), el correo hola@vicentacubells.com y la colegiación médica nº 2664.
- **Resolución**: Se corrigieron todos los textos y metadatos para situar la consulta con exactitud en Nules (provincia de Castellón), se reincorporaron la dirección física (C/ Faustino Valentín 9, 12520 Nules), el correo y la colegiación nº 2664 en contacto, clínica, perfil, pie, JSON-LD y textos legales, registrando en `GAPS.md` la comprobación de vigencia administrativa antes de publicación real.

---

### BUG-11: Contradicción sobre el origen de fuentes tipográficas en la política de privacidad
- **Severidad**: Baja (Transparencia legal RGPD).
- **Descripción**: `src/pages/politica-de-privacidad.astro` indicaba que las fuentes se cargaban desde Google Fonts, a pesar de que el proyecto ya las sirve localmente en formato WOFF2.
- **Resolución**: Se corrigió la redacción en la política de privacidad especificando el autoalojamiento local en WOFF2 y la ausencia total de transferencias a servidores externos de Google Fonts.
