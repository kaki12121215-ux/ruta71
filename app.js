/* Ruta 71 · índices orientativos de los 71 temas de Tecnología.
 * Son una propuesta para orientarse, no un texto oficial: cada persona los revisa y los adapta.
 * Cada tema lleva sus apartados centrales; la app añade la introducción, la aplicación en el aula
 * y la conclusión con la bibliografía. */
const INDICES_TEC = [
  'Concepto de energía, unidades y formas|Fuentes de energía: clasificación|Centrales térmicas, nucleares e hidráulicas|Centrales de energías renovables|Transformaciones energéticas y rendimiento',
  'El sistema eléctrico: generación, transporte y distribución|Líneas de transporte, tensiones y subestaciones|Transformadores y centros de transformación|Distribución en baja tensión y acometidas|Transporte de combustibles: oleoductos, gasoductos y otros medios',
  'Evolución del consumo energético|Consumo en España y en el mundo: datos y comparación|Criterios y técnicas de ahorro energético|Eficiencia energética en edificios, industria y transporte|Energías alternativas: tipos, ventajas e inconvenientes',
  'Actividad tecnológica y medio ambiente|Impactos sobre el aire, el agua y el suelo|Explotación de recursos y sostenibilidad|Residuos: tipos y gestión|Técnicas de tratamiento y reciclaje|Normativa ambiental',
  'Ciencia, técnica y tecnología|Prehistoria y Antigüedad|Edad Media y Renacimiento|Las revoluciones industriales|Siglos XX y XXI: la era digital',
  'Factores que impulsan el desarrollo tecnológico|Tecnología y crecimiento económico|Consecuencias sociales: empleo, consumo y calidad de vida|Desigualdades y brecha tecnológica|Tecnología, ética y sostenibilidad',
  'Evolución de la organización del trabajo|Taylorismo y fordismo|Automatización y robótica|Nuevas formas de trabajo: teletrabajo y plataformas digitales|Cualificación y formación permanente',
  'Evolución del transporte|Evolución de las comunicaciones|Tratamiento de la información|Transmisión de la información: medios y redes|La sociedad de la información',
  'Concepto de sistema informático|Hardware: unidad central, memoria y periféricos|Representación de la información|Software: sistema operativo y programas|Tipos y características de los programas',
  'El proceso de diseño industrial|Fases de la producción de bienes|Factores de diseño: función, estética, coste y sostenibilidad|El método de proyectos|Características y fases de un proyecto técnico escolar',
  'El sector agropecuario: características|Fases de la producción agrícola y ganadera|Técnicas y maquinaria|Agricultura sostenible y ecológica|Proyecto agrícola escolar: el huerto escolar',
  'Composición y alteración de los alimentos|Técnicas de manipulación e higiene|Técnicas de conservación|Envasado y etiquetado|Transporte y cadena de frío',
  'Canales de distribución|Logística y almacenamiento|Comercialización y marketing|El mercado: oferta y demanda|Leyes básicas del mercado y formación de precios',
  'Generación de ideas: técnicas creativas|Expresión gráfica: bocetos, croquis y planos|Maquetas y prototipos|Evaluación y selección de soluciones|Documentación del proyecto',
  'Planificación de la producción|Herramientas: diagramas de Gantt y PERT|Organización de recursos y tareas|Seguimiento y control de calidad|La planificación técnica en el ámbito escolar',
  'La empresa: tipos y estructura|Sistemas organizativos|Gestión de recursos humanos|Gestión de recursos materiales y financieros|Calidad y mejora continua',
  'Riesgos en el uso de herramientas manuales|Riesgos de las máquinas|Riesgos de los materiales técnicos|Elementos de protección de las máquinas|Equipos de protección individual',
  'Accidente e incidente: conceptos|Factores técnicos, humanos y organizativos|Análisis de causas|Criterios de reducción de riesgos|Organización segura del taller escolar',
  'Normativa de prevención de riesgos|Normas de seguridad e higiene en el taller|Señalización de seguridad|Actuación en caso de accidente|Primeros auxilios básicos',
  'Soportes y materiales de dibujo|Instrumentos de dibujo técnico|Técnicas de dibujo a mano alzada|Técnicas de color y acabado|Diseño gráfico asistido por ordenador',
  'Elementos geométricos fundamentales|Paralelas, perpendiculares, mediatrices y bisectrices|Ángulos y su construcción|Polígonos regulares|Tangencias y enlaces',
  'Fundamentos del sistema diédrico|Representación del punto, la recta y el plano|Vistas de un objeto|Normalización de vistas|Croquizado y acotación',
  'Sistemas de representación en perspectiva|Fundamentos de la perspectiva isométrica|Trazado de piezas en isométrica|Perspectiva caballera y coeficiente de reducción|Comparación y uso de cada perspectiva',
  'Fundamentos de la perspectiva cónica|Elementos: punto de vista, línea de horizonte y puntos de fuga|Perspectiva cónica frontal|Perspectiva cónica oblicua|Aplicaciones en el diseño',
  'Concepto y necesidad de la normalización|Organismos y normas UNE, EN e ISO|Formatos, escalas y tipos de línea|Acotación|Simbología eléctrica, electrónica, neumática y mecánica',
  'El punto, la línea y el plano|Forma, textura y volumen|Composición y equilibrio|Luz y sombra|Aplicación al diseño de productos',
  'Naturaleza del color|Cualidades: tono, saturación y luminosidad|Mezcla aditiva y sustractiva|Interacciones y armonías de color|Aplicación al diseño de productos',
  'Percepción de los materiales|Cualidades sensoriales: tacto, color y brillo|Cualidades expresivas|Selección de materiales en el diseño|Ejemplos en productos de uso común',
  'Clasificación de los materiales|Propiedades físicas y químicas|Propiedades mecánicas|Ensayos de tracción, dureza y resiliencia|Ensayos no destructivos',
  'Obtención de los plásticos|Constitución: los polímeros|Tipos: termoplásticos, termoestables y elastómeros|Propiedades y aplicaciones|Procedimientos de identificación',
  'Moldeo por inyección, extrusión y soplado|Termoconformado|Mecanizado de plásticos|Uniones: adhesivos, soldadura y uniones mecánicas|Aplicaciones en el taller',
  'Clasificación de las fibras|Fibras naturales, artificiales y sintéticas|Propiedades características|Hilos y ligamentos|Tejidos básicos',
  'El proceso de confección|Patronaje y corte|Técnicas de costura|Útiles y herramientas|Aplicaciones escolares',
  'Clasificación de los materiales de construcción|Materiales pétreos|Materiales cerámicos y vidrio|Aglomerantes: yeso, cal y cemento|Hormigones y morteros',
  'Replanteo y medición|Fábricas de ladrillo|Morteros y revestimientos|Herramientas y útiles|Seguridad en la obra',
  'Estructura y composición de la madera|Clasificación de las maderas|Propiedades|Obtención de maderas en bruto|Maderas prefabricadas|Acabados y tratamientos',
  'Medida y trazado|Corte y desbaste|Perforado y lijado|Uniones y ensamblajes|Herramientas y máquinas',
  'Clasificación de los materiales férricos|Obtención del hierro: el alto horno|Obtención del acero|Las fundiciones|Aplicaciones',
  'Clasificación: pesados, ligeros y ultraligeros|El cobre y sus aleaciones|El aluminio y sus aleaciones|Otros metales: estaño, plomo, cinc y titanio|Obtención y aplicaciones',
  'Conformación por moldeo|Conformación por deformación|Mecanizado con y sin arranque de viruta|Uniones fijas y desmontables|Herramientas y útiles',
  'Tratamientos térmicos|Tratamientos termoquímicos|Tratamientos superficiales|Protección contra la corrosión|Acabados decorativos',
  'Magnitudes y unidades: el Sistema Internacional|Instrumentos de medida de longitud|Instrumentos de medida eléctrica|Procedimientos de medida|El error en la medida: tipos y cálculo',
  'Fuerzas y momentos|Tipos de esfuerzos|Composición y representación de esfuerzos|Equilibrio de fuerzas|Cálculo de esfuerzos en piezas simples',
  'Concepto y función de las estructuras|Tipos de estructuras|Elementos estructurales|Esfuerzos en las estructuras|Estabilidad y resistencia: la triangulación',
  'Máquinas y mecanismos|Transmisión lineal: palanca y poleas|Transmisión circular: ruedas de fricción, poleas y correa, engranajes y cadena|Relación de transmisión y trenes de mecanismos|Mecanismos de transformación del movimiento',
  'Ejes y árboles|Mecanismos de retención: trinquetes y frenos|Acoplamientos fijos y móviles|Embragues|Rodamientos y lubricación',
  'Principios de termodinámica|Clasificación de las máquinas térmicas|Motores de combustión externa|Motores de combustión interna: dos y cuatro tiempos|Aplicaciones y rendimiento',
  'Principios electromagnéticos|Constitución de las máquinas de corriente continua|Funcionamiento como motor y como generador|Tipos de excitación|Aplicaciones características',
  'El transformador|El alternador|Motores asíncronos|Motores síncronos|Aplicaciones características',
  'Clasificación de los electrodomésticos|Electrodomésticos de calor|Electrodomésticos con motor|Electrodomésticos de frío|Eficiencia energética y etiquetado',
  'Abastecimiento de agua|La instalación interior|Elementos componentes|Circuitos de utilización|Evacuación y depuración',
  'Sistemas de calefacción|Elementos componentes|Funcionamiento|Circuitos característicos|Eficiencia y energías renovables',
  'Acometida e instalación de enlace|Cuadro general de mando y protección|Circuitos interiores|Elementos de maniobra y protección|El Reglamento Electrotécnico de Baja Tensión',
  'Carga, corriente y tensión|Resistencia y ley de Ohm|Potencia y energía|Leyes de Kirchhoff|Corriente alterna: magnitudes características',
  'Asociación en serie|Asociación en paralelo|Circuitos mixtos|Cálculo de magnitudes|Medidas con el polímetro',
  'Potencia activa, reactiva y aparente|El triángulo de potencias|El factor de potencia|Corrección del factor de potencia|Cálculo de la batería de condensadores',
  'Componentes pasivos: resistencias, condensadores y bobinas|Semiconductores: diodos y transistores|Circuitos integrados|Procedimientos de conexión|Placas de prototipos y soldadura',
  'Fuentes de alimentación|Rectificación y filtrado|Estabilización|Amplificación|Temporizadores y osciladores',
  'Constitución y funcionamiento del relé|Circuitos de conmutación|Control de motores: inversión de giro|Circuitos de potencia|Aplicaciones',
  'El transistor bipolar|Zonas de funcionamiento|El transistor en conmutación|Circuitos con sensores|Aplicaciones características',
  'Principios físicos|Producción y tratamiento del aire comprimido|Elementos: actuadores y válvulas|Simbología|Circuitos típicos de potencia y control',
  'Sistemas de numeración|Álgebra de Boole|Puertas lógicas|Tablas de verdad|Simplificación: mapas de Karnaugh',
  'Familias lógicas|Puertas con diodos y transistores|Tecnologías TTL y CMOS|Circuitos integrados|Otras tecnologías: eléctrica y neumática',
  'Circuitos combinacionales y secuenciales|Biestables|Contadores|Registros|Aplicaciones características',
  'Concepto de sistema de control|Lazo abierto y lazo cerrado|Elementos componentes|Variables y función de transferencia|Diagrama de bloques',
  'Concepto de transductor y captador|Sensores de posición y proximidad|Sensores de temperatura y luz|Otros sensores|Acondicionamiento de la señal',
  'Función del comparador|Comparadores electrónicos|Comparadores mecánicos y neumáticos|Detectores de error|Aplicaciones',
  'Necesidad de amplificar y adaptar señales|Amplificadores operacionales|Etapas de potencia|Conversión analógico-digital|Aplicaciones',
  'Concepto y tipos de actuadores|Actuadores eléctricos: motores, servos y paso a paso|Actuadores neumáticos e hidráulicos|Otros actuadores|Criterios de selección',
  'Control cableado y control programado|Autómatas programables|Microcontroladores y placas de desarrollo|Lenguajes de programación|Aplicaciones',
  'Importancia de los trabajos prácticos|Organización del aula taller|Criterios organizativos|Criterios didácticos y de evaluación|Normas de seguridad'];
function indiceOrientativo(n) {
  if (S.temario.length !== TEMARIO_TEC.length || !INDICES_TEC[n - 1]) return null;
  return ['Introducción'].concat(INDICES_TEC[n - 1].split('|'), ['Aplicación en el aula de Tecnología', 'Conclusión y bibliografía']);
}
/* RUTA 71 · app para preparar oposiciones
 * Web app (móvil y ordenador). Lo tuyo se guarda en este dispositivo y, si quieres,
 * en tu Google. El grupo comparte materiales en una hoja de Google con un script.
 */
'use strict';
const VERSION = '1.1.8';

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
/* criterios del tribunal coordinador de Navarra (2018) para el desarrollo escrito del tema */
const RUBRICA_DEF = () => [{ t: 'Organización del tema', p: 25, d: 'Cómo se presenta y justifica, secuencia lógica de las partes y planteamiento original' },
  { t: 'Contenido específico', p: 60, d: 'Dominio completo y profundo del tema y rigor en el lenguaje técnico' },
  { t: 'Menciones didácticas', p: 15, d: 'Relación con el sistema educativo y el currículo, y propuestas didácticas' }];
const RUBRICA_VIEJA = ['Estructura y orden', 'Contenido y rigor', 'Actualización y normativa', 'Aplicación didáctica', 'Presentación y expresión'];
const FECHAS_DEF = () => [{ id: uid(), t: 'Oferta de plazas', f: '' }, { id: uid(), t: 'Convocatoria', f: '' }, { id: uid(), t: 'Fin de inscripción', f: '' }, { id: uid(), t: 'Listas de admitidos', f: '' }];
const ENLACES_DEF = () => [{ id: uid(), t: 'Educación · Gobierno de Navarra', url: 'https://www.educacion.navarra.es' }, { id: uid(), t: 'Boletín Oficial de Navarra', url: 'https://bon.navarra.es' }];
const P2_DEF = () => ['Contexto del centro y del alumnado', 'Marco normativo actualizado', 'Competencias y saberes básicos', 'Situaciones de aprendizaje secuenciadas', 'Metodología', 'Atención a la diversidad', 'Evaluación y criterios de calificación', 'Recursos y espacios', 'Actividades complementarias', 'Evaluación de la propia programación'].map(t => ({ id: uid(), t, ok: false }));
const GUION_DEF = () => [{ t: 'Justificación y contexto', m: 4 }, { t: 'Objetivos y competencias', m: 6 }, { t: 'Secuencia de actividades', m: 10 }, { t: 'Evaluación', m: 6 }, { t: 'Conclusión', m: 4 }];

/* ===================================================================== estado */
const DEF = () => ({
  v: 1, onb: false, yo: { id: uid(), nombre: '' },
  conv: { nombre: 'Navarra 2027 · Secundaria', esp: 'Tecnología', bolas: 4, minTema: 120, fecha: '2027-06-15', aprox: true, fechas: FECHAS_DEF(), enlaces: ENLACES_DEF(), ets: 0 },
  obj: { temas: 30, horas: 15 },
  temario: temarioTec(), temas: {}, tarjetas: [], sesiones: [], sims: [], supuestos: [], hist: [], agenda: [], copias: {}, grupos: [], examenes: [], fb: [],
  p2: { checks: P2_DEF(), sits: [], ensayos: [], guion: GUION_DEF() },
  rubrica: RUBRICA_DEF(),
  copia: { url: '', clave: '', ult: null, error: false, subidos: {}, sinc: false, v: null, mod: 0, devs: {} },
  aj: { tema: 'auto', sonido: true, dias: [1, 2, 3, 4, 5] },
  ui: { tmodo: 'mapa', tfil: 'Todos', tblq: 'Todos', tver: 'estado', hvista: 'hoy', semOff: 0, mesOff: 0, gtab: 'mat', gsel: null, gfT: '', gfK: '', gfP: '', ptab: 'horas', sfil: 'Todos' }
});
let S;
try { const raw = JSON.parse(localStorage.getItem('ruta71') || '{}'); const d = DEF(); S = Object.assign(d, raw);
  ['yo', 'conv', 'obj', 'p2', 'copia', 'aj', 'ui'].forEach(k => S[k] = Object.assign(d[k], raw[k] || {})); } catch (e) { S = DEF(); }
migrar(S);
function migrar(S) {
  /* si se usa el temario de Tecnología, sus títulos se actualizan al texto oficial */
  if (S.temario.length === TEMARIO_TEC.length && /^Producción y transformación/.test((S.temario[0] || {}).t || '')) S.temario.forEach((x, i) => { x.t = TEMARIO_TEC[i]; });
  if (S.ui.tfil === 'Mis temas') S.ui.tfil = 'Los que llevo';
  if (S.ui.tfil === 'Se enfrían') S.ui.tfil = 'Sin repasar hace tiempo';
  if (!['Todos', 'Los que llevo', 'Débiles', 'Sin repasar hace tiempo'].includes(S.ui.tfil)) { S.ui.tblq = S.ui.tfil; S.ui.tfil = 'Todos'; }
  /* de un solo grupo a varios grupos de trabajo */
  if (S.grupo && S.grupo.url && !S.grupos.length) S.grupos.push({ id: uid(), url: S.grupo.url, clave: S.grupo.clave, nombre: S.grupo.nombre || 'Grupo', compartir: S.grupo.compartir !== false, todo: false, cache: S.grupo.cache, ult: S.grupo.ult });
  delete S.grupo;
  if (!S.ui.gsel && S.grupos[0]) S.ui.gsel = S.grupos[0].id;
  /* la rúbrica de antes pasa a los criterios de Navarra */
  if (S.rubrica.length === 5 && S.rubrica.every((c, i) => c.t === RUBRICA_VIEJA[i])) S.rubrica = RUBRICA_DEF();
  if (!Array.isArray(S.conv.fechas)) S.conv.fechas = FECHAS_DEF();
  if (!Array.isArray(S.conv.enlaces)) S.conv.enlaces = ENLACES_DEF();
  if (!Array.isArray(S.aj.dias)) S.aj.dias = [1, 2, 3, 4, 5];
  if (!S.copia.subidos) S.copia.subidos = {};
  Object.values(S.temas).forEach(t => { (t.flaq || []).forEach(f => { if (f.e == null) { f.e = f.ok ? 2 : 0; if (f.ok) f.res = f.ts; } delete f.ok; });
    if (t.v == null) t.v = 0; if (!t.ix) t.ix = { modo: 'ori', ori: {}, per: [] }; if (!t.comp) t.comp = {}; });
  S.tarjetas.forEach(c => { if (!c.tipo) c.tipo = 'girar'; });
}
let COPT = null;
function save(sinCopia) { if (!sinCopia && S.copia) S.copia.mod = Date.now();
  try { localStorage.setItem('ruta71', JSON.stringify(S)); } catch (e) { toast('No queda espacio para guardar. Exporta tus datos.'); }
  if (sinCopia || !S.copia || !S.copia.url) return;
  /* con «Sincronizar» activado: unos segundos después del último cambio; sin él, la copia de siempre a los 3 minutos */
  if (S.copia.sinc && typeof sincPronto === 'function') sincPronto();
  else if (typeof copiaGuardar === 'function') { clearTimeout(COPT); COPT = setTimeout(() => copiaGuardar(true), 3 * 6e4); } }
save(true);
let PILA = [];
function commit(fn, aviso, deshacer = true) { PILA.push(JSON.stringify(S)); if (PILA.length > 25) PILA.shift(); fn(); save(); refresh(); if (aviso) toast(aviso, deshacer); }
function deshacer() { if (!PILA.length) return; S = JSON.parse(PILA.pop()); save(); refresh(); toast('Deshecho'); }

const tema = n => { if (!S.temas[n]) S.temas[n] = { e: 0, conf: 0, mio: false, flaq: [], cosas: [], notas: '', enlaces: [], min: 0, ult: null, prox: null, v: 0, vts: null, ix: { modo: 'ori', ori: {}, per: [] }, comp: {} }; return S.temas[n]; };
const tit = n => (S.temario.find(x => x.n === n) || {}).t || 'Tema ' + n;
const titCorto = n => { const t = tit(n); const c = t.split(/[.:]/)[0]; return c.length > 70 ? c.slice(0, 68) + '…' : c; };
const bloqueDe = n => (S.temario.find(x => x.n === n) || {}).b || '';
const bloques = () => { const out = []; S.temario.forEach(x => { let b = out.find(y => y.n === x.b); if (!b) out.push(b = { n: x.b, temas: [] }); b.temas.push(x.n); }); return out; };
const est = n => (S.temas[n] || {}).e || 0;
const dominados = () => S.temario.filter(x => est(x.n) === 4).length;
const cuenta = e => S.temario.filter(x => est(x.n) === e).length;
const diasExamen = () => Math.max(0, diasEntre(hoy(), S.conv.fecha));
const tarjetasHoy = () => S.tarjetas.filter(c => !c.arch && (!c.prox || c.prox <= hoy()));
const debil = n => { const t = S.temas[n]; return !!t && ((t.conf && t.conf <= 2) || t.flaq.some(f => f.e < 2)); };
const seEnfria = n => { const t = S.temas[n]; return !!t && t.e >= 3 && t.ult && diasEntre(t.ult, hoy()) > 21; };
const ultimaNota = n => { const s = S.sims.filter(x => x.tema === n).sort((a, b) => b.ts - a.ts)[0]; return s ? s.nota : null; };
/* vueltas al temario: la vuelta en curso es la más baja entre tus temas, más uno */
function vueltaInfo() {
  let xs = S.temario.filter(x => tema(x.n).mio).map(x => x.n);
  if (!xs.length) xs = S.temario.filter(x => est(x.n) >= 1).map(x => x.n);
  if (!xs.length) return null;
  const vs = xs.map(n => tema(n).v || 0), actual = Math.min(...vs) + 1;
  return { actual, hechos: vs.filter(v => v >= actual).length, total: xs.length, mios: S.temario.some(x => tema(x.n).mio) };
}
const vClase = v => 'v' + Math.min(4, v || 0);
function cambiarEstado(n, e) { const t = tema(n); if (t.e === e) return; S.hist.push({ ts: Date.now(), n, de: t.e, a: e }); t.e = e; if (e >= 1 && !t.ult) t.ult = hoy(); }
function programar(n, conf) { const t = tema(n); t.conf = conf; t.ult = hoy(); t.prox = addDays(hoy(), Math.round(CONF_DIAS[conf] * (t.e >= 4 ? 1.4 : 1))); }
function minSemana(off = 0) { const d = new Date(); const dow = (d.getDay() + 6) % 7; d.setDate(d.getDate() - dow + off * 7); const a = ymd(d), z = addDays(a, 7);
  return S.sesiones.filter(s => { const f = ymd(new Date(s.ts)); return f >= a && f < z; }).reduce((x, s) => x + s.min, 0) + S.sims.filter(s => { const f = ymd(new Date(s.ts)); return f >= a && f < z; }).reduce((x, s) => x + (s.min || 0), 0); }

/* ===================================================================== iconos de línea */
const LP = {
  fb: '<path d="M4 5h16v11H9l-5 4z"/><path d="M9 10h6"/>', bajar: '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>', carpeta: '<path d="M3.5 7V18a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8l-2-2.5h-5a1 1 0 0 0-1 1z"/>',
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
  nube: '<path d="M7 18a4.5 4.5 0 1 1 1-8.9A5.5 5.5 0 0 1 18.6 11 3.5 3.5 0 0 1 18 18z"/>', usuario: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
  marca: '<path d="M7 3.5h10v17l-5-3.6-5 3.6z"/>', tarjetas: '<rect x="3" y="8" width="14" height="11" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>',
  cal: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>', archivo: '<rect x="3.5" y="4" width="17" height="5" rx="1"/><path d="M5 9v10.5h14V9M10 13h4"/>',
  imprimir: '<path d="M7 9V3.5h10V9"/><rect x="3.5" y="9" width="17" height="8" rx="1.5"/><path d="M7 14h10v6.5H7z"/>', foto: '<rect x="3" y="6.5" width="18" height="13" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8.5 6.5l1.5-2.5h4l1.5 2.5"/>',
  campana: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>', mover: '<path d="M8 6h.01M8 12h.01M8 18h.01M16 6h.01M16 12h.01M16 18h.01" stroke-width="3.2"/>',
  lista: '<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" stroke-width="2"/>', rayo: '<path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/>',
  subir: '<path d="M12 16V4M7 9l5-5 5 5M4.5 15v4.5h15V15"/>', vuelta: '<path d="M20 12a8 8 0 1 1-3-6.2"/><path d="M20 4v4.5h-4.5"/>', corregir: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>', ojo: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>'
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

/* archivos (fotos y PDF) en el propio dispositivo: IndexedDB */
const IDB = { db: null,
  abrir() { if (this.db) return Promise.resolve(this.db); return new Promise((ok, ko) => { try { const r = indexedDB.open('ruta71-archivos', 1); r.onupgradeneeded = () => r.result.createObjectStore('f'); r.onsuccess = () => { this.db = r.result; ok(this.db); }; r.onerror = () => ko(r.error); } catch (e) { ko(e); } }); },
  async put(id, blob) { const db = await this.abrir(); return new Promise((ok, ko) => { const tx = db.transaction('f', 'readwrite'); tx.objectStore('f').put(blob, id); tx.oncomplete = () => ok(id); tx.onerror = () => ko(tx.error); }); },
  async get(id) { const db = await this.abrir(); return new Promise((ok, ko) => { const r = db.transaction('f').objectStore('f').get(id); r.onsuccess = () => ok(r.result || null); r.onerror = () => ko(r.error); }); },
  async del(id) { const db = await this.abrir(); return new Promise(ok => { const tx = db.transaction('f', 'readwrite'); tx.objectStore('f').delete(id); tx.oncomplete = () => ok(); tx.onerror = () => ok(); }); }
};
/* reduce una foto para guardarla o mandarla (lado largo de 1600 px) */
function reducirFoto(file, lado = 1600, q = .72) {
  return new Promise((ok, ko) => { const fr = new FileReader(); fr.onerror = ko; fr.onload = () => { const img = new Image(); img.onerror = ko; img.onload = () => {
    const k = Math.min(1, lado / Math.max(img.width, img.height)), c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); c.toBlob(b => b ? ok(b) : ko(new Error('foto')), 'image/jpeg', q); }; img.src = fr.result; }; fr.readAsDataURL(file); });
}
const blobA64 = b => new Promise((ok, ko) => { const r = new FileReader(); r.onload = () => ok(String(r.result).split(',')[1]); r.onerror = ko; r.readAsDataURL(b); });
const b64ABlob = (s, tipo) => { const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new Blob([u], { type: tipo }); };
const tamTxt = b => b > 1e6 ? coma((b / 1e6).toFixed(1)) + ' MB' : Math.max(1, Math.round(b / 1e3)) + ' KB';
/* Logo con el eslogan, dentro de la app para que salga siempre (aunque falte el archivo en el servidor) */
const LOGO_C = 'data:image/png;base64,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';
const LOGO_O = 'data:image/png;base64,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';

/* ===================================================================== navegación */
const TABS = [['hoy', 'Hoy', 'hoy'], ['temario', 'Temario', 'temario'], ['simulacro', 'Simulacro', 'sim'], ['grupo', 'Grupo', 'grupo'], ['progreso', 'Progreso', 'prog']];
const FULL = ['bienvenida', 'sesion', 'examen', 'sorteo', 'repaso', 'supuesto-hacer', 'ensayo'];
const OSCURAS = ['sesion', 'examen'];
const R = {}, A_RENDER = {}, A_SALIR = {};
let ACT = null, P = {}, HIST = [];
let TCASC = false;
function go(name, params = {}, modo = 'push') {
  cerrarHoja();
  TCASC = name === 'temario' && ACT !== 'temario' && ACT !== 'tema';
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
  pintarNav();
  if (modo && !reduceMotion()) {
    const dx = modo === 'push' ? 36 : modo === 'back' ? -30 : 0, dy = modo === 'tab' || modo === 'fade' ? 12 : 0;
    animar(v, x => ({ opacity: Math.min(1, x * 1.6), transform: `translate(${(1 - x) * dx}px,${(1 - x) * dy}px)` }), { w: 13, z: 8 });
  }
  if (A_RENDER[ACT]) A_RENDER[ACT](v);
  TCASC = false;
  themeColor();
}
/* Al repintar la misma pantalla se conserva dónde estabas: la página y cada columna o fila con su propio desplazamiento
   (en el ordenador, el mapa y la ficha van en dos columnas que se desplazan por separado) */
function posDesplaz(v) {
  const out = [], cont = {};
  v.querySelectorAll('*').forEach(e => { if (!e.scrollTop && !e.scrollLeft) return; const k = e.tagName + '.' + e.className; const i = cont[k] = (cont[k] || 0) + 1; out.push([k, i, e.scrollTop, e.scrollLeft]); });
  return out;
}
function ponDesplaz(v, pos) {
  if (!pos.length) return; const cont = {}, mapa = {};
  v.querySelectorAll('*').forEach(e => { const k = e.tagName + '.' + e.className; const i = cont[k] = (cont[k] || 0) + 1; mapa[k + '|' + i] = e; });
  pos.forEach(([k, i, t, l]) => { const e = mapa[k + '|' + i]; if (e) { e.scrollTop = t; e.scrollLeft = l; } });
}
function refresh() { if (!ACT) return; const v = $('#view'), y = v.scrollTop, pos = posDesplaz(v); v.innerHTML = R[ACT] ? R[ACT](P) : ''; v.scrollTop = y; ponDesplaz(v, pos); if (A_RENDER[ACT]) A_RENDER[ACT](v, true); }
function navHtml() {
  return `<nav class="tabbar">${TABS.map(([k, t, i]) => `<button class="navbtn" data-a="tab" data-x="${k}">${ic(i, 23)}<span>${t}</span></button>`).join('')}</nav>
    <aside class="side"><div class="marca"><span class="logoimg"><img class="lg-c" src="${LOGO_C}" alt="Ruta 71. Tema a tema, hasta la plaza."><img class="lg-o" src="${LOGO_O}" alt="Ruta 71. Tema a tema, hasta la plaza."></span></div>${TABS.map(([k, t, i]) => `<button class="navbtn" data-a="tab" data-x="${k}">${ic(i, 20)}<span>${t}</span></button>`).join('')}
    <button class="navbtn" data-a="ir" data-x="ajustes">${ic('ajustes', 20)}<span>Ajustes</span></button>
    <button class="navbtn" data-a="ir" data-x="feedback">${ic('fb', 20)}<span>Feedback</span>${typeof fbPend === 'function' && fbPend().length ? `<em class="fbcuenta">${fbPend().length}</em>` : ''}</button>
    <div class="sidecount"><small>Para el examen</small><b class="m">${diasExamen()}</b><small>días · ${S.conv.aprox ? 'hacia ' : ''}${fechaLarga(S.conv.fecha).replace(/^\S+ /, '')}</small></div>${typeof sincBoton === 'function' ? sincBoton() : ''}</aside>`;
}
const topBar = (back, right = '') => `<div class="top"><div class="l">${back ? `<button class="back" data-a="atras">${ic('atras', 19, 2.2)}<span>${back}</span></button>` : ''}</div><div class="r">${right}</div></div>`;
const topTab = (extra = '') => topBar(null, `${extra}<button class="ib solomovil" data-a="ir" data-x="ajustes" aria-label="Ajustes">${ic('ajustes', 22)}</button>`);
const btn = (t, a, x = '', cls = '') => `<button class="btn ${cls}" data-a="${a}" data-x="${esc(x)}">${t}</button>`;
const chipsHtml = (xs, sel, a, k = '') => `<div class="chips">${xs.map(x => `<button class="ch ${x === sel ? 'on' : ''}" data-a="${a}" data-x="${esc(x)}" ${k ? `data-k="${k}"` : ''}>${esc(x)}</button>`).join('')}</div>`;
const segHtml = (xs, sel, a) => `<div class="seg">${xs.map(([k, t]) => `<button class="${k === sel ? 'on' : ''}" data-a="${a}" data-x="${k}">${t}</button>`).join('')}</div>`;

/* ===================================================================== Bienvenida (5 pasos) */
let ONB = 0, OBJ_TMP = null, TPEGAR = false;
/* Visita guiada: después de la portada, una pantalla por cada parte de la app; luego, la configuración */
const hero = (c, h) => `<div class="hero ${c}" aria-hidden="true">${h}</div>`;
const tag = (t, pos, c = '') => `<span class="tag ${c}" style="${pos}">${t}</span>`;
const VISITA = [
  () => ['El temario, de un vistazo', 'Cada casilla es un tema y su color dice cómo lo llevas.',
    hero('n', `<div class="rel">${tag('Punto naranja: lo llevas al examen', 'top:-14px;right:-4px')}</div><div class="card hmap">${Array.from({ length: 24 }, (_, i) => tile(i + 1, [4, 3, 3, 2, 4, 1, 2, 0, 3, 1, 0, 0, 2, 1, 0, 3, 0, 0, 1, 2, 0, 0, 1, 0][i], 42, [1, 2, 5, 9, 16].includes(i + 1) ? 'mio' : '')).join('')}</div>
      <div class="escala">${['Sin empezar', 'Leído', 'Resumido', 'Me lo sé', 'Lo domino'].map((t, i) => `<div>${tile('', i, 24)}<small>${t}</small></div>`).join('<i></i>')}</div>`)],
  () => ['Todo el tema en su ficha', 'Lo que te falla, el índice, lo de memoria y tus notas.',
    hero('c', `<div class="rel">${tag('Toca el estado para cambiarlo', 'top:-12px;right:-4px', 'n')}</div><div class="card hfi">${tile(19, 2, 46)}<div><small>Proyecto y taller · tema 19</small><b>Normas de salud y seguridad en el taller</b></div></div>
      <div class="seg">${['Flaquezas', 'Índice', 'Tarjetas', 'Notas'].map((t, i) => `<button class="${i ? '' : 'on'}">${t}</button>`).join('')}</div>
      <div class="card dfq">${[['Normativa de señalización', 'p', 'Pendiente'], ['Cálculo de la potencia', 'e', 'En ello'], ['Tipos de engranajes', 'r', 'Resuelta']].map(([t, c, e]) => `<div class="row"><b>${t}</b><span class="vest ${c}">${e}</span></div>`).join('')}</div>`)],
  () => ['Cada día sabes qué toca', 'La agenda reparte tus horas. Si un día no puedes, se reajusta.',
    hero('o', `<div class="card hag"><div class="hd"><b>Martes 10</b><span>3 bloques · 1 h 45</span></div>
      <div class="blk"><span class="ck done">${ic('check', 14, 3)}</span><span class="hr">17:00</span>${tile(12, 3, 30)}<span class="grow"><b>Tema 12 · repaso</b><small>Le toca hoy</small></span></div>
      <div class="blk"><span class="ck"></span><span class="hr">17:45</span>${tile(27, 1, 30)}<span class="grow"><b>Tema 27</b><small>Apartado 3 del índice</small></span></div>
      <div class="blk"><span class="ck"></span><span class="hr">19:00</span><span class="tl e0" style="--s:30px">${ic('tarjeta', 16)}</span><span class="grow"><b>Tarjetas</b><small>14 te tocan hoy</small></span></div></div>
      ${tag('Lo que no hiciste pasa a mañana', 'position:relative;align-self:flex-start;margin:-4px 0 -2px', 'n')}<div class="card row vavi">${ic('campana', 20)}<div class="grow"><b>Nuevo aviso en el BON</b><small>Lista provisional de admitidos</small></div></div>`)],
  () => ['Estudia por bloques', 'Tú eliges el bloque y el descanso. La app te avisa y solo cuenta lo estudiado.',
    hero('n', `<div class="rel">${tag('Suena al acabar cada bloque', 'top:-14px;right:-4px')}</div><div class="hses"><div class="kick">Bloque 2 de 3</div><b class="m">18:42</b><small>Tema 27 · Mecanismos</small></div>
      <div class="linea">${['25', '5', '25', '5', '25'].map((m, i) => `<div class="${i % 2 ? 'des' : 'blq'} ${i < 2 ? 'ya' : i === 2 ? 'ahora' : ''}" style="flex:${i % 2 ? 7 : 25}"><small>${m}</small></div>`).join('')}</div>
      <div class="lineap"><span>Bloques de 25 min</span><span>Descansos de 5</span></div>`)],
  () => ['Tarjetas que vuelven cuando toca', 'Las que fallas salen antes; las que sabes, cada vez más tarde.',
    hero('c', `<div class="tipos">${['Girar', 'Escribir', 'Huecos'].map((t, i) => `<span class="${i ? '' : 'on'}">${t}</span>`).join('')}</div>
      <div class="pila"><div class="card"></div><div class="card"></div><div class="card dtj"><small>Tema 19</small><b>¿Qué tres pasos sigue la conducta PAS?</b><em>Proteger, avisar y socorrer</em></div></div>
      <div class="rel">${tag('Si te la sabes, vuelve más tarde', 'top:-12px;right:-4px', 'n')}</div><div class="four">${[['No me acordaba', 'mal', 'mañana'], ['Me ha costado', '', '3 días'], ['Bien', '', '1 semana'], ['Fácil', 'facil', '3 semanas']].map(([t, c, d]) => `<button class="${c}"><b>${t}</b><small>${d}</small></button>`).join('')}</div>`)],
  () => ['Ensaya el examen', 'Sacas bolas, escribes con el tiempo real y te corriges con la rúbrica oficial.',
    hero('n', `<div class="hbol">${[14, 33, 52, 68].map((n, i) => `<span class="bola ${i === 2 ? 'on' : ''}">${n}</span>`).join('')}</div>
      <div class="rel">${tag('Fotos de lo que escribes', 'top:-14px;right:-4px')}</div><div class="card hsim"><div><small>Tema 52 · Electrónica digital</small><b class="m">1:58:10</b></div>${ic('foto', 26)}</div>
      <div class="drub"><i style="flex:25"></i><i style="flex:60"></i><i style="flex:15"></i></div>
      <div class="rubl"><span><b>25 %</b>Organización</span><span><b>60 %</b>Contenido</span><span><b>15 %</b>Didáctica</span></div>`)],
  () => ['Prepararlo en grupo', 'Cada uno elige qué comparte. Os repartís temas y os corregís los simulacros.',
    hero('o', `<div class="card dgr">${[['A', 'Tema 19 · índice', 'Lo ha compartido hoy', 'compartir'], ['M', 'Tema 33', 'Se lo reserva para preparar', 'bandera'], ['J', 'Simulacro del tema 52', 'Pide que alguien lo corrija', 'corregir'], ['L', 'Tema 8 · tarjetas', '24 tarjetas nuevas', 'tarjeta']].map(([l, t, d, i]) => `<div class="row"><span class="ini">${l}</span><div class="grow"><b>${t}</b><small>${d}</small></div>${ic(i, 18)}</div>`).join('')}</div>
      ${tag('Tú decides qué compartes', 'top:6px;right:-4px', 'n')}<div class="avs">${['A', 'M', 'J', 'L', 'I'].map(l => `<span class="ini">${l}</span>`).join('')}<small>5 en el grupo</small></div>`)],
  () => ['Mira cuánto has avanzado', 'La probabilidad de que te salga un tema que dominas sube con cada tema.',
    hero('n', `<div class="hpr"><b>38<span>%</span></b><small>de que salga uno de tus temas entre las 4 bolas</small></div>
      <div class="hbar">${[30, 55, 40, 70, 62, 85, 48].map((h, i) => `<div><i style="height:${h}%"></i><small>${'LMXJVSD'[i]}</small></div>`).join('')}</div>`)],
  () => ['Lo tuyo es tuyo', 'Nadie ve nada que no compartas.',
    hero('c', `<div class="capas">${[['hoy', 'En tu móvil u ordenador', 'Siempre'], ['nube', 'En tu Google Drive', 'Si activas la copia'], ['grupo', 'En el grupo', 'Solo lo que compartes']].map(([i, t, d], k) => `<div class="card row c${k}">${ic(i, 24)}<div class="grow"><b>${t}</b><small>${d}</small></div></div>`).join('')}</div>`)]];
