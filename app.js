/* RUTA 71 · app para preparar oposiciones
 * Web app (móvil y ordenador). Lo tuyo se guarda en este dispositivo y, si quieres,
 * en tu Google. El grupo comparte materiales en una hoja de Google con un script.
 */
'use strict';
const VERSION = '1.0.1';

/* ===================================================================== utilidades */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const pad = n => String(n).padStart(2, '0');
const ymd = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const hoy = () => ymd(new Date());
const parseYmd = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = parseYmd(s); d.setDate(d.getDate() + n); return ymd(d); };
const diasEntre = (a, b) => Math.round((parseYmd(b) - parseYmd(a)) / 864e5);
const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const MES3 = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const fechaLarga = s => { const d = parseYmd(s); return DIAS[d.getDay()] + ' ' + d.getDate() + ' de ' + MESES[d.getMonth()]; };
const fechaCorta = s => { const d = parseYmd(s); return d.getDate() + ' ' + MES3[d.getMonth()]; };
const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
const plural = (n, a, b) => n + ' ' + (n === 1 ? a : b);
const coma = n => String(n).replace('.', ',');
const nota1 = n => coma((Math.round(n * 10) / 10).toFixed(1));
const horasTxt = min => { min = Math.round(min); const h = Math.floor(min / 60), m = min % 60; return h ? (h + ' h' + (m ? ' ' + m + ' min' : '')) : m + ' min'; };
const hm = ms => { ms = Math.max(0, ms); const t = Math.round(ms / 1000), h = Math.floor(t / 3600), m = Math.floor(t % 3600 / 60), s = t % 60; return h ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`; };
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const ancho = () => matchMedia('(min-width: 900px)').matches;
function comb(n, k) { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; }
/* probabilidad de que entre las bolas salga al menos uno de tus temas */
function prob(k, total = S.temario.length, bolas = S.conv.bolas) { if (total <= 0) return 0; return Math.round(100 * (1 - comb(total - k, bolas) / comb(total, bolas))); }
function bolasPorTemas(n) { return n <= 25 ? 2 : n <= 50 ? 3 : 4; }

/* ===================================================================== temario de Tecnología */
const TEMARIO_TEC = ['Producción y transformación de las distintas formas de energía.', 'Transporte y distribución de la energía.', 'El consumo de energía en España y en el mundo. Criterios y técnicas de ahorro energético. Energías alternativas.', 'Impacto ambiental de la actividad tecnológica y la explotación de recursos. Técnicas de tratamiento y reciclaje de residuos.', 'El desarrollo científico y técnico a lo largo de la historia: contexto social y logros característicos.', 'Condiciones y consecuencias económicas y sociales del desarrollo tecnológico.', 'La influencia del desarrollo tecnológico en la organización técnica y social del trabajo.', 'El desarrollo del transporte, las comunicaciones, el tratamiento y la transmisión de la información.',
  'Sistemas informáticos: estructura, elementos componentes y su función en el conjunto. Programas: tipos y características.', 'El proceso de diseño y producción de bienes en la industria. Características de un proyecto técnico escolar.', 'El proceso de producción agropecuaria. Características de un proyecto agrícola escolar.', 'Tratamiento de los alimentos. Técnicas de manipulación, conservación y transporte.', 'La distribución y comercialización de productos. El mercado y sus leyes básicas.', 'Métodos de expresión, exploración y evaluación de ideas en el desarrollo de proyectos técnicos.', 'Técnicas de planificación, organización y seguimiento de la producción. La planificación técnica en el ámbito escolar.', 'Administración de recursos y gestión de medios en los sistemas organizativos de la empresa.', 'Riesgos derivados del manejo de herramientas, máquinas y materiales técnicos. Elementos y medidas de protección.', 'Factores que intervienen en los accidentes y criterios de reducción de riesgos en el taller.', 'Normas de salud y seguridad en el taller. Criterios de actuación y primeros auxilios en caso de accidente.',
  'Materiales, instrumentos y técnicas de dibujo y diseño gráfico.', 'Trazados geométricos básicos.', 'Representación en sistema diédrico.', 'Representación en perspectiva isométrica y caballera.', 'Representación en perspectiva cónica frontal y oblicua.', 'Normalización y simbología en Dibujo Técnico.', 'Elementos de expresión visual en dos y tres dimensiones. Ejemplos de aplicación al diseño de productos.', 'Cualidades del color. Mezclas e interacciones entre colores. Aplicación al diseño de productos.', 'Cualidades expresivas y sensoriales de los materiales de uso técnico. Ejemplos de aplicación a productos de uso común.',
  'Propiedades de los materiales. Técnicas de medida y ensayo de propiedades.', 'Los plásticos: tipología, constitución, propiedades y aplicaciones. Procedimientos de identificación.', 'Técnicas de conformación, mecanizado y unión de plásticos. Aplicaciones.', 'Materiales textiles: clasificación, constitución y propiedades características. Ligamentos y tejidos básicos.', 'Técnicas básicas de confección. Útiles y herramientas característicos del trabajo con materiales textiles.', 'Materiales de construcción: clasificación, constitución y propiedades características.', 'Técnicas básicas de albañilería. Herramientas y útiles característicos del trabajo con materiales de construcción.', 'La madera: clasificación y propiedades. Obtención de maderas en bruto y prefabricadas. Acabados y tratamientos de la madera.', 'Técnicas para dar forma y unir piezas de madera. Herramientas y útiles característicos del trabajo con la madera.', 'Los materiales metálicos férricos: clasificación, obtención y aplicaciones.', 'Los materiales metálicos no férricos y sus aleaciones: clasificación, obtención y aplicaciones.', 'Técnicas de mecanizado, conformación y unión de piezas metálicas. Herramientas y útiles característicos.', 'Acabados y tratamientos de los metales.',
  'Medida de magnitudes: instrumentos y procedimientos. El error en la medida.', 'Esfuerzos mecánicos. Composición y representación de esfuerzos. Cálculo de esfuerzos en piezas simples.', 'Estructuras resistentes a los esfuerzos.', 'Mecanismos de transmisión y transformación de movimientos.', 'Mecanismos de retención, acoplamiento y lubricación de ejes.', 'Máquinas térmicas: funcionamiento, clasificación y aplicaciones.',
  'Máquinas eléctricas de corriente continua: constitución, funcionamiento y aplicaciones características.', 'Máquinas eléctricas de corriente alterna: constitución, funcionamiento y aplicaciones características.', 'Electrodomésticos: estructura interna y funcionamiento.', 'Instalaciones de agua: elementos componentes y funcionamiento. Circuitos característicos de utilización y depuración.', 'Instalaciones de calefacción: elementos componentes y su funcionamiento. Circuitos característicos.', 'Instalaciones eléctricas en viviendas: elementos componentes y su funcionamiento. Circuitos característicos.',
  'Fenómenos, magnitudes y leyes fundamentales de los circuitos eléctricos en corriente continua y alterna.', 'Circuitos eléctricos serie, paralelo y mixto: cálculo de magnitudes.', 'Potencia en corriente alterna. Corrección del factor de potencia.',
  'Circuitos electrónicos: elementos componentes y su funcionamiento. Procedimientos de conexión.', 'Circuitos electrónicos analógicos básicos.', 'Circuitos de conmutación con relés. Aplicaciones y circuitos típicos de potencia y control de motores.', 'Circuitos de conmutación mediante transistores. Aplicaciones características.', 'Circuitos hidráulicos y neumáticos: elementos componentes y circuitos típicos de potencia y control.', 'Puertas lógicas. Técnicas de diseño y simplificación de funciones lógicas.', 'Construcción de puertas lógicas con diversas tecnologías.', 'Circuitos secuenciales: elementos componentes y aplicaciones características.',
  'Sistemas de control: elementos componentes, variables, función de transferencia y diagrama funcional.', 'Elementos transductores y captadores en los circuitos de control.', 'Elementos comparadores en los circuitos de control.', 'Amplificación y adaptación de señales en los circuitos de control.', 'Elementos actuadores en los circuitos de control.', 'Control programado: tipos, elementos y características.',
  'La realización de trabajos prácticos en Tecnología. Criterios organizativos y didácticos. Normas de seguridad.'];
const BLOQUES_TEC = [['Energía y sociedad', 1, 8], ['Informática', 9, 9], ['Proyecto y taller', 10, 19], ['Dibujo y diseño', 20, 28], ['Materiales', 29, 41], ['Mecánica', 42, 47], ['Máquinas e instalaciones', 48, 53], ['Electricidad', 54, 56], ['Electrónica', 57, 64], ['Control', 65, 70], ['Didáctica', 71, 71]];
function temarioTec() { return TEMARIO_TEC.map((t, i) => ({ n: i + 1, t, b: (BLOQUES_TEC.find(([, a, z]) => i + 1 >= a && i + 1 <= z) || ['Otros'])[0] })); }
const NOMS = ['Sin empezar', 'Leído', 'Resumido', 'Me lo sé', 'Lo domino'];
const NOMS_D = ['Aún no lo has abierto', 'Lo has leído entero una vez', 'Tienes tu esquema o resumen', 'Podrías escribirlo, con fallos', 'Lo escribirías entero en el tiempo'];
const CONF_DIAS = [0, 1, 3, 6, 12, 21];
const RUBRICA_DEF = () => [{ t: 'Estructura y orden', p: 20 }, { t: 'Contenido y rigor', p: 35 }, { t: 'Actualización y normativa', p: 15 }, { t: 'Aplicación didáctica', p: 20 }, { t: 'Presentación y expresión', p: 10 }];
const P2_DEF = () => ['Contexto del centro y del alumnado', 'Marco normativo actualizado', 'Competencias y saberes básicos', 'Situaciones de aprendizaje secuenciadas', 'Metodología', 'Atención a la diversidad', 'Evaluación y criterios de calificación', 'Recursos y espacios', 'Actividades complementarias', 'Evaluación de la propia programación'].map(t => ({ id: uid(), t, ok: false }));
const GUION_DEF = () => [{ t: 'Justificación y contexto', m: 4 }, { t: 'Objetivos y competencias', m: 6 }, { t: 'Secuencia de actividades', m: 10 }, { t: 'Evaluación', m: 6 }, { t: 'Conclusión', m: 4 }];

/* ===================================================================== estado */
const DEF = () => ({
  v: 1, onb: false, yo: { id: uid(), nombre: '' },
  conv: { nombre: 'Navarra 2027 · Secundaria', esp: 'Tecnología', bolas: 4, minTema: 120, fecha: '2027-06-15', aprox: true },
  obj: { temas: 30, horas: 15 },
  temario: temarioTec(), temas: {}, tarjetas: [], sesiones: [], sims: [], supuestos: [], hist: [],
  p2: { checks: P2_DEF(), sits: [], ensayos: [], guion: GUION_DEF() },
  rubrica: RUBRICA_DEF(),
  grupo: { url: '', clave: '', nombre: '', compartir: true, cache: null, ult: null },
  copia: { url: '', clave: '', ult: null, error: false },
  aj: { tema: 'auto', sonido: true },
  ui: { tmodo: 'mapa', tfil: 'Todos', gtab: 'mat', gfil: 'Todo', ptab: 'horas', sfil: 'Todos' }
});
let S;
try { const raw = JSON.parse(localStorage.getItem('ruta71') || '{}'); const d = DEF(); S = Object.assign(d, raw);
  ['yo', 'conv', 'obj', 'p2', 'grupo', 'copia', 'aj', 'ui'].forEach(k => S[k] = Object.assign(d[k], raw[k] || {})); } catch (e) { S = DEF(); }
/* si se usa el temario de Tecnología, sus títulos se actualizan al texto oficial */
if (S.temario.length === TEMARIO_TEC.length && /^Producción y transformación/.test((S.temario[0] || {}).t || '')) S.temario.forEach((x, i) => { x.t = TEMARIO_TEC[i]; });
function save() { try { localStorage.setItem('ruta71', JSON.stringify(S)); } catch (e) { toast('No queda espacio para guardar. Exporta tus datos.'); } }
save();
let PILA = [];
function commit(fn, aviso, deshacer = true) { PILA.push(JSON.stringify(S)); if (PILA.length > 25) PILA.shift(); fn(); save(); refresh(); if (aviso) toast(aviso, deshacer); }
function deshacer() { if (!PILA.length) return; S = JSON.parse(PILA.pop()); save(); refresh(); toast('Deshecho'); }

const tema = n => { if (!S.temas[n]) S.temas[n] = { e: 0, conf: 0, mio: false, flaq: [], cosas: [], notas: '', enlaces: [], min: 0, ult: null, prox: null }; return S.temas[n]; };
const tit = n => (S.temario.find(x => x.n === n) || {}).t || 'Tema ' + n;
const titCorto = n => { const t = tit(n); const c = t.split(/[.:]/)[0]; return c.length > 70 ? c.slice(0, 68) + '…' : c; };
const bloqueDe = n => (S.temario.find(x => x.n === n) || {}).b || '';
const bloques = () => { const out = []; S.temario.forEach(x => { let b = out.find(y => y.n === x.b); if (!b) out.push(b = { n: x.b, temas: [] }); b.temas.push(x.n); }); return out; };
const est = n => (S.temas[n] || {}).e || 0;
const dominados = () => S.temario.filter(x => est(x.n) === 4).length;
const cuenta = e => S.temario.filter(x => est(x.n) === e).length;
const diasExamen = () => Math.max(0, diasEntre(hoy(), S.conv.fecha));
const tarjetasHoy = () => S.tarjetas.filter(c => !c.prox || c.prox <= hoy());
const debil = n => { const t = S.temas[n]; return !!t && ((t.conf && t.conf <= 2) || t.flaq.some(f => !f.ok)); };
const seEnfria = n => { const t = S.temas[n]; return !!t && t.e >= 3 && t.ult && diasEntre(t.ult, hoy()) > 21; };
const ultimaNota = n => { const s = S.sims.filter(x => x.tema === n).sort((a, b) => b.ts - a.ts)[0]; return s ? s.nota : null; };
function cambiarEstado(n, e) { const t = tema(n); if (t.e === e) return; S.hist.push({ ts: Date.now(), n, de: t.e, a: e }); t.e = e; if (e >= 1 && !t.ult) t.ult = hoy(); }
function programar(n, conf) { const t = tema(n); t.conf = conf; t.ult = hoy(); t.prox = addDays(hoy(), Math.round(CONF_DIAS[conf] * (t.e >= 4 ? 1.4 : 1))); }
function minSemana(off = 0) { const d = new Date(); const dow = (d.getDay() + 6) % 7; d.setDate(d.getDate() - dow + off * 7); const a = ymd(d), z = addDays(a, 7);
  return S.sesiones.filter(s => { const f = ymd(new Date(s.ts)); return f >= a && f < z; }).reduce((x, s) => x + s.min, 0) + S.sims.filter(s => { const f = ymd(new Date(s.ts)); return f >= a && f < z; }).reduce((x, s) => x + (s.min || 0), 0); }

/* ===================================================================== iconos de línea */
const LP = {
  hoy: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>', temario: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  sim: '<circle cx="9" cy="10" r="4.5"/><circle cx="16" cy="15" r="4.5"/>', grupo: '<circle cx="9" cy="9" r="3"/><circle cx="16.5" cy="10" r="2.4"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M14.5 15.2a4.5 4.5 0 0 1 6 3.8"/>',
  prog: '<path d="M5 19V13M10 19V8M15 19v-6M20 19V5"/>', ajustes: '<path d="M4 8h16M4 16h16"/><circle cx="9" cy="8" r="2.4" fill="var(--bg)"/><circle cx="15" cy="16" r="2.4" fill="var(--bg)"/>',
  mas: '<path d="M12 5v14M5 12h14"/>', atras: '<path d="M14.5 5l-7 7 7 7"/>', sig: '<path d="M9.5 5l7 7-7 7"/>', abajo: '<path d="M6 9.5l6 6 6-6"/>', cerrar: '<path d="M6 6l12 12M18 6L6 18"/>',
  crono: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5V9.5M10 2.5h4M18 6.5l1.3-1.3"/>', tarjeta: '<rect x="3.5" y="6" width="17" height="12" rx="2"/><path d="M7 10h10M7 14h6"/>',
  alerta: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17v.5"/>', check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', lapiz: '<path d="M15.5 4.5l4 4L9 19H5v-4z"/>',
  libro: '<path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z"/>', enlace: '<path d="M10 14a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1 1M14 10a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1-1"/>',
  compartir: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11l7.6-3.8M8.2 13l7.6 3.8"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>', doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  pausa: '<rect x="7" y="5" width="3.2" height="14" rx="1"/><rect x="13.8" y="5" width="3.2" height="14" rx="1"/>', play: '<path d="M8 5.5v13l10.5-6.5z"/>',
  bandera: '<path d="M5 21V4h11l-2 4 2 4H5"/>', estrella: '<path d="M12 3.8l2.4 5 5.4.6-4 3.7 1.1 5.4L12 15.8l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z"/>', pin: '<path d="M12 21s-6-6.2-6-11a6 6 0 0 1 12 0c0 4.8-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>',
  buscar: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>', repetir: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4"/>', copia: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  papelera: '<path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13"/>', ruta: '<circle cx="5" cy="17" r="2"/><circle cx="19" cy="7" r="2"/><path d="M7 17h6a3 3 0 0 0 0-6h-2a3 3 0 0 1 0-6h6"/>', stop: '<rect x="6" y="6" width="12" height="12" rx="1.5"/>',
  nube: '<path d="M7 18a4.5 4.5 0 1 1 1-8.9A5.5 5.5 0 0 1 18.6 11 3.5 3.5 0 0 1 18 18z"/>', usuario: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>', ojo: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>'
};
const ic = (k, s = 20, w = 1.7) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${LP[k] || ''}</svg>`;
const tile = (n, e, sz = 32, extra = '') => `<span class="tl e${e} ${extra}" style="--s:${sz}px">${n}</span>`;
const svg = (w, h, b, extra = '') => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" ${extra}>${b}</svg>`;

/* ===================================================================== animación con muelles */
function muelle(t, w = 14, z = 7) { return t <= 0 ? 0 : 1 - Math.exp(-z * t) * Math.cos(w * t); }
function animar(el, fn, op = {}) {
  if (!el || !el.animate) return null;
  if (reduceMotion()) return el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200 });
  const z = op.z || 7, w = op.w || 14, T = Math.min(1.5, 5.5 / z), kf = [];
  for (let i = 0; i <= 30; i++) kf.push(fn(i === 30 ? 1 : muelle(T * i / 30, w, z)));
  return el.animate(kf, { duration: T * 1000, delay: op.delay || 0, easing: 'linear', fill: op.fill || 'backwards' });
}
const espera = ms => new Promise(r => setTimeout(r, ms));

/* sonido (volumen multimedia; suena con el iPhone en silencio si la app está abierta) */
const AUD = {}; ['fin', 'aviso'].forEach(k => { try { const a = new Audio('sonidos/' + k + '.wav'); a.preload = 'auto'; AUD[k] = a; } catch (e) {} });
let AUD_OK = false;
document.addEventListener('pointerdown', () => { if (AUD_OK) return; AUD_OK = true; Object.values(AUD).forEach(a => { try { a.muted = true; const p = a.play(); if (p) p.then(() => { a.pause(); a.currentTime = 0; a.muted = false; }).catch(() => { a.muted = false; AUD_OK = false; }); } catch (e) {} }); }, { passive: true });
function sonar(k) { if (!S.aj.sonido || !AUD[k]) return; try { AUD[k].muted = false; AUD[k].currentTime = 0; const p = AUD[k].play(); if (p) p.catch(() => {}); } catch (e) {} }
let WL = null;
async function pantallaEncendida(si) { try { if (si && 'wakeLock' in navigator && !WL) { WL = await navigator.wakeLock.request('screen'); WL.addEventListener('release', () => { WL = null; }); } if (!si && WL) { await WL.release(); WL = null; } } catch (e) { WL = null; } }

