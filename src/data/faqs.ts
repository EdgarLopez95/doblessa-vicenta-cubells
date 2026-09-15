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
    intro: 'Cómo es el primer paso y qué implica pedirlo.',
    items: [
      {
        id: 'valoracion-que-es',
        q: '¿En qué consiste la primera valoración?',
        a: 'Es una conversación con la doctora para conocer tu situación, tus hábitos y lo que esperas del proceso. A partir de ahí se valora, en consulta, si un acompañamiento para el control de peso es adecuado para ti y cómo podría plantearse.',
      },
      {
        id: 'valoracion-preparar',
        q: '¿Tengo que preparar algo antes de venir?',
        a: 'No es imprescindible. Si los tienes a mano, pueden ser útiles informes o analíticas recientes y una lista de la medicación que tomas. Esa información se revisa en la consulta, nunca a través de la web.',
      },
      {
        id: 'valoracion-compromiso',
        q: '¿Pedir una valoración me obliga a empezar un tratamiento?',
        a: 'No. La valoración sirve para conocer tu caso y resolver dudas. Después decides, con información, si quieres continuar.',
      },
      {
        id: 'valoracion-duracion',
        q: '¿Cuánto dura la primera consulta?',
        a: 'La duración puede variar en cada caso. Cuando solicites la valoración, la consulta te indicará el tiempo aproximado y los detalles prácticos.',
      },
      {
        id: 'valoracion-precio',
        q: '¿Cuánto cuesta la consulta?',
        a: 'Esta web no muestra precios. Puedes preguntar las condiciones por teléfono o cuando la consulta contacte contigo.',
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
        a: 'Aquí el punto de partida es una valoración médica individual. El plan se plantea según tu contexto de salud y se revisa durante el seguimiento, en lugar de aplicar pautas genéricas iguales para todas las personas.',
      },
      {
        id: 'medico-seguimiento',
        q: '¿Por qué es importante el seguimiento?',
        a: 'Porque permite revisar cómo te encuentras, resolver dudas y ajustar el planteamiento con criterio profesional a lo largo del proceso.',
      },
      {
        id: 'medico-condicion',
        q: 'Tengo una enfermedad o tomo medicación, ¿puedo consultar?',
        a: 'Es precisamente una cuestión que debe valorarse de forma individual en consulta. La web no puede orientar sobre casos concretos; puedes comentarlo cuando hables con la consulta.',
      },
      {
        id: 'medico-resultados',
        q: '¿Qué resultados puedo esperar?',
        a: 'Cada persona es distinta y no es posible anticipar resultados. En la consulta se habla de objetivos realistas para tu situación y de cómo se hará el seguimiento.',
      },
    ],
  },
  {
    id: 'el-metodo',
    title: 'El método',
    intro: 'Qué papel tiene el Método PnK® dentro de la consulta.',
    items: [
      {
        id: 'metodo-que-es',
        q: '¿Qué es el Método PnK®?',
        a: 'Es el marco con el que la consulta organiza el acompañamiento: control médico, pautas nutricionales, actividad física y apoyo en los hábitos. Si es adecuado o no se decide siempre tras una valoración individual.',
      },
      {
        id: 'metodo-para-mi',
        q: '¿Es adecuado para todo el mundo?',
        a: 'No se puede saber sin una valoración. Hay situaciones en las que puede no ser la opción indicada, y por eso esa decisión se toma en consulta.',
      },
      {
        id: 'metodo-ejercicio',
        q: '¿Tendré que hacer mucho ejercicio?',
        a: 'La actividad física se plantea de forma adaptada a tu punto de partida, tus preferencias y tu estado de salud. No se trata de exigencias genéricas.',
      },
      {
        id: 'metodo-web',
        q: '¿Puedo seguir el método por mi cuenta con la información de la web?',
        a: 'No. La web explica cómo se trabaja en la consulta, pero no contiene pautas ni prescripciones. Cualquier plan requiere valoración y seguimiento médico.',
      },
    ],
  },
  {
    id: 'privacidad-y-contacto',
    title: 'Privacidad y contacto',
    intro: 'Qué información se pide y cómo pedir una valoración.',
    items: [
      {
        id: 'privacidad-datos',
        q: '¿Qué datos pide el formulario de contacto?',
        a: 'Solo lo necesario para contactarte: nombre, teléfono o email, un motivo general y tu preferencia de contacto. No debes incluir datos de salud; esa información se trata en consulta.',
      },
      {
        id: 'privacidad-demo',
        q: '¿El formulario de esta web envía mi solicitud?',
        a: 'No. Esta versión es una propuesta de diseño y su formulario es demostrativo: no envía ni guarda datos. Para contactar con la consulta, utiliza los teléfonos.',
      },
      {
        id: 'privacidad-telefono',
        q: '¿Puedo pedir la valoración por teléfono?',
        a: 'Sí. Puedes llamar al 964 671 300 o al 616 42 43 25.',
      },
      {
        id: 'privacidad-tratamiento',
        q: '¿Cómo se tratará mi información personal?',
        a: 'El tratamiento de los datos se describe en la política de privacidad. Su texto definitivo debe revisarse y aprobarse legalmente antes de publicar la web.',
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