const NV = VISITA.length;                 // pantallas de la visita
const ONB_TOT = 1 + NV + 4;               // portada + visita + 4 de configuración
R.bienvenida = () => {
  if (OBJ_TMP == null) OBJ_TMP = S.obj.temas;
  const dots = Array.from({ length: ONB_TOT }, (_, i) => `<i class="${i === ONB ? 'on' : i < ONB ? 'ya' : ''}"></i>`).join('');
  const conf = [
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
  let t, lead, extra, kick = '';
  if (ONB === 0) [t, lead, extra] = ['Un plano para llegar al examen.', 'Ruta 71 te ayuda a preparar la oposición tema a tema: qué sabes, qué te falla, qué toca repasar hoy y qué probabilidad tienes de que salga uno que dominas.',
      `<div class="logo"><span class="logoimg"><img class="lg-c" src="${LOGO_C}" alt="Ruta 71. Tema a tema, hasta la plaza."><img class="lg-o" src="${LOGO_O}" alt="Ruta 71. Tema a tema, hasta la plaza."></span></div><div class="card">${rutaSvg(8, 3, 3)}<div class="s2">Cada tema es una parada. Avanzas cuando lo dominas.</div></div>`];
  else if (ONB <= NV) { [t, lead, extra] = VISITA[ONB - 1](); kick = `<div class="kick okk">Cómo funciona · ${ONB} de ${NV}</div>`; }
  else { [t, lead, extra] = conf[ONB - NV - 1](); kick = `<div class="kick okk">Para empezar · ${ONB - NV} de 4</div>`; }
  const ult = ONB === ONB_TOT - 1, saltar = ONB === 0 ? 'Saltar' : ONB <= NV ? 'Saltar la visita' : (!ult ? 'Saltar' : '');
  return `<div class="pg narrow"><div class="col">${topBar(null, saltar ? `<button class="link sk" data-a="onb-saltar">${saltar}</button>` : '')}
    ${ONB >= 1 && ONB <= NV ? `<div class="onb vis">${kick}<h1>${t}</h1><p class="lead">${lead}</p>${extra}</div>` : `<div class="onb">${kick}<h1>${t}</h1><p class="lead">${lead}</p>${extra}</div><div class="sp"></div>`}
    <div class="dots">${dots}</div>${btn(ult ? 'Empezar' : 'Siguiente', 'onb-sig')}${ONB ? '<button class="link" data-a="onb-atras">Atrás</button>' : '<div style="height:44px"></div>'}</div></div>`;
};
function rutaSvg(n, hecho, actual, labels) {
  const w = 300, xs = Array.from({ length: n }, (_, i) => 12 + i * (w - 24) / (n - 1));
  let b = `<line x1="${xs[0]}" y1="16" x2="${xs[n - 1]}" y2="16" stroke="var(--line)" stroke-width="5" stroke-linecap="round"/>`;
  if (hecho > 0) b += `<line class="rl" x1="${xs[0]}" y1="16" x2="${xs[Math.min(hecho, n - 1)]}" y2="16" stroke="var(--acc)" stroke-width="5" stroke-linecap="round"/>`;
  xs.forEach((x, i) => { const on = i <= hecho, cur = i === actual; b += `<circle class="st" style="--i:${i}" cx="${x}" cy="16" r="${cur ? 9 : 7}" fill="${on ? 'var(--acc)' : 'var(--card)'}" stroke="${cur ? 'var(--ink)' : on ? 'var(--acc)' : 'var(--line)'}" stroke-width="${cur ? 3 : 2.5}"/>`;
    if (labels) b += `<text x="${x}" y="42" text-anchor="middle" font-size="10.5" fill="var(--ink2)">${labels[i]}</text>`; });
  return `<svg width="100%" viewBox="0 0 ${w} ${labels ? 48 : 32}" class="ruta">${b}</svg>`;
}

/* ===================================================================== Hoy */
const secT = (icon, t, extra = '') => `<div class="sec">${ic(icon, 18, 2)}<b>${t}</b>${extra}</div>`;
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

/* ---------- agenda ---------- */
const lunes = (off = 0) => { const d = parseYmd(hoy()); d.setDate(d.getDate() - (d.getDay() + 6) % 7 + off * 7); return ymd(d); };
const DIA3 = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const diaCorto = f => { const d = parseYmd(f); return DIA3[d.getDay()] + ' ' + d.getDate(); };
const bloquesDe = f => S.agenda.filter(b => b.f === f).sort((a, b) => (a.h || '99') < (b.h || '99') ? -1 : 1);
const minDia = f => S.agenda.filter(b => b.f === f).reduce((a, b) => a + b.min, 0);
const KBLOQ = { estudiar: 'Estudiar', repasar: 'Repasar', simulacro: 'Simulacro' };
function tituloBloque(b) {
  if (!b.n) return KBLOQ[b.k] || 'Estudiar';
  if (b.k === 'simulacro') return 'Simulacro · tema ' + b.n;
  if (b.k === 'repasar') return `Tema ${b.n} · repaso`;
  return `Tema ${b.n}`;
}
function blkHtml(b, conHora = true) {
  return `<div class="blk ${b.hecho ? 'hecho' : ''}"><button class="ck ${b.hecho ? 'done' : ''}" data-a="ag-ck" data-x="${b.id}" aria-label="Hecho">${b.hecho ? ic('check', 14, 3) : ''}</button>
    <button class="grow row blkb" data-a="ag-editar" data-x="${b.id}">${conHora ? `<span class="hr">${b.h || '—'}</span>` : ''}${b.n ? tile(b.n, est(b.n), 28) : `<span class="tl e0" style="--s:28px">${ic('crono', 15)}</span>`}
    <span class="grow"><b>${esc(tituloBloque(b))}</b><small>${b.k === 'estudiar' ? esc(b.ap || titCorto(b.n)) : b.k === 'repasar' ? esc(titCorto(b.n)) : horasTxt(b.min) + ' con el reloj'}</small></span></button><span class="dur">${horasTxt(b.min)}</span></div>`;
}
/* apartados del índice activo que aún no están hechos */
function apartadosPend(n) {
  const t = tema(n), ix = t.ix || {};
  if (ix.modo === 'per' && ix.per && ix.per.length) return ix.per.filter(a => (a.e || 0) < 2).map(a => a.t);
  const o = indiceOrientativo(n); return o ? o.filter((a, i) => ((ix.ori || {})[i] || 0) < 2) : [];
}
function proponerSemana(off) {
  const L = lunes(off), dias = Array.from({ length: 7 }, (_, i) => addDays(L, i)).filter(f => f >= hoy() && S.aj.dias.includes(parseYmd(f).getDay()));
  if (!dias.length) return 0;
  const ya = Array.from({ length: 7 }, (_, i) => minDia(addDays(L, i))).reduce((a, x) => a + x, 0);
  let falta = S.obj.horas * 60 - ya - (off === 0 ? minSemana() : 0);
  if (falta < 30) return -1;
  const cola = [], usados = {};
  S.temario.filter(x => { const t = S.temas[x.n]; return t && t.e >= 1 && t.prox && t.prox <= dias[dias.length - 1]; })
    .sort((a, b) => S.temas[a.n].prox < S.temas[b.n].prox ? -1 : 1).slice(0, 6).forEach(x => cola.push({ k: 'repasar', n: x.n, min: 45, desde: S.temas[x.n].prox }));
  siguientesTemas(6).forEach(n => { const aps = apartadosPend(n); (aps.length ? aps.slice(0, 2) : ['']).forEach(ap => cola.push({ k: 'estudiar', n, min: 60, ap, desde: '' })); });
  const simYa = S.agenda.some(b => b.k === 'simulacro' && b.f >= L && b.f < addDays(L, 7));
  const cand = S.temario.filter(x => est(x.n) >= 3).sort((a, b) => (ultimaNota(a.n) || 0) - (ultimaNota(b.n) || 0))[0];
  if (!simYa && cand && falta >= S.conv.minTema + 60) cola.push({ k: 'simulacro', n: cand.n, min: S.conv.minTema, desde: dias[Math.min(dias.length - 1, Math.floor(dias.length * .6))] });
  const porDia = Math.max(30, Math.ceil(falta / dias.length / 15) * 15); let creados = 0;
  for (const f of dias) {
    let carga = minDia(f);
    while (falta > 0 && carga < porDia) {
      const i = cola.findIndex(c => (!c.desde || c.desde <= f) && !usados[f + '.' + c.n]);
      if (i < 0) break;
      const c = cola.splice(i, 1)[0], min = Math.min(c.min, Math.max(30, falta));
      S.agenda.push({ id: uid(), f, h: '', min, n: c.n, ap: c.ap || '', k: c.k, hecho: false }); usados[f + '.' + c.n] = 1; carga += min; falta -= min; creados++;
    }
  }
  return creados;
}
function reajustar() {
  const pend = S.agenda.filter(b => !b.hecho && b.f < hoy()); if (!pend.length) return 0;
  const dias = Array.from({ length: 21 }, (_, i) => addDays(hoy(), i)).filter(f => S.aj.dias.includes(parseYmd(f).getDay()));
  if (!dias.length) return 0;
  const tope = Math.max(60, Math.round(S.obj.horas * 60 / Math.max(1, S.aj.dias.length) * 1.3));
  pend.sort((a, b) => a.f < b.f ? -1 : 1).forEach(b => { const d = dias.find(f => minDia(f) + b.min <= tope) || dias[dias.length - 1]; b.f = d; b.h = ''; });
  return pend.length;
}
const pendientesAtrasados = () => S.agenda.filter(b => !b.hecho && b.f < hoy() && b.f >= addDays(hoy(), -21));
/* marca hecho el primer bloque de hoy que encaje con lo que acabas de hacer */
function marcarBloque(n, k) { const b = bloquesDe(hoy()).find(x => !x.hecho && x.n === n && (k === 'simulacro' ? x.k === 'simulacro' : x.k !== 'simulacro')); if (b) b.hecho = true; }

/* ---------- convocatoria ---------- */
function fechasConv() {
  const xs = S.conv.fechas.map(x => Object.assign({}, x));
  xs.push({ id: 'examen', t: 'Primera prueba', f: S.conv.fecha, aprox: S.conv.aprox, fija: true });
  return xs.sort((a, b) => (a.f || '9999') < (b.f || '9999') ? -1 : 1);
}
const proximaFecha = () => fechasConv().find(x => x.f && x.f >= hoy());
function avisosBoletin() { const out = [], vistos = {}; S.grupos.forEach(g => ((g.cache || {}).avisos || []).forEach(a => { if (!vistos[a.id]) { vistos[a.id] = 1; out.push(a); } })); return out.sort((a, b) => a.fecha < b.fecha ? 1 : -1); }

R.hoy = () => {
  const vista = S.ui.hvista || 'hoy';
  const cab = `${topTab(`<button class="ib" data-a="ag-nuevo" aria-label="Añadir bloque">${ic('mas', 23)}</button>`)}
    <div class="kick">${vista === 'hoy' ? cap(fechaLarga(hoy())) + (S.yo.nombre ? ' · ' + esc(S.yo.nombre) : '') : vista === 'semana' ? semanaTxt() : mesTxt()}</div><h1>Hoy</h1>
    ${segHtml([['hoy', 'Hoy'], ['semana', 'Semana'], ['mes', 'Mes']], vista, 'ag-vista')}`;
  return `<div class="pg"><div class="col">${cab}${vista === 'semana' ? htmlSemana() : vista === 'mes' ? htmlMes() : htmlHoy()}</div></div>`;
};
function htmlHoy() {
  const d = dominados(), dias = diasExamen(), bs = bloquesDe(hoy()), sig = bs.find(b => !b.hecho && b.n && b.k !== 'simulacro') || bs.find(b => !b.hecho && b.n);
  const fase = dias > 180 ? 'Queda mucho, y eso es bueno: ahora se construye la base.' : dias > 60 ? 'Mitad del camino: repasa lo que ya sabes y suma temas poco a poco.' : dias > 0 ? 'Recta final: más repaso y simulacros, menos temas nuevos.' : 'Hoy es el día. Confía en lo que has preparado.';
  const px = proximaFecha(), vi = vueltaInfo(), th = tarjetasHoy();
  const items = bs.length ? [] : loQueToca();
  return `<div class="grid2"><div>
    <button class="card cnt" data-a="ir" data-x="ruta"><div class="row" style="align-items:flex-end;gap:14px"><b class="num big cu" data-n="${dias}">${dias}</b><div style="padding-bottom:6px"><b>días para el examen</b><small>${S.conv.aprox ? 'Fecha aproximada: ' : ''}${fechaLarga(S.conv.fecha).replace(/^\S+ /, '')}</small></div></div><div class="s2">${fase}</div></button>
    <button class="card row" data-a="ir" data-x="convocatoria" style="gap:12px">${ic('campana', 22)}<span class="grow"><b>${px && px.id !== 'examen' ? `${esc(px.t)}: ${px.f === hoy() ? 'hoy' : 'en ' + plural(diasEntre(hoy(), px.f), 'día', 'días')}` : 'Convocatoria'}</b><small>${px && px.id !== 'examen' ? fechaLarga(px.f) : 'Fechas clave, avisos y enlaces'}</small></span>${ic('sig', 16)}</button>
    ${secT('cal', 'Plan de hoy', `<button class="link sk acc" data-a="ag-nuevo" data-x="${hoy()}">Añadir</button>`)}
    <div class="card" style="padding:2px 13px">${bs.length ? bs.map(b => blkHtml(b)).join('')
      : `<div class="s2" style="margin:10px 0 4px">Sin nada planificado para hoy. Esto es lo que te propongo:</div>${items.map((x, i) => `<button class="lr enter" style="--i:${i}" data-a="toca" data-k="${x.k}" data-x="${x.n || x.id || ''}">${x.n ? tile(x.n, est(x.n), 30) : `<span class="tl e0" style="--s:30px">${ic(x.k === 'supuesto' ? 'crono' : 'tarjeta', 16)}</span>`}<div class="grow"><b>${esc(x.t)}</b><small>${esc(x.s)}</small></div>${ic('sig', 16)}</button>`).join('') || '<div class="empty">Nada pendiente.</div>'}
        <button class="link acc" data-a="ag-vista" data-x="semana">Planificar la semana</button>`}</div>
    <div style="height:12px"></div>${sig ? btn(ic('crono', 19, 2) + `Empezar · ${sig.k === 'simulacro' ? 'simulacro del ' + sig.n : 'tema ' + sig.n}`, 'ag-empezar', sig.id) : btn('Empezar a estudiar', 'estudiar')}</div>
    <div>${th.length ? `<button class="card row" data-a="rapido" style="gap:12px;margin-top:10px"><span class="okc" style="width:38px;height:38px">${ic('rayo', 19, 2)}</span><span class="grow"><b>Repaso rápido · 5 min</b><small>${plural(Math.min(10, th.length), 'tarjeta que te toca', 'tarjetas que te tocan')}</small></span>${ic('sig', 16)}</button>` : ''}
    ${vi ? `${secT('vuelta', 'Vueltas')}<div class="card"><div class="cl"><span>Vas por la vuelta ${vi.actual}</span><em>${vi.hechos} de ${vi.total}</em></div><div class="pbar"><i style="width:${Math.round(vi.hechos / vi.total * 100)}%"></i></div><small style="margin-top:8px">${vi.total - vi.hechos ? `Te faltan ${plural(vi.total - vi.hechos, vi.mios ? 'tema de los tuyos' : 'tema', vi.mios ? 'temas de los tuyos' : 'temas')} para cerrar la vuelta ${vi.actual}.` : 'Vuelta cerrada.'} La cierras en la ficha de cada tema.</small></div>` : ''}
    ${secT('marca', 'Si hoy fuera el examen')}<div class="card"><div class="row"><b class="num" style="font-size:36px">${prob(d)} %</b><small style="font-size:13px;line-height:1.4">de que salga uno de tus ${plural(d, 'tema dominado', 'temas dominados')}. ${d < S.temario.length ? `Con 5 más subirías al ${prob(Math.min(S.temario.length, d + 5))} %.` : ''}</small></div>
      <div class="pbar" style="margin-top:10px"><i style="width:${prob(d)}%"></i></div></div>
    <div class="card row"><span style="color:var(--acc)">${ic('crono', 26)}</span><div class="grow"><b>Esta semana: ${horasTxt(minSemana())}</b><small>Tu objetivo son ${S.obj.horas} h.</small></div></div></div></div>`;
}
const semanaTxt = () => { const L = lunes(S.ui.semOff || 0), Z = addDays(L, 6), pl = Array.from({ length: 7 }, (_, i) => minDia(addDays(L, i))).reduce((a, x) => a + x, 0);
  return `Semana del ${parseYmd(L).getDate()}${parseYmd(L).getMonth() !== parseYmd(Z).getMonth() ? ' de ' + MESES[parseYmd(L).getMonth()] : ''} al ${parseYmd(Z).getDate()} de ${MESES[parseYmd(Z).getMonth()]} · ${horasTxt(pl)} de ${S.obj.horas} h`; };
function htmlSemana() {
  const off = S.ui.semOff || 0, L = lunes(off), at = pendientesAtrasados();
  return `<div class="row navs"><button class="ib sm" data-a="ag-sem" data-x="-1" aria-label="Semana anterior">${ic('atras', 18)}</button><b class="grow center">${off === 0 ? 'Esta semana' : off === 1 ? 'La semana que viene' : off === -1 ? 'La semana pasada' : fechaCorta(L) + ' – ' + fechaCorta(addDays(L, 6))}</b><button class="ib sm" data-a="ag-sem" data-x="1" aria-label="Semana siguiente">${ic('sig', 18)}</button></div>
    ${at.length && off >= 0 ? `<div class="aviso">${ic('alerta', 19, 2)}<div class="grow"><b>${plural(at.length, 'bloque sin hacer', 'bloques sin hacer')}</b> de días pasados.</div><button data-a="ag-reajustar">Reajustar</button></div>` : ''}
    ${Array.from({ length: 7 }, (_, i) => addDays(L, i)).map(f => { const bs = bloquesDe(f), estudia = S.aj.dias.includes(parseYmd(f).getDay());
      if (!bs.length && !estudia) return ''; const m = minDia(f);
      return `<div class="dia ${f === hoy() ? 'hoyd' : ''} ${f < hoy() ? 'pasado' : ''}"><h4><button data-a="ag-nuevo" data-x="${f}">${diaCorto(f)}${f === hoy() ? ' · hoy' : ''}</button><span>${m ? horasTxt(m) : ''}</span></h4>
        <div class="card">${bs.map(b => blkHtml(b)).join('') || `<button class="vacio" data-a="ag-nuevo" data-x="${f}">${ic('mas', 16)}Añadir</button>`}</div></div>`; }).join('')}
    <div class="two" style="margin-top:16px">${btn(ic('repetir', 18) + 'Proponer semana', 'ag-proponer', '', 'soft')}${btn(ic('mas', 18) + 'Añadir bloque', 'ag-nuevo', '', 'soft')}</div>
    <p class="note">«Proponer semana» reparte tus ${S.obj.horas} h entre los repasos que tocan y tus temas, en los días que estudias. Lo puedes cambiar todo.</p>`;
}
const mesTxt = () => { const d = parseYmd(hoy()); d.setDate(1); d.setMonth(d.getMonth() + (S.ui.mesOff || 0)); const a = ymd(d), z = ymd(new Date(d.getFullYear(), d.getMonth() + 1, 0));
  const m = S.agenda.filter(b => b.f >= a && b.f <= z).reduce((x, b) => x + b.min, 0); return `${cap(MESES[d.getMonth()])} de ${d.getFullYear()} · ${horasTxt(m)} planificadas`; };
function htmlMes() {
  const d0 = parseYmd(hoy()); d0.setDate(1); d0.setMonth(d0.getMonth() + (S.ui.mesOff || 0));
  const y = d0.getFullYear(), m = d0.getMonth(), ini = new Date(y, m, 1 - (d0.getDay() + 6) % 7), marcas = {}; fechasConv().forEach(x => { if (x.f) marcas[x.f] = x.t; });
  const celdas = []; for (let i = 0; i < 42; i++) { const d = new Date(ini); d.setDate(ini.getDate() + i); if (i >= 35 && d.getMonth() !== m) break; const f = ymd(d), mn = minDia(f);
    celdas.push(`<button class="d ${d.getMonth() !== m ? 'out' : ''} ${f === hoy() ? 'today' : ''} ${marcas[f] ? 'mark' : ''}" data-a="ag-dia" data-x="${f}"><span>${d.getDate()}</span>${marcas[f] ? '<span class="ev"></span>' : ''}${mn ? `<span class="hh"><i>${coma(Math.round(mn / 6) / 10)}h</i><span class="bar" style="width:${Math.min(100, mn / 2.4)}%"></span></span>` : ''}</button>`); }
  const ev = fechasConv().filter(x => x.f && x.f.slice(0, 7) === ymd(d0).slice(0, 7));
  return `<div class="row navs"><button class="ib sm" data-a="ag-mes" data-x="-1" aria-label="Mes anterior">${ic('atras', 18)}</button><b class="grow center">${cap(MESES[m])}</b><button class="ib sm" data-a="ag-mes" data-x="1" aria-label="Mes siguiente">${ic('sig', 18)}</button></div>
    <div class="cal">${['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(x => `<div class="dn">${x}</div>`).join('')}${celdas.join('')}</div>
    <div class="leg" style="margin-top:12px"><span><i class="lb"></i>Horas planificadas</span><span><i class="ld"></i>Fecha de la convocatoria</span></div>
    ${ev.map(x => `<div class="card row" style="gap:10px">${ic('campana', 20)}<div class="grow"><b>${parseYmd(x.f).getDate()} ${MES3[parseYmd(x.f).getMonth()]} · ${esc(x.t)}</b><small>${x.aprox ? 'Fecha aproximada' : 'Convocatoria'}</small></div></div>`).join('')}
    <p class="note">Toca un día para ver sus bloques o añadir uno.</p>`;
}
A_RENDER.hoy = v => contar(v);
function contar(v) { v.querySelectorAll('.cu').forEach(b => { const n = +b.dataset.n; if (reduceMotion() || !n) { b.textContent = n; return; } const t0 = performance.now(); const f = now => { const u = Math.min(1, (now - t0) / 700); b.textContent = Math.round(n * (1 - Math.pow(1 - u, 3))); if (u < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }); }

/* hoja: bloque de la agenda */
let FB = null;
function abrirBloque(id, f) {
  const b = id ? S.agenda.find(x => x.id === id) : null;
  FB = b ? Object.assign({}, b) : { id: null, f: f || hoy(), h: '', min: 60, n: siguientesTemas(1)[0] || 1, ap: '', k: 'estudiar', rep: false };
  hoja(htmlBloque());
}
function htmlBloque() {
  const aps = FB.n ? (tema(FB.n).ix && tema(FB.n).ix.modo === 'per' && tema(FB.n).ix.per.length ? tema(FB.n).ix.per.map(a => a.t) : indiceOrientativo(FB.n) || []) : [];
  return `<h2>${FB.id ? 'Bloque de estudio' : 'Nuevo bloque'}</h2>
  <div class="lab">Tema</div><select class="inp" id="fb-n">${S.temario.map(x => `<option value="${x.n}" ${x.n === FB.n ? 'selected' : ''}>${x.n} · ${esc(titCorto(x.n))}</option>`).join('')}</select>
  ${aps.length ? `<div class="lab">Apartado (de tu índice)</div><select class="inp" id="fb-ap"><option value="">Todo el tema</option>${aps.map(a => `<option ${a === FB.ap ? 'selected' : ''}>${esc(a)}</option>`).join('')}</select>` : ''}
  <div class="lab">Qué vas a hacer</div>${segHtml(Object.entries(KBLOQ), FB.k, 'fb-k')}
  <div class="lab">Cuándo</div><div class="two"><input class="inp" type="date" id="fb-f" value="${FB.f}"><input class="inp" type="time" id="fb-h" value="${FB.h}"></div>
  <div class="lab">Cuánto</div><div class="chips" style="margin-top:0">${[30, 45, 60, 90, 120, 180].map(m => `<button class="ch ${FB.min === m ? 'on' : ''}" data-a="fb-min" data-x="${m}">${horasTxt(m)}</button>`).join('')}</div>
  ${FB.id ? '' : `<label class="row tgrow"><div class="grow"><b>Repetir cada semana</b><small>El mismo día durante 8 semanas</small></div><button class="tgl ${FB.rep ? 'on' : ''}" data-a="fb-rep"><i></i></button></label>`}
  <div style="height:16px"></div>${btn('Guardar bloque', 'fb-ok')}${FB.id ? `<div class="two">${btn(FB.hecho ? 'Marcar sin hacer' : 'Marcar hecho', 'fb-hecho', '', 'soft sm')}${btn('Borrar', 'fb-del', '', 'soft sm del')}</div>` : ''}`;
}
function leerFB() { const n = +(($('#fb-n') || {}).value || FB.n); if (n !== FB.n) FB.ap = ''; else if ($('#fb-ap')) FB.ap = $('#fb-ap').value; FB.n = n; FB.f = ($('#fb-f') || {}).value || FB.f; FB.h = ($('#fb-h') || {}).value || ''; }

/* ===================================================================== Convocatoria */
R.convocatoria = () => {
  const xs = fechasConv(), px = proximaFecha(), avs = avisosBoletin();
  return `<div class="pg"><div class="col">${topBar('Hoy')}<div class="kick">${esc(S.conv.esp)}${S.grupos.length ? ' · compartida con ' + esc(S.grupos.map(g => g.nombre).join(', ')) : ''}</div><h1>Convocatoria ${esc(S.conv.nombre.split(' · ')[0])}</h1>
    <div class="grid2"><div>
    ${px ? `<div class="card row" style="gap:14px;margin-top:14px"><b class="num" style="font-size:46px">${diasEntre(hoy(), px.f)}</b><div class="grow"><b>días para ${px.id === 'examen' ? 'la primera prueba' : '«' + esc(px.t.toLowerCase()) + '»'}</b><small>${fechaLarga(px.f)}${px.aprox ? ' · aproximada' : ''}</small></div></div>` : ''}
    ${secT('cal', 'Fechas clave', `<button class="link sk acc" data-a="cv-fecha">Añadir</button>`)}
    <div class="card" style="padding:4px 15px">${xs.map(x => { const st = x.f && x.f < hoy() ? 'pas' : px && x.id === px.id ? 'next' : '';
      return `<button class="fe ${st}" data-a="cv-fecha" data-x="${x.id}"><span class="dot"></span><span class="grow"><b>${esc(x.t)}</b><small>${!x.f ? 'Sin fecha todavía' : st === 'pas' ? 'Pasada' : st === 'next' ? (x.f === hoy() ? 'Hoy' : 'Faltan ' + plural(diasEntre(hoy(), x.f), 'día', 'días')) : x.aprox ? 'Fecha aproximada' : 'Prevista'}</small></span><span class="fd">${x.f ? fechaCorta(x.f) : '—'}</span></button>`; }).join('')}</div>
    <p class="note">Toca una fecha para cambiarla. ${S.grupos.length ? 'Los cambios se comparten con tu grupo.' : 'Si te unes a un grupo, se compartirán.'}</p></div><div>
    ${secT('campana', 'Avisos del boletín')}
    <div class="card" style="padding:4px 15px">${avs.length ? avs.slice(0, 8).map(a => `<a class="bon" href="${esc(a.url)}" target="_blank" rel="noopener">${ic('doc', 18)}<span class="grow"><b>${esc(a.titulo)}</b><small>${esc(a.fuente || 'BOE')} · ${fechaCorta(a.fecha)}</small></span></a>`).join('')
      : `<div class="s2" style="margin:10px 0">${S.grupos.length ? 'Todavía no ha salido nada. El script del grupo revisa el boletín una vez al día si quien lo instaló activó los avisos (está en el PASO A PASO).' : 'Con un grupo conectado, el script del grupo revisa el boletín cada día y te avisa aquí de lo que salga de Secundaria en Navarra.'}</div>`}</div>
    <p class="note">Es una ayuda: el boletín oficial siempre manda.</p>
    ${secT('enlace', 'Enlaces')}
    <div class="card" style="padding:2px 15px">${S.conv.enlaces.map(e => `<div class="srow"><a class="grow tt" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.t)}</a><button class="ib sm" data-a="cv-enl-del" data-x="${e.id}" aria-label="Quitar">${ic('papelera', 16)}</button></div>`).join('')}
      <div class="addin" style="padding-bottom:10px"><input class="inp sm" id="cv-enl" placeholder="Pega un enlace (bases, listas…)" inputmode="url" enterkeyhint="done"><button class="ib" data-a="cv-enl-add" aria-label="Añadir">${ic('mas', 20)}</button></div></div></div></div>
  </div></div>`;
};
function abrirFechaConv(id) {
  const x = id === 'examen' ? { id, t: 'Primera prueba', f: S.conv.fecha } : S.conv.fechas.find(y => y.id === id) || { id: null, t: '', f: '' };
  FCV = Object.assign({}, x);
  hoja(`<h2>${x.id ? esc(x.t) : 'Nueva fecha'}</h2>${x.id === 'examen' ? '<div class="sub">Es la fecha de la cuenta atrás. También se cambia en Ajustes.</div>' : `<div class="lab">Qué</div><input class="inp" id="cv-t" value="${esc(x.t)}" placeholder="Ej.: Publicación de notas">`}
    <div class="lab">Fecha</div><input class="inp" type="date" id="cv-f" value="${x.f || ''}">
    <div style="height:14px"></div>${btn('Guardar', 'cv-ok')}${x.id && x.id !== 'examen' ? '<button class="link del" data-a="cv-del">Quitar esta fecha</button>' : ''}`);
}
let FCV = null;

/* ===================================================================== Sesión de estudio */
let SES = null; try { SES = JSON.parse(localStorage.getItem('ruta71.ses') || 'null'); } catch (e) {}
const saveSes = () => { try { localStorage.setItem('ruta71.ses', JSON.stringify(SES)); } catch (e) {} };
const sesMs = () => !SES ? 0 : (SES.pausado || Date.now()) - SES.ini - (SES.pausas || 0) + (SES.salto || 0);
/* sesión por bloques: en qué bloque o pausa vas */
function faseSes(e = sesMs()) {
  const q = SES.blq; if (!q) return null;
  const B = q.b * 6e4, ext = SES.ext || {}; let t = 0;
  for (let i = 0; i < q.n; i++) {
    if (e < t + B) return { tipo: 'bloque', i, rest: t + B - e, tot: B, est: i * B + (e - t) };
    t += B; if (i === q.n - 1) return { tipo: 'fin', i, rest: 0, tot: 1, est: q.n * B, fin: t };
    const pz = Math.max(0, q.p * 6e4 + (ext[i] || 0));
    if (e < t + pz) return { tipo: 'pausa', i, rest: t + pz - e, tot: pz, est: (i + 1) * B };
    t += pz;
  }
}
const minEstudiados = () => Math.max(1, Math.round((SES.blq ? faseSes().est : sesMs()) / 6e4));
let RAF = null;
R.sesion = () => {
  if (!SES) return '';
  const f = faseSes(), q = SES.blq;
  const kick = SES.pausado ? 'En pausa' : !f ? 'Estudiando' : f.tipo === 'pausa' ? `Descanso · después, bloque ${f.i + 2} de ${q.n}` : f.tipo === 'fin' ? 'Bloques terminados' : `Bloque ${f.i + 1} de ${q.n}`;
  const botones = f && f.tipo === 'pausa' ? `${btn(ic('mas', 18) + '5 min más', 'ses-mas5', '', 'soft')}${btn('Saltar el descanso', 'ses-saltar')}`
    : f && f.tipo === 'fin' ? `${btn(ic('mas', 18) + 'Otro bloque', 'ses-otro', '', 'soft')}${btn('Terminar', 'ses-fin')}`
    : `${btn(ic(SES.pausado ? 'play' : 'pausa', 18) + (SES.pausado ? 'Seguir' : 'Pausa'), 'ses-pausa', '', 'soft')}${btn('Terminar', 'ses-fin')}`;
  return `<div class="pg narrow ${f && f.tipo === 'pausa' ? 'descanso' : ''}"><div class="col">${topBar('Salir')}
    <div class="center"><div class="kick" id="ses-k">${kick}</div><h1>Tema ${SES.n}</h1><div class="sub">${esc(titCorto(SES.n))}</div></div>
    <div class="timer">${anillo(240, 0, '00:00', q ? (f.tipo === 'pausa' ? 'de descanso' : f.tipo === 'fin' ? horasTxt(q.n * q.b) + ' estudiados' : 'quedan del bloque') : 'de ' + horasTxt(SES.dur), 'ses')}</div>
    ${q ? `<div class="bloques">${Array.from({ length: q.n }, (_, i) => `<i class="${i < f.i || f.tipo === 'fin' || (i === f.i && f.tipo === 'pausa') ? 'hecho' : i === f.i ? 'ahora' : ''}"></i>`).join('')}</div>` : ''}
    <div class="card"><div class="cl"><span>Mientras estudias, apunta</span></div><div class="minis"><button data-a="apunta" data-x="flaq">${ic('alerta', 20)}Flaqueza</button><button data-a="apunta" data-x="tarjeta">${ic('tarjeta', 20)}Tarjeta</button><button data-a="apunta" data-x="cosa">${ic('marca', 20)}Para memorizar</button></div></div>
    <div class="sp"></div><div class="two">${botones}</div></div></div>`;
};
function anillo(size, frac, txt, sub, id) {
  const r = size / 2 - 13, c = 2 * Math.PI * r;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="ring" id="${id}-svg"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--ring-t)" stroke-width="15"/><circle id="${id}-arc" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--acc)" stroke-width="15" stroke-linecap="round" stroke-dasharray="${(c * frac).toFixed(1)} ${c.toFixed(1)}" data-c="${c.toFixed(1)}" transform="rotate(-90 ${size / 2} ${size / 2})"/><text id="${id}-t" x="${size / 2}" y="${size / 2 + size * .07}" text-anchor="middle" class="m" font-size="${size * .19}" font-weight="700" fill="currentColor">${txt}</text><text x="${size / 2}" y="${size / 2 + size * .07 + 28}" text-anchor="middle" font-size="13" fill="var(--ink2)" id="${id}-s">${sub}</text></svg>`;
}
function pintarAnillo(id, ms, total, txt) {
  const a = $('#' + id + '-arc'), t = $('#' + id + '-t'); if (!a) return;
  const c = +a.dataset.c; a.setAttribute('stroke-dasharray', `${(c * Math.min(1, Math.max(0, ms / total))).toFixed(1)} ${c}`); if (t) t.textContent = txt;
}
A_RENDER.sesion = () => { pantallaEncendida(true); cancelAnimationFrame(RAF); const a = $('#ses-arc'), f0 = faseSes(); if (a && f0 && f0.tipo === 'pausa') a.setAttribute('stroke', 'var(--cyan)');
  const loop = () => { if (ACT !== 'sesion' || !SES) return;
    if (SES.blq) { const f = faseSes(), k = f.tipo + f.i;
      pintarAnillo('ses', f.tipo === 'fin' ? 1 : f.tot - f.rest, f.tot, f.tipo === 'fin' ? 'Listo' : hm(f.rest));
      if (SES.fase !== k) { const antes = SES.fase; SES.fase = k; saveSes();
        if (antes) { sonar(f.tipo === 'fin' ? 'fin' : 'aviso'); toast(f.tipo === 'pausa' ? `Bloque ${f.i + 1} hecho. Descansa ${horasTxt(SES.blq.p)}.` : f.tipo === 'fin' ? 'Has terminado todos los bloques.' : `A por el bloque ${f.i + 1} de ${SES.blq.n}.`); }
        if (antes) { refresh(); return; } } }
    else { const ms = sesMs(); pintarAnillo('ses', ms, SES.dur * 6e4, hm(ms));
      if (!SES.avisado && ms >= SES.dur * 6e4) { SES.avisado = true; saveSes(); sonar('fin'); toast(`Has llegado a ${horasTxt(SES.dur)}. Termina cuando quieras.`); } }
    RAF = requestAnimationFrame(loop); }; RAF = requestAnimationFrame(loop); };
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
    ${nuevas.length ? `<div class="lab">Lo que has apuntado</div><div class="card">${nuevas.map(x => `<div class="lr">${ic(x.k === 'flaq' ? 'alerta' : x.k === 'tarjeta' ? 'tarjeta' : 'marca', 20)}<div class="grow"><b>${esc(x.t)}</b><small>${x.k === 'flaq' ? 'Nueva flaqueza' : x.k === 'tarjeta' ? 'Nueva tarjeta' : 'Para saber de memoria'}</small></div></div>`).join('')}</div>` : ''}
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
    <div class="lab">Lo siguiente</div><div class="card">${prox.map(x => `<button class="lr" data-a="abrir-tema" data-x="${x}">${tile(x, est(x), 30)}<div class="grow"><b>Tema ${x}${tema(x).mio ? ' · lo llevo' : ''}</b><small>${esc(titCorto(x))} · ${NOMS[est(x)].toLowerCase()}</small></div>${ic('sig', 16)}</button>`).join('') || '<div class="empty">Nada pendiente.</div>'}</div>
    <p class="note">Marca «Lo llevo al examen» en la ficha de cada tema que prepares a fondo y la ruta empezará por esos.</p></div></div>`;
};
A_RENDER.ruta = v => { const l = v.querySelector('.rl'); if (l && l.animate && !reduceMotion()) { const len = l.getTotalLength ? l.getTotalLength() : 200; l.animate([{ strokeDasharray: `0 ${len}` }, { strokeDasharray: `${len} ${len}` }], { duration: 900, easing: 'cubic-bezier(.2,.8,.2,1)' }); } };