/* ===================================================================== navegación */
const TABS = [['hoy', 'Hoy', 'hoy'], ['temario', 'Temario', 'temario'], ['simulacro', 'Simulacro', 'sim'], ['grupo', 'Grupo', 'grupo'], ['progreso', 'Progreso', 'prog']];
const FULL = ['bienvenida', 'sesion', 'examen', 'sorteo', 'repaso', 'supuesto-hacer', 'ensayo'];
const OSCURAS = ['sesion', 'examen'];
const R = {}, A_RENDER = {}, A_SALIR = {};
let ACT = null, P = {}, HIST = [];
function go(name, params = {}, modo = 'push') {
  cerrarHoja();
  if (A_SALIR[ACT]) A_SALIR[ACT]();
  if (ACT && modo === 'push') HIST.push([ACT, P]);
  if (modo === 'tab') HIST = [];
  ACT = name; P = params;
  pintar(modo);
}
function atras() { const [n, p] = HIST.pop() || ['hoy', {}]; if (A_SALIR[ACT]) A_SALIR[ACT](); ACT = n; P = p; pintar('back'); }
function pintar(modo) {
  const v = $('#view');
  v.innerHTML = R[ACT] ? R[ACT](P) : '';
  v.scrollTop = 0;
  document.body.classList.toggle('full', FULL.includes(ACT));
  document.body.classList.toggle('oscura', OSCURAS.includes(ACT));
  const tabAct = TABS.find(t => t[0] === ACT || (ACT === 'tema' && t[0] === 'temario') || (['tarjetas', 'supuestos', 'prueba2', 'resultado', 'elegir'].includes(ACT) && t[0] === (ACT === 'tarjetas' ? 'temario' : 'simulacro')));
  $$('.navbtn').forEach(b => { const on = tabAct && b.dataset.x === tabAct[0]; b.classList.toggle('on', on); });
  if (modo && !reduceMotion()) {
    const dx = modo === 'push' ? 36 : modo === 'back' ? -30 : 0, dy = modo === 'tab' || modo === 'fade' ? 12 : 0;
    animar(v, x => ({ opacity: Math.min(1, x * 1.6), transform: `translate(${(1 - x) * dx}px,${(1 - x) * dy}px)` }), { w: 13, z: 8 });
  }
  if (A_RENDER[ACT]) A_RENDER[ACT](v);
  themeColor();
}
function refresh() { if (!ACT) return; const v = $('#view'), y = v.scrollTop; v.innerHTML = R[ACT] ? R[ACT](P) : ''; v.scrollTop = y; if (A_RENDER[ACT]) A_RENDER[ACT](v, true); }
function navHtml() {
  return `<nav class="tabbar">${TABS.map(([k, t, i]) => `<button class="navbtn" data-a="tab" data-x="${k}">${ic(i, 23)}<span>${t}</span></button>`).join('')}</nav>
    <aside class="side"><div class="marca">Ruta 71</div>${TABS.map(([k, t, i]) => `<button class="navbtn" data-a="tab" data-x="${k}">${ic(i, 20)}<span>${t}</span></button>`).join('')}
    <button class="navbtn" data-a="ir" data-x="ajustes">${ic('ajustes', 20)}<span>Ajustes</span></button>
    <div class="sidecount"><small>Para el examen</small><b class="m">${diasExamen()}</b><small>días · ${S.conv.aprox ? 'hacia ' : ''}${fechaLarga(S.conv.fecha).replace(/^\S+ /, '')}</small></div></aside>`;
}
const topBar = (back, right = '') => `<div class="top"><div class="l">${back ? `<button class="back" data-a="atras">${ic('atras', 19, 2.2)}<span>${back}</span></button>` : ''}</div><div class="r">${right}</div></div>`;
const topTab = (extra = '') => topBar(null, `${extra}<button class="ib solomovil" data-a="ir" data-x="ajustes" aria-label="Ajustes">${ic('ajustes', 22)}</button>`);
const btn = (t, a, x = '', cls = '') => `<button class="btn ${cls}" data-a="${a}" data-x="${esc(x)}">${t}</button>`;
const chipsHtml = (xs, sel, a, k = '') => `<div class="chips">${xs.map(x => `<button class="ch ${x === sel ? 'on' : ''}" data-a="${a}" data-x="${esc(x)}" ${k ? `data-k="${k}"` : ''}>${esc(x)}</button>`).join('')}</div>`;
const segHtml = (xs, sel, a) => `<div class="seg">${xs.map(([k, t]) => `<button class="${k === sel ? 'on' : ''}" data-a="${a}" data-x="${k}">${t}</button>`).join('')}</div>`;

/* ===================================================================== Bienvenida (5 pasos) */
let ONB = 0, OBJ_TMP = null;
R.bienvenida = () => {
  if (OBJ_TMP == null) OBJ_TMP = S.obj.temas;
  const dots = Array.from({ length: 5 }, (_, i) => `<i class="${i === ONB ? 'on' : ''}"></i>`).join('');
  const pasos = [
    () => ['Un plano para llegar al examen.', 'Ruta 71 te ayuda a preparar la oposición tema a tema: qué sabes, qué te falla, qué toca repasar hoy y qué probabilidad tienes de que salga uno que dominas.',
      `<div class="logo">Ruta 71</div><div class="card">${rutaSvg(8, 3, 3)}<div class="s2">Cada tema es una parada. Avanzas cuando lo dominas.</div></div>`],
    () => ['¿Qué preparas?', 'Con esto ajusto cuántas bolas salen, cuánto dura el tema y la cuenta atrás. Todo se puede cambiar después en Ajustes.',
      `<div class="lab">Convocatoria</div><div class="card"><label class="srow"><span>Convocatoria</span><input class="tx" data-c="nombre" value="${esc(S.conv.nombre)}"></label>
        <label class="srow"><span>Especialidad</span><input class="tx" data-c="esp" value="${esc(S.conv.esp)}"></label>
        <div class="srow"><span>Bolas en el tema</span>${stepper('bolas', S.conv.bolas)}</div>
        <div class="srow"><span>Tiempo para el tema</span>${stepper('minTema', horasTxt(S.conv.minTema))}</div>
        <label class="srow"><span>Fecha del examen (aproximada)</span><input type="date" data-c="fecha" value="${S.conv.fecha}"></label></div>
        <p class="note">Las bolas dependen del número de temas: con más de 50 salen 4. Comprueba el tiempo en las bases de tu convocatoria.</p>`],
    () => ['Tu temario', `El de Tecnología ya está cargado: ${TEMARIO_TEC.length} temas en ${BLOQUES_TEC.length} bloques. Si preparas otra especialidad, pega la lista de temas.`,
      `<button class="card opt ${!TPEGAR ? 'sel' : ''}" data-a="onb-tec">${tile(71, 4, 42)}<div class="grow"><b>Tecnología · ${TEMARIO_TEC.length} temas</b><small>BOE de 21 de septiembre de 1993</small></div><span class="radio ${!TPEGAR ? 'on' : ''}"></span></button>
       <button class="card opt ${TPEGAR ? 'sel' : ''}" data-a="onb-pegar">${ic('doc', 28)}<div class="grow"><b>Pegar otro temario</b><small>Un tema por línea. Si una línea empieza por «#», es el nombre de un bloque.</small></div><span class="radio ${TPEGAR ? 'on' : ''}"></span></button>
       ${TPEGAR ? `<textarea class="inp" id="t-pegar" style="margin-top:10px;min-height:150px" placeholder="# Bloque 1&#10;Tema uno&#10;Tema dos…"></textarea>` : ''}`],
    () => ['Tu objetivo', 'Cuantos más temas domines, más probable es que te salga uno. Elige una meta realista para las semanas que quedan.',
      `<div class="lab">Temas que quiero dominar</div><div class="bigstep"><button data-a="onb-obj" data-x="-1">−</button><b class="m" id="onb-obj">${OBJ_TMP}</b><button data-a="onb-obj" data-x="1">+</button></div>
       <div class="card row"><b class="num" id="onb-prob" style="font-size:38px">${prob(OBJ_TMP)} %</b><small style="font-size:13.5px;line-height:1.4">de que salga al menos uno de esos temas entre las ${S.conv.bolas} bolas.</small></div>
       <div class="lab">Horas de estudio por semana</div>${chipsHtml(['5 h', '10 h', '15 h', '20 h', '25 h'], S.obj.horas + ' h', 'onb-horas')}`],
    () => ['¿Cómo te llamas?', 'Para saludarte y, si estás en un grupo, para que tus compañeros sepan quién comparte cada cosa. Lo tuyo (flaquezas, notas) es siempre privado.',
      `<input class="inp big" id="onb-nombre" placeholder="Tu nombre" value="${esc(S.yo.nombre)}" autocomplete="given-name">
       <div class="card">${ic('grupo', 26)}<div><b>¿Os vais a organizar en grupo?</b><small>Se configura en la pestaña Grupo: quien lo crea manda a los demás un enlace de invitación.</small></div></div>`]];
  const [t, lead, extra] = pasos[ONB]();
  return `<div class="pg narrow"><div class="col">${topBar(null, ONB < 4 ? '<button class="link sk" data-a="onb-saltar">Saltar</button>' : '')}
    <div class="onb"><h1>${t}</h1><p class="lead">${lead}</p>${extra}</div><div class="sp"></div>
    <div class="dots">${dots}</div>${btn(ONB < 4 ? 'Siguiente' : 'Empezar', 'onb-sig')}${ONB ? '<button class="link" data-a="onb-atras">Atrás</button>' : '<div style="height:44px"></div>'}</div></div>`;
};
let TPEGAR = false;
function rutaSvg(n, hecho, actual, labels) {
  const w = 300, xs = Array.from({ length: n }, (_, i) => 12 + i * (w - 24) / (n - 1));
  let b = `<line x1="${xs[0]}" y1="16" x2="${xs[n - 1]}" y2="16" stroke="var(--line)" stroke-width="5" stroke-linecap="round"/>`;
  if (hecho > 0) b += `<line class="rl" x1="${xs[0]}" y1="16" x2="${xs[Math.min(hecho, n - 1)]}" y2="16" stroke="var(--acc)" stroke-width="5" stroke-linecap="round"/>`;
  xs.forEach((x, i) => { const on = i <= hecho, cur = i === actual; b += `<circle class="st" style="--i:${i}" cx="${x}" cy="16" r="${cur ? 9 : 7}" fill="${on ? 'var(--acc)' : 'var(--card)'}" stroke="${cur ? 'var(--ink)' : on ? 'var(--acc)' : 'var(--line)'}" stroke-width="${cur ? 3 : 2.5}"/>`;
    if (labels) b += `<text x="${x}" y="42" text-anchor="middle" font-size="10.5" fill="var(--ink2)">${labels[i]}</text>`; });
  return `<svg width="100%" viewBox="0 0 ${w} ${labels ? 48 : 32}" class="ruta">${b}</svg>`;
}

