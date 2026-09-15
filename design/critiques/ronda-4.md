# Crítica independiente — ronda 4 (final)

**Total: 83.75/100 · no aprobado.** Ninguna categoría baja de 7.5 y no hay bloqueantes. Es la última ronda permitida.

| Categoría | Nota |
|---|---|
| Calidad de diseño | 8.5 |
| Originalidad | 8 |
| Oficio / craft | 8.5 |
| UX | 8.5 |
| Responsive | 8.5 |
| Motion | 8 |
| Accesibilidad | 8.5 |

Evolución: 73.5 → 78.3 → 81.25 → 83.75.

## Correcciones posteriores a la ronda 4 (sin nueva puntuación)

| Impacto | Problema | Acción |
|---|---|---|
| Alto | La banda de declaración se repite en 5 páginas | Se mantiene en inicio (declaración de confianza) y en método; se retira de consulta, perfil y clínica |
| Alto | La sección "El espacio" de /clinica/ se ve vacía | Sección eliminada; el estado de las fotografías pasa a la ficha del hero |
| Medio | Las preguntas de método no salían en 2 columnas | Bug corregido: faltaba `display:grid` en `.question-list--grid` |
| Medio | Pasos compactos repetidos en /consulta/ | Retirados; se deja un enlace a la primera consulta en "Antes de venir" |
| Medio | Tarjeta 04 más alta a 1024px | Título corto "Siguientes pasos" en la versión compacta |
| Medio | Tarjeta de ubicación antes de su H2 en móvil (/contacto/) | Orden del DOM corregido: título primero |
| Bajo | CTA duplicado en la primera pantalla móvil | La barra fija aparece cuando los CTA del hero salen de pantalla (IntersectionObserver; visible sin JS) |
| Bajo | Ficha lateral del hero descolgada | Alineada arriba con la etiqueta |
| Bajo | Logo del pie con carga diferida | `loading="lazy"` retirado |

Estas correcciones no se han vuelto a puntuar porque ya se agotaron las rondas de crítica.
