// Lista de projetos do portfólio.
//
// Para acrescentar uma obra nova, copie um bloco { ... } e altere:
//   id        — nome curto, sem espaços nem acentos (aparece no endereço da página)
//   category  — 'construcao', 'renovacao' ou 'manutencao'
//   example   — true enquanto for um projeto de exemplo; apague a linha nas obras reais
//   cover     — foto principal (na pasta images/)
//   images    — fotos da galeria, pela ordem em que devem aparecer
//   textos    — sempre em pt, en e ru
//
// A ordem da lista é a ordem no portfólio: a primeira obra aparece primeiro.
const PROJECTS = [
  {
    id: 'piscina-interior-10x4',
    category: 'construcao',
    example: true,
    cover: 'images/publica.jpg',
    images: ['images/publica.jpg', 'images/casamaquinas.jpg', 'images/eletrolise.jpg', 'images/inox.jpg'],
    title: {
      pt: 'Piscina interior, 10 × 4 m',
      en: 'Indoor pool, 10 × 4 m',
      ru: 'Крытый бассейн, 10 × 4 м'
    },
    excerpt: {
      pt: 'Piscina interior em betão, revestida a mosaico, com iluminação LED e desumidificação do espaço.',
      en: 'Indoor concrete pool with mosaic finish, LED lighting and room dehumidification.',
      ru: 'Крытый бетонный бассейн с мозаичной отделкой, LED-подсветкой и осушением помещения.'
    },
    description: {
      pt: 'Construímos esta piscina interior de raiz, numa cave com parede de pedra. A estrutura é em betão armado, revestida a mosaico de vidro. A casa das máquinas ficou num compartimento técnico ao lado, com filtragem por areia e tratamento automático por eletrólise de sal. A iluminação LED embutida e a desumidificação do espaço permitem usar a piscina durante todo o ano.',
      en: 'We built this indoor pool from scratch, in a basement with a stone wall. The structure is reinforced concrete with a glass mosaic finish. The plant room sits in a technical area next door, with sand filtration and automatic salt electrolysis. Built-in LED lighting and room dehumidification make the pool usable all year round.',
      ru: 'Этот крытый бассейн мы построили с нуля в цокольном этаже с каменной стеной. Конструкция из монолитного железобетона, отделка — стеклянная мозаика. Техническое помещение расположено рядом: песочная фильтрация и автоматическая обработка воды солевым электролизом. Встроенная LED-подсветка и осушение воздуха позволяют пользоваться бассейном круглый год.'
    },
    specs: {
      dimensions: '10 × 4 × 1,5 m',
      filtration: { pt: 'Skimmer', en: 'Skimmer', ru: 'Скиммерная' },
      finish: { pt: 'Mosaico de vidro', en: 'Glass mosaic', ru: 'Стеклянная мозаика' },
      use: { pt: 'Privada', en: 'Private', ru: 'Частный' },
      location: { pt: 'Cascais', en: 'Cascais', ru: 'Кашкайш' },
      duration: { pt: '10 semanas', en: '10 weeks', ru: '10 недель' }
    }
  },
  {
    id: 'piscina-pedra-natural-12x3',
    category: 'construcao',
    example: true,
    cover: 'images/ceramica.jpg',
    images: ['images/ceramica.jpg', 'images/tela.jpg', 'images/curtos.jpg', 'images/bombacalor.jpg'],
    title: {
      pt: 'Piscina em pedra natural, 12 × 3 m',
      en: 'Natural stone pool, 12 × 3 m',
      ru: 'Бассейн из натурального камня, 12 × 3 м'
    },
    excerpt: {
      pt: 'Piscina de nado longa e estreita, revestida a pedra natural, com bomba de calor e iluminação noturna.',
      en: 'Long, narrow lap pool finished in natural stone, with a heat pump and night lighting.',
      ru: 'Длинный узкий бассейн для плавания с отделкой из натурального камня, тепловым насосом и ночной подсветкой.'
    },
    description: {
      pt: 'Uma piscina de nado com 12 metros, pensada para treinar todos os dias. O revestimento em pedra natural dá à água um tom verde-escuro e integra a piscina no jardim. Tem degraus de entrada em toda a largura, bomba de calor para prolongar a época de banhos e iluminação LED para uso ao fim do dia.',
      en: 'A 12-metre lap pool designed for daily training. The natural stone finish gives the water a deep green tone and blends the pool into the garden. It has full-width entry steps, a heat pump to extend the swimming season and LED lighting for evening use.',
      ru: 'Бассейн длиной 12 метров для ежедневных тренировок. Отделка из натурального камня придаёт воде глубокий зелёный оттенок и вписывает бассейн в сад. Входные ступени во всю ширину, тепловой насос продлевает купальный сезон, LED-подсветка — для вечернего плавания.'
    },
    specs: {
      dimensions: '12 × 3 × 1,4 m',
      filtration: { pt: 'Transbordo', en: 'Overflow', ru: 'Переливная' },
      finish: { pt: 'Pedra natural', en: 'Natural stone', ru: 'Натуральный камень' },
      use: { pt: 'Privada', en: 'Private', ru: 'Частный' },
      location: { pt: 'Sintra', en: 'Sintra', ru: 'Синтра' },
      duration: { pt: '12 semanas', en: '12 weeks', ru: '12 недель' }
    }
  },
  {
    id: 'condominio-25x12',
    category: 'construcao',
    example: true,
    cover: 'images/privada.jpg',
    images: ['images/privada.jpg', 'images/inox.jpg', 'images/casamaquinas.jpg', 'images/enterrado.jpg'],
    title: {
      pt: 'Piscina de condomínio, 25 × 12 m',
      en: 'Residential complex pool, 25 × 12 m',
      ru: 'Бассейн жилого комплекса, 25 × 12 м'
    },
    excerpt: {
      pt: 'Piscina de grandes dimensões com zona infantil separada, relvado e equipamento para uso público.',
      en: 'Large pool with a separate children’s area, lawn and equipment for public use.',
      ru: 'Большой бассейн с отдельной детской зоной, газоном и оборудованием для общественного использования.'
    },
    description: {
      pt: 'Projeto para um condomínio, com uma piscina principal de 25 metros e uma piscina infantil separada. O sistema de filtragem foi dimensionado para uso intensivo no verão, com escadas em inox, balneários e zona relvada com chapéus de sol.',
      en: 'A project for a residential complex, with a 25-metre main pool and a separate children’s pool. The filtration system is sized for heavy summer use, with stainless steel ladders, changing rooms and a lawn area with parasols.',
      ru: 'Проект для жилого комплекса: основной бассейн длиной 25 метров и отдельный детский бассейн. Система фильтрации рассчитана на интенсивное использование летом; лестницы из нержавеющей стали, раздевалки и газон с зонтами.'
    },
    specs: {
      dimensions: '25 × 12 × 1,2–2 m',
      filtration: { pt: 'Transbordo', en: 'Overflow', ru: 'Переливная' },
      finish: { pt: 'Tela armada', en: 'Reinforced liner', ru: 'Армированная ПВХ-плёнка' },
      use: { pt: 'Pública', en: 'Public', ru: 'Общественный' },
      location: { pt: 'Estoril', en: 'Estoril', ru: 'Эшторил' },
      duration: { pt: '20 semanas', en: '20 weeks', ru: '20 недель' }
    }
  },
  {
    id: 'renovacao-mosaico-8x4',
    category: 'renovacao',
    example: true,
    cover: 'images/pastilha.jpg',
    images: ['images/novo.jpg', 'images/pastilha.jpg', 'images/renovacao.jpg', 'images/retos.jpg'],
    title: {
      pt: 'Renovação com mosaico, 8 × 4 m',
      en: 'Mosaic renovation, 8 × 4 m',
      ru: 'Реконструкция с мозаикой, 8 × 4 м'
    },
    excerpt: {
      pt: 'Piscina antiga com fugas renovada por completo: impermeabilização, mosaico novo e escada de entrada.',
      en: 'An old, leaking pool fully renovated: waterproofing, new mosaic tiles and entry steps.',
      ru: 'Старый протекающий бассейн полностью обновлён: гидроизоляция, новая мозаика и входные ступени.'
    },
    description: {
      pt: 'Esta piscina tinha mais de 20 anos e perdia água. Retirámos o revestimento antigo, reparámos e impermeabilizámos a estrutura e aplicámos mosaico novo. Acrescentámos uma escada de entrada em toda a largura e substituímos a filtragem por um sistema moderno e mais eficiente.',
      en: 'This pool was over 20 years old and losing water. We removed the old finish, repaired and waterproofed the structure and laid new mosaic tiles. We added full-width entry steps and replaced the filtration with a modern, more efficient system.',
      ru: 'Бассейну было больше 20 лет, и он терял воду. Мы сняли старую отделку, отремонтировали и загидроизолировали чашу, уложили новую мозаику. Добавили входные ступени во всю ширину и заменили фильтрацию на современную и более экономичную систему.'
    },
    specs: {
      dimensions: '8 × 4 × 1,5 m',
      filtration: { pt: 'Skimmer', en: 'Skimmer', ru: 'Скиммерная' },
      finish: { pt: 'Mosaico', en: 'Mosaic', ru: 'Мозаика' },
      use: { pt: 'Privada', en: 'Private', ru: 'Частный' },
      location: { pt: 'Cascais', en: 'Cascais', ru: 'Кашкайш' },
      duration: { pt: '6 semanas', en: '6 weeks', ru: '6 недель' }
    }
  },
  {
    id: 'manutencao-anual-moradia',
    category: 'manutencao',
    example: true,
    cover: 'images/diagonais.jpg',
    images: ['images/diagonais.jpg', 'images/retos.jpg', 'images/casamaquinas.jpg', 'images/eletrolise.jpg'],
    title: {
      pt: 'Manutenção anual de moradia',
      en: 'Annual maintenance for a villa',
      ru: 'Ежегодное обслуживание виллы'
    },
    excerpt: {
      pt: 'Visitas semanais no verão e quinzenais no inverno, com controlo da água e revisão dos equipamentos.',
      en: 'Weekly visits in summer and fortnightly in winter, with water testing and equipment checks.',
      ru: 'Еженедельные визиты летом и раз в две недели зимой: контроль воды и проверка оборудования.'
    },
    description: {
      pt: 'Contrato de manutenção anual para a piscina de uma moradia. No verão visitamos todas as semanas e no inverno de 15 em 15 dias. Em cada visita limpamos o fundo e as paredes, verificamos o pH e o cloro, lavamos o filtro e revemos a bomba e a eletrólise. O cliente recebe um pequeno relatório depois de cada visita.',
      en: 'An annual maintenance contract for a villa pool. We visit every week in summer and every two weeks in winter. Each visit includes cleaning the floor and walls, checking pH and chlorine, backwashing the filter and inspecting the pump and electrolysis unit. The client receives a short report after every visit.',
      ru: 'Годовой договор на обслуживание бассейна виллы. Летом приезжаем каждую неделю, зимой — раз в две недели. Во время визита чистим дно и стены, проверяем pH и хлор, промываем фильтр, осматриваем насос и электролизёр. После каждого визита клиент получает краткий отчёт.'
    },
    specs: {
      dimensions: '9 × 4 × 1,6 m',
      filtration: { pt: 'Skimmer', en: 'Skimmer', ru: 'Скиммерная' },
      finish: { pt: 'Tela armada', en: 'Reinforced liner', ru: 'Армированная ПВХ-плёнка' },
      use: { pt: 'Privada', en: 'Private', ru: 'Частный' },
      location: { pt: 'Birre, Cascais', en: 'Birre, Cascais', ru: 'Бирре, Кашкайш' },
      duration: { pt: 'Contrato anual', en: 'Annual contract', ru: 'Годовой договор' }
    }
  }
];