/* ===================================================================== Temario */
let TBUS = '';
const FILTROS = ['Todos', 'Los que llevo', 'Débiles', 'Sin repasar hace tiempo'];
function filtrar(n) {
  const f = S.ui.tfil, t = S.temas[n];
  if (S.ui.tblq && S.ui.tblq !== 'Todos' && bloqueDe(n) !== S.ui.tblq) return false;
  if (f === 'Los que llevo') return !!t && t.mio;
  if (f === 'Débiles') return debil(n);
  if (f === 'Sin repasar hace tiempo') return seEnfria(n);
  return true;
}
function htmlMapa(sel) {
  const xs = S.temario.filter(x => filtrar(x.n) && (!TBUS || (x.n + ' ' + x.t).toLowerCase().includes(TBUS.toLowerCase())));
  if (!xs.length) return '<div class="empty">Ningún tema con este filtro.</div>';
  const vue = S.ui.tver === 'vueltas';
  return `<div class="mapa ${TCASC ? 'casc' : ''}">${xs.map((x, i) => { const t = tema(x.n);
    return `<button class="tbtn" style="--i:${Math.min(i, 70)}" data-a="abrir-tema" data-x="${x.n}" aria-label="Tema ${x.n}">${vue
      ? `<span class="tl tv ${vClase(t.v)} ${sel === x.n ? 'sel' : ''} ${t.mio ? 'mio' : ''}" style="--s:0px">${x.n}<small>${t.v ? 'V' + t.v : ''}</small></span>`
      : tile(x.n, est(x.n), 0, (sel === x.n ? 'sel ' : '') + (t.mio ? 'mio' : ''))}</button>`; }).join('')}</div>`;
}
function htmlLista() {
  return bloques().map(b => { const xs = b.temas.filter(n => filtrar(n) && (!TBUS || (n + ' ' + tit(n)).toLowerCase().includes(TBUS.toLowerCase()))); if (!xs.length) return '';
    const d = b.temas.filter(n => est(n) === 4).length, open = TOPEN[b.n] || S.ui.tfil !== 'Todos' || (S.ui.tblq && S.ui.tblq !== 'Todos') || TBUS;
    return `<div class="blq"><button class="row bh" data-a="t-blq" data-x="${esc(b.n)}"><b class="grow">${esc(b.n)}</b><small class="m">${d} de ${b.temas.length}</small><span class="chev ${open ? 'open' : ''}">${ic('sig', 16)}</span></button>
      <div class="bbar">${b.temas.map(n => `<i class="e${est(n)}"></i>`).join('')}</div>
      ${open ? xs.map(n => `<button class="lr" data-a="abrir-tema" data-x="${n}">${tile(n, est(n), 28)}<div class="grow"><b class="tt">${esc(titCorto(n))}</b><small>${NOMS[est(n)]}${tema(n).mio ? ' · lo llevo' : ''}${tema(n).v ? ' · vuelta ' + tema(n).v : ''}${debil(n) ? ' · débil' : ''}</small></div></button>`).join('') : ''}</div>`; }).join('') || '<div class="empty">Ningún tema con este filtro.</div>';
}
let TOPEN = {};
const leyenda = () => S.ui.tver === 'vueltas'
  ? `<div class="leg">${['Ninguna', 'V1', 'V2', 'V3', 'V4 o más'].map((t, i) => `<span><i class="lv v${i}"></i>${t}</span>`).join('')}</div>`
  : `<div class="leg">${NOMS.map((t, i) => `<span>${tile('', i, 12)}${t}</span>`).join('')}<span>${tile('', 1, 12, 'mio')}Lo llevo</span></div>`;
R.temario = (p) => {
  const sel = ancho() ? (p.n || TSEL) : null, bl = bloques();
  const izq = `${topTab(`<button class="ib" data-a="t-buscar" aria-label="Buscar">${ic('buscar', 22)}</button>`)}<h1>Temario</h1>
    <div class="sub">${cuenta(4)} dominados · ${cuenta(3)} me los sé · ${cuenta(0)} sin empezar · probabilidad ${prob(dominados())} %</div>
    ${TBUSCAR ? `<input class="inp" id="t-bus" placeholder="Buscar por número o palabra" value="${esc(TBUS)}" style="margin-top:12px">` : ''}
    ${segHtml([['mapa', 'Mapa'], ['lista', 'Lista']], S.ui.tmodo, 't-modo')}
    <div class="flab">Mostrar</div><div class="chips scroll" style="margin-top:6px">${FILTROS.map(f => `<button class="ch ${S.ui.tfil === f ? 'on' : ''}" data-a="t-fil" data-x="${esc(f)}">${esc(f)}</button>`).join('')}</div>
    <div class="frow">${bl.length > 1 ? `<label class="selb"><small>Bloque:</small><select id="t-blq-sel">${['Todos'].concat(bl.map(b => b.n)).map(b => `<option ${S.ui.tblq === b ? 'selected' : ''}>${esc(b)}</option>`).join('')}</select>${ic('abajo', 15)}</label>` : ''}<span class="grow"></span>
      ${S.ui.tmodo === 'mapa' ? `<div class="seg sm">${[['estado', 'Estado'], ['vueltas', 'Vueltas']].map(([k, t]) => `<button class="${S.ui.tver === k ? 'on' : ''}" data-a="t-ver" data-x="${k}">${t}</button>`).join('')}</div>` : ''}</div>
    ${S.ui.tmodo === 'mapa' ? `<div class="card" style="padding:12px">${htmlMapa(sel)}</div>${leyenda()}`
      : `<div class="card" style="padding:2px 16px">${htmlLista()}</div>`}`;
  if (sel) return `<div class="pg wide split"><div class="colL">${izq}</div><div class="colR">${htmlFicha(sel, true)}</div></div>`;
  return `<div class="pg"><div class="col">${izq}</div></div>`;
};
let TSEL = null, TBUSCAR = false;
A_RENDER.temario = (v, re) => { const b = $('#t-bus'); if (b && !re) b.focus({ preventScroll: true }); };

/* ===================================================================== Ficha del tema */
let FTAB = 'flaq', FRES = false, FARCH = false, IXSUB = false;
const SECC = { flaq: 'Lo que me falla', cosas: 'Para saber de memoria', indice: 'Índice', tarjetas: 'Tarjetas', notas: 'Notas y enlaces' };
R.tema = p => `<div class="pg"><div class="col">${htmlFicha(p.n, false)}</div></div>`;
function compTgl(n, sec) {
  if (!S.grupos.length) return '';
  const gs = (tema(n).comp[sec] || []).filter(id => S.grupos.some(g => g.id === id));
  return `<span class="shr">Compartir<button class="tgl ${gs.length ? 'on' : ''}" data-a="sec-comp" data-x="${sec}" data-n="${n}" aria-label="Compartir ${SECC[sec]}"><i></i></button></span>`;
}
function compNota(n, sec) {
  const gs = (tema(n).comp[sec] || []).map(id => S.grupos.find(g => g.id === id)).filter(Boolean);
  return gs.length ? `<div class="compn">Compartido con ${esc(gs.map(g => g.nombre).join(' y '))}</div>` : '';
}
const flaqEst = ['Pendiente', 'En ello', 'Resuelta'];
const fqBtn = (f, a, x) => `<button class="fq ${['', 'ello', 'res'][f.e || 0]}" data-a="${a}" data-x="${x}" aria-label="${flaqEst[f.e || 0]}">${(f.e || 0) === 2 ? ic('check', 14, 3) : ''}</button>`;
function htmlFicha(n, enSplit) {
  const t = tema(n), ns = ultimaNota(n), sims = S.sims.filter(s => s.tema === n).sort((a, b) => b.ts - a.ts), cards = S.tarjetas.filter(c => c.tema === n);
  const act = cards.filter(c => !c.arch), arch = cards.filter(c => c.arch);
  const flaqA = t.flaq.filter(f => (f.e || 0) < 2), flaqR = t.flaq.filter(f => f.e === 2).sort((a, b) => (b.res || 0) - (a.res || 0));
  const tabs = [['flaq', `Flaquezas${flaqA.length ? ' · ' + flaqA.length : ''}`], ['indice', 'Índice'], ['tarj', `Tarjetas${act.length ? ' · ' + act.length : ''}`], ['notas', 'Notas'], ['sims', 'Simul.']];
  let cuerpo = '';
  if (FTAB === 'flaq') cuerpo = `${secT('alerta', 'Lo que me falla', compTgl(n, 'flaq'))}${compNota(n, 'flaq')}
    <div class="card" style="padding:4px 15px">${flaqA.map(f => `<div class="lr">${fqBtn(f, 'flaq-e', f.id)}<div class="grow"><b>${esc(f.txt)}</b><div class="est-t"><i class="${f.e === 1 ? 'e' : 'p'}">${flaqEst[f.e || 0]}</i> · desde el ${fechaCorta(ymd(new Date(f.ts)))}</div></div><button class="ib sm" data-a="flaq-del" data-x="${f.id}" aria-label="Borrar">${ic('papelera', 17)}</button></div>`).join('')}
      <div class="addin" style="padding-bottom:10px"><input class="inp sm" id="nf" placeholder="Añadir flaqueza: lo que se te atasca" enterkeyhint="done"><button class="ib" data-a="flaq-add" aria-label="Añadir">${ic('mas', 20)}</button></div></div>
    ${flaqA.length ? '<div class="note">Toca el cuadrado para cambiar: Pendiente → En ello → Resuelta.</div>' : ''}
    ${flaqR.length ? `<button class="desp" data-a="flaq-res">${ic(FRES ? 'abajo' : 'sig', 17)}Resueltas (${flaqR.length})</button>
      ${FRES ? `<div class="card resu" style="padding:4px 15px">${flaqR.map(f => `<div class="lr"><span class="fq res">${ic('check', 14, 3)}</span><div class="grow"><b>${esc(f.txt)}</b><div class="est-t">Resuelta el ${fechaCorta(ymd(new Date(f.res || f.ts)))}</div></div><button class="reab" data-a="flaq-reab" data-x="${f.id}">Reabrir</button></div>`).join('')}</div>` : ''}` : ''}
    ${delGrupo(n, 'flaq')}
    ${secT('marca', 'Para saber de memoria', compTgl(n, 'cosas'))}${compNota(n, 'cosas')}
    <div class="card" style="padding:4px 15px">${t.cosas.map(c => { const yaT = c.card && S.tarjetas.some(k => k.id === c.card);
      return `<div class="lr"><b class="grow cosa">${esc(c.txt)}</b>${yaT ? '<span class="tipo">Ya es tarjeta</span>' : `<button class="pill2 sm" data-a="cosa-tarj" data-x="${c.id}">${ic('tarjeta', 14)}A tarjeta</button>`}<button class="ib sm" data-a="cosa-del" data-x="${c.id}" aria-label="Borrar">${ic('papelera', 17)}</button></div>`; }).join('')}
      <div class="addin" style="padding-bottom:10px"><input class="inp sm" id="nc" placeholder="Fórmula, fecha, autor, normativa…" enterkeyhint="done"><button class="ib" data-a="cosa-add" aria-label="Añadir">${ic('mas', 20)}</button></div></div>
    ${delGrupo(n, 'cosas')}`;
  if (FTAB === 'indice') { const ix = t.ix, o = indiceOrientativo(n);
    cuerpo = `${secT('lista', 'Índice del tema', compTgl(n, 'indice'))}${compNota(n, 'indice')}
      ${segHtml([['ori', 'Orientativo'], ['per', 'Personalizado']], ix.modo, 'ix-modo')}`;
    if (ix.modo === 'ori') cuerpo += o ? `<div class="oriente">Propuesta de Ruta 71 para orientarte. No es oficial: revísala con tu temario y con tus apuntes.</div>
      <div class="card" style="padding:2px 15px">${o.map((a, i) => `<div class="ix"><span class="n">${i + 1}</span><b class="grow">${esc(a)}</b>${fqBtn({ e: ix.ori[i] || 0 }, 'ix-e', 'o' + i)}</div>`).join('')}</div>
      <button class="link acc" data-a="ix-copiar">Copiar a mi índice personalizado</button>`
      : `<div class="empty">Para este temario no hay índice orientativo. Crea el tuyo en «Personalizado».</div>`;
    else { let i = 0, j = 0;
      cuerpo += `<div class="card" style="padding:2px 15px" id="ixl">${ix.per.map(a => { if (a.sub) j++; else { i++; j = 0; } const num = a.sub ? `${Math.max(1, i)}.${j}` : i;
        return `<div class="ix ${a.sub ? 'sub' : ''}" data-id="${a.id}"><span class="hd" aria-label="Arrastrar">${ic('mover', 18)}</span><span class="n">${num}</span><button class="grow ixt" data-a="ix-editar" data-x="${a.id}"><b>${esc(a.t)}</b></button>${fqBtn(a, 'ix-e', a.id)}</div>`; }).join('') || '<div class="empty">Añade el primer apartado.</div>'}
        <div class="addin" style="padding-bottom:10px"><input class="inp sm" id="nix" placeholder="${IXSUB ? 'Nuevo subapartado' : 'Nuevo apartado'}" enterkeyhint="done"><button class="ch ${IXSUB ? 'on' : ''}" data-a="ix-sub">Sub</button><button class="ib" data-a="ix-add" aria-label="Añadir">${ic('mas', 20)}</button></div></div>
        <p class="note">Arrastra desde los puntos para ordenar. Toca un apartado para cambiarlo. El cuadrado marca si lo tienes: Pendiente → En ello → Hecho.</p>`; }
    cuerpo += delGrupo(n, 'indice'); }
  if (FTAB === 'tarj') cuerpo = `${secT('tarjetas', `Tarjetas · ${act.length}`, compTgl(n, 'tarjetas'))}${compNota(n, 'tarjetas')}
    ${act.length ? `<div class="card" style="padding:4px 15px">${act.map(c => `<button class="lr" data-a="editar-tarjeta" data-x="${c.id}"><div class="grow"><b class="tt1">${esc(textoTarjeta(c))}</b><small>${!c.prox || c.prox <= hoy() ? 'Toca hoy' : 'Siguiente repaso: en ' + plural(diasEntre(hoy(), c.prox), 'día', 'días')}${c.de ? ' · de ' + esc(c.de) : ''}</small></div><span class="tipo">${TIPOS_T[c.tipo || 'girar']}</span></button>`).join('')}</div>` : '<div class="empty">Todavía no hay tarjetas de este tema.</div>'}
    <div class="two" style="margin-top:12px">${btn(ic('mas', 18) + 'Nueva tarjeta', 'nueva-tarjeta', n, 'soft sm')}${act.length ? btn(`Repasar ${act.filter(c => !c.prox || c.prox <= hoy()).length || act.length}`, 'repasar', n, 'sm') : ''}</div>
    ${arch.length ? `<button class="desp" data-a="tarj-arch">${ic('archivo', 17)}Archivadas (${arch.length})${ic(FARCH ? 'abajo' : 'sig', 15)}</button>
      ${FARCH ? `<div class="card" style="padding:4px 15px">${arch.map(c => `<div class="lr"><b class="grow tt1" style="color:var(--ink2);font-weight:600">${esc(textoTarjeta(c))}</b><button class="reab" data-a="ft-desarch" data-x="${c.id}">Desarchivar</button></div>`).join('')}</div>` : ''}` : ''}
    ${delGrupo(n, 'tarjetas')}`;
  if (FTAB === 'notas') cuerpo = `${secT('lapiz', 'Notas', compTgl(n, 'notas'))}${compNota(n, 'notas')}<textarea class="inp" id="notas" data-n="${n}" style="min-height:200px" placeholder="Ideas clave, cómo lo enlazas con el aula, autores…">${esc(t.notas)}</textarea>
    ${secT('enlace', 'Enlaces')}<div class="card" style="padding:4px 15px">${t.enlaces.map(e => `<div class="lr">${ic('enlace', 18)}<a class="grow tt" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.t || e.url)}</a><button class="ib sm" data-a="enl-del" data-x="${e.id}">${ic('papelera', 17)}</button></div>`).join('')}
      <div class="addin" style="padding-bottom:10px"><input class="inp sm" id="ne" placeholder="Pega un enlace (vídeo, apuntes…)" inputmode="url" enterkeyhint="done"><button class="ib" data-a="enl-add">${ic('mas', 20)}</button></div></div>
    ${delGrupo(n, 'notas')}`;
  if (FTAB === 'sims') cuerpo = `${secT('sim', 'Simulacros')}${sims.length ? `<div class="card" style="padding:2px 15px">${sims.map(s => `<button class="srow" data-a="ver-sim" data-x="${s.id}"><span>${fechaCorta(ymd(new Date(s.ts)))} · ${horasTxt(s.min)}${(s.fotos || []).length ? ' · ' + plural(s.fotos.length, 'foto', 'fotos') : ''}${s.corr ? ' · corregido' : ''}</span><b class="m">${nota1(s.nota)}</b></button>`).join('')}</div>` : `<div class="empty">Aún no has hecho ningún simulacro de este tema.</div>${btn('Hacer un simulacro con este tema', 'sim-tema', n, 'soft')}`}`;
  return `${topBar(enSplit ? null : 'Temario', `<button class="ib" data-a="imprimir" data-x="${n}" aria-label="Imprimir">${ic('imprimir', 21)}</button>${S.grupos.length ? `<button class="ib" data-a="compartir" data-x="${n}" aria-label="Compartir">${ic('compartir', 21)}</button>` : ''}${enSplit ? '' : `<button class="ib solomovil" data-a="ir" data-x="ajustes">${ic('ajustes', 22)}</button>`}`)}
    <div class="row fhead">${tile(n, t.e, 58, 'pop')}<div class="grow"><div class="kick">${esc(bloqueDe(n))} · tema ${n}</div><h2>${esc(tit(n))}</h2></div></div>
    <div class="stats">${[[t.conf ? t.conf + '/5' : '–', 'confianza'], [t.min ? horasTxt(t.min) : '0 min', 'estudiado'], [t.ult ? diasEntre(t.ult, hoy()) + ' d' : '–', 'sin repasar'], [ns != null ? nota1(ns) : '–', 'último simulacro']].map(([a, b]) => `<div><b class="m">${a}</b><small>${b}</small></div>`).join('')}</div>
    ${secT('temario', 'Estado')}${estadoChips(n, 'f-est')}
    <label class="row tgrow"><div class="grow"><b>Lo llevo al examen</b><small>Es uno de los temas que preparas a fondo</small></div><button class="tgl ${t.mio ? 'on' : ''}" data-a="f-mio" data-x="${n}"><i></i></button></label>
    <div class="row tgrow"><div class="grow"><b>Vueltas</b><small>${t.v ? `Vas por la vuelta ${t.v + 1}${t.vts ? ' · la última la cerraste el ' + fechaCorta(t.vts) : ''}` : 'Todavía no has cerrado ninguna'}</small></div><span class="stp"><button data-a="f-vuelta" data-x="-1" data-n="${n}" aria-label="Una vuelta menos">−</button><b class="m">${t.v || 0}</b><button data-a="f-vuelta" data-x="1" data-n="${n}" aria-label="Cerrar una vuelta">+</button></span></div>
    <div class="two" style="margin-top:14px">${btn(ic('crono', 18) + 'Estudiar', 'estudiar', n, 'soft')}${btn(ic('sim', 18) + 'Simulacro', 'sim-tema', n, 'soft')}</div>
    ${segHtml(tabs, FTAB, 'f-tab')}${cuerpo}`;
}
A_RENDER.tema = v => { const tl = v.querySelector('.fhead .tl'); if (tl) animar(tl, x => ({ transform: `scale(${.6 + .4 * x})` }), { w: 14, z: 7 }); };

/* lo que ha compartido el grupo para esta sección del tema */
function delGrupo(n, tipo) {
  const xs = []; S.grupos.forEach(g => ((g.cache || {}).mat || []).forEach(m => { if (m.tema === n && m.tipo === tipo && m.autorId !== S.yo.id) xs.push(Object.assign({ gid: g.id }, m)); }));
  if (!xs.length) return '';
  return `<div class="delg"><div class="flab">Del grupo</div>${xs.map(m => { const ya = S.copias[m.id], nuevo = ya && m.ts > ya;
    return `<div class="lr"><span class="av sm">${iniciales(m.autor)}</span><button class="grow" data-a="g-mat" data-x="${m.id}" data-g="${m.gid}"><b>${esc(m.autor)}</b><small>${esc(resumenMat(m))}</small></button>${nuevo ? `<button class="reab" data-a="g-copiar" data-x="${m.id}" data-g="${m.gid}">Actualizar</button>` : ya ? '<span class="tipo">Copiado</span>' : `<button class="reab" data-a="g-copiar" data-x="${m.id}" data-g="${m.gid}">Copiar</button>`}</div>`; }).join('')}</div>`;
}

/* ===================================================================== Tarjetas: tipos y repaso espaciado */
const TIPOS_T = { girar: 'Girar', escribir: 'Escribir', huecos: 'Huecos' };
const textoTarjeta = c => c.tipo === 'huecos' ? String(c.q).replace(/\[[^\]]*\]/g, '___') : c.q;
const normal = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\p{L}\p{N}₀-₉⁰-⁹=+\-/*]+/gu, ' ').trim();
function resaltar(resp, tuya) {
  const mias = new Set(normal(tuya).split(' ').filter(w => w.length >= 4));
  return esc(resp).split(/(\s+)/).map(w => { const k = normal(w); return k.length >= 4 && mias.has(k) ? `<span class="mk">${w}</span>` : w; }).join('').replace(/\n/g, '<br>');
}
const huecosDe = q => String(q).split(/\[([^\]]*)\]/);
let RP = null;
function repasoCon(lista) { RP = { cola: lista.map(c => c.id), i: 0, vuelta: false, hechas: 0, esc: '', resp: [] }; go('repaso'); }
const cuatro = c => { const iv = previsiones(c); return `<div class="four">${[['0', 'No me acordaba', iv[0], 'mal'], ['1', 'Me ha costado', iv[1], ''], ['2', 'Bien', iv[2], ''], ['3', 'Fácil', iv[3], 'facil']].map(([k, t, d, cl]) => `<button class="${cl}" data-a="rp-nota" data-x="${k}"><b>${t}</b><small>${d === 0 ? 'otra vez hoy' : 'en ' + plural(d, 'día', 'días')}</small></button>`).join('')}</div>`; };
R.repaso = () => {
  if (!RP || RP.i >= RP.cola.length) return `<div class="pg narrow"><div class="col">${topBar(null)}<div class="center" style="margin-top:40px;color:var(--acc)">${ic('check', 64, 2.4)}</div><h1 class="center">Repaso hecho</h1><div class="sub center">${RP ? plural(RP.hechas, 'tarjeta repasada', 'tarjetas repasadas') : ''}. Las que te costaron volverán antes.</div><div class="sp"></div>${btn('Volver', 'atras')}</div></div>`;
  const c = S.tarjetas.find(x => x.id === RP.cola[RP.i]);
  if (!c) { RP.i++; return R.repaso(); }
  const pr = ((RP.i) / RP.cola.length * 100).toFixed(0), tipo = c.tipo || 'girar';
  const head = `${topBar('Salir', `<span class="m small">${RP.i + 1} de ${RP.cola.length}</span>`)}<div class="pbar"><i style="width:${pr}%"></i></div>`;
  if (tipo === 'escribir') return `<div class="pg narrow"><div class="col">${head}<div class="kick" style="margin-top:14px">Tema ${c.tema} · escribe de memoria</div><div class="qq">${esc(c.q)}</div>
    ${RP.vuelta ? `<div class="cmp tuya"><small>Lo que has escrito</small>${esc(RP.esc || '(nada)').replace(/\n/g, '<br>')}</div><div class="cmp"><small>Respuesta</small>${resaltar(c.a, RP.esc)}</div>
      <p class="note">Se resaltan las palabras que coinciden. Compáralas tú: decides tú cómo te ha ido.</p><div class="sp"></div>${cuatro(c)}`
      : `<textarea class="inp" id="rp-esc" style="min-height:150px;margin-top:16px" placeholder="Escribe aquí lo que recuerdes">${esc(RP.esc)}</textarea><div class="sp"></div><div style="height:12px"></div>${btn('Comprobar', 'rp-comp')}`}</div></div>`;
  if (tipo === 'huecos') { const ps = huecosDe(c.q); let k = 0;
    const cuerpo = ps.map((p, i) => i % 2 ? (RP.vuelta ? (() => { const ok = normal(RP.resp[k]) === normal(p); k++; return `<span class="hueco ${ok ? 'ok' : 'mal'}">${esc(ok ? p : (RP.resp[k - 1] || '…'))}</span>${ok ? '' : `<span class="hsol">${esc(p)}</span>`}`; })() : `<input class="hin" data-h="${k++}" value="${esc(RP.resp[k - 1] || '')}" size="${Math.max(3, p.length)}" autocomplete="off" autocapitalize="off">`) : esc(p)).join('');
    const bien = RP.vuelta ? ps.filter((p, i) => i % 2).filter((p, j) => normal(RP.resp[j]) === normal(p)).length : 0, tot = (ps.length - 1) / 2;
    return `<div class="pg narrow"><div class="col">${head}<div class="kick" style="margin-top:14px">Tema ${c.tema} · rellena los huecos</div>
      <div class="card huecos">${cuerpo}</div>
      ${RP.vuelta ? `<div class="aviso ${bien === tot ? 'okv' : ''}">${ic(bien === tot ? 'check' : 'alerta', 19, 2.2)}<div class="grow">${bien === tot ? 'Todos bien.' : `${bien} de ${tot} bien. La solución sale debajo de cada hueco.`}</div></div>${c.a ? `<div class="cmp"><small>Explicación</small>${esc(c.a).replace(/\n/g, '<br>')}</div>` : ''}<div class="sp"></div>${cuatro(c)}`
        : `<div class="sp"></div><div style="height:12px"></div>${btn('Comprobar', 'rp-comp')}`}</div></div>`; }
  return `<div class="pg narrow"><div class="col">${head}
    <div class="flip ${RP.vuelta ? 'on' : ''}" data-a="${RP.vuelta ? '' : 'rp-ver'}"><div class="cara a"><div class="kick">Tema ${c.tema} · ${esc(bloqueDe(c.tema))}</div><div class="qq">${esc(c.q)}</div><div class="s2" style="margin-top:auto">Piénsalo o dilo en voz alta. Toca para ver la respuesta.</div></div>
      <div class="cara b"><div class="kick">Pregunta</div><b>${esc(c.q)}</b><div class="hr"></div><div class="kick">Respuesta</div><div class="aa">${esc(c.a).replace(/\n/g, '<br>')}</div></div></div>
    <div class="sp"></div>${RP.vuelta ? cuatro(c) : btn('Ver la respuesta', 'rp-ver')}</div></div>`;
};
A_RENDER.repaso = (v, re) => { if (re) return; const i = v.querySelector('#rp-esc, .hin'); if (i) setTimeout(() => i.focus({ preventScroll: true }), 300); };
function previsiones(c) { const iv = c.int || 0; return [0, Math.max(1, Math.round(iv * 1.2) || 1), Math.max(2, Math.round((iv || 1) * (c.ease || 2.5))), Math.max(4, Math.round((iv || 2) * (c.ease || 2.5) * 1.4))]; }
function notaTarjeta(c, k) {
  const iv = previsiones(c)[k]; c.reps = (c.reps || 0) + 1;
  c.ease = Math.min(3, Math.max(1.3, (c.ease || 2.5) + [-.2, -.15, 0, .15][k]));
  c.int = iv; c.prox = addDays(hoy(), iv);
}

/* hoja: nueva / editar tarjeta */
let FT = null;
function abrirTarjeta(id, n, pre) {
  const c = id ? S.tarjetas.find(x => x.id === id) : null;
  FT = c ? { id: c.id, tipo: c.tipo || 'girar', q: c.q, a: c.a, tema: c.tema, arch: !!c.arch } : Object.assign({ id: null, tipo: 'girar', q: '', a: '', tema: n || (ACT === 'tema' ? P.n : TSEL) || siguientesTemas(1)[0] || 1, arch: false }, pre || {});
  const h = deCorchetes(FT.tipo === 'huecos' ? FT.q : ''); FT.plano = FT.tipo === 'huecos' ? h.plano : FT.q; FT.hid = h.hid; if (FT.tipo !== 'huecos') FT.plano = FT.q;
  hoja(htmlTarjeta(), () => setTimeout(() => { const i = $('#ft-q'); if (i && !FT.id && !FT.q) i.focus({ preventScroll: true }); }, 350));
}
function leerFT() { if ($('#ft-q')) { FT.plano = $('#ft-q').value; FT.q = FT.tipo === 'huecos' ? aCorchetes(FT.plano, FT.hid) : FT.plano; } if ($('#ft-a')) FT.a = $('#ft-a').value; if ($('#ft-t')) FT.tema = +$('#ft-t').value; }
/* huecos: el texto se guarda con corchetes, pero se edita tocando palabras */
const trozos = t => String(t || '').split(/(\s+)/);
function deCorchetes(q) { let dentro = false, k = 0; const hid = [], out = [];
  trozos(q).forEach(w => { if (/^\s+$/.test(w) || !w) { out.push(w); return; } if (w.includes('[')) dentro = true; if (dentro) hid.push(k); if (w.includes(']')) dentro = false; out.push(w.replace(/[\[\]]/g, '')); k++; });
  return { plano: out.join(''), hid }; }
function aCorchetes(plano, hid) { let k = 0; return trozos(plano).map(w => { if (/^\s+$/.test(w) || !w) return w; const i = k++; if (!hid.includes(i)) return w;
  const m = w.match(/^([¿¡("«]*)(.*?)([.,;:!?)»"]*)$/); return m && m[2] ? `${m[1]}[${m[2]}]${m[3]}` : `[${w}]`; }).join(''); }
const htmlPalabras = () => { let k = 0; const ws = trozos(FT.plano).filter(w => w && !/^\s+$/.test(w));
  return ws.length ? ws.map(w => { const i = k++; return `<button class="pal ${FT.hid.includes(i) ? 'on' : ''}" data-a="ft-pal" data-x="${i}">${esc(w)}</button>`; }).join('') : '<span class="s2">Escribe el texto arriba y aparecerán aquí sus palabras.</span>'; };
const htmlTarjeta = () => `<h2>${FT.id ? 'Editar tarjeta' : 'Nueva tarjeta'}</h2>
  <div class="lab">Tipo</div>${segHtml(Object.entries(TIPOS_T), FT.tipo, 'ft-tipo')}
  <p class="note">${FT.tipo === 'girar' ? 'Ves la pregunta, piensas la respuesta y la giras.' : FT.tipo === 'escribir' ? 'Escribes la respuesta de memoria y luego la comparas.' : 'Escribe la frase entera y toca las palabras que quieres esconder. Al repasar, saldrán como huecos para rellenar.'}</p>
  ${FT.tipo === 'huecos' ? `<div class="lab">Texto</div><textarea class="inp" id="ft-q" style="min-height:70px" placeholder="Ej.: La ley de Ohm dice que V = I · R">${esc(FT.plano)}</textarea>
    <div class="lab">Toca lo que quieres esconder</div><div class="palabras" id="ft-pal">${htmlPalabras()}</div>
    <div class="lab">Explicación (opcional)</div><textarea class="inp" id="ft-a" style="min-height:60px" placeholder="Sale al comprobar">${esc(FT.a)}</textarea>`
  : `<div class="lab">Pregunta</div><textarea class="inp" id="ft-q" style="min-height:64px" placeholder="Ej.: ¿Qué es la relación de transmisión?">${esc(FT.q)}</textarea>
    <div class="lab">Respuesta</div><textarea class="inp" id="ft-a" style="min-height:100px" placeholder="Lo que tendrías que contestar">${esc(FT.a)}</textarea>`}
  <div class="lab">Tema</div><select class="inp" id="ft-t">${S.temario.map(x => `<option value="${x.n}" ${x.n === FT.tema ? 'selected' : ''}>${x.n} · ${esc(titCorto(x.n))}</option>`).join('')}</select>
  <div style="height:14px"></div>${btn('Guardar tarjeta', 'ft-ok')}${FT.id ? `<div class="two"><button class="link" data-a="ft-arch">${FT.arch ? 'Desarchivar' : 'Archivar'}</button><button class="link del" data-a="ft-del">Borrar</button></div>` : ''}`;

/* hoja: cambiar estado */
function abrirEstado(n) {
  hoja(`<h2>Tema ${n}</h2><div class="sub">¿En qué punto estás?</div>${NOMS.map((t, i) => `<button class="opt ${est(n) === i ? 'sel' : ''}" data-a="f-est" data-x="${i}" data-n="${n}">${tile('', i, 24)}<div class="grow"><b>${t}</b><small>${NOMS_D[i]}</small></div><span class="radio ${est(n) === i ? 'on' : ''}"></span></button>`).join('')}`);
}

/* índice personalizado: arrastrar para ordenar */
let IXD = null;
document.addEventListener('pointerdown', e => {
  const h = e.target.closest('#ixl .hd'); if (!h) return; const row = h.closest('.ix'); e.preventDefault();
  IXD = { row, y0: e.clientY, list: row.parentElement }; row.classList.add('arr'); h.setPointerCapture && h.setPointerCapture(e.pointerId);
});
document.addEventListener('pointermove', e => {
  if (!IXD) return; const { row, list } = IXD; row.style.transform = `translateY(${e.clientY - IXD.y0}px)`;
  const hermanos = Array.from(list.querySelectorAll('.ix')).filter(x => x !== row);
  const antes = hermanos.find(x => { const r = x.getBoundingClientRect(); return e.clientY < r.top + r.height / 2; });
  const ref = antes || list.querySelector('.addin'); if (row.nextElementSibling !== ref) { const r0 = row.getBoundingClientRect().top; list.insertBefore(row, ref); IXD.y0 += row.getBoundingClientRect().top - r0; row.style.transform = `translateY(${e.clientY - IXD.y0}px)`; }
});
document.addEventListener('pointerup', () => {
  if (!IXD) return; const { row, list } = IXD; IXD = null; row.classList.remove('arr'); row.style.transform = '';
  const ids = Array.from(list.querySelectorAll('.ix')).map(x => x.dataset.id), n = fichaN();
  commit(() => { const t = tema(n); t.ix.per.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id)); tocado(n, 'indice'); });
});

