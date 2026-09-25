export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  intro: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: 'la-valoracion',
    title: 'La valoración',
    intro: 'Cómo es el primer paso y qué implica pedir cita.',
    items: [
      {
        id: 'valoracion-que-es',
        q: '¿En qué consiste la primera valoración médica?',
        a: 'Es una conversación clínica en consulta con la Dra. Vicenta Cubells para conocer tu estado de salud, hábitos, historial clínico y expectativas. A partir de esa valoración individual se determina si un tratamiento médico para el control de peso es adecuado para ti.',
      },
      {
        id: 'valoracion-preparar',
        q: '¿Tengo que preparar documentación antes de venir?',
        a: 'No es imprescindible. Si dispones de informes médicos o analíticas recientes, y una lista de la medicación habitual, pueden ser de utilidad para la doctora. Toda la información clínica se revisa exclusivamente en la consulta médica, nunca a través de la web.',
      },
      {
        id: 'valoracion-compromiso',
        q: '¿Pedir cita me compromete a iniciar un tratamiento?',
        a: 'No. Como se recogía en la web original, el contacto y la cita se realizan sin compromiso de contratación. La valoración médica sirve para orientarte y resolver dudas clínicas; después decides con total libertad si deseas comenzar.',
      },
      {
        id: 'valoracion-duracion',
        q: '¿Cuánto dura la primera consulta?',
        a: 'La duración varía en función de cada situación clínica y del tiempo necesario para estudiar tu historial con calma y responder a tus preguntas.',
      },
      {
        id: 'valoracion-precio',
        q: '¿Cuánto cuesta la consulta y el tratamiento?',
        a: 'Esta web no publica tarifas ni precios cerrados. Las condiciones económicas y tarifas vigentes se informan directamente por teléfono al concertar la cita o en la propia consulta médica.',
      },
    ],
  },
  {
    id: 'el-enfoque-medico',
    title: 'El enfoque médico',
    intro: 'Qué aporta que el proceso esté dirigido por una médica.',
    items: [
      {
        id: 'medico-diferencia',
        q: '¿Qué diferencia hay con seguir una dieta por mi cuenta?',
        a: 'El tratamiento parte de una valoración clínica individual realizada por una médica. Se evalúan analíticas, contraindicaciones y patologías asociadas, adaptando el plan a tu salud con revisiones periódicas, en lugar de aplicar dietas genéricas sin supervisión facultativa.',
      },
      {
        id: 'medico-seguimiento',
        q: '¿Por qué es importante el seguimiento médico?',
        a: 'El seguimiento clínico permite vigilar la seguridad metabólica, monitorizar la evolución, prevenir carencias nutricionales y ajustar las pautas según tu respuesta individual.',
      },
      {
        id: 'medico-condicion',
        q: 'Tengo una patología previa o tomo medicación, ¿puedo consultar?',
        a: 'Sí, es precisamente uno de los motivos principales para acudir a una consulta médica. La doctora valora la compatibilidad del plan con tu tratamiento farmacológico en la consulta presencial.',
      },
      {
        id: 'medico-resultados',
        q: '¿Qué resultados puedo esperar?',
        a: 'Cada organismo responde de forma particular según su metabolismo y adherencia. Conforme a la prudencia sanitaria, no se prometen cifras fijas de kilos, pérdidas inmediatas ni resultados garantizados.',
      },
    ],
  },
  {
    id: 'el-metodo',
    title: 'El Método PnK®',
    intro: 'Conceptos del método documentados en la web original: ProteinDHA®, lipoinflamación y etapas.',
    items: [
      {
        id: 'metodo-que-es',
        q: '¿Qué es el Método PnK®?',
        a: 'Es un tratamiento médico multidisciplinar para la pérdida de peso y la reeducación de hábitos bajo prescripción facultativa. Combina pauta nutricional con productos específicos, control médico, ejercicio físico y apoyo motivacional.',
      },
      {
        id: 'metodo-lipoinflamacion',
        q: '¿Qué es la lipoinflamación según el método?',
        a: 'En la literatura divulgativa del Método PnK®, la lipoinflamación se define como un proceso inflamatorio de bajo grado en las células del tejido adiposo asociado al sobrepeso, que el método busca mitigar mediante pautas nutricionales específicas y suplementación de DHA.',
      },
      {
        id: 'metodo-proteindha',
        q: '¿Qué es la fórmula ProteinDHA® y qué papel tiene el DHA?',
        a: 'Es la formulación nutricional patentada de PronoKal/PnK que aporta proteínas de alto valor biológico junto con ácido docosahexaenoico (DHA), un ácido graso poliinsaturado omega-3 orientado a apoyar la resolución de la lipoinflamación celular.',
      },
      {
        id: 'metodo-pasos',
        q: '¿En qué consisten los dos momentos y cinco pasos del método?',
        a: 'El método documenta dos etapas: Momento 1 (pérdida de peso y abordaje de la lipoinflamación mediante cetosis controlada en pasos 1, 2 y 3) y Momento 2 (estabilización y nuevo estilo de vida, reintroduciendo progresivamente todos los grupos de alimentos en los pasos 4 y 5 con seguimiento a largo plazo).',
      },
      {
        id: 'metodo-equipo',
        q: '¿Quién forma el equipo de acompañamiento del Método PnK®?',
        a: 'La Dra. Vicenta Cubells realiza el diagnóstico, prescripción y supervisión médica directa en CLIN&DIET. El método cuenta además con recursos externos de asesoramiento nutricional (dietistas-coach), actividad física y coaching a distancia que completan el abordaje multidisciplinar.',
      },
      {
        id: 'metodo-para-mi',
        q: '¿Para quién está indicado el método?',
        a: 'Está dirigido a personas con sobrepeso u obesidad que requieran tratamiento bajo supervisión médica. Su idoneidad siempre se evalúa en una consulta previa individual para descartar cualquier contraindicación.',
      },
      {
        id: 'metodo-ejercicio',
        q: '¿Cómo se plantea la actividad física?',
        a: 'Se prescribe de manera progresiva y adaptada a la condición física de partida y estado de salud de cada persona, evitando sobreesfuerzos y favoreciendo el mantenimiento de la masa muscular.',
      },
      {
        id: 'metodo-web',
        q: '¿Se puede seguir el método por cuenta propia?',
        a: 'No. El método requiere prescripción médica obligatoria, analíticas previas y seguimiento facultativo. Esta web ofrece información general sobre el método publicado y no contiene pautas dietéticas ni posologías.',
      },
    ],
  },
  {
    id: 'privacidad-y-contacto',
    title: 'Contacto y datos de consulta',
    intro: 'Ubicación documentada, solicitud de cita y tratamiento de datos.',
    items: [
      {
        id: 'privacidad-ubicacion',
        q: '¿Dónde se encuentra la consulta?',
        a: 'La consulta CLIN&DIET está documentada en C/ Faustino Valentín 9, 12520 Nules, en la provincia de Castellón.',
      },
      {
        id: 'privacidad-datos',
        q: '¿Qué información se solicita para concertar cita?',
        a: 'Únicamente datos básicos de contacto (nombre, teléfono o correo y preferencia horaria). La información sobre tu salud se evalúa de manera confidencial durante la consulta presencial.',
      },
      {
        id: 'privacidad-telefono',
        q: '¿Cuáles son los teléfonos para pedir valoración?',
        a: 'Puedes llamar directamente al 964 671 300 o al 616 42 43 25.',
      },
      {
        id: 'privacidad-demo',
        q: '¿El formulario de esta web envía solicitudes reales?',
        a: 'No. En este mockup demostrativo el formulario es una maqueta de diseño estática que no almacena ni procesa datos. Para concertar cita médica real, contacta por teléfono.',
      },
      {
        id: 'privacidad-tratamiento',
        q: '¿Cómo se protege la privacidad de la información?',
        a: 'Toda la atención médica cumple con el secreto profesional facultativo. Los textos legales del sitio se encuentran en fase de borrador a la espera de validación legal definitiva para la futura web de producción.',
      },
    ],
  },
];

const all = new Map(faqGroups.flatMap((g) => g.items).map((i) => [i.id, i]));

export function pickFaqs(ids: string[]): FaqItem[] {
  return ids.map((id) => {
    const item = all.get(id);
    if (!item) throw new Error(`FAQ inexistente: ${id}`);
    return item;
  });
}