const CATEGORY_KEYS = {
  construcao: 'pf.filter.construcao',
  renovacao: 'pf.filter.renovacao',
  manutencao: 'pf.filter.manutencao'
};

// Devolve o texto na língua pedida (ou em português, se faltar).
function pick(value, lang) {
  if (value == null || typeof value === 'string') return value ?? '';
  return value[lang] ?? value.pt ?? '';
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Cartão de projeto, usado no portfólio, na página principal e em "Outros projetos".
function projectCardHtml(p, lang) {
  const href = `projeto.html?id=${encodeURIComponent(p.id)}`;
  return `
    <a class="pcard" href="${href}">
      <div class="pcard-img">
        <img src="${p.cover}" alt="${escapeHtml(pick(p.title, lang))}" loading="lazy">
        <span class="pcard-cat">${escapeHtml(t(CATEGORY_KEYS[p.category], lang))}</span>
        ${p.example ? `<span class="pcard-example">${escapeHtml(t('pf.example', lang))}</span>` : ''}
      </div>
      <div class="pcard-body">
        <h3>${escapeHtml(pick(p.title, lang))}</h3>
        <p>${escapeHtml(pick(p.excerpt, lang))}</p>
        <span class="pcard-more">${escapeHtml(t('pf.more', lang))} →</span>
      </div>
    </a>`;
}