/* ===================================================================== Simulacro */
const PARTES = ['Primera prueba · parte A', 'Primera prueba · parte B', 'Segunda prueba', 'Otros'];
function examenesTodos() {
  const xs = S.examenes.map(x => Object.assign({ local: true }, x));
  S.grupos.forEach(g => ((g.cache || {}).exa || []).forEach(x => xs.push(Object.assign({ gid: g.id, grupo: g.nombre }, x))));
  return xs;
}
function aniosExamenes() { const por = {}; examenesTodos().forEach(x => { const k = x.anio || 'Sin año'; (por[k] = por[k] || []).push(x); }); return Object.keys(por).sort((a, b) => String(b).localeCompare(String(a))).map(k => ({ anio: k, xs: por[k] })); }
R.simulacro = () => {
  const ult = S.sims.slice().sort((a, b) => b.ts - a.ts).slice(0, 6);
  const fall = S.supuestos.filter(s => s.int && s.int.length && s.int[s.int.length - 1].r === 'mal').length, an = aniosExamenes();
  return `<div class="pg"><div class="col">${topTab()}<h1>Simulacro</h1><div class="sub">Practica como el día del examen: mismo tiempo, mismas bolas y la rúbrica del tribunal.</div>
    <div class="grid2"><div>
    <button class="card opt" data-a="ir" data-x="sorteo"><div class="bmini">${[12, 45, 58, 66].map(n => `<i class="m">${n}</i>`).join('')}</div><div class="grow"><b>Sacar bolas · el tema</b><small>Salen ${S.conv.bolas} temas, eliges uno y lo escribes en ${horasTxt(S.conv.minTema)}</small></div>${ic('sig', 16)}</button>
    <button class="card opt" data-a="ir" data-x="supuestos">${ic('crono', 28)}<div class="grow"><b>Supuestos prácticos</b><small>${S.supuestos.length ? plural(S.supuestos.length, 'supuesto', 'supuestos') + (fall ? ` · ${fall} para repetir` : '') : 'Tu banco de problemas por bloques'}</small></div>${ic('sig', 16)}</button>
    <button class="card opt" data-a="ir" data-x="prueba2">${ic('mic', 28)}<div class="grow"><b>Prueba 2 · programación y defensa</b><small>Lo que debe llevar, tus situaciones de aprendizaje y ensayos</small></div>${ic('sig', 16)}</button>
    ${secT('archivo', 'Exámenes anteriores', `<button class="link sk acc" data-a="exa-subir">Subir</button>`)}
    ${an.length ? an.map(a => `<button class="card row" data-a="ir" data-x="examenes" data-k="${esc(a.anio)}" style="gap:12px"><div class="grow"><b>${esc(a.anio)}</b><small>${plural(a.xs.length, 'archivo', 'archivos')} · ${esc([...new Set(a.xs.map(x => x.parte))].join(', '))}</small></div>${ic('sig', 16)}</button>`).join('')
      : `<div class="card"><small style="font-size:13.5px">Sube los exámenes de otros años en PDF o en fotos y tenlos siempre a mano. ${S.grupos.length ? 'Se guardan en la carpeta de Drive del grupo.' : 'Se guardan en este dispositivo; con un grupo, en su Drive.'}</small></div>`}</div>
    <div>${secT('corregir', 'Tus simulacros')}<div class="card" style="padding:2px 15px">${ult.length ? ult.map(s => `<button class="lr" data-a="ver-sim" data-x="${s.id}">${tile(s.tema, est(s.tema), 30)}<div class="grow"><b>Tema ${s.tema}</b><small>${fechaCorta(ymd(new Date(s.ts)))}${(s.fotos || []).length ? ' · ' + plural(s.fotos.length, 'foto', 'fotos') : ''}${s.corr ? ' · corregido por ' + esc(s.corr.nombre) : s.corrPed ? ' · pendiente de corregir' : ''}</small></div><b class="m">${nota1(s.nota)}</b></button>`).join('') : '<div class="empty">Cuando hagas el primero, saldrá aquí con su nota.</div>'}</div></div></div>
  </div></div>`;
};
R.examenes = p => {
  const xs = examenesTodos().filter(x => String(x.anio || 'Sin año') === String(p.anio)).sort((a, b) => (a.ts || 0) - (b.ts || 0));
  return `<div class="pg narrow"><div class="col">${topBar('Simulacro', `<button class="ib" data-a="exa-subir" data-x="${esc(p.anio)}" aria-label="Subir">${ic('subir', 21)}</button>`)}<div class="kick">Exámenes anteriores</div><h1>${esc(p.anio)}</h1>
    ${PARTES.filter(pa => xs.some(x => x.parte === pa)).map(pa => `${secT('doc', pa)}<div class="card" style="padding:2px 15px">${xs.filter(x => x.parte === pa).map(x => `<div class="ex"><button class="grow row" data-a="exa-abrir" data-x="${x.id}" data-g="${x.gid || ''}" style="gap:11px">${ic(/^image/.test(x.mime) ? 'foto' : 'doc', 22)}<span class="grow"><b>${esc(x.titulo)}</b><small>${/pdf/.test(x.mime) ? 'PDF' : 'Imagen'} · ${tamTxt(x.tam || 0)} · ${x.local ? 'en este dispositivo' : 'Drive de ' + esc(x.grupo)}${x.autor ? ' · ' + esc(x.autor) : ''}</small></span></button>${x.local || x.autorId === S.yo.id ? `<button class="ib sm" data-a="exa-borrar" data-x="${x.id}" data-g="${x.gid || ''}" aria-label="Borrar">${ic('papelera', 17)}</button>` : ''}</div>`).join('')}</div>`).join('') || '<div class="empty">No hay archivos de este año.</div>'}
    <div style="height:16px"></div>${btn(ic('subir', 19, 2) + 'Subir PDF o fotos', 'exa-subir', p.anio)}<p class="note">Hasta 20 MB por archivo. Las fotos se reducen antes de subirlas.</p></div></div>`;
};
let FX = null;
function abrirSubirExamen(anio) {
  FX = { anio: anio && anio !== 'Sin año' ? anio : String(new Date().getFullYear() - 1), parte: PARTES[0], g: S.grupos[0] ? S.ui.gsel || S.grupos[0].id : '' };
  hoja(`<h2>Subir examen</h2><div class="lab">Año y convocatoria</div><input class="inp" id="fx-a" value="${esc(FX.anio)}" placeholder="Navarra 2025">
    <div class="lab">Parte</div><select class="inp" id="fx-p">${PARTES.map(p => `<option>${p}</option>`).join('')}</select>
    <div class="lab">Título</div><input class="inp" id="fx-t" placeholder="Ej.: Supuesto práctico de Tecnología">
    ${S.grupos.length ? `<div class="lab">Dónde</div><select class="inp" id="fx-g">${S.grupos.map(g => `<option value="${g.id}" ${g.id === FX.g ? 'selected' : ''}>Drive de ${esc(g.nombre)}</option>`).join('')}<option value="">Solo en este dispositivo</option></select>` : ''}
    <div class="lab">Archivo</div><label class="card row filel" style="gap:12px;cursor:pointer">${ic('subir', 22)}<span class="grow" id="fx-nom"><b>Elegir PDF o fotos</b><small>Puedes elegir varias fotos a la vez</small></span><input type="file" id="fx-f" accept="application/pdf,image/*" multiple hidden></label>
    <div style="height:14px"></div>${btn('Subir', 'exa-ok')}`);
}

/* ---------- detalle de un simulacro: fotos y corrección ---------- */
R.sim = p => {
  const s = S.sims.find(x => x.id === p.id); if (!s) return `<div class="pg"><div class="col">${topBar('Simulacro')}<div class="empty">Este simulacro ya no está.</div></div></div>`;
  const rub = s.rub || S.rubrica;
  return `<div class="pg narrow"><div class="col">${topBar('Atrás', `<button class="ib" data-a="imprimir-sim" data-x="${s.id}" aria-label="Imprimir">${ic('imprimir', 21)}</button>`)}<div class="kick">Simulacro · ${fechaLarga(ymd(new Date(s.ts)))} · ${horasTxt(s.min)}</div><h1>Tema ${s.tema}</h1><div class="sub">${esc(titCorto(s.tema))}</div>
    <div class="card row" style="gap:14px;margin-top:14px"><b class="num" style="font-size:44px">${nota1(s.nota)}</b><div class="grow"><b>Tu autoevaluación</b><small>${(s.pts || []).map((v, i) => rub[i] ? `${esc(rub[i].t)}: ${v}` : '').filter(Boolean).join(' · ')}</small></div></div>
    ${secT('foto', 'Hojas del examen')}<div class="fotos">${(s.fotos || []).map(id => `<button class="ft" data-a="foto-ver" data-x="${id}" data-foto="${id}"></button>`).join('')}<label class="ft add">${ic('foto', 22)}Añadir<input type="file" accept="image/*" multiple id="sim-foto" data-s="${s.id}" hidden></label></div>
    ${secT('corregir', 'Corrección de un compañero')}
    ${s.corr ? `<div class="card"><div class="row" style="gap:12px"><span class="av">${iniciales(s.corr.nombre)}</span><div class="grow"><b>${esc(s.corr.nombre)}</b><small>${fechaCorta(ymd(new Date(s.corr.ts)))}</small></div><b class="num" style="font-size:30px">${nota1(s.corr.nota)}</b></div>
      <small style="margin-top:8px">${(s.corr.pts || []).map((v, i) => rub[i] ? `${esc(rub[i].t)}: ${v}` : '').filter(Boolean).join(' · ')}</small>${s.corr.com ? `<div class="cmp" style="margin-top:10px">${esc(s.corr.com).replace(/\n/g, '<br>')}</div>` : ''}</div>`
      : s.corrPed ? `<div class="card"><b>Pendiente de ${esc(s.corrPed.nombre)}</b><small>Se lo pediste el ${fechaCorta(ymd(new Date(s.corrPed.ts)))}. Te saldrá aquí cuando lo corrija.</small></div>`
      : `<div class="card"><b>Que te lo corrija alguien del grupo</b><small>${S.grupos.length ? 'Le llegan tus fotos y la rúbrica. Tú ves su nota y sus comentarios.' : 'Necesitas estar en un grupo de trabajo.'}</small></div>${S.grupos.length ? `<div style="height:12px"></div>${btn(ic('grupo', 19, 2) + 'Pedir corrección', 'corr-pedir', s.id, (s.fotos || []).length ? '' : 'off')}${(s.fotos || []).length ? '' : '<p class="note">Primero añade las fotos de las hojas.</p>'}` : ''}`}
    ${(s.olv || []).length ? `${secT('alerta', 'Lo que te faltó')}<div class="card" style="padding:2px 15px">${s.olv.map(o => `<div class="lr"><b class="grow" style="font-weight:600">${esc(o)}</b></div>`).join('')}</div>` : ''}
    <div class="sp"></div><div style="height:14px"></div>${btn('Ver la ficha del tema', 'abrir-tema', s.tema, 'soft')}</div></div>`;
};
A_RENDER.sim = v => cargarFotos(v);
/* pinta las fotos guardadas en el dispositivo */
const FOTO_URL = {};
async function cargarFotos(root) { for (const el of root.querySelectorAll('[data-foto]')) { const id = el.dataset.foto; try { if (!FOTO_URL[id]) { const b = await IDB.get(id); if (b) FOTO_URL[id] = URL.createObjectURL(b); } if (FOTO_URL[id]) el.style.backgroundImage = `url("${FOTO_URL[id]}")`; } catch (e) {} } }
async function guardarFotos(files) { const ids = []; for (const f of files) { try { const b = await reducirFoto(f); const id = 'f.' + uid(); await IDB.put(id, b); ids.push(id); } catch (e) { toast('No se ha podido leer una foto'); } } return ids; }

