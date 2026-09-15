# GAPS — Dra. Vicenta Cubells (CLIN&DIET)

Este documento registra de forma exhaustiva todos los datos, autorizaciones, revisiones clínicas, aspectos legales y activos pendientes de confirmación o provisión por parte de la doctora, el titular de la marca y la asesoría legal antes de que este sitio pueda considerarse apto para producción y publicación en un dominio definitivo.

---

## 1. Credenciales y colegiación médica (YMYL)
- **Número de colegiación**: Pendiente de aportar por la Dra. Vicenta Cubells Santaolaria (Colegio Oficial de Médicos de Castellón o correspondiente). Imprescindible para el cumplimiento de la normativa sanitaria y transparencia profesional en la Comunidad Valenciana.
- **Titulaciones y especialidades**:
  - Licenciada en Medicina y Cirugía.
  - Máster en Nutrición y Dietética.
  - Especialista en Medicina del Trabajo.
  - Formadora de métodos PronoKal / PnK® / DiaproKal.
  *Estado*: Recogidas de la web anterior pero pendientes de verificación documental oficial.
- **Años de experiencia**: Se retiró la mención comercial de "más de 30 años de experiencia" por no estar contrastada documentalmente con la fecha de colegiación y ejercicio.

---

## 2. Datos NAP y ubicación de la consulta (CLIN&DIET)
- **Dirección postal física**: Pendiente de confirmar la dirección exacta de la consulta en Castellón de la Plana (calle, número, piso/puerta, código postal).
- **Horario de atención**: Pendiente de definir franjas horarias de consulta presencial y de atención telefónica.
- **Correo electrónico**: Pendiente de proporcionar un correo corporativo o de consulta oficial (ej. `contacto@...` o `info@...`).
- **Mapa y ficha de Google Business Profile**: Sin dirección verificada no se puede generar el mapa embebido ni vincular la ficha local de Google con coherencia NAP.
- **Teléfonos vigentes**: Los números `964 671 300` y `616 42 43 25` provienen de la web pública anterior y se mantienen operativos en cabecera, pie y contacto.

---

## 3. Identidad de marca y logotipos
- **Lema del logotipo "medicina estética"**:
  - El archivo `consulta-control-de-peso.png` (usado en header) y `logo-dra-vicenta-cubells.png` (usado en footer) incluyen un subtítulo o lema de "medicina estética" heredado.
  - Dicho lema entra en contradicción con el posicionamiento estricto de *consulta médica para el control de peso y acompañamiento clínico*.
  - En CSS se aplica actualmente un `clip-path` como solución provisional para no mostrar el subtítulo, pero se requiere un export limpio y vectorial (SVG) del logotipo CLIN&DIET / Dra. Vicenta Cubells sin el lema de medicina estética, o bien una validación formal de si ese posicionamiento debe o no formar parte de la oferta.

---

## 4. Fotografía e instalaciones
- **Fotografías reales del espacio de consulta**:
  - Actualmente no se dispone de ninguna fotografía autorizada de las instalaciones reales de la consulta CLIN&DIET en Castellón.
  - La página `/clinica/` mantiene un bloque reservado con el aviso: *«Falta una fotografía autorizada de la consulta CLIN&DIET»*.
  - No se deben utilizar fotografías de stock falsas ni imágenes generadas por IA para simular la consulta médica.
- **Fotografías de la doctora**:
  - Se utilizan dos fotos reales (`dra-vicenta-cubells-retrato.jpg` y `dra-vicenta-cubells-en-consulta.jpg`), pero debe confirmarse la vigencia del consentimiento de uso y derechos de imagen para este nuevo sitio.

---

## 5. Propiedad industrial y marcas comerciales (PnK® / PronoKal)
- **Denominación y método**:
  - El uso de las marcas registradas PnK® / PronoKal® / DiaproKal® y la descripción técnica de las fases y suplementación deben contar con la autorización del titular de la marca (PronoKal Group / Nestlé Health Science).
  - En la página `/metodo-pnk-castellon/` se mantiene un aviso visible indicando que la denominación y descripción están pendientes de validación con el titular de la marca y de revisión clínica.

