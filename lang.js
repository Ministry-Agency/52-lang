<script>
// Переводы для всех языков
const translations = {
  // ===== РУССКИЙ =====
  ru: {
    // Навигация
    "Home": "Главная",
    "Pricing": "Цены",
    "Reviews": "Отзывы",
    "Blog": "Блог",
    "Set up your event": "Создать мероприятие",
    "DASHBOARD": "ПАНЕЛЬ",
    "dashboard": "панель",
    "LOGIN": "ВХОД",
    
    // Hero секция
    "Make someone smile all year long – for": "Подарите улыбку на весь год – для",
    "Make someone smile all year long": "Подарите улыбку на весь год",
    "weddings": "свадеб",
    "birthdays": "дней рождения",
    "parties": "вечеринок",
    "any big day": "любого важного дня",
    "Turn one special day into 52 weeks of memories. Because some moments are meant to last.": "Превратите один особенный день в 52 недели воспоминаний. Потому что некоторые моменты должны длиться вечно.",
    "The perfect gift for:": "Идеальный подарок для:",
    "The perfect gift for: Corporate events": "Идеальный подарок для: Корпоративные мероприятия",
    "Corporate events": "Корпоративные мероприятия",
    "One day of celebration. 52 reminders of love.": "Один день праздника. 52 напоминания о любви.",
    "Perfect for couples who value memories over things. Let their favorite people send one message a week – heartfelt, funny, and completely unforgettable.": "Идеально для пар, которые ценят воспоминания больше вещей. Позвольте близким отправлять по одному сообщению в неделю — душевному, весёлому и незабываемому.",
    "Birthday": "День рождения",
    "Wedding": "Свадьба",
    
    // How it works
    "how it works": "как это работает",
    "Message in. Magic out.": "Сообщение внутрь. Магия наружу.",
    "No app download needed. Easy as 1, 2, 3.": "Не нужно скачивать приложение. Просто как 1, 2, 3.",
    "Step 1": "Шаг 1",
    "Step 2": "Шаг 2",
    "Step 3": "Шаг 3",
    "Step 4": "Шаг 4",
    "Set up your event and invite guests with one simple link or QR code flyer": "Создайте мероприятие и пригласите гостей одной простой ссылкой или QR-кодом",
    "Guests upload photos or videos with a short message — no app or signup required.": "Гости загружают фото или видео с коротким сообщением — без приложения и регистрации.",
    "We deliver their memories, week by week — into a beautiful online album that grows over time.": "Мы доставляем их воспоминания неделя за неделей — в красивый онлайн-альбом, который растёт со временем.",
    "You stay in control: track progress, manage invites, and make changes anytime.": "Вы контролируете всё: отслеживайте прогресс, управляйте приглашениями и вносите изменения в любое время.",
    
    // Try it for free
    "Try it for free": "Попробуйте бесплатно",
    "Send yourself a memory to see how it works – no sign-up required.": "Отправьте себе воспоминание, чтобы увидеть, как это работает — без регистрации.",
    "Create a test memory": "Создать тестовое воспоминание",
    
    // Reviews
    "What users remember": "Что помнят пользователи",
    "From weddings to birthdays, people all over the world have trusted 52memories to make one day last all year.": "От свадеб до дней рождения — люди по всему миру доверяют 52memories, чтобы один день длился весь год.",
    
    // FAQ Tabs
    "setup": "настройка",
    "MESSAGES": "СООБЩЕНИЯ",
    "GIFTING": "ПОДАРКИ",
    
    // FAQ - Setup
    "Is 52memories available worldwide?": "Доступен ли 52memories по всему миру?",
    "Yes — as a digital service, 52memories works anywhere with internet access. As long as there are no local internet restrictions, you can use it from anywhere in the world.": "Да — как цифровой сервис, 52memories работает везде, где есть доступ в интернет. Пока нет местных ограничений интернета, вы можете использовать его из любой точки мира.",
    "What languages does 52memories support?": "Какие языки поддерживает 52memories?",
    "Cards can be written in any language. The user interface is available in multiple languages including English, German, Spanish, French, Italian, Polish, Dutch, Portuguese, Turkish — and more.": "Открытки можно писать на любом языке. Интерфейс доступен на нескольких языках, включая английский, немецкий, испанский, французский, итальянский, польский, нидерландский, португальский, турецкий — и другие.",
    "How do I know if all memory slots are filled?": "Как узнать, заполнены ли все слоты воспоминаний?",
    "Your personal dashboard shows exactly who's contributed and how many slots are left — and lets you invite more guests anytime.": "Ваша личная панель показывает, кто уже внёс вклад и сколько слотов осталось — и позволяет приглашать новых гостей в любое время.",
    "Can I set multiple recipients?": "Можно ли указать несколько получателей?",
    "Yes! You can add more than one recipient — and even change or update them later if needed.": "Да! Вы можете добавить несколько получателей — и даже изменить или обновить их позже при необходимости.",
    "Can I increase the number of memories later?": "Можно ли увеличить количество воспоминаний позже?",
    "No — once your event is set up, the delivery rhythm is fixed. Choose your number of memories before you start.": "Нет — после создания мероприятия ритм доставки фиксируется. Выберите количество воспоминаний до начала.",
    "Can I plan ahead for an event in the future?": "Можно ли запланировать мероприятие заранее?",
    "Totally. Set up your event for any future date — next week, next month, or even next year.": "Конечно. Создайте мероприятие на любую будущую дату — на следующую неделю, месяц или даже год.",
    "Can I test before buying?": "Можно ли протестировать перед покупкой?",
    "Absolutely! Try it out and see how guests create memories with this quick demo.": "Безусловно! Попробуйте и посмотрите, как гости создают воспоминания с помощью быстрого демо.",
    "How do I invite guests?": "Как пригласить гостей?",
    "Just send them your link — or hand out the printed QR flyer at the event for that personal touch.": "Просто отправьте им ссылку — или раздайте печатные флаеры с QR-кодом на мероприятии для личного подхода.",
    "How do I create an event?": "Как создать мероприятие?",
    "You create an account, choose how many memories you want to send across the year, and get instant access to your shareable link and printable QR flyer after checkout.": "Вы создаёте аккаунт, выбираете количество воспоминаний на год и получаете мгновенный доступ к ссылке для отправки и печатному QR-флаеру после оплаты.",
    "What if I'm not satisfied with 52memories?": "Что если мне не понравится 52memories?",
    "No worries — if you're not happy, you can cancel anytime within 3 months after the first card was sent. We'll refund the full purchase price and stop all future memory deliveries.": "Не переживайте — если вам не понравится, вы можете отменить в любое время в течение 3 месяцев после отправки первой открытки. Мы вернём полную стоимость и остановим все будущие доставки.",
    "Why should I use 52memories?": "Зачем использовать 52memories?",
    "Some days are just too special — and they fly by in an instant. 52memories turns that one day into something lasting: a whole year of surprise messages, thoughtful photos, and shared moments — delivered slowly, with love. It's a way to keep the joy alive, long after the day is over.": "Некоторые дни слишком особенные — и пролетают мгновенно. 52memories превращает этот день в нечто долговечное: целый год сюрпризов, душевных фото и общих моментов — доставляемых медленно, с любовью. Это способ сохранить радость надолго после окончания праздника.",
    
    // FAQ - Messages
    "Can the photos and videos shared by guests be downloaded?": "Можно ли скачать фото и видео, которыми делятся гости?",
    "We're currently thinking this through — there are a few aspects to consider. For now, downloads aren't available, but it's something we might offer in the future": "Мы сейчас обдумываем это — есть несколько аспектов для рассмотрения. Пока скачивание недоступно, но возможно мы добавим это в будущем.",
    "Can I see the cards that have been created?": "Могу ли я видеть созданные открытки?",
    "In your dashboard, you can see who created cards and for which dates — but the actual content stays hidden until it's unlocked for the recipient.": "В панели управления вы видите, кто создал открытки и на какие даты — но содержимое скрыто до момента разблокировки для получателя.",
    "How are the messages delivered to the recipient?": "Как сообщения доставляются получателю?",
    "Each time a new card unlocks, the recipient receives an email with a link that takes them straight to that card in their beautiful online album — all year long.": "Каждый раз при разблокировке новой открытки получатель получает email со ссылкой, которая ведёт прямо к этой открытке в красивом онлайн-альбоме — весь год.",
    "What happens if a guest creates multiple cards?": "Что происходит, если гость создаёт несколько открыток?",
    "In your dashboard, you'll see who created cards for which dates. If someone got a bit too enthusiastic, you can simply delete extra cards.": "В панели управления вы увидите, кто создал открытки на какие даты. Если кто-то слишком увлёкся, вы можете просто удалить лишние открытки.",
    "Can created cards be edited later?": "Можно ли редактировать созданные открытки позже?",
    "Yes. Guests receive an email right after creating their card with a link that lets them edit or update it anytime afterward.": "Да. Гости получают email сразу после создания открытки со ссылкой для редактирования или обновления в любое время.",
    "Do guests need to register or download an app?": "Нужно ли гостям регистрироваться или скачивать приложение?",
    "Nope! They can start creating their card right away. We just need their email so they can receive a confirmation and edit their card later if they want to.": "Нет! Они могут сразу начать создавать открытку. Нам нужен только их email для подтверждения и возможности редактирования позже.",
    "How do guests create messages?": "Как гости создают сообщения?",
    "We've made it super simple — guests upload a photo or video, add a short message, and send it off. No app needed.": "Мы сделали это очень просто — гости загружают фото или видео, добавляют короткое сообщение и отправляют. Приложение не нужно.",
    "What kind of technical setup do guests need?": "Какая техническая подготовка нужна гостям?",
    "Just a smartphone and an internet connection to upload their memory — it's quick and simple. They can also do it from a computer.": "Только смартфон и подключение к интернету для загрузки воспоминания — это быстро и просто. Также можно с компьютера.",
    
    // FAQ - Gifting
    "Can multiple people contribute together?": "Могут ли несколько человек участвовать вместе?",
    "Definitely. You can add your group name or all contributor names — we'll include them in the very first message to the recipient.": "Определённо. Вы можете добавить название группы или имена всех участников — мы включим их в самое первое сообщение получателю.",
    "How does the recipient find out about the gift?": "Как получатель узнает о подарке?",
    "They'll get a warm welcome email from us explaining what 52memories is and who it's from — unless they gifted it to themselves.": "Они получат тёплое приветственное письмо от нас с объяснением, что такое 52memories и от кого подарок — если только они не подарили его себе.",
    "Can I use it for a couple, a single person, or a group?": "Можно ли использовать для пары, одного человека или группы?",
    "Yes! 52memories is perfect for birthdays, weddings, anniversaries, farewells, team events, travel groups — and many other special occasions.": "Да! 52memories идеально подходит для дней рождения, свадеб, юбилеев, проводов, командных мероприятий, туристических групп — и многих других особых случаев.",
    "How much does it cost?": "Сколько это стоит?",
    "The final price depends on how many memories you want to send — bi-weekly (26), weekly (52), or twice a week (104). Have a look after signing up.": "Итоговая цена зависит от количества воспоминаний — раз в две недели (26), еженедельно (52) или дважды в неделю (104). Посмотрите после регистрации.",
    
    // Footer
    "NAVIGATION": "НАВИГАЦИЯ",
    "Social links": "Соцсети",
    "Farewell": "Прощание",
    "Baby shower": "Бэби шауэр",
    "Retirement": "Выход на пенсию",
    "Anniversary": "Годовщина",
    "Graduation": "Выпускной",
    "Team event": "Командное мероприятие",
    "© 2025 52Memories, All rights reserved.": "© 2025 52Memories, Все права защищены.",
    "Privacy": "Конфиденциальность",
    "Site notice": "Правовая информация",
    "Terms and conditions": "Условия использования",
    "Cookies Settings": "Настройки cookies",
    "Made with love by Ministry": "Сделано с любовью Ministry"
  },

  // ===== НЕМЕЦКИЙ =====
  de: {
    // Навигация
    "Home": "Startseite",
    "Pricing": "Preise",
    "Reviews": "Bewertungen",
    "Blog": "Blog",
    "Set up your event": "Event erstellen",
    "DASHBOARD": "DASHBOARD",
    "dashboard": "dashboard",
    "LOGIN": "ANMELDEN",
    
    // Hero секция
    "Make someone smile all year long – for": "Schenke jemandem ein ganzes Jahr Freude – für",
    "Make someone smile all year long": "Schenke jemandem ein ganzes Jahr Freude",
    "weddings": "Hochzeiten",
    "birthdays": "Geburtstage",
    "parties": "Partys",
    "any big day": "jeden besonderen Tag",
    "Turn one special day into 52 weeks of memories. Because some moments are meant to last.": "Verwandle einen besonderen Tag in 52 Wochen voller Erinnerungen. Weil manche Momente ewig dauern sollten.",
    "The perfect gift for:": "Das perfekte Geschenk für:",
    "The perfect gift for: Corporate events": "Das perfekte Geschenk für: Firmenevents",
    "Corporate events": "Firmenevents",
    "One day of celebration. 52 reminders of love.": "Ein Tag zum Feiern. 52 Erinnerungen voller Liebe.",
    "Perfect for couples who value memories over things. Let their favorite people send one message a week – heartfelt, funny, and completely unforgettable.": "Perfekt für Paare, die Erinnerungen mehr schätzen als Dinge. Lass ihre Liebsten jede Woche eine Nachricht senden – herzlich, lustig und unvergesslich.",
    "Birthday": "Geburtstag",
    "Wedding": "Hochzeit",
    
    // How it works
    "how it works": "so funktioniert's",
    "Message in. Magic out.": "Nachricht rein. Magie raus.",
    "No app download needed. Easy as 1, 2, 3.": "Kein App-Download nötig. Einfach wie 1, 2, 3.",
    "Step 1": "Schritt 1",
    "Step 2": "Schritt 2",
    "Step 3": "Schritt 3",
    "Step 4": "Schritt 4",
    "Set up your event and invite guests with one simple link or QR code flyer": "Erstelle dein Event und lade Gäste mit einem einfachen Link oder QR-Code-Flyer ein",
    "Guests upload photos or videos with a short message — no app or signup required.": "Gäste laden Fotos oder Videos mit einer kurzen Nachricht hoch — keine App oder Registrierung erforderlich.",
    "We deliver their memories, week by week — into a beautiful online album that grows over time.": "Wir liefern ihre Erinnerungen Woche für Woche — in ein wunderschönes Online-Album, das mit der Zeit wächst.",
    "You stay in control: track progress, manage invites, and make changes anytime.": "Du behältst die Kontrolle: Verfolge den Fortschritt, verwalte Einladungen und nimm jederzeit Änderungen vor.",
    
    // Try it for free
    "Try it for free": "Kostenlos testen",
    "Send yourself a memory to see how it works – no sign-up required.": "Schick dir selbst eine Erinnerung, um zu sehen, wie es funktioniert — keine Anmeldung erforderlich.",
    "Create a test memory": "Test-Erinnerung erstellen",
    
    // Reviews
    "What users remember": "Was Nutzer erinnern",
    "From weddings to birthdays, people all over the world have trusted 52memories to make one day last all year.": "Von Hochzeiten bis Geburtstagen — Menschen weltweit vertrauen 52memories, um einen Tag das ganze Jahr dauern zu lassen.",
    
    // FAQ Tabs
    "setup": "Einrichtung",
    "MESSAGES": "NACHRICHTEN",
    "GIFTING": "SCHENKEN",
    
    // FAQ - Setup
    "Is 52memories available worldwide?": "Ist 52memories weltweit verfügbar?",
    "Yes — as a digital service, 52memories works anywhere with internet access. As long as there are no local internet restrictions, you can use it from anywhere in the world.": "Ja — als digitaler Dienst funktioniert 52memories überall mit Internetzugang. Solange es keine lokalen Internetbeschränkungen gibt, kannst du es von überall auf der Welt nutzen.",
    "What languages does 52memories support?": "Welche Sprachen unterstützt 52memories?",
    "Cards can be written in any language. The user interface is available in multiple languages including English, German, Spanish, French, Italian, Polish, Dutch, Portuguese, Turkish — and more.": "Karten können in jeder Sprache geschrieben werden. Die Benutzeroberfläche ist in mehreren Sprachen verfügbar, darunter Englisch, Deutsch, Spanisch, Französisch, Italienisch, Polnisch, Niederländisch, Portugiesisch, Türkisch — und mehr.",
    "How do I know if all memory slots are filled?": "Wie weiß ich, ob alle Erinnerungsplätze belegt sind?",
    "Your personal dashboard shows exactly who's contributed and how many slots are left — and lets you invite more guests anytime.": "Dein persönliches Dashboard zeigt genau, wer beigetragen hat und wie viele Plätze noch frei sind — und ermöglicht es dir, jederzeit weitere Gäste einzuladen.",
    "Can I set multiple recipients?": "Kann ich mehrere Empfänger festlegen?",
    "Yes! You can add more than one recipient — and even change or update them later if needed.": "Ja! Du kannst mehr als einen Empfänger hinzufügen — und sie bei Bedarf später ändern oder aktualisieren.",
    "Can I increase the number of memories later?": "Kann ich die Anzahl der Erinnerungen später erhöhen?",
    "No — once your event is set up, the delivery rhythm is fixed. Choose your number of memories before you start.": "Nein — sobald dein Event eingerichtet ist, ist der Lieferrhythmus festgelegt. Wähle die Anzahl der Erinnerungen, bevor du beginnst.",
    "Can I plan ahead for an event in the future?": "Kann ich ein Event für die Zukunft planen?",
    "Totally. Set up your event for any future date — next week, next month, or even next year.": "Absolut. Richte dein Event für jedes zukünftige Datum ein — nächste Woche, nächsten Monat oder sogar nächstes Jahr.",
    "Can I test before buying?": "Kann ich vor dem Kauf testen?",
    "Absolutely! Try it out and see how guests create memories with this quick demo.": "Absolut! Probiere es aus und sieh, wie Gäste mit dieser schnellen Demo Erinnerungen erstellen.",
    "How do I invite guests?": "Wie lade ich Gäste ein?",
    "Just send them your link — or hand out the printed QR flyer at the event for that personal touch.": "Sende ihnen einfach deinen Link — oder verteile den gedruckten QR-Flyer beim Event für die persönliche Note.",
    "How do I create an event?": "Wie erstelle ich ein Event?",
    "You create an account, choose how many memories you want to send across the year, and get instant access to your shareable link and printable QR flyer after checkout.": "Du erstellst ein Konto, wählst, wie viele Erinnerungen du übers Jahr senden möchtest, und erhältst nach dem Checkout sofortigen Zugang zu deinem teilbaren Link und druckbaren QR-Flyer.",
    "What if I'm not satisfied with 52memories?": "Was ist, wenn ich mit 52memories nicht zufrieden bin?",
    "No worries — if you're not happy, you can cancel anytime within 3 months after the first card was sent. We'll refund the full purchase price and stop all future memory deliveries.": "Keine Sorge — wenn du nicht zufrieden bist, kannst du jederzeit innerhalb von 3 Monaten nach dem Versand der ersten Karte kündigen. Wir erstatten den vollen Kaufpreis und stoppen alle zukünftigen Erinnerungslieferungen.",
    "Why should I use 52memories?": "Warum sollte ich 52memories nutzen?",
    "Some days are just too special — and they fly by in an instant. 52memories turns that one day into something lasting: a whole year of surprise messages, thoughtful photos, and shared moments — delivered slowly, with love. It's a way to keep the joy alive, long after the day is over.": "Manche Tage sind einfach zu besonders — und vergehen im Nu. 52memories verwandelt diesen einen Tag in etwas Bleibendes: ein ganzes Jahr voller Überraschungsnachrichten, liebevoller Fotos und gemeinsamer Momente — langsam und mit Liebe geliefert. So bleibt die Freude lebendig, lange nachdem der Tag vorbei ist.",
    
    // FAQ - Messages
    "Can the photos and videos shared by guests be downloaded?": "Können die von Gästen geteilten Fotos und Videos heruntergeladen werden?",
    "We're currently thinking this through — there are a few aspects to consider. For now, downloads aren't available, but it's something we might offer in the future": "Wir denken gerade darüber nach — es gibt einige Aspekte zu berücksichtigen. Derzeit sind Downloads nicht verfügbar, aber es ist etwas, das wir in Zukunft anbieten könnten.",
    "Can I see the cards that have been created?": "Kann ich die erstellten Karten sehen?",
    "In your dashboard, you can see who created cards and for which dates — but the actual content stays hidden until it's unlocked for the recipient.": "In deinem Dashboard siehst du, wer Karten erstellt hat und für welche Daten — aber der eigentliche Inhalt bleibt verborgen, bis er für den Empfänger freigeschaltet wird.",
    "How are the messages delivered to the recipient?": "Wie werden die Nachrichten an den Empfänger geliefert?",
    "Each time a new card unlocks, the recipient receives an email with a link that takes them straight to that card in their beautiful online album — all year long.": "Jedes Mal, wenn eine neue Karte freigeschaltet wird, erhält der Empfänger eine E-Mail mit einem Link, der direkt zu dieser Karte in seinem wunderschönen Online-Album führt — das ganze Jahr über.",
    "What happens if a guest creates multiple cards?": "Was passiert, wenn ein Gast mehrere Karten erstellt?",
    "In your dashboard, you'll see who created cards for which dates. If someone got a bit too enthusiastic, you can simply delete extra cards.": "In deinem Dashboard siehst du, wer Karten für welche Daten erstellt hat. Wenn jemand etwas zu enthusiastisch war, kannst du einfach zusätzliche Karten löschen.",
    "Can created cards be edited later?": "Können erstellte Karten später bearbeitet werden?",
    "Yes. Guests receive an email right after creating their card with a link that lets them edit or update it anytime afterward.": "Ja. Gäste erhalten direkt nach dem Erstellen ihrer Karte eine E-Mail mit einem Link, über den sie diese jederzeit bearbeiten oder aktualisieren können.",
    "Do guests need to register or download an app?": "Müssen Gäste sich registrieren oder eine App herunterladen?",
    "Nope! They can start creating their card right away. We just need their email so they can receive a confirmation and edit their card later if they want to.": "Nein! Sie können sofort mit dem Erstellen ihrer Karte beginnen. Wir brauchen nur ihre E-Mail, damit sie eine Bestätigung erhalten und ihre Karte später bearbeiten können, wenn sie möchten.",
    "How do guests create messages?": "Wie erstellen Gäste Nachrichten?",
    "We've made it super simple — guests upload a photo or video, add a short message, and send it off. No app needed.": "Wir haben es super einfach gemacht — Gäste laden ein Foto oder Video hoch, fügen eine kurze Nachricht hinzu und schicken es ab. Keine App nötig.",
    "What kind of technical setup do guests need?": "Welche technische Ausstattung brauchen Gäste?",
    "Just a smartphone and an internet connection to upload their memory — it's quick and simple. They can also do it from a computer.": "Nur ein Smartphone und eine Internetverbindung, um ihre Erinnerung hochzuladen — schnell und einfach. Sie können es auch vom Computer aus machen.",
    
    // FAQ - Gifting
    "Can multiple people contribute together?": "Können mehrere Personen gemeinsam beitragen?",
    "Definitely. You can add your group name or all contributor names — we'll include them in the very first message to the recipient.": "Definitiv. Du kannst deinen Gruppennamen oder alle Beitragsnamen hinzufügen — wir fügen sie in die allererste Nachricht an den Empfänger ein.",
    "How does the recipient find out about the gift?": "Wie erfährt der Empfänger vom Geschenk?",
    "They'll get a warm welcome email from us explaining what 52memories is and who it's from — unless they gifted it to themselves.": "Sie erhalten eine herzliche Willkommens-E-Mail von uns, die erklärt, was 52memories ist und von wem es kommt — es sei denn, sie haben es sich selbst geschenkt.",
    "Can I use it for a couple, a single person, or a group?": "Kann ich es für ein Paar, eine Einzelperson oder eine Gruppe verwenden?",
    "Yes! 52memories is perfect for birthdays, weddings, anniversaries, farewells, team events, travel groups — and many other special occasions.": "Ja! 52memories ist perfekt für Geburtstage, Hochzeiten, Jubiläen, Abschiede, Teamevents, Reisegruppen — und viele andere besondere Anlässe.",
    "How much does it cost?": "Wie viel kostet es?",
    "The final price depends on how many memories you want to send — bi-weekly (26), weekly (52), or twice a week (104). Have a look after signing up.": "Der Endpreis hängt davon ab, wie viele Erinnerungen du senden möchtest — zweiwöchentlich (26), wöchentlich (52) oder zweimal pro Woche (104). Schau nach der Anmeldung nach.",
    
    // Footer
    "NAVIGATION": "NAVIGATION",
    "Social links": "Soziale Links",
    "Farewell": "Abschied",
    "Baby shower": "Babyparty",
    "Retirement": "Ruhestand",
    "Anniversary": "Jubiläum",
    "Graduation": "Abschluss",
    "Team event": "Teamevent",
    "© 2025 52Memories, All rights reserved.": "© 2025 52Memories, Alle Rechte vorbehalten.",
    "Privacy": "Datenschutz",
    "Site notice": "Impressum",
    "Terms and conditions": "AGB",
    "Cookies Settings": "Cookie-Einstellungen",
    "Made with love by Ministry": "Mit Liebe gemacht von Ministry"
  },

  // ===== ФРАНЦУЗСКИЙ =====
  fr: {
    // Навигация
    "Home": "Accueil",
    "Pricing": "Tarifs",
    "Reviews": "Avis",
    "Blog": "Blog",
    "Set up your event": "Créer un événement",
    "DASHBOARD": "TABLEAU DE BORD",
    "dashboard": "tableau de bord",
    "LOGIN": "CONNEXION",
    
    // Hero секция
    "Make someone smile all year long – for": "Faites sourire quelqu'un toute l'année – pour",
    "Make someone smile all year long": "Faites sourire quelqu'un toute l'année",
    "weddings": "mariages",
    "birthdays": "anniversaires",
    "parties": "fêtes",
    "any big day": "tout grand jour",
    "Turn one special day into 52 weeks of memories. Because some moments are meant to last.": "Transformez un jour spécial en 52 semaines de souvenirs. Parce que certains moments sont faits pour durer.",
    "The perfect gift for:": "Le cadeau parfait pour :",
    "The perfect gift for: Corporate events": "Le cadeau parfait pour : Événements d'entreprise",
    "Corporate events": "Événements d'entreprise",
    "One day of celebration. 52 reminders of love.": "Un jour de célébration. 52 rappels d'amour.",
    "Perfect for couples who value memories over things. Let their favorite people send one message a week – heartfelt, funny, and completely unforgettable.": "Parfait pour les couples qui privilégient les souvenirs aux objets. Laissez leurs proches envoyer un message par semaine — sincère, drôle et totalement inoubliable.",
    "Birthday": "Anniversaire",
    "Wedding": "Mariage",
    
    // How it works
    "how it works": "comment ça marche",
    "Message in. Magic out.": "Message envoyé. Magie reçue.",
    "No app download needed. Easy as 1, 2, 3.": "Pas besoin de télécharger d'application. Simple comme 1, 2, 3.",
    "Step 1": "Étape 1",
    "Step 2": "Étape 2",
    "Step 3": "Étape 3",
    "Step 4": "Étape 4",
    "Set up your event and invite guests with one simple link or QR code flyer": "Créez votre événement et invitez des invités avec un simple lien ou un flyer QR code",
    "Guests upload photos or videos with a short message — no app or signup required.": "Les invités téléchargent photos ou vidéos avec un court message — sans application ni inscription.",
    "We deliver their memories, week by week — into a beautiful online album that grows over time.": "Nous livrons leurs souvenirs, semaine après semaine — dans un bel album en ligne qui grandit avec le temps.",
    "You stay in control: track progress, manage invites, and make changes anytime.": "Vous gardez le contrôle : suivez les progrès, gérez les invitations et apportez des modifications à tout moment.",
    
    // Try it for free
    "Try it for free": "Essayez gratuitement",
    "Send yourself a memory to see how it works – no sign-up required.": "Envoyez-vous un souvenir pour voir comment ça marche — sans inscription.",
    "Create a test memory": "Créer un souvenir test",
    
    // Reviews
    "What users remember": "Ce que les utilisateurs retiennent",
    "From weddings to birthdays, people all over the world have trusted 52memories to make one day last all year.": "Des mariages aux anniversaires, des personnes du monde entier font confiance à 52memories pour faire durer un jour toute l'année.",
    
    // FAQ Tabs
    "setup": "configuration",
    "MESSAGES": "MESSAGES",
    "GIFTING": "CADEAUX",
    
    // FAQ - Setup
    "Is 52memories available worldwide?": "52memories est-il disponible dans le monde entier ?",
    "Yes — as a digital service, 52memories works anywhere with internet access. As long as there are no local internet restrictions, you can use it from anywhere in the world.": "Oui — en tant que service numérique, 52memories fonctionne partout avec un accès Internet. Tant qu'il n'y a pas de restrictions Internet locales, vous pouvez l'utiliser de n'importe où dans le monde.",
    "What languages does 52memories support?": "Quelles langues 52memories prend-il en charge ?",
    "Cards can be written in any language. The user interface is available in multiple languages including English, German, Spanish, French, Italian, Polish, Dutch, Portuguese, Turkish — and more.": "Les cartes peuvent être écrites dans n'importe quelle langue. L'interface utilisateur est disponible en plusieurs langues dont l'anglais, l'allemand, l'espagnol, le français, l'italien, le polonais, le néerlandais, le portugais, le turc — et plus encore.",
    "How do I know if all memory slots are filled?": "Comment savoir si tous les emplacements de souvenirs sont remplis ?",
    "Your personal dashboard shows exactly who's contributed and how many slots are left — and lets you invite more guests anytime.": "Votre tableau de bord personnel montre exactement qui a contribué et combien d'emplacements restent — et vous permet d'inviter plus d'invités à tout moment.",
    "Can I set multiple recipients?": "Puis-je définir plusieurs destinataires ?",
    "Yes! You can add more than one recipient — and even change or update them later if needed.": "Oui ! Vous pouvez ajouter plus d'un destinataire — et même les modifier ou les mettre à jour plus tard si nécessaire.",
    "Can I increase the number of memories later?": "Puis-je augmenter le nombre de souvenirs plus tard ?",
    "No — once your event is set up, the delivery rhythm is fixed. Choose your number of memories before you start.": "Non — une fois votre événement configuré, le rythme de livraison est fixé. Choisissez votre nombre de souvenirs avant de commencer.",
    "Can I plan ahead for an event in the future?": "Puis-je planifier un événement à l'avance ?",
    "Totally. Set up your event for any future date — next week, next month, or even next year.": "Absolument. Configurez votre événement pour n'importe quelle date future — la semaine prochaine, le mois prochain ou même l'année prochaine.",
    "Can I test before buying?": "Puis-je tester avant d'acheter ?",
    "Absolutely! Try it out and see how guests create memories with this quick demo.": "Absolument ! Essayez et voyez comment les invités créent des souvenirs avec cette démo rapide.",
    "How do I invite guests?": "Comment inviter des invités ?",
    "Just send them your link — or hand out the printed QR flyer at the event for that personal touch.": "Envoyez-leur simplement votre lien — ou distribuez le flyer QR imprimé lors de l'événement pour une touche personnelle.",
    "How do I create an event?": "Comment créer un événement ?",
    "You create an account, choose how many memories you want to send across the year, and get instant access to your shareable link and printable QR flyer after checkout.": "Vous créez un compte, choisissez combien de souvenirs vous voulez envoyer sur l'année, et obtenez un accès instantané à votre lien partageable et flyer QR imprimable après le paiement.",
    "What if I'm not satisfied with 52memories?": "Et si je ne suis pas satisfait de 52memories ?",
    "No worries — if you're not happy, you can cancel anytime within 3 months after the first card was sent. We'll refund the full purchase price and stop all future memory deliveries.": "Pas de souci — si vous n'êtes pas satisfait, vous pouvez annuler à tout moment dans les 3 mois suivant l'envoi de la première carte. Nous rembourserons le prix d'achat complet et arrêterons toutes les livraisons futures de souvenirs.",
    "Why should I use 52memories?": "Pourquoi utiliser 52memories ?",
    "Some days are just too special — and they fly by in an instant. 52memories turns that one day into something lasting: a whole year of surprise messages, thoughtful photos, and shared moments — delivered slowly, with love. It's a way to keep the joy alive, long after the day is over.": "Certains jours sont trop spéciaux — et passent en un instant. 52memories transforme ce jour en quelque chose de durable : une année entière de messages surprises, de photos attentionnées et de moments partagés — livrés lentement, avec amour. C'est une façon de garder la joie vivante, longtemps après la fin de la journée.",
    
    // FAQ - Messages
    "Can the photos and videos shared by guests be downloaded?": "Les photos et vidéos partagées par les invités peuvent-elles être téléchargées ?",
    "We're currently thinking this through — there are a few aspects to consider. For now, downloads aren't available, but it's something we might offer in the future": "Nous y réfléchissons actuellement — il y a quelques aspects à considérer. Pour l'instant, les téléchargements ne sont pas disponibles, mais c'est quelque chose que nous pourrions offrir à l'avenir.",
    "Can I see the cards that have been created?": "Puis-je voir les cartes qui ont été créées ?",
    "In your dashboard, you can see who created cards and for which dates — but the actual content stays hidden until it's unlocked for the recipient.": "Dans votre tableau de bord, vous pouvez voir qui a créé des cartes et pour quelles dates — mais le contenu réel reste caché jusqu'à ce qu'il soit débloqué pour le destinataire.",
    "How are the messages delivered to the recipient?": "Comment les messages sont-ils livrés au destinataire ?",
    "Each time a new card unlocks, the recipient receives an email with a link that takes them straight to that card in their beautiful online album — all year long.": "Chaque fois qu'une nouvelle carte est débloquée, le destinataire reçoit un e-mail avec un lien qui le mène directement à cette carte dans son bel album en ligne — toute l'année.",
    "What happens if a guest creates multiple cards?": "Que se passe-t-il si un invité crée plusieurs cartes ?",
    "In your dashboard, you'll see who created cards for which dates. If someone got a bit too enthusiastic, you can simply delete extra cards.": "Dans votre tableau de bord, vous verrez qui a créé des cartes pour quelles dates. Si quelqu'un s'est montré trop enthousiaste, vous pouvez simplement supprimer les cartes en trop.",
    "Can created cards be edited later?": "Les cartes créées peuvent-elles être modifiées plus tard ?",
    "Yes. Guests receive an email right after creating their card with a link that lets them edit or update it anytime afterward.": "Oui. Les invités reçoivent un e-mail juste après avoir créé leur carte avec un lien qui leur permet de la modifier ou de la mettre à jour à tout moment.",
    "Do guests need to register or download an app?": "Les invités doivent-ils s'inscrire ou télécharger une application ?",
    "Nope! They can start creating their card right away. We just need their email so they can receive a confirmation and edit their card later if they want to.": "Non ! Ils peuvent commencer à créer leur carte tout de suite. Nous avons juste besoin de leur e-mail pour qu'ils puissent recevoir une confirmation et modifier leur carte plus tard s'ils le souhaitent.",
    "How do guests create messages?": "Comment les invités créent-ils des messages ?",
    "We've made it super simple — guests upload a photo or video, add a short message, and send it off. No app needed.": "Nous avons rendu ça super simple — les invités téléchargent une photo ou vidéo, ajoutent un court message et l'envoient. Pas besoin d'application.",
    "What kind of technical setup do guests need?": "De quelle configuration technique les invités ont-ils besoin ?",
    "Just a smartphone and an internet connection to upload their memory — it's quick and simple. They can also do it from a computer.": "Juste un smartphone et une connexion Internet pour télécharger leur souvenir — c'est rapide et simple. Ils peuvent aussi le faire depuis un ordinateur.",
    
    // FAQ - Gifting
    "Can multiple people contribute together?": "Plusieurs personnes peuvent-elles contribuer ensemble ?",
    "Definitely. You can add your group name or all contributor names — we'll include them in the very first message to the recipient.": "Certainement. Vous pouvez ajouter le nom de votre groupe ou tous les noms des contributeurs — nous les inclurons dans le tout premier message au destinataire.",
    "How does the recipient find out about the gift?": "Comment le destinataire découvre-t-il le cadeau ?",
    "They'll get a warm welcome email from us explaining what 52memories is and who it's from — unless they gifted it to themselves.": "Ils recevront un e-mail de bienvenue chaleureux de notre part expliquant ce qu'est 52memories et de qui ça vient — sauf s'ils se le sont offert eux-mêmes.",
    "Can I use it for a couple, a single person, or a group?": "Puis-je l'utiliser pour un couple, une personne seule ou un groupe ?",
    "Yes! 52memories is perfect for birthdays, weddings, anniversaries, farewells, team events, travel groups — and many other special occasions.": "Oui ! 52memories est parfait pour les anniversaires, mariages, jubilés, départs, événements d'équipe, groupes de voyage — et bien d'autres occasions spéciales.",
    "How much does it cost?": "Combien ça coûte ?",
    "The final price depends on how many memories you want to send — bi-weekly (26), weekly (52), or twice a week (104). Have a look after signing up.": "Le prix final dépend du nombre de souvenirs que vous voulez envoyer — bimensuel (26), hebdomadaire (52) ou deux fois par semaine (104). Consultez après inscription.",
    
    // Footer
    "NAVIGATION": "NAVIGATION",
    "Social links": "Liens sociaux",
    "Farewell": "Départ",
    "Baby shower": "Baby shower",
    "Retirement": "Retraite",
    "Anniversary": "Anniversaire",
    "Graduation": "Remise de diplôme",
    "Team event": "Événement d'équipe",
    "© 2025 52Memories, All rights reserved.": "© 2025 52Memories, Tous droits réservés.",
    "Privacy": "Confidentialité",
    "Site notice": "Mentions légales",
    "Terms and conditions": "Conditions générales",
    "Cookies Settings": "Paramètres des cookies",
    "Made with love by Ministry": "Fait avec amour par Ministry"
  },

  // ===== ИТАЛЬЯНСКИЙ =====
  it: {
    // Навигация
    "Home": "Home",
    "Pricing": "Prezzi",
    "Reviews": "Recensioni",
    "Blog": "Blog",
    "Set up your event": "Crea il tuo evento",
    "DASHBOARD": "DASHBOARD",
    "dashboard": "dashboard",
    "LOGIN": "ACCEDI",
    
    // Hero секция
    "Make someone smile all year long – for": "Fai sorridere qualcuno tutto l'anno – per",
    "Make someone smile all year long": "Fai sorridere qualcuno tutto l'anno",
    "weddings": "matrimoni",
    "birthdays": "compleanni",
    "parties": "feste",
    "any big day": "ogni grande giorno",
    "Turn one special day into 52 weeks of memories. Because some moments are meant to last.": "Trasforma un giorno speciale in 52 settimane di ricordi. Perché alcuni momenti sono fatti per durare.",
    "The perfect gift for:": "Il regalo perfetto per:",
    "The perfect gift for: Corporate events": "Il regalo perfetto per: Eventi aziendali",
    "Corporate events": "Eventi aziendali",
    "One day of celebration. 52 reminders of love.": "Un giorno di festa. 52 promemoria d'amore.",
    "Perfect for couples who value memories over things. Let their favorite people send one message a week – heartfelt, funny, and completely unforgettable.": "Perfetto per coppie che apprezzano i ricordi più delle cose. Lascia che le persone care inviino un messaggio a settimana — sincero, divertente e totalmente indimenticabile.",
    "Birthday": "Compleanno",
    "Wedding": "Matrimonio",
    
    // How it works
    "how it works": "come funziona",
    "Message in. Magic out.": "Messaggio dentro. Magia fuori.",
    "No app download needed. Easy as 1, 2, 3.": "Nessuna app da scaricare. Facile come 1, 2, 3.",
    "Step 1": "Passo 1",
    "Step 2": "Passo 2",
    "Step 3": "Passo 3",
    "Step 4": "Passo 4",
    "Set up your event and invite guests with one simple link or QR code flyer": "Crea il tuo evento e invita gli ospiti con un semplice link o un volantino con codice QR",
    "Guests upload photos or videos with a short message — no app or signup required.": "Gli ospiti caricano foto o video con un breve messaggio — senza app o registrazione.",
    "We deliver their memories, week by week — into a beautiful online album that grows over time.": "Consegniamo i loro ricordi, settimana dopo settimana — in un bellissimo album online che cresce nel tempo.",
    "You stay in control: track progress, manage invites, and make changes anytime.": "Tu mantieni il controllo: segui i progressi, gestisci gli inviti e apporta modifiche in qualsiasi momento.",
    
    // Try it for free
    "Try it for free": "Prova gratis",
    "Send yourself a memory to see how it works – no sign-up required.": "Inviati un ricordo per vedere come funziona — senza registrazione.",
    "Create a test memory": "Crea un ricordo di prova",
    
    // Reviews
    "What users remember": "Cosa ricordano gli utenti",
    "From weddings to birthdays, people all over the world have trusted 52memories to make one day last all year.": "Dai matrimoni ai compleanni, persone in tutto il mondo si affidano a 52memories per far durare un giorno tutto l'anno.",
    
    // FAQ Tabs
    "setup": "configurazione",
    "MESSAGES": "MESSAGGI",
    "GIFTING": "REGALI",
    
    // FAQ - Setup
    "Is 52memories available worldwide?": "52memories è disponibile in tutto il mondo?",
    "Yes — as a digital service, 52memories works anywhere with internet access. As long as there are no local internet restrictions, you can use it from anywhere in the world.": "Sì — come servizio digitale, 52memories funziona ovunque ci sia accesso a Internet. Finché non ci sono restrizioni Internet locali, puoi usarlo da qualsiasi parte del mondo.",
    "What languages does 52memories support?": "Quali lingue supporta 52memories?",
    "Cards can be written in any language. The user interface is available in multiple languages including English, German, Spanish, French, Italian, Polish, Dutch, Portuguese, Turkish — and more.": "Le cartoline possono essere scritte in qualsiasi lingua. L'interfaccia utente è disponibile in più lingue tra cui inglese, tedesco, spagnolo, francese, italiano, polacco, olandese, portoghese, turco — e altre.",
    "How do I know if all memory slots are filled?": "Come faccio a sapere se tutti gli slot di memoria sono pieni?",
    "Your personal dashboard shows exactly who's contributed and how many slots are left — and lets you invite more guests anytime.": "La tua dashboard personale mostra esattamente chi ha contribuito e quanti slot rimangono — e ti permette di invitare altri ospiti in qualsiasi momento.",
    "Can I set multiple recipients?": "Posso impostare più destinatari?",
    "Yes! You can add more than one recipient — and even change or update them later if needed.": "Sì! Puoi aggiungere più di un destinatario — e persino cambiarli o aggiornarli in seguito se necessario.",
    "Can I increase the number of memories later?": "Posso aumentare il numero di ricordi in seguito?",
    "No — once your event is set up, the delivery rhythm is fixed. Choose your number of memories before you start.": "No — una volta configurato l'evento, il ritmo di consegna è fisso. Scegli il numero di ricordi prima di iniziare.",
    "Can I plan ahead for an event in the future?": "Posso pianificare in anticipo un evento futuro?",
    "Totally. Set up your event for any future date — next week, next month, or even next year.": "Assolutamente. Configura il tuo evento per qualsiasi data futura — la prossima settimana, il prossimo mese o anche il prossimo anno.",
    "Can I test before buying?": "Posso provare prima di acquistare?",
    "Absolutely! Try it out and see how guests create memories with this quick demo.": "Assolutamente! Provalo e vedi come gli ospiti creano ricordi con questa demo veloce.",
    "How do I invite guests?": "Come invito gli ospiti?",
    "Just send them your link — or hand out the printed QR flyer at the event for that personal touch.": "Invia loro semplicemente il tuo link — o distribuisci il volantino QR stampato all'evento per un tocco personale.",
    "How do I create an event?": "Come creo un evento?",
    "You create an account, choose how many memories you want to send across the year, and get instant access to your shareable link and printable QR flyer after checkout.": "Crei un account, scegli quanti ricordi vuoi inviare durante l'anno e ottieni accesso immediato al tuo link condivisibile e al volantino QR stampabile dopo il checkout.",
    "What if I'm not satisfied with 52memories?": "E se non sono soddisfatto di 52memories?",
    "No worries — if you're not happy, you can cancel anytime within 3 months after the first card was sent. We'll refund the full purchase price and stop all future memory deliveries.": "Nessun problema — se non sei soddisfatto, puoi annullare in qualsiasi momento entro 3 mesi dall'invio della prima cartolina. Rimborseremo l'intero prezzo d'acquisto e fermeremo tutte le consegne future di ricordi.",
    "Why should I use 52memories?": "Perché dovrei usare 52memories?",
    "Some days are just too special — and they fly by in an instant. 52memories turns that one day into something lasting: a whole year of surprise messages, thoughtful photos, and shared moments — delivered slowly, with love. It's a way to keep the joy alive, long after the day is over.": "Alcuni giorni sono troppo speciali — e volano via in un istante. 52memories trasforma quel giorno in qualcosa di duraturo: un anno intero di messaggi sorpresa, foto pensate e momenti condivisi — consegnati lentamente, con amore. È un modo per mantenere viva la gioia, molto dopo che il giorno è finito.",
    
    // FAQ - Messages
    "Can the photos and videos shared by guests be downloaded?": "Le foto e i video condivisi dagli ospiti possono essere scaricati?",
    "We're currently thinking this through — there are a few aspects to consider. For now, downloads aren't available, but it's something we might offer in the future": "Stiamo attualmente riflettendo su questo — ci sono alcuni aspetti da considerare. Per ora, i download non sono disponibili, ma è qualcosa che potremmo offrire in futuro.",
    "Can I see the cards that have been created?": "Posso vedere le cartoline che sono state create?",
    "In your dashboard, you can see who created cards and for which dates — but the actual content stays hidden until it's unlocked for the recipient.": "Nella tua dashboard, puoi vedere chi ha creato cartoline e per quali date — ma il contenuto effettivo rimane nascosto fino a quando non viene sbloccato per il destinatario.",
    "How are the messages delivered to the recipient?": "Come vengono consegnati i messaggi al destinatario?",
    "Each time a new card unlocks, the recipient receives an email with a link that takes them straight to that card in their beautiful online album — all year long.": "Ogni volta che una nuova cartolina viene sbloccata, il destinatario riceve un'email con un link che lo porta direttamente a quella cartolina nel suo bellissimo album online — tutto l'anno.",
    "What happens if a guest creates multiple cards?": "Cosa succede se un ospite crea più cartoline?",
    "In your dashboard, you'll see who created cards for which dates. If someone got a bit too enthusiastic, you can simply delete extra cards.": "Nella tua dashboard, vedrai chi ha creato cartoline per quali date. Se qualcuno si è fatto prendere troppo dall'entusiasmo, puoi semplicemente eliminare le cartoline in eccesso.",
    "Can created cards be edited later?": "Le cartoline create possono essere modificate in seguito?",
    "Yes. Guests receive an email right after creating their card with a link that lets them edit or update it anytime afterward.": "Sì. Gli ospiti ricevono un'email subito dopo aver creato la loro cartolina con un link che permette loro di modificarla o aggiornarla in qualsiasi momento.",
    "Do guests need to register or download an app?": "Gli ospiti devono registrarsi o scaricare un'app?",
    "Nope! They can start creating their card right away. We just need their email so they can receive a confirmation and edit their card later if they want to.": "No! Possono iniziare a creare la loro cartolina subito. Abbiamo solo bisogno della loro email così possono ricevere una conferma e modificare la loro cartolina più tardi se vogliono.",
    "How do guests create messages?": "Come creano messaggi gli ospiti?",
    "We've made it super simple — guests upload a photo or video, add a short message, and send it off. No app needed.": "L'abbiamo reso semplicissimo — gli ospiti caricano una foto o un video, aggiungono un breve messaggio e lo inviano. Nessuna app necessaria.",
    "What kind of technical setup do guests need?": "Di quale configurazione tecnica hanno bisogno gli ospiti?",
    "Just a smartphone and an internet connection to upload their memory — it's quick and simple. They can also do it from a computer.": "Solo uno smartphone e una connessione Internet per caricare il loro ricordo — è veloce e semplice. Possono anche farlo da un computer.",
    
    // FAQ - Gifting
    "Can multiple people contribute together?": "Più persone possono contribuire insieme?",
    "Definitely. You can add your group name or all contributor names — we'll include them in the very first message to the recipient.": "Certamente. Puoi aggiungere il nome del tuo gruppo o tutti i nomi dei contributori — li includeremo nel primissimo messaggio al destinatario.",
    "How does the recipient find out about the gift?": "Come scopre il destinatario del regalo?",
    "They'll get a warm welcome email from us explaining what 52memories is and who it's from — unless they gifted it to themselves.": "Riceveranno una calorosa email di benvenuto da noi che spiega cos'è 52memories e da chi proviene — a meno che non se lo siano regalato da soli.",
    "Can I use it for a couple, a single person, or a group?": "Posso usarlo per una coppia, una singola persona o un gruppo?",
    "Yes! 52memories is perfect for birthdays, weddings, anniversaries, farewells, team events, travel groups — and many other special occasions.": "Sì! 52memories è perfetto per compleanni, matrimoni, anniversari, addii, eventi di team, gruppi di viaggio — e molte altre occasioni speciali.",
    "How much does it cost?": "Quanto costa?",
    "The final price depends on how many memories you want to send — bi-weekly (26), weekly (52), or twice a week (104). Have a look after signing up.": "Il prezzo finale dipende da quanti ricordi vuoi inviare — quindicinale (26), settimanale (52) o due volte a settimana (104). Dai un'occhiata dopo la registrazione.",
    
    // Footer
    "NAVIGATION": "NAVIGAZIONE",
    "Social links": "Link social",
    "Farewell": "Addio",
    "Baby shower": "Baby shower",
    "Retirement": "Pensionamento",
    "Anniversary": "Anniversario",
    "Graduation": "Laurea",
    "Team event": "Evento di team",
    "© 2025 52Memories, All rights reserved.": "© 2025 52Memories, Tutti i diritti riservati.",
    "Privacy": "Privacy",
    "Site notice": "Note legali",
    "Terms and conditions": "Termini e condizioni",
    "Cookies Settings": "Impostazioni cookie",
    "Made with love by Ministry": "Fatto con amore da Ministry"
  },

  // ===== ИСПАНСКИЙ =====
  es: {
    // Навигация
    "Home": "Inicio",
    "Pricing": "Precios",
    "Reviews": "Reseñas",
    "Blog": "Blog",
    "Set up your event": "Crear tu evento",
    "DASHBOARD": "PANEL",
    "dashboard": "panel",
    "LOGIN": "INICIAR SESIÓN",
    
    // Hero секция
    "Make someone smile all year long – for": "Haz sonreír a alguien todo el año – para",
    "Make someone smile all year long": "Haz sonreír a alguien todo el año",
    "weddings": "bodas",
    "birthdays": "cumpleaños",
    "parties": "fiestas",
    "any big day": "cualquier gran día",
    "Turn one special day into 52 weeks of memories. Because some moments are meant to last.": "Convierte un día especial en 52 semanas de recuerdos. Porque algunos momentos están hechos para durar.",
    "The perfect gift for:": "El regalo perfecto para:",
    "The perfect gift for: Corporate events": "El regalo perfecto para: Eventos corporativos",
    "Corporate events": "Eventos corporativos",
    "One day of celebration. 52 reminders of love.": "Un día de celebración. 52 recordatorios de amor.",
    "Perfect for couples who value memories over things. Let their favorite people send one message a week – heartfelt, funny, and completely unforgettable.": "Perfecto para parejas que valoran los recuerdos sobre las cosas. Deja que sus personas favoritas envíen un mensaje a la semana — sincero, divertido y completamente inolvidable.",
    "Birthday": "Cumpleaños",
    "Wedding": "Boda",
    
    // How it works
    "how it works": "cómo funciona",
    "Message in. Magic out.": "Mensaje adentro. Magia afuera.",
    "No app download needed. Easy as 1, 2, 3.": "No necesitas descargar ninguna app. Fácil como 1, 2, 3.",
    "Step 1": "Paso 1",
    "Step 2": "Paso 2",
    "Step 3": "Paso 3",
    "Step 4": "Paso 4",
    "Set up your event and invite guests with one simple link or QR code flyer": "Crea tu evento e invita a los invitados con un simple enlace o folleto con código QR",
    "Guests upload photos or videos with a short message — no app or signup required.": "Los invitados suben fotos o videos con un breve mensaje — sin app ni registro.",
    "We deliver their memories, week by week — into a beautiful online album that grows over time.": "Entregamos sus recuerdos, semana a semana — en un hermoso álbum en línea que crece con el tiempo.",
    "You stay in control: track progress, manage invites, and make changes anytime.": "Tú mantienes el control: sigue el progreso, gestiona las invitaciones y haz cambios en cualquier momento.",
    
    // Try it for free
    "Try it for free": "Pruébalo gratis",
    "Send yourself a memory to see how it works – no sign-up required.": "Envíate un recuerdo para ver cómo funciona — sin registro.",
    "Create a test memory": "Crear un recuerdo de prueba",
    
    // Reviews
    "What users remember": "Lo que recuerdan los usuarios",
    "From weddings to birthdays, people all over the world have trusted 52memories to make one day last all year.": "Desde bodas hasta cumpleaños, personas de todo el mundo confían en 52memories para hacer que un día dure todo el año.",
    
    // FAQ Tabs
    "setup": "configuración",
    "MESSAGES": "MENSAJES",
    "GIFTING": "REGALOS",
    
    // FAQ - Setup
    "Is 52memories available worldwide?": "¿Está 52memories disponible en todo el mundo?",
    "Yes — as a digital service, 52memories works anywhere with internet access. As long as there are no local internet restrictions, you can use it from anywhere in the world.": "Sí — como servicio digital, 52memories funciona en cualquier lugar con acceso a Internet. Mientras no haya restricciones locales de Internet, puedes usarlo desde cualquier parte del mundo.",
    "What languages does 52memories support?": "¿Qué idiomas soporta 52memories?",
    "Cards can be written in any language. The user interface is available in multiple languages including English, German, Spanish, French, Italian, Polish, Dutch, Portuguese, Turkish — and more.": "Las tarjetas se pueden escribir en cualquier idioma. La interfaz de usuario está disponible en varios idiomas incluyendo inglés, alemán, español, francés, italiano, polaco, holandés, portugués, turco — y más.",
    "How do I know if all memory slots are filled?": "¿Cómo sé si todos los espacios de recuerdos están llenos?",
    "Your personal dashboard shows exactly who's contributed and how many slots are left — and lets you invite more guests anytime.": "Tu panel personal muestra exactamente quién ha contribuido y cuántos espacios quedan — y te permite invitar más invitados en cualquier momento.",
    "Can I set multiple recipients?": "¿Puedo establecer múltiples destinatarios?",
    "Yes! You can add more than one recipient — and even change or update them later if needed.": "¡Sí! Puedes agregar más de un destinatario — e incluso cambiarlos o actualizarlos más tarde si es necesario.",
    "Can I increase the number of memories later?": "¿Puedo aumentar el número de recuerdos más tarde?",
    "No — once your event is set up, the delivery rhythm is fixed. Choose your number of memories before you start.": "No — una vez que tu evento está configurado, el ritmo de entrega está fijo. Elige tu número de recuerdos antes de comenzar.",
    "Can I plan ahead for an event in the future?": "¿Puedo planificar con anticipación un evento futuro?",
    "Totally. Set up your event for any future date — next week, next month, or even next year.": "Totalmente. Configura tu evento para cualquier fecha futura — la próxima semana, el próximo mes o incluso el próximo año.",
    "Can I test before buying?": "¿Puedo probar antes de comprar?",
    "Absolutely! Try it out and see how guests create memories with this quick demo.": "¡Por supuesto! Pruébalo y ve cómo los invitados crean recuerdos con esta demo rápida.",
    "How do I invite guests?": "¿Cómo invito a los invitados?",
    "Just send them your link — or hand out the printed QR flyer at the event for that personal touch.": "Simplemente envíales tu enlace — o reparte el folleto QR impreso en el evento para ese toque personal.",
    "How do I create an event?": "¿Cómo creo un evento?",
    "You create an account, choose how many memories you want to send across the year, and get instant access to your shareable link and printable QR flyer after checkout.": "Creas una cuenta, eliges cuántos recuerdos quieres enviar durante el año y obtienes acceso instantáneo a tu enlace compartible y folleto QR imprimible después del pago.",
    "What if I'm not satisfied with 52memories?": "¿Y si no estoy satisfecho con 52memories?",
    "No worries — if you're not happy, you can cancel anytime within 3 months after the first card was sent. We'll refund the full purchase price and stop all future memory deliveries.": "No te preocupes — si no estás contento, puedes cancelar en cualquier momento dentro de los 3 meses posteriores al envío de la primera tarjeta. Reembolsaremos el precio de compra completo y detendremos todas las entregas futuras de recuerdos.",
    "Why should I use 52memories?": "¿Por qué debería usar 52memories?",
    "Some days are just too special — and they fly by in an instant. 52memories turns that one day into something lasting: a whole year of surprise messages, thoughtful photos, and shared moments — delivered slowly, with love. It's a way to keep the joy alive, long after the day is over.": "Algunos días son demasiado especiales — y pasan volando en un instante. 52memories convierte ese día en algo duradero: un año entero de mensajes sorpresa, fotos pensadas y momentos compartidos — entregados lentamente, con amor. Es una forma de mantener viva la alegría, mucho después de que el día termine.",
    
    // FAQ - Messages
    "Can the photos and videos shared by guests be downloaded?": "¿Se pueden descargar las fotos y videos compartidos por los invitados?",
    "We're currently thinking this through — there are a few aspects to consider. For now, downloads aren't available, but it's something we might offer in the future": "Actualmente estamos pensando en esto — hay algunos aspectos a considerar. Por ahora, las descargas no están disponibles, pero es algo que podríamos ofrecer en el futuro.",
    "Can I see the cards that have been created?": "¿Puedo ver las tarjetas que se han creado?",
    "In your dashboard, you can see who created cards and for which dates — but the actual content stays hidden until it's unlocked for the recipient.": "En tu panel, puedes ver quién creó tarjetas y para qué fechas — pero el contenido real permanece oculto hasta que se desbloquea para el destinatario.",
    "How are the messages delivered to the recipient?": "¿Cómo se entregan los mensajes al destinatario?",
    "Each time a new card unlocks, the recipient receives an email with a link that takes them straight to that card in their beautiful online album — all year long.": "Cada vez que se desbloquea una nueva tarjeta, el destinatario recibe un correo electrónico con un enlace que lo lleva directamente a esa tarjeta en su hermoso álbum en línea — todo el año.",
    "What happens if a guest creates multiple cards?": "¿Qué pasa si un invitado crea múltiples tarjetas?",
    "In your dashboard, you'll see who created cards for which dates. If someone got a bit too enthusiastic, you can simply delete extra cards.": "En tu panel, verás quién creó tarjetas para qué fechas. Si alguien se entusiasmó demasiado, simplemente puedes eliminar las tarjetas extra.",
    "Can created cards be edited later?": "¿Se pueden editar las tarjetas creadas más tarde?",
    "Yes. Guests receive an email right after creating their card with a link that lets them edit or update it anytime afterward.": "Sí. Los invitados reciben un correo electrónico justo después de crear su tarjeta con un enlace que les permite editarla o actualizarla en cualquier momento.",
    "Do guests need to register or download an app?": "¿Los invitados necesitan registrarse o descargar una app?",
    "Nope! They can start creating their card right away. We just need their email so they can receive a confirmation and edit their card later if they want to.": "¡No! Pueden empezar a crear su tarjeta de inmediato. Solo necesitamos su correo electrónico para que puedan recibir una confirmación y editar su tarjeta más tarde si lo desean.",
    "How do guests create messages?": "¿Cómo crean mensajes los invitados?",
    "We've made it super simple — guests upload a photo or video, add a short message, and send it off. No app needed.": "Lo hemos hecho súper simple — los invitados suben una foto o video, añaden un breve mensaje y lo envían. Sin necesidad de app.",
    "What kind of technical setup do guests need?": "¿Qué tipo de configuración técnica necesitan los invitados?",
    "Just a smartphone and an internet connection to upload their memory — it's quick and simple. They can also do it from a computer.": "Solo un smartphone y una conexión a Internet para subir su recuerdo — es rápido y simple. También pueden hacerlo desde una computadora.",
    
    // FAQ - Gifting
    "Can multiple people contribute together?": "¿Pueden contribuir varias personas juntas?",
    "Definitely. You can add your group name or all contributor names — we'll include them in the very first message to the recipient.": "Definitivamente. Puedes agregar el nombre de tu grupo o todos los nombres de los contribuyentes — los incluiremos en el primer mensaje al destinatario.",
    "How does the recipient find out about the gift?": "¿Cómo se entera el destinatario del regalo?",
    "They'll get a warm welcome email from us explaining what 52memories is and who it's from — unless they gifted it to themselves.": "Recibirán un cálido correo de bienvenida de nuestra parte explicando qué es 52memories y de quién es — a menos que se lo hayan regalado a sí mismos.",
    "Can I use it for a couple, a single person, or a group?": "¿Puedo usarlo para una pareja, una persona individual o un grupo?",
    "Yes! 52memories is perfect for birthdays, weddings, anniversaries, farewells, team events, travel groups — and many other special occasions.": "¡Sí! 52memories es perfecto para cumpleaños, bodas, aniversarios, despedidas, eventos de equipo, grupos de viaje — y muchas otras ocasiones especiales.",
    "How much does it cost?": "¿Cuánto cuesta?",
    "The final price depends on how many memories you want to send — bi-weekly (26), weekly (52), or twice a week (104). Have a look after signing up.": "El precio final depende de cuántos recuerdos quieras enviar — quincenal (26), semanal (52) o dos veces por semana (104). Échale un vistazo después de registrarte.",
    
    // Footer
    "NAVIGATION": "NAVEGACIÓN",
    "Social links": "Enlaces sociales",
    "Farewell": "Despedida",
    "Baby shower": "Baby shower",
    "Retirement": "Jubilación",
    "Anniversary": "Aniversario",
    "Graduation": "Graduación",
    "Team event": "Evento de equipo",
    "© 2025 52Memories, All rights reserved.": "© 2025 52Memories, Todos los derechos reservados.",
    "Privacy": "Privacidad",
    "Site notice": "Aviso legal",
    "Terms and conditions": "Términos y condiciones",
    "Cookies Settings": "Configuración de cookies",
    "Made with love by Ministry": "Hecho con amor por Ministry"
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
