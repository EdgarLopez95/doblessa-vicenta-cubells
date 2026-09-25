import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../src/${path}`, import.meta.url), 'utf8');

test('PnK: los cinco pasos pertenecen al momento de pérdida de peso', () => {
  const page = read('pages/metodo-pnk-castellon.astro');
  const faqs = read('data/faqs.ts');
  assert.match(page, /Momento 1: Pérdida de peso \(cinco pasos\)/);
  assert.match(page, /Pasos 1, 2 y 3/);
  assert.match(page, /Pasos 4 y 5/);
  assert.match(page, /después de completar el paso 5/);
  assert.doesNotMatch(page, /carne magra, pescado o huevos|Proteína natural en almuerzo y cena/);
  assert.doesNotMatch(faqs, /Momento 2 \(estabilización.*pasos 4 y 5/);
});

test('no presenta como hechos roles, tarifas o titularidad legal no acreditados', () => {
  const method = read('pages/metodo-pnk-castellon.astro');
  const faqs = read('data/faqs.ts');
  const contact = read('pages/contacto.astro');
  const privacy = read('pages/politica-de-privacidad.astro');
  const legal = read('pages/aviso-legal.astro');
  const site = read('data/site.ts');
  assert.doesNotMatch(method, /asume en exclusiva|no constituyen personal contratado/);
  assert.doesNotMatch(faqs, /a distancia que completan|tarifas vigentes se informan|sin compromiso de contratación/);
  assert.doesNotMatch(contact, /El importe de la valoración se consulta por teléfono o en la propia cita/);
  assert.doesNotMatch(privacy, /<h2>Responsable del tratamiento<\/h2>[\s\S]*?<strong>Titularidad médica documentada:/);
  assert.doesNotMatch(legal, /<h2>Titular del sitio web<\/h2>[\s\S]*?<strong>Titularidad médica documentada:/);
  assert.doesNotMatch(site, /formadora acreditada/);
});