/* ===================================================================== Hoy */
function loQueToca() {
  const out = [], h = hoy();
  S.temario.filter(x => { const t = S.temas[x.n]; return t && t.e >= 1 && t.prox && t.prox <= h; })
    .sort((a, b) => (S.temas[a.n].prox < S.temas[b.n].prox ? -1 : 1) || S.temas[a.n].conf - S.temas[b.n].conf).slice(0, 2)
    .forEach(x => { const t = S.temas[x.n]; out.push({ k: 'tema', n: x.n, t: `Repasar el tema ${x.n}`, s: `${t.ult ? (diasEntre(t.ult, h) ? 'Hace ' + plural(diasEntre(t.ult, h), 'día', 'días') : 'Repasado hoy') + ' · ' : ''}confianza ${t.conf || '–'} de 5`, min: 30 }); });
  const th = tarjetasHoy();
  if (th.length) { const por = {}; th.forEach(c => por[c.tema] = (por[c.tema] || 0) + 1); const ks = Object.keys(por);
    out.push({ k: 'tarjetas', n: ks.length === 1 ? +ks[0] : null, t: ks.length === 1 ? `${plural(th.length, 'tarjeta', 'tarjetas')} del tema ${ks[0]}` : `${th.length} tarjetas de ${ks.length} temas`, s: ks.length === 1 ? titCorto(+ks[0]) : 'Repaso espaciado', min: Math.max(2, Math.round(th.length * 1)) }); }
  const fall = S.supuestos.filter(s => s.int && s.int.length && s.int[s.int.length - 1].r === 'mal').slice(0, 1);
  fall.forEach(s => out.push({ k: 'supuesto', id: s.id, t: 'Supuesto: ' + s.titulo, s: 'Lo fallaste el ' + fechaCorta(ymd(new Date(s.int[s.int.length - 1].ts))), min: s.min || 25 }));
  if (out.length < 3) { const nuevo = siguientesTemas(1)[0]; if (nuevo) out.push({ k: 'tema', n: nuevo, t: `Tema nuevo: ${nuevo}`, s: titCorto(nuevo), min: 45 }); }
  return out;
}
function siguientesTemas(k) {
  const mios = S.temario.filter(x => tema(x.n).mio && est(x.n) < 4);
  const resto = S.temario.filter(x => !tema(x.n).mio && est(x.n) < 4).sort((a, b) => est(b.n) - est(a.n));
  return mios.concat(resto).slice(0, k).map(x => x.n);
}
R.hoy = () => {
  const d = dominados(), items = loQueToca(), min = items.reduce((a, x) => a + x.min, 0), dias = diasExamen();
  const fase = dias > 180 ? 'Queda mucho, y eso es bueno: ahora se construye la base.' : dias > 60 ? 'Mitad del camino: repasa lo que ya sabes y suma temas poco a poco.' : dias > 0 ? 'Recta final: más repaso y simulacros, menos temas nuevos.' : 'Hoy es el día. Confía en lo que has preparado.';
  return `<div class="pg"><div class="col">${topTab(`<button class="ib" data-a="nueva-tarjeta" aria-label="Nueva tarjeta">${ic('mas', 23)}</button>`)}
    <div class="kick">${cap(fechaLarga(hoy()))}${S.yo.nombre ? ' · ' + esc(S.yo.nombre) : ''}</div><h1>Hoy</h1>
    <div class="grid2">
    <div><button class="card cnt" data-a="ir" data-x="ruta"><div class="row" style="align-items:flex-end;gap:14px"><b class="num big cu" data-n="${dias}">${dias}</b><div style="padding-bottom:6px"><b>días para el examen</b><small>${S.conv.aprox ? 'Fecha aproximada: ' : ''}${fechaLarga(S.conv.fecha).replace(/^\S+ /, '')}</small></div></div><div class="s2">${fase}</div></button>
    <div class="card"><div class="cl"><span>Lo que toca hoy</span><em>${min ? 'unos ' + horasTxt(min) : ''}</em></div>
      ${items.length ? items.map((x, i) => `<button class="lr enter" style="--i:${i}" data-a="toca" data-k="${x.k}" data-x="${x.n || x.id || ''}">${x.n ? tile(x.n, est(x.n), 30) : `<span class="tl e0" style="--s:30px">${ic(x.k === 'supuesto' ? 'crono' : 'tarjeta', 16)}</span>`}<div class="grow"><b>${esc(x.t)}</b><small>${esc(x.s)}</small></div>${ic('sig', 16)}</button>`).join('')
        : '<div class="empty">Nada pendiente. Empieza un tema nuevo o haz un simulacro.</div>'}</div></div>
    <div><div class="card"><div class="cl"><span>Si hoy fuera el examen</span></div><div class="row"><b class="num" style="font-size:36px">${prob(d)} %</b><small style="font-size:13px;line-height:1.4">de que salga uno de tus ${plural(d, 'tema dominado', 'temas dominados')}. ${d < S.temario.length ? `Con 5 más subirías al ${prob(Math.min(S.temario.length, d + 5))} %.` : ''}</small></div>
      <div class="pbar" style="margin-top:10px"><i style="width:${prob(d)}%"></i></div></div>
    <div class="card row"><span style="color:var(--acc)">${ic('crono', 26)}</span><div class="grow"><b>Esta semana: ${horasTxt(minSemana())}</b><small>Tu objetivo son ${S.obj.horas} h.</small></div></div>
    <div style="height:14px"></div>${btn('Empezar a estudiar', 'estudiar')}</div></div>
  </div></div>`;
};
A_RENDER.hoy = v => contar(v);
function contar(v) { v.querySelectorAll('.cu').forEach(b => { const n = +b.dataset.n; if (reduceMotion() || !n) { b.textContent = n; return; } const t0 = performance.now(); const f = now => { const u = Math.min(1, (now - t0) / 700); b.textContent = Math.round(n * (1 - Math.pow(1 - u, 3))); if (u < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }); }

/* ===================================================================== Sesión de estudio */
let SES = null; try { SES = JSON.parse(localStorage.getItem('ruta71.ses') || 'null'); } catch (e) {}
const saveSes = () => { try { localStorage.setItem('ruta71.ses', JSON.stringify(SES)); } catch (e) {} };
const sesMs = () => !SES ? 0 : (SES.pausado || Date.now()) - SES.ini - (SES.pausas || 0);
let RAF = null;
R.sesion = () => {
  if (!SES) return '';
  const dur = SES.dur * 6e4;
  return `<div class="pg narrow"><div class="col">${topBar('Salir')}
    <div class="center"><div class="kick">${SES.pausado ? 'En pausa' : 'Estudiando'}</div><h1>Tema ${SES.n}</h1><div class="sub">${esc(titCorto(SES.n))}</div></div>
    <div class="timer">${anillo(240, 0, '00:00', 'de ' + horasTxt(SES.dur), 'ses')}</div>
    <div class="card"><div class="cl"><span>Mientras estudias, apunta</span></div><div class="minis"><button data-a="apunta" data-x="flaq">${ic('alerta', 20)}Flaqueza</button><button data-a="apunta" data-x="tarjeta">${ic('tarjeta', 20)}Tarjeta</button><button data-a="apunta" data-x="cosa">${ic('pin', 20)}Cosa concreta</button></div></div>
    <div class="sp"></div><div class="two">${btn(ic(SES.pausado ? 'play' : 'pausa', 18) + (SES.pausado ? 'Seguir' : 'Pausa'), 'ses-pausa', '', 'soft')}${btn('Terminar', 'ses-fin')}</div></div></div>`;
};
function anillo(size, frac, txt, sub, id) {
  const r = size / 2 - 13, c = 2 * Math.PI * r;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="ring" id="${id}-svg"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--ring-t)" stroke-width="15"/><circle id="${id}-arc" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--acc)" stroke-width="15" stroke-linecap="round" stroke-dasharray="${(c * frac).toFixed(1)} ${c.toFixed(1)}" data-c="${c.toFixed(1)}" transform="rotate(-90 ${size / 2} ${size / 2})"/><text id="${id}-t" x="${size / 2}" y="${size / 2 + size * .07}" text-anchor="middle" class="m" font-size="${size * .19}" font-weight="700" fill="currentColor">${txt}</text><text x="${size / 2}" y="${size / 2 + size * .07 + 28}" text-anchor="middle" font-size="13" fill="var(--ink2)" id="${id}-s">${sub}</text></svg>`;
}
function pintarAnillo(id, ms, total, txt) {
  const a = $('#' + id + '-arc'), t = $('#' + id + '-t'); if (!a) return;
  const c = +a.dataset.c; a.setAttribute('stroke-dasharray', `${(c * Math.min(1, Math.max(0, ms / total))).toFixed(1)} ${c}`); if (t) t.textContent = txt;
}
A_RENDER.sesion = () => { pantallaEncendida(true); cancelAnimationFrame(RAF); const loop = () => { if (ACT !== 'sesion' || !SES) return; const ms = sesMs(); pintarAnillo('ses', ms, SES.dur * 6e4, hm(ms));
  if (!SES.avisado && ms >= SES.dur * 6e4) { SES.avisado = true; saveSes(); sonar('fin'); toast(`Has llegado a ${horasTxt(SES.dur)}. Termina cuando quieras.`); } RAF = requestAnimationFrame(loop); }; RAF = requestAnimationFrame(loop); };
A_SALIR.sesion = () => { cancelAnimationFrame(RAF); pantallaEncendida(false); };
let FINS = null;
R['fin-sesion'] = () => {
  if (!FINS) return '';
  const nuevas = FINS.apuntes;
  return `<div class="pg narrow"><div class="col">${topBar(null)}<h1>Sesión guardada</h1>
    <div class="sub">Has estudiado ${horasTxt(FINS.min)} el tema ${FINS.n}. Llevas ${horasTxt(minSemana())} esta semana.</div>
    <div class="lab">¿Qué tal te lo sabes ahora?</div>
    <div class="conf">${[[1, 'Nada'], [2, 'Poco'], [3, 'Regular'], [4, 'Bien'], [5, 'Perfecto']].map(([i, t]) => `<button class="${FINS.conf === i ? 'on' : ''}" data-a="fses-conf" data-x="${i}"><b class="m">${i}</b><small>${t}</small></button>`).join('')}</div>
    <p class="note">${FINS.conf ? `Con un ${FINS.conf}, te lo vuelvo a proponer dentro de ${plural(Math.round(CONF_DIAS[FINS.conf] * (est(FINS.n) >= 4 ? 1.4 : 1)), 'día', 'días')}.` : 'Según tu respuesta, decido cuándo te lo vuelvo a proponer.'}</p>
    <div class="lab">¿En qué punto está el tema?</div>${estadoChips(FINS.n, 'fses-est')}
    ${nuevas.length ? `<div class="lab">Lo que has apuntado</div><div class="card">${nuevas.map(x => `<div class="lr">${ic(x.k === 'flaq' ? 'alerta' : x.k === 'tarjeta' ? 'tarjeta' : 'pin', 20)}<div class="grow"><b>${esc(x.t)}</b><small>${x.k === 'flaq' ? 'Nueva flaqueza' : x.k === 'tarjeta' ? 'Nueva tarjeta' : 'Cosa concreta'}</small></div></div>`).join('')}</div>` : ''}
    <div class="sp"></div><div style="height:14px"></div>${btn('Volver a Hoy', 'fses-ok')}</div></div>`;
};
const estadoChips = (n, a) => `<div class="estados">${NOMS.map((t, i) => `<button class="${est(n) === i ? 'on' : ''}" data-a="${a}" data-x="${i}">${tile('', i, 14)}<span>${t}</span></button>`).join('')}</div>`;

/* ===================================================================== Tu ruta */
R.ruta = () => {
  const d = dominados(), obj = S.obj.temas, dias = diasExamen(), sem = Math.max(1, Math.ceil(dias / 7)), falta = Math.max(0, obj - d), porSem = falta / sem;
  const desde = Date.now() - 28 * 864e5, ganados = S.hist.filter(h => h.ts >= desde && h.a === 4 && h.de < 4).length - S.hist.filter(h => h.ts >= desde && h.de === 4 && h.a < 4).length;
  const ritmo = ganados / 4, bien = falta === 0 || ritmo >= porSem * .9;
  const ms = []; const f0 = parseYmd(hoy()), f1 = parseYmd(S.conv.fecha); let f = new Date(f0.getFullYear(), f0.getMonth(), 1);
  while (f <= f1 && ms.length < 10) { ms.push(MES3[f.getMonth()]); f.setMonth(f.getMonth() + 1); }
  const n = Math.max(2, ms.length), hecho = obj ? Math.round((n - 1) * Math.min(1, d / obj)) : 0;
  const prox = siguientesTemas(Math.max(1, Math.min(4, Math.ceil(porSem))) + 2);
  return `<div class="pg"><div class="col">${topBar('Hoy')}<h1>Tu ruta</h1>
    <div class="sub">${falta ? `Para dominar ${obj} temas antes del examen te faltan ${falta}: unos ${coma((Math.round(porSem * 10) / 10).toString())} por semana durante ${plural(sem, 'semana', 'semanas')}.` : `Ya dominas tus ${obj} temas. Ahora toca mantenerlos con repasos y simulacros.`}</div>
    <div class="card"><div class="cl"><span>${bien ? 'Vas a buen ritmo' : 'Vas algo justo'}</span><em>${d} de ${obj}</em></div>${rutaSvg(n, hecho, hecho, ms.length >= 2 ? ms : null)}
      <div class="s2">${ganados > 0 ? `En las últimas 4 semanas has pasado ${plural(ganados, 'tema', 'temas')} a «Lo domino».` : 'Cuando pases temas a «Lo domino», aquí verás tu ritmo.'}${!bien && falta ? ' Prueba a subir una hora a la semana o a bajar el objetivo en Ajustes.' : ''}</div></div>
    <div class="lab">Lo siguiente</div><div class="card">${prox.map(x => `<button class="lr" data-a="abrir-tema" data-x="${x}">${tile(x, est(x), 30)}<div class="grow"><b>Tema ${x}${tema(x).mio ? ' · de los tuyos' : ''}</b><small>${esc(titCorto(x))} · ${NOMS[est(x)].toLowerCase()}</small></div>${ic('sig', 16)}</button>`).join('') || '<div class="empty">Nada pendiente.</div>'}</div>
    <p class="note">Marca en cada ficha «Es uno de mis temas» para que la ruta empiece por ellos.</p></div></div>`;
};
A_RENDER.ruta = v => { const l = v.querySelector('.rl'); if (l && l.animate && !reduceMotion()) { const len = l.getTotalLength ? l.getTotalLength() : 200; l.animate([{ strokeDasharray: `0 ${len}` }, { strokeDasharray: `${len} ${len}` }], { duration: 900, easing: 'cubic-bezier(.2,.8,.2,1)' }); } };

/* ===================================================================== Temario */
let TBUS = '';
function filtrar(n) {
  const f = S.ui.tfil, t = S.temas[n];
  if (f === 'Mis temas') return !!t && t.mio;
  if (f === 'Débiles') return debil(n);
  if (f === 'Se enfrían') return seEnfria(n);
  if (f !== 'Todos') return bloqueDe(n) === f;
  return true;
}
function htmlMapa(sel) {
  const xs = S.temario.filter(x => filtrar(x.n) && (!TBUS || (x.n + ' ' + x.t).toLowerCase().includes(TBUS.toLowerCase())));
  if (!xs.length) return '<div class="empty">Ningún tema con este filtro.</div>';
  return `<div class="mapa">${xs.map((x, i) => `<button class="tbtn" style="--i:${Math.min(i, 70)}" data-a="abrir-tema" data-x="${x.n}" aria-label="Tema ${x.n}">${tile(x.n, est(x.n), 0, (sel === x.n ? 'sel ' : '') + (tema(x.n).mio ? 'mio' : ''))}</button>`).join('')}</div>`;
}
function htmlLista() {
  return bloques().map(b => { const xs = b.temas.filter(n => filtrar(n) && (!TBUS || (n + ' ' + tit(n)).toLowerCase().includes(TBUS.toLowerCase()))); if (!xs.length) return '';
    const d = b.temas.filter(n => est(n) === 4).length, open = TOPEN[b.n] || S.ui.tfil !== 'Todos' || TBUS;
    return `<div class="blq"><button class="row bh" data-a="t-blq" data-x="${esc(b.n)}"><b class="grow">${esc(b.n)}</b><small class="m">${d} de ${b.temas.length}</small><span class="chev ${open ? 'open' : ''}">${ic('sig', 16)}</span></button>
      <div class="bbar">${b.temas.map(n => `<i class="e${est(n)}"></i>`).join('')}</div>
      ${open ? xs.map(n => `<button class="lr" data-a="abrir-tema" data-x="${n}">${tile(n, est(n), 28)}<div class="grow"><b class="tt">${esc(titCorto(n))}</b><small>${NOMS[est(n)]}${tema(n).mio ? ' · de los tuyos' : ''}${debil(n) ? ' · débil' : ''}</small></div></button>`).join('') : ''}</div>`; }).join('') || '<div class="empty">Ningún tema con este filtro.</div>';
}
let TOPEN = {};
R.temario = (p) => {
  const sel = ancho() ? (p.n || TSEL) : null;
  const filtros = ['Todos', 'Mis temas', 'Débiles', 'Se enfrían'].concat(bloques().length > 1 ? bloques().map(b => b.n) : []);
  const izq = `${topTab(`<button class="ib" data-a="t-buscar" aria-label="Buscar">${ic('buscar', 22)}</button>`)}<h1>Temario</h1>
    <div class="sub">${cuenta(4)} dominados · ${cuenta(3)} me los sé · ${cuenta(0)} sin empezar · probabilidad ${prob(dominados())} %</div>
    ${TBUSCAR ? `<input class="inp" id="t-bus" placeholder="Buscar por número o palabra" value="${esc(TBUS)}" style="margin-top:12px">` : ''}
    ${segHtml([['mapa', 'Mapa'], ['lista', 'Lista']], S.ui.tmodo, 't-modo')}
    <div class="chips scroll">${filtros.map(f => `<button class="ch ${S.ui.tfil === f ? 'on' : ''}" data-a="t-fil" data-x="${esc(f)}">${esc(f)}</button>`).join('')}</div>
    ${S.ui.tmodo === 'mapa' ? `<div class="card" style="padding:12px">${htmlMapa(sel)}</div><div class="leg">${NOMS.map((t, i) => `<span>${tile('', i, 12)}${t}</span>`).join('')}<span>${tile('', 1, 12, 'mio')}De los tuyos</span></div>`
      : `<div class="card" style="padding:2px 16px">${htmlLista()}</div>`}`;
  if (sel) return `<div class="pg wide split"><div class="colL">${izq}</div><div class="colR">${htmlFicha(sel, true)}</div></div>`;
  return `<div class="pg"><div class="col">${izq}</div></div>`;
};
let TSEL = null, TBUSCAR = false;
A_RENDER.temario = (v, re) => { const b = $('#t-bus'); if (b && !re) b.focus({ preventScroll: true }); };

/* ===================================================================== Ficha del tema */
let FTAB = 'flaq';
R.tema = p => `<div class="pg"><div class="col">${htmlFicha(p.n, false)}</div></div>`;
function htmlFicha(n, enSplit) {
  const t = tema(n), ns = ultimaNota(n), sims = S.sims.filter(s => s.tema === n).sort((a, b) => b.ts - a.ts), cards = S.tarjetas.filter(c => c.tema === n);
  const flaqA = t.flaq.filter(f => !f.ok), flaqC = t.flaq.filter(f => f.ok);
  const tabs = [['flaq', `Flaquezas${flaqA.length ? ' · ' + flaqA.length : ''}`], ['tarj', `Tarjetas${cards.length ? ' · ' + cards.length : ''}`], ['notas', 'Notas'], ['sims', 'Simulacros']];
  let cuerpo = '';
  if (FTAB === 'flaq') cuerpo = `<div class="lab">Lo que me falla</div><div class="card">${flaqA.map(f => `<div class="lr"><button class="ck" data-a="flaq-ok" data-x="${f.id}" aria-label="Superada"></button><div class="grow"><b>${esc(f.txt)}</b><small>Desde el ${fechaCorta(ymd(new Date(f.ts)))}</small></div><button class="ib sm" data-a="flaq-del" data-x="${f.id}" aria-label="Borrar">${ic('papelera', 17)}</button></div>`).join('')}
      ${flaqC.slice(-4).map(f => `<div class="lr"><button class="ck done" data-a="flaq-ok" data-x="${f.id}">${ic('check', 14, 3)}</button><div class="grow"><b class="tach">${esc(f.txt)}</b></div></div>`).join('')}
      <div class="addin"><input class="inp sm" id="nf" placeholder="Añadir flaqueza: lo que se te atasca" enterkeyhint="done"><button class="ib" data-a="flaq-add" aria-label="Añadir">${ic('mas', 20)}</button></div></div>
    <div class="lab">Cosas concretas (para saberse de memoria)</div><div class="card">${t.cosas.map(c => `<div class="lr">${ic('pin', 18)}<div class="grow"><b class="cosa">${esc(c.txt)}</b></div><button class="ib sm" data-a="cosa-del" data-x="${c.id}" aria-label="Borrar">${ic('papelera', 17)}</button></div>`).join('')}
      <div class="addin"><input class="inp sm" id="nc" placeholder="Fórmula, fecha, autor, normativa…" enterkeyhint="done"><button class="ib" data-a="cosa-add" aria-label="Añadir">${ic('mas', 20)}</button></div></div>`;
  if (FTAB === 'tarj') cuerpo = `<div class="row" style="margin-top:14px"><div class="grow sub" style="margin:0">${cards.length ? `${plural(cards.length, 'tarjeta', 'tarjetas')} · ${cards.filter(c => !c.prox || c.prox <= hoy()).length} tocan hoy` : 'Todavía no hay tarjetas de este tema.'}</div><button class="pill2" data-a="nueva-tarjeta" data-x="${n}">${ic('mas', 14)} Nueva</button></div>
      ${cards.map(c => `<button class="card cardq" data-a="editar-tarjeta" data-x="${c.id}"><div class="row"><b class="grow">${esc(c.q)}</b>${!c.prox || c.prox <= hoy() ? '<span class="pill">Hoy</span>' : ''}</div><small>${!c.prox || c.prox <= hoy() ? 'Toca hoy' : 'Repaso en ' + plural(diasEntre(hoy(), c.prox), 'día', 'días')}${c.de ? ' · de ' + esc(c.de) : ''}</small></button>`).join('')}
      ${cards.length ? `<div style="height:12px"></div>${btn('Repasar las de este tema', 'repasar', n)}` : ''}`;
  if (FTAB === 'notas') cuerpo = `<div class="lab">Notas, índice y esquema</div><textarea class="inp" id="notas" data-n="${n}" style="min-height:200px" placeholder="Índice del tema, ideas clave, cómo lo enlazas con el aula…">${esc(t.notas)}</textarea>
      <div class="lab">Enlaces</div><div class="card">${t.enlaces.map(e => `<div class="lr">${ic('enlace', 18)}<a class="grow tt" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.t || e.url)}</a><button class="ib sm" data-a="enl-del" data-x="${e.id}">${ic('papelera', 17)}</button></div>`).join('')}
      <div class="addin"><input class="inp sm" id="ne" placeholder="Pega un enlace (vídeo, apuntes…)" inputmode="url" enterkeyhint="done"><button class="ib" data-a="enl-add">${ic('mas', 20)}</button></div></div>`;
  if (FTAB === 'sims') cuerpo = sims.length ? `<div class="card">${sims.map(s => `<div class="srow"><span>${fechaCorta(ymd(new Date(s.ts)))} · ${horasTxt(s.min)}</span><b class="m">${nota1(s.nota)}</b></div>`).join('')}</div>` : `<div class="empty">Aún no has hecho ningún simulacro de este tema.</div>${btn('Hacer un simulacro con este tema', 'sim-tema', n, 'soft')}`;
  return `${topBar(enSplit ? null : 'Temario', `${S.grupo.url ? `<button class="ib" data-a="compartir" data-x="${n}" aria-label="Compartir">${ic('compartir', 21)}</button>` : ''}${enSplit ? '' : `<button class="ib solomovil" data-a="ir" data-x="ajustes">${ic('ajustes', 22)}</button>`}`)}
    <div class="row fhead">${tile(n, t.e, 58, 'pop')}<div class="grow"><div class="kick">${esc(bloqueDe(n))} · tema ${n}</div><h2>${esc(tit(n))}</h2></div></div>
    <div class="stats">${[[t.conf ? t.conf + '/5' : '–', 'confianza'], [t.min ? horasTxt(t.min) : '0 min', 'estudiado'], [t.ult ? diasEntre(t.ult, hoy()) + ' d' : '–', 'sin repasar'], [ns != null ? nota1(ns) : '–', 'último simulacro']].map(([a, b]) => `<div><b class="m">${a}</b><small>${b}</small></div>`).join('')}</div>
    <div class="lab">Estado</div>${estadoChips(n, 'f-est')}
    <label class="row tgrow"><b class="grow">Es uno de mis temas</b><button class="tgl ${t.mio ? 'on' : ''}" data-a="f-mio" data-x="${n}"><i></i></button></label>
    <div class="two" style="margin-top:12px">${btn(ic('crono', 18) + 'Estudiar', 'estudiar', n, 'soft')}${btn(ic('sim', 18) + 'Simulacro', 'sim-tema', n, 'soft')}</div>
    ${segHtml(tabs, FTAB, 'f-tab')}${cuerpo}`;
}
A_RENDER.tema = v => { const tl = v.querySelector('.fhead .tl'); if (tl) animar(tl, x => ({ transform: `scale(${.6 + .4 * x})` }), { w: 14, z: 7 }); };

/* ===================================================================== Tarjetas: repaso espaciado */
let RP = null;
function repasoCon(lista) { RP = { cola: lista.map(c => c.id), i: 0, vuelta: false, hechas: 0 }; go('repaso'); }
R.repaso = () => {
  if (!RP || RP.i >= RP.cola.length) return `<div class="pg narrow"><div class="col">${topBar(null)}<div class="center" style="margin-top:40px;color:var(--acc)">${ic('check', 64, 2.4)}</div><h1 class="center">Repaso hecho</h1><div class="sub center">${RP ? plural(RP.hechas, 'tarjeta repasada', 'tarjetas repasadas') : ''}. Las que te costaron volverán antes.</div><div class="sp"></div>${btn('Volver', 'atras')}</div></div>`;
  const c = S.tarjetas.find(x => x.id === RP.cola[RP.i]);
  if (!c) { RP.i++; return R.repaso(); }
  const pr = ((RP.i) / RP.cola.length * 100).toFixed(0);
  const iv = previsiones(c);
  return `<div class="pg narrow"><div class="col">${topBar('Salir', `<span class="m small">${RP.i + 1} de ${RP.cola.length}</span>`)}<div class="pbar"><i style="width:${pr}%"></i></div>
    <div class="flip ${RP.vuelta ? 'on' : ''}" data-a="${RP.vuelta ? '' : 'rp-ver'}"><div class="cara a"><div class="kick">Tema ${c.tema} · ${esc(bloqueDe(c.tema))}</div><div class="qq">${esc(c.q)}</div><div class="s2" style="margin-top:auto">Piénsalo o dilo en voz alta. Toca para ver la respuesta.</div></div>
      <div class="cara b"><div class="kick">Pregunta</div><b>${esc(c.q)}</b><div class="hr"></div><div class="kick">Respuesta</div><div class="aa">${esc(c.a).replace(/\n/g, '<br>')}</div></div></div>
    <div class="sp"></div>
    ${RP.vuelta ? `<div class="four">${[['0', 'No me acordaba', iv[0], 'mal'], ['1', 'Me ha costado', iv[1], ''], ['2', 'Bien', iv[2], ''], ['3', 'Fácil', iv[3], 'facil']].map(([k, t, d, cl]) => `<button class="${cl}" data-a="rp-nota" data-x="${k}"><b>${t}</b><small>${d === 0 ? 'otra vez hoy' : 'en ' + plural(d, 'día', 'días')}</small></button>`).join('')}</div>` : btn('Ver la respuesta', 'rp-ver')}</div></div>`;
};
function previsiones(c) { const iv = c.int || 0; return [0, Math.max(1, Math.round(iv * 1.2) || 1), Math.max(2, Math.round((iv || 1) * (c.ease || 2.5))), Math.max(4, Math.round((iv || 2) * (c.ease || 2.5) * 1.4))]; }
function notaTarjeta(c, k) {
  const iv = previsiones(c)[k]; c.reps = (c.reps || 0) + 1;
  c.ease = Math.min(3, Math.max(1.3, (c.ease || 2.5) + [-.2, -.15, 0, .15][k]));
  c.int = iv; c.prox = addDays(hoy(), iv);
}

/* hoja: nueva / editar tarjeta */
let FT = null;
function abrirTarjeta(id, n) {
  const c = id ? S.tarjetas.find(x => x.id === id) : null;
  FT = c ? { id: c.id, q: c.q, a: c.a, tema: c.tema, comp: false } : { id: null, q: '', a: '', tema: n || (ACT === 'tema' ? P.n : TSEL) || siguientesTemas(1)[0] || 1, comp: !!S.grupo.url };
  hoja(htmlTarjeta(), () => setTimeout(() => { const i = $('#ft-q'); if (i && !FT.id) i.focus({ preventScroll: true }); }, 350));
}
const htmlTarjeta = () => `<h2>${FT.id ? 'Editar tarjeta' : 'Nueva tarjeta'}</h2>
  <div class="lab">Pregunta</div><textarea class="inp" id="ft-q" style="min-height:64px" placeholder="Ej.: ¿Qué es la relación de transmisión?">${esc(FT.q)}</textarea>
  <div class="lab">Respuesta</div><textarea class="inp" id="ft-a" style="min-height:100px" placeholder="Lo que tendrías que contestar">${esc(FT.a)}</textarea>
  <div class="lab">Tema</div><select class="inp" id="ft-t">${S.temario.map(x => `<option value="${x.n}" ${x.n === FT.tema ? 'selected' : ''}>${x.n} · ${esc(titCorto(x.n))}</option>`).join('')}</select>
  ${!FT.id && S.grupo.url ? `<label class="row tgrow"><div class="grow"><b>Compartir con el grupo</b><small>La verán y podrán copiarla</small></div><button class="tgl ${FT.comp ? 'on' : ''}" data-a="ft-comp"><i></i></button></label>` : ''}
  <div style="height:14px"></div>${btn('Guardar tarjeta', 'ft-ok')}${FT.id ? '<button class="link del" data-a="ft-del">Borrar tarjeta</button>' : ''}`;

/* hoja: cambiar estado */
function abrirEstado(n) {
  hoja(`<h2>Tema ${n}</h2><div class="sub">¿En qué punto estás?</div>${NOMS.map((t, i) => `<button class="opt ${est(n) === i ? 'sel' : ''}" data-a="f-est" data-x="${i}" data-n="${n}">${tile('', i, 24)}<div class="grow"><b>${t}</b><small>${NOMS_D[i]}</small></div><span class="radio ${est(n) === i ? 'on' : ''}"></span></button>`).join('')}`);
}

/* ===================================================================== Simulacro */
R.simulacro = () => {
  const ult = S.sims.slice().sort((a, b) => b.ts - a.ts).slice(0, 5);
  const fall = S.supuestos.filter(s => s.int && s.int.length && s.int[s.int.length - 1].r === 'mal').length;
  return `<div class="pg"><div class="col">${topTab()}<h1>Simulacro</h1><div class="sub">Practica como el día del examen: mismo tiempo y mismas bolas.</div>
    <div class="grid2"><div>
    <button class="card opt" data-a="ir" data-x="sorteo"><div class="bmini">${[12, 45, 58, 66].map(n => `<i class="m">${n}</i>`).join('')}</div><div class="grow"><b>Sacar bolas · el tema</b><small>Salen ${S.conv.bolas} temas, eliges uno y lo escribes en ${horasTxt(S.conv.minTema)}</small></div>${ic('sig', 16)}</button>
    <button class="card opt" data-a="ir" data-x="supuestos">${ic('crono', 28)}<div class="grow"><b>Supuestos prácticos</b><small>${S.supuestos.length ? plural(S.supuestos.length, 'supuesto', 'supuestos') + (fall ? ` · ${fall} para repetir` : '') : 'Tu banco de problemas por bloques'}</small></div>${ic('sig', 16)}</button>
    <button class="card opt" data-a="ir" data-x="prueba2">${ic('mic', 28)}<div class="grow"><b>Prueba 2 · programación y defensa</b><small>Lo que debe llevar, tus situaciones de aprendizaje y ensayos</small></div>${ic('sig', 16)}</button></div>
    <div><div class="lab">Últimos simulacros</div><div class="card">${ult.length ? ult.map(s => `<button class="srow" data-a="abrir-tema" data-x="${s.tema}"><span class="row" style="gap:8px">${tile(s.tema, est(s.tema), 26)}Tema ${s.tema} · ${fechaCorta(ymd(new Date(s.ts)))}</span><b class="m">${nota1(s.nota)}</b></button>`).join('') : '<div class="empty">Cuando hagas el primero, saldrá aquí con su nota.</div>'}</div></div></div>
  </div></div>`;
};

/* ---------- sorteo de bolas ---------- */
let SORT = null;
R.sorteo = () => {
  const s = SORT;
  const cand = S.ui.solo ? S.temario.filter(x => est(x.n) >= 3).length : S.temario.length;
  return `<div class="pg narrow"><div class="col">${topBar('Simulacro')}<div class="kick">El tema · sorteo</div><h1>${s && s.fase === 'listo' ? 'Han salido estas' : s ? 'Sacando bolas…' : 'Sacar bolas'}</h1>
    <div class="sub">${s && s.fase === 'listo' ? `Elige una. Tendrás ${horasTxt(S.conv.minTema)}; te aviso a mitad y 15 minutos antes.` : `Como el día del examen: salen ${S.conv.bolas} bolas al azar y eliges una.`}</div>
    <div class="bombo" id="bombo">${Array.from({ length: Math.min(24, S.temario.length) }, (_, i) => `<span class="mb m">${(i * 29) % S.temario.length + 1}</span>`).join('')}</div>
    <div class="balls" id="balls">${Array.from({ length: S.conv.bolas }, (_, i) => { const n = s && s.bolas[i]; const vis = s && (s.fase === 'listo' || i < s.vistas);
      return `<button class="bc" data-a="${s && s.fase === 'listo' ? 'elegir-bola' : ''}" data-x="${n || ''}"><span class="bl m ${vis ? 'on' : 'hueco'} ${s && s.sel === n ? 'sel' : ''}">${vis ? n : ''}</span><small>${vis ? NOMS[est(n)] : ''}</small></button>`; }).join('')}</div>
    ${s && s.fase === 'listo' ? `<div class="card enter">${s.bolas.map((n, i) => `<button class="lr" style="--i:${i}" data-a="elegir-bola" data-x="${n}"><b class="m nn ${s.sel === n ? 'acc' : ''}">${n}</b><div class="grow tt ${s.sel === n ? 'b' : ''}">${esc(tit(n))}</div></button>`).join('')}</div>
      <div class="sp"></div><div style="height:12px"></div>${btn(s.sel ? `Empezar con el tema ${s.sel}` : 'Elige una bola', 'examen-ir', '', s.sel ? '' : 'off')}<button class="link" data-a="sortear">Volver a sacar</button>`
      : `<label class="row tgrow"><div class="grow"><b>Solo de los que llevo</b><small>Para practicar con temas que ya te sabes (${cand})</small></div><button class="tgl ${S.ui.solo ? 'on' : ''}" data-a="solo"><i></i></button></label>
      <div class="sp"></div><div style="height:12px"></div>${s ? '' : btn('Sacar las bolas', 'sortear')}`}
  </div></div>`;
};
let BOMBO = null;
function moverBombo(dur) {
  const b = $('#bombo'); if (!b) return; const W = b.clientWidth, H = b.clientHeight, ps = $$('#bombo .mb').map(() => ({ x: W / 2 + (Math.random() - .5) * W * .6, y: H / 2 + (Math.random() - .5) * H * .5, vx: (Math.random() - .5) * 7, vy: (Math.random() - .5) * 7 }));
  const els = $$('#bombo .mb'), t0 = performance.now(); cancelAnimationFrame(BOMBO);
  const paso = now => { const fuerza = dur ? Math.max(0, 1 - (now - t0) / dur) : 0;
    ps.forEach((p, i) => { p.vx += (Math.random() - .5) * 2.2 * fuerza; p.vy += (Math.random() - .5) * 2.2 * fuerza + .15; p.vx *= .97; p.vy *= .97; p.x += p.vx; p.y += p.vy;
      const dx = (p.x - W / 2) / (W / 2 - 18), dy = (p.y - H / 2) / (H / 2 - 18), d = Math.hypot(dx, dy); if (d > 1) { p.x = W / 2 + dx / d * (W / 2 - 18); p.y = H / 2 + dy / d * (H / 2 - 18); p.vx *= -.7; p.vy *= -.7; }
      els[i].style.transform = `translate(${p.x - 15}px,${p.y - 15}px)`; });
    if (ACT === 'sorteo' && (fuerza > 0 || now - t0 < (dur || 0) + 1500)) BOMBO = requestAnimationFrame(paso); };
  BOMBO = requestAnimationFrame(paso);
}
A_RENDER.sorteo = () => moverBombo(SORT && SORT.fase !== 'listo' ? 0 : 0);
A_SALIR.sorteo = () => cancelAnimationFrame(BOMBO);
async function sortear() {
  const pool = (S.ui.solo ? S.temario.filter(x => est(x.n) >= 3) : S.temario).map(x => x.n);
  if (pool.length < S.conv.bolas) { toast(`Necesitas al menos ${S.conv.bolas} temas en «Me lo sé» o «Lo domino» para este modo.`); return; }
  const b = []; while (b.length < S.conv.bolas) { const n = pool[Math.floor(Math.random() * pool.length)]; if (!b.includes(n)) b.push(n); }
  b.sort((x, y) => x - y);
  SORT = { bolas: b, vistas: 0, fase: 'girando', sel: null }; refresh(); moverBombo(1800);
  await espera(reduceMotion() ? 100 : 1500);
  for (let i = 0; i < b.length; i++) {
    if (ACT !== 'sorteo' || !SORT) return;
    SORT.vistas = i + 1;
    const bc = $$('#balls .bl')[i]; if (bc) { bc.classList.remove('hueco'); bc.classList.add('on'); bc.textContent = b[i]; bc.nextElementSibling.textContent = NOMS[est(b[i])];
      animar(bc, v => ({ transform: `translateY(${(1 - v) * -150}px) rotate(${(1 - v) * -40}deg)` }), { w: 11, z: 5 }); }
    await espera(reduceMotion() ? 50 : 520);
  }
  await espera(reduceMotion() ? 0 : 450);
  if (ACT === 'sorteo' && SORT) { SORT.fase = 'listo'; refresh(); }
}

/* ---------- modo examen ---------- */
let SIM = null; try { SIM = JSON.parse(localStorage.getItem('ruta71.sim') || 'null'); } catch (e) {}
const saveSim = () => { try { localStorage.setItem('ruta71.sim', JSON.stringify(SIM)); } catch (e) {} };
const simMs = () => !SIM ? 0 : (SIM.pausado || Date.now()) - SIM.ini - (SIM.pausas || 0);
R.examen = () => {
  if (!SIM) return '';
  return `<div class="pg narrow"><div class="col">${topBar('Salir')}<div class="center"><div class="kick">Examen · tema ${SIM.tema}${SIM.pausado ? ' · en pausa' : ''}</div><h1 style="font-size:26px">${esc(titCorto(SIM.tema))}</h1></div>
    <div class="timer">${anillo(250, 1, hm(SIM.min * 6e4), 'quedan de ' + horasTxt(SIM.min), 'ex')}</div>
    <div class="card"><div class="row"><b class="grow" id="ex-av">Te aviso a mitad y 15 minutos antes.</b></div><div class="pbar" style="margin-top:8px"><i id="ex-bar" style="width:0%"></i></div></div>
    <div class="sp"></div><div class="two">${btn(ic(SIM.pausado ? 'play' : 'pausa', 18) + (SIM.pausado ? 'Seguir' : 'Pausa'), 'ex-pausa', '', 'soft')}${btn('He terminado', 'ex-fin')}</div></div></div>`;
};
A_RENDER.examen = () => { pantallaEncendida(true); cancelAnimationFrame(RAF);
  const loop = () => { if (ACT !== 'examen' || !SIM) return; const tot = SIM.min * 6e4, ms = simMs(), rest = tot - ms;
    pintarAnillo('ex', Math.max(0, rest), tot, rest > 0 ? hm(rest) : 'Tiempo');
    const bar = $('#ex-bar'); if (bar) bar.style.width = Math.min(100, ms / tot * 100) + '%';
    const av = $('#ex-av');
    if (!SIM.a1 && ms >= tot / 2) { SIM.a1 = 1; saveSim(); sonar('aviso'); if (av) av.textContent = 'Vas por la mitad del tiempo.'; }
    if (!SIM.a2 && rest <= 15 * 6e4 && tot > 30 * 6e4) { SIM.a2 = 1; saveSim(); sonar('aviso'); if (av) av.textContent = 'Quedan 15 minutos: ve cerrando con la conclusión.'; }
    if (!SIM.a3 && rest <= 0) { SIM.a3 = 1; saveSim(); sonar('fin'); if (av) av.textContent = 'Se ha acabado el tiempo. Deja de escribir.'; const s = $('#ex-svg'); if (s) animar(s, v => ({ transform: `scale(${1 + .05 * Math.sin(Math.PI * Math.min(1, v))})` }), { w: 9, z: 7 }); }
    $('#ex-svg') && $('#ex-svg').classList.toggle('late', rest > 0 && rest < 60000);
    RAF = requestAnimationFrame(loop); };
  RAF = requestAnimationFrame(loop); };
A_SALIR.examen = () => { cancelAnimationFrame(RAF); pantallaEncendida(false); };

/* ---------- autoevaluación con rúbrica ---------- */
let EV = null;
const notaRub = () => S.rubrica.reduce((a, c, i) => a + c.p * ((EV.pts[i] == null ? 0 : EV.pts[i]) / 4), 0) / 10;
R.evaluar = () => {
  if (!EV) return '';
  const completa = EV.pts.every(x => x != null);
  return `<div class="pg narrow"><div class="col">${topBar(null)}<div class="kick">Tema ${EV.tema} · ${horasTxt(EV.min)}</div><h1>¿Qué tal ha ido?</h1>
    <div class="sub">Puntúa cada criterio del 4 al 0, como lo haría el tribunal. La rúbrica se puede cambiar en Ajustes.</div>
    <div class="card">${S.rubrica.map((c, i) => `<div class="rub"><div class="row"><b class="grow">${esc(c.t)}</b><small class="m">${c.p} %</small></div><div class="pts">${[4, 3, 2, 1, 0].map(v => `<button class="m ${EV.pts[i] === v ? 'on' : ''}" data-a="ev-pt" data-x="${v}" data-k="${i}">${v}</button>`).join('')}</div></div>`).join('')}</div>
    <div class="row" style="margin-top:14px;justify-content:space-between"><b>Nota</b><b class="num" id="ev-nota" style="font-size:36px">${completa ? nota1(notaRub()) : '–'}</b></div>
    <div class="lab">Lo que te ha faltado o has puesto mal</div><div class="card">${EV.olv.map((o, i) => `<div class="lr">${ic('alerta', 19)}<b class="grow">${esc(o)}</b><button class="ib sm" data-a="ev-olv-del" data-x="${i}">${ic('papelera', 17)}</button></div>`).join('')}
      <div class="addin"><input class="inp sm" id="ev-olv" placeholder="Pasará a flaquezas del tema" enterkeyhint="done"><button class="ib" data-a="ev-olv-add">${ic('mas', 20)}</button></div></div>
    <label class="card row" style="cursor:pointer">${ic('doc', 24)}<div class="grow"><b>${EV.foto ? 'Foto añadida' : 'Foto del examen (opcional)'}</b><small>Para comparar tu índice y tu letra con el siguiente</small></div><span class="pill2">${EV.foto ? 'Cambiar' : 'Añadir'}</span><input type="file" accept="image/*" capture="environment" id="ev-foto" hidden></label>
    <div class="sp"></div><div style="height:14px"></div>${btn('Guardar el simulacro', 'ev-ok', '', completa ? '' : 'off')}</div></div>`;
};
let RES = null;
R.resultado = () => {
  if (!RES) return '';
  const ant = S.sims.filter(s => s.tema === RES.tema && s.id !== RES.id).sort((a, b) => b.ts - a.ts)[0];
  return `<div class="pg narrow"><div class="col">${topBar(null)}<div class="center" style="margin-top:20px">${tile(RES.tema, est(RES.tema), 74, 'pop')}</div>
    <h1 class="center" style="margin-top:14px"><span class="num cu" data-n="${Math.round(RES.nota * 10)}" data-d="1" style="font-size:64px">${nota1(RES.nota)}</span></h1>
    <div class="sub center">${ant ? (RES.nota > ant.nota ? `Has subido desde ${nota1(ant.nota)}.` : RES.nota < ant.nota ? `La vez anterior sacaste ${nota1(ant.nota)}. Mira las flaquezas.` : 'Igual que la vez anterior.') : 'Tu primer simulacro de este tema.'} Siguiente repaso: en ${plural(diasEntre(hoy(), tema(RES.tema).prox || hoy()), 'día', 'días')}.</div>
    ${RES.olv ? `<div class="card row">${ic('alerta', 22)}<div class="grow"><b>${plural(RES.olv, 'flaqueza nueva', 'flaquezas nuevas')}</b><small>Guardadas en la ficha del tema ${RES.tema}</small></div></div>` : ''}
    <div class="lab">¿En qué punto está el tema ahora?</div>${estadoChips(RES.tema, 'res-est')}
    <div class="sp"></div><div style="height:14px"></div><div class="two">${btn('Ver la ficha', 'abrir-tema', RES.tema, 'soft')}${btn('Listo', 'res-ok')}</div></div></div>`;
};
A_RENDER.resultado = v => { v.querySelectorAll('.cu').forEach(b => { const n = +b.dataset.n; if (reduceMotion()) return; const t0 = performance.now(); const f = now => { const u = Math.min(1, (now - t0) / 800); b.textContent = nota1(n * (1 - Math.pow(1 - u, 3)) / 10); if (u < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }); };

/* ===================================================================== Supuestos prácticos */
R.supuestos = () => {
  const bl = ['Todos'].concat([...new Set(S.supuestos.map(s => s.b).filter(Boolean))]), f = bl.includes(S.ui.sfil) ? S.ui.sfil : 'Todos';
  const xs = S.supuestos.filter(s => f === 'Todos' || s.b === f).sort((a, b) => estadoSup(b) - estadoSup(a));
  return `<div class="pg"><div class="col">${topBar('Simulacro', `<button class="ib" data-a="sup-nuevo" aria-label="Nuevo supuesto">${ic('mas', 23)}</button>`)}<h1>Supuestos</h1>
    <div class="sub">Practica la parte práctica por bloques. Los que fallas suben arriba para repetirlos.</div>${bl.length > 1 ? chipsHtml(bl, f, 's-fil') : ''}
    ${xs.length ? xs.map((s, i) => { const u = s.int && s.int[s.int.length - 1];
      return `<button class="card cardq enter" style="--i:${i}" data-a="sup-hacer" data-x="${s.id}"><div class="row"><b class="grow">${esc(s.titulo)}</b>${u && u.r === 'mal' ? '<span class="pill warn">Repetir</span>' : u && u.r === 'bien' ? `<span class="okc">${ic('check', 15, 2.6)}</span>` : ''}</div>
        <small>${esc(s.b || 'Sin bloque')} · ${s.min} min · ${u ? ({ bien: 'bien', regular: 'regular', mal: 'lo fallaste' })[u.r] + ' el ' + fechaCorta(ymd(new Date(u.ts))) : 'sin hacer'}${s.de ? ' · de ' + esc(s.de) : ''}</small></button>`; }).join('')
      : `<div class="empty">Añade tu primer supuesto con el + de arriba: enunciado, solución y tiempo. También puedes copiar los que compartan en el grupo.</div>${btn('Añadir un supuesto', 'sup-nuevo')}`}
  </div></div>`;
};
const estadoSup = s => { const u = s.int && s.int[s.int.length - 1]; return !u ? 1 : u.r === 'mal' ? 3 : u.r === 'regular' ? 2 : 0; };
let FS = null;
function abrirSupuesto(id) {
  const s = id ? S.supuestos.find(x => x.id === id) : null;
  FS = s ? Object.assign({}, s) : { id: null, titulo: '', b: bloques()[0] ? bloques()[0].n : '', enun: '', sol: '', min: 25, comp: !!S.grupo.url };
  hoja(htmlSup());
}
const htmlSup = () => `<h2>${FS.id ? 'Editar supuesto' : 'Nuevo supuesto'}</h2>
  <div class="lab">Título</div><input class="inp" id="fs-t" value="${esc(FS.titulo)}" placeholder="Ej.: Circuito mixto con 5 resistencias">
  <div class="lab">Bloque</div><select class="inp" id="fs-b">${bloques().map(b => `<option ${b.n === FS.b ? 'selected' : ''}>${esc(b.n)}</option>`).join('')}</select>
  <div class="lab">Enunciado</div><textarea class="inp" id="fs-e" style="min-height:110px" placeholder="Copia el enunciado">${esc(FS.enun)}</textarea>
  <div class="lab">Solución</div><textarea class="inp" id="fs-s" style="min-height:110px" placeholder="Pasos y resultado">${esc(FS.sol)}</textarea>
  <div class="lab">Tiempo (minutos)</div><input class="inp" id="fs-m" type="number" inputmode="numeric" min="1" max="240" value="${FS.min}" style="width:120px">
  ${!FS.id && S.grupo.url ? `<label class="row tgrow"><div class="grow"><b>Compartir con el grupo</b></div><button class="tgl ${FS.comp ? 'on' : ''}" data-a="fs-comp"><i></i></button></label>` : ''}
  <div style="height:14px"></div>${btn('Guardar', 'fs-ok')}${FS.id ? '<button class="link del" data-a="fs-del">Borrar supuesto</button>' : ''}`;
let SH = null;
R['supuesto-hacer'] = () => {
  const s = S.supuestos.find(x => x.id === (SH && SH.id)); if (!s) return '';
  return `<div class="pg narrow"><div class="col">${topBar('Supuestos', `<button class="ib" data-a="sup-editar" data-x="${s.id}" aria-label="Editar">${ic('lapiz', 21)}</button>`)}<div class="kick">${esc(s.b)} · ${s.min} min</div><h1>${esc(s.titulo)}</h1>
    <div class="card"><p class="txt">${esc(s.enun || 'Sin enunciado.').replace(/\n/g, '<br>')}</p></div>
    <div class="row" style="justify-content:space-between;margin-top:14px"><span class="row" style="gap:8px">${ic('crono', 22)}<b class="m" id="sh-t" style="font-size:24px">00:00</b><small class="m" style="color:var(--ink2)">/ ${s.min}:00</small></span>${!SH.fin ? `<button class="pill2" data-a="sh-pausa">${SH.pausado ? 'Seguir' : 'Pausa'}</button>` : ''}</div>
    ${SH.fin ? `<div class="card sol enter"><div class="kick">Solución</div><p class="txt">${esc(s.sol || 'Sin solución apuntada.').replace(/\n/g, '<br>')}</p></div>
      <div class="lab">¿Cómo te ha salido?</div><div class="three">${[['bien', 'Bien'], ['regular', 'Regular'], ['mal', 'Mal']].map(([k, t]) => `<button class="${k}" data-a="sh-r" data-x="${k}">${t}</button>`).join('')}</div>`
      : `<div class="sp"></div><div class="card dashed row">${ic('libro', 22)}<b class="grow">Solución oculta</b><small>Se ve al terminar</small></div>${btn('He terminado', 'sh-fin')}`}</div></div>`;
};
A_RENDER['supuesto-hacer'] = () => { cancelAnimationFrame(RAF); const loop = () => { if (ACT !== 'supuesto-hacer' || !SH) return; const ms = (SH.fin || SH.pausado || Date.now()) - SH.ini - (SH.pausas || 0); const t = $('#sh-t'); if (t) { t.textContent = hm(ms); t.classList.toggle('over', SH.min && ms > SH.min * 6e4); } RAF = requestAnimationFrame(loop); }; RAF = requestAnimationFrame(loop); };

/* ===================================================================== Prueba 2 */
R.prueba2 = () => {
  const ok = S.p2.checks.filter(c => c.ok).length;
  return `<div class="pg"><div class="col">${topBar('Simulacro')}<h1>Prueba 2</h1><div class="sub">Programación didáctica y situaciones de aprendizaje. Marca lo que ya tienes listo y ensaya la defensa en voz alta.</div>
    <div class="grid2"><div><div class="lab">Programación · ${ok} de ${S.p2.checks.length}</div><div class="card">${S.p2.checks.map(c => `<div class="lr"><button class="ck ${c.ok ? 'done' : ''}" data-a="p2-ck" data-x="${c.id}">${c.ok ? ic('check', 14, 3) : ''}</button><span class="grow ${c.ok ? 'tach' : ''}">${esc(c.t)}</span><button class="ib sm" data-a="p2-del" data-x="${c.id}">${ic('papelera', 16)}</button></div>`).join('')}
      <div class="addin"><input class="inp sm" id="p2-n" placeholder="Añadir un apartado" enterkeyhint="done"><button class="ib" data-a="p2-add">${ic('mas', 20)}</button></div></div></div>
    <div><div class="lab">Situaciones de aprendizaje · ${S.p2.sits.length}</div><div class="card">${S.p2.sits.map(s => `<div class="srow"><button class="grow tt" style="text-align:left" data-a="sit-editar" data-x="${s.id}"><b>${esc(s.t)}</b><small>${esc(s.curso || '')}${s.ens ? ' · ' + plural(s.ens, 'ensayo', 'ensayos') : ''}</small></button><button class="pill2" data-a="ensayar" data-x="${s.id}">Ensayar</button></div>`).join('') || '<div class="empty">Añade las situaciones que llevas para poder ensayarlas.</div>'}
      <button class="addrow" data-a="sit-nueva">${ic('mas', 18)}Nueva situación de aprendizaje</button></div>
    <div class="lab">Ensayos</div><div class="card">${S.p2.ensayos.slice(-4).reverse().map(e => `<div class="srow"><span>${fechaCorta(ymd(new Date(e.ts)))} · ${esc(e.t)}</span><b class="m">${horasTxt(e.min)}${e.nota ? ' · ' + e.nota : ''}</b></div>`).join('') || '<div class="empty">Ensaya la defensa de la programación o de una situación con el cronómetro.</div>'}
      ${btn('Ensayar la programación', 'ensayar', 'prog', 'soft')}</div></div></div>
  </div></div>`;
};
let FSIT = null;
function abrirSit(id) { const s = id ? S.p2.sits.find(x => x.id === id) : null; FSIT = s ? Object.assign({}, s) : { id: null, t: '', curso: '', notas: '' };
  hoja(`<h2>${FSIT.id ? 'Situación de aprendizaje' : 'Nueva situación'}</h2><div class="lab">Título</div><input class="inp" id="si-t" value="${esc(FSIT.t)}" placeholder="Ej.: Domótica con micro:bit">
    <div class="lab">Curso</div><input class="inp" id="si-c" value="${esc(FSIT.curso)}" placeholder="2.º ESO"><div class="lab">Guion y notas</div><textarea class="inp" id="si-n" style="min-height:140px" placeholder="Reto, producto final, sesiones, evaluación…">${esc(FSIT.notas)}</textarea>
    <div style="height:14px"></div>${btn('Guardar', 'si-ok')}${FSIT.id ? '<button class="link del" data-a="si-del">Borrar</button>' : ''}`); }

/* ---------- ensayo de la defensa ---------- */
let ENS = null, REC = null;
R.ensayo = () => {
  if (!ENS) return '';
  const total = ENS.guion.reduce((a, g) => a + g.m, 0);
  if (ENS.fin) return `<div class="pg narrow"><div class="col">${topBar(null)}<h1>Ensayo terminado</h1><div class="sub">${esc(ENS.t)} · ${horasTxt(ENS.ms / 6e4)} de ${total} min previstos.</div>
    <div class="card">${ENS.guion.map((g, i) => { const real = Math.round((ENS.partes[i] || 0) / 6e4); return `<div class="srow"><span>${i + 1} · ${esc(g.t)}</span><b class="m ${real > g.m + 1 ? 'warn-t' : ''}">${real} / ${g.m} min</b></div>`; }).join('')}</div>
    ${ENS.audio ? `<div class="lab">Tu grabación</div><audio controls src="${ENS.audio}" style="width:100%"></audio><p class="note">La grabación no se guarda: escúchala ahora o descárgala desde el reproductor.</p>` : ''}
    <div class="lab">¿Cómo la has visto? (1 a 10)</div><div class="nums">${Array.from({ length: 10 }, (_, i) => `<button class="m ${ENS.nota === i + 1 ? 'on' : ''}" data-a="en-nota" data-x="${i + 1}">${i + 1}</button>`).join('')}</div>
    <div class="sp"></div><div style="height:14px"></div>${btn('Guardar el ensayo', 'en-ok')}</div></div>`;
  return `<div class="pg narrow"><div class="col">${topBar('Salir')}<div class="kick">Ensayo · ${ENS.k === 'prog' ? 'programación' : 'situación de aprendizaje'}</div><h1>${esc(ENS.t)}</h1>
    <div class="center" style="margin:18px 0 6px"><b class="num" id="en-t" style="font-size:62px">00:00</b><div class="sub">de ${total} min previstos</div></div>
    <div class="card"><div class="cl"><span>Guion</span><em>parte ${ENS.i + 1} de ${ENS.guion.length}</em></div>${ENS.guion.map((g, i) => `<div class="lr ${i === ENS.i ? 'cur' : i < ENS.i ? 'pas' : ''}"><b class="m" style="width:20px">${i + 1}</b><span class="grow">${esc(g.t)}</span><small class="m">${g.m} min</small></div>`).join('')}</div>
    <div class="sp"></div><div class="two">${btn(ic(REC ? 'stop' : 'mic', 18) + (REC ? 'Grabando' : 'Grabar'), 'en-rec', '', 'soft' + (REC ? ' rec' : ''))}${btn(ENS.i < ENS.guion.length - 1 ? 'Siguiente parte' : 'Terminar', 'en-sig')}</div></div></div>`;
};
A_RENDER.ensayo = () => { if (!ENS || ENS.fin) return; pantallaEncendida(true); cancelAnimationFrame(RAF); const loop = () => { if (ACT !== 'ensayo' || !ENS || ENS.fin) return; const t = $('#en-t'); if (t) t.textContent = hm(Date.now() - ENS.ini); RAF = requestAnimationFrame(loop); }; RAF = requestAnimationFrame(loop); };
A_SALIR.ensayo = () => { cancelAnimationFrame(RAF); pantallaEncendida(false); pararGrabacion(); };
async function grabar() {
  if (REC) { pararGrabacion(); return; }
  try { const st = await navigator.mediaDevices.getUserMedia({ audio: true }); const ch = []; const mr = new MediaRecorder(st);
    mr.ondataavailable = e => ch.push(e.data); mr.onstop = () => { st.getTracks().forEach(t => t.stop()); if (ENS) ENS.audio = URL.createObjectURL(new Blob(ch, { type: mr.mimeType || 'audio/mp4' })); if (ACT === 'ensayo') refresh(); };
    mr.start(); REC = mr; refresh(); } catch (e) { toast('No se ha podido usar el micrófono. Revisa el permiso en Ajustes del iPhone.'); }
}
function pararGrabacion() { if (REC) { try { REC.stop(); } catch (e) {} REC = null; } }

/* ===================================================================== Grupo */
async function api(url, clave, accion, extra) {
  const r = await fetch(url, { method: 'POST', body: JSON.stringify(Object.assign({ accion, clave, yo: { id: S.yo.id, nombre: S.yo.nombre || 'Sin nombre' } }, extra || {})) });
  const j = await r.json(); if (!j.ok) throw new Error(j.error || 'error'); return j;
}
const gapi = (accion, extra) => api(S.grupo.url, S.grupo.clave, accion, extra);
function miProgreso() { return { estados: S.temario.map(x => est(x.n)).join(''), dominados: dominados(), minSemana: minSemana(), ultNota: (S.sims.slice().sort((a, b) => b.ts - a.ts)[0] || {}).nota || null, total: S.temario.length }; }
let GCARGANDO = false;
async function cargarGrupo(silencio) {
  if (!S.grupo.url || GCARGANDO) return; GCARGANDO = true;
  try {
    if (S.grupo.compartir) await gapi('g-progreso', { prog: miProgreso() }).catch(() => {});
    const j = await gapi('g-leer'); S.grupo.cache = { mat: j.materiales || [], prog: j.progreso || [], res: j.reservas || [] }; S.grupo.ult = Date.now(); save();
    if (ACT === 'grupo' || ACT === 'material') refresh();
  } catch (e) { if (!silencio) toast('No he podido conectar con el grupo. Enseño lo último descargado.'); }
  GCARGANDO = false;
}
const TIPOS = { tarjetas: ['Tarjetas', 'tarjeta'], supuesto: ['Supuestos', 'crono'], esquema: ['Esquemas', 'doc'], enlace: ['Enlaces', 'enlace'] };
R.grupo = () => {
  if (!S.grupo.url) return `<div class="pg"><div class="col">${topTab()}<h1>Grupo</h1><div class="sub">Compartid tarjetas, supuestos, esquemas y enlaces, y repartíos los temas. Tus flaquezas y notas nunca se comparten.</div>
    <div class="card"><div class="row">${ic('enlace', 26)}<div class="grow"><b>Tengo un enlace de invitación</b><small>Pégalo aquí o ábrelo directamente desde el mensaje.</small></div></div>
      <div class="addin" style="margin-top:10px"><input class="inp sm" id="g-link" placeholder="https://…#unirse=…" inputmode="url"><button class="pill2" data-a="g-unirme">Unirme</button></div></div>
    <button class="card opt" data-a="ir" data-x="ajustes" data-k="grupo">${ic('mas', 26)}<div class="grow"><b>Crear el grupo</b><small>Lo hace una sola persona: copia el script en una hoja de Google y genera el enlace para los demás. Los pasos están en el PASO A PASO.</small></div>${ic('sig', 16)}</button>
  </div></div>`;
  const c = S.grupo.cache || { mat: [], prog: [], res: [] }, tab = S.ui.gtab;
  let cuerpo = '';
  if (tab === 'mat') {
    const fs = ['Todo'].concat(Object.values(TIPOS).map(t => t[0])), f = S.ui.gfil;
    const xs = c.mat.filter(m => f === 'Todo' || (TIPOS[m.tipo] || [])[0] === f).sort((a, b) => b.ts - a.ts);
    cuerpo = `${chipsHtml(fs, f, 'g-fil')}${xs.map((m, i) => `<button class="card cardq enter" style="--i:${Math.min(i, 8)}" data-a="g-mat" data-x="${m.id}"><div class="row">${m.tema ? tile(m.tema, est(m.tema), 30) : ic((TIPOS[m.tipo] || [])[1] || 'doc', 24)}<div class="grow"><b>${esc(m.titulo)}</b><small>${(TIPOS[m.tipo] || ['Material'])[0].replace(/s$/, '')} · ${esc(m.autor)} · ${fechaCorta(ymd(new Date(m.ts)))}</small></div></div>
      <div class="row" style="margin-top:8px"><small class="m grow">${(m.utiles || []).length} me ha servido</small>${(m.utiles || []).includes(S.yo.id) ? `<span class="okc">${ic('estrella', 14, 2)}</span>` : ''}</div></button>`).join('') || '<div class="empty">Todavía no se ha compartido nada. Comparte desde la ficha de un tema o al crear una tarjeta.</div>'}`;
  }
  if (tab === 'vamos') {
    const ps = c.prog.slice().sort((a, b) => apellido(a.nombre).localeCompare(apellido(b.nombre), 'es'));
    const tot = ps.reduce((a, p) => a + (p.minSemana || 0), 0);
    cuerpo = `<div class="sub">Temas dominados y horas de esta semana. Solo sale quien decide compartirlo.</div><div class="card">${ps.map(p => `<div class="lr"><span class="av">${iniciales(p.nombre)}</span><div class="grow"><b>${esc(p.nombre)}${p.id === S.yo.id ? ' (tú)' : ''}</b><div class="pbar" style="margin-top:6px"><i style="width:${Math.round((p.dominados || 0) / (p.total || S.temario.length) * 100)}%"></i></div></div><div class="ra"><b class="m">${p.dominados || 0}</b><small class="m">${horasTxt(p.minSemana || 0)}</small></div></div>`).join('') || '<div class="empty">Nadie comparte su progreso todavía.</div>'}</div>
      <div class="card row"><b class="num" style="font-size:32px">${Math.round(tot / 60)}</b><small style="font-size:13px;line-height:1.4">horas de estudio entre todos esta semana. Habéis compartido ${plural(c.mat.length, 'material', 'materiales')}.</small></div>
      <label class="row tgrow"><div class="grow"><b>Compartir mi progreso</b><small>Temas por estado, horas de la semana y última nota</small></div><button class="tgl ${S.grupo.compartir ? 'on' : ''}" data-a="g-comp"><i></i></button></label>`;
  }
  if (tab === 'rep') {
    const ps = c.prog.filter(p => p.estados), nadie = [], todos = [];
    S.temario.forEach((x, i) => { const ll = ps.filter(p => +(p.estados[i] || 0) >= 3).length; if (ps.length && !ll) nadie.push(x.n); if (ps.length > 1 && ll === ps.length) todos.push(x.n); });
    cuerpo = `<div class="sub">Si os repartís los temas que nadie lleva, entre todos cubrís más. Pídete uno para preparar su esquema y compartirlo.</div>
      <div class="lab">Nadie los lleva · ${nadie.length}</div><div class="card"><div class="tiles">${nadie.map(n => `<button data-a="abrir-tema" data-x="${n}">${tile(n, 0, 34)}</button>`).join('') || '<span class="s2">Ninguno: estáis cubriendo todo el temario.</span>'}</div></div>
      <div class="lab">Los lleváis todos · ${todos.length}</div><div class="card"><div class="tiles">${todos.map(n => `<button data-a="abrir-tema" data-x="${n}">${tile(n, 4, 34)}</button>`).join('') || '<span class="s2">Ninguno en común todavía.</span>'}</div></div>
      <div class="lab">Esquemas pedidos</div><div class="card">${c.res.map(r => `<div class="srow"><span class="row" style="gap:8px">${tile(r.tema, est(r.tema), 26)}${esc(titCorto(r.tema)).slice(0, 34)}</span><small>${esc(r.nombre)}${r.id === S.yo.id ? ' (tú)' : ''} · ${r.estado}</small>${r.id === S.yo.id ? `<button class="pill2" data-a="g-res-ok" data-x="${r.tema}">${r.estado === 'hecho' ? 'Quitar' : 'Hecho'}</button>` : ''}</div>`).join('') || '<div class="empty">Nadie se ha pedido un tema todavía.</div>'}
        <div class="addin" style="margin-top:6px"><select class="inp sm" id="g-res">${S.temario.map(x => `<option value="${x.n}">${x.n} · ${esc(titCorto(x.n)).slice(0, 40)}</option>`).join('')}</select><button class="pill2" data-a="g-res">Me lo pido</button></div></div>`;
  }
  return `<div class="pg"><div class="col">${topTab(`<button class="ib" data-a="g-recargar" aria-label="Actualizar">${ic('repetir', 21)}</button>`)}<h1>Grupo</h1>
    <div class="sub">${esc(S.grupo.nombre || 'Tu grupo')} · ${plural((c.prog || []).length || 1, 'persona', 'personas')}${S.grupo.ult ? ' · actualizado ' + horaCorta(S.grupo.ult) : ''}</div>
    ${segHtml([['mat', 'Materiales'], ['vamos', 'Cómo vamos'], ['rep', 'Reparto']], tab, 'g-tab')}${cuerpo}</div></div>`;
};
A_RENDER.grupo = (v, re) => { if (!re && S.grupo.url && (!S.grupo.ult || Date.now() - S.grupo.ult > 60000)) cargarGrupo(true); };
const apellido = n => { const p = String(n || '').trim().split(/\s+/); return p.length > 1 ? p.slice(1).join(' ') : p[0] || ''; };
const iniciales = n => String(n || '?').trim().split(/\s+/).slice(0, 2).map(x => x[0]).join('').toUpperCase();
const horaCorta = ts => { const d = new Date(ts); return (ymd(d) === hoy() ? 'hoy ' : fechaCorta(ymd(d)) + ' ') + 'a las ' + pad(d.getHours()) + ':' + pad(d.getMinutes()); };
R.material = p => {
  const m = ((S.grupo.cache || {}).mat || []).find(x => x.id === p.id); if (!m) return `<div class="pg"><div class="col">${topBar('Grupo')}<div class="empty">Este material ya no está.</div></div></div>`;
  const c = m.contenido || {}; let body = '', copiar = '';
  if (m.tipo === 'tarjetas') { body = (c.cards || []).map(x => `<div class="card"><b>${esc(x.q)}</b><small style="margin-top:4px;white-space:pre-line">${esc(x.a)}</small></div>`).join(''); copiar = 'Copiar a mis tarjetas'; }
  if (m.tipo === 'supuesto') { body = `<div class="card"><div class="kick">${esc(c.b || '')} · ${c.min || 25} min</div><p class="txt">${esc(c.enun || '').replace(/\n/g, '<br>')}</p></div><div class="card dashed"><div class="kick">Solución</div><p class="txt">${esc(c.sol || '').replace(/\n/g, '<br>')}</p></div>`; copiar = 'Copiar a mis supuestos'; }
  if (m.tipo === 'esquema') { body = `<div class="card"><p class="txt">${esc(c.texto || '').replace(/\n/g, '<br>')}</p></div>`; copiar = 'Copiar a mis notas del tema'; }
  if (m.tipo === 'enlace') body = (c.links || []).map(l => `<a class="card row" href="${esc(l.url)}" target="_blank" rel="noopener">${ic('enlace', 20)}<span class="grow tt">${esc(l.t || l.url)}</span>${ic('sig', 16)}</a>`).join('');
  const util = (m.utiles || []).includes(S.yo.id);
  return `<div class="pg narrow"><div class="col">${topBar('Grupo', m.autorId === S.yo.id ? `<button class="ib" data-a="g-borrar" data-x="${m.id}" aria-label="Borrar">${ic('papelera', 21)}</button>` : '')}<div class="kick">${(TIPOS[m.tipo] || ['Material'])[0]}${m.tema ? ' · tema ' + m.tema : ''}</div><h1>${esc(m.titulo)}</h1>
    <div class="row" style="margin-top:8px;gap:8px"><span class="av">${iniciales(m.autor)}</span><small class="s2" style="margin:0">${esc(m.autor)} · ${fechaLarga(ymd(new Date(m.ts)))}</small></div>${body}
    <div class="sp"></div><div style="height:14px"></div><div class="two">${btn(ic('estrella', 18) + (util ? 'Te ha servido' : 'Me ha servido'), 'g-util', m.id, 'soft' + (util ? ' on' : ''))}${copiar ? btn(copiar, 'g-copiar', m.id) : ''}</div></div></div>`;
};

/* hoja: compartir desde la ficha de un tema */
let CMP = null;
function abrirCompartir(n) {
  const cards = S.tarjetas.filter(c => c.tema === n && !c.de), t = tema(n);
  CMP = { n, cards: cards.length > 0, notas: !!t.notas, enl: t.enlaces.length > 0 };
  hoja(`<h2>Compartir el tema ${n}</h2><div class="sub">Elige qué ve el grupo. Tus flaquezas y lo que no marques no salen de tu móvil.</div>
    ${[['cards', 'tarjeta', plural(cards.length, 'tarjeta propia', 'tarjetas propias'), 'Las podrán copiar a las suyas', cards.length], ['notas', 'doc', 'Mis notas como esquema', t.notas ? t.notas.slice(0, 50) + '…' : 'No has escrito notas', !!t.notas], ['enl', 'enlace', plural(t.enlaces.length, 'enlace', 'enlaces'), 'Vídeos y apuntes', t.enlaces.length]]
      .map(([k, i, b, s, hay]) => `<div class="opt ${hay ? '' : 'off'}">${ic(i, 24)}<div class="grow"><b>${b}</b><small>${esc(s)}</small></div><button class="tgl ${CMP[k] ? 'on' : ''}" data-a="cmp-t" data-x="${k}" ${hay ? '' : 'disabled'}><i></i></button></div>`).join('')}
    <div style="height:14px"></div>${btn('Compartir con ' + esc(S.grupo.nombre || 'el grupo'), 'cmp-ok')}`);
}

/* ===================================================================== Progreso */
R.progreso = () => {
  const tab = S.ui.ptab; let cuerpo = '';
  if (tab === 'horas') {
    const ws = Array.from({ length: 8 }, (_, i) => minSemana(i - 7) / 60), mx = Math.max(1, ...ws, S.obj.horas);
    const media = ws.reduce((a, x) => a + x, 0) / 8;
    const bars = ws.map((v, i) => { const h = v / mx * 100, x = 8 + i * 37; return `<rect class="bar" style="--i:${i}" x="${x}" y="${112 - h}" width="24" height="${Math.max(1, h)}" rx="3" fill="${i === 7 ? 'var(--acc)' : 'var(--cyan)'}"/><text x="${x + 12}" y="${108 - h}" text-anchor="middle" font-size="10.5" class="m" fill="var(--ink2)">${coma(Math.round(v * 10) / 10)}</text>`; }).join('');
    const oy = 112 - S.obj.horas / mx * 100;
    cuerpo = `<div class="card"><div class="cl"><span>Horas por semana</span><em>media ${coma(Math.round(media * 10) / 10)} h</em></div>${svg(300, 130, `<line x1="0" y1="${oy}" x2="300" y2="${oy}" stroke="var(--acc)" stroke-dasharray="4 4" opacity=".6"/><text x="298" y="${oy - 4}" text-anchor="end" font-size="10" fill="var(--acc)">objetivo ${S.obj.horas} h</text>${bars}<text x="8" y="128" font-size="10" fill="var(--ink2)">hace 8 semanas</text><text x="296" y="128" text-anchor="end" font-size="10" fill="var(--ink2)">esta</text>`, 'width="100%" class="chart"')}</div>
      <div class="card"><div class="cl"><span>Temas por estado</span><em>${S.temario.length}</em></div><div class="stack">${NOMS.map((_, k) => `<i class="e${k}" style="flex:${cuenta(k) || .001}"></i>`).join('')}</div>
        <div class="leg">${NOMS.map((t, k) => `<span>${tile('', k, 12)}${t} <b class="m">${cuenta(k)}</b></span>`).join('')}</div></div>
      ${ritmoCard()}`;
  }
  if (tab === 'sims') {
    const ss = S.sims.slice().sort((a, b) => a.ts - b.ts).slice(-10);
    if (ss.length < 2) cuerpo = `<div class="empty">Con dos simulacros o más verás aquí cómo evolucionan tus notas.</div>`;
    else { const pts = ss.map((s, i) => [10 + i * (280 / (ss.length - 1)), 110 - s.nota * 10]);
      cuerpo = `<div class="card"><div class="cl"><span>Notas de los simulacros</span><em>última ${nota1(ss[ss.length - 1].nota)}</em></div>${svg(300, 124, `<line x1="0" y1="60" x2="300" y2="60" stroke="var(--line)" stroke-dasharray="3 3"/><text x="298" y="56" text-anchor="end" font-size="10" fill="var(--ink2)">5</text><polyline class="lin" points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="var(--acc)" stroke-width="2.5"/>${pts.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${i === pts.length - 1 ? 'var(--acc)' : 'var(--card)'}" stroke="var(--acc)" stroke-width="2"/>`).join('')}`, 'width="100%" class="chart"')}</div>
        <div class="card">${ss.slice().reverse().map(s => `<button class="srow" data-a="abrir-tema" data-x="${s.tema}"><span class="row" style="gap:8px">${tile(s.tema, est(s.tema), 24)}${fechaCorta(ymd(new Date(s.ts)))}</span><b class="m">${nota1(s.nota)}</b></button>`).join('')}</div>`; }
  }
  if (tab === 'debiles') {
    const xs = S.temario.filter(x => debil(x.n) || seEnfria(x.n) || (ultimaNota(x.n) != null && ultimaNota(x.n) < 5)).sort((a, b) => (ultimaNota(a.n) || 10) - (ultimaNota(b.n) || 10)).slice(0, 12);
    cuerpo = `<div class="lab">Los que más se te resisten</div><div class="card">${xs.map(x => { const t = tema(x.n), fa = t.flaq.filter(f => !f.ok).length, nn = ultimaNota(x.n);
      return `<button class="lr" data-a="abrir-tema" data-x="${x.n}">${tile(x.n, t.e, 30)}<div class="grow"><b class="tt">${esc(titCorto(x.n))}</b><small>${[fa ? plural(fa, 'flaqueza', 'flaquezas') : '', nn != null ? 'última nota ' + nota1(nn) : '', seEnfria(x.n) ? 'se enfría: ' + diasEntre(t.ult, hoy()) + ' días sin repasar' : '', t.conf && t.conf <= 2 ? 'confianza ' + t.conf + ' de 5' : ''].filter(Boolean).join(' · ')}</small></div></button>`; }).join('') || '<div class="empty">Nada destacable. Sigue así.</div>'}</div>`;
  }
  return `<div class="pg"><div class="col">${topTab()}<h1>Progreso</h1><div class="sub">${S.sesiones.length ? `Desde el ${fechaLarga(ymd(new Date(Math.min(...S.sesiones.map(s => s.ts))))).replace(/^\S+ /, '')} · ${horasTxt(S.sesiones.reduce((a, s) => a + s.min, 0) + S.sims.reduce((a, s) => a + (s.min || 0), 0))} en total` : 'Empieza una sesión de estudio y aquí verás tus horas.'}</div>
    ${segHtml([['horas', 'Horas'], ['sims', 'Simulacros'], ['debiles', 'Débiles']], tab, 'p-tab')}${cuerpo}</div></div>`;
};
function ritmoCard() {
  const d = dominados(), obj = S.obj.temas, sem = Math.max(1, Math.ceil(diasExamen() / 7)), falta = Math.max(0, obj - d);
  const desde = Date.now() - 28 * 864e5, gan = S.hist.filter(h => h.ts >= desde && h.a === 4 && h.de < 4).length, ritmo = gan / 4, prev = Math.round(d + ritmo * sem);
  const bien = !falta || ritmo >= falta / sem * .9;
  return `<button class="card row" data-a="ir" data-x="ruta" style="width:100%;text-align:left"><span style="color:var(--acc)">${ic('bandera', 26)}</span><div class="grow"><b>${!falta ? 'Objetivo cumplido' : bien ? 'Vas a buen ritmo' : 'Vas algo justo'}</b><small>Llevas ${d} de ${obj}.${falta && gan ? ` Al paso de las últimas semanas llegarías a ${prev}.` : ''}</small></div>${ic('sig', 16)}</button>`;
}

