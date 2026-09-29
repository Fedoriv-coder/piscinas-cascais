// Traduções do site. Nos textos fixos, o português é o texto original do HTML
// e aqui ficam o inglês e o russo, com a mesma chave usada em data-i18n.
const TRANSLATIONS = {
  // Português só para os textos criados por JavaScript (portfólio).
  pt: {
    'nav.portfolio': 'Portfólio',
    'pf.meta.title': 'Portfólio — Piscinas Cascais',
    'pf.intro': 'Projetos de construção, renovação e manutenção de piscinas na zona de Cascais. Carregue num projeto para ver as fotos e os detalhes da obra.',
    'pf.filter.all': 'Todos',
    'pf.filter.construcao': 'Construção',
    'pf.filter.renovacao': 'Renovação',
    'pf.filter.manutencao': 'Manutenção',
    'pf.example': 'Projeto exemplo',
    'pf.example.note': 'Estes projetos são exemplos ilustrativos. As nossas obras reais vão aparecer aqui em breve.',
    'pf.more': 'Ver projeto',
    'pf.empty': 'Ainda não há projetos nesta categoria.',
    'pj.back': '← Voltar ao portfólio',
    'pj.specs': 'Características',
    'pj.spec.dimensions': 'Dimensões (C × L × P)',
    'pj.spec.filtration': 'Tipo de filtragem',
    'pj.spec.finish': 'Revestimento',
    'pj.spec.use': 'Utilização',
    'pj.spec.location': 'Localização',
    'pj.spec.duration': 'Duração',
    'pj.gallery': 'Galeria',
    'pj.gallery.hint': 'Carregue numa foto para a ver em tamanho grande.',
    'pj.related': 'Outros projetos',
    'pj.cta.title': 'Quer uma piscina assim?',
    'pj.cta.text': 'Responda a um pequeno questionário e receba uma estimativa em menos de um minuto.',
    'pj.cta.btn': 'Obter orçamento',
    'pj.notfound': 'Projeto não encontrado.',
    'lb.close': 'Fechar',
    'lb.prev': 'Foto anterior',
    'lb.next': 'Foto seguinte'
  },
  en: {
    'nav.portfolio': 'Portfolio',
    'pf.meta.title': 'Portfolio — Piscinas Cascais',
    'pf.intro': 'Pool construction, renovation and maintenance projects in the Cascais area. Click a project to see its photos and details.',
    'pf.filter.all': 'All',
    'pf.filter.construcao': 'Construction',
    'pf.filter.renovacao': 'Renovation',
    'pf.filter.manutencao': 'Maintenance',
    'pf.example': 'Sample project',
    'pf.example.note': 'These projects are illustrative examples. Our real builds will appear here soon.',
    'pf.more': 'View project',
    'pf.empty': 'No projects in this category yet.',
    'pj.back': '← Back to portfolio',
    'pj.specs': 'Specifications',
    'pj.spec.dimensions': 'Dimensions (L × W × D)',
    'pj.spec.filtration': 'Filtration type',
    'pj.spec.finish': 'Finish',
    'pj.spec.use': 'Use',
    'pj.spec.location': 'Location',
    'pj.spec.duration': 'Duration',
    'pj.gallery': 'Gallery',
    'pj.gallery.hint': 'Click a photo to see it full size.',
    'pj.related': 'Other projects',
    'pj.cta.title': 'Want a pool like this?',
    'pj.cta.text': 'Answer a short questionnaire and get an estimate in under a minute.',
    'pj.cta.btn': 'Get a quote',
    'pj.notfound': 'Project not found.',
    'lb.close': 'Close',
    'lb.prev': 'Previous photo',
    'lb.next': 'Next photo',
    'meta.title': 'Piscinas Cascais — Pool Construction and Renovation',
    'cta.float.build': 'Get a construction quote',
    'cta.float.maint': 'Get a maintenance quote',
    'hero.title': 'Swimming pool<br>construction',
    'hero.sub': 'turnkey',
    'loc': 'We work in the Cascais area',
    's1.title': 'Want to build a pool?<br>Find out how much it will cost!',
    'video1.title': 'How much does it cost to build a pool?',
    'video.soon': 'Video coming soon',
    's1.p1': 'A short questionnaire — under a minute — to estimate the total cost of your turnkey pool.',
    's1.p2': 'Get a detailed quote right away, for construction or maintenance.',
    'cta.build': 'Get a quote<br>for pool construction',
    'val1.h': 'We build turnkey',
    'val1.p': 'We handle every stage of the work and hand over a finished pool.',
    'val2.h': 'Accurate estimate',
    'val2.p': 'The estimated price does not increase during construction.',
    'val3.h': 'Quality comes first',
    'val3.p': 'Warranty on all work and installed equipment.',
    'val4.h': 'Your safety',
    'val4.p': 'All work carried out in line with current regulations.',
    'video2.title': 'About our company',
    'about.title': 'About us',
    'about.1': 'Focused exclusively on pools, with high quality standards.',
    'about.2': 'Fast quote tailored to your site.',
    'about.3': 'Safety and efficiency first.',
    'about.4': 'Personal support, from quote to handover.',
    'port.title': 'Our portfolio',
    'port.link': 'see portfolio',
    'port.soon.h': 'Our first projects are coming soon',
    'port.soon.p': 'As soon as we complete our first builds, the real projects will appear here.',
    'port.all': 'See all our work',
    'reno.title': 'We also renovate pools!',
    'reno.text': 'Contact us if your pool needs <b>restoration</b> or <b>equipment replacement</b>.',
    'reno.1': 'Renovation of pools of any type and size.',
    'reno.2': 'Replacing equipment with modern systems.',
    'reno.3': 'Finishes, including liner and new mosaic tiles.',
    'reno.4': 'Automatic water filtration systems.',
    'reno.btn': 'SEND REQUEST',
    'maint.title': 'We also do pool maintenance!',
    'maint.text': 'Regular cleaning visits, water treatment and equipment checks — your pool always ready to use.',
    'maint.cta': 'Get a quote<br>for pool maintenance',
    'maint.btn': 'REQUEST INFORMATION',
    'maint.port.title': 'Our maintenance portfolio',
    'maint.port.h': 'Our first maintenance clients are coming soon',
    'maint.port.p': 'As soon as we start regular maintenance on pools, the real cases will appear here.',
    'footer.tagline': 'We build high-quality pools in Cascais and the surrounding area.',
    'footer.contacts': 'Contacts',
    'footer.hours.title': 'Working hours',
    'footer.hours': 'Monday – Sunday: 07:00 – 19:00',
    'footer.bottom': '© 2026 Piscinas Cascais. Prototype in development.',
    'lang.label': 'Language'
  },
  ru: {
    'nav.portfolio': 'Портфолио',
    'pf.meta.title': 'Портфолио — Piscinas Cascais',
    'pf.intro': 'Проекты строительства, ремонта и обслуживания бассейнов в районе Кашкайша. Нажмите на проект, чтобы увидеть фото и детали.',
    'pf.filter.all': 'Все',
    'pf.filter.construcao': 'Строительство',
    'pf.filter.renovacao': 'Ремонт',
    'pf.filter.manutencao': 'Обслуживание',
    'pf.example': 'Пример проекта',
    'pf.example.note': 'Эти проекты — иллюстративные примеры. Наши реальные работы скоро появятся здесь.',
    'pf.more': 'Смотреть проект',
    'pf.empty': 'В этой категории пока нет проектов.',
    'pj.back': '← Назад к портфолио',
    'pj.specs': 'Характеристики',
    'pj.spec.dimensions': 'Размеры (Д × Ш × Г)',
    'pj.spec.filtration': 'Тип фильтрации',
    'pj.spec.finish': 'Отделка',
    'pj.spec.use': 'Назначение',
    'pj.spec.location': 'Расположение',
    'pj.spec.duration': 'Срок',
    'pj.gallery': 'Галерея',
    'pj.gallery.hint': 'Нажмите на фото, чтобы увеличить.',
    'pj.related': 'Другие проекты',
    'pj.cta.title': 'Хотите такой бассейн?',
    'pj.cta.text': 'Ответьте на несколько вопросов и получите расчёт меньше чем за минуту.',
    'pj.cta.btn': 'Получить расчёт',
    'pj.notfound': 'Проект не найден.',
    'lb.close': 'Закрыть',
    'lb.prev': 'Предыдущее фото',
    'lb.next': 'Следующее фото',
    'meta.title': 'Piscinas Cascais — строительство и ремонт бассейнов',
    'cta.float.build': 'Рассчитать стоимость строительства',
    'cta.float.maint': 'Рассчитать стоимость обслуживания',
    'hero.title': 'Строительство<br>бассейнов',
    'hero.sub': 'под ключ',
    'loc': 'Работаем в районе Кашкайша',
    's1.title': 'Хотите построить бассейн?<br>Узнайте, сколько это стоит!',
    'video1.title': 'Сколько стоит построить бассейн?',
    'video.soon': 'Видео скоро',
    's1.p1': 'Короткая анкета — меньше минуты — чтобы оценить полную стоимость вашего бассейна «под ключ».',
    's1.p2': 'Получите подробный расчёт прямо сейчас — на строительство или обслуживание.',
    'cta.build': 'Получить расчёт<br>на строительство бассейна',
    'val1.h': 'Строим под ключ',
    'val1.p': 'Берём на себя все этапы работ и сдаём готовый бассейн.',
    'val2.h': 'Точная смета',
    'val2.p': 'Стоимость по смете не растёт в ходе строительства.',
    'val3.h': 'Качество прежде всего',
    'val3.p': 'Гарантия на все работы и установленное оборудование.',
    'val4.h': 'Ваша безопасность',
    'val4.p': 'Все работы выполняются по действующим нормам.',
    'video2.title': 'О нашей компании',
    'about.title': 'О компании',
    'about.1': 'Занимаемся только бассейнами, с высоким стандартом качества.',
    'about.2': 'Быстрый расчёт с учётом вашего участка.',
    'about.3': 'Безопасность и эффективность прежде всего.',
    'about.4': 'Личное сопровождение — от расчёта до сдачи объекта.',
    'port.title': 'Наше портфолио',
    'port.link': 'смотреть портфолио',
    'port.soon.h': 'Первые проекты скоро появятся',
    'port.soon.p': 'Как только мы завершим первые объекты, реальные проекты появятся здесь.',
    'port.all': 'Посмотреть все наши работы',
    'reno.title': 'Мы также ремонтируем бассейны!',
    'reno.text': 'Свяжитесь с нами, если вашему бассейну нужна <b>реставрация</b> или <b>замена оборудования</b>.',
    'reno.1': 'Ремонт бассейнов любого типа и размера.',
    'reno.2': 'Замена оборудования на современные системы.',
    'reno.3': 'Отделка, включая плёнку ПВХ и новую мозаику.',
    'reno.4': 'Автоматические системы фильтрации воды.',
    'reno.btn': 'ОТПРАВИТЬ ЗАЯВКУ',
    'maint.title': 'Мы также обслуживаем бассейны!',
    'maint.text': 'Регулярная чистка, обработка воды и проверка оборудования — ваш бассейн всегда готов к использованию.',
    'maint.cta': 'Получить расчёт<br>на обслуживание бассейна',
    'maint.btn': 'ЗАПРОСИТЬ ИНФОРМАЦИЮ',
    'maint.port.title': 'Наше портфолио по обслуживанию',
    'maint.port.h': 'Первые клиенты по обслуживанию скоро появятся',
    'maint.port.p': 'Как только мы начнём регулярное обслуживание бассейнов, реальные примеры появятся здесь.',
    'footer.tagline': 'Строим качественные бассейны в Кашкайше и окрестностях.',
    'footer.contacts': 'Контакты',
    'footer.hours.title': 'Часы работы',
    'footer.hours': 'Понедельник – воскресенье: 07:00 – 19:00',
    'footer.bottom': '© 2026 Piscinas Cascais. Прототип в разработке.',
    'lang.label': 'Язык'
  }
};

