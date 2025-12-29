<script>
// Переводы - вставьте ваш JSON сюда
const translations = {
  ru: {
    "Make someone smile all year long – for": "Подарите улыбку на весь год – для",
    "weddings": "свадеб",
    "birthdays": "дней рождения",
    "parties": "вечеринок",
    "any big day": "любого важного дня",
    "Turn one special day into 52 weeks of memories. Because some moments are meant to last.": "Превратите один особенный день в 52 недели воспоминаний. Потому что некоторые моменты должны длиться вечно.",
    "The perfect gift for:": "Идеальный подарок для:",
    "Corporate events": "Корпоративных мероприятий",
    "One day of celebration. 52 reminders of love.": "Один день праздника. 52 напоминания о любви.",
    "how it works": "как это работает",
    "Message in. Magic out.": "Сообщение внутрь. Магия наружу.",
    "No app download needed. Easy as 1, 2, 3.": "Не нужно скачивать приложение. Просто как 1, 2, 3.",
    "Set up your event and invite guests with one simple link or QR code flyer": "Создайте мероприятие и пригласите гостей одной простой ссылкой или QR-кодом",
    "Guests upload photos or videos with a short message — no app or signup required.": "Гости загружают фото или видео с коротким сообщением — без приложения и регистрации.",
    "We deliver their memories, week by week — into a beautiful online album that grows over time.": "Мы доставляем их воспоминания неделя за неделей — в красивый онлайн-альбом, который растёт со временем.",
    "You stay in control: track progress, manage invites, and make changes anytime.": "Вы контролируете: отслеживайте прогресс, управляйте приглашениями и вносите изменения в любое время.",
    "Try it for free": "Попробуйте бесплатно",
    "Send yourself a memory to see how it works – no sign-up required.": "Отправьте себе воспоминание, чтобы увидеть, как это работает — без регистрации.",
    "Create a test memory": "Создать тестовое воспоминание",
    "Reviews": "Отзывы",
    "What users remember": "Что помнят пользователи",
    "From weddings to birthdays, people all over the world have trusted 52memories to make one day last all year.": "От свадеб до дней рождения — люди по всему миру доверяют 52memories, чтобы один день длился весь год.",
    "Home": "Главная",
    "Pricing": "Цены",
    "Blog": "Блог",
    "Set up your event": "Создать мероприятие",
    "DASHBOARD": "ПАНЕЛЬ",
    "LOGIN": "ВХОД",
    "Step 1": "Шаг 1",
    "Step 2": "Шаг 2",
    "Step 3": "Шаг 3",
    "Step 4": "Шаг 4"
    // Добавьте остальные переводы
  },
  de: {
    // Немецкие переводы
  },
  fr: {
    // Французские переводы
  }
};

// Сохраняем оригинальные тексты
const originalTexts = new Map();
let currentLang = 'en';

// Функция для получения всех текстовых узлов
function getTextNodes(element) {
  const textNodes = [];
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        // Пропускаем пустые и whitespace-only узлы
        if (node.nodeValue.trim().length === 0) return NodeFilter.FILTER_REJECT;
        // Пропускаем скрипты и стили
        if (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE') {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  
  let node;
  while (node = walker.nextNode()) {
    textNodes.push(node);
  }
  return textNodes;
}

// Сохраняем оригинальные тексты при загрузке
function saveOriginalTexts() {
  const textNodes = getTextNodes(document.body);
  textNodes.forEach((node, index) => {
    if (!originalTexts.has(node)) {
      originalTexts.set(node, node.nodeValue);
    }
  });
}

// Функция перевода страницы
function translatePage(lang) {
  if (lang === 'en') {
    // Восстанавливаем оригинальные тексты
    originalTexts.forEach((originalText, node) => {
      if (node.parentNode) {
        node.nodeValue = originalText;
      }
    });
  } else if (translations[lang]) {
    const langTranslations = translations[lang];
    
    originalTexts.forEach((originalText, node) => {
      if (!node.parentNode) return;
      
      const trimmedText = originalText.trim();
      
      // Ищем перевод
      if (langTranslations[trimmedText]) {
        // Сохраняем whitespace
        const leadingSpace = originalText.match(/^\s*/)[0];
        const trailingSpace = originalText.match(/\s*$/)[0];
        node.nodeValue = leadingSpace + langTranslations[trimmedText] + trailingSpace;
      }
    });
  }
  
  currentLang = lang;
  
  // Обновляем отображаемый язык в кнопке
  const toggleText = document.querySelector('.header-content-language .text-style-button');
  if (toggleText) {
    toggleText.textContent = lang.toUpperCase();
  }
  
  // Сохраняем выбор в localStorage
  localStorage.setItem('selectedLanguage', lang);
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
  // Сохраняем оригинальные тексты
  saveOriginalTexts();
  
  // Проверяем сохранённый язык
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang && savedLang !== 'en') {
    translatePage(savedLang);
  }
  
  // Добавляем обработчики на языковые кнопки
  document.querySelectorAll('.language_dropdown-item').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('lang');
      translatePage(lang);
      
      // Закрываем dropdown
      const dropdown = document.querySelector('.header-content-language');
      if (dropdown) {
        dropdown.querySelector('.w-dropdown-toggle').click();
      }
    });
  });
  
  // Обработчик для EN (оригинальный язык)
  const toggleBtn = document.querySelector('.header-content-language .w-dropdown-toggle');
  if (toggleBtn) {
    // Добавляем EN в список или обрабатываем отдельно
  }
});
</script>