/* ===================================================================== Ajustes */
function stepper(k, v) { return `<span class="stp"><button data-a="stp" data-k="${k}" data-x="-1" aria-label="Menos">−</button><b class="m">${v}</b><button data-a="stp" data-k="${k}" data-x="1" aria-label="Más">+</button></span>`; }
const tgl = (a, on, x = '') => `<button class="tgl ${on ? 'on' : ''}" data-a="${a}" data-x="${x}"><i></i></button>`;
function invitacion() { const d = { u: S.grupo.url, c: S.grupo.clave, g: S.grupo.nombre }; return location.origin + location.pathname + '#unirse=' + btoa(unescape(encodeURIComponent(JSON.stringify(d)))).replace(/=+$/, ''); }
R.ajustes = () => {
  const c = S.conv, g = S.grupo, cp = S.copia;
  return `<div class="pg"><div class="col">${topBar('Atrás')}<h1>Ajustes</h1>
    <div class="grid2"><div>
    <div class="lab">Tú</div><div class="card"><label class="srow"><span>Nombre</span><input class="tx" data-y="nombre" value="${esc(S.yo.nombre)}" placeholder="Tu nombre"></label></div>
    <div class="lab">Convocatoria</div><div class="card">
      <label class="srow"><span>Nombre</span><input class="tx" data-c="nombre" value="${esc(c.nombre)}"></label><label class="srow"><span>Especialidad</span><input class="tx" data-c="esp" value="${esc(c.esp)}"></label>
      <div class="srow"><span>Bolas en el tema</span>${stepper('bolas', c.bolas)}</div><div class="srow"><span>Tiempo para el tema</span>${stepper('minTema', horasTxt(c.minTema))}</div>
      <label class="srow"><span>Fecha del examen</span><input type="date" data-c="fecha" value="${c.fecha}"></label><div class="srow"><span>Es una fecha aproximada</span>${tgl('aprox', c.aprox)}</div></div>
    <p class="note">Por norma salen 2 bolas hasta 25 temas, 3 hasta 50 y 4 con más de 50. Tu temario tiene ${S.temario.length}: ${bolasPorTemas(S.temario.length)} bolas.</p>
    <div class="lab">Objetivo</div><div class="card"><div class="srow"><span>Temas que quiero dominar</span>${stepper('objT', S.obj.temas)}</div><div class="srow"><span>Horas por semana</span>${stepper('objH', S.obj.horas + ' h')}</div></div>
    <div class="lab">Temario</div><div class="card"><div class="srow"><span>${S.temario.length} temas · ${bloques().length} bloques</span><button class="pill2" data-a="temario-cambiar">Cambiar</button></div>
      <button class="srow" data-a="rubrica"><span>Rúbrica de autoevaluación</span><em>${S.rubrica.length} criterios ${ic('sig', 15)}</em></button><button class="srow" data-a="guion"><span>Guion de la defensa</span><em>${S.p2.guion.length} partes ${ic('sig', 15)}</em></button></div>
    </div><div>
    <div class="lab">Grupo</div><div class="card">${g.url ? `<div class="srow"><span>${esc(g.nombre || 'Grupo')}</span><span class="ok">Conectado</span></div><div class="srow"><span>Compartir mi progreso</span>${tgl('g-comp', g.compartir)}</div>
      <button class="srow" data-a="g-invitar"><span>Copiar el enlace de invitación</span>${ic('copia', 18)}</button><button class="srow del" data-a="g-salir"><span>Salir del grupo</span></button>`
      : `<div class="s2" style="margin:2px 0 8px">Para crear el grupo, una persona copia el script en una hoja de Google (está en el PASO A PASO) y pega aquí su dirección y clave. Después comparte el enlace de invitación.</div>
      <label class="srow"><span>Nombre del grupo</span><input class="tx" id="gc-n" placeholder="Opos Tecnología"></label><label class="srow"><span>URL del script</span><input class="tx" id="gc-u" placeholder="https://script.google.com/…/exec"></label><label class="srow"><span>Clave</span><input class="tx" id="gc-c" placeholder="la de tu script"></label>
      <div style="height:8px"></div>${btn('Crear el grupo', 'g-crear', '', 'sm')}`}</div>
    <div class="lab">Copia de lo tuyo en Google</div><div class="card"><div class="srow"><span>Estado</span><span class="${cp.error ? 'err' : 'ok'}">${!cp.url ? 'Sin conectar' : cp.error ? 'No se ha podido guardar' : cp.ult ? 'Guardado ' + horaCorta(cp.ult) : 'Conectada'}</span></div>
      <label class="srow"><span>URL del script</span><input class="tx" data-cp="url" value="${esc(cp.url)}" placeholder="https://script.google.com/…"></label><label class="srow"><span>Clave</span><input class="tx" data-cp="clave" value="${esc(cp.clave)}"></label>
      ${cp.url ? `<div class="two" style="margin:10px 0 4px">${btn('Recuperar', 'cp-rec', '', 'soft sm')}${btn('Guardar ahora', 'cp-guardar', '', 'sm')}</div>` : ''}
      <div class="s2">Sirve para tener lo mismo en el móvil y en el ordenador: guarda en uno y recupera en el otro.</div></div>
    <div class="lab">Apariencia y sonido</div>${segHtml([['claro', 'Claro'], ['oscuro', 'Oscuro'], ['auto', 'Automático']], S.aj.tema, 'tema-ap')}
    <div class="card"><div class="srow"><span>Avisos con sonido en el examen</span>${tgl('sonido', S.aj.sonido)}</div><button class="srow" data-a="probar-sonido"><span class="acc">Probar el sonido</span></button></div>
    <div class="lab">Tus datos</div><div class="card"><button class="srow" data-a="exportar"><span>Exportar a un archivo</span>${ic('sig', 15)}</button>
      <label class="srow"><span>Importar desde un archivo</span>${ic('sig', 15)}<input type="file" accept=".json,application/json" id="importar" hidden></label>
      <button class="srow del" data-a="borrar-todo"><span>Borrar todo</span></button></div>
    <button class="link acc" data-a="ver-bienvenida">Ver la bienvenida otra vez</button><div class="ver">Ruta 71 · versión ${VERSION}</div></div></div>
  </div></div>`;
};
function abrirRubrica() {
  hoja(`<h2>Rúbrica</h2><div class="sub">Criterios con su peso. Cada uno se puntúa de 4 a 0. Los pesos deben sumar 100 %.</div>
    <div id="rb">${S.rubrica.map((c, i) => `<div class="addin"><input class="inp sm" data-rb="t" data-i="${i}" value="${esc(c.t)}"><input class="inp sm m" style="width:72px;text-align:right" type="number" data-rb="p" data-i="${i}" value="${c.p}"><button class="ib sm" data-a="rb-del" data-x="${i}">${ic('papelera', 17)}</button></div>`).join('')}</div>
    <button class="addrow" data-a="rb-add">${ic('mas', 18)}Añadir criterio</button><p class="note" id="rb-sum">Suman ${S.rubrica.reduce((a, c) => a + (+c.p || 0), 0)} %.</p>
    <div style="height:10px"></div>${btn('Guardar', 'rb-ok')}<button class="link" data-a="rb-def">Volver a la rúbrica por defecto</button>`);
}
function abrirGuion() {
  hoja(`<h2>Guion de la defensa</h2><div class="sub">Las partes que ensayas y los minutos de cada una.</div>
    <div>${S.p2.guion.map((g, i) => `<div class="addin"><input class="inp sm" data-gu="t" data-i="${i}" value="${esc(g.t)}"><input class="inp sm m" style="width:72px;text-align:right" type="number" data-gu="m" data-i="${i}" value="${g.m}"><button class="ib sm" data-a="gu-del" data-x="${i}">${ic('papelera', 17)}</button></div>`).join('')}</div>
    <button class="addrow" data-a="gu-add">${ic('mas', 18)}Añadir parte</button><div style="height:10px"></div>${btn('Guardar', 'gu-ok')}`);
}
function abrirTemario() {
  hoja(`<h2>Cambiar el temario</h2><div class="sub">Pega la lista: un tema por línea. Una línea que empiece por «#» es el nombre de un bloque. Lo que tengas de los temas con el mismo número se conserva.</div>
    <textarea class="inp" id="tm-txt" style="min-height:220px;margin-top:12px" placeholder="# Bloque 1&#10;Primer tema&#10;Segundo tema"></textarea>
    <div style="height:12px"></div>${btn('Usar este temario', 'tm-ok')}<button class="link" data-a="tm-tec">Volver al de Tecnología (71 temas)</button>`);
}
function parsearTemario(txt) {
  const out = []; let b = 'Temario';
  txt.split(/\r?\n/).map(l => l.trim()).filter(Boolean).forEach(l => { if (l.startsWith('#')) { b = l.replace(/^#+\s*/, '') || b; return; } out.push({ n: out.length + 1, t: l.replace(/^(tema\s*)?\d+[\.\-:)\s]+/i, '').trim() || l, b }); });
  return out;
}

/* ===================================================================== hoja inferior, avisos */
function hoja(html, cb) { $('#sheet-body').innerHTML = html; $('#sheet-body').scrollTop = 0; $('#scrim').classList.add('on'); $('#sheet').classList.add('on'); if (cb) cb(); }
function cerrarHoja() { const s = $('#sheet'); if (!s.classList.contains('on')) return; s.classList.remove('on'); $('#scrim').classList.remove('on'); if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); }
let TT = null;
function toast(t, deshacer = false) {
  const el = $('#toast'); $('#toast-t').textContent = t; $('#toast-b').hidden = !deshacer;
  el.classList.remove('on'); void el.offsetWidth; el.classList.add('on');
  clearTimeout(TT); TT = setTimeout(() => el.classList.remove('on'), deshacer ? 4500 : Math.max(2400, t.length * 55));
}
function copiarTexto(x, msg) { (navigator.clipboard ? navigator.clipboard.writeText(x) : Promise.reject()).then(() => toast(msg || 'Copiado'), () => { hoja(`<h2>Copia este texto</h2><textarea class="inp" style="min-height:120px" readonly>${esc(x)}</textarea>`); }); }

/* ===================================================================== acciones */
const ACC = {};
document.addEventListener('click', e => {
  const b = e.target.closest('[data-a]'); if (!b || b.disabled || !b.dataset.a) return;
  if (b.tagName === 'INPUT' || b.tagName === 'SELECT') return;
  const f = ACC[b.dataset.a]; if (f) { e.preventDefault(); f(b.dataset.x, b, e); }
});
const val = id => ((document.getElementById(id) || {}).value || '').trim();
function animTile(sel) { const t = $(sel); if (t) animar(t, x => ({ transform: `scale(${.7 + .3 * x})` }), { w: 15, z: 6 }); }

Object.assign(ACC, {
  'tab': x => { if (x === ACT) { $('#view').scrollTo({ top: 0, behavior: 'smooth' }); return; } if (x === 'temario') TSEL = TSEL || null; go(x, {}, 'tab'); },
  'ir': x => { if (x === 'sorteo') SORT = null; go(x); },
  'atras': () => atras(),
  'deshacer': () => deshacer(),
  'cerrar-hoja': () => cerrarHoja(),

  /* bienvenida */
  'onb-sig': () => {
    if (ONB === 2 && TPEGAR) { const t = parsearTemario(val('t-pegar')); if (t.length < 2) { toast('Pega al menos dos temas, uno por línea'); return; } S.temario = t; S.conv.bolas = bolasPorTemas(t.length); if (OBJ_TMP > t.length) OBJ_TMP = t.length; save(); }
    if (ONB === 3) { S.obj.temas = OBJ_TMP; save(); }
    if (ONB === 4) { S.yo.nombre = val('onb-nombre'); S.onb = true; save(); HIST = []; go('hoy', {}, 'tab'); if (JOIN) setTimeout(pedirUnirse, 500); return; }
    ONB++; pintar('push');
  },
  'onb-atras': () => { ONB = Math.max(0, ONB - 1); pintar('back'); },
  'onb-saltar': () => { ONB = 4; pintar('push'); },
  'onb-tec': () => { TPEGAR = false; S.temario = temarioTec(); S.conv.bolas = 4; save(); refresh(); },
  'onb-pegar': () => { TPEGAR = true; refresh(); setTimeout(() => { const t = $('#t-pegar'); if (t) t.focus(); }, 60); },
  'onb-obj': x => { OBJ_TMP = Math.max(1, Math.min(S.temario.length, OBJ_TMP + +x)); $('#onb-obj').textContent = OBJ_TMP; $('#onb-prob').textContent = prob(OBJ_TMP) + ' %'; animTile('#onb-prob'); },
  'onb-horas': x => { S.obj.horas = parseInt(x, 10); save(); refresh(); },
  'ver-bienvenida': () => { ONB = 0; OBJ_TMP = null; go('bienvenida', {}, 'tab'); },

  /* hoy */
  'toca': (x, b) => { const k = b.dataset.k; if (k === 'tema') ACC['abrir-tema'](x); if (k === 'tarjetas') ACC.repasar(x); if (k === 'supuesto') ACC['sup-hacer'](x); },
  'estudiar': x => abrirEstudiar(x ? +x : null),
  'est-tema': x => { EST_N = +x; $('#sheet-body').innerHTML = htmlEstudiar(); },
  'est-dur': x => { EST_D = +x; $('#sheet-body').innerHTML = htmlEstudiar(); },
  'est-ok': () => { const sel = $('#est-sel'); if (sel && sel.value) EST_N = +sel.value; if (!EST_N) { toast('Elige un tema'); return; }
    SES = { n: EST_N, ini: Date.now(), pausas: 0, pausado: null, dur: EST_D, apuntes: [] }; saveSes(); cerrarHoja(); go('sesion', {}, 'fade'); },
  'ses-pausa': () => { if (SES.pausado) { SES.pausas += Date.now() - SES.pausado; SES.pausado = null; } else SES.pausado = Date.now(); saveSes(); refresh(); },
  'ses-fin': () => { const min = Math.max(1, Math.round(sesMs() / 6e4)), s = SES;
    commit(() => { S.sesiones.push({ ts: s.ini, n: s.n, min }); const t = tema(s.n); t.min = (t.min || 0) + min; t.ult = hoy(); if (t.e === 0) cambiarEstado(s.n, 1); });
    FINS = { n: s.n, min, conf: null, apuntes: s.apuntes || [] }; SES = null; saveSes(); go('fin-sesion', {}, 'fade'); },
  'apunta': x => { APK = x; hoja(`<h2>${x === 'flaq' ? 'Nueva flaqueza' : x === 'tarjeta' ? 'Nueva tarjeta' : 'Cosa concreta'}</h2><div class="sub">Tema ${SES.n}. Lo guardo y sigues estudiando.</div>
      ${x === 'tarjeta' ? '<div class="lab">Pregunta</div><input class="inp" id="ap-q"><div class="lab">Respuesta</div><textarea class="inp" id="ap-a" style="min-height:80px"></textarea>' : `<input class="inp" id="ap-txt" style="margin-top:12px" placeholder="${x === 'flaq' ? 'Lo que se te atasca' : 'Fórmula, fecha, autor…'}" enterkeyhint="done">`}
      <div style="height:12px"></div>${btn('Guardar', 'ap-ok')}`, () => setTimeout(() => { const i = $('#ap-txt') || $('#ap-q'); if (i) i.focus({ preventScroll: true }); }, 350)); },
  'ap-ok': () => {
    const n = SES.n; let t = '';
    if (APK === 'tarjeta') { const q = val('ap-q'), a = val('ap-a'); if (!q) return; t = q; S.tarjetas.push({ id: uid(), tema: n, q, a, prox: hoy(), int: 0, ease: 2.5 }); }
    else { t = val('ap-txt'); if (!t) return; if (APK === 'flaq') tema(n).flaq.push({ id: uid(), txt: t, ok: false, ts: Date.now() }); else tema(n).cosas.push({ id: uid(), txt: t }); }
    SES.apuntes.push({ k: APK, t }); saveSes(); save(); cerrarHoja(); toast('Apuntado');
  },
  'fses-conf': x => { FINS.conf = +x; refresh(); },
  'fses-est': x => { commit(() => cambiarEstado(FINS.n, +x)); },
  'fses-ok': () => { if (FINS.conf) commit(() => programar(FINS.n, FINS.conf)); FINS = null; go('hoy', {}, 'tab'); },

  /* temario y ficha */
  'abrir-tema': x => { const n = +x; cerrarHoja(); FTAB = 'flaq'; if (ancho()) { TSEL = n; if (ACT === 'temario') { P = { n }; refresh(); } else go('temario', { n }, 'tab'); } else go('tema', { n }); },
  't-modo': x => { S.ui.tmodo = x; save(); refresh(); },
  't-fil': x => { S.ui.tfil = x; save(); refresh(); },
  't-buscar': () => { TBUSCAR = !TBUSCAR; if (!TBUSCAR) TBUS = ''; refresh(); },
  't-blq': x => { TOPEN[x] = !TOPEN[x]; refresh(); },
  'f-est': (x, b) => { const n = b.dataset.n ? +b.dataset.n : (ACT === 'tema' ? P.n : TSEL); cerrarHoja(); commit(() => cambiarEstado(n, +x), `Tema ${n}: ${NOMS[+x].toLowerCase()}`); animTile('.fhead .tl'); },
  'f-mio': x => commit(() => { tema(+x).mio = !tema(+x).mio; }),
  'f-tab': x => { FTAB = x; refresh(); },
  'flaq-add': () => { const v = val('nf'), n = fichaN(); if (!v) return; commit(() => tema(n).flaq.push({ id: uid(), txt: v, ok: false, ts: Date.now() })); setTimeout(() => { const i = $('#nf'); if (i) i.focus({ preventScroll: true }); }, 30); },
  'flaq-ok': x => { const n = fichaN(); commit(() => { const f = tema(n).flaq.find(y => y.id === x); f.ok = !f.ok; }, null); },
  'flaq-del': x => { const n = fichaN(); commit(() => { tema(n).flaq = tema(n).flaq.filter(y => y.id !== x); }, 'Flaqueza borrada', true); },
  'cosa-add': () => { const v = val('nc'), n = fichaN(); if (!v) return; commit(() => tema(n).cosas.push({ id: uid(), txt: v })); },
  'cosa-del': x => { const n = fichaN(); commit(() => { tema(n).cosas = tema(n).cosas.filter(y => y.id !== x); }, 'Borrada', true); },
  'enl-add': () => { let v = val('ne'), n = fichaN(); if (!v) return; if (!/^https?:\/\//.test(v)) v = 'https://' + v; commit(() => tema(n).enlaces.push({ id: uid(), url: v, t: v.replace(/^https?:\/\/(www\.)?/, '').slice(0, 60) })); },
  'enl-del': x => { const n = fichaN(); commit(() => { tema(n).enlaces = tema(n).enlaces.filter(y => y.id !== x); }, 'Enlace borrado', true); },

  /* tarjetas */
  'nueva-tarjeta': x => abrirTarjeta(null, x ? +x : null),
  'editar-tarjeta': x => abrirTarjeta(x),
  'ft-comp': (x, b) => { FT.comp = !FT.comp; b.classList.toggle('on', FT.comp); },
  'ft-ok': async () => {
    const q = val('ft-q'), a = val('ft-a'), n = +($('#ft-t') || {}).value || FT.tema; if (!q) { toast('Escribe la pregunta'); return; }
    const f = FT; cerrarHoja();
    commit(() => { if (f.id) Object.assign(S.tarjetas.find(c => c.id === f.id), { q, a, tema: n }); else S.tarjetas.push({ id: uid(), tema: n, q, a, prox: hoy(), int: 0, ease: 2.5 }); }, f.id ? 'Tarjeta guardada' : 'Tarjeta creada');
    if (!f.id && f.comp) publicar({ tipo: 'tarjetas', tema: n, titulo: q.slice(0, 80), contenido: { cards: [{ q, a }] } });
  },
  'ft-del': () => { const id = FT.id; cerrarHoja(); commit(() => { S.tarjetas = S.tarjetas.filter(c => c.id !== id); }, 'Tarjeta borrada', true); },
  'repasar': x => { const n = x ? +x : null; const xs = (n ? S.tarjetas.filter(c => c.tema === n) : tarjetasHoy()).filter(c => !n || true); const hoyN = xs.filter(c => !c.prox || c.prox <= hoy());
    const lista = (hoyN.length ? hoyN : xs).slice(0, 40); if (!lista.length) { toast('No hay tarjetas que repasar'); return; } repasoCon(lista); },
  'rp-ver': () => { RP.vuelta = true; refresh(); const f = $('.flip'); if (f) f.classList.add('on'); const four = $('.four'); if (four) $$('.four button').forEach((b, i) => animar(b, v => ({ opacity: Math.min(1, v * 2), transform: `translateY(${(1 - v) * 20}px)` }), { w: 13, z: 7, delay: 200 + i * 50 })); },
  'rp-nota': x => { const c = S.tarjetas.find(y => y.id === RP.cola[RP.i]); if (c) { notaTarjeta(c, +x); if (+x === 0) RP.cola.push(c.id); save(); } RP.hechas++; RP.i++; RP.vuelta = false; pintar('push'); },

  /* simulacro */
  'sim-tema': x => { SORT = { bolas: [+x], vistas: 1, fase: 'listo', sel: +x }; ACC['examen-ir'](); },
  'sortear': () => sortear(),
  'solo': (x, b) => { S.ui.solo = !S.ui.solo; save(); refresh(); },
  'elegir-bola': x => { if (!x) return; SORT.sel = +x; refresh(); const b = $$('#balls .bl.sel')[0]; if (b) animar(b, v => ({ transform: `scale(${.8 + .2 * v})` }), { w: 15, z: 6 }); },
  'examen-ir': () => { if (!SORT || !SORT.sel) return; SIM = { tema: SORT.sel, bolas: SORT.bolas, ini: Date.now(), pausas: 0, pausado: null, min: S.conv.minTema }; saveSim(); go('examen', {}, 'fade'); },
  'ex-pausa': () => { if (SIM.pausado) { SIM.pausas += Date.now() - SIM.pausado; SIM.pausado = null; } else SIM.pausado = Date.now(); saveSim(); refresh(); },
  'ex-fin': () => { const min = Math.max(1, Math.round(simMs() / 6e4)); EV = { tema: SIM.tema, bolas: SIM.bolas, min, pts: S.rubrica.map(() => null), olv: [], foto: null }; SIM = null; saveSim(); go('evaluar', {}, 'fade'); },
  'ev-pt': (x, b) => { EV.pts[+b.dataset.k] = +x; $$(`[data-a="ev-pt"][data-k="${b.dataset.k}"]`).forEach(y => y.classList.toggle('on', y === b));
    if (EV.pts.every(v => v != null)) { $('#ev-nota').textContent = nota1(notaRub()); $('[data-a="ev-ok"]').classList.remove('off'); animTile('#ev-nota'); } },
  'ev-olv-add': () => { const v = val('ev-olv'); if (!v) return; EV.olv.push(v); refresh(); setTimeout(() => { const i = $('#ev-olv'); if (i) i.focus({ preventScroll: true }); }, 30); },
  'ev-olv-del': x => { EV.olv.splice(+x, 1); refresh(); },
  'ev-ok': () => { if (!EV.pts.every(v => v != null)) { toast('Puntúa todos los criterios'); return; }
    const nota = notaRub(), e = EV, id = uid(), conf = nota >= 8 ? 5 : nota >= 6.5 ? 4 : nota >= 5 ? 3 : nota >= 3 ? 2 : 1;
    commit(() => { S.sims.push({ id, ts: Date.now(), tema: e.tema, bolas: e.bolas, min: e.min, pts: e.pts, nota, olv: e.olv, foto: e.foto }); const t = tema(e.tema);
      e.olv.forEach(o => t.flaq.push({ id: uid(), txt: o, ok: false, ts: Date.now() })); programar(e.tema, conf); if (t.e < 1) cambiarEstado(e.tema, 1); });
    RES = { id, tema: e.tema, nota, olv: e.olv.length }; EV = null; go('resultado', {}, 'fade'); },
  'res-est': x => commit(() => cambiarEstado(RES.tema, +x), `Tema ${RES.tema}: ${NOMS[+x].toLowerCase()}`),
  'res-ok': () => { RES = null; go('simulacro', {}, 'tab'); },

  /* supuestos */
  'sup-nuevo': () => abrirSupuesto(null),
  'sup-editar': x => abrirSupuesto(x),
  'fs-comp': (x, b) => { FS.comp = !FS.comp; b.classList.toggle('on', FS.comp); },
  'fs-ok': () => { const d = { titulo: val('fs-t'), b: ($('#fs-b') || {}).value || '', enun: val('fs-e'), sol: val('fs-s'), min: Math.max(1, parseInt(val('fs-m'), 10) || 25) }; if (!d.titulo) { toast('Ponle un título'); return; }
    const f = FS; cerrarHoja(); commit(() => { if (f.id) Object.assign(S.supuestos.find(s => s.id === f.id), d); else S.supuestos.push(Object.assign({ id: uid(), int: [] }, d)); }, 'Supuesto guardado');
    if (!f.id && f.comp) publicar({ tipo: 'supuesto', tema: null, titulo: d.titulo, contenido: d }); },
  'fs-del': () => { const id = FS.id; cerrarHoja(); commit(() => { S.supuestos = S.supuestos.filter(s => s.id !== id); }, 'Supuesto borrado', true); if (ACT === 'supuesto-hacer') atras(); },
  's-fil': x => { S.ui.sfil = x; save(); refresh(); },
  'sup-hacer': x => { const s = S.supuestos.find(y => y.id === x); if (!s) return; SH = { id: x, ini: Date.now(), pausas: 0, pausado: null, fin: null, min: s.min }; go('supuesto-hacer'); },
  'sh-pausa': () => { if (SH.pausado) { SH.pausas += Date.now() - SH.pausado; SH.pausado = null; } else SH.pausado = Date.now(); refresh(); },
  'sh-fin': () => { SH.fin = Date.now(); refresh(); },
  'sh-r': x => { const ms = SH.fin - SH.ini - (SH.pausas || 0), id = SH.id; commit(() => { const s = S.supuestos.find(y => y.id === id); s.int = s.int || []; s.int.push({ ts: Date.now(), r: x, min: Math.round(ms / 6e4) }); S.sesiones.push({ ts: SH.ini, n: null, min: Math.max(1, Math.round(ms / 6e4)) }); },
    x === 'mal' ? 'Apuntado. Volverá a salir arriba para repetirlo.' : 'Apuntado'); SH = null; atras(); },

  /* prueba 2 */
  'p2-ck': x => commit(() => { const c = S.p2.checks.find(y => y.id === x); c.ok = !c.ok; }),
  'p2-del': x => commit(() => { S.p2.checks = S.p2.checks.filter(y => y.id !== x); }, 'Apartado quitado', true),
  'p2-add': () => { const v = val('p2-n'); if (!v) return; commit(() => S.p2.checks.push({ id: uid(), t: v, ok: false })); },
  'sit-nueva': () => abrirSit(null), 'sit-editar': x => abrirSit(x),
  'si-ok': () => { const d = { t: val('si-t'), curso: val('si-c'), notas: val('si-n') }; if (!d.t) { toast('Ponle un título'); return; } const f = FSIT; cerrarHoja();
    commit(() => { if (f.id) Object.assign(S.p2.sits.find(s => s.id === f.id), d); else S.p2.sits.push(Object.assign({ id: uid(), ens: 0 }, d)); }, 'Guardada'); },
  'si-del': () => { const id = FSIT.id; cerrarHoja(); commit(() => { S.p2.sits = S.p2.sits.filter(s => s.id !== id); }, 'Borrada', true); },
  'ensayar': x => { const s = S.p2.sits.find(y => y.id === x); ENS = { k: x === 'prog' ? 'prog' : 'sit', sid: s ? s.id : null, t: s ? s.t : 'Programación didáctica', guion: S.p2.guion.map(g => Object.assign({}, g)), i: 0, ini: Date.now(), t0: Date.now(), partes: [], fin: false, nota: null, audio: null }; go('ensayo', {}, 'fade'); },
  'en-rec': () => grabar(),
  'en-sig': () => { const now = Date.now(); ENS.partes[ENS.i] = now - ENS.t0; ENS.t0 = now; if (ENS.i < ENS.guion.length - 1) { ENS.i++; refresh(); } else { ENS.fin = true; ENS.ms = now - ENS.ini; pararGrabacion(); pantallaEncendida(false); refresh(); } },
  'en-nota': x => { ENS.nota = +x; refresh(); },
  'en-ok': () => { const e = ENS; commit(() => { S.p2.ensayos.push({ ts: e.ini, t: e.t, sid: e.sid, min: Math.round(e.ms / 6e4), partes: e.partes.map(p => Math.round(p / 6e4)), nota: e.nota }); if (e.sid) { const s = S.p2.sits.find(y => y.id === e.sid); if (s) s.ens = (s.ens || 0) + 1; }
    S.sesiones.push({ ts: e.ini, n: null, min: Math.max(1, Math.round(e.ms / 6e4)) }); }, 'Ensayo guardado'); ENS = null; go('prueba2', {}, 'back'); },

  /* grupo */
  'g-unirme': () => { const v = val('g-link'), m = v.match(/#unirse=([A-Za-z0-9+/_-]+)/); if (!m) { toast('Ese enlace no parece una invitación de Ruta 71'); return; } JOIN = leerInvitacion(m[1]); if (!JOIN) { toast('El enlace está incompleto'); return; } pedirUnirse(); },
  'g-join-ok': async () => { const nombre = val('gj-n'); if (!nombre) { toast('Escribe tu nombre'); return; } S.yo.nombre = nombre;
    try { await api(JOIN.u, JOIN.c, 'g-leer'); S.grupo = Object.assign(S.grupo, { url: JOIN.u, clave: JOIN.c, nombre: JOIN.g || 'Grupo' }); JOIN = null; save(); cerrarHoja(); toast('Ya estás en el grupo'); go('grupo', {}, 'tab'); cargarGrupo(); }
    catch (e) { toast('No he podido entrar. Pide a quien creó el grupo que revise el enlace.'); } },
  'g-crear': async () => { const u = val('gc-u'), c = val('gc-c'), n = val('gc-n') || 'Grupo'; if (!/^https:\/\/script\.google\.com\//.test(u)) { toast('La URL tiene que ser la del script (empieza por https://script.google.com/)'); return; }
    try { await api(u, c, 'g-leer'); S.grupo = Object.assign(S.grupo, { url: u, clave: c, nombre: n }); save(); refresh(); copiarTexto(invitacion(), 'Grupo creado. Enlace de invitación copiado: mándaselo a tus compañeros.'); cargarGrupo(true); }
    catch (e) { toast('No responde. Revisa la URL, la clave y que el script esté implementado para «Cualquier usuario».'); } },
  'g-invitar': () => copiarTexto(invitacion(), 'Enlace de invitación copiado'),
  'g-salir': (x, b) => { if (b.dataset.c !== '1') { b.dataset.c = '1'; b.innerHTML = '<span>Toca otra vez para salir del grupo</span>'; return; }
    const u = S.grupo.url, c = S.grupo.clave; api(u, c, 'g-progreso', { quitar: true }).catch(() => {}); S.grupo = Object.assign(DEF().grupo, {}); save(); refresh(); toast('Has salido del grupo. Lo que compartiste sigue allí: bórralo antes si quieres.'); },
  'g-comp': () => { S.grupo.compartir = !S.grupo.compartir; save(); refresh(); if (S.grupo.url) gapi('g-progreso', S.grupo.compartir ? { prog: miProgreso() } : { quitar: true }).then(() => cargarGrupo(true)).catch(() => {}); },
  'g-tab': x => { S.ui.gtab = x; save(); refresh(); },
  'g-fil': x => { S.ui.gfil = x; save(); refresh(); },
  'g-mat': x => go('material', { id: x }),
  'g-recargar': () => { toast('Actualizando…'); cargarGrupo(); },
  'g-util': async x => { try { await gapi('g-util', { id: x }); await cargarGrupo(true); } catch (e) { toast('No he podido conectar'); } },
  'g-borrar': async x => { try { await gapi('g-borrar', { id: x }); toast('Borrado del grupo'); await cargarGrupo(true); atras(); } catch (e) { toast('No he podido borrarlo'); } },
  'g-copiar': x => { const m = ((S.grupo.cache || {}).mat || []).find(y => y.id === x); if (!m) return; const c = m.contenido || {};
    if (m.tipo === 'tarjetas') commit(() => (c.cards || []).forEach(k => S.tarjetas.push({ id: uid(), tema: m.tema, q: k.q, a: k.a, prox: hoy(), int: 0, ease: 2.5, de: m.autor })), plural((c.cards || []).length, 'tarjeta copiada', 'tarjetas copiadas'));
    if (m.tipo === 'supuesto') commit(() => S.supuestos.push({ id: uid(), titulo: c.titulo || m.titulo, b: c.b, enun: c.enun, sol: c.sol, min: c.min || 25, int: [], de: m.autor }), 'Supuesto copiado');
    if (m.tipo === 'esquema' && m.tema) commit(() => { const t = tema(m.tema); t.notas = (t.notas ? t.notas + '\n\n' : '') + '— Esquema de ' + m.autor + ' —\n' + (c.texto || ''); }, 'Añadido a tus notas del tema ' + m.tema); },
  'g-res': async () => { const n = +($('#g-res') || {}).value; try { await gapi('g-reservar', { tema: n, estado: 'en proceso' }); toast(`Te has pedido el tema ${n}`); cargarGrupo(true); } catch (e) { toast('No he podido conectar'); } },
  'g-res-ok': async x => { const r = ((S.grupo.cache || {}).res || []).find(y => y.tema === +x && y.id === S.yo.id); try { await gapi('g-reservar', { tema: +x, estado: r && r.estado === 'hecho' ? null : 'hecho' }); cargarGrupo(true); } catch (e) { toast('No he podido conectar'); } },
  'compartir': x => abrirCompartir(+x),
  'cmp-t': (x, b) => { CMP[x] = !CMP[x]; b.classList.toggle('on', CMP[x]); },
  'cmp-ok': async () => { const n = CMP.n, t = tema(n), ps = []; cerrarHoja();
    if (CMP.cards) { const cs = S.tarjetas.filter(c => c.tema === n && !c.de).map(c => ({ q: c.q, a: c.a })); if (cs.length) ps.push({ tipo: 'tarjetas', tema: n, titulo: `${plural(cs.length, 'tarjeta', 'tarjetas')} del tema ${n}`, contenido: { cards: cs } }); }
    if (CMP.notas && t.notas) ps.push({ tipo: 'esquema', tema: n, titulo: `Esquema del tema ${n}`, contenido: { texto: t.notas } });
    if (CMP.enl && t.enlaces.length) ps.push({ tipo: 'enlace', tema: n, titulo: `${plural(t.enlaces.length, 'enlace', 'enlaces')} del tema ${n}`, contenido: { links: t.enlaces.map(e => ({ url: e.url, t: e.t })) } });
    if (!ps.length) { toast('No has marcado nada'); return; }
    for (const p of ps) await publicar(p, true); toast('Compartido con el grupo'); cargarGrupo(true); },

  /* progreso y ajustes */
  'p-tab': x => { S.ui.ptab = x; save(); refresh(); },
  'stp': (x, b) => { const k = b.dataset.k, d = +x;
    if (k === 'bolas') S.conv.bolas = Math.max(1, Math.min(10, S.conv.bolas + d));
    if (k === 'minTema') S.conv.minTema = Math.max(15, Math.min(300, S.conv.minTema + d * 15));
    if (k === 'objT') S.obj.temas = Math.max(1, Math.min(S.temario.length, S.obj.temas + d));
    if (k === 'objH') S.obj.horas = Math.max(1, Math.min(60, S.obj.horas + d));
    save(); refresh(); },
  'aprox': () => { S.conv.aprox = !S.conv.aprox; save(); refresh(); },
  'sonido': () => { S.aj.sonido = !S.aj.sonido; save(); refresh(); },
  'probar-sonido': () => { const s = S.aj.sonido; S.aj.sonido = true; sonar('fin'); S.aj.sonido = s; toast('Si no lo oyes, sube el volumen con los botones del lateral.'); },
  'tema-ap': x => { S.aj.tema = x; save(); aplicarTema(); refresh(); },
  'temario-cambiar': () => abrirTemario(),
  'tm-ok': () => { const t = parsearTemario(val('tm-txt')); if (t.length < 2) { toast('Pega al menos dos temas'); return; } cerrarHoja();
    commit(() => { S.temario = t; S.conv.bolas = bolasPorTemas(t.length); S.obj.temas = Math.min(S.obj.temas, t.length); }, `Temario cambiado: ${t.length} temas, ${bolasPorTemas(t.length)} bolas`, true); },
  'tm-tec': () => { cerrarHoja(); commit(() => { S.temario = temarioTec(); S.conv.bolas = 4; }, 'Temario de Tecnología cargado', true); },
  'rubrica': () => { RB = S.rubrica.map(c => Object.assign({}, c)); abrirRubrica(); },
  'rb-add': () => { leerRB(); RB.push({ t: 'Nuevo criterio', p: 0 }); S2 = S.rubrica; S.rubrica = RB; abrirRubrica(); S.rubrica = S2; },
  'rb-del': x => { leerRB(); RB.splice(+x, 1); S2 = S.rubrica; S.rubrica = RB; abrirRubrica(); S.rubrica = S2; },
  'rb-ok': () => { leerRB(); const sum = RB.reduce((a, c) => a + (+c.p || 0), 0); if (sum !== 100) { toast(`Los pesos suman ${sum} %. Tienen que sumar 100 %.`); return; } cerrarHoja(); commit(() => { S.rubrica = RB.map(c => ({ t: c.t || 'Criterio', p: +c.p })); }, 'Rúbrica guardada'); },
  'rb-def': () => { cerrarHoja(); commit(() => { S.rubrica = RUBRICA_DEF(); }, 'Rúbrica por defecto', true); },
  'guion': () => { GU = S.p2.guion.map(g => Object.assign({}, g)); abrirGuion(); },
  'gu-add': () => { leerGU(); GU.push({ t: 'Nueva parte', m: 5 }); const o = S.p2.guion; S.p2.guion = GU; abrirGuion(); S.p2.guion = o; },
  'gu-del': x => { leerGU(); GU.splice(+x, 1); const o = S.p2.guion; S.p2.guion = GU; abrirGuion(); S.p2.guion = o; },
  'gu-ok': () => { leerGU(); cerrarHoja(); commit(() => { S.p2.guion = GU.filter(g => g.t).map(g => ({ t: g.t, m: Math.max(1, +g.m || 1) })); }, 'Guion guardado'); },
  'cp-guardar': () => copiaGuardar(false), 'cp-rec': () => copiaRecuperar(),
  'exportar': () => { const blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'ruta71-' + hoy() + '.json'; document.body.appendChild(a); a.click(); a.remove(); toast('Archivo creado'); },
  'borrar-todo': (x, b) => { if (b.dataset.c !== '1') { b.dataset.c = '1'; b.innerHTML = '<span>Toca otra vez para borrarlo todo</span>'; setTimeout(() => { if (b.isConnected) { b.dataset.c = ''; b.innerHTML = '<span>Borrar todo</span>'; } }, 3500); return; }
    commit(() => { const g = S.grupo, yo = S.yo; S = DEF(); S.grupo = g; S.yo = yo; S.onb = true; }, 'Todo borrado', true); }
});
let APK = null, EST_N = null, EST_D = 60, RB = [], S2 = null, GU = [];
const fichaN = () => ACT === 'tema' ? P.n : TSEL;
function leerRB() { $$('[data-rb]').forEach(i => { const k = i.dataset.rb, j = +i.dataset.i; if (RB[j]) RB[j][k] = k === 'p' ? +i.value : i.value; }); }
function leerGU() { $$('[data-gu]').forEach(i => { const k = i.dataset.gu, j = +i.dataset.i; if (GU[j]) GU[j][k] = k === 'm' ? +i.value : i.value; }); }
function abrirEstudiar(n) {
  EST_N = n || (loQueToca().find(x => x.n) || {}).n || siguientesTemas(1)[0] || null; EST_D = 60;
  hoja(htmlEstudiar());
}
function htmlEstudiar() {
  const sug = [...new Set(loQueToca().filter(x => x.n).map(x => x.n).concat(siguientesTemas(3)))].slice(0, 5);
  return `<h2>¿Qué vas a estudiar?</h2><div class="sub">El cronómetro apunta las horas a ese tema.</div>
    <div class="lab">Sugeridos</div><div class="tiles">${sug.map(n => `<button data-a="est-tema" data-x="${n}">${tile(n, est(n), 40, EST_N === n ? 'sel' : '')}</button>`).join('')}</div>
    <div class="lab">O elige cualquiera</div><select class="inp" id="est-sel">${S.temario.map(x => `<option value="${x.n}" ${x.n === EST_N ? 'selected' : ''}>${x.n} · ${esc(titCorto(x.n))}</option>`).join('')}</select>
    <div class="lab">¿Cuánto rato?</div><div class="chips">${[25, 45, 60, 90, 120].map(m => `<button class="ch ${EST_D === m ? 'on' : ''}" data-a="est-dur" data-x="${m}">${horasTxt(m)}</button>`).join('')}</div>
    <div style="height:14px"></div>${btn('Empezar', 'est-ok')}`;
}
async function publicar(p, silencio) {
  if (!S.grupo.url) return;
  try { await gapi('g-publicar', { mat: Object.assign({ id: uid() }, p) }); if (!silencio) { toast('Compartido con el grupo'); cargarGrupo(true); } }
  catch (e) { toast('No he podido compartirlo. Se ha guardado solo en lo tuyo.'); }
}
let JOIN = null;
function leerInvitacion(s) { try { s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; const d = JSON.parse(decodeURIComponent(escape(atob(s)))); return d && d.u ? d : null; } catch (e) { return null; } }
function pedirUnirse() {
  if (!JOIN) return;
  hoja(`<h2>Unirte a «${esc(JOIN.g || 'Grupo')}»</h2><div class="sub">Compartiréis tarjetas, supuestos, esquemas y enlaces. Tu progreso solo se ve si lo activas; tus flaquezas y notas nunca.</div>
    <div class="lab">Tu nombre y apellido en el grupo</div><input class="inp" id="gj-n" value="${esc(S.yo.nombre)}" placeholder="Ej.: Ane Goñi">
    <div style="height:14px"></div>${btn('Unirme', 'g-join-ok')}<button class="link" data-a="cerrar-hoja">Ahora no</button>`);
}

/* copia privada en Google */
async function copiaGuardar(silencio) {
  if (!S.copia.url) { if (!silencio) toast('Primero pega la URL de tu script'); return; }
  try { await api(S.copia.url, S.copia.clave, 'guardar', { version: VERSION, datos: S }); S.copia.ult = Date.now(); S.copia.error = false; save(); if (!silencio) toast('Copia guardada en tu Google'); }
  catch (e) { S.copia.error = true; save(); if (!silencio) toast('No se ha podido guardar. Revisa la URL y la clave.'); }
  if (ACT === 'ajustes') refresh();
}
async function copiaRecuperar() {
  try { const j = await api(S.copia.url, S.copia.clave, 'recuperar'); if (!j.datos) { toast('Todavía no hay ninguna copia'); return; }
    const cp = S.copia; commit(() => { const d = DEF(); S = Object.assign(d, j.datos); S.copia = cp; ['yo', 'conv', 'obj', 'p2', 'grupo', 'aj', 'ui'].forEach(k => S[k] = Object.assign(d[k], j.datos[k] || {})); }, 'Copia recuperada', true); }
  catch (e) { toast('No se ha podido recuperar'); }
}

/* entradas de texto */
let NT = null;
document.addEventListener('input', e => {
  const t = e.target;
  if (t.id === 'notas') { const n = +t.dataset.n; clearTimeout(NT); NT = setTimeout(() => { tema(n).notas = t.value; save(); }, 400); }
  if (t.id === 't-bus') { TBUS = t.value; const c = $('#view .card'); if (c) c.innerHTML = S.ui.tmodo === 'mapa' ? htmlMapa(ancho() ? TSEL : null) : htmlLista(); }
  if (t.dataset.rb) { const s = $('#rb-sum'); if (s) s.textContent = 'Suman ' + $$('[data-rb="p"]').reduce((a, i) => a + (+i.value || 0), 0) + ' %.'; }
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.c) { S.conv[t.dataset.c] = t.value.trim() || S.conv[t.dataset.c]; save(); if (t.dataset.c === 'fecha') refresh(); }
  if (t.dataset.y) { S.yo[t.dataset.y] = t.value.trim(); save(); }
  if (t.dataset.cp) { S.copia[t.dataset.cp] = t.value.trim(); S.copia.error = false; save(); refresh(); }
  if (t.id === 'importar' && t.files[0]) { const r = new FileReader(); r.onload = () => { try { const d = JSON.parse(r.result); if (!d.temario) throw 0; commit(() => { const x = DEF(); S = Object.assign(x, d); ['yo', 'conv', 'obj', 'p2', 'grupo', 'copia', 'aj', 'ui'].forEach(k => S[k] = Object.assign(x[k], d[k] || {})); }, 'Datos importados', true); } catch (er) { toast('Ese archivo no es de Ruta 71'); } }; r.readAsText(t.files[0]); }
  if (t.id === 'ev-foto' && t.files[0]) { const img = new Image(), fr = new FileReader(); fr.onload = () => { img.onload = () => { const k = Math.min(1, 640 / Math.max(img.width, img.height)), c = document.createElement('canvas'); c.width = img.width * k; c.height = img.height * k; c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); EV.foto = c.toDataURL('image/jpeg', .6); refresh(); }; img.src = fr.result; }; fr.readAsDataURL(t.files[0]); }
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter' || e.target.tagName === 'TEXTAREA') return;
  const m = { nf: 'flaq-add', nc: 'cosa-add', ne: 'enl-add', 'ev-olv': 'ev-olv-add', 'p2-n': 'p2-add', 'g-link': 'g-unirme', 'ap-txt': 'ap-ok', 'gj-n': 'g-join-ok' }[e.target.id];
  if (m) { e.preventDefault(); ACC[m](); }
});

/* tema claro / oscuro y color de la barra de arriba */
function oscuro() { return S.aj.tema === 'oscuro' || (S.aj.tema === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches); }
function aplicarTema() { document.documentElement.dataset.theme = oscuro() ? 'dark' : 'light'; themeColor(); }
function themeColor() { const c = OSCURAS.includes(ACT) ? '#10253F' : oscuro() ? '#0C1A2C' : '#EEF2F5'; $$('meta[name="theme-color"]').forEach(m => m.content = c); document.documentElement.style.backgroundColor = c; }
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (S.aj.tema === 'auto') aplicarTema(); });
let ANCHO = ancho();
addEventListener('resize', () => { if (ancho() !== ANCHO) { ANCHO = ancho(); if (ACT === 'tema' && ANCHO) { TSEL = P.n; go('temario', { n: P.n }, 'tab'); } else refresh(); } });

/* arranque */
function inicio() {
  aplicarTema();
  $('#nav').innerHTML = navHtml();
  const m = location.hash.match(/#unirse=([A-Za-z0-9+/_-]+)/);
  if (m) { JOIN = leerInvitacion(m[1]); history.replaceState(null, '', location.pathname + location.search); }
  if (!S.onb) { go('bienvenida', {}, 'fade'); return; }
  if (SES) { go('sesion', {}, 'fade'); return; }
  if (SIM) { go('examen', {}, 'fade'); return; }
  go('hoy', {}, 'fade');
  if (JOIN) setTimeout(pedirUnirse, 400);
  if (S.grupo.url) setTimeout(() => cargarGrupo(true), 1500);
}
addEventListener('hashchange', () => { const m = location.hash.match(/#unirse=([A-Za-z0-9+/_-]+)/); if (!m) return; JOIN = leerInvitacion(m[1]); history.replaceState(null, '', location.pathname + location.search); if (JOIN && S.onb) pedirUnirse(); });
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { $('#nav').innerHTML = navHtml(); pintarNav(); if (ACT === 'hoy') refresh(); if (S.copia.url && (!S.copia.ult || Date.now() - S.copia.ult > 6 * 36e5)) copiaGuardar(true); } });
function pintarNav() { $$('.navbtn').forEach(b => b.classList.toggle('on', b.dataset.x === ACT || (ACT === 'tema' && b.dataset.x === 'temario'))); }
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
inicio();