const LANGS = ['pt', 'en', 'ru'];
let currentLang = 'pt';

// Texto traduzido para uso em JavaScript.
function t(key, lang = currentLang) {
  return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.pt[key] ?? key;
}
const HTML_LANG = { pt: 'pt-PT', en: 'en', ru: 'ru' };

function getSavedLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (LANGS.includes(saved)) return saved;
  } catch (e) {}
  const browser = (navigator.language || '').slice(0, 2).toLowerCase();
  return LANGS.includes(browser) ? browser : 'pt';
}

function setLang(lang) {
  if (!LANGS.includes(lang)) lang = 'pt';
  const dict = TRANSLATIONS[lang] || {};

  document.querySelectorAll('[data-i18n]').forEach(el => {
    // Guarda o texto português original na primeira passagem.
    if (el.dataset.pt === undefined) el.dataset.pt = el.innerHTML;
    const key = el.dataset.i18n;
    el.innerHTML = lang === 'pt' ? el.dataset.pt : (dict[key] ?? el.dataset.pt);
  });

  const titleEl = document.querySelector('title');
  if (titleEl.dataset.pt === undefined) titleEl.dataset.pt = document.title;
  const titleKey = titleEl.dataset.i18nTitle || 'meta.title';
  document.title = lang === 'pt' ? titleEl.dataset.pt : (dict[titleKey] ?? titleEl.dataset.pt);

  document.documentElement.lang = HTML_LANG[lang];

  document.querySelectorAll('[data-lang-option]').forEach(opt => {
    opt.setAttribute('aria-checked', String(opt.dataset.langOption === lang));
  });
  const current = document.querySelector('[data-lang-current]');
  if (current) current.textContent = { pt: 'PT', en: 'ENG', ru: 'RUS' }[lang];

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria, lang));
  });

  try { localStorage.setItem('lang', lang); } catch (e) {}

  currentLang = lang;
  // Avisa as páginas com conteúdo gerado por JavaScript (portfólio) para se redesenharem.
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function initLangMenu() {
  const btn = document.querySelector('.lang-btn');
  const menu = document.querySelector('.lang-menu');
  if (!btn || !menu) return;

  const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
  const open = () => { menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); };

  btn.addEventListener('click', e => {
    e.stopPropagation();
    menu.hidden ? open() : close();
  });
  menu.addEventListener('click', e => {
    const opt = e.target.closest('[data-lang-option]');
    if (!opt) return;
    setLang(opt.dataset.langOption);
    close();
  });
  document.addEventListener('click', e => { if (!menu.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

document.addEventListener('DOMContentLoaded', () => {
  initLangMenu();
  setLang(getSavedLang());
});
