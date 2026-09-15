export const site = {
  name: 'Dra. Vicenta Cubells',
  fullName: 'Dra. Vicenta Cubells Santaolaria',
  brand: 'CLIN&DIET',
  city: 'Castellón',
  contentUpdated: 'septiembre de 2026',
  phones: [
    { label: '964 671 300', href: 'tel:+34964671300', schema: '+34 964 671 300' },
    { label: '616 42 43 25', href: 'tel:+34616424325', schema: '+34 616 42 43 25' },
  ],
} as const;

export const nav = [
  { label: 'La consulta', path: 'consulta-control-peso-castellon/' },
  { label: 'El método', path: 'metodo-pnk-castellon/' },
  { label: 'Dra. Vicenta Cubells', path: 'dra-vicenta-cubells/' },
  { label: 'Preguntas frecuentes', path: 'preguntas-frecuentes/' },
  { label: 'Contacto', path: 'contacto/' },
] as const;

/** Jerarquía: páginas hija → sección padre del menú principal. */
export const sectionParents: Record<string, string> = {
  'como-es-la-primera-consulta/': 'consulta-control-peso-castellon/',
  'clinica/': 'consulta-control-peso-castellon/',
};

/** Navegación local de la rama "La consulta". */
export const consultaSection = [
  { label: 'La consulta', path: 'consulta-control-peso-castellon/' },
  { label: 'Cómo es la primera consulta', path: 'como-es-la-primera-consulta/' },
  { label: 'La clínica', path: 'clinica/' },
];

/** Rutas indexables incluidas en sitemap.xml. Las páginas legales provisionales quedan fuera. */
export const sitemapRoutes = [
  '',
  'consulta-control-peso-castellon/',
  'metodo-pnk-castellon/',
  'como-es-la-primera-consulta/',
  'dra-vicenta-cubells/',
  'clinica/',
  'preguntas-frecuentes/',
  'contacto/',
] as const;

/** Credenciales recogidas literalmente en la auditoría de la web actual. Pendientes de verificación documental. */
export const credentials = [
  { label: 'Titulación', value: 'Licenciada en Medicina y Cirugía' },
  { label: 'Formación', value: 'Máster en Nutrición y Dietética' },
  { label: 'Especialidad', value: 'Especialista en Medicina del Trabajo' },
  { label: 'Método', value: 'Formadora de métodos Pronokal / PnK / Diaprokal' },
];

export const firstVisitSteps = [
  {
    title: 'Solicitud de contacto',
    text: 'Llamas por teléfono o dejas tus datos básicos. No necesitas contar nada sobre tu salud a través de la web.',
  },
  {
    title: 'Conversación inicial',
    text: 'La consulta te contacta para resolver dudas prácticas y acordar el momento de la valoración.',
  },
  {
    title: 'Valoración profesional',
    text: 'La doctora conoce tu historia, tus hábitos y lo que esperas, y valora qué enfoque tiene sentido para ti.',
  },
  {
    title: 'Siguientes pasos personalizados',
    short: 'Siguientes pasos',
    text: 'Si decides continuar, se plantea un plan individual y cómo será el seguimiento. Si no, te vas con tus dudas resueltas.',
  },
];

export const images = {
  portrait: { src: 'images/doctora/dra-vicenta-cubells-retrato.jpg', alt: 'Dra. Vicenta Cubells', width: 887, height: 1024 },
  inConsultation: { src: 'images/doctora/dra-vicenta-cubells-en-consulta.jpg', alt: 'Dra. Vicenta Cubells en consulta', width: 1024, height: 646 },
  logoDark: { src: 'images/inicio/consulta-control-de-peso.png', width: 436, height: 94 },
  logoLight: { src: 'images/marca/logo-dra-vicenta-cubells.png', width: 350, height: 93 },
};
