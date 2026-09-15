# Dirección visual

## Idea central
**Salud con criterio, cambio acompañado.** Una publicación clínica serena: la doctora y el proceso en primer plano; el método como marco.

## Elemento memorable
**La barra diagonal de latón** del logotipo CLIN&DIET convertida en sistema: marca las etiquetas (eyebrows), cruza la esquina del retrato del hero y señala el primer tramo de cada paso del timeline. Es un gesto que viene de la marca real, no un adorno genérico.

## Paleta (tokens obligatorios)
| Token | Valor | Rol | Contraste verificado |
|---|---|---|---|
| clinic-900 | #193831 | Marca, hero, CTA, titulares | Blanco sobre él ≈ 13:1 |
| clinic-700 | #28584B | Enlaces, eyebrows, estados | Sobre ivory ≈ 7.6:1 |
| brass-500 | #B68A32 | Solo líneas, bordes y detalles; nunca texto pequeño | Decorativo (≥3:1 como indicador no textual) |
| brass-100 | #F3E8CC | Fondo cálido de apoyo / texto claro sobre verde | Sobre clinic-900 ≈ 11:1 |
| sage-100 | #E6EEE7 | Zonas de información | graphite-600 sobre sage ≈ 5.1:1 |
| ivory-50 | #FCFBF7 | Fondo base | — |
| graphite-900 | #252826 | Texto principal | ≈ 15:1 |
| graphite-600 | #5F6560 | Texto secundario | ≈ 5.9:1 |

## Tipografía
- Cormorant Garamond 500–600 para titulares (H1 56/62 → 40/46; H2 38/44; H3 24/30).
- DM Sans 400–700 para cuerpo (17/28), UI, números y etiquetas.

## Retícula y forma
Contenedor 1.120 px · 12/8/4 columnas · gutter 24/20/16 · ritmo vertical 32/56/88/120 · radio 10 px (chips 999 px) · bordes 1 px sage/latón suave · sin sombras pesadas.

## Wireframes
```
INICIO desktop                                   INICIO móvil
[logo]  nav ···············  [Solicitar valoración]   [logo]        [≡]
┌───────────────────────────┬───────────────┐       eyebrow
│ / CONSULTA MÉDICA          │  ▓▓▓▓▓▓▓▓▓▓▓▓│       H1 (3-4 líneas)
│ H1 Control de peso con     │ ┌──────────┐▓│       lead
│ acompañamiento médico…     │ │ retrato  │▓│       [Solicitar valoración]
│ lead                       │/│          │ │       [Conocer el método]
│ [CTA] [CTA 2]  teléfonos   │ └──────────┘ │       teléfonos
└───────────────────────────┴───────────────┘       retrato (4:5)
H2 idea rectora (4 col) | 01 Evaluación 02 Plan 03 Seguimiento (8 col)   → apilado
SAGE: intro sticky (5) | 2×2 pilares (7)                                   → 1 col
Timeline horizontal 4 pasos                                                → vertical
BRASS-100: declaración + principios                                        → apilado
Doctora: foto (6) | texto + credenciales (6)                               → foto arriba
SAGE: FAQ corta (8 col centrado-izq.)
VERDE: CTA final + teléfonos
[barra inferior móvil: Llamar · Solicitar valoración]
```
Interiores: breadcrumbs → hero (8 col texto + 4 col ficha, o 7/5 con retrato) → secciones editoriales de dos columnas alternando ivory/sage → FAQ → CTA.

## Motion
Transiciones 180–220 ms en hover/foco/acordeón/menú y en flechas de enlaces. `prefers-reduced-motion` desactiva todo. Sin contadores, sin autoplay, sin animaciones de éxito.

Decisión tras QA: se retiró el revelado del timeline al hacer scroll porque ocultaba pasos en capturas y herramientas que no desplazan; en una web médica el contenido debe estar siempre visible.

## Refinamiento ronda 1
- La diagonal de latón pasa a ser sistema: primer tramo de cada conector del timeline, fotos enmarcadas (`.framed`) y bandas de declaración a todo el ancho (`StatementBand`).
- Bandas de declaración para romper la repetición de columnas en consulta, método y perfil.
- Avisos de revisión fuera de los heroes y compactados.
- Placeholders de foto/mapa reducidos a bandas bajas.

## Autocrítica anti-plantilla
- Evitado hero centrado con 3 features: hero asimétrico con panel verde que sangra a la derecha.
- La propuesta de valor no son cards: lista numerada editorial con filetes.
- Solo los pilares y recursos usan card; el resto es tipografía, filetes y fondos.
- Nada de gradientes, glassmorphism ni emojis; iconos lineales de 1.5 px.
- El acento sale del logotipo real, no de un default.
