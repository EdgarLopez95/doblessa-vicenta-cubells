export const site = {
  name: 'Dra. Vicenta Cubells',
  fullName: 'Dra. Vicenta Cubells Santaolaria',
  brand: 'CLIN&DIET',
  town: 'Nules',
  province: 'Castellón',
  city: 'Nules (Castellón)',
  address: 'C/ Faustino Valentín, 9, 12520 Nules (Castellón)',
  street: 'C/ Faustino Valentín, 9',
  postalCode: '12520',
  email: 'hola@vicentacubells.com',
  collegiateNumber: '2664',
  foundedYear: '2007',
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

/** Credenciales y formación recogidas de la web original. Pendientes de comprobación documental de vigencia. */
export const credentials = [
  { label: 'Colegiación', value: 'Médica colegiada nº 2664' },
  { label: 'Titulación', value: 'Licenciada en Medicina y Cirugía' },
  { label: 'Nutrición', value: 'Máster en Nutrición y Dietética' },
  { label: 'Medicina laboral', value: 'Especialista en Medicina del Trabajo y Diplomada en Traumatología Laboral' },
  { label: 'Sofrología', value: 'Formación en Sofrología Médica' },
  { label: 'Método PnK®', value: 'Médico Formador en métodos PronoKal / PnK / Diaprokal, según la web original' },
  { label: 'Divulgación', value: 'Charlas de alimentación saludable y cursos de preparación al parto' },
  { label: 'Trayectoria', value: '«Más de 30 años de experiencia» según declaración histórica de la web original' },
];

/** Credenciales sintetizadas para visualización compacta en la home. */
export const credentialsCompact = [
  { label: 'Colegiación', value: 'Médica colegiada nº 2664' },
  { label: 'Titulación', value: 'Licenciada en Medicina y Cirugía' },
  { label: 'Especialidad', value: 'Máster en Nutrición y Especialista en Medicina del Trabajo' },
  { label: 'Método', value: 'Formadora de métodos PronoKal / PnK / Diaprokal' },
];

/** Propuesta orientativa de experiencia para la primera consulta (no contractual ni protocolo cerrado). */
export const firstVisitSteps = [
  {
    title: 'Contacto y solicitud',
    text: 'Llamas a la consulta o dejas tus datos de contacto básicos. No es necesario enviar información sobre tu salud por la web.',
  },
  {
    title: 'Concertar cita',
    text: 'Se acuerda el día y la hora para la valoración presencial en la consulta de Nules, resolviendo dudas organizativas previas.',
  },
  {
    title: 'Valoración individual',
    text: 'Conversación directa con la doctora para conocer tu estado de salud, hábitos y expectativas con rigor médico.',
  },
  {
    title: 'Decisión compartida',
    short: 'Decisión clínica',
    text: 'Conocido tu caso, la doctora valora si procede acompañamiento y qué opciones tienen sentido. Decides con libertad y sin compromiso.',
  },
];

export const images = {
  portrait: { src: 'images/doctora/dra-vicenta-cubells-retrato.jpg', alt: 'Dra. Vicenta Cubells', width: 887, height: 1024 },
  inConsultation: { src: 'images/doctora/dra-vicenta-cubells-en-consulta.jpg', alt: 'Dra. Vicenta Cubells en consulta', width: 1024, height: 646 },
  logoDark: { src: 'images/inicio/consulta-control-de-peso.png', width: 436, height: 94 },
  logoLight: { src: 'images/marca/logo-dra-vicenta-cubells.png', width: 350, height: 93 },
};