/* ---------- corregir el simulacro de un compañero ---------- */
let CORR = null;
R.corregir = p => {
  const g = S.grupos.find(x => x.id === p.g), c = g && ((g.cache || {}).corr || []).find(x => x.id === p.id);
  if (!c) return `<div class="pg"><div class="col">${topBar('Grupo')}<div class="empty">Esta corrección ya no está.</div></div></div>`;
  if (!CORR || CORR.id !== c.id) CORR = { id: c.id, g: p.g, pts: (c.rub || S.rubrica).map(() => null), com: '' };
  const rub = c.rub || S.rubrica, completa = CORR.pts.every(x => x != null);
  const nota = completa ? rub.reduce((a, k, i) => a + k.p * CORR.pts[i] / 4, 0) / 10 : null;
  return `<div class="pg narrow"><div class="col">${topBar('Grupo')}<div class="kick">Te lo pide ${esc(c.deNombre)} · tema ${c.tema}</div><h1>Corregir simulacro</h1><div class="sub">${esc(titCorto(c.tema))}</div>
    <div class="fotos" id="corr-fotos">${(c.fotos || []).map(fid => `<button class="ft carg" data-a="foto-ver" data-x="g:${p.g}:${fid}" data-gfoto="${fid}"></button>`).join('')}</div>
    ${secT('corregir', 'Rúbrica')}<div class="card" style="padding:4px 15px">${rub.map((k, i) => `<div class="rub"><div class="row"><b class="grow">${esc(k.t)}</b><small class="m">${k.p} %</small></div>${k.d ? `<small>${esc(k.d)}</small>` : ''}<div class="pts">${[4, 3, 2, 1, 0].map(v => `<button class="m ${CORR.pts[i] === v ? 'on' : ''}" data-a="corr-pt" data-x="${v}" data-k="${i}">${v}</button>`).join('')}</div></div>`).join('')}</div>
    <div class="lab">Comentario</div><textarea class="inp" id="corr-com" style="min-height:80px" placeholder="Qué está bien y qué mejorarías">${esc(CORR.com)}</textarea>
    <div class="sp"></div><div class="row" style="margin-top:14px;gap:14px"><b class="num" id="corr-nota" style="font-size:34px">${nota != null ? nota1(nota) : '–'}</b>${btn('Enviar corrección', 'corr-enviar', '', completa ? '' : 'off')}</div></div></div>`;
};
A_RENDER.corregir = async (v, re) => { if (re) { cargarGFotos(v); return; } cargarGFotos(v); };
const GFOTO = {};
async function cargarGFotos(root) {
  const g = S.grupos.find(x => x.id === (P || {}).g); if (!g) return;
  for (const el of root.querySelectorAll('[data-gfoto]')) { const id = el.dataset.gfoto;
    try { if (!GFOTO[id]) { const j = await api(g.url, g.clave, 'g-archivo', { id }); GFOTO[id] = URL.createObjectURL(b64ABlob(j.datos, j.mime)); } el.style.backgroundImage = `url("${GFOTO[id]}")`; el.classList.remove('carg'); } catch (e) { el.classList.remove('carg'); el.classList.add('err'); } }
}

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
      : `<label class="row tgrow"><div class="grow"><b>Solo de los que me sé</b><small>Temas en «Me lo sé» o «Lo domino»: ${S.temario.filter(x => est(x.n) >= 3).length}</small></div><button class="tgl ${S.ui.solo ? 'on' : ''}" data-a="solo"><i></i></button></label>
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
    <div class="sub">Puntúa cada criterio del 4 al 0, como lo haría el tribunal.</div>
    ${rubricaNavarra() ? '<div class="oriente">Criterios del tribunal coordinador de Navarra (2018) para el tema escrito. Revísalos cuando salga la convocatoria de 2027. Se pueden cambiar en Ajustes.</div>' : ''}
    ${secT('corregir', 'Rúbrica')}<div class="card">${S.rubrica.map((c, i) => `<div class="rub"><div class="row"><b class="grow">${esc(c.t)}</b><small class="m">${c.p} %</small></div>${c.d ? `<small>${esc(c.d)}</small>` : ''}<div class="pts">${[4, 3, 2, 1, 0].map(v => `<button class="m ${EV.pts[i] === v ? 'on' : ''}" data-a="ev-pt" data-x="${v}" data-k="${i}">${v}</button>`).join('')}</div></div>`).join('')}</div>
    ${rubricaNavarra() ? '<p class="note">El tribunal puede restar por faltas de ortografía y gramática.</p>' : ''}
    <div class="row" style="margin-top:14px;justify-content:space-between"><b>Nota</b><b class="num" id="ev-nota" style="font-size:36px">${completa ? nota1(notaRub()) : '–'}</b></div>
    ${secT('alerta', 'Lo que te ha faltado o has puesto mal')}<div class="card">${EV.olv.map((o, i) => `<div class="lr">${ic('alerta', 19)}<b class="grow">${esc(o)}</b><button class="ib sm" data-a="ev-olv-del" data-x="${i}">${ic('papelera', 17)}</button></div>`).join('')}
      <div class="addin"><input class="inp sm" id="ev-olv" placeholder="Pasará a flaquezas del tema" enterkeyhint="done"><button class="ib" data-a="ev-olv-add">${ic('mas', 20)}</button></div></div>
    ${secT('foto', 'Fotos de las hojas (opcional)')}<div class="fotos">${(EV.fotos || []).map(id => `<span class="ft" data-foto="${id}"></span>`).join('')}<label class="ft add">${ic('foto', 22)}Añadir<input type="file" accept="image/*" multiple id="ev-foto" hidden></label></div>
    <p class="note">Para releerlas y, si quieres, pedir a alguien del grupo que te lo corrija.</p>
    <div class="sp"></div><div style="height:14px"></div>${btn('Guardar el simulacro', 'ev-ok', '', completa ? '' : 'off')}</div></div>`;
};
let RES = null;
A_RENDER.evaluar = v => cargarFotos(v);
const rubricaNavarra = () => S.rubrica.length === 3 && S.rubrica[1].t === 'Contenido específico' && S.rubrica[1].p === 60;
R.resultado = () => {
  if (!RES) return '';
  const ant = S.sims.filter(s => s.tema === RES.tema && s.id !== RES.id).sort((a, b) => b.ts - a.ts)[0];
  return `<div class="pg narrow"><div class="col">${topBar(null)}<div class="center" style="margin-top:20px">${tile(RES.tema, est(RES.tema), 74, 'pop')}</div>
    <h1 class="center" style="margin-top:14px"><span class="num cu" data-n="${Math.round(RES.nota * 10)}" data-d="1" style="font-size:64px">${nota1(RES.nota)}</span></h1>
    <div class="sub center">${ant ? (RES.nota > ant.nota ? `Has subido desde ${nota1(ant.nota)}.` : RES.nota < ant.nota ? `La vez anterior sacaste ${nota1(ant.nota)}. Mira las flaquezas.` : 'Igual que la vez anterior.') : 'Tu primer simulacro de este tema.'} Siguiente repaso: en ${plural(diasEntre(hoy(), tema(RES.tema).prox || hoy()), 'día', 'días')}.</div>
    ${RES.olv ? `<div class="card row">${ic('alerta', 22)}<div class="grow"><b>${plural(RES.olv, 'flaqueza nueva', 'flaquezas nuevas')}</b><small>Guardadas en la ficha del tema ${RES.tema}</small></div></div>` : ''}
    <div class="lab">¿En qué punto está el tema ahora?</div>${estadoChips(RES.tema, 'res-est')}
    <div class="sp"></div><div style="height:14px"></div><div class="two">${btn('Ver el simulacro', 'ver-sim', RES.id, 'soft')}${btn('Listo', 'res-ok')}</div></div></div>`;
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
  FS = s ? Object.assign({}, s) : { id: null, titulo: '', b: bloques()[0] ? bloques()[0].n : '', enun: '', sol: '', min: 25, comp: false };
  hoja(htmlSup());
}
const htmlSup = () => `<h2>${FS.id ? 'Editar supuesto' : 'Nuevo supuesto'}</h2>
  <div class="lab">Título</div><input class="inp" id="fs-t" value="${esc(FS.titulo)}" placeholder="Ej.: Circuito mixto con 5 resistencias">
  <div class="lab">Bloque</div><select class="inp" id="fs-b">${bloques().map(b => `<option ${b.n === FS.b ? 'selected' : ''}>${esc(b.n)}</option>`).join('')}</select>
  <div class="lab">Enunciado</div><textarea class="inp" id="fs-e" style="min-height:110px" placeholder="Copia el enunciado">${esc(FS.enun)}</textarea>
  <div class="lab">Solución</div><textarea class="inp" id="fs-s" style="min-height:110px" placeholder="Pasos y resultado">${esc(FS.sol)}</textarea>
  <div class="lab">Tiempo (minutos)</div><input class="inp" id="fs-m" type="number" inputmode="numeric" min="1" max="240" value="${FS.min}" style="width:120px">
  ${!FS.id && S.grupos.length ? `<label class="row tgrow"><div class="grow"><b>Compartir con ${esc(grupoAct().nombre)}</b></div><button class="tgl ${FS.comp ? 'on' : ''}" data-a="fs-comp"><i></i></button></label>` : ''}
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

/* ===================================================================== Grupos de trabajo */
async function api(url, clave, accion, extra) {
  const r = await fetch(url, { method: 'POST', body: JSON.stringify(Object.assign({ accion, clave, yo: { id: S.yo.id, nombre: S.yo.nombre || 'Sin nombre' } }, extra || {})) });
  const j = await r.json(); if (!j.ok) throw new Error(j.error || 'error'); return j;
}
const grupoAct = () => S.grupos.find(g => g.id === S.ui.gsel) || S.grupos[0] || null;
const grupoPorId = id => S.grupos.find(g => g.id === id) || null;
const gapi = (accion, extra, g = grupoAct()) => g ? api(g.url, g.clave, accion, extra) : Promise.reject(new Error('sin grupo'));
function miProgreso() { const vi = vueltaInfo(); return { estados: S.temario.map(x => est(x.n)).join(''), dominados: dominados(), minSemana: minSemana(), ultNota: (S.sims.slice().sort((a, b) => b.ts - a.ts)[0] || {}).nota || null, total: S.temario.length, vuelta: vi ? vi.actual : null }; }
const GCARG = {};
async function cargarGrupo(silencio, g = grupoAct()) {
  if (!g || GCARG[g.id]) return; GCARG[g.id] = true;
  try {
    if (g.compartir) await api(g.url, g.clave, 'g-progreso', { prog: miProgreso() }).catch(() => {});
    const j = await api(g.url, g.clave, 'g-leer');
    g.cache = { mat: j.materiales || [], prog: j.progreso || [], res: j.reservas || [], exa: (j.archivos || []).filter(a => a.tipo === 'exa'), corr: j.correcciones || [], conv: j.conv || null, avisos: j.avisos || [], pers: j.personas || [] };
    g.ult = Date.now(); recibirCorrecciones(g); adoptarConv(g); save();
    if (['grupo', 'material', 'tema', 'temario', 'convocatoria', 'simulacro', 'examenes', 'hoy', 'sim'].includes(ACT)) refresh();
  } catch (e) { if (!silencio) toast(`No he podido conectar con «${g.nombre}». Enseño lo último descargado.`); }
  GCARG[g.id] = false;
}
async function cargarTodos(silencio) { for (const g of S.grupos) await cargarGrupo(silencio, g); enviarPend(); }
function recibirCorrecciones(g) {
  (g.cache.corr || []).filter(c => c.deId === S.yo.id && c.hecha).forEach(c => { const s = S.sims.find(x => x.id === c.simId);
    if (s && (!s.corr || (s.corr.ts || 0) < c.hts)) { s.corr = { nombre: c.paraNombre, nota: c.nota, pts: c.pts, com: c.com, ts: c.hts }; if (ACT !== 'sim') toast(`${c.paraNombre} ha corregido tu simulacro del tema ${s.tema}`); } });
}
function adoptarConv(g) {
  const c = g.cache.conv; if (!c || !(c.ets > (S.conv.ets || 0))) return;
  if (Array.isArray(c.fechas)) S.conv.fechas = c.fechas; if (Array.isArray(c.enlaces)) S.conv.enlaces = c.enlaces;
  if (c.fecha) { S.conv.fecha = c.fecha; S.conv.aprox = !!c.aprox; } S.conv.ets = c.ets;
}
function pushConv() {
  S.conv.ets = Date.now(); save();
  const conv = { fechas: S.conv.fechas, enlaces: S.conv.enlaces, fecha: S.conv.fecha, aprox: S.conv.aprox, ets: S.conv.ets };
  S.grupos.forEach(g => api(g.url, g.clave, 'g-conv', { conv }).catch(() => {}));
}

/* ---------- compartir por secciones ---------- */
const matId = (n, sec) => `${S.yo.id}.${n}.${sec}`;
function gruposDe(n, sec) {
  const t = S.temas[n] || {}, ids = ((t.comp || {})[sec] || []).slice(), excl = ((t.excl || {})[sec] || []);
  S.grupos.forEach(g => { if (g.todo && sec !== 'flaq' && !ids.includes(g.id) && !excl.includes(g.id)) ids.push(g.id); });
  return ids.filter(id => S.grupos.some(g => g.id === id));
}
function contenidoSec(n, sec) {
  const t = tema(n);
  if (sec === 'flaq') return t.flaq.length ? { items: t.flaq.map(f => ({ txt: f.txt, e: f.e || 0 })) } : null;
  if (sec === 'cosas') return t.cosas.length ? { items: t.cosas.map(c => c.txt) } : null;
  if (sec === 'tarjetas') { const cs = S.tarjetas.filter(c => c.tema === n && !c.de && !c.arch); return cs.length ? { cards: cs.map(c => ({ q: c.q, a: c.a, tipo: c.tipo || 'girar' })) } : null; }
  if (sec === 'notas') return t.notas || t.enlaces.length ? { texto: t.notas, links: t.enlaces.map(e => ({ url: e.url, t: e.t })) } : null;
  if (sec === 'indice') { if (t.ix.modo === 'per' && t.ix.per.length) return { items: t.ix.per.map(a => ({ t: a.t, sub: !!a.sub })) };
    const o = indiceOrientativo(n); return o ? { items: o.map(x => ({ t: x, sub: false })), ori: true } : null; }
  return null;
}
const TIT_SEC = { flaq: 'Flaquezas', cosas: 'Para saber de memoria', tarjetas: 'Tarjetas', notas: 'Notas', indice: 'Índice' };
function resumenMat(m) {
  const c = m.contenido || {};
  if (m.tipo === 'tarjetas') return plural((c.cards || []).length, 'tarjeta', 'tarjetas') + (m.tema ? ' del tema ' + m.tema : '');
  if (m.tipo === 'indice') return `Índice${c.ori ? ' orientativo' : ''} del tema ${m.tema} · ${plural((c.items || []).length, 'apartado', 'apartados')}`;
  if (m.tipo === 'cosas') return `Para saber de memoria · tema ${m.tema} · ${(c.items || []).length}`;
  if (m.tipo === 'flaq') return `Flaquezas del tema ${m.tema} · ${(c.items || []).length}`;
  if (m.tipo === 'notas') return `Notas del tema ${m.tema}${(c.links || []).length ? ' · ' + plural(c.links.length, 'enlace', 'enlaces') : ''}`;
  if (m.tipo === 'supuesto') return 'Supuesto · ' + (m.titulo || '');
  return m.titulo || 'Material';
}
let PT = null;
function tocado(n, sec) { if (!S.grupos.length || !gruposDe(n, sec).length) return; S.pendComp = S.pendComp || {}; S.pendComp[n + '|' + sec] = 1; save(); clearTimeout(PT); PT = setTimeout(enviarPend, 2500); }
let ENVIANDO = false;
async function enviarPend() {
  if (ENVIANDO || !S.pendComp || !Object.keys(S.pendComp).length) return; ENVIANDO = true;
  const claves = Object.keys(S.pendComp), porG = {};
  claves.forEach(k => { const [n, sec] = k.split('|'), nn = +n, c = contenidoSec(nn, sec), gs = gruposDe(nn, sec);
    S.grupos.forEach(g => { const o = porG[g.id] = porG[g.id] || { pub: [], borrar: [] };
      if (c && gs.includes(g.id)) o.pub.push({ id: matId(nn, sec), tipo: sec, tema: nn, titulo: `${TIT_SEC[sec]} · tema ${nn}`, contenido: c }); else o.borrar.push(matId(nn, sec)); }); });
  let ok = true;
  for (const g of S.grupos) { const o = porG[g.id]; if (!o || (!o.pub.length && !o.borrar.length)) continue;
    try { await api(g.url, g.clave, 'g-publicar-varios', { mats: o.pub, borrar: o.borrar }); } catch (e) { ok = false; } }
  if (ok) { claves.forEach(k => delete S.pendComp[k]); save(); }
  ENVIANDO = false;
}
function todasLasSecciones(gid) { S.temario.forEach(x => ['cosas', 'tarjetas', 'notas', 'indice'].forEach(sec => { const t = S.temas[x.n]; if (t && (contenidoSec(x.n, sec) && (sec !== 'indice' || t.ix.modo === 'per'))) { S.pendComp = S.pendComp || {}; S.pendComp[x.n + '|' + sec] = 1; } })); save(); enviarPend(); }
function copiarMaterial(m) {
  const c = m.contenido || {}, n = m.tema, de = m.autor;
  if (m.tipo === 'tarjetas') { S.tarjetas = S.tarjetas.filter(k => k.orig !== m.id); (c.cards || []).forEach(k => S.tarjetas.push({ id: uid(), tema: n, q: k.q, a: k.a, tipo: k.tipo || 'girar', prox: hoy(), int: 0, ease: 2.5, de, orig: m.id })); return plural((c.cards || []).length, 'tarjeta copiada', 'tarjetas copiadas'); }
  if (m.tipo === 'cosas') { const t = tema(n); t.cosas = t.cosas.filter(k => k.orig !== m.id); (c.items || []).forEach(x => t.cosas.push({ id: uid(), txt: x, orig: m.id })); return 'Copiado a «Para saber de memoria»'; }
  if (m.tipo === 'flaq') { const t = tema(n); (c.items || []).forEach(x => { if (!t.flaq.some(f => f.txt === x.txt)) t.flaq.push({ id: uid(), txt: x.txt, e: 0, ts: Date.now() }); }); return 'Flaquezas copiadas como pendientes'; }
  if (m.tipo === 'indice') { const t = tema(n); t.ix.per = (c.items || []).map(x => ({ id: uid(), t: x.t, sub: !!x.sub, e: 0 })); t.ix.modo = 'per'; return 'Índice copiado a tu índice personalizado'; }
  if (m.tipo === 'notas' || m.tipo === 'esquema') { const t = tema(n), cab = `— De ${de} —`, txt = c.texto || '', re = new RegExp(`${cab.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n[\\s\\S]*?(?=\\n— De |$)`);
    if (txt) t.notas = re.test(t.notas) ? t.notas.replace(re, cab + '\n' + txt) : (t.notas ? t.notas + '\n\n' : '') + cab + '\n' + txt;
    (c.links || []).forEach(l => { if (!t.enlaces.some(e => e.url === l.url)) t.enlaces.push({ id: uid(), url: l.url, t: l.t }); }); return 'Copiado a tus notas del tema ' + n; }
  if (m.tipo === 'supuesto') { S.supuestos.push({ id: uid(), titulo: c.titulo || m.titulo, b: c.b, enun: c.enun, sol: c.sol, min: c.min || 25, int: [], de }); return 'Supuesto copiado'; }
  if (m.tipo === 'enlace') { const t = tema(n); (c.links || []).forEach(l => { if (!t.enlaces.some(e => e.url === l.url)) t.enlaces.push({ id: uid(), url: l.url, t: l.t }); }); return 'Enlaces copiados'; }
  return 'Copiado';
}

/* ---------- pantalla Grupo ---------- */
const TIPOS_G = [['', 'Todo'], ['indice', 'Índices'], ['tarjetas', 'Tarjetas'], ['cosas', 'Para memorizar'], ['notas', 'Notas'], ['flaq', 'Flaquezas'], ['supuesto', 'Supuestos']];
function personasDe(g) {
  const c = g.cache || {}, m = {}; (c.pers || []).forEach(p => m[p.id] = p.nombre); (c.prog || []).forEach(p => m[p.id] = m[p.id] || p.nombre); (c.mat || []).forEach(x => m[x.autorId] = m[x.autorId] || x.autor);
  return Object.entries(m).map(([id, nombre]) => ({ id, nombre })).sort((a, b) => apellido(a.nombre).localeCompare(apellido(b.nombre), 'es'));
}
R.grupo = () => {
  if (!S.grupos.length) return `<div class="pg"><div class="col">${topTab()}<h1>Grupo</h1><div class="sub">Compartid índices, tarjetas, lo que hay que saber de memoria, notas, exámenes y correcciones, y repartíos los temas. Cada cosa se comparte solo si tú la activas.</div>
    <div class="card"><div class="row">${ic('enlace', 26)}<div class="grow"><b>Tengo un enlace de invitación</b><small>Pégalo aquí o ábrelo directamente desde el mensaje.</small></div></div>
      <div class="addin" style="margin-top:10px"><input class="inp sm" id="g-link" placeholder="https://…#unirse=…" inputmode="url"><button class="pill2" data-a="g-unirme">Unirme</button></div></div>
    <button class="card opt" data-a="ir" data-x="ajustes">${ic('mas', 26)}<div class="grow"><b>Crear un grupo</b><small>Lo hace una sola persona: copia el script en una hoja de Google y genera el enlace para los demás. Los pasos están en el PASO A PASO.</small></div>${ic('sig', 16)}</button>
  </div></div>`;
  const g = grupoAct(), c = g.cache || { mat: [], prog: [], res: [], corr: [] }, tab = S.ui.gtab, pers = personasDe(g);
  let cuerpo = '';
  if (tab === 'mat') {
    const pc = (c.corr || []).filter(x => x.paraId === S.yo.id && !x.hecha);
    const xs = (c.mat || []).filter(m => (!S.ui.gfT || m.tema === +S.ui.gfT) && (!S.ui.gfK || m.tipo === S.ui.gfK || (S.ui.gfK === 'notas' && m.tipo === 'esquema')) && (!S.ui.gfP || m.autorId === S.ui.gfP)).sort((a, b) => b.ts - a.ts);
    const L = lunes(0), grupos = [['Hoy', m => ymd(new Date(m.ts)) === hoy()], ['Esta semana', m => ymd(new Date(m.ts)) >= L && ymd(new Date(m.ts)) < hoy()], ['Antes', m => ymd(new Date(m.ts)) < L]];
    cuerpo = `${pc.length ? `${secT('corregir', `Para corregir · ${pc.length}`)}${pc.map(x => `<button class="card row" data-a="corr-abrir" data-x="${x.id}" style="gap:12px"><span class="av">${iniciales(x.deNombre)}</span><span class="grow"><b>${esc(x.deNombre)} · tema ${x.tema}</b><small>Te pide que corrijas su simulacro</small></span>${ic('sig', 16)}</button>`).join('')}` : ''}
      ${secT('compartir', 'Compartido')}
      <div class="filtros"><label class="selb"><small>Tema</small><select id="gf-t"><option value="">Todos</option>${S.temario.map(x => `<option value="${x.n}" ${String(x.n) === String(S.ui.gfT) ? 'selected' : ''}>${x.n}</option>`).join('')}</select>${ic('abajo', 14)}</label>
        <label class="selb"><small>Tipo</small><select id="gf-k">${TIPOS_G.map(([k, t]) => `<option value="${k}" ${k === S.ui.gfK ? 'selected' : ''}>${t}</option>`).join('')}</select>${ic('abajo', 14)}</label>
        <label class="selb"><small>Persona</small><select id="gf-p"><option value="">Todas</option>${pers.map(p => `<option value="${esc(p.id)}" ${p.id === S.ui.gfP ? 'selected' : ''}>${esc(p.nombre)}</option>`).join('')}</select>${ic('abajo', 14)}</label></div>
      ${grupos.map(([t, f]) => { const ys = xs.filter(f); return ys.length ? `<div class="flab">${t}</div><div class="card" style="padding:2px 15px">${ys.map(m => { const ya = S.copias[m.id], mio = m.autorId === S.yo.id;
        return `<div class="lr"><span class="av">${iniciales(m.autor)}</span><button class="grow" data-a="g-mat" data-x="${m.id}" data-g="${g.id}"><b>${esc(resumenMat(m))}</b><div class="who">${esc(m.autor)} · ${horaCorta(m.ts)}${(m.utiles || []).length ? ' · ' + plural(m.utiles.length, 'persona dice que le ha servido', 'personas dicen que les ha servido') : ''}</div></button>${mio ? '<span class="tipo">Tú</span>' : ya && m.ts > ya ? `<button class="reab" data-a="g-copiar" data-x="${m.id}" data-g="${g.id}">Actualizar</button>` : ya ? '<span class="tipo">Copiado</span>' : `<button class="reab" data-a="g-copiar" data-x="${m.id}" data-g="${g.id}">Copiar</button>`}</div>`; }).join('')}</div>` : ''; }).join('')
        || '<div class="empty">No hay nada con estos filtros. Para compartir, activa «Compartir» en las secciones de la ficha de un tema.</div>'}`;
  }
  if (tab === 'vamos') {
    const ps = (c.prog || []).slice().sort((a, b) => apellido(a.nombre).localeCompare(apellido(b.nombre), 'es'));
    const tot = ps.reduce((a, p) => a + (p.minSemana || 0), 0);
    cuerpo = `<div class="sub">Temas dominados, vuelta y horas de esta semana. Solo sale quien decide compartirlo.</div><div class="card">${ps.map(p => `<div class="lr"><span class="av">${iniciales(p.nombre)}</span><div class="grow"><b>${esc(p.nombre)}${p.id === S.yo.id ? ' (tú)' : ''}</b><small>${p.vuelta ? 'Vuelta ' + p.vuelta + ' · ' : ''}última nota ${p.ultNota != null ? nota1(p.ultNota) : '–'}</small><div class="pbar" style="margin-top:6px"><i style="width:${Math.round((p.dominados || 0) / (p.total || S.temario.length) * 100)}%"></i></div></div><div class="ra"><b class="m">${p.dominados || 0}</b><small class="m">${horasTxt(p.minSemana || 0)}</small></div></div>`).join('') || '<div class="empty">Nadie comparte su progreso todavía.</div>'}</div>
      <div class="card row"><b class="num" style="font-size:32px">${Math.round(tot / 60)}</b><small style="font-size:13px;line-height:1.4">horas de estudio entre todos esta semana. Habéis compartido ${plural((c.mat || []).length, 'cosa', 'cosas')}.</small></div>
      <label class="row tgrow"><div class="grow"><b>Compartir mi progreso</b><small>Temas por estado, vuelta, horas de la semana y última nota</small></div><button class="tgl ${g.compartir ? 'on' : ''}" data-a="g-comp" data-x="${g.id}"><i></i></button></label>`;
  }
  if (tab === 'rep') {
    const ps = (c.prog || []).filter(p => p.estados), nadie = [], todos = [];
    S.temario.forEach((x, i) => { const ll = ps.filter(p => +(p.estados[i] || 0) >= 3).length; if (ps.length && !ll) nadie.push(x.n); if (ps.length > 1 && ll === ps.length) todos.push(x.n); });
    cuerpo = `<div class="sub">Si os repartís los temas que nadie lleva, entre todos cubrís más. Pídete uno para preparar su índice y compartirlo.</div>
      ${secT('temario', `Nadie los lleva · ${nadie.length}`)}<div class="card"><div class="tiles">${nadie.map(n => `<button data-a="abrir-tema" data-x="${n}">${tile(n, 0, 34)}</button>`).join('') || '<span class="s2">Ninguno: estáis cubriendo todo el temario.</span>'}</div></div>
      ${secT('temario', `Los lleváis todos · ${todos.length}`)}<div class="card"><div class="tiles">${todos.map(n => `<button data-a="abrir-tema" data-x="${n}">${tile(n, 4, 34)}</button>`).join('') || '<span class="s2">Ninguno en común todavía.</span>'}</div></div>
      ${secT('usuario', 'Quién prepara qué')}<div class="card">${(c.res || []).map(r => `<div class="srow"><span class="row" style="gap:8px">${tile(r.tema, est(r.tema), 26)}${esc(titCorto(r.tema)).slice(0, 34)}</span><small>${esc(r.nombre)}${r.id === S.yo.id ? ' (tú)' : ''} · ${r.estado}</small>${r.id === S.yo.id ? `<button class="pill2" data-a="g-res-ok" data-x="${r.tema}">${r.estado === 'hecho' ? 'Quitar' : 'Hecho'}</button>` : ''}</div>`).join('') || '<div class="empty">Nadie se ha pedido un tema todavía.</div>'}
        <div class="addin" style="margin-top:6px"><select class="inp sm" id="g-res">${S.temario.map(x => `<option value="${x.n}">${x.n} · ${esc(titCorto(x.n)).slice(0, 40)}</option>`).join('')}</select><button class="pill2" data-a="g-res">Me lo pido</button></div></div>`;
  }
  return `<div class="pg"><div class="col">${topBar(null, `<button class="ib" data-a="g-recargar" aria-label="Actualizar">${ic('repetir', 21)}</button><button class="ib" data-a="g-ajustes" data-x="${g.id}" aria-label="Ajustes del grupo">${ic('ajustes', 22)}</button>`)}<div class="kick">${esc(g.nombre)} · ${plural(Math.max(1, pers.length), 'persona', 'personas')}${g.ult ? ' · actualizado ' + horaCorta(g.ult) : ''}</div><h1>Grupo</h1>
    ${S.grupos.length > 1 ? `<div class="frow"><label class="selb"><small>Grupo:</small><select id="g-sel">${S.grupos.map(x => `<option value="${x.id}" ${x.id === g.id ? 'selected' : ''}>${esc(x.nombre)}</option>`).join('')}</select>${ic('abajo', 15)}</label></div>` : ''}
    ${segHtml([['mat', 'Compartido'], ['vamos', 'Cómo vamos'], ['rep', 'Reparto']], tab, 'g-tab')}${cuerpo}</div></div>`;
};
A_RENDER.grupo = (v, re) => { const g = grupoAct(); if (!re && g && (!g.ult || Date.now() - g.ult > 60000)) cargarGrupo(true, g); };
const apellido = n => { const p = String(n || '').trim().split(/\s+/); return p.length > 1 ? p.slice(1).join(' ') : p[0] || ''; };
const iniciales = n => String(n || '?').trim().split(/\s+/).slice(0, 2).map(x => x[0]).join('').toUpperCase();
const horaCorta = ts => { const d = new Date(ts); return (ymd(d) === hoy() ? 'hoy ' : fechaCorta(ymd(d)) + ' ') + 'a las ' + pad(d.getHours()) + ':' + pad(d.getMinutes()); };
R.material = p => {
  const g = grupoPorId(p.g) || grupoAct(), m = ((g && g.cache || {}).mat || []).find(x => x.id === p.id);
  if (!m) return `<div class="pg"><div class="col">${topBar('Grupo')}<div class="empty">Esto ya no está compartido.</div></div></div>`;
  const c = m.contenido || {}; let body = '';
  if (m.tipo === 'tarjetas') body = (c.cards || []).map(x => `<div class="card"><div class="row"><b class="grow">${esc(x.tipo === 'huecos' ? String(x.q).replace(/\[[^\]]*\]/g, '___') : x.q)}</b><span class="tipo">${TIPOS_T[x.tipo || 'girar']}</span></div><small style="margin-top:4px;white-space:pre-line">${esc(x.tipo === 'huecos' ? x.q : x.a)}</small></div>`).join('');
  if (m.tipo === 'indice') body = `${c.ori ? '<div class="oriente">Es el índice orientativo de Ruta 71.</div>' : ''}<div class="card" style="padding:2px 15px">${(() => { let i = 0, j = 0; return (c.items || []).map(a => { if (a.sub) j++; else { i++; j = 0; } return `<div class="ix ${a.sub ? 'sub' : ''}"><span class="n">${a.sub ? i + '.' + j : i}</span><b class="grow">${esc(a.t)}</b></div>`; }).join(''); })()}</div>`;
  if (m.tipo === 'cosas') body = `<div class="card" style="padding:2px 15px">${(c.items || []).map(x => `<div class="lr"><b class="cosa grow">${esc(x)}</b></div>`).join('')}</div>`;
  if (m.tipo === 'flaq') body = `<div class="card" style="padding:2px 15px">${(c.items || []).map(x => `<div class="lr">${fqBtn(x, '', '')}<b class="grow" style="font-weight:600">${esc(x.txt)}</b></div>`).join('')}</div>`;
  if (m.tipo === 'notas' || m.tipo === 'esquema') body = `${c.texto ? `<div class="card"><p class="txt">${esc(c.texto).replace(/\n/g, '<br>')}</p></div>` : ''}${(c.links || []).map(l => `<a class="card row" href="${esc(l.url)}" target="_blank" rel="noopener">${ic('enlace', 20)}<span class="grow tt">${esc(l.t || l.url)}</span>${ic('sig', 16)}</a>`).join('')}`;
  if (m.tipo === 'supuesto') body = `<div class="card"><div class="kick">${esc(c.b || '')} · ${c.min || 25} min</div><p class="txt">${esc(c.enun || '').replace(/\n/g, '<br>')}</p></div><div class="card dashed"><div class="kick">Solución</div><p class="txt">${esc(c.sol || '').replace(/\n/g, '<br>')}</p></div>`;
  if (m.tipo === 'enlace') body = (c.links || []).map(l => `<a class="card row" href="${esc(l.url)}" target="_blank" rel="noopener">${ic('enlace', 20)}<span class="grow tt">${esc(l.t || l.url)}</span>${ic('sig', 16)}</a>`).join('');
  const util = (m.utiles || []).includes(S.yo.id), mio = m.autorId === S.yo.id, ya = S.copias[m.id];
  return `<div class="pg narrow"><div class="col">${topBar('Atrás')}<div class="kick">${esc(TIT_SEC[m.tipo] || 'Material')}${m.tema ? ' · tema ' + m.tema : ''}</div><h1>${esc(resumenMat(m))}</h1>
    <div class="row" style="margin-top:8px;gap:8px"><span class="av">${iniciales(m.autor)}</span><small class="s2" style="margin:0">${esc(m.autor)} · ${fechaLarga(ymd(new Date(m.ts)))}</small></div>${body}
    <div class="sp"></div><div style="height:14px"></div>${mio ? btn('Dejar de compartir', 'g-borrar', m.id, 'soft') : `<div class="two">${btn(ic('estrella', 18) + (util ? 'Te ha servido' : 'Me ha servido'), 'g-util', m.id, 'soft' + (util ? ' on' : ''))}${btn(ya && m.ts > ya ? 'Actualizar mi copia' : ya ? 'Copiar otra vez' : 'Copiar a lo mío', 'g-copiar', m.id)}</div>`}</div></div>`;
};

/* hoja: compartir las secciones de un tema */
function abrirCompartir(n) {
  hoja(`<h2>Compartir el tema ${n}</h2><div class="sub">Elige qué secciones ve cada grupo. Lo que cambies después se actualiza solo.</div>
    ${['indice', 'tarjetas', 'cosas', 'notas', 'flaq'].map(sec => { const gs = gruposDe(n, sec), hay = !!contenidoSec(n, sec);
      return `<div class="opt ${hay ? '' : 'off'}">${ic({ indice: 'lista', tarjetas: 'tarjetas', cosas: 'marca', notas: 'lapiz', flaq: 'alerta' }[sec], 22)}<div class="grow"><b>${SECC[sec]}</b><small>${gs.length ? 'Con ' + esc(gs.map(id => grupoPorId(id).nombre).join(' y ')) : hay ? (sec === 'flaq' ? 'Son personales: solo si tú quieres' : 'Sin compartir') : 'No hay nada todavía'}</small></div><button class="tgl ${gs.length ? 'on' : ''}" data-a="sec-comp" data-x="${sec}" data-n="${n}"><i></i></button></div>`; }).join('')}`);
}
/* hoja: con qué grupos compartir una sección */
let FCG = null;
function abrirGruposSec(n, sec) {
  FCG = { n, sec, ids: gruposDe(n, sec) };
  hoja(`<h2>Compartir</h2><div class="sub">«${SECC[sec]}» del tema ${n}. Lo verán con tu nombre y podrán copiarlo.</div>
    <div class="lab">Con qué grupos</div>${S.grupos.map(g => `<button class="opt ${FCG.ids.includes(g.id) ? 'sel' : ''}" data-a="fcg-g" data-x="${g.id}"><span class="chk ${FCG.ids.includes(g.id) ? 'on' : ''}">${FCG.ids.includes(g.id) ? ic('check', 14, 2.6) : ''}</span><div class="grow"><b>${esc(g.nombre)}</b><small>${plural(Math.max(1, personasDe(g).length), 'persona', 'personas')}</small></div></button>`).join('')}
    <div style="height:14px"></div>${btn('Guardar', 'fcg-ok')}`);
}
function ponerGruposSec(n, sec, ids) {
  const t = tema(n); t.comp[sec] = ids.slice(); t.excl = t.excl || {}; t.excl[sec] = S.grupos.filter(g => g.todo && !ids.includes(g.id)).map(g => g.id);
  S.pendComp = S.pendComp || {}; S.pendComp[n + '|' + sec] = 1;
}

/* hoja: ajustes de un grupo */
function abrirAjustesGrupo(gid) {
  const g = grupoPorId(gid); if (!g) return; const ps = personasDe(g);
  hoja(`<h2>${esc(g.nombre)}</h2><div class="sub">${plural(Math.max(1, ps.length), 'persona', 'personas')}${g.ult ? ' · actualizado ' + horaCorta(g.ult) : ''}</div>
    <div class="lab">Personas</div><div class="card" style="padding:2px 15px">${ps.map(p => `<div class="lr"><span class="av">${iniciales(p.nombre)}</span><b class="grow" style="font-weight:600">${esc(p.nombre)}${p.id === S.yo.id ? ' (tú)' : ''}</b></div>`).join('') || '<div class="empty">Se ven al conectar.</div>'}</div>
    <div class="lab">Qué compartes con este grupo</div><div class="card" style="padding:2px 15px">
      <div class="srow"><span>Mi progreso<br><small class="s2" style="margin:0">Estados, vuelta, horas y última nota</small></span>${tgl('g-comp', g.compartir, g.id)}</div>
      <div class="srow"><span>Compartir todo con este grupo<br><small class="s2" style="margin:0">Índices, tarjetas, para saber de memoria y notas de todos los temas, también lo que añadas después. Las flaquezas, no.</small></span>${tgl('g-todo', g.todo, g.id)}</div></div>
    <p class="note">También puedes compartir sección a sección desde la ficha de cada tema.</p>
    <div class="card" style="padding:2px 15px"><button class="srow" data-a="g-invitar" data-x="${g.id}"><span>Copiar el enlace de invitación</span>${ic('copia', 18)}</button><button class="srow del" data-a="g-salir" data-x="${g.id}"><span>Salir del grupo</span></button></div>`);
}

/* hoja: pedir que te corrijan un simulacro */
let FPC = null;
function abrirPedirCorr(simId) {
  FPC = { simId, g: S.ui.gsel || S.grupos[0].id, para: null };
  const pintarH = () => { const g = grupoPorId(FPC.g), ps = personasDe(g).filter(p => p.id !== S.yo.id);
    $('#sheet-body').innerHTML = `<h2>Pedir corrección</h2><div class="sub">Le llegarán las fotos de tus hojas y la rúbrica. Elige quién.</div>
      ${S.grupos.length > 1 ? `<div class="lab">Grupo</div><select class="inp" id="pc-g">${S.grupos.map(x => `<option value="${x.id}" ${x.id === FPC.g ? 'selected' : ''}>${esc(x.nombre)}</option>`).join('')}</select>` : ''}
      <div class="lab">Quién</div>${ps.map(p => `<button class="opt ${FPC.para === p.id ? 'sel' : ''}" data-a="pc-para" data-x="${esc(p.id)}"><span class="av">${iniciales(p.nombre)}</span><div class="grow"><b>${esc(p.nombre)}</b></div><span class="radio ${FPC.para === p.id ? 'on' : ''}"></span></button>`).join('') || '<div class="empty">Todavía no hay nadie más en el grupo. Actualiza la pestaña Grupo.</div>'}
      <div style="height:14px"></div>${btn('Enviar', 'pc-ok', '', FPC.para ? '' : 'off')}`; };
  hoja(''); pintarH(); FPC.pintar = pintarH;
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
    cuerpo = `${secT('alerta', 'Los que más se te resisten')}<div class="card">${xs.map(x => { const t = tema(x.n), fa = t.flaq.filter(f => f.e < 2).length, nn = ultimaNota(x.n);
      return `<button class="lr" data-a="abrir-tema" data-x="${x.n}">${tile(x.n, t.e, 30)}<div class="grow"><b class="tt">${esc(titCorto(x.n))}</b><small>${[fa ? plural(fa, 'flaqueza', 'flaquezas') : '', nn != null ? 'última nota ' + nota1(nn) : '', seEnfria(x.n) ? diasEntre(t.ult, hoy()) + ' días sin repasar' : '', t.conf && t.conf <= 2 ? 'confianza ' + t.conf + ' de 5' : ''].filter(Boolean).join(' · ')}</small></div></button>`; }).join('') || '<div class="empty">Nada destacable. Sigue así.</div>'}</div>`;
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
function invitacion(g = grupoAct()) { const d = { u: g.url, c: g.clave, g: g.nombre }; return location.origin + location.pathname + '#unirse=' + btoa(unescape(encodeURIComponent(JSON.stringify(d)))).replace(/=+$/, ''); }
let GNUEVO = false;
const MOVIL_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="7" y="3" width="10" height="18" rx="2.2"/><path d="M11 18h2"/></svg>';
const ORDE_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="4" y="5" width="16" height="11" rx="1.6"/><path d="M2.5 19h19"/></svg>';
function haceTxt(ts) { const m = Math.round((Date.now() - ts) / 6e4); return m < 2 ? 'ahora' : m < 60 ? 'hace ' + m + ' min' : m < 1440 ? 'hace ' + Math.round(m / 60) + ' h' : 'hace ' + plural(Math.round(m / 1440), 'día', 'días'); }
function estadoAjustes() { const cp = S.copia;
  if (!cp.url) return '<span>Sin conectar</span>';
  if (!cp.sinc) return `<span class="${cp.error ? 'err' : 'ok'}">${cp.error ? 'No se ha podido guardar' : cp.ult ? 'Copia guardada ' + horaCorta(cp.ult) : 'Conectada'}</span>`;
  const e = SINC.estado; if (e === 'gira') return '<span>Sincronizando…</span>'; if (e === 'off') return '<span class="err">Sin conexión</span>';
  if (e === 'err' || cp.error) return '<span class="err">No se ha podido sincronizar</span>';
  return `<span class="ok"><i class="pto-ok"></i>${cp.ult ? 'Al día · ' + pad(new Date(cp.ult).getHours()) + ':' + pad(new Date(cp.ult).getMinutes()) : 'Todavía sin sincronizar'}</span>`; }
function dispositivosHtml() { const ds = Object.assign({}, S.copia.devs || {}); ds[DISP] = { n: nombreDisp(), ts: S.copia.ult || Date.now() };
  const xs = Object.entries(ds).sort((a, b) => (a[0] === DISP ? -1 : b[0] === DISP ? 1 : b[1].ts - a[1].ts));
  return `<div class="dispos">${xs.map(([id, d]) => `<div class="row"><span class="dsp">${/Ordenador/.test(d.n) ? ORDE_SVG : MOVIL_SVG}</span><div class="grow"><b>${esc(d.n)}</b><small>${id === DISP ? 'Este dispositivo · ' + (S.copia.ult ? haceTxt(S.copia.ult) : 'sin sincronizar') : 'Última vez ' + haceTxt(d.ts)}</small></div></div>`).join('')}</div>`; }
R.ajustes = () => {
  const c = S.conv, cp = S.copia;
  return `<div class="pg"><div class="col">${topBar('Atrás')}<h1>Ajustes</h1>
    <div class="grid2"><div>
    ${secT('usuario', 'Tú')}<div class="card"><label class="srow"><span>Nombre</span><input class="tx" data-y="nombre" value="${esc(S.yo.nombre)}" placeholder="Tu nombre"></label></div>
    ${secT('marca', 'Convocatoria')}<div class="card">
      <label class="srow"><span>Nombre</span><input class="tx" data-c="nombre" value="${esc(c.nombre)}"></label><label class="srow"><span>Especialidad</span><input class="tx" data-c="esp" value="${esc(c.esp)}"></label>
      <div class="srow"><span>Bolas en el tema</span>${stepper('bolas', c.bolas)}</div><div class="srow"><span>Tiempo para el tema</span>${stepper('minTema', horasTxt(c.minTema))}</div>
      <label class="srow"><span>Fecha del examen</span><input type="date" data-c="fecha" value="${c.fecha}"></label><div class="srow"><span>Es una fecha aproximada</span>${tgl('aprox', c.aprox)}</div>
      <button class="srow" data-a="ir" data-x="convocatoria"><span>Fechas, avisos y enlaces</span><em>${ic('sig', 15)}</em></button>
      <button class="srow" data-a="rubrica"><span>Rúbrica del tema escrito</span><em>${rubricaNavarra() ? 'Navarra 2018 · ' : ''}${S.rubrica.length} criterios ${ic('sig', 15)}</em></button></div>
    <p class="note">Por norma salen 2 bolas hasta 25 temas, 3 hasta 50 y 4 con más de 50. Tu temario tiene ${S.temario.length}: ${bolasPorTemas(S.temario.length)} bolas.</p>
    ${secT('cal', 'Objetivo y agenda')}<div class="card"><div class="srow"><span>Temas que quiero dominar</span>${stepper('objT', S.obj.temas)}</div><div class="srow"><span>Horas por semana</span>${stepper('objH', S.obj.horas + ' h')}</div>
      <div class="srow"><span>Días que estudias</span></div><div class="dias">${[1, 2, 3, 4, 5, 6, 0].map(d => `<button class="ch ${S.aj.dias.includes(d) ? 'on' : ''}" data-a="aj-dia" data-x="${d}">${'DLMXJVS'[d]}</button>`).join('')}</div></div>
    ${secT('temario', 'Temario')}<div class="card"><div class="srow"><span>${S.temario.length} temas · ${bloques().length} bloques</span><button class="pill2" data-a="temario-cambiar">Cambiar</button></div>
      <button class="srow" data-a="guion"><span>Guion de la defensa</span><em>${S.p2.guion.length} partes ${ic('sig', 15)}</em></button>
      <button class="srow" data-a="imprimir"><span>Imprimir o guardar en PDF</span><em>${ic('sig', 15)}</em></button></div>
    </div><div>
    ${secT('grupo', 'Grupos de trabajo')}<div class="card">${S.grupos.map(g => `<button class="srow" data-a="g-ajustes" data-x="${g.id}"><span>${esc(g.nombre)}<br><small class="s2" style="margin:0">${plural(Math.max(1, personasDe(g).length), 'persona', 'personas')}${g.todo ? ' · lo compartes todo' : ''}</small></span><em>${ic('sig', 15)}</em></button>`).join('')}
      ${GNUEVO ? `<div class="s2" style="margin:6px 0 8px">Una persona copia el script en una hoja de Google (está en el PASO A PASO) y pega aquí su dirección y clave. Después comparte el enlace de invitación.</div>
        <label class="srow"><span>Nombre del grupo</span><input class="tx" id="gc-n" placeholder="Opos Tecnología"></label><label class="srow"><span>URL del script</span><input class="tx" id="gc-u" placeholder="https://script.google.com/…/exec"></label><label class="srow"><span>Clave</span><input class="tx" id="gc-c" placeholder="la de tu script"></label>
        <div style="height:8px"></div>${btn('Crear el grupo', 'g-crear', '', 'sm')}`
      : `<button class="srow acc" data-a="g-nuevo"><span>Crear un grupo</span><em>${ic('mas', 15)}</em></button>`}
      <div class="addin" style="padding-bottom:8px"><input class="inp sm" id="g-link" placeholder="Pega un enlace de invitación" inputmode="url"><button class="pill2" data-a="g-unirme">Unirme</button></div></div>
    ${secT('nube', 'Tus dispositivos')}<div class="card">
      <div class="srow"><span><b>Sincronizar el móvil y el ordenador</b></span>${tgl('sinc-on', cp.sinc)}</div>
      <div class="srow"><span>Estado</span>${estadoAjustes()}</div>
      ${cp.sinc ? dispositivosHtml() : ''}
      <label class="srow"><span>URL del script</span><input class="tx" data-cp="url" value="${esc(cp.url)}" placeholder="https://script.google.com/…"></label><label class="srow"><span>Clave</span><input class="tx" data-cp="clave" value="${esc(cp.clave)}"></label>
      ${cp.url ? (cp.sinc ? `<div style="margin:10px 0 4px">${btn(ic('vuelta', 17, 2) + 'Sincronizar ahora', 'sinc-ahora', '', 'soft sm')}</div>` : `<div class="two" style="margin:10px 0 4px">${btn('Recuperar', 'cp-rec', '', 'soft sm')}${btn('Guardar ahora', 'cp-guardar', '', 'sm')}</div>`) : ''}
      <div class="s2">${cp.sinc ? 'Al abrir la app trae lo último de tu Drive y guarda lo que cambias a los pocos segundos, con fotos y PDF. En el móvil, también tirando de la pantalla hacia abajo. En el otro dispositivo pega la misma URL y clave y activa «Sincronizar».'
        : 'Pega la URL y la clave del script de tu hoja «Ruta 71 · mi copia» y activa «Sincronizar» para tener el móvil y el ordenador siempre al día. Sin activarlo, se hace una copia sola unos minutos después de cada cambio.'} Usa una hoja y una clave distintas de las del grupo.</div></div>
    ${secT('fb', 'Feedback')}<div class="card"><button class="srow" data-a="ir" data-x="feedback"><span>Notas de mejora</span><span class="m" style="margin-left:auto;margin-right:8px;color:var(--ink2)">${(S.fb || []).filter(x => !x.hecha).length} pendientes</span>${ic('sig', 15)}</button></div>
    ${secT('ojo', 'Apariencia y sonido')}${segHtml([['claro', 'Claro'], ['oscuro', 'Oscuro'], ['auto', 'Automático']], S.aj.tema, 'tema-ap')}
    <div class="card"><div class="srow"><span>Avisos con sonido en el examen</span>${tgl('sonido', S.aj.sonido)}</div><button class="srow" data-a="probar-sonido"><span class="acc">Probar el sonido</span></button></div>
    ${secT('archivo', 'Tus datos')}<div class="card"><button class="srow" data-a="exportar"><span>Exportar a un archivo</span>${ic('sig', 15)}</button>
      <label class="srow"><span>Importar desde un archivo</span>${ic('sig', 15)}<input type="file" accept=".json,application/json" id="importar" hidden></label>
      <button class="srow del" data-a="borrar-todo"><span>Borrar todo</span></button></div>
    <button class="link acc" data-a="ver-bienvenida">Ver la bienvenida otra vez</button><div class="ver">Ruta 71 · versión ${VERSION}</div></div></div>
  </div></div>`;
};

/* ===================================================================== Imprimir o guardar en PDF */
function abrirImprimir(n) {
  IMP = n ? 'ficha' : 'flaq';
  const ops = (n ? [['ficha', `Ficha del tema ${n}`, 'Estado, índice, flaquezas, para saber de memoria y notas'], ['tarjetas-t', `Tarjetas del tema ${n} para recortar`, 'Pregunta y respuesta, a doble cara']] : [])
    .concat([['tarjetas', 'Tarjetas que tocan para recortar', 'Las que te tocan hoy y en los próximos 7 días'], ['flaq', 'Flaquezas pendientes', 'De todos los temas, en una hoja'], ['agenda', 'Agenda de la semana', semanaTxt().split(' · ')[0]], ['mapa', 'Mapa del temario', `Los ${S.temario.length} temas con su estado`]]);
  IMPN = n; IMPOPS = ops; pintarImprimir();
}
let IMP = 'ficha', IMPN = null, IMPOPS = [];
function pintarImprimir() {
  hoja(`<h2>Imprimir o guardar en PDF</h2><div class="sub">La app crea el PDF. Después lo compartes para imprimirlo, guardarlo en Archivos o mandarlo.</div>
    ${IMPOPS.map(([k, t, s]) => `<button class="opt ${IMP === k ? 'sel' : ''}" data-a="imp-op" data-x="${k}"><span class="radio ${IMP === k ? 'on' : ''}"></span><div class="grow"><b>${esc(t)}</b><small>${esc(s)}</small></div></button>`).join('')}
    <div style="height:14px"></div>${btn(ic('imprimir', 19, 2) + 'Crear el PDF', 'imp-ok')}`);
}
function htmlImpresion(k, n) {
  const cab = (t, sub) => `<div class="pk">Ruta 71 · ${esc(sub)} · ${fechaLarga(hoy())}</div><h1>${esc(t)}</h1>`;
  const pie = '<div class="ppie">Ruta 71 · Tema a tema, hasta la plaza.</div>';
  if (k === 'ficha') { const t = tema(n), o = t.ix.modo === 'per' && t.ix.per.length ? t.ix.per.map(a => ({ t: a.t, sub: a.sub })) : (indiceOrientativo(n) || []).map(x => ({ t: x }));
    let i = 0, j = 0;
    return `${cab(tit(n), 'ficha del tema ' + n)}<div class="pmeta">${NOMS[t.e]}${t.mio ? ' · lo llevo al examen' : ''} · vuelta ${t.v || 0} · confianza ${t.conf || '–'}/5${ultimaNota(n) != null ? ' · último simulacro ' + nota1(ultimaNota(n)) : ''}</div>
      ${o.length ? `<h3>Índice</h3>${o.map(a => { if (a.sub) j++; else { i++; j = 0; } return `<div class="pl ${a.sub ? 'sub' : ''}"><span class="box"></span><span class="pn">${a.sub ? i + '.' + j : i}</span>${esc(a.t)}</div>`; }).join('')}` : ''}
      ${t.flaq.filter(f => f.e < 2).length ? `<h3>Lo que me falla</h3>${t.flaq.filter(f => f.e < 2).map(f => `<div class="pl"><span class="box"></span>${esc(f.txt)}</div>`).join('')}` : ''}
      ${t.cosas.length ? `<h3>Para saber de memoria</h3>${t.cosas.map(c => `<div class="pl mono">${esc(c.txt)}</div>`).join('')}` : ''}
      ${t.notas ? `<h3>Notas</h3><div class="ptxt">${esc(t.notas).replace(/\n/g, '<br>')}</div>` : ''}${pie}`; }
  if (k === 'tarjetas' || k === 'tarjetas-t') { const xs = (k === 'tarjetas-t' ? S.tarjetas.filter(c => c.tema === n && !c.arch) : S.tarjetas.filter(c => !c.arch && (!c.prox || c.prox <= addDays(hoy(), 7)))).slice(0, 60);
    return `${cab(k === 'tarjetas-t' ? 'Tarjetas del tema ' + n : 'Tarjetas para repasar', 'recorta por la línea de puntos')}<div class="pcut">${xs.map(c => `<div><small>Tema ${c.tema}</small>${esc(textoTarjeta(c))}</div><div>${esc(c.tipo === 'huecos' ? c.q.replace(/[\[\]]/g, '') : c.a).replace(/\n/g, '<br>')}</div>`).join('') || '<div>No hay tarjetas.</div><div></div>'}</div>${pie}`; }
  if (k === 'flaq') { const xs = S.temario.filter(x => S.temas[x.n] && S.temas[x.n].flaq.some(f => f.e < 2));
    return `${cab('Flaquezas pendientes', 'todos los temas')}${xs.map(x => `<h3>Tema ${x.n} · ${esc(titCorto(x.n))}</h3>${S.temas[x.n].flaq.filter(f => f.e < 2).map(f => `<div class="pl"><span class="box"></span>${esc(f.txt)}${f.e === 1 ? ' <i>(en ello)</i>' : ''}</div>`).join('')}`).join('') || '<p>No tienes flaquezas pendientes.</p>'}${pie}`; }
  if (k === 'agenda') { const L = lunes(S.ui.semOff || 0);
    return `${cab(semanaTxt().split(' · ')[0], 'agenda')}${Array.from({ length: 7 }, (_, i) => addDays(L, i)).map(f => { const bs = bloquesDe(f); return bs.length ? `<h3>${cap(fechaLarga(f))}</h3>${bs.map(b => `<div class="pl"><span class="box"></span><span class="pn">${b.h || ''}</span>${esc(tituloBloque(b))} · ${horasTxt(b.min)}</div>`).join('')}` : ''; }).join('') || '<p>No hay nada planificado esta semana.</p>'}${pie}`; }
  if (k === 'sim') { const s = S.sims.find(x => x.id === n), rub = s.rub || S.rubrica;
    return `${cab('Simulacro del tema ' + s.tema, fechaLarga(ymd(new Date(s.ts))))}<div class="pmeta">${esc(tit(s.tema))}</div><h3>Autoevaluación · ${nota1(s.nota)}</h3>${rub.map((r, i) => `<div class="pl"><span class="pn">${(s.pts || [])[i] ?? '–'}</span>${esc(r.t)} (${r.p} %)</div>`).join('')}
      ${s.corr ? `<h3>Corrección de ${esc(s.corr.nombre)} · ${nota1(s.corr.nota)}</h3>${rub.map((r, i) => `<div class="pl"><span class="pn">${(s.corr.pts || [])[i] ?? '–'}</span>${esc(r.t)}</div>`).join('')}${s.corr.com ? `<div class="ptxt">${esc(s.corr.com).replace(/\n/g, '<br>')}</div>` : ''}` : ''}
      ${(s.olv || []).length ? `<h3>Lo que faltó</h3>${s.olv.map(o => `<div class="pl"><span class="box"></span>${esc(o)}</div>`).join('')}` : ''}${pie}`; }
  return `${cab('Mapa del temario', S.conv.esp)}<div class="pmapa">${S.temario.map(x => `<span class="tl e${est(x.n)} ${tema(x.n).mio ? 'mio' : ''}" style="--s:44px">${x.n}</span>`).join('')}</div><div class="leg">${NOMS.map((t, i) => `<span>${tile('', i, 12)}${t} ${cuenta(i)}</span>`).join('')}</div>${pie}`;
}
let IMP_ULT = null;
function imprimir(k, n) { IMP_ULT = [k, n]; hacerPDF(k, n); }
function imprimirNavegador(k, n) { const p = $('#print'); p.innerHTML = htmlImpresion(k, n); cerrarHoja(); setTimeout(() => window.print(), 250); }
function abrirRubrica() {
  hoja(`<h2>Rúbrica</h2><div class="sub">Criterios con su peso. Cada uno se puntúa de 4 a 0. Los pesos deben sumar 100 %. Por defecto son los del tribunal coordinador de Navarra (2018).</div>
    <div id="rb">${S.rubrica.map((c, i) => `<div class="addin"><input class="inp sm" data-rb="t" data-i="${i}" value="${esc(c.t)}"><input class="inp sm m" style="width:72px;text-align:right" type="number" data-rb="p" data-i="${i}" value="${c.p}"><button class="ib sm" data-a="rb-del" data-x="${i}">${ic('papelera', 17)}</button></div>`).join('')}</div>
    <button class="addrow" data-a="rb-add">${ic('mas', 18)}Añadir criterio</button><p class="note" id="rb-sum">Suman ${S.rubrica.reduce((a, c) => a + (+c.p || 0), 0)} %.</p>
    <div style="height:10px"></div>${btn('Guardar', 'rb-ok')}<button class="link" data-a="rb-def">Volver a la rúbrica de Navarra</button>`);
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
function cerrarHoja() { const s = $('#sheet'); if (!s.classList.contains('on')) return; if (typeof SINC === 'object' && SINC.eleccion) { const f = SINC.eleccion; SINC.eleccion = null; f(null); } s.classList.remove('on'); $('#scrim').classList.remove('on'); if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); }
const hojaAbierta = () => $('#sheet').classList.contains('on');
const repintarHoja = html => { const b = $('#sheet-body'), y = b.scrollTop; b.innerHTML = html; b.scrollTop = y; };
let TT = null;
function toast(t, deshacer = false) {
  const el = $('#toast'); $('#toast-t').textContent = t; $('#toast-b').hidden = !deshacer;
  el.classList.remove('on'); void el.offsetWidth; el.classList.add('on');
  clearTimeout(TT); TT = setTimeout(() => el.classList.remove('on'), deshacer ? 4500 : Math.max(2400, t.length * 55));
}
function copiarTexto(x, msg) { (navigator.clipboard ? navigator.clipboard.writeText(x) : Promise.reject()).then(() => toast(msg || 'Copiado'), () => { hoja(`<h2>Copia este texto</h2><textarea class="inp" style="min-height:120px" readonly>${esc(x)}</textarea>`); }); }
function abrirBlob(b, mime, titulo) {
  const url = URL.createObjectURL(b);
  if (/^image/.test(mime || b.type)) { hoja(`<h2>${esc(titulo || 'Foto')}</h2><img class="fotov" src="${url}" alt=""><a class="link acc" href="${url}" download="${esc((titulo || 'foto') + '.jpg')}">Guardar</a>`); return; }
  const w = window.open(url, '_blank');
  if (!w) hoja(`<h2>${esc(titulo || 'Archivo')}</h2><div class="sub">Tu navegador no ha abierto el archivo solo.</div><div style="height:12px"></div><a class="btn" href="${url}" target="_blank" rel="noopener">Abrir el PDF</a>`);
}

/* ===================================================================== acciones */
const ACC = {};
document.addEventListener('click', e => {
  const b = e.target.closest('[data-a]'); if (!b || b.disabled || !b.dataset.a) return;
  if (b.tagName === 'INPUT' || b.tagName === 'SELECT') return;
  const f = ACC[b.dataset.a]; if (f) { e.preventDefault(); f(b.dataset.x, b, e); }
});
const val = id => ((document.getElementById(id) || {}).value || '').trim();
function animTile(sel) { const t = $(sel); if (t) animar(t, x => ({ transform: `scale(${.7 + .3 * x})` }), { w: 15, z: 6 }); }
const subirBotones = () => $$('.four button').forEach((b, i) => animar(b, v => ({ opacity: Math.min(1, v * 2), transform: `translateY(${(1 - v) * 20}px)` }), { w: 13, z: 7, delay: 200 + i * 50 }));
const siguiente = e => [1, 2, 0][e || 0] === 0 ? 0 : (e || 0) + 1;

Object.assign(ACC, {
  'tab': x => { if (x === ACT) { $('#view').scrollTo({ top: 0, behavior: 'smooth' }); return; } if (x === 'temario') TSEL = TSEL || null; go(x, {}, 'tab'); },
  'ir': (x, b) => { if (x === 'sorteo') SORT = null; if (x === 'ajustes') GNUEVO = false; go(x, x === 'examenes' ? { anio: b.dataset.k } : {}); },
  'atras': () => atras(),
  'deshacer': () => deshacer(),
  'cerrar-hoja': () => cerrarHoja(),

  /* bienvenida */
  'onb-sig': () => {
    if (ONB === NV + 2 && TPEGAR) { const t = parsearTemario(val('t-pegar')); if (t.length < 2) { toast('Pega al menos dos temas, uno por línea'); return; } S.temario = t; S.conv.bolas = bolasPorTemas(t.length); if (OBJ_TMP > t.length) OBJ_TMP = t.length; save(); }
    if (ONB === NV + 3) { S.obj.temas = OBJ_TMP; save(); }
    if (ONB === ONB_TOT - 1) { S.yo.nombre = val('onb-nombre'); S.onb = true; save(); HIST = []; go('hoy', {}, 'tab'); if (JOIN) setTimeout(pedirUnirse, 500); return; }
    ONB++; pintar('push');
  },
  'onb-atras': () => { ONB = Math.max(0, ONB - 1); pintar('back'); },
  'onb-saltar': () => { ONB = ONB >= 1 && ONB <= NV ? NV + 1 : ONB_TOT - 1; pintar('push'); },
  'onb-tec': () => { TPEGAR = false; S.temario = temarioTec(); S.conv.bolas = 4; save(); refresh(); },
  'onb-pegar': () => { TPEGAR = true; refresh(); setTimeout(() => { const t = $('#t-pegar'); if (t) t.focus(); }, 60); },
  'onb-obj': x => { OBJ_TMP = Math.max(1, Math.min(S.temario.length, OBJ_TMP + +x)); $('#onb-obj').textContent = OBJ_TMP; $('#onb-prob').textContent = prob(OBJ_TMP) + ' %'; animTile('#onb-prob'); },
  'onb-horas': x => { S.obj.horas = parseInt(x, 10); save(); refresh(); },
  'ver-bienvenida': () => { ONB = 0; OBJ_TMP = null; go('bienvenida', {}, 'tab'); },

  /* hoy y agenda */
  'toca': (x, b) => { const k = b.dataset.k; if (k === 'tema') ACC['abrir-tema'](x); if (k === 'tarjetas') ACC.repasar(x); if (k === 'supuesto') ACC['sup-hacer'](x); },
  'rapido': () => { const xs = tarjetasHoy().slice(0, 10); if (!xs.length) { toast('No te toca ninguna tarjeta'); return; } repasoCon(xs); },
  'ag-vista': x => { S.ui.hvista = x; if (x === 'semana') S.ui.semOff = 0; if (x === 'mes') S.ui.mesOff = 0; save(); if (ACT === 'hoy') { const v = $('#view'); v.innerHTML = R.hoy(); A_RENDER.hoy(v); v.scrollTop = 0; } else go('hoy', {}, 'tab'); },
  'ag-sem': x => { S.ui.semOff = (S.ui.semOff || 0) + +x; save(); refresh(); },
  'ag-mes': x => { S.ui.mesOff = (S.ui.mesOff || 0) + +x; save(); refresh(); },
  'ag-nuevo': x => { const def = S.ui.hvista === 'semana' ? (lunes(S.ui.semOff || 0) > hoy() ? lunes(S.ui.semOff || 0) : hoy()) : hoy(); abrirBloque(null, x || def); },
  'ag-editar': x => abrirBloque(x),
  'ag-ck': x => commit(() => { const b = S.agenda.find(y => y.id === x); if (b) b.hecho = !b.hecho; }),
  'ag-dia': f => hoja(`<h2>${cap(fechaLarga(f))}</h2><div class="sub">${minDia(f) ? horasTxt(minDia(f)) + ' planificadas' : 'Nada planificado'}</div>${bloquesDe(f).length ? `<div class="card" style="padding:2px 13px">${bloquesDe(f).map(b => blkHtml(b)).join('')}</div>` : ''}<div style="height:14px"></div>${btn(ic('mas', 18) + 'Añadir bloque', 'ag-nuevo', f, 'soft')}`),
  'ag-proponer': () => { const antes = JSON.stringify(S); const r = proponerSemana(S.ui.semOff || 0);
    if (r === -1) { toast(`Ya tienes planificadas tus ${S.obj.horas} h de esta semana`); return; }
    if (!r) { S = JSON.parse(antes); toast('No quedan días de estudio en esta semana. Cámbialos en Ajustes.'); return; }
    PILA.push(antes); save(); refresh(); toast(`${plural(r, 'bloque propuesto', 'bloques propuestos')}. Cámbialos como quieras.`, true); },
  'ag-reajustar': () => { let k = 0; commit(() => { k = reajustar(); }); toast(`${plural(k, 'bloque movido', 'bloques movidos')} a los próximos días`, true); },
  'ag-empezar': x => { const b = S.agenda.find(y => y.id === x); if (!b) return;
    if (b.k === 'simulacro') { ACC['sim-tema'](b.n); return; }
    const pe = S.aj.est || {}, blq = pe.m === 'bloques' ? { b: pe.b, p: pe.p, n: Math.max(1, Math.round(b.min / pe.b)) } : null;
    SES = { n: b.n, ini: Date.now(), pausas: 0, pausado: null, dur: blq ? blq.n * blq.b : b.min, apuntes: [], bloque: b.id, blq }; saveSes(); go('sesion', {}, 'fade'); },
  'fb-k': x => { leerFB(); FB.k = x; repintarHoja(htmlBloque()); },
  'fb-min': x => { leerFB(); FB.min = +x; repintarHoja(htmlBloque()); },
  'fb-rep': (x, b) => { FB.rep = !FB.rep; b.classList.toggle('on', FB.rep); },
  'fb-ok': () => { leerFB(); const f = FB; if (!f.f) { toast('Elige el día'); return; } cerrarHoja();
    commit(() => { const d = { f: f.f, h: f.h, min: f.min, n: f.n, ap: f.ap, k: f.k };
      if (f.id) Object.assign(S.agenda.find(b => b.id === f.id), d);
      else { const rep = f.rep ? uid() : null; for (let i = 0; i < (f.rep ? 8 : 1); i++) S.agenda.push(Object.assign({ id: uid(), hecho: false, rep }, d, { f: addDays(f.f, 7 * i) })); } }, f.id ? 'Bloque guardado' : f.rep ? 'Bloque añadido durante 8 semanas' : 'Bloque añadido'); },
  'fb-del': () => { const id = FB.id; cerrarHoja(); commit(() => { S.agenda = S.agenda.filter(b => b.id !== id); }, 'Bloque borrado', true); },
  'fb-hecho': () => { const id = FB.id; cerrarHoja(); commit(() => { const b = S.agenda.find(y => y.id === id); b.hecho = !b.hecho; }); },

  /* estudiar */
  'estudiar': x => abrirEstudiar(x ? +x : null),
  'est-tema': x => { EST_N = +x; repintarHoja(htmlEstudiar()); },
  'est-dur': x => { EST_D = +x; repintarHoja(htmlEstudiar()); },
  'est-ok': () => { const sel = $('#est-sel'); if (sel && sel.value) EST_N = +sel.value; if (!EST_N) { toast('Elige un tema'); return; }
    S.aj.est = { m: EST_M, b: EST_B, p: EST_P, n: EST_NB, d: EST_D }; save();
    SES = { n: EST_N, ini: Date.now(), pausas: 0, pausado: null, dur: EST_M === 'bloques' ? EST_NB * EST_B : EST_D, apuntes: [], blq: EST_M === 'bloques' ? { b: EST_B, p: EST_P, n: EST_NB } : null }; saveSes(); cerrarHoja(); go('sesion', {}, 'fade'); },
  'ses-saltar': () => { const f = faseSes(); if (f && f.tipo === 'pausa') { SES.salto = (SES.salto || 0) + f.rest + 50; saveSes(); } },
  'ses-mas5': () => { const f = faseSes(); if (!f || f.tipo !== 'pausa') return; SES.ext = SES.ext || {}; SES.ext[f.i] = (SES.ext[f.i] || 0) + 5 * 6e4; saveSes(); toast('5 minutos más de descanso'); },
  'ses-otro': () => { const f = faseSes(); if (!f || f.tipo !== 'fin') return; const e = sesMs(); SES.ext = SES.ext || {}; SES.ext[f.i] = (e - f.fin) - SES.blq.p * 6e4; SES.blq.n++; SES.fase = null; saveSes(); refresh(); },
  'est-modo': x => { EST_M = x; repintarHoja(htmlEstudiar()); },
  'est-b': x => { EST_B = +x; repintarHoja(htmlEstudiar()); },
  'est-p': x => { EST_P = +x; repintarHoja(htmlEstudiar()); },
  'est-n': x => { EST_NB = Math.max(1, Math.min(8, EST_NB + +x)); repintarHoja(htmlEstudiar()); },
  'ses-pausa': () => { if (SES.pausado) { SES.pausas += Date.now() - SES.pausado; SES.pausado = null; } else SES.pausado = Date.now(); saveSes(); refresh(); },
  'ses-fin': () => { const min = minEstudiados(), s = SES;
    commit(() => { S.sesiones.push({ ts: s.ini, n: s.n, min }); const t = tema(s.n); t.min = (t.min || 0) + min; t.ult = hoy(); if (t.e === 0) cambiarEstado(s.n, 1);
      const b = s.bloque ? S.agenda.find(y => y.id === s.bloque) : null; if (b) { b.hecho = true; if (b.ap) marcarApartado(s.n, b.ap); } else marcarBloque(s.n, 'estudiar'); });
    FINS = { n: s.n, min, conf: null, apuntes: s.apuntes || [] }; SES = null; saveSes(); go('fin-sesion', {}, 'fade'); },
  'apunta': x => { APK = x; hoja(`<h2>${x === 'flaq' ? 'Nueva flaqueza' : x === 'tarjeta' ? 'Nueva tarjeta' : 'Para saber de memoria'}</h2><div class="sub">Tema ${SES.n}. Lo guardo y sigues estudiando.</div>
      ${x === 'tarjeta' ? '<div class="lab">Pregunta</div><input class="inp" id="ap-q"><div class="lab">Respuesta</div><textarea class="inp" id="ap-a" style="min-height:80px"></textarea>' : `<input class="inp" id="ap-txt" style="margin-top:12px" placeholder="${x === 'flaq' ? 'Lo que se te atasca' : 'Fórmula, fecha, autor…'}" enterkeyhint="done">`}
      <div style="height:12px"></div>${btn('Guardar', 'ap-ok')}`, () => setTimeout(() => { const i = $('#ap-txt') || $('#ap-q'); if (i) i.focus({ preventScroll: true }); }, 350)); },
  'ap-ok': () => {
    const n = SES.n; let t = '';
    if (APK === 'tarjeta') { const q = val('ap-q'), a = val('ap-a'); if (!q) return; t = q; S.tarjetas.push({ id: uid(), tema: n, tipo: 'girar', q, a, prox: hoy(), int: 0, ease: 2.5 }); tocado(n, 'tarjetas'); }
    else { t = val('ap-txt'); if (!t) return; if (APK === 'flaq') { tema(n).flaq.push({ id: uid(), txt: t, e: 0, ts: Date.now() }); tocado(n, 'flaq'); } else { tema(n).cosas.push({ id: uid(), txt: t }); tocado(n, 'cosas'); } }
    SES.apuntes.push({ k: APK, t }); saveSes(); save(); cerrarHoja(); toast('Apuntado');
  },
  'fses-conf': x => { FINS.conf = +x; refresh(); },
  'fses-est': x => { commit(() => cambiarEstado(FINS.n, +x)); },
  'fses-ok': () => { if (FINS.conf) commit(() => programar(FINS.n, FINS.conf)); FINS = null; go('hoy', {}, 'tab'); },

  /* temario y ficha */
  'abrir-tema': x => { const n = +x; cerrarHoja(); if (fichaN() !== n) { FTAB = 'flaq'; FRES = false; FARCH = false; } if (ancho()) { const otro = TSEL !== n; TSEL = n; if (ACT === 'temario') { P = { n }; refresh(); const cr = $('.split .colR'); if (otro && cr) cr.scrollTop = 0; } else go('temario', { n }, 'tab'); } else go('tema', { n }); },
  't-modo': x => { S.ui.tmodo = x; save(); refresh(); },
  't-fil': x => { S.ui.tfil = x; save(); refresh(); },
  't-ver': x => { S.ui.tver = x; save(); refresh(); },
  't-buscar': () => { TBUSCAR = !TBUSCAR; if (!TBUSCAR) TBUS = ''; refresh(); },
  't-blq': x => { TOPEN[x] = !TOPEN[x]; refresh(); },
  'f-est': (x, b) => { const n = b.dataset.n ? +b.dataset.n : fichaN(); cerrarHoja(); commit(() => cambiarEstado(n, +x), `Tema ${n}: ${NOMS[+x].toLowerCase()}`); animTile('.fhead .tl'); },
  'f-mio': x => commit(() => { tema(+x).mio = !tema(+x).mio; }),
  'f-vuelta': (x, b) => { const n = +b.dataset.n, d = +x, t0 = tema(n); if (d < 0 && !t0.v) return;
    commit(() => { const t = tema(n); t.v = Math.max(0, (t.v || 0) + d); if (d > 0) { t.vts = hoy(); t.ult = hoy(); } else if (!t.v) t.vts = null; },
      d > 0 ? `Tema ${n}: vuelta ${(t0.v || 0) + 1} cerrada` : `Tema ${n}: ${t0.v - 1 ? 'vuelves a ' + plural(t0.v - 1, 'vuelta', 'vueltas') : 'sin vueltas'}`); animTile('.fhead .tl'); },
  'f-tab': x => { FTAB = x; refresh(); },
  'flaq-add': () => { const v = val('nf'), n = fichaN(); if (!v) return; commit(() => { tema(n).flaq.push({ id: uid(), txt: v, e: 0, ts: Date.now() }); tocado(n, 'flaq'); }); setTimeout(() => { const i = $('#nf'); if (i) i.focus({ preventScroll: true }); }, 30); },
  'flaq-e': x => { const n = fichaN(); let e = 0; commit(() => { const f = tema(n).flaq.find(y => y.id === x); f.e = Math.min(2, (f.e || 0) + 1); e = f.e; if (e === 2) f.res = Date.now(); tocado(n, 'flaq'); }, null);
    if (e === 2) toast('Resuelta. La tienes en «Resueltas».', true); },
  'flaq-reab': x => { const n = fichaN(); commit(() => { const f = tema(n).flaq.find(y => y.id === x); f.e = 0; delete f.res; tocado(n, 'flaq'); }, 'Vuelve a estar pendiente', true); },
  'flaq-res': () => { FRES = !FRES; refresh(); const c = $('.resu'); if (c && FRES) animar(c, v => ({ opacity: Math.min(1, v * 1.5), transform: `translateY(${(1 - v) * -8}px)` }), { w: 13, z: 8 }); },
  'flaq-del': x => { const n = fichaN(); commit(() => { tema(n).flaq = tema(n).flaq.filter(y => y.id !== x); tocado(n, 'flaq'); }, 'Flaqueza borrada', true); },
  'cosa-add': () => { const v = val('nc'), n = fichaN(); if (!v) return; commit(() => { tema(n).cosas.push({ id: uid(), txt: v }); tocado(n, 'cosas'); }); setTimeout(() => { const i = $('#nc'); if (i) i.focus({ preventScroll: true }); }, 30); },
  'cosa-del': x => { const n = fichaN(); commit(() => { tema(n).cosas = tema(n).cosas.filter(y => y.id !== x); tocado(n, 'cosas'); }, 'Borrada', true); },
  'cosa-tarj': x => { const n = fichaN(), c = tema(n).cosas.find(y => y.id === x); if (!c) return; abrirTarjeta(null, n, { tipo: 'huecos', q: c.txt, cosa: c.id }); },
  'enl-add': () => { let v = val('ne'), n = fichaN(); if (!v) return; if (!/^https?:\/\//.test(v)) v = 'https://' + v; commit(() => { tema(n).enlaces.push({ id: uid(), url: v, t: v.replace(/^https?:\/\/(www\.)?/, '').slice(0, 60) }); tocado(n, 'notas'); }); },
  'enl-del': x => { const n = fichaN(); commit(() => { tema(n).enlaces = tema(n).enlaces.filter(y => y.id !== x); tocado(n, 'notas'); }, 'Enlace borrado', true); },

  /* índice */
  'ix-modo': x => { const n = fichaN(); commit(() => { tema(n).ix.modo = x; tocado(n, 'indice'); }); },
  'ix-e': x => { const n = fichaN(); commit(() => { const ix = tema(n).ix; if (x[0] === 'o' && /^o\d+$/.test(x)) { const i = +x.slice(1); ix.ori[i] = ((ix.ori[i] || 0) + 1) % 3; } else { const a = ix.per.find(y => y.id === x); if (a) a.e = ((a.e || 0) + 1) % 3; } tocado(n, 'indice'); }); },
  'ix-copiar': () => { const n = fichaN(), o = indiceOrientativo(n) || []; commit(() => { const ix = tema(n).ix; if (!ix.per.length) ix.per = o.map((t, i) => ({ id: uid(), t, sub: false, e: ix.ori[i] || 0 })); else o.forEach((t, i) => ix.per.push({ id: uid(), t, sub: false, e: ix.ori[i] || 0 })); ix.modo = 'per'; tocado(n, 'indice'); }, 'Copiado a tu índice personalizado', true); },
  'ix-sub': () => { IXSUB = !IXSUB; const v = val('nix'); refresh(); const i = $('#nix'); if (i) { i.value = v; i.focus({ preventScroll: true }); } },
  'ix-add': () => { const v = val('nix'), n = fichaN(); if (!v) return; commit(() => { tema(n).ix.per.push({ id: uid(), t: v, sub: IXSUB, e: 0 }); tocado(n, 'indice'); }); setTimeout(() => { const i = $('#nix'); if (i) i.focus({ preventScroll: true }); }, 30); },
  'ix-editar': x => { const a = tema(fichaN()).ix.per.find(y => y.id === x); if (!a) return; FIX = Object.assign({}, a);
    hoja(`<h2>Apartado</h2><div class="lab">Texto</div><input class="inp" id="ixe-t" value="${esc(a.t)}" enterkeyhint="done"><label class="row tgrow"><div class="grow"><b>Es un subapartado</b><small>Va dentro del apartado de arriba</small></div><button class="tgl ${a.sub ? 'on' : ''}" data-a="ixe-sub"><i></i></button></label>
      <div style="height:14px"></div>${btn('Guardar', 'ixe-ok')}<button class="link del" data-a="ixe-del">Borrar el apartado</button>`); },
  'ixe-sub': (x, b) => { FIX.sub = !FIX.sub; b.classList.toggle('on', FIX.sub); },
  'ixe-ok': () => { const n = fichaN(), t = val('ixe-t'), f = FIX; if (!t) return; cerrarHoja(); commit(() => { Object.assign(tema(n).ix.per.find(y => y.id === f.id), { t, sub: f.sub }); tocado(n, 'indice'); }); },
  'ixe-del': () => { const n = fichaN(), id = FIX.id; cerrarHoja(); commit(() => { tema(n).ix.per = tema(n).ix.per.filter(y => y.id !== id); tocado(n, 'indice'); }, 'Apartado borrado', true); },

  /* compartir por secciones */
  'sec-comp': (x, b) => { const n = +b.dataset.n || fichaN();
    if (S.grupos.length > 1) { abrirGruposSec(n, x); return; }
    const on = gruposDe(n, x).length > 0; ponerGruposSec(n, x, on ? [] : [S.grupos[0].id]); save(); clearTimeout(PT); PT = setTimeout(enviarPend, 800);
    if (hojaAbierta()) abrirCompartir(n); refresh(); toast(on ? 'Ya no se comparte' : `Compartido con ${S.grupos[0].nombre}`); },
  'fcg-g': x => { FCG.ids = FCG.ids.includes(x) ? FCG.ids.filter(y => y !== x) : FCG.ids.concat(x); abrirGruposSecPintar(); },
  'fcg-ok': () => { const f = FCG; cerrarHoja(); ponerGruposSec(f.n, f.sec, f.ids); save(); refresh(); clearTimeout(PT); PT = setTimeout(enviarPend, 800); toast(f.ids.length ? 'Compartido' : 'Ya no se comparte'); },
  'compartir': x => abrirCompartir(+x),

  /* tarjetas */
  'nueva-tarjeta': x => abrirTarjeta(null, x ? +x : null),
  'editar-tarjeta': x => abrirTarjeta(x),
  'ft-tipo': x => { leerFT(); if (x === 'huecos' && FT.tipo !== 'huecos') { const h = deCorchetes(FT.plano); FT.plano = h.plano; FT.hid = h.hid; } FT.tipo = x; repintarHoja(htmlTarjeta()); },
  'ft-pal': x => { const i = +x; FT.hid = FT.hid.includes(i) ? FT.hid.filter(y => y !== i) : FT.hid.concat(i); const b = $(`[data-a="ft-pal"][data-x="${i}"]`); if (b) { b.classList.toggle('on', FT.hid.includes(i)); animar(b, v => ({ transform: `scale(${.85 + .15 * v})` }), { w: 16, z: 8 }); } },
  'ft-ok': () => {
    leerFT(); const q = FT.q.trim(), a = FT.a.trim(), n = FT.tema, f = FT; if (!q) { toast(f.tipo === 'huecos' ? 'Escribe el texto' : 'Escribe la pregunta'); return; }
    if (f.tipo === 'huecos' && !/\[[^\]]+\]/.test(q)) { toast('Toca al menos una palabra para esconderla'); return; }
    cerrarHoja(); let nid = null;
    commit(() => { if (f.id) { const c = S.tarjetas.find(k => k.id === f.id), viejo = c.tema; Object.assign(c, { q, a, tema: n, tipo: f.tipo }); if (viejo !== n) tocado(viejo, 'tarjetas'); }
      else { nid = uid(); S.tarjetas.push({ id: nid, tema: n, tipo: f.tipo, q, a, prox: hoy(), int: 0, ease: 2.5 }); if (f.cosa) { const c = tema(n).cosas.find(y => y.id === f.cosa); if (c) c.card = nid; } }
      tocado(n, 'tarjetas'); }, f.id ? 'Tarjeta guardada' : 'Tarjeta creada');
  },
  'ft-arch': () => { const id = FT.id; cerrarHoja(); let ar = false; commit(() => { const c = S.tarjetas.find(k => k.id === id); c.arch = !c.arch; ar = c.arch; tocado(c.tema, 'tarjetas'); }, null); toast(ar ? 'Archivada. No saldrá en los repasos.' : 'Desarchivada', true); },
  'ft-desarch': x => commit(() => { const c = S.tarjetas.find(k => k.id === x); c.arch = false; tocado(c.tema, 'tarjetas'); }, 'Desarchivada', true),
  'tarj-arch': () => { FARCH = !FARCH; refresh(); },
  'ft-del': () => { const id = FT.id; cerrarHoja(); commit(() => { const c = S.tarjetas.find(k => k.id === id); S.tarjetas = S.tarjetas.filter(k => k.id !== id); if (c) tocado(c.tema, 'tarjetas'); }, 'Tarjeta borrada', true); },
  'repasar': x => { const n = x ? +x : null; const xs = (n ? S.tarjetas.filter(c => c.tema === n) : tarjetasHoy()).filter(c => !c.arch); const hoyN = xs.filter(c => !c.prox || c.prox <= hoy());
    const lista = (hoyN.length ? hoyN : xs).slice(0, 40); if (!lista.length) { toast('No hay tarjetas que repasar'); return; } repasoCon(lista); },
  'rp-ver': () => { const c = S.tarjetas.find(y => y.id === RP.cola[RP.i]); RP.vuelta = true; const f = $('.flip'), b = $('.btn[data-a="rp-ver"]');
    if (!f || !b || !c) { refresh(); return; } f.dataset.a = ''; void f.offsetWidth; f.classList.add('on'); b.outerHTML = cuatro(c); subirBotones(); },
  'rp-comp': () => { const e = $('#rp-esc'); if (e) RP.esc = e.value; const hs = $$('.hin'); if (hs.length) RP.resp = hs.map(i => i.value); RP.vuelta = true; refresh();
    $$('.hueco').forEach((h, i) => animar(h, v => ({ transform: `scale(${.8 + .2 * v})` }), { w: 15, z: 7, delay: i * 70 })); subirBotones(); },
  'rp-nota': x => { const c = S.tarjetas.find(y => y.id === RP.cola[RP.i]); if (c) { notaTarjeta(c, +x); if (+x === 0) RP.cola.push(c.id); save(); } RP.hechas++; RP.i++; RP.vuelta = false; RP.esc = ''; RP.resp = []; pintar('push'); },

  /* simulacro */
  'sim-tema': x => { SORT = { bolas: [+x], vistas: 1, fase: 'listo', sel: +x }; ACC['examen-ir'](); },
  'sortear': () => sortear(),
  'solo': () => { S.ui.solo = !S.ui.solo; save(); refresh(); },
  'elegir-bola': x => { if (!x) return; SORT.sel = +x; refresh(); const b = $$('#balls .bl.sel')[0]; if (b) animar(b, v => ({ transform: `scale(${.8 + .2 * v})` }), { w: 15, z: 6 }); },
  'examen-ir': () => { if (!SORT || !SORT.sel) return; SIM = { tema: SORT.sel, bolas: SORT.bolas, ini: Date.now(), pausas: 0, pausado: null, min: S.conv.minTema }; saveSim(); go('examen', {}, 'fade'); },
  'ex-pausa': () => { if (SIM.pausado) { SIM.pausas += Date.now() - SIM.pausado; SIM.pausado = null; } else SIM.pausado = Date.now(); saveSim(); refresh(); },
  'ex-fin': () => { const min = Math.max(1, Math.round(simMs() / 6e4)); EV = { tema: SIM.tema, bolas: SIM.bolas, min, pts: S.rubrica.map(() => null), olv: [], fotos: [] }; SIM = null; saveSim(); go('evaluar', {}, 'fade'); },
  'ev-pt': (x, b) => { EV.pts[+b.dataset.k] = +x; $$(`[data-a="ev-pt"][data-k="${b.dataset.k}"]`).forEach(y => y.classList.toggle('on', y === b));
    if (EV.pts.every(v => v != null)) { $('#ev-nota').textContent = nota1(notaRub()); $('[data-a="ev-ok"]').classList.remove('off'); animTile('#ev-nota'); } },
  'ev-olv-add': () => { const v = val('ev-olv'); if (!v) return; EV.olv.push(v); refresh(); setTimeout(() => { const i = $('#ev-olv'); if (i) i.focus({ preventScroll: true }); }, 30); },
  'ev-olv-del': x => { EV.olv.splice(+x, 1); refresh(); },
  'ev-ok': () => { if (!EV.pts.every(v => v != null)) { toast('Puntúa todos los criterios'); return; }
    const nota = notaRub(), e = EV, id = uid(), conf = nota >= 8 ? 5 : nota >= 6.5 ? 4 : nota >= 5 ? 3 : nota >= 3 ? 2 : 1;
    commit(() => { S.sims.push({ id, ts: Date.now(), tema: e.tema, bolas: e.bolas, min: e.min, pts: e.pts, nota, olv: e.olv, fotos: e.fotos || [], rub: S.rubrica.map(c => Object.assign({}, c)) }); const t = tema(e.tema);
      e.olv.forEach(o => t.flaq.push({ id: uid(), txt: o, e: 0, ts: Date.now() })); if (e.olv.length) tocado(e.tema, 'flaq'); programar(e.tema, conf); if (t.e < 1) cambiarEstado(e.tema, 1); marcarBloque(e.tema, 'simulacro'); });
    RES = { id, tema: e.tema, nota, olv: e.olv.length }; EV = null; go('resultado', {}, 'fade'); },
  'res-est': x => commit(() => cambiarEstado(RES.tema, +x), `Tema ${RES.tema}: ${NOMS[+x].toLowerCase()}`),
  'res-ok': () => { RES = null; go('simulacro', {}, 'tab'); },
  'ver-sim': x => go('sim', { id: x }),
  'foto-ver': async x => { if (x.startsWith('g:')) { const id = x.split(':')[2]; if (GFOTO[id]) hoja(`<img class="fotov" src="${GFOTO[id]}" alt="">`); return; }
    try { const b = await IDB.get(x); if (b) abrirBlob(b, 'image/jpeg', 'Hoja del examen'); } catch (e) {} },
  'corr-pedir': x => { if (!S.grupos.length) { toast('Únete a un grupo para pedir correcciones'); return; } abrirPedirCorr(x); },
  'pc-para': x => { FPC.para = x; FPC.pintar(); },
  'pc-ok': async () => {
    const f = FPC, s = S.sims.find(x => x.id === f.simId), g = grupoPorId(f.g), p = personasDe(g).find(x => x.id === f.para); if (!s || !g || !p) return;
    cerrarHoja(); toast('Subiendo las fotos…');
    try { const ids = [];
      for (const fid of s.fotos || []) { const b = await IDB.get(fid); if (!b) continue; const j = await api(g.url, g.clave, 'g-subir', { meta: { tipo: 'corr', titulo: `Simulacro tema ${s.tema}` }, nombre: fid + '.jpg', mime: 'image/jpeg', datos: await blobA64(b) }); ids.push(j.id); }
      await api(g.url, g.clave, 'g-corr-pedir', { corr: { id: uid(), simId: s.id, tema: s.tema, paraId: p.id, paraNombre: p.nombre, fotos: ids, rub: s.rub || S.rubrica } });
      s.corrPed = { nombre: p.nombre, ts: Date.now(), gid: g.id }; save(); refresh(); toast(`Enviado a ${p.nombre}`); cargarGrupo(true, g);
    } catch (e) { toast('No he podido enviarlo. Revisa la conexión y que el script esté actualizado.'); } },
  'corr-abrir': x => go('corregir', { g: grupoAct().id, id: x }),
  'corr-pt': (x, b) => { CORR.com = val('corr-com'); CORR.pts[+b.dataset.k] = +x; refresh(); },
  'corr-enviar': async () => { CORR.com = val('corr-com'); const g = grupoPorId(CORR.g), c = ((g.cache || {}).corr || []).find(x => x.id === CORR.id), rub = c.rub || S.rubrica;
    const nota = rub.reduce((a, k, i) => a + k.p * CORR.pts[i] / 4, 0) / 10;
    try { await api(g.url, g.clave, 'g-corr-enviar', { id: CORR.id, pts: CORR.pts, nota, com: CORR.com }); toast('Corrección enviada'); CORR = null; await cargarGrupo(true, g); atras(); }
    catch (e) { toast('No he podido enviarla. Inténtalo otra vez.'); } },

  /* exámenes anteriores */
  'exa-subir': x => abrirSubirExamen(x),
  'exa-ok': async () => {
    const fs = Array.from(($('#fx-f') || {}).files || []); if (!fs.length) { toast('Elige un PDF o fotos'); return; }
    const anio = val('fx-a') || String(new Date().getFullYear()), parte = ($('#fx-p') || {}).value || PARTES[0], titulo = val('fx-t'), gid = $('#fx-g') ? $('#fx-g').value : '';
    const g = grupoPorId(gid); cerrarHoja(); toast('Subiendo…');
    let ok = 0;
    for (const [i, f] of fs.entries()) {
      try { const esImg = /^image/.test(f.type), b = esImg ? await reducirFoto(f, 2000, .8) : f, mime = esImg ? 'image/jpeg' : (f.type || 'application/pdf');
        if (b.size > 20e6) { toast(`«${f.name}» pasa de 20 MB`); continue; }
        const t = (titulo || f.name.replace(/\.[^.]+$/, '')) + (fs.length > 1 && titulo ? ` (${i + 1})` : '');
        if (g) await api(g.url, g.clave, 'g-subir', { meta: { tipo: 'exa', anio, parte, titulo: t }, nombre: f.name, mime, datos: await blobA64(b) });
        else { const id = uid(); await IDB.put('x.' + id, b); S.examenes.push({ id, anio, parte, titulo: t, mime, tam: b.size, ts: Date.now(), autor: S.yo.nombre }); save(); }
        ok++; } catch (e) { toast('No he podido subir «' + f.name + '»'); } }
    if (g) await cargarGrupo(true, g);
    if (ok) { toast(ok === 1 ? 'Subido' : `${ok} archivos subidos`); go('examenes', { anio }); } },
  'exa-abrir': async (x, b) => { const gid = b.dataset.g;
    try { if (!gid) { const e = S.examenes.find(y => y.id === x), bl = await IDB.get('x.' + x); if (bl) abrirBlob(bl, e.mime, e.titulo); else toast('Este archivo no está en este dispositivo'); return; }
      const g = grupoPorId(gid); toast('Descargando…'); const j = await api(g.url, g.clave, 'g-archivo', { id: x }); abrirBlob(b64ABlob(j.datos, j.mime), j.mime, j.titulo); }
    catch (e) { toast('No he podido abrirlo'); } },
  'exa-borrar': async (x, b) => { const gid = b.dataset.g;
    if (b.dataset.c !== '1') { b.dataset.c = '1'; b.classList.add('conf'); toast('Toca otra vez la papelera para borrarlo'); return; }
    if (!gid) { await IDB.del('x.' + x); S.examenes = S.examenes.filter(y => y.id !== x); save(); refresh(); toast('Borrado'); return; }
    try { const g = grupoPorId(gid); await api(g.url, g.clave, 'g-borrar-archivo', { id: x }); await cargarGrupo(true, g); toast('Borrado del Drive del grupo'); } catch (e) { toast('No he podido borrarlo'); } },

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

  /* convocatoria */
  'cv-fecha': x => abrirFechaConv(x || null),
  'cv-ok': () => { const f = FCV, fe = ($('#cv-f') || {}).value || ''; cerrarHoja();
    commit(() => { if (f.id === 'examen') { if (fe) S.conv.fecha = fe; } else if (f.id) Object.assign(S.conv.fechas.find(y => y.id === f.id), { t: val('cv-t') || f.t, f: fe }); else S.conv.fechas.push({ id: uid(), t: val('cv-t') || 'Fecha', f: fe }); pushConv(); }, 'Fecha guardada'); },
  'cv-del': () => { const id = FCV.id; cerrarHoja(); commit(() => { S.conv.fechas = S.conv.fechas.filter(y => y.id !== id); pushConv(); }, 'Fecha quitada', true); },
  'cv-enl-add': () => { let v = val('cv-enl'); if (!v) return; if (!/^https?:\/\//.test(v)) v = 'https://' + v; commit(() => { S.conv.enlaces.push({ id: uid(), url: v, t: v.replace(/^https?:\/\/(www\.)?/, '').slice(0, 60) }); pushConv(); }); },
  'cv-enl-del': x => commit(() => { S.conv.enlaces = S.conv.enlaces.filter(y => y.id !== x); pushConv(); }, 'Enlace quitado', true),

  /* grupos */
  'g-unirme': () => { const v = val('g-link'), m = v.match(/#unirse=([A-Za-z0-9+/_-]+)/); if (!m) { toast('Ese enlace no parece una invitación de Ruta 71'); return; } JOIN = leerInvitacion(m[1]); if (!JOIN) { toast('El enlace está incompleto'); return; } pedirUnirse(); },
  'g-join-ok': async () => { const nombre = val('gj-n'); if (!nombre) { toast('Escribe tu nombre'); return; } S.yo.nombre = nombre;
    try { await api(JOIN.u, JOIN.c, 'g-leer'); let g = S.grupos.find(x => x.url === JOIN.u);
      if (!g) { g = { id: uid(), url: JOIN.u, clave: JOIN.c, nombre: JOIN.g || 'Grupo', compartir: true, todo: false, cache: null, ult: null }; S.grupos.push(g); }
      S.ui.gsel = g.id; S.ui.gfT = S.ui.gfK = S.ui.gfP = ''; JOIN = null; save(); cerrarHoja(); toast(`Ya estás en «${g.nombre}»`); go('grupo', {}, 'tab'); cargarGrupo(false, g); }
    catch (e) { toast('No he podido entrar. Pide a quien creó el grupo que revise el enlace.'); } },
  'g-nuevo': () => { GNUEVO = true; refresh(); setTimeout(() => { const i = $('#gc-n'); if (i) i.focus(); }, 60); },
  'g-crear': async () => { const u = val('gc-u'), c = val('gc-c'), n = val('gc-n') || 'Grupo'; if (!/^https:\/\/script\.google\.com\//.test(u)) { toast('La URL tiene que ser la del script (empieza por https://script.google.com/)'); return; }
    try { await api(u, c, 'g-leer'); const g = { id: uid(), url: u, clave: c, nombre: n, compartir: true, todo: false, cache: null, ult: null }; S.grupos.push(g); S.ui.gsel = g.id; GNUEVO = false; save(); refresh();
      copiarTexto(invitacion(g), 'Grupo creado. Enlace de invitación copiado: mándaselo a tus compañeros.'); cargarGrupo(true, g); }
    catch (e) { toast('No responde. Revisa la URL, la clave y que el script esté implementado para «Cualquier usuario».'); } },
  'g-invitar': x => copiarTexto(invitacion(grupoPorId(x) || grupoAct()), 'Enlace de invitación copiado'),
  'g-ajustes': x => abrirAjustesGrupo(x || (grupoAct() || {}).id),
  'g-salir': (x, b) => { if (b.dataset.c !== '1') { b.dataset.c = '1'; b.innerHTML = '<span>Toca otra vez para salir del grupo</span>'; return; }
    const g = grupoPorId(x); if (!g) return; api(g.url, g.clave, 'g-progreso', { quitar: true }).catch(() => {}); cerrarHoja();
    S.grupos = S.grupos.filter(y => y.id !== g.id); Object.values(S.temas).forEach(t => { Object.keys(t.comp || {}).forEach(k => t.comp[k] = t.comp[k].filter(id => id !== g.id)); });
    S.ui.gsel = S.grupos[0] ? S.grupos[0].id : null; save(); refresh(); toast(`Has salido de «${g.nombre}». Lo que compartiste sigue allí: bórralo antes si quieres.`); },
  'g-comp': x => { const g = grupoPorId(x) || grupoAct(); g.compartir = !g.compartir; save(); if (hojaAbierta()) abrirAjustesGrupo(g.id); else refresh();
    api(g.url, g.clave, 'g-progreso', g.compartir ? { prog: miProgreso() } : { quitar: true }).then(() => cargarGrupo(true, g)).catch(() => {}); },
  'g-todo': x => { const g = grupoPorId(x); if (!g) return; g.todo = !g.todo; save(); abrirAjustesGrupo(g.id);
    if (g.todo) { todasLasSecciones(g.id); toast(`Compartes todo con «${g.nombre}»`); }
    else { S.pendComp = S.pendComp || {}; S.temario.forEach(t => ['cosas', 'tarjetas', 'notas', 'indice'].forEach(sec => { if (S.temas[t.n]) S.pendComp[t.n + '|' + sec] = 1; })); save(); enviarPend(); toast('Solo se comparte lo que actives sección a sección'); } },
  'g-tab': x => { S.ui.gtab = x; save(); refresh(); },
  'g-mat': (x, b) => go('material', { id: x, g: b.dataset.g || (grupoAct() || {}).id }),
  'g-recargar': () => { toast('Actualizando…'); cargarGrupo(false); },
  'g-util': async x => { const g = grupoPorId(P.g) || grupoAct(); try { await api(g.url, g.clave, 'g-util', { id: x }); await cargarGrupo(true, g); } catch (e) { toast('No he podido conectar'); } },
  'g-borrar': async x => { const g = grupoPorId(P.g) || grupoAct();
    const m = x.match(/^(.+)\.(\d+)\.(\w+)$/); if (m && m[1] === S.yo.id) { const n = +m[2], sec = m[3]; ponerGruposSec(n, sec, gruposDe(n, sec).filter(id => id !== g.id)); delete S.pendComp[n + '|' + sec]; save(); }
    try { await api(g.url, g.clave, 'g-borrar', { id: x }); toast('Ya no se comparte'); await cargarGrupo(true, g); atras(); } catch (e) { toast('No he podido quitarlo'); } },
  'g-copiar': (x, b) => { const g = grupoPorId(b.dataset.g) || grupoPorId(P.g) || grupoAct(), m = ((g && g.cache || {}).mat || []).find(y => y.id === x); if (!m) return;
    let msg = ''; commit(() => { msg = copiarMaterial(m); S.copias[m.id] = m.ts; }, null); toast(msg, true); },
  'g-res': async () => { const n = +($('#g-res') || {}).value; try { await gapi('g-reservar', { tema: n, estado: 'en proceso' }); toast(`Te has pedido el tema ${n}`); cargarGrupo(true); } catch (e) { toast('No he podido conectar'); } },
  'g-res-ok': async x => { const r = ((grupoAct().cache || {}).res || []).find(y => y.tema === +x && y.id === S.yo.id); try { await gapi('g-reservar', { tema: +x, estado: r && r.estado === 'hecho' ? null : 'hecho' }); cargarGrupo(true); } catch (e) { toast('No he podido conectar'); } },

  /* imprimir */
  'imprimir': x => abrirImprimir(x ? +x : null),
  'imp-op': x => { IMP = x; pintarImprimir(); },
  'imp-ok': () => imprimir(IMP, IMPN),
  'imprimir-sim': x => imprimir('sim', x),
  'pdf-compartir': () => { if (!PDF_HECHO) return; navigator.share({ files: [PDF_HECHO.f], title: PDF_HECHO.f.name }).catch(() => {}); },
  'pdf-abrir': () => { if (!PDF_HECHO) return; const a = document.createElement('a'); a.href = PDF_HECHO.url; a.download = PDF_HECHO.f.name; a.target = '_blank'; a.rel = 'noopener'; document.body.appendChild(a); a.click(); a.remove(); },
  'pdf-navegador': () => { if (IMP_ULT) imprimirNavegador(IMP_ULT[0], IMP_ULT[1]); },

  /* progreso y ajustes */
  'p-tab': x => { S.ui.ptab = x; save(); refresh(); },
  'stp': (x, b) => { const k = b.dataset.k, d = +x;
    if (k === 'bolas') S.conv.bolas = Math.max(1, Math.min(10, S.conv.bolas + d));
    if (k === 'minTema') S.conv.minTema = Math.max(15, Math.min(300, S.conv.minTema + d * 15));
    if (k === 'objT') S.obj.temas = Math.max(1, Math.min(S.temario.length, S.obj.temas + d));
    if (k === 'objH') S.obj.horas = Math.max(1, Math.min(60, S.obj.horas + d));
    save(); refresh(); },
  'aj-dia': x => { const d = +x; S.aj.dias = S.aj.dias.includes(d) ? S.aj.dias.filter(y => y !== d) : S.aj.dias.concat(d); save(); refresh(); },
  'aprox': () => { S.conv.aprox = !S.conv.aprox; save(); pushConv(); refresh(); },
  'sonido': () => { S.aj.sonido = !S.aj.sonido; save(); refresh(); },
  'probar-sonido': () => { const s = S.aj.sonido; S.aj.sonido = true; sonar('fin'); S.aj.sonido = s; toast('Si no lo oyes, sube el volumen con los botones del lateral.'); },
  'tema-ap': x => { S.aj.tema = x; save(); aplicarTema(); refresh(); },
  'temario-cambiar': () => abrirTemario(),
  'tm-ok': () => { const t = parsearTemario(val('tm-txt')); if (t.length < 2) { toast('Pega al menos dos temas'); return; } cerrarHoja();
    commit(() => { S.temario = t; S.conv.bolas = bolasPorTemas(t.length); S.obj.temas = Math.min(S.obj.temas, t.length); S.ui.tblq = 'Todos'; }, `Temario cambiado: ${t.length} temas, ${bolasPorTemas(t.length)} bolas`, true); },
  'tm-tec': () => { cerrarHoja(); commit(() => { S.temario = temarioTec(); S.conv.bolas = 4; S.ui.tblq = 'Todos'; }, 'Temario de Tecnología cargado', true); },
  'rubrica': () => { RB = S.rubrica.map(c => Object.assign({}, c)); abrirRubrica(); },
  'rb-add': () => { leerRB(); RB.push({ t: 'Nuevo criterio', p: 0 }); S2 = S.rubrica; S.rubrica = RB; abrirRubrica(); S.rubrica = S2; },
  'rb-del': x => { leerRB(); RB.splice(+x, 1); S2 = S.rubrica; S.rubrica = RB; abrirRubrica(); S.rubrica = S2; },
  'rb-ok': () => { leerRB(); const sum = RB.reduce((a, c) => a + (+c.p || 0), 0); if (sum !== 100) { toast(`Los pesos suman ${sum} %. Tienen que sumar 100 %.`); return; } cerrarHoja();
    commit(() => { S.rubrica = RB.map(c => { const o = { t: c.t || 'Criterio', p: +c.p }; const v = RUBRICA_DEF().find(x => x.t === o.t); if (v) o.d = v.d; else if (c.d) o.d = c.d; return o; }); }, 'Rúbrica guardada'); },
  'rb-def': () => { cerrarHoja(); commit(() => { S.rubrica = RUBRICA_DEF(); }, 'Rúbrica de Navarra', true); },
  'guion': () => { GU = S.p2.guion.map(g => Object.assign({}, g)); abrirGuion(); },
  'gu-add': () => { leerGU(); GU.push({ t: 'Nueva parte', m: 5 }); const o = S.p2.guion; S.p2.guion = GU; abrirGuion(); S.p2.guion = o; },
  'gu-del': x => { leerGU(); GU.splice(+x, 1); const o = S.p2.guion; S.p2.guion = GU; abrirGuion(); S.p2.guion = o; },
  'gu-ok': () => { leerGU(); cerrarHoja(); commit(() => { S.p2.guion = GU.filter(g => g.t).map(g => ({ t: g.t, m: Math.max(1, +g.m || 1) })); }, 'Guion guardado'); },
  'cp-guardar': () => copiaGuardar(false), 'cp-rec': () => copiaRecuperar(),
  'sinc-on': () => { if (!S.copia.url || !S.copia.clave) { toast('Primero pega la URL y la clave de tu script'); return; } S.copia.sinc = !S.copia.sinc; save(true); $('#nav').innerHTML = navHtml(); pintarNav(); refresh();
    if (S.copia.sinc) sincronizar(true); else toast('Sincronización desactivada. Sigue la copia de siempre.'); },
  'sinc-ahora': () => sincronizar(true),
  'sinc-elegir': x => { const f = SINC.eleccion; SINC.eleccion = null; cerrarHoja(); if (f) f(x); },
  'exportar': () => { const blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'ruta71-' + hoy() + '.json'; document.body.appendChild(a); a.click(); a.remove(); toast('Archivo creado. Las fotos y los PDF se quedan en el dispositivo.'); },
  'borrar-todo': (x, b) => { if (b.dataset.c !== '1') { b.dataset.c = '1'; b.innerHTML = '<span>Toca otra vez para borrarlo todo</span>'; setTimeout(() => { if (b.isConnected) { b.dataset.c = ''; b.innerHTML = '<span>Borrar todo</span>'; } }, 3500); return; }
    commit(() => { const g = S.grupos, yo = S.yo, gs = S.ui.gsel; S = DEF(); S.grupos = g; S.yo = yo; S.ui.gsel = gs; S.onb = true; }, 'Todo borrado', true); }
});
let EST_M = 'seguido', EST_B = 25, EST_P = 5, EST_NB = 4;
let APK = null, EST_N = null, EST_D = 60, RB = [], S2 = null, GU = [], FIX = null;
const fichaN = () => ACT === 'tema' ? P.n : TSEL;
function abrirGruposSecPintar() { const f = FCG; $$('[data-a="fcg-g"]').forEach(b => { const on = f.ids.includes(b.dataset.x); b.classList.toggle('sel', on); const c = b.querySelector('.chk'); c.classList.toggle('on', on); c.innerHTML = on ? ic('check', 14, 2.6) : ''; }); }
function marcarApartado(n, ap) { const ix = tema(n).ix; if (ix.modo === 'per') { const a = ix.per.find(y => y.t === ap); if (a && (a.e || 0) < 1) a.e = 1; } else { const o = indiceOrientativo(n) || [], i = o.indexOf(ap); if (i >= 0 && (ix.ori[i] || 0) < 1) ix.ori[i] = 1; } }
function leerRB() { $$('[data-rb]').forEach(i => { const k = i.dataset.rb, j = +i.dataset.i; if (RB[j]) RB[j][k] = k === 'p' ? +i.value : i.value; }); }
function leerGU() { $$('[data-gu]').forEach(i => { const k = i.dataset.gu, j = +i.dataset.i; if (GU[j]) GU[j][k] = k === 'm' ? +i.value : i.value; }); }
function abrirEstudiar(n) {
  EST_N = n || (loQueToca().find(x => x.n) || {}).n || siguientesTemas(1)[0] || null; const pe = S.aj.est || {};
  EST_D = pe.d || 60; EST_M = pe.m || 'seguido'; EST_B = pe.b || 25; EST_P = pe.p || 5; EST_NB = pe.n || 4;
  hoja(htmlEstudiar());
}
function htmlEstudiar() {
  const sug = [...new Set(loQueToca().filter(x => x.n).map(x => x.n).concat(siguientesTemas(3)))].slice(0, 5);
  return `<h2>¿Qué vas a estudiar?</h2><div class="sub">El cronómetro apunta las horas a ese tema.</div>
    <div class="lab">Sugeridos</div><div class="tiles">${sug.map(n => `<button data-a="est-tema" data-x="${n}">${tile(n, est(n), 40, EST_N === n ? 'sel' : '')}</button>`).join('')}</div>
    <div class="lab">O elige cualquiera</div><select class="inp" id="est-sel">${S.temario.map(x => `<option value="${x.n}" ${x.n === EST_N ? 'selected' : ''}>${x.n} · ${esc(titCorto(x.n))}</option>`).join('')}</select>
    <div class="lab">¿Cómo?</div>${segHtml([['seguido', 'Seguido'], ['bloques', 'Por bloques con descansos']], EST_M, 'est-modo')}
    ${EST_M === 'bloques' ? `<div class="lab">Cada bloque</div><div class="chips" style="margin-top:0">${[25, 30, 45, 50].map(m => `<button class="ch ${EST_B === m ? 'on' : ''}" data-a="est-b" data-x="${m}">${m} min</button>`).join('')}</div>
      <div class="lab">Descanso entre bloques</div><div class="chips" style="margin-top:0">${[5, 10, 15].map(m => `<button class="ch ${EST_P === m ? 'on' : ''}" data-a="est-p" data-x="${m}">${m} min</button>`).join('')}</div>
      <div class="srow" style="margin-top:8px"><span>Número de bloques</span><span class="stp"><button data-a="est-n" data-x="-1" aria-label="Menos">−</button><b class="m">${EST_NB}</b><button data-a="est-n" data-x="1" aria-label="Más">+</button></span></div>
      <p class="note">${EST_NB} × ${EST_B} min${EST_NB > 1 ? ` + ${plural(EST_NB - 1, 'descanso', 'descansos')} de ${EST_P}` : ''} = ${horasTxt(EST_NB * EST_B + (EST_NB - 1) * EST_P)}. Solo cuentan como estudiados los bloques. Suena al acabar cada bloque y cada descanso.</p>`
    : `<div class="lab">¿Cuánto rato?</div><div class="chips" style="margin-top:0">${[25, 45, 60, 90, 120].map(m => `<button class="ch ${EST_D === m ? 'on' : ''}" data-a="est-dur" data-x="${m}">${horasTxt(m)}</button>`).join('')}</div>`}
    <div style="height:14px"></div>${btn('Empezar', 'est-ok')}`;
}
async function publicar(p, silencio) {
  const g = grupoAct(); if (!g) return;
  try { await api(g.url, g.clave, 'g-publicar', { mat: Object.assign({ id: uid() }, p) }); if (!silencio) { toast(`Compartido con «${g.nombre}»`); cargarGrupo(true, g); } }
  catch (e) { toast('No he podido compartirlo. Se ha guardado solo en lo tuyo.'); }
}
let JOIN = null;
function leerInvitacion(s) { try { s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; const d = JSON.parse(decodeURIComponent(escape(atob(s)))); return d && d.u ? d : null; } catch (e) { return null; } }
function pedirUnirse() {
  if (!JOIN) return;
  hoja(`<h2>Unirte a «${esc(JOIN.g || 'Grupo')}»</h2><div class="sub">Podréis compartir índices, tarjetas, notas, exámenes y correcciones. Cada cosa solo se comparte si tú la activas; tu progreso, también.</div>
    <div class="lab">Tu nombre y apellido en el grupo</div><input class="inp" id="gj-n" value="${esc(S.yo.nombre)}" placeholder="Ej.: Ane Goñi">
    <div style="height:14px"></div>${btn('Unirme', 'g-join-ok')}<button class="link" data-a="cerrar-hoja">Ahora no</button>`);
}

/* copia privada en Google */
/* fotos y PDF que solo están en este dispositivo */
function archivosLocales() { const ids = []; S.sims.forEach(s => (s.fotos || []).forEach(f => ids.push(f))); S.examenes.forEach(x => ids.push('x.' + x.id)); return ids; }
let COPIANDO = false;
async function copiaGuardar(silencio) {
  if (!S.copia.url) { if (!silencio) toast('Primero pega la URL de tu script'); return; }
  if (COPIANDO) return; COPIANDO = true; clearTimeout(COPT);
  try { const u = S.copia.url, k = S.copia.clave; let n = 0;
    for (const id of archivosLocales()) { if (S.copia.subidos[id]) continue; const b = await IDB.get(id).catch(() => null); if (!b) continue;
      const j = await api(u, k, 'g-subir', { meta: { tipo: 'copia', titulo: id }, nombre: id + (/pdf/.test(b.type) ? '.pdf' : '.jpg'), mime: b.type || 'image/jpeg', datos: await blobA64(b) }); S.copia.subidos[id] = j.id; n++; }
    await api(u, k, 'guardar', { version: VERSION, datos: S }); S.copia.ult = Date.now(); S.copia.error = false; save(true);
    if (!silencio) toast('Copia guardada en tu Google' + (n ? ` (con ${plural(n, 'archivo nuevo', 'archivos nuevos')})` : '')); }
  catch (e) { S.copia.error = true; save(true); if (!silencio) toast('No se ha podido guardar. Revisa la URL y la clave.'); }
  COPIANDO = false; if (ACT === 'ajustes') refresh();
}
function cargarDatos(d, conservarCopia) {
  const x = DEF(), cp = S.copia; S = Object.assign(x, d); ['yo', 'conv', 'obj', 'p2', 'copia', 'aj', 'ui'].forEach(k => S[k] = Object.assign(x[k], d[k] || {})); if (conservarCopia) S.copia = cp; migrar(S);
}
async function copiaRecuperar() {
  try { const j = await api(S.copia.url, S.copia.clave, 'recuperar'); if (!j.datos) { toast('Todavía no hay ninguna copia'); return; }
    const sub = Object.assign({}, (j.datos.copia || {}).subidos || {}, S.copia.subidos || {});
    commit(() => { cargarDatos(j.datos, true); S.copia.subidos = sub; }, 'Copia recuperada', true);
    let n = 0; for (const id of archivosLocales()) { if (!sub[id] || await IDB.get(id).catch(() => null)) continue;
      try { const a = await api(S.copia.url, S.copia.clave, 'g-archivo', { id: sub[id] }); await IDB.put(id, b64ABlob(a.datos, a.mime)); n++; } catch (e) {} }
    if (n) { toast(`Copia recuperada con ${plural(n, 'foto o PDF', 'fotos o PDF')}`); refresh(); } }
  catch (e) { toast('No se ha podido recuperar'); }
}

/* entradas de texto */
let NT = null;
document.addEventListener('input', e => {
  const t = e.target;
  if (t.id === 'notas') { const n = +t.dataset.n; clearTimeout(NT); NT = setTimeout(() => { tema(n).notas = t.value; save(); tocado(n, 'notas'); }, 400); }
  if (t.id === 't-bus') { TBUS = t.value; const c = $('#view .card'); if (c) c.innerHTML = S.ui.tmodo === 'mapa' ? htmlMapa(ancho() ? TSEL : null) : htmlLista(); }
  if (t.id === 'ft-q' && FT && FT.tipo === 'huecos') { const viejas = trozos(FT.plano).filter(w => w && !/^\s+$/.test(w)); FT.plano = t.value; const nuevas = trozos(FT.plano).filter(w => w && !/^\s+$/.test(w));
    FT.hid = FT.hid.filter(i => i < nuevas.length && viejas[i] === nuevas[i]); const p = $('#ft-pal'); if (p) p.innerHTML = htmlPalabras(); }
  if (t.dataset.rb) { const s = $('#rb-sum'); if (s) s.textContent = 'Suman ' + $$('[data-rb="p"]').reduce((a, i) => a + (+i.value || 0), 0) + ' %.'; }
});
document.addEventListener('change', async e => {
  const t = e.target;
  if (t.dataset.c) { S.conv[t.dataset.c] = t.value.trim() || S.conv[t.dataset.c]; save(); if (t.dataset.c === 'fecha') { pushConv(); refresh(); } }
  if (t.dataset.y) { S.yo[t.dataset.y] = t.value.trim(); save(); }
  if (t.dataset.cp) { S.copia[t.dataset.cp] = t.value.trim(); S.copia.error = false; save(); refresh(); }
  if (t.id === 't-blq-sel') { S.ui.tblq = t.value; save(); refresh(); }
  if (t.id === 'g-sel') { S.ui.gsel = t.value; S.ui.gfT = S.ui.gfK = S.ui.gfP = ''; save(); refresh(); const g = grupoAct(); if (g && (!g.ult || Date.now() - g.ult > 60000)) cargarGrupo(true, g); }
  if (['gf-t', 'gf-k', 'gf-p'].includes(t.id)) { S.ui[{ 'gf-t': 'gfT', 'gf-k': 'gfK', 'gf-p': 'gfP' }[t.id]] = t.value; save(); refresh(); }
  if (t.id === 'fb-n') { leerFB(); repintarHoja(htmlBloque()); }
  if (t.id === 'pc-g') { FPC.g = t.value; FPC.para = null; FPC.pintar(); }
  if (t.id === 'fx-f') { const n = $('#fx-nom'); if (n) n.innerHTML = `<b>${t.files.length === 1 ? esc(t.files[0].name) : plural(t.files.length, 'archivo', 'archivos')}</b><small>${tamTxt(Array.from(t.files).reduce((a, f) => a + f.size, 0))}</small>`; }
  if (t.id === 'importar' && t.files[0]) { const r = new FileReader(); r.onload = () => { try { const d = JSON.parse(r.result); if (!d.temario) throw 0; commit(() => cargarDatos(d, false), 'Datos importados', true); } catch (er) { toast('Ese archivo no es de Ruta 71'); } }; r.readAsText(t.files[0]); }
  if (t.id === 'ev-foto' && t.files.length) { const ids = await guardarFotos(Array.from(t.files)); EV.fotos = (EV.fotos || []).concat(ids); refresh(); }
  if (t.id === 'sim-foto' && t.files.length) { const s = S.sims.find(x => x.id === t.dataset.s), ids = await guardarFotos(Array.from(t.files)); if (s) { s.fotos = (s.fotos || []).concat(ids); save(); refresh(); toast(plural(ids.length, 'foto añadida', 'fotos añadidas')); } }
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter' || e.target.tagName === 'TEXTAREA') return;
  const m = { nf: 'flaq-add', nc: 'cosa-add', ne: 'enl-add', nix: 'ix-add', 'ixe-t': 'ixe-ok', 'cv-enl': 'cv-enl-add', 'ev-olv': 'ev-olv-add', 'p2-n': 'p2-add', 'g-link': 'g-unirme', 'ap-txt': 'ap-ok', 'gj-n': 'g-join-ok' }[e.target.id];
  if (m) { e.preventDefault(); ACC[m](); }
});

/* tema claro / oscuro y color de la barra de arriba */
function oscuro() { return S.aj.tema === 'oscuro' || (S.aj.tema === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches); }
function aplicarTema() { document.documentElement.dataset.theme = oscuro() ? 'dark' : 'light'; themeColor(); }
function themeColor() { const c = OSCURAS.includes(ACT) ? '#10253F' : oscuro() ? '#0C1A2C' : '#EEF2F5'; $$('meta[name="theme-color"]').forEach(m => m.content = c); document.documentElement.style.backgroundColor = c; }
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (S.aj.tema === 'auto') aplicarTema(); });
let ANCHO = ancho();
addEventListener('resize', () => { if (ancho() !== ANCHO) { ANCHO = ancho(); if (ACT === 'tema' && ANCHO) { TSEL = P.n; go('temario', { n: P.n }, 'tab'); } else refresh(); } });
addEventListener('afterprint', () => { const p = $('#print'); if (p) p.innerHTML = ''; });

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
  if (S.grupos.length) setTimeout(() => cargarTodos(true), 1500);
}
addEventListener('hashchange', () => { const m = location.hash.match(/#unirse=([A-Za-z0-9+/_-]+)/); if (!m) return; JOIN = leerInvitacion(m[1]); history.replaceState(null, '', location.pathname + location.search); if (JOIN && S.onb) pedirUnirse(); });
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') { enviarPend(); return; }
  $('#nav').innerHTML = navHtml(); pintarNav(); if (ACT === 'hoy') refresh();
  if (S.copia.url && !S.copia.sinc && (!S.copia.ult || Date.now() - S.copia.ult > 6 * 36e5)) copiaGuardar(true);
  if (S.grupos.some(g => !g.ult || Date.now() - g.ult > 10 * 6e4)) cargarTodos(true);
});
function pintarNav() { const tabAct = (TABS.find(t => t[0] === ACT) || [])[0] || ({ tema: 'temario', convocatoria: 'hoy', ruta: 'hoy', material: 'grupo', corregir: 'grupo', sim: 'simulacro', examenes: 'simulacro', supuestos: 'simulacro', prueba2: 'simulacro', feedback: 'feedback' })[ACT];
  $$('.navbtn').forEach(b => b.classList.toggle('on', b.dataset.x === tabAct || (ACT === 'ajustes' && b.dataset.x === 'ajustes'))); }
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
inicio();
/* ===================================================================== PDF de verdad (1.1.3)
   En el iPhone, con la app abierta desde el icono, «window.print()» no hace nada.
   Por eso la app monta la hoja con el mismo diseño de impresión, la mide y la dibuja en un PDF
   (con la librería pdf-lib, que va dentro de la app en vendor/). Después se comparte o se abre. */
let PDF_LIB = null;
function cargarPdfLib() {
  if (window.PDFLib) return Promise.resolve(window.PDFLib);
  if (PDF_LIB) return PDF_LIB;
  PDF_LIB = new Promise((ok, mal) => { const s = document.createElement('script'); s.src = 'vendor/pdf-lib.min.js';
    s.onload = () => window.PDFLib ? ok(window.PDFLib) : mal(new Error('pdf-lib')); s.onerror = () => { PDF_LIB = null; mal(new Error('pdf-lib')); }; document.head.appendChild(s); });
  return PDF_LIB;
}

/* Caracteres que las fuentes estándar del PDF no tienen */
const PDF_CAMBIOS = { '→': '>', '←': '<', '−': '-', '‑': '-', '✓': 'v', '✗': 'x', '·': '·', '≥': '>=', '≤': '<=', '×': 'x', '≈': '~', ' ': ' ', ' ': ' ', ' ': ' ' };
function pdfLimpio(txt, f) {
  let o = '';
  for (const ch of txt) { const c = PDF_CAMBIOS[ch] !== undefined ? PDF_CAMBIOS[ch] : ch;
    try { f.encodeText(c); o += c; } catch (e) { o += '?'; } }
  return o;
}
function pdfColor(rgb, PL) {
  const m = (rgb || '').match(/rgba?\(([^)]+)\)/); if (!m) return null;
  const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); if (p.length > 3 && p[3] === 0) return null;
  return { c: PL.rgb(p[0] / 255, p[1] / 255, p[2] / 255), a: p.length > 3 ? p[3] : 1 };
}
function rectaRedonda(w, h, r) { r = Math.max(0, Math.min(r, w / 2, h / 2));
  return `M ${r} 0 L ${w - r} 0 Q ${w} 0 ${w} ${r} L ${w} ${h - r} Q ${w} ${h} ${w - r} ${h} L ${r} ${h} Q 0 ${h} 0 ${h - r} L 0 ${r} Q 0 0 ${r} 0 Z`; }

async function crearPDF(html, nombre) {
  const PL = await cargarPdfLib();
  if (document.fonts && document.fonts.ready) await document.fonts.ready;
  const cont = document.createElement('div'); cont.id = 'pdfgen'; cont.className = 'pdoc'; cont.innerHTML = html; document.body.appendChild(cont);
  try {
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    const doc = await PL.PDFDocument.create();
    doc.setTitle(nombre.replace(/\.pdf$/, '')); doc.setCreator('Ruta 71'); doc.setProducer('Ruta 71');
    const F = { n: await doc.embedFont(PL.StandardFonts.Helvetica), b: await doc.embedFont(PL.StandardFonts.HelveticaBold), i: await doc.embedFont(PL.StandardFonts.HelveticaOblique),
      m: await doc.embedFont(PL.StandardFonts.Courier), mb: await doc.embedFont(PL.StandardFonts.CourierBold) };
    const PW = 595.28, PH = 841.89, MX = 42.52, MT = 45.35, MB = 42.52, K = 0.75;   // A4 en puntos; 1 px = 0,75 pt
    const ALTO = (PH - MT - MB) / K;                                                  // alto útil de la página, en px
    const base = cont.getBoundingClientRect(), Y0 = base.top, X0 = base.left;

    /* 1 · Qué hay que dibujar: cajas (fondos y bordes) y palabras */
    const cajas = [], palabras = [], bloques = [];
    const ENTEROS = '.pl, .pcut>div, .pmapa .tl, h1, h3, .pk, .pmeta, .ppie, .leg span';
    cont.querySelectorAll('*').forEach(el => {
      const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') return;
      const r = el.getBoundingClientRect(); if (!r.width || !r.height) return;
      const caja = { x: r.left - X0, y: r.top - Y0, w: r.width, h: r.height, fondo: pdfColor(cs.backgroundColor, PL), rad: parseFloat(cs.borderTopLeftRadius) || 0, lados: [] };
      [['Top', 0], ['Right', 1], ['Bottom', 2], ['Left', 3]].forEach(([l, i]) => { const w = parseFloat(cs['border' + l + 'Width']) || 0, st = cs['border' + l + 'Style'], col = pdfColor(cs['border' + l + 'Color'], PL);
        if (w > 0 && st !== 'none' && col) caja.lados[i] = { w, st, col }; });
      if (caja.fondo || caja.lados.length) cajas.push(caja);
      if (el.matches(ENTEROS)) bloques.push([caja.y, caja.y + caja.h]);
    });
    const tw = document.createTreeWalker(cont, NodeFilter.SHOW_TEXT); let nodo;
    while ((nodo = tw.nextNode())) {
      const el = nodo.parentElement, cs = getComputedStyle(el); if (!nodo.textContent.trim()) continue;
      const fam = cs.fontFamily.toLowerCase(), neg = parseInt(cs.fontWeight) >= 600, mono = fam.includes('mono');
      const f = mono ? (neg ? F.mb : F.m) : cs.fontStyle === 'italic' ? F.i : (neg || fam.includes('heros')) ? F.b : F.n;
      const col = pdfColor(cs.color, PL) || { c: PL.rgb(.06, .15, .25), a: 1 }, tam = parseFloat(cs.fontSize);
      const re = /\S+/g; let m; const txt = nodo.textContent;
      while ((m = re.exec(txt))) {
        const rg = document.createRange(); rg.setStart(nodo, m.index); rg.setEnd(nodo, m.index + m[0].length);
        const rs = rg.getClientRects(); if (!rs.length) continue; const r = rs[0];
        let t = m[0]; if (cs.textTransform === 'uppercase') t = t.toUpperCase();
        palabras.push({ x: r.left - X0, y: r.top - Y0, w: r.width, h: r.height, t, f, col, tam });
        bloques.push([r.top - Y0, r.top - Y0 + r.height]);
      }
    }

    /* 2 · Dónde corta cada página: nunca a mitad de una línea, una fila o una tarjeta */
    bloques.sort((a, b) => a[0] - b[0]);
    const cortes = [0]; let ini = 0;
    bloques.forEach(([a, b]) => { if (b - ini > ALTO && a > ini + 1 && b - a <= ALTO) { ini = a - 2; cortes.push(ini); } });
    const total = Math.max(cont.scrollHeight, ...bloques.map(x => x[1]), 1);
    const pags = cortes.map((c, i) => ({ de: c, a: i + 1 < cortes.length ? cortes[i + 1] : total, p: doc.addPage([PW, PH]) }));
    const px = x => MX + x * K, py = (y, pg) => PH - MT - (y - pg.de) * K;

    /* 3 · Dibujar */
    pags.forEach((pg, ip) => {
      cajas.forEach(c => {
        if (c.y + c.h <= pg.de || c.y >= pg.a) return;
        const y1 = Math.max(c.y, pg.de), y2 = Math.min(c.y + c.h, pg.a), ent = y1 === c.y && y2 === c.y + c.h;
        const L = c.lados, todos = L.length === 4 && L.every(l => l && l.w === L[0].w && l.st === L[0].st);
        if (ent && c.rad > 0.5 && (c.fondo || todos)) {
          pg.p.drawSvgPath(rectaRedonda(c.w * K, c.h * K, c.rad * K), { x: px(c.x), y: py(c.y, pg),
            color: c.fondo ? c.fondo.c : undefined, opacity: c.fondo ? c.fondo.a : undefined,
            borderColor: todos ? L[0].col.c : undefined, borderWidth: todos ? L[0].w * K : undefined });
          if (todos) return;
        } else if (c.fondo) pg.p.drawRectangle({ x: px(c.x), y: py(y2, pg), width: c.w * K, height: (y2 - y1) * K, color: c.fondo.c, opacity: c.fondo.a });
        const lin = (x1, ya, x2, yb, l) => pg.p.drawLine({ start: { x: px(x1), y: py(ya, pg) }, end: { x: px(x2), y: py(yb, pg) }, thickness: l.w * K, color: l.col.c,
          dashArray: l.st === 'dashed' ? [3, 2.5] : l.st === 'dotted' ? [1, 2] : undefined });
        if (L[0] && y1 === c.y) lin(c.x, c.y + L[0].w / 2, c.x + c.w, c.y + L[0].w / 2, L[0]);
        if (L[2] && y2 === c.y + c.h) lin(c.x, y2 - L[2].w / 2, c.x + c.w, y2 - L[2].w / 2, L[2]);
        if (L[1]) lin(c.x + c.w - L[1].w / 2, y1, c.x + c.w - L[1].w / 2, y2, L[1]);
        if (L[3]) lin(c.x + L[3].w / 2, y1, c.x + L[3].w / 2, y2, L[3]);
      });
      palabras.forEach(w => {
        if (w.y < pg.de || w.y >= pg.a) return;
        const t = pdfLimpio(w.t, w.f); if (!t) return;
        let s = w.tam * K; const an = w.f.widthOfTextAtSize(t, s); if (an > w.w * K && an > 0) s = s * (w.w * K) / an;
        pg.p.drawText(t, { x: px(w.x), y: py(w.y + w.h * 0.79, pg), size: s, font: w.f, color: w.col.c, opacity: w.col.a });
      });
      if (pags.length > 1) { const t = `${ip + 1} / ${pags.length}`; pg.p.drawText(t, { x: PW - MX - F.n.widthOfTextAtSize(t, 8), y: 22, size: 8, font: F.n, color: PL.rgb(.58, .64, .71) }); }
    });
    const bytes = await doc.save();
    return new File([bytes], nombre, { type: 'application/pdf' });
  } finally { cont.remove(); }
}

/* La hoja que aparece cuando el PDF está listo */
let PDF_HECHO = null;
const NOM_PDF = { ficha: n => `Ruta71_ficha_tema_${n}.pdf`, 'tarjetas-t': n => `Ruta71_tarjetas_tema_${n}.pdf`, tarjetas: () => 'Ruta71_tarjetas.pdf', flaq: () => 'Ruta71_flaquezas.pdf',
  agenda: () => 'Ruta71_agenda.pdf', mapa: () => 'Ruta71_mapa_del_temario.pdf', sim: () => 'Ruta71_simulacro.pdf' };
async function hacerPDF(k, n) {
  hoja(`<h2>Preparando el PDF…</h2><div class="sub">Un momento.</div>`);
  try {
    const f = await crearPDF(htmlImpresion(k, n), (NOM_PDF[k] || (() => 'Ruta71.pdf'))(n));
    if (PDF_HECHO && PDF_HECHO.url) URL.revokeObjectURL(PDF_HECHO.url);
    PDF_HECHO = { f, url: URL.createObjectURL(f) };
    const comp = navigator.canShare && navigator.canShare({ files: [f] });
    hoja(`<h2>PDF listo</h2><div class="sub">${esc(f.name)} · ${tamTxt(f.size)}${comp ? '<br>En «Compartir» tienes Imprimir, Guardar en Archivos, WhatsApp o Mail.' : ''}</div>
      <div style="height:6px"></div>${comp ? btn(ic('subir', 19, 2) + 'Compartir o imprimir', 'pdf-compartir') + '<div style="height:10px"></div>' : ''}
      ${btn(ic('archivo', 19, 2) + 'Abrir el PDF', 'pdf-abrir', '', comp ? 'soft' : '')}
      ${!comp ? `<div style="height:10px"></div>${btn(ic('imprimir', 19, 2) + 'Imprimir con el navegador', 'pdf-navegador', '', 'soft')}` : ''}`);
  } catch (e) {
    hoja(`<h2>No se ha podido crear el PDF</h2><div class="sub">Comprueba que has subido la carpeta vendor a GitHub. Mientras tanto, puedes probar con la impresión del navegador.</div>
      <div style="height:6px"></div>${btn(ic('imprimir', 19, 2) + 'Imprimir con el navegador', 'pdf-navegador')}`);
  }
}
/* ===================================================================== Sincronizar el móvil y el ordenador (1.1.7)
   Usa la hoja «Ruta 71 · mi copia» (la misma URL y clave de la copia).
   Cada dispositivo guarda en local lo último que sincronizó (la «base»). Al sincronizar:
   1 · sube las fotos y PDF nuevos, 2 · si en el Drive hay una versión que no ha visto, la baja y la junta con lo suyo
   (comparando con la base: lo que solo ha cambiado en un lado se toma de ese lado; si ha cambiado en los dos, gana
   lo último que se tocó), 3 · si el resultado tiene algo que el Drive no tiene, lo sube. */
var SINC_FUERA = ['ui', 'copia', 'pendComp', 'grupo', '_sync', '_sub'];       // esto es de cada dispositivo
var SINC = { estado: null, prom: null, ultIntento: 0, eleccion: null };
var DISP = (() => { try { let d = localStorage.getItem('ruta71-disp'); if (!d) { d = uid(); localStorage.setItem('ruta71-disp', d); } return d; } catch (e) { return 'sin-id'; } })();
function nombreDisp() { const u = navigator.userAgent;
  return /iPhone/.test(u) ? 'iPhone' : /iPad/.test(u) || (/Macintosh/.test(u) && navigator.maxTouchPoints > 1) ? 'iPad' : /Android/.test(u) ? (/Mobile/.test(u) ? 'Móvil Android' : 'Tablet Android') : 'Ordenador'; }
function sincOn() { return !!(S.copia && S.copia.url && S.copia.sinc); }

/* lo que se sincroniza: todo menos lo de cada dispositivo, y sin las cachés de los grupos */
function sincDatos(st) {
  const o = {}; Object.keys(st).forEach(k => { if (!SINC_FUERA.includes(k)) o[k] = st[k]; });
  o.grupos = (st.grupos || []).map(g => { const c = Object.assign({}, g); delete c.cache; delete c.ult; return c; });
  return JSON.parse(JSON.stringify(o));
}
const igual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const esObj = x => x && typeof x === 'object' && !Array.isArray(x);
function claveItem(x, vistas) { let k = esObj(x) ? (x.id != null ? 'i' + x.id : x.ts != null ? 't' + x.ts + '|' + (x.n != null ? x.n : '') : 'j' + JSON.stringify(x)) : 'p' + JSON.stringify(x);
  vistas[k] = (vistas[k] || 0) + 1; return vistas[k] > 1 ? k + '#' + vistas[k] : k; }
function porClave(arr) { const m = new Map(), v = {}; (arr || []).forEach(x => m.set(claveItem(x, v), x)); return m; }
/* juntar en tres sentidos: b = base, l = este dispositivo, r = el Drive; lGana = si en un choque gana lo de aquí */
function juntar(b, l, r, lGana) {
  if (igual(l, r)) return l; if (igual(l, b)) return r; if (igual(r, b)) return l;
  if (esObj(l) && esObj(r)) { const o = {}, bb = esObj(b) ? b : {};
    new Set([...Object.keys(l), ...Object.keys(r)]).forEach(k => { const v = (k in l) && (k in r) ? juntar(bb[k], l[k], r[k], lGana)
        : (k in l) ? ((k in bb) && igual(l[k], bb[k]) ? undefined : l[k]) : ((k in bb) && igual(r[k], bb[k]) ? undefined : r[k]);
      if (v !== undefined) o[k] = v; });
    return o; }
  if (Array.isArray(l) && Array.isArray(r)) { const B = porClave(Array.isArray(b) ? b : []), L = porClave(l), R = porClave(r);
    const orden = [...(igual([...L.keys()], [...B.keys()]) ? R.keys() : L.keys())]; [...L.keys(), ...R.keys()].forEach(k => { if (!orden.includes(k)) orden.push(k); });
    const out = []; orden.forEach(k => { const enL = L.has(k), enR = R.has(k), enB = B.has(k); let v;
      if (enL && enR) v = juntar(B.get(k), L.get(k), R.get(k), lGana);
      else if (enL) v = enB && igual(L.get(k), B.get(k)) ? undefined : L.get(k);
      else if (enR) v = enB && igual(R.get(k), B.get(k)) ? undefined : R.get(k);
      if (v !== undefined) out.push(v); });
    return out; }
  return lGana ? l : r;
}
/* para juntar bien, los tres lados tienen que tener lo mismo «por defecto»: un tema sin tocar en un lado
   no debe ganar a ese tema trabajado en el otro */
function temaDef() { return { e: 0, conf: 0, mio: false, flaq: [], cosas: [], notas: '', enlaces: [], min: 0, ult: null, prox: null, v: 0, vts: null, ix: { modo: 'ori', ori: {}, per: [] }, comp: {} }; }
function completar(x, claves) {
  const d = sincDatos(DEF()), o = Object.assign({}, d, x || {});
  ['conv', 'obj', 'p2', 'aj', 'yo'].forEach(k => { if (esObj(d[k])) o[k] = Object.assign({}, d[k], (x || {})[k] || {}); });
  o.temas = {}; claves.forEach(k => { o.temas[k] = Object.assign(temaDef(), ((x || {}).temas || {})[k] || {}); });
  if (x && x._sub) o._sub = x._sub; return o;
}
const leerBase = () => { try { return JSON.parse(localStorage.getItem('ruta71-base') || 'null'); } catch (e) { return null; } };
const ponerBase = d => { try { localStorage.setItem('ruta71-base', JSON.stringify(d)); } catch (e) {} };
function localVacio() { return !S.tarjetas.length && !S.sims.length && !S.sesiones.length && !S.agenda.length && Object.values(S.temas).every(t => !t.e && !(t.flaq || []).length && !(t.cosas || []).length && !t.notas); }
/* pasar el resultado a S sin tocar lo de este dispositivo */
function aplicarSinc(d) {
  const ui = S.ui, cp = S.copia, pend = S.pendComp, cache = {}; S.grupos.forEach(g => { cache[g.id] = { cache: g.cache, ult: g.ult }; });
  cargarDatos(d, true); delete S._sub; delete S._sync; S.ui = ui; S.copia = cp; if (pend) S.pendComp = pend;
  S.grupos.forEach(g => Object.assign(g, cache[g.id] || {}));
}
function estadoSinc(e) { SINC.estado = e; const b = $('.sync'); if (b) b.outerHTML = sincBoton(); if (ACT === 'ajustes' && !hojaAbierta() && !escribiendo()) refresh(); }
function escribiendo() { const a = document.activeElement; return !!(a && (/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) || a.isContentEditable)); }
function sincTexto() { const e = SINC.estado;
  if (e === 'gira') return ['Sincronizando…', SINC.msg || 'Un momento'];
  if (e === 'off') return ['Sin conexión', 'Se guardará al volver'];
  if (e === 'err') return ['No se ha podido sincronizar', 'Revisa la URL y la clave'];
  return ['Sincronizar', S.copia.ult ? 'Al día · ' + pad(new Date(S.copia.ult).getHours()) + ':' + pad(new Date(S.copia.ult).getMinutes()) : 'Todavía sin sincronizar']; }
function sincBoton() { if (!sincOn()) return '<span class="sync" hidden></span>'; const [t, s] = sincTexto(), e = SINC.estado;
  return `<button class="sync ${e === 'off' || e === 'err' ? 'off' : ''}" data-a="sinc-ahora">${e === 'gira' ? '<i class="gira"></i>' : ic(e === 'off' || e === 'err' ? 'alerta' : 'vuelta', 20, 2)}<div><b>${t}</b><small>${s}</small></div></button>`; }
/* primera vez en un dispositivo que ya tiene cosas y en el Drive también hay: se pregunta */
function preguntarPrimera(otro) {
  return new Promise(ok => { SINC.eleccion = ok;
    hoja(`<h2>Ya tienes datos en tu Drive</h2><div class="sub">Vienen ${otro ? 'de tu ' + esc(otro) : 'de otro dispositivo'}. Este dispositivo también tiene cosas tuyas. ¿Qué hacemos?</div>
      <div style="height:6px"></div>${btn('Usar los del Drive', 'sinc-elegir', 'drive')}<div style="height:10px"></div>${btn('Juntar los dos', 'sinc-elegir', 'juntar', 'soft')}
      <p class="note">«Usar los del Drive» deja este dispositivo igual que el otro. «Juntar los dos» suma lo de aquí y lo de allí; si algo está en los dos, se queda lo último que tocaste.</p>`, null);
  });
}
async function subirArchivosSinc(u, k) {
  for (const id of archivosLocales()) { if (S.copia.subidos[id]) continue; const b = await IDB.get(id).catch(() => null); if (!b) continue;
    SINC.msg = 'Subiendo fotos y PDF';
    const j = await api(u, k, 'g-subir', { meta: { tipo: 'copia', titulo: id }, nombre: id + (/pdf/.test(b.type) ? '.pdf' : '.jpg'), mime: b.type || 'image/jpeg', datos: await blobA64(b) }); S.copia.subidos[id] = j.id; }
}
async function bajarArchivosSinc() { let n = 0;
  for (const id of archivosLocales()) { const fid = S.copia.subidos[id]; if (!fid || await IDB.get(id).catch(() => null)) continue;
    try { const a = await api(S.copia.url, S.copia.clave, 'g-archivo', { id: fid }); await IDB.put(id, b64ABlob(a.datos, a.mime)); n++; } catch (e) {} }
  if (n && !escribiendo() && !hojaAbierta()) refresh();
}
function sincronizar(manual) {
  if (!sincOn()) { if (manual) toast('Activa «Sincronizar» en Ajustes → Tus dispositivos'); return Promise.resolve(); }
  if (SINC.prom) return SINC.prom;
  SINC.prom = sincUnaVez(manual).finally(() => { SINC.prom = null; });
  return SINC.prom;
}
async function sincUnaVez(manual, intento = 0) {
  if (!navigator.onLine) { estadoSinc('off'); return; }
  SINC.ultIntento = Date.now(); SINC.msg = ''; estadoSinc('gira');
  const u = S.copia.url, k = S.copia.clave;
  try {
    await subirArchivosSinc(u, k);
    let info = null; try { info = await api(u, k, 'sync-info'); } catch (e) { if (!/accion/.test(e.message)) throw e; }   // script viejo: sin «sync-info»
    const base = leerBase(), lo = sincDatos(S); lo._sub = Object.assign({}, S.copia.subidos);
    let res = lo, remoto = null, vRem = S.copia.v || null, traido = false, otro = '', modRem = 0;
    if (!info || (info.v || null) !== (S.copia.v || null)) {
      SINC.msg = 'Trayendo lo último'; const j = await api(u, k, 'recuperar');
      if (j.datos) {
        const rs = j.datos._sync || {}; vRem = rs.v || 'antigua'; modRem = rs.mod || 0; otro = ((rs.devs || {})[rs.dev] || {}).n || '';
        remoto = sincDatos(j.datos); remoto._sub = Object.assign({}, j.datos._sub || (j.datos.copia || {}).subidos || {});
        if (vRem !== S.copia.v) {
          let b = base;
          if (!b || !S.copia.v) {
            let modo = 'drive'; if (!localVacio()) { modo = await preguntarPrimera(otro); if (!modo) { estadoSinc(null); return; } }
            b = modo === 'drive' ? lo : {};
          }
          const claves = [...new Set([...Object.keys(lo.temas || {}), ...Object.keys(remoto.temas || {}), ...Object.keys((b || {}).temas || {})])];
          res = juntar(completar(b, claves), completar(lo, claves), completar(remoto, claves), (S.copia.mod || 0) >= (rs.mod || 0));
          if (remoto.yo && res.yo) res.yo.id = remoto.yo.id;            // eres la misma persona en el grupo
          res._sub = Object.assign({}, remoto._sub, lo._sub);
          traido = !igual(res, completar(lo, claves)); remoto = completar(remoto, claves);
          if (traido) { const sub = res._sub; aplicarSinc(res); S.copia.subidos = sub; }
          S.copia.devs = rs.devs || S.copia.devs || {};
        }
      }
    }
    const ref = remoto && vRem !== S.copia.v ? remoto : (base || null);
    if (!ref || !igual(res, ref) || !remoto && !info) {
      SINC.msg = 'Guardando';
      const v = uid(), devs = Object.assign({}, S.copia.devs || {}); devs[DISP] = { n: nombreDisp(), ts: Date.now() };
      const datos = Object.assign({}, res, { _sync: { v, mod: Math.max(S.copia.mod || 0, modRem), dev: DISP, devs }, _sub: res._sub, copia: { subidos: res._sub } });
      try { await api(u, k, 'sync-guardar', { datos, v, si: info ? (info.v || null) : (vRem === 'antigua' ? null : vRem) }); }
      catch (e) { if (/cambiado/.test(e.message) && intento < 3) return sincUnaVez(manual, intento + 1);
        if (!/accion/.test(e.message)) throw e; await api(u, k, 'guardar', { version: VERSION, datos }); }
      S.copia.v = v; S.copia.devs = devs;
    } else S.copia.v = vRem;
    const sub = res._sub; const b2 = Object.assign({}, res); ponerBase(b2); S.copia.subidos = sub;
    S.copia.ult = Date.now(); S.copia.error = false; save(true); SINC.msg = '';
    estadoSinc('ok');
    if (traido) { if (!escribiendo() && !hojaAbierta()) refresh(); $('#nav').innerHTML = navHtml(); pintarNav(); toast(otro ? `Al día · traído lo del ${otro}` : 'Al día · traído lo nuevo'); }
    else if (manual) toast('Al día');
    bajarArchivosSinc();
  } catch (e) { S.copia.error = true; save(true); estadoSinc(navigator.onLine ? 'err' : 'off'); if (manual) toast(navigator.onLine ? 'No se ha podido sincronizar. Revisa la URL y la clave.' : 'Sin conexión. Se sincronizará al volver.'); }
}
/* cuándo: al abrir, al volver a la app, al recuperar la conexión y unos segundos después de cada cambio */
var SINCT = null;
function sincPronto(ms = 8000) { if (!sincOn()) return; clearTimeout(SINCT); SINCT = setTimeout(() => { if (escribiendo() || hojaAbierta()) sincPronto(ms); else sincronizar(false); }, ms); }
addEventListener('online', () => { if (sincOn()) sincronizar(false); });
addEventListener('offline', () => { if (sincOn()) estadoSinc('off'); });
document.addEventListener('visibilitychange', () => {
  if (!sincOn()) return;
  if (document.visibilityState === 'hidden') { clearTimeout(SINCT); if (Date.now() - (S.copia.mod || 0) < 6e4) sincronizar(false); return; }
  if (Date.now() - SINC.ultIntento > 15000) sincronizar(false);
});
if (S.onb) setTimeout(() => { if (sincOn()) sincronizar(false); }, 1200);

/* tirar hacia abajo para sincronizar (móvil) */
(function () {
  let y0 = null, dy = 0, el = null, activo = false;
  const v = () => $('#view');
  const quitar = () => { if (el) el.remove(); el = null; const w = v(); w.style.transition = 'transform .3s var(--spring)'; w.style.transform = ''; setTimeout(() => { w.style.transition = ''; }, 320); };
  const pinta = (txt, giro, gira) => { if (!el) { el = document.createElement('div'); el.className = 'ptr'; document.body.appendChild(el); }
    el.style.top = `calc(var(--st) + ${Math.max(0, dy - 46)}px)`;
    el.innerHTML = `<span class="bol">${gira ? '<i class="gira"></i>' : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(${giro}deg);transition:transform .2s"><path d="M12 5v14M6 13l6 6 6-6"/></svg>`}</span><small>${txt}</small>`; };
  document.addEventListener('touchstart', e => { const w = v(); if (ancho() || !S.onb || document.body.classList.contains('full') || hojaAbierta() || !w || w.scrollTop > 0 || e.touches.length > 1 || !w.contains(e.target)) { y0 = null; return; }
    y0 = e.touches[0].clientY; dy = 0; activo = false; }, { passive: true });
  document.addEventListener('touchmove', e => { if (y0 == null) return; const w = v(); const d = e.touches[0].clientY - y0;
    if (d <= 0 || w.scrollTop > 0) { if (activo) { dy = 0; quitar(); activo = false; } return; }
    activo = true; e.preventDefault(); dy = Math.min(120, d * 0.5); w.style.transition = 'none'; w.style.transform = `translateY(${dy}px)`;
    pinta(dy > 70 ? 'Suelta para sincronizar' : 'Tira para sincronizar', dy > 70 ? 180 : 0); }, { passive: false });
  document.addEventListener('touchend', () => { if (y0 == null) return; y0 = null; if (!activo) return; activo = false;
    if (dy > 70) { const w = v(); w.style.transition = 'transform .25s'; w.style.transform = 'translateY(56px)'; dy = 96; pinta(sincOn() ? 'Sincronizando…' : 'Actualizando…', 0, true);
      const fin = () => { quitar(); };
      if (sincOn()) sincronizar(true).finally(fin); else { refresh(); setTimeout(() => { fin(); toast('Para tener el móvil y el ordenador al día, activa «Sincronizar» en Ajustes'); }, 500); } }
    else quitar(); dy = 0; });
})();
/* ===================================================================== Feedback (1.1.8)
   Notas de mejora para Iñaki: texto, sección y capturas o vídeos. Las notas van con los datos de la app
   (y se sincronizan con su copia). Las fotos y vídeos se guardan en el dispositivo (IndexedDB) y, si la copia
   está conectada, también en la carpeta «Ruta 71 · Feedback» de su Drive. «Exportar» crea un zip en el móvil. */