---

## 6. Revisión médica de contenidos y FAQs
- **Copy clínico y preventivo**:
  - Todo el texto del sitio (descripción del control de peso, papel de la actividad física, pautas de hábitos, proceso de primera valoración) debe ser leído, validado o corregido directamente por la Dra. Vicenta Cubells.
- **Preguntas frecuentes (FAQ)**:
  - Las 17 preguntas frecuentes redactadas ofrecen un marco general y prudente, pero su redacción clínica definitiva debe contar con el visto bueno formal de la médica.

---

## 7. Tarifas y política de precios
- **Importe de la primera valoración y seguimiento**:
  - La web no publica precios ni tarifas por prudencia y personalización del tratamiento.
  - Se informa explícitamente en `/contacto/` y en las FAQs que el importe se consulta por teléfono o en la propia cita. Debe definirse si el cliente deseará mantener esta política de tarifas privadas o publicar un rango orientativo.

---

## 8. Cumplimiento legal y RGPD
- **Borradores provisionales de Aviso Legal y Política de Privacidad**:
  - Faltan los datos obligatorios del prestador de servicios (LSSI-CE): Nombre y apellidos completos o denominación social, NIF/CIF, domicilio social, datos de colegiación médica y códigos deontológicos aplicables.
  - En la política de privacidad están pendientes de definir: responsable formal del tratamiento, base jurídica específica, plazos exactos de conservación de datos, destinatarios/encargados de tratamiento y canal específico para el ejercicio de derechos ARCO/RGPD.

---

## 9. Formulario funcional
- **Solución técnica de envío y protección de datos**:
  - El formulario actual es estrictamente demostrativo (`DemoForm.astro`): valida en cliente, bloquea el envío con `preventDefault`, no tiene atributos `name` y no serializa ningún dato en la URL.
  - Para pasar a producción se requerirá un endpoint seguro (backend o servicio de formularios que cumpla RGPD y acuerdos de tratamiento de datos dentro de la UE), con registro de consentimiento y medidas reforzadas de confidencialidad, recordando nunca recabar datos de salud o categorías especiales por formularios web abiertos.

---

## 10. Seguridad y saneamiento de la web antigua (`vicentacubells.com`)
- **Inyección de spam/casino en dominio legacy**:
  - La auditoría técnica del dominio original `https://www.vicentacubells.com/` detectó inyecciones graves de malware y enlaces de casino/apuestas (ruletas, tragaperras, blackjack) en portada y categorías de WordPress.
  - Es un requisito indispensable desinfectar y sanear completamente la instalación antigua antes de configurar cualquier redirección 301 hacia el nuevo sitio o vincular perfiles sociales/locales, para evitar transferir penalizaciones algorítmicas de Google al nuevo proyecto.

---

## 11. Indexación y despliegue
- **Meta robots `noindex, follow`**:
  - El mockup estático actual incluye `<meta name="robots" content="noindex, follow" />` en todas las páginas de forma intencionada.
  - Motivo: despliegue en subdominio público (`github.io`), utilización del nombre y reputación real de la médica, contenido sensible de salud (YMYL) y existencia de malware en el dominio canónico original.
  - Esta directiva debe retirarse únicamente cuando el sitio esté instalado en su dominio definitivo, con HTTPS propio, tras el saneamiento del dominio anterior y con la validación médica y legal completada.

---

## 12. Rendimiento y tipografía (Self-hosting)
- **Fuentes tipográficas externas**:
  - Actualmente se cargan las familias `Cormorant Garamond` y `DM Sans` a través de Google Fonts (`fonts.googleapis.com`).
  - Para la versión final de producción y en estricto cumplimiento de privacidad RGPD (evitando llamadas de terceros que transfieren la IP del visitante a servidores de Google) y para máxima velocidad offline, los archivos de fuentes WOFF2 deben alojarse localmente en el propio proyecto (`self-hosting`).
