# Crítica independiente — ronda 1

**Total: 73.5/100 · no aprobado** (umbral 85, ninguna categoría < 7.5)

| Categoría | Nota |
|---|---|
| Calidad de diseño | 7.5 |
| Originalidad | 6.5 |
| Oficio / craft | 7.5 |
| UX | 8 |
| Responsive | 7.5 |
| Motion | 7 |
| Accesibilidad | 7.5 |

Sin bloqueantes. Técnica correcta: sin overflow 360–1440, consola limpia, CTA móvil claro y formulario accesible.

## Problemas y respuesta

| Impacto | Problema | Acción |
|---|---|---|
| Alto | Patrón repetido de etiqueta + H2 a la izquierda y contenido a la derecha en todas las secciones | Nuevo `StatementBand` en consulta, método y perfil; en consulta se fusionan "Qué puedes esperar" y "Qué preparar" |
| Alto | La diagonal de latón no llega a ser sistema | Añadida al conector del timeline, a las fotos `.framed` y a las bandas de declaración |
| Alto | La foto apaisada de "Conoce a la Dra." deja huecos | Recorte 4:5 con panel verde y diagonal, alineada arriba |
| Alto | Textos de contenido a 15–16px | Todo el contenido sube a 17px; se mantienen menores solo navegación, botón pequeño, chips y etiquetas |
| Alto | Los avisos de revisión pesan tanto que parece un borrador | Fuera de los heroes; la banda amarilla del perfil pasa a ser un aviso compacto |
| Medio | Pilares comprimidos entre 1024 y 1179px | Intro a todo el ancho en ese rango; columna de la lista de valores a 11rem |
| Medio | La home en móvil es demasiado larga | Pilares compactos en móvil sin índice; FAQ de la home con 3 preguntas |
| Medio | Placeholders de foto y mapa demasiado grandes | Bandas bajas |
| Medio | Panel verde del hero demasiado corto | Llega hasta la base del retrato |
| Bajo | Logo de cabecera pequeño | 36/44px |
| Bajo | Mismo retrato en la home y en el perfil | El hero del perfil usa la foto del sofá recortada en vertical y el retrato pasa al bloque de enfoque |
| Bajo | Enlace de la ficha lateral por debajo de 44px | min-height 44px |
| Bajo | El revelado del timeline no está implementado | Decisión documentada en direction.md: contenido siempre visible |