var FB_SECC = ['General', 'Hoy', 'Agenda', 'Convocatoria', 'Temario', 'Ficha del tema', 'Tarjetas', 'Estudiar', 'Simulacro', 'Exámenes', 'Grupo', 'Progreso', 'Ajustes', 'Bienvenida'];
var FB_MAX = 25 * 1024 * 1024;          // el script de Google no admite archivos mucho mayores
/* Notas que ya entraron en una versión: se marcan solas como hechas (los códigos salen en feedback.txt) */
var FB_HECHAS = {};
var FBF = null, FB_EXP = 'p', FB_ZIP = null, JSZIP_P = null;
if (!Array.isArray(S.fb)) S.fb = [];
(function marcarHechas() { let n = 0;
  Object.keys(FB_HECHAS).forEach(v => FB_HECHAS[v].forEach(id => { const x = S.fb.find(y => y.id === id); if (x && !x.hecha) { x.hecha = true; x.hv = v; n++; } }));
  if (n) save(); })();

function fbPend() { return (S.fb || []).filter(x => !x.hecha); }
function fbCuando(ts) {
  const d = new Date(ts), f = ymd(d), h = pad(d.getHours()) + ':' + pad(d.getMinutes());
  if (f === hoy()) return 'Hoy, ' + h; if (f === addDays(hoy(), -1)) return 'Ayer, ' + h;
  if (f > addDays(hoy(), -7)) return cap(DIAS[d.getDay()]) + ' ' + d.getDate();
  return fechaCorta(f) + (d.getFullYear() !== new Date().getFullYear() ? ' ' + d.getFullYear() : '');
}
const fbDur = s => Math.floor(s / 60) + ':' + pad(Math.round(s % 60));
function fbMini(a, nota, edit) {
  const fondo = a.th ? `style="background-image:url(${a.th})"` : '';
  return `<button class="fbth ${a.t} ${a.th ? 'con' : ''}" ${fondo} data-a="${edit ? 'fb-quitar' : 'fb-ver'}" data-x="${a.id}" data-k="${nota || ''}" aria-label="${a.t === 'vid' ? 'Vídeo' : 'Captura'}">
    ${a.th ? '' : '<i></i><i></i><i></i>'}${a.t === 'vid' ? `<b>${ic('play', 14)}</b><em>${fbDur(a.dur || 0)}</em>` : ''}${edit ? '<u>×</u>' : ''}</button>`;
}
function fbNotaHtml(x) {
  return `<div class="card fbn ${x.hecha ? 'hecha' : ''}"><div class="fbh"><span class="m">${fbCuando(x.ts)}</span><span class="fbsec">${esc(x.sec)}</span>
    <button class="fbck ${x.hecha ? 'on' : ''}" data-a="fb-hecha" data-x="${x.id}" aria-label="${x.hecha ? 'Volver a pendiente' : 'Marcar como hecha'}">${ic('check', 14, 2.6)}</button></div>
    <button class="fbtx" data-a="fb-editar" data-x="${x.id}">${esc(x.txt).replace(/\n/g, '<br>')}</button>
    ${x.arch.length ? `<div class="fbths">${x.arch.map(a => fbMini(a, x.id)).join('')}</div>` : ''}
    ${x.hecha ? `<small class="fbv">${x.hv ? 'Hecha en la versión ' + x.hv : 'Marcada como hecha'}</small>` : ''}</div>`;
}
R.feedback = () => {
  const tab = S.ui.fbtab || 'p', xs = S.fb.filter(x => tab === 't' || (tab === 'h') === !!x.hecha).sort((a, b) => b.ts - a.ts);
  const hoyIni = parseYmd(hoy()).getTime(), sem = parseYmd(addDays(hoy(), -6)).getTime();
  const grupos = [['Hoy', xs.filter(x => x.ts >= hoyIni)], ['Esta semana', xs.filter(x => x.ts < hoyIni && x.ts >= sem)], ['Antes', xs.filter(x => x.ts < sem)]];
  return `<div class="pg narrow"><div class="col">${topBar('Ajustes', `<button class="pill2" data-a="fb-exportar">${ic('bajar', 16, 2)}Exportar</button>`)}
    <h1>Feedback</h1><div class="sub">${plural(fbPend().length, 'pendiente', 'pendientes')} · ${plural(S.fb.length - fbPend().length, 'hecha', 'hechas')}</div>
    ${segHtml([['p', 'Pendientes'], ['h', 'Hechas'], ['t', 'Todas']], tab, 'fb-tab')}
    ${xs.length ? grupos.filter(g => g[1].length).map(([t, ys]) => secT('fb', t) + ys.map(fbNotaHtml).join('')).join('')
      : `<div class="vacio fbvacio">${ic('fb', 30)}<b>${tab === 'h' ? 'Todavía no hay notas hechas' : 'No hay notas'}</b><small>${tab === 'h' ? 'Cuando una mejora entre en una versión, la nota pasa aquí.' : 'Pulsa + para apuntar una mejora o algo que falla.'}</small></div>`}
    <div style="height:70px"></div>
    <button class="fbfab" data-a="fb-nueva" aria-label="Nueva nota">${ic('mas', 26, 2.4)}</button></div></div>`;
};

