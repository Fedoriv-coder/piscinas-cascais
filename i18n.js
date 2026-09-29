// Traduções do site. O português é o texto original do HTML;
// aqui ficam só o inglês e o russo, com a mesma chave usada em data-i18n.
const TRANSLATIONS = {
  en: {
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
  document.title = lang === 'pt' ? titleEl.dataset.pt : (dict['meta.title'] ?? titleEl.dataset.pt);

  document.documentElement.lang = HTML_LANG[lang];

  document.querySelectorAll('[data-lang-option]').forEach(opt => {
    opt.setAttribute('aria-checked', String(opt.dataset.langOption === lang));
  });
  const current = document.querySelector('[data-lang-current]');
  if (current) current.textContent = { pt: 'PT', en: 'ENG', ru: 'RUS' }[lang];

  try { localStorage.setItem('lang', lang); } catch (e) {}
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