/* ---------- nota nueva o editar ---------- */
function fbHoja() {
  const x = FBF, edit = !!x.id;
  return `<h2>${edit ? 'Editar nota' : 'Nueva nota'}</h2><div class="sub">Para ir apuntando mejoras. Solo la ves tú.</div>
    <textarea class="inp" id="fb-txt" style="min-height:96px;margin-top:4px" placeholder="¿Qué mejorarías o qué falla?">${esc(x.txt)}</textarea>
    <div class="lab">Sección</div><div class="chips fbchips">${FB_SECC.map(s => `<button class="ch ${s === x.sec ? 'on' : ''}" data-a="fb-sec" data-x="${esc(s)}">${esc(s)}</button>`).join('')}</div>
    <div class="lab">Capturas y vídeos</div><div class="fbths edit">${x.arch.map(a => fbMini(a, '', true)).join('')}
      ${x.cargando ? `<span class="fbadd"><i class="gira"></i><span>Preparando…</span></span>` : ''}
      <label class="fbadd">${ic('foto', 22)}<span>Foto o vídeo</span><input type="file" id="fb-file" accept="image/*,video/*" multiple hidden></label></div>
    ${x.aviso ? `<div class="fbav">${ic('alerta', 17, 2)}<span>${x.aviso}</span></div>` : ''}
    <p class="note">Vídeos de hasta 1 minuto (como mucho ${Math.round(FB_MAX / 1048576)} MB).${S.copia.url ? ' Las fotos y vídeos se guardan también en tu Drive, en la carpeta «Ruta 71 · Feedback».' : ' Se guardan en este dispositivo; con la copia conectada irían también a tu Drive.'}</p>
    <div style="height:8px"></div>${btn(edit ? 'Guardar cambios' : 'Guardar nota', 'fb-guardar', '', x.cargando ? 'off' : '')}
    ${edit ? `<div style="height:10px"></div>${btn('Borrar la nota', 'fb-borrar', '', 'soft')}` : ''}`;
}
const fbPintar = () => { if (hojaAbierta() && FBF) { const t = $('#fb-txt'); if (t) FBF.txt = t.value; repintarHoja(fbHoja()); } };
function blobAUrl(b) { return new Promise((ok, ko) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = ko; r.readAsDataURL(b); }); }
function fbVideoInfo(file) {
  return new Promise(ok => {
    const v = document.createElement('video'), url = URL.createObjectURL(file); let hecho = false;
    const fin = (dur, th) => { if (hecho) return; hecho = true; URL.revokeObjectURL(url); ok({ dur: dur || 0, th: th || '' }); };
    v.muted = true; v.playsInline = true; v.preload = 'metadata'; v.src = url;
    v.onloadedmetadata = () => { const d = isFinite(v.duration) ? v.duration : 0; try { v.currentTime = Math.min(.5, d / 3); } catch (e) { fin(d); } v.onseeked = () => {
      try { const k = 180 / Math.max(v.videoWidth, v.videoHeight, 1), c = document.createElement('canvas'); c.width = Math.round(v.videoWidth * k); c.height = Math.round(v.videoHeight * k);
        c.getContext('2d').drawImage(v, 0, 0, c.width, c.height); fin(d, c.toDataURL('image/jpeg', .6)); } catch (e) { fin(d); } }; };
    v.onerror = () => fin(0); setTimeout(() => fin(isFinite(v.duration) ? v.duration : 0), 6000);
  });
}
async function fbAnadir(files) {
  if (!FBF) return; FBF.aviso = ''; FBF.cargando = true; fbPintar();
  const avisos = [];
  for (const f of files) {
    try {
      const id = uid(), esV = /^video\//.test(f.type) || /\.(mov|mp4|m4v)$/i.test(f.name);
      if (esV) {
        if (f.size > FB_MAX) { avisos.push(`<b>Este vídeo ocupa ${tamTxt(f.size)}.</b> El máximo es ${Math.round(FB_MAX / 1048576)} MB: recórtalo o grábalo en 720p y vuelve a añadirlo.`); continue; }
        const inf = await fbVideoInfo(f); await IDB.put('fb.' + id, f);
        FBF.arch.push({ id, t: 'vid', mime: f.type || 'video/quicktime', ext: (f.name.match(/\.(\w+)$/) || [, 'mov'])[1].toLowerCase(), tam: f.size, dur: inf.dur, th: inf.th });
      } else if (/^image\//.test(f.type) || /\.(png|jpe?g|heic|webp)$/i.test(f.name)) {
        const b = await reducirFoto(f, 1800, .82), th = await blobAUrl(await reducirFoto(f, 180, .6)); await IDB.put('fb.' + id, b);
        FBF.arch.push({ id, t: 'img', mime: 'image/jpeg', ext: 'jpg', tam: b.size, th });
      } else avisos.push(`<b>${esc(f.name)}</b> no es una foto ni un vídeo.`);
    } catch (e) { avisos.push(`No se ha podido añadir <b>${esc(f.name || 'el archivo')}</b>. Prueba con otro.`); }
  }
  FBF.cargando = false; FBF.aviso = avisos.join('<br>'); fbPintar();
}
document.addEventListener('change', e => { if (e.target && e.target.id === 'fb-file') { const fs = [...e.target.files]; e.target.value = ''; if (fs.length) fbAnadir(fs); } });

/* ---------- subir a Drive (si la copia está conectada) ---------- */
var FB_SUBIENDO = false;
async function fbSubirPend() {
  if (!S.copia.url || FB_SUBIENDO || !navigator.onLine) return; FB_SUBIENDO = true;
  try {
    for (const x of S.fb) for (const a of x.arch) {
      if (a.d) continue; const b = await IDB.get('fb.' + a.id).catch(() => null); if (!b) continue;
      const j = await api(S.copia.url, S.copia.clave, 'fb-subir', { nombre: fbNombreArchivo(x, a), mime: a.mime, datos: await blobA64(b) });
      a.d = j.id; save();
    }
  } catch (e) {} FB_SUBIENDO = false;
}
function fbNombreArchivo(x, a) { const i = x.arch.filter(y => y.t === a.t).indexOf(a) + 1; return `${x.sec} · ${a.t === 'vid' ? 'video' : 'captura'}_${i} · ${x.id}.${a.ext}`; }
async function fbBlob(a) {
  let b = await IDB.get('fb.' + a.id).catch(() => null); if (b) return b;
  if (a.d && S.copia.url) { const r = await api(S.copia.url, S.copia.clave, 'g-archivo', { id: a.d }); b = b64ABlob(r.datos, r.mime || a.mime); await IDB.put('fb.' + a.id, b).catch(() => {}); return b; }
  return null;
}
setTimeout(fbSubirPend, 4000);
addEventListener('online', () => setTimeout(fbSubirPend, 2000));

/* ---------- exportar en zip ---------- */
function cargarJSZip() {
  if (window.JSZip) return Promise.resolve(window.JSZip); if (JSZIP_P) return JSZIP_P;
  JSZIP_P = new Promise((ok, ko) => { const s = document.createElement('script'); s.src = 'vendor/jszip.min.js'; s.onload = () => window.JSZip ? ok(window.JSZip) : ko(new Error('jszip')); s.onerror = () => { JSZIP_P = null; ko(new Error('jszip')); }; document.head.appendChild(s); });
  return JSZIP_P;
}
const fbParaExportar = () => S.fb.filter(x => FB_EXP === 't' || !x.hecha).sort((a, b) => a.ts - b.ts);
function fbExportHoja() {
  const xs = fbParaExportar(), ar = xs.flatMap(x => x.arch), cap = ar.filter(a => a.t === 'img').length, vid = ar.length - cap, tam = ar.reduce((s, a) => s + (a.tam || 0), 0);
  const f = hoy(), nom = 'Ruta71_feedback_' + f, conA = xs.map((x, i) => [x, i]).filter(([x]) => x.arch.length);
  return `<h2>Exportar feedback</h2><div class="sub">El zip se crea en el móvil, sin servicios externos.</div>
    ${segHtml([['p', 'Solo pendientes'], ['t', 'Todas']], FB_EXP, 'fb-exp')}
    <div class="fbst">${[[xs.length, plural(xs.length, 'nota', 'notas').replace(/^\d+ /, '')], [cap, cap === 1 ? 'captura' : 'capturas'], [vid, vid === 1 ? 'vídeo' : 'vídeos'], [tamTxt(tam || 0), 'en total']].map(([n, t]) => `<div class="card"><b class="m">${n}</b><small>${t}</small></div>`).join('')}</div>
    <div class="lab">Qué lleva el zip</div><div class="card fbtree">
      <div class="r0">${ic('carpeta', 18)}<b>${nom}</b></div>
      <div class="r1">${ic('doc', 17)}<div><b>feedback.txt</b><small>${plural(xs.length, 'nota numerada', 'notas numeradas')}: fecha, sección, estado, texto y sus archivos</small></div></div>
      ${conA.slice(0, 3).map(([x, i]) => `<div class="r1">${ic('carpeta', 17)}<div><b>${pad(i + 1)}_${esc(x.sec)}</b><small>${x.arch.map(a => (a.t === 'vid' ? 'video_' : 'captura_') + (x.arch.filter(y => y.t === a.t).indexOf(a) + 1) + '.' + a.ext).join(' · ')}</small></div></div>`).join('')}
      ${conA.length > 3 ? `<div class="r1"><small>y ${plural(conA.length - 3, 'carpeta más', 'carpetas más')}, una por cada nota con archivos</small></div>` : ''}</div>
    <p class="note">Pásame el zip en la conversación y te digo cuáles meto en la siguiente versión.</p>
    <div style="height:8px"></div>${btn(ic('bajar', 19, 2) + 'Descargar zip', 'fb-zip', '', xs.length ? '' : 'off')}`;
}
async function fbHacerZip() {
  const xs = fbParaExportar(); if (!xs.length) return;
  hoja(`<h2>Preparando el zip…</h2><div class="sub">Un momento${xs.some(x => x.arch.some(a => a.t === 'vid')) ? ': los vídeos tardan un poco' : ''}.</div>`);
  try {
    const Z = await cargarJSZip(), z = new Z(), nom = 'Ruta71_feedback_' + hoy(), raiz = z.folder(nom), d = new Date(), faltan = [];
    const L = [`RUTA 71 · FEEDBACK`, `Exportado el ${d.toLocaleDateString('es-ES')} a las ${pad(d.getHours())}:${pad(d.getMinutes())} · versión ${VERSION}`,
      `${plural(xs.length, 'nota', 'notas')} (${FB_EXP === 't' ? 'todas' : 'solo pendientes'})`, ''];
    for (let i = 0; i < xs.length; i++) {
      const x = xs[i], n = pad(i + 1), dt = new Date(x.ts), carp = `${n}_${x.sec.replace(/[\\/:*?"<>|]/g, '-')}`, nombres = [];
      for (const a of x.arch) {
        const fn = (a.t === 'vid' ? 'video_' : 'captura_') + (x.arch.filter(y => y.t === a.t).indexOf(a) + 1) + '.' + a.ext;
        const b = await fbBlob(a).catch(() => null);
        if (b) { raiz.folder(carp).file(fn, b); nombres.push(carp + '/' + fn); } else { nombres.push(fn + ' (no está en este dispositivo)'); faltan.push(fn); }
      }
      L.push('--------------------------------------------------------------',
        `${n} · ${dt.toLocaleDateString('es-ES')} ${pad(dt.getHours())}:${pad(dt.getMinutes())} · ${x.sec} · ${x.hecha ? 'Hecha' + (x.hv ? ' en la ' + x.hv : '') : 'Pendiente'} · código ${x.id}`,
        '', x.txt, '');
      if (nombres.length) L.push('Archivos: ' + nombres.join(', '), '');
    }
    raiz.file('feedback.txt', L.join('\r\n'));
    const blob = await z.generateAsync({ type: 'blob', compression: 'STORE' });
    const f = new File([blob], nom + '.zip', { type: 'application/zip' });
    if (FB_ZIP && FB_ZIP.url) URL.revokeObjectURL(FB_ZIP.url); FB_ZIP = { f, url: URL.createObjectURL(f) };
    const comp = navigator.canShare && navigator.canShare({ files: [f] });
    hoja(`<h2>Zip listo</h2><div class="sub">${esc(f.name)} · ${tamTxt(f.size)}${faltan.length ? `<br>${plural(faltan.length, 'archivo no está', 'archivos no están')} en este dispositivo ni en tu Drive: va el nombre en feedback.txt.` : ''}</div>
      <div style="height:6px"></div>${comp ? btn(ic('subir', 19, 2) + 'Compartir o guardar', 'fb-zip-comp') + '<div style="height:10px"></div>' : ''}${btn(ic('bajar', 19, 2) + 'Descargar el zip', 'fb-zip-abrir', '', comp ? 'soft' : '')}
      <p class="note">En el iPhone: «Compartir o guardar» → «Guardar en Archivos». Después me lo subes a la conversación.</p>`);
  } catch (e) { hoja(`<h2>No se ha podido crear el zip</h2><div class="sub">Comprueba que la carpeta vendor está subida a GitHub con el archivo jszip.min.js.</div>`); }
}

/* ---------- ver una captura o un vídeo ---------- */
async function fbVer(aid) {
  let a = null, x = null; for (const y of S.fb) { const z = y.arch.find(q => q.id === aid); if (z) { a = z; x = y; break; } }
  if (!a && FBF) a = FBF.arch.find(q => q.id === aid); if (!a) return;
  hoja(`<h2>${a.t === 'vid' ? 'Vídeo' : 'Captura'}</h2><div class="sub">${x ? esc(x.sec) + ' · ' + fbCuando(x.ts) : ''}</div><div class="fbver"><i class="gira"></i></div>`);
  try { const b = await fbBlob(a); const c = $('.fbver'); if (!c) return;
    if (!b) { c.innerHTML = '<small>No está en este dispositivo ni en tu Drive.</small>'; return; }
    const u = URL.createObjectURL(b); c.innerHTML = a.t === 'vid' ? `<video src="${u}" controls playsinline></video>` : `<img src="${u}" alt="">`; }
  catch (e) { const c = $('.fbver'); if (c) c.innerHTML = '<small>No se ha podido abrir.</small>'; }
}

/* ---------- acciones ---------- */
Object.assign(ACC, {
  'fb-tab': x => { S.ui.fbtab = x; save(true); refresh(); },
  'fb-nueva': () => { FBF = { id: null, txt: '', sec: ACT === 'feedback' ? 'General' : 'General', arch: [], aviso: '' }; hoja(fbHoja(), () => setTimeout(() => { const t = $('#fb-txt'); if (t) t.focus(); }, 350)); },
  'fb-editar': x => { const n = S.fb.find(y => y.id === x); if (!n) return; FBF = { id: n.id, txt: n.txt, sec: n.sec, arch: n.arch.map(a => Object.assign({}, a)), aviso: '' }; hoja(fbHoja()); },
  'fb-sec': x => { if (!FBF) return; FBF.sec = x; fbPintar(); },
  'fb-quitar': x => { if (!FBF) return; FBF.arch = FBF.arch.filter(a => a.id !== x);
    if (!S.fb.some(n => n.arch.some(a => a.id === x))) IDB.del('fb.' + x).catch(() => {});   // aún sin guardar: fuera del dispositivo
    fbPintar(); },
  'fb-guardar': () => {
    if (!FBF || FBF.cargando) return; const t = val('fb-txt');
    if (!t) { FBF.txt = ''; FBF.aviso = 'Escribe la nota antes de guardarla.'; repintarHoja(fbHoja()); const ta = $('#fb-txt'); if (ta) ta.focus(); return; }
    const f = FBF;
    commit(() => {
      if (f.id) { const n = S.fb.find(y => y.id === f.id); if (n) { const fuera = n.arch.filter(a => !f.arch.some(b => b.id === a.id)); fbQuitarArchivos(fuera); n.txt = t; n.sec = f.sec; n.arch = f.arch; } }
      else S.fb.push({ id: uid(), ts: Date.now(), sec: f.sec, txt: t, arch: f.arch, hecha: false, hv: null });
    }, f.id ? 'Nota guardada' : 'Nota apuntada', false);
    FBF = null; cerrarHoja(); fbSubirPend();
  },
  'fb-borrar': () => { if (!FBF || !FBF.id) return; const id = FBF.id; FBF = null; cerrarHoja();
    commit(() => { const n = S.fb.find(y => y.id === id); if (n) fbQuitarArchivos(n.arch); S.fb = S.fb.filter(y => y.id !== id); }, 'Nota borrada', false); },
  'fb-hecha': x => { const n = S.fb.find(y => y.id === x); if (!n) return; commit(() => { n.hecha = !n.hecha; if (!n.hecha) n.hv = null; }, n.hecha ? 'Vuelve a pendientes' : 'Marcada como hecha'); },
  'fb-ver': x => fbVer(x),
  'fb-exportar': () => { FB_EXP = 'p'; hoja(fbExportHoja()); },
  'fb-exp': x => { FB_EXP = x; repintarHoja(fbExportHoja()); },
  'fb-zip': () => fbHacerZip(),
  'fb-zip-comp': () => { if (FB_ZIP) navigator.share({ files: [FB_ZIP.f], title: FB_ZIP.f.name }).catch(() => {}); },
  'fb-zip-abrir': () => { if (!FB_ZIP) return; const a = document.createElement('a'); a.href = FB_ZIP.url; a.download = FB_ZIP.f.name; document.body.appendChild(a); a.click(); a.remove(); }
});
function fbQuitarArchivos(xs) {
  xs.forEach(a => { IDB.del('fb.' + a.id).catch(() => {}); if (a.d && S.copia.url) api(S.copia.url, S.copia.clave, 'fb-borrar', { id: a.d }).catch(() => {}); });
}
