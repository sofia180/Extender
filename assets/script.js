/* Extender site interactions */
(() => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const langButtons = document.querySelectorAll(".lang-btn");

  const translations = {
    ru: {
      "nav.home": "Главная",
      "nav.capabilities": "Компетенции",
      "nav.cases": "Кейсы",
      "nav.documents": "Документы",
      "nav.careers": "Карьера",
      "nav.contact": "Контакты",
      "nav.toggle": "Открыть меню",
      "cta.request": "Запросить предложение",
      "cta.capabilities": "Смотреть компетенции",
      "cta.viewCase": "Смотреть кейс →",
      "footer.tagline": "Выделенные команды исполнения для регулируемых и критичных программ.",
      "footer.linkedin": "LinkedIn: Extender",
      "footer.rights": "© 2026 Extender. Все права защищены.",
      "tag.fintech": "Финтех",
      "tag.enterpriseIT": "Корпоративный IT",
      "tag.gambling": "Азартные игры/ставки",
      "tag.cloud": "Облако",
      "tag.compliance": "Комплаенс",
      "tag.legal": "Юридический блок",
      "tag.audit": "Аудит",
      "tag.automation": "Автоматизация",
      "tag.legalOps": "Юр. операции",
      "tag.web3": "Web3",
      "case.results": "Результаты:",
      "case.budget": "Бюджет:",
      "case.timeline": "Срок:",
      "case.focus": "Фокус:",
      "case.tech": "Технологии:",
      "case.duration": "Длительность:",
      "index.hero.eyebrow": "Команды исполнения Extender",
      "index.hero.title": "Выделенные команды исполнения для проектов высокой сложности и рисков.",
      "index.hero.subtitle":
        "Extender проектирует и управляет кросс‑функциональными командами, которые обеспечивают регулируемый рост, модернизацию корпоративного IT и критически важное комплаенс‑исполнение.",
      "index.hero.stat.turnaround": "Подготовка предложения",
      "index.hero.stat.roles": "Ролей в команде",
      "index.hero.stat.timeline": "От старта до результата",
      "index.hero.stat.sla": "Соблюдение SLA",
      "index.hero.metric.coverage": "Глобальное покрытие",
      "index.hero.metric.throughput": "Рост производительности",
      "index.services.eyebrow": "Услуги",
      "index.services.title": "Команды исполнения, масштабируемые под скорость предприятия.",
      "index.services.subtitle":
        "Мы объединяем стратегию, доставку и управление в единую операционную модель для регулируемого роста и сложных стейкхолдеров.",
      "index.services.lead.title": "Лидогенерация / аутрич",
      "index.services.lead.text":
        "Аутбонд‑системы, обзвон и playbook для SDR, которые формируют квалифицированный пайплайн.",
      "index.services.marketing.title": "Маркетинг / SMM / контент",
      "index.services.marketing.text":
        "Непрерывные контент‑операции, социальная дистрибуция и отчётность по paid performance.",
      "index.services.design.title": "Дизайн / лендинги / креатив",
      "index.services.design.text":
        "Лендинги, бренд‑системы и креатив, ориентированные на конверсию.",
      "index.services.automation.title": "IT / автоматизация / боты",
      "index.services.automation.text":
        "Автоматизация процессов, внутренние инструменты, боты и интеграции в масштабе.",
      "index.services.audit.title": "Аудит (финансы, маркетинг, IT)",
      "index.services.audit.text":
        "Независимые аудиты, выявление пробелов в контролях, утечек бюджета и приоритетов оптимизации.",
      "index.services.security.title": "Безопасность (кибер, данные, риски)",
      "index.services.security.text":
        "Оценка безопасности, программы защиты данных и планы снижения рисков.",
      "index.services.cloud.title": "Облачные сервисы / хранилища / инфраструктура",
      "index.services.cloud.text":
        "Миграция в облако, стратегия хранения и надёжные инфраструктурные операции.",
      "index.services.blockchain.title": "Блокчейн / крипто‑проверка",
      "index.services.blockchain.text":
        "Техническая, юридическая и финансовая проверка крипто‑проектов и стартапов.",
      "index.services.legal.title": "Юридический блок и комплаенс",
      "index.services.legal.text":
        "Контрактное управление, архитектура политик и регуляторное соответствие по регионам.",
      "index.how.eyebrow": "Как мы работаем",
      "index.how.title": "Точная операционная модель с первого дня.",
      "index.how.subtitle":
        "Мы интегрируемся с руководством, юристами и техкомандой для прозрачных и измеримых результатов.",
      "index.how.step1.title": "Формирование команды",
      "index.how.step1.text":
        "Определяем объём, подбираем специалистов и выстраиваем управление за две недели.",
      "index.how.step2.title": "Исполнение",
      "index.how.step2.text":
        "Работаем спринтами с прозрачной отчётностью и контрольными точками качества.",
      "index.how.step3.title": "Масштабирование",
      "index.how.step3.text":
        "Увеличиваем мощность по мере необходимости, сохраняя ответственность и лидерство.",
      "index.arch.eyebrow": "Архитектура команды",
      "index.arch.title": "Структурное лидерство и умный масштаб.",
      "index.arch.subtitle":
        "Чёткая иерархия, которая синхронизирует стратегию, доставку и исполнение.",
      "index.arch.lead": "Стратегический лидер",
      "index.arch.block1": "Лидер блока 1",
      "index.arch.block2": "Лидер блока 2",
      "index.arch.block3": "Лидер блока 3",
      "index.arch.block4": "Лидер блока 4",
      "index.arch.block5": "Лидер блока 5",
      "index.arch.core": "Основная команда",
      "index.arch.reserve": "Резервная сеть",
      "index.cases.eyebrow": "Кейсы",
      "index.cases.title": "Истории исполнения в регулируемых отраслях.",
      "index.cases.subtitle":
        "Примеры того, как команды Extender обеспечивают измеримый прогресс в финтехе, enterprise IT и gaming.",
      "index.cases.card1.title": "Глобальная экспансия финтех‑платформы",
      "index.cases.card1.text":
        "Запустили compliance и growth‑команду для регулируемого расширения на новые рынки.",
      "index.cases.card2.title": "Модернизация корпоративного облака",
      "index.cases.card2.text":
        "Перенесли легаси‑инфраструктуру в защищённую мульти‑региональную облачную среду.",
      "index.cases.card3.title": "Игровая платформа с готовностью к комплаенсу",
      "index.cases.card3.text":
        "Запустили операционную команду ставок с жёстким аудитом и юридическим покрытием.",
      "index.cta.eyebrow": "Давайте строить",
      "index.cta.title": "Готовы масштабировать следующую программу?",
      "index.cta.subtitle":
        "Опишите объём работ — мы предложим выделенную команду исполнения за 48 часов.",
      "contact.hero.eyebrow": "Контакты",
      "contact.hero.title": "Запросите предложение от Extender.",
      "contact.hero.subtitle":
        "Опишите требования — мы соберём правильную команду для финтеха, enterprise IT или регулируемого gaming.",
      "contact.next.title": "Что дальше?",
      "contact.next.text":
        "Команда изучит запрос, назначит звонок и подготовит предложение за 48 часов.",
      "contact.next.email": "Email:",
      "contact.next.linkedin": "LinkedIn:",
      "contact.next.availability": "Доступность:",
      "cases.hero.eyebrow": "Кейсы",
      "cases.hero.title": "Доказательства исполнения в корпоративных программах.",
      "cases.hero.subtitle":
        "Мы формируем выделенные команды, которые работают на масштабе enterprise и быстро переводят стратегию в результат.",
      "cases.card1.title": "Глобальная экспансия финтеха",
      "cases.card1.text":
        "Развернули compliance, growth и инфраструктурные команды для запуска рынков с регуляторным соответствием.",
      "cases.card2.title": "Модернизация корпоративного облака",
      "cases.card2.text":
        "Перенесли легаси‑системы в устойчивую облачную архитектуру с 24/7 операциями.",
      "cases.card3.title": "Платформа ставок, готовая к комплаенсу",
      "cases.card3.text":
        "Построили операционные процессы и юридическую рамку для регулируемого запуска.",
      "cases.card4.title": "Программа корпоративных тендеров",
      "cases.card4.text":
        "Вели глобальные тендерные ответы с централизованной юридической и операционной поддержкой.",
      "cases.card5.title": "Автоматизация финансовых операций",
      "cases.card5.text":
        "Внедрили автоматизацию и сократили закрытие месяца с 10 дней до 4.",
      "cases.card6.title": "Сеть блокчейн‑расчётов",
      "cases.card6.text":
        "Построили безопасный слой расчётов и модель управления для партнёров предприятия.",
      "cases.cta.eyebrow": "Сотрудничайте с нами",
      "cases.cta.title": "Давайте сделаем ваш следующий кейс.",
      "cases.cta.subtitle":
        "Сообщите, где нужна поддержка исполнения, и мы соберём подходящую команду.",
      "capabilities.hero.eyebrow": "Компетенции",
      "capabilities.hero.title": "Команды исполнения для регулируемого роста и сложной доставки.",
      "capabilities.hero.subtitle":
        "Extender формирует выделенные команды, объединяющие стратегию, исполнение и управление. Каждая команда ориентирована на измеримые результаты, комплаенс и ответственность.",
      "capabilities.lead.title": "Лидогенерация / аутрич",
      "capabilities.lead.p1":
        "Мы строим полноценные outbound‑воронки: ICP, поиск и обогащение данных, мультиканальные последовательности, комплаентный обзвон и чистоту CRM.",
      "capabilities.lead.p2":
        "В командах — growth‑стратег, SDR‑менеджер, QA‑лид и enablement‑поддержка для стабильных целей.",
      "capabilities.lead.b1": "ICP‑исследования, списки, обогащение и сегментация.",
      "capabilities.lead.b2": "Скрипты и последовательности для email, звонков и LinkedIn.",
      "capabilities.lead.b3": "Скоринг лидов, SLA по передаче и автоматизация CRM.",
      "capabilities.lead.b4": "QA‑коучинг, аналитика конверсии и отчётность.",
      "capabilities.lead.meta":
        "Результаты: ICP‑дек, библиотека последовательностей, скрипты, KPI‑дашборд, QA‑оценки.",
      "capabilities.marketing.title": "Маркетинг / SMM / контент",
      "capabilities.marketing.p1":
        "Полноценные маркетинговые операции: позиционирование, контент‑календарь, SMM и paid‑медиа с корпоративной отчётностью.",
      "capabilities.marketing.p2":
        "Команда сочетает креативную стратегию, управление каналами и аналитику для улучшения CAC.",
      "capabilities.marketing.b1": "Контент‑стратегия, редакционный календарь и план каналов.",
      "capabilities.marketing.b2": "SMM‑управление, модерация сообщества и social‑отчётность.",
      "capabilities.marketing.b3": "Перформанс‑маркетинг с оптимизацией по KPI и CRO.",
      "capabilities.marketing.b4": "Lifecycle‑сообщения, CRM‑цепочки и retention‑программы.",
      "capabilities.marketing.meta":
        "Результаты: контент‑календарь, план каналов, креативы, KPI‑отчёты.",
      "capabilities.design.title": "Дизайн / лендинги / креатив",
      "capabilities.design.p1":
        "Конверсионные дизайн‑системы, лендинги и креатив. Дизайн под доверие enterprise и измеримую конверсию.",
      "capabilities.design.p2":
        "В командах — UX/UI, бренд, motion и копирайт для целей продукта и кампаний.",
      "capabilities.design.b1": "UX‑исследования, вайрфреймы и быстрые прототипы.",
      "capabilities.design.b2": "Лендинги и микросайты, оптимизированные под конверсию.",
      "capabilities.design.b3": "Бренд‑системы, UI‑киты и design tokens.",
      "capabilities.design.b4": "Креатив, моушен и производство ассетов.",
      "capabilities.design.meta":
        "Результаты: UI‑кит, лендинги, библиотека креативов, интерактивные прототипы.",
      "capabilities.automation.title": "IT / автоматизация / боты",
      "capabilities.automation.p1":
        "Инженеры автоматизации создают внутренние инструменты, ботов и интеграции, снижая операционные потери.",
      "capabilities.automation.p2":
        "Ускоряем доставку, сохраняя безопасность, управление доступом и стандарты enterprise.",
      "capabilities.automation.b1": "API‑интеграции, синхронизация данных и ETL‑пайплайны.",
      "capabilities.automation.b2": "RPA и боты для повторяющихся операций.",
      "capabilities.automation.b3": "Внутренние инструменты, дашборды и оркестрация.",
      "capabilities.automation.b4": "Мониторинг, runbook‑и и документация.",
      "capabilities.automation.meta":
        "Результаты: сценарии автоматизации, боты, интеграционная документация, runbook‑и.",
      "capabilities.audit.title": "Аудит (финансы, маркетинг, IT)",
      "capabilities.audit.p1":
        "Независимые аудиты финансов, маркетинг‑расходов и IT‑архитектуры с планом ремедиации.",
      "capabilities.audit.p2": "Аудиты включают отчёты для руководства и приоритизацию рисков.",
      "capabilities.audit.b1": "Проверка финансовых контролей и утечек бюджета.",
      "capabilities.audit.b2": "ROI маркетинга, эффективность каналов и атрибуция.",
      "capabilities.audit.b3": "Аудит IT‑архитектуры, облачных затрат и вендор‑рисков.",
      "capabilities.audit.b4": "Анализ комплаенс‑разрывов и план исправлений.",
      "capabilities.audit.meta": "Результаты: аудиторский отчёт, матрица рисков, план работ.",
      "capabilities.security.title": "Безопасность (кибер, данные, риски)",
      "capabilities.security.p1":
        "Оценка безопасности, уязвимостей и защита данных по SOC 2, ISO и региональным стандартам.",
      "capabilities.security.p2":
        "Включает threat‑моделирование, дизайн управления и планы реагирования на инциденты.",
      "capabilities.security.b1": "Аудит архитектуры безопасности и threat‑моделирование.",
      "capabilities.security.b2": "IAM, защита данных и политики шифрования.",
      "capabilities.security.b3": "Готовность к SOC 2, ISO и аудитам.",
      "capabilities.security.b4": "План реагирования на инциденты и tabletop‑сессии.",
      "capabilities.security.meta":
        "Результаты: оценка безопасности, карта контролей, план IR.",
      "capabilities.cloud.title": "Облачные сервисы / хранилища / инфраструктура",
      "capabilities.cloud.p1":
        "Миграция в облако, стратегия хранения и инфраструктурные операции с контролем затрат.",
      "capabilities.cloud.p2":
        "Команда включает архитекторов облака, DevOps/SRE и специалистов по безопасности.",
      "capabilities.cloud.b1": "Архитектура облака, планирование миграции и исполнение.",
      "capabilities.cloud.b2": "Infrastructure as Code, CI/CD и автоматизация.",
      "capabilities.cloud.b3": "Мониторинг, SRE‑покрытие и аварийное восстановление.",
      "capabilities.cloud.b4": "FinOps, оптимизация затрат и планирование ёмкости.",
      "capabilities.cloud.meta":
        "Результаты: cloud‑blueprint, IaC‑модули, runbook‑и, FinOps‑план.",
      "capabilities.blockchain.title": "Блокчейн / крипто‑дью диллидженс",
      "capabilities.blockchain.p1":
        "Технический и юридический due diligence для блокчейн‑проектов, крипто‑стартапов и токенизированных инициатив.",
      "capabilities.blockchain.p2":
        "Подходит инвесторам и enterprise‑партнёрам, которым нужна ясность до решения.",
      "capabilities.blockchain.b1": "Ревью смарт‑контрактов и проверки безопасности.",
      "capabilities.blockchain.b2": "Токеномика, казначейство и оценка governance.",
      "capabilities.blockchain.b3": "Регуляторное соответствие, KYC/AML и риск‑оценка.",
      "capabilities.blockchain.b4": "Проверка бизнес‑модели и рынка.",
      "capabilities.blockchain.meta":
        "Результаты: отчёт due diligence, рейтинг риска, memo go/no‑go.",
      "capabilities.legal.title": "Юридический блок и комплаенс",
      "capabilities.legal.p1":
        "Юридические операции для enterprise‑доставки: контракты, закупки, регуляторная готовность.",
      "capabilities.legal.p2":
        "Поддержка регулируемых рынков, включая финтех и gambling, в разных юрисдикциях.",
      "capabilities.legal.b1": "MSA/SOW, закупки и правки условий.",
      "capabilities.legal.b2": "Регуляторная карта, лицензирование и проверки комплаенса.",
      "capabilities.legal.b3": "Архитектура политик и внутренние тренинги.",
      "capabilities.legal.b4": "Due diligence вендоров и поддержка в юрисдикциях.",
      "capabilities.legal.meta":
        "Результаты: пакет контрактов, чек‑листы комплаенса, юридические SOP.",
      "documents.hero.eyebrow": "Управление",
      "documents.hero.title": "Документы по праву, комплаенсу и сотрудничеству.",
      "documents.hero.subtitle":
        "Пакет документов для закупок, регулируемой доставки и партнёрств. Включает условия, политики и операционные стандарты.",
      "documents.hero.note":
        "Документы являются профессиональными шаблонами для проверки юридическими и комплаенс‑командами.",
      "documents.toc.terms": "Условия",
      "documents.toc.commercials": "Коммерческие",
      "documents.toc.privacy": "Приватность",
      "documents.toc.dpa": "DPA",
      "documents.toc.security": "Безопасность",
      "documents.toc.sla": "SLA",
      "documents.toc.aup": "Допустимое использование",
      "documents.toc.cookies": "Cookies",
      "documents.toc.cooperation": "Сотрудничество",
      "documents.toc.faq": "FAQ",
      "documents.library.eyebrow": "Библиотека документов",
      "documents.library.title": "Полный профессиональный пакет документов.",
      "documents.library.subtitle":
        "Каждый документ ниже — самостоятельный модуль для закупок, юристов и безопасности.",
      "documents.card.view": "Открыть документ",
      "documents.card.terms.title": "Условия обслуживания",
      "documents.card.terms.text": "Основные условия, объём, платежи, IP и ответственность.",
      "documents.card.commercials.title": "Коммерческие условия",
      "documents.card.commercials.text": "Что входит в стоимость проекта и доп. опции.",
      "documents.card.privacy.title": "Политика конфиденциальности",
      "documents.card.privacy.text": "Сбор, использование, хранение и права данных.",
      "documents.card.dpa.title": "Соглашение об обработке данных",
      "documents.card.dpa.text": "Обязанности процессора и трансграничные гарантии.",
      "documents.card.security.title": "Безопасность и комплаенс",
      "documents.card.security.text": "Контроли, аудиты, реагирование на инциденты.",
      "documents.card.sla.title": "SLA",
      "documents.card.sla.text": "Доступность, уровни поддержки, эскалации.",
      "documents.card.aup.title": "Политика допустимого использования",
      "documents.card.aup.text": "Ограничения использования для регулируемых программ.",
      "documents.card.cookies.title": "Cookie‑политика",
      "documents.card.cookies.text": "Аналитика, предпочтения и контроль cookies.",
      "documents.card.cooperation.title": "Сотрудничество и партнёрство",
      "documents.card.cooperation.text": "Модель взаимодействия, управление, онбординг.",
      "documents.card.faq.title": "FAQ",
      "documents.card.faq.text": "Ответы на вопросы закупок и доставки.",
      "nav.skip": "К основному содержанию",
      "title.index": "Extender | Выделенные команды исполнения",
      "title.capabilities": "Extender | Компетенции",
      "title.cases": "Extender | Кейсы",
      "title.contact": "Extender | Контакты",
      "title.careers": "Extender | Карьера",
      "title.documents": "Extender | Документы",
      "index.hero.stat.timelineValue": "2 дня - 6 недель",
      "index.cases.card1.results": "3 рынка запущены",
      "index.cases.card1.timeline": "6 месяцев",
      "index.cases.card1.focus": "Комплаенс + рост",
      "index.cases.card2.results": "42% экономии затрат",
      "index.cases.card2.timeline": "8 месяцев",
      "index.cases.card2.focus": "Облако + безопасность",
      "index.cases.card3.results": "0 замечаний аудита",
      "index.cases.card3.timeline": "4 месяца",
      "index.cases.card3.focus": "Аудит + юр. блок",
      "contact.next.availabilityValue": "Глобальные команды",
      "cases.card1.duration": "6 месяцев",
      "cases.card2.duration": "8 месяцев",
      "cases.card3.duration": "4 месяца",
      "cases.card4.duration": "5 месяцев",
      "cases.card5.duration": "3 месяца",
      "cases.card6.duration": "7 месяцев",
      "capabilities.cta.eyebrow": "Начнём",
      "capabilities.cta.title": "Нужна команда компетенций за 30 дней?",
      "capabilities.cta.subtitle":
        "Поделитесь сроками, и мы подготовим план доставки, согласованный с целями enterprise.",
      "documents.terms.eyebrow": "Условия",
      "documents.terms.title": "Условия обслуживания и мастер‑соглашение (MSA)",
      "documents.terms.meta": "Обновлено: 19 февраля 2026",
      "documents.terms.p1":
        "Эти Условия регулируют все взаимодействия между Extender и Клиентом. Каждое взаимодействие оформляется через Statement of Work (SOW), где указаны объём, результаты, сроки и коммерческие условия. Если SOW противоречит этим Условиям, для соответствующего объёма действует SOW.",
      "documents.terms.scopeTitle": "Объём и доставка",
      "documents.terms.p2":
        "Extender предоставляет выделенные команды исполнения, операционное лидерство и управляемую доставку. Вся работа выполняется в рамках согласованного управления, отчётности и требований комплаенса.",
      "documents.terms.li1": "Чёткое определение объёма, поставка по вехам и согласование с клиентом.",
      "documents.terms.li2": "Регуляторное соответствие для финтеха, enterprise IT и gaming‑программ.",
      "documents.terms.li3": "Назначенные лидеры и контакты эскалации для каждого проекта.",
      "documents.terms.ipTitle": "Коммерческие условия и IP",
      "documents.terms.p3":
        "Стоимость определяется в SOW и оплачивается помесячно или по вехам. Если не указано иное, Клиент получает права на итоговые результаты после полной оплаты, а Extender сохраняет права на ранее созданные инструменты, шаблоны и ноу‑хау.",
      "documents.terms.confTitle": "Конфиденциальность и ответственность",
      "documents.terms.p4":
        "Стороны соглашаются на взаимную конфиденциальность. Ответственность ограничена прямыми убытками и суммой платежей по соответствующему SOW, если иное не требуется законом или не согласовано письменно.",
      "documents.terms.asideTitle": "Ключевые положения",
      "documents.terms.aside1": "Модель работы: MSA + SOW на каждую инициативу.",
      "documents.terms.aside2": "Оплата: ежемесячно постфактум, если SOW не указано иначе.",
      "documents.terms.aside3": "Права IP: клиент владеет итоговыми результатами.",
      "documents.terms.aside4": "Конфиденциальность: взаимный NDA, срок действия 3 года.",
      "documents.terms.aside5": "Расторжение: уведомление за 30 дней без причины.",
      "documents.commercials.eyebrow": "Коммерческие",
      "documents.commercials.title": "Коммерческие условия и объём стоимости",
      "documents.commercials.meta": "Обновлено: 20 февраля 2026",
      "documents.commercials.p1":
        "Extender выполняет проекты удалённо. Стоимость определяется в SOW и включает основной объём исполнения, перечисленный ниже. Дополнительные опции доступны по запросу и оплачиваются отдельно.",
      "documents.commercials.includedTitle": "Включено в стоимость проекта",
      "documents.commercials.included1": "Discovery, сбор требований и дорожная карта доставки.",
      "documents.commercials.included2": "Формирование pod‑команды, лидерство и управление проектом.",
      "documents.commercials.included3": "Исполнение согласованных результатов по выбранным компетенциям.",
      "documents.commercials.included4": "Контроль качества, комплаенс‑чекпоинты и еженедельная отчётность.",
      "documents.commercials.included5": "Документация, передача знаний и сессии передачи.",
      "documents.commercials.included6": "Удалённая коммуникация, ритм встреч и обновления стейкхолдеров.",
      "documents.commercials.addonsTitle": "Дополнительные опции (отдельная оплата)",
      "documents.commercials.addons1": "Покрытие SLA 24/7 или ускоренные реакции.",
      "documents.commercials.addons2": "Стороннее ПО, лицензии или закупка данных.",
      "documents.commercials.addons3": "Медиабюджеты, рекламные расходы или комиссии площадок.",
      "documents.commercials.addons4": "Расширенная юридическая/регуляторная работа вне согласованного объёма.",
      "documents.commercials.addons5": "Ускоренные сроки или дополнительный персонал.",
      "documents.commercials.p2":
        "Выездная работа не предоставляется. Если нужен очный формат, мы можем координировать его с вашей командой или одобренными партнёрами.",
      "documents.commercials.asideTitle": "Обзор оплаты",
      "documents.commercials.aside1": "Модель работы: MSA + SOW на каждую инициативу.",
      "documents.commercials.aside2": "Периодичность оплаты: ежемесячно или по вехам.",
      "documents.commercials.aside3": "Изменения: оцениваются и утверждаются письменно.",
      "documents.commercials.aside4": "Условия оплаты: net 15/30, если не указано иначе.",
      "documents.privacy.eyebrow": "Приватность",
      "documents.privacy.title": "Политика конфиденциальности",
      "documents.privacy.meta": "Обновлено: 19 февраля 2026",
      "documents.privacy.p1":
        "Extender собирает деловые контактные данные, коммуникации и данные использования для оказания услуг, ответа на запросы и улучшения доставки. Мы не продаём персональные данные и передаём их только утверждённым субпроцессорам по договору.",
      "documents.privacy.dataTitle": "Какие данные мы собираем",
      "documents.privacy.data1": "Контактные данные: имя, компания, роль, email и телефон.",
      "documents.privacy.data2": "Проектные данные: детали объёма, сроки и коммуникации.",
      "documents.privacy.data3": "Данные использования: события аналитики и метаданные устройств.",
      "documents.privacy.rightsTitle": "Ваши права",
      "documents.privacy.p2":
        "Клиенты могут запросить доступ, исправление, удаление или экспорт персональных данных. Запросы обрабатываются в течение 30 дней при подтверждении и с учётом юридических обязательств.",
      "documents.privacy.asideTitle": "Сводка обработки",
      "documents.privacy.aside1": "Цель: доставка услуг, безопасность и поддержка.",
      "documents.privacy.aside2": "Правовое основание: исполнение договора и законные интересы.",
      "documents.privacy.aside3": "Хранение: срок договора + 24 месяца.",
      "documents.privacy.aside4": "Контакт: hello@extender.cards.",
      "documents.dpa.eyebrow": "Обработка данных",
      "documents.dpa.title": "Соглашение об обработке данных (DPA)",
      "documents.dpa.meta": "Обновлено: 19 февраля 2026",
      "documents.dpa.p1":
        "DPA регулирует обработку персональных данных Extender от имени Клиента. Extender выступает процессором и следует документированным инструкциям Клиента, включая требования по трансграничной передаче.",
      "documents.dpa.securityTitle": "Меры безопасности",
      "documents.dpa.security1": "Ролевой доступ и принцип минимальных привилегий.",
      "documents.dpa.security2": "Шифрование при передаче и хранении, где применимо.",
      "documents.dpa.security3": "Непрерывный мониторинг и управление уязвимостями.",
      "documents.dpa.subTitle": "Субпроцессоры и передачи",
      "documents.dpa.p2":
        "Extender ведёт список утверждённых субпроцессоров и уведомляет Клиента о существенных изменениях. Трансграничные передачи выполняются с договорными гарантиями (например, SCC) при применимости.",
      "documents.dpa.asideTitle": "Ключевые положения DPA",
      "documents.dpa.aside1": "Контролёр: Клиент. Процессор: Extender.",
      "documents.dpa.aside2": "Аудит: ежегодная проверка безопасности по запросу.",
      "documents.dpa.aside3": "Удаление: через 30 дней после завершения работ.",
      "documents.dpa.aside4": "Уведомление о нарушении: в течение 72 часов после подтверждения.",
      "documents.security.eyebrow": "Безопасность",
      "documents.security.title": "Обзор безопасности и комплаенса",
      "documents.security.meta": "Обновлено: 19 февраля 2026",
      "documents.security.p1":
        "Extender ведёт программу безопасности, согласованную с признанными контрольными фреймворками. Управление, доступ и контроль доставки определяются для каждого взаимодействия и пересматриваются ежеквартально.",
      "documents.security.controlsTitle": "Ключевые контроли",
      "documents.security.controls1": "Управление идентичностью и доступом с обязательным MFA.",
      "documents.security.controls2": "Безопасный SDLC, утверждение изменений и аудит‑логи.",
      "documents.security.controls3": "Оценка рисков поставщиков и проверки безопасности.",
      "documents.security.irTitle": "Реагирование на инциденты",
      "documents.security.p2":
        "Выделенный лидер по реагированию координирует локализацию, уведомления клиентов и пост‑инцидентное устранение с фиксированными сроками.",
      "documents.security.asideTitle": "Пакет безопасности",
      "documents.security.aside1": "Обзорная презентация безопасности для закупок.",
      "documents.security.aside2": "Стандартизированный опросник по рискам.",
      "documents.security.aside3": "Плейбуки по пентестам и реакции на уязвимости.",
      "documents.sla.eyebrow": "Уровни сервиса",
      "documents.sla.title": "Соглашение об уровне сервиса (SLA)",
      "documents.sla.meta": "Обновлено: 19 февраля 2026",
      "documents.sla.p1":
        "SLA определяет цели по доступности, реакции и устранению для управляемых сервисов. Уровни сервиса настраиваются по SOW и применяются к продакшн‑системам под управлением Extender.",
      "documents.sla.availabilityTitle": "Цели по доступности",
      "documents.sla.availability1": "99,5% целевой аптайм в месяц для управляемых продакшн‑нагрузок.",
      "documents.sla.availability2": "Окна обслуживания объявляются минимум за 72 часа.",
      "documents.sla.availability3": "Сервисные кредиты применяются при невыполнении целей.",
      "documents.sla.supportTitle": "Уровни поддержки",
      "documents.sla.p2":
        "Поддержка охватывает стандартные рабочие часы с 24/7 эскалацией критических инцидентов. Время реакции зависит от критичности и бизнес‑влияния.",
      "documents.sla.asideTitle": "Цели реакции",
      "documents.sla.aside1": "Severity 1: реакция 1 час, устранение 4 часа.",
      "documents.sla.aside2": "Severity 2: реакция 4 часа, устранение 24 часа.",
      "documents.sla.aside3": "Severity 3: реакция 1 рабочий день.",
      "documents.sla.aside4": "Severity 4: реакция 3 рабочих дня.",
      "documents.aup.eyebrow": "Допустимое использование",
      "documents.aup.title": "Политика допустимого использования (AUP)",
      "documents.aup.meta": "Обновлено: 19 февраля 2026",
      "documents.aup.p1":
        "Сервисы Extender должны использоваться законно и в соответствии с применимыми правилами каждой юрисдикции. Клиенты отвечают за наличие необходимых лицензий для регулируемых видов деятельности.",
      "documents.aup.prohibitedTitle": "Запрещённое использование",
      "documents.aup.prohibited1": "Несанкционированный доступ, злоупотребление учётными данными или скрейпинг данных.",
      "documents.aup.prohibited2": "Распространение вредоносного ПО или злонамеренной автоматизации.",
      "documents.aup.prohibited3": "Нелицензированные или незаконные игры, финансовая или крипто‑деятельность.",
      "documents.aup.prohibited4": "Нарушение санкций, анти‑коррупционных или AML‑обязательств.",
      "documents.aup.asideTitle": "Обязанности клиента",
      "documents.aup.aside1": "Поддерживать актуальную комплаенс‑документацию.",
      "documents.aup.aside2": "Сообщать Extender о регуляторных изменениях.",
      "documents.aup.aside3": "Обеспечивать законность сторонних источников данных.",
      "documents.cookies.eyebrow": "Cookies",
      "documents.cookies.title": "Cookie‑политика",
      "documents.cookies.meta": "Обновлено: 19 февраля 2026",
      "documents.cookies.p1":
        "Extender использует cookies и похожие технологии для стабильной работы сайта, измерения вовлечённости и улучшения опыта. Управлять cookies можно в настройках браузера.",
      "documents.cookies.categoriesTitle": "Категории cookies",
      "documents.cookies.categories1": "Необходимые cookies для работы сайта.",
      "documents.cookies.categories2": "Аналитические cookies для понимания использования сайта.",
      "documents.cookies.categories3": "Cookies предпочтений, которые запоминают настройки пользователя.",
      "documents.cookies.optTitle": "Отключение",
      "documents.cookies.p2":
        "Вы можете отключить cookies в браузере. Некоторые функции могут быть недоступны при блокировке необходимых cookies.",
      "documents.cookies.asideTitle": "Аналитика",
      "documents.cookies.aside1": "Google Analytics 4 для агрегированных метрик.",
      "documents.cookies.aside2": "Мы не продаём персональные данные и не используем кросс‑сайт трекинг.",
      "documents.cooperation.eyebrow": "Сотрудничество",
      "documents.cooperation.title": "Условия сотрудничества и партнёрства",
      "documents.cooperation.meta": "Обновлено: 19 февраля 2026",
      "documents.cooperation.p1":
        "Extender сотрудничает с агентствами, консалтингом и enterprise‑командами для реализации сложных программ. Условия сотрудничества определяют ответственность, отчётность и управление.",
      "documents.cooperation.modelTitle": "Модель взаимодействия",
      "documents.cooperation.model1": "Единый ответственный лидер доставки на программу.",
      "documents.cooperation.model2": "Совместный операционный ритм с еженедельными апдейтами руководству.",
      "documents.cooperation.model3": "Общий реестр рисков и комплаенс‑чекпоинты.",
      "documents.cooperation.govTitle": "Коммерческое управление",
      "documents.cooperation.p2":
        "Коммерческие схемы включают revenue share, фиксированную оплату доставки или гибридные модели. Все условия фиксируются в отдельном Partner SOW.",
      "documents.cooperation.asideTitle": "Онбординг партнёра",
      "documents.cooperation.aside1": "Взаимный NDA и требования по обработке данных.",
      "documents.cooperation.aside2": "Чек‑лист проверки безопасности и комплаенса.",
      "documents.cooperation.aside3": "Согласование бренда и коммуникаций.",
      "documents.faq.eyebrow": "FAQ",
      "documents.faq.title": "Частые вопросы по закупкам.",
      "documents.faq.subtitle":
        "Если нужен подписанный или кастомный пакет документов, напишите на hello@extender.cards — ответим в течение одного рабочего дня.",
      "documents.faq.q1": "Вы предоставляете полный шаблон MSA и SOW?",
      "documents.faq.a1":
        "Да. Мы предоставляем мастер‑соглашение с шаблоном SOW, который можно адаптировать под требования закупок и местную юрисдикцию.",
      "documents.faq.q2": "Можете ли вы поддерживать регулируемую финтех или gaming‑доставку?",
      "documents.faq.a2":
        "Мы встраиваем комплаенс‑ и аудит‑чекпоинты в каждое взаимодействие. Команды доставки соответствуют регуляторным обязательствам и требованиям лицензирования.",
      "documents.faq.q3": "Подписываете ли вы NDA до discovery?",
      "documents.faq.a3":
        "Да. Мы можем подписать взаимный или односторонний NDA до воркшопов по предложению или технических обсуждений.",
      "documents.faq.q4": "Как вы работаете с субподрядчиками?",
      "documents.faq.a4":
        "Все субподрядчики проходят проверку, заключают договор и подпадают под те же требования конфиденциальности и безопасности. Списки субпроцессоров предоставляются по запросу.",
      "documents.faq.q5": "Какие подтверждения безопасности вы предоставляете?",
      "documents.faq.a5":
        "Мы предоставляем обзор безопасности, ответы на риск‑опросники и документацию по инцидент‑реагированию. Дополнительные материалы доступны под NDA.",
      "documents.faq.q6": "Поддерживаете ли требования по резидентности данных?",
      "documents.faq.a6":
        "Да. Мы можем спроектировать доставку под требования резидентности данных и документировать все трансграничные передачи.",
      "documents.faq.q7": "Какие типовые условия контрактов?",
      "documents.faq.a7":
        "Большинство проектов стартуют с SOW на 3-6 месяцев и переходят в долгосрочную поддержку. Условия гибкие и подстраиваются под политики закупок.",
      "documents.faq.q8": "Как быстро вы подготовите кастомный пакет документов?",
      "documents.faq.a8":
        "Стандартный пакет предоставляем в течение 48 часов. Кастомные правки — в течение 3-5 рабочих дней.",
      "form.company": "Название компании",
      "form.companyPlaceholder": "Extender Inc.",
      "form.email": "Email",
      "form.emailPlaceholder": "name@company.com",
      "form.phone": "Телефон",
      "form.phonePlaceholder": "+7 (___) ___‑__‑__",
      "form.budget": "Бюджет",
      "form.budgetPlaceholder": "Выберите диапазон",
      "form.timeline": "Сроки",
      "form.timelinePlaceholder": "Запуск в Q2",
      "form.description": "Описание проекта",
      "form.descriptionPlaceholder": "Расскажите о целях, объёме и текущих задачах.",
      "form.submit": "Отправить",
      "form.fullName": "Имя и фамилия",
      "form.fullNamePlaceholder": "Jane Doe",
      "form.sending": "Отправка...",
      "form.error.required": "Заполните все обязательные поля.",
      "form.error.email": "Укажите корректный email адрес.",
      "form.error.phone": "Введите корректный номер телефона.",
      "form.error.url": "Введите корректный URL.",
      "form.error.submit":
        "Отправка не удалась. Попробуйте ещё раз или напишите на hello@extender.cards.",
      "form.success.contact": "Спасибо за обращение. Мы ответим в течение одного рабочего дня.",
      "form.success.careers": "Спасибо за заявку. Мы ответим в течение пяти рабочих дней.",
      "careers.hero.eyebrow": "Карьера",
      "careers.hero.title": "Присоединяйтесь к командам, которые реализуют сложные программы.",
      "careers.hero.subtitle":
        "Extender формирует команды исполнения для критичных отраслей. Мы ищем опытных операторов, стратегов и лидеров доставки.",
      "careers.form.role": "Интересующая роль",
      "careers.form.rolePlaceholder": "Выберите роль",
      "careers.form.roleLead": "Лидогенерация / аутрич",
      "careers.form.roleMarketing": "Маркетинг / SMM / контент",
      "careers.form.roleDesign": "Дизайн / лендинги / креатив",
      "careers.form.roleAutomation": "IT / автоматизация / боты",
      "careers.form.roleAudit": "Аудит (финансы / маркетинг / IT)",
      "careers.form.roleSecurity": "Безопасность (кибер / данные / риски)",
      "careers.form.roleCloud": "Облачные сервисы / инфраструктура",
      "careers.form.roleBlockchain": "Блокчейн / крипто‑дью диллидженс",
      "careers.form.roleLegal": "Юридический блок / комплаенс",
      "careers.form.roleOther": "Другое",
      "careers.form.experience": "Уровень опыта",
      "careers.form.experiencePlaceholder": "Выберите уровень",
      "careers.form.experience1": "1-3 года",
      "careers.form.experience2": "3-5 лет",
      "careers.form.experience3": "5-8 лет",
      "careers.form.experience4": "8+ лет",
      "careers.form.location": "Локация / часовой пояс",
      "careers.form.locationPlaceholder": "Berlin (CET)",
      "careers.form.linkedin": "LinkedIn или портфолио",
      "careers.form.linkedinPlaceholder": "https://linkedin.com/in/username",
      "careers.form.resume": "Ссылка на резюме",
      "careers.form.resumePlaceholder": "https://drive.google.com/...",
      "careers.form.message": "Почему Extender?",
      "careers.form.messagePlaceholder":
        "Расскажите о компетенциях, предпочтительных индустриях и доступности.",
      "careers.form.submit": "Отправить заявку",
      "careers.side.title": "Что мы ищем",
      "careers.side.text":
        "Мы сотрудничаем с опытными операторами, которые понимают регулируемые среды и работают прозрачно.",
      "careers.side.point1": "Опыт в финтехе, enterprise IT или gaming.",
      "careers.side.point2": "Комфортно работать со структурной отчётностью и KPI.",
      "careers.side.point3": "Умение работать в кросс‑функциональных распределённых командах.",
      "careers.side.meta": "Средний цикл рассмотрения: 5 рабочих дней.",
      "careers.form.experience4": "8+ лет"
    },
    uk: {
      "nav.home": "Головна",
      "nav.capabilities": "Можливості",
      "nav.cases": "Кейси",
      "nav.documents": "Документи",
      "nav.careers": "Карʼєра",
      "nav.contact": "Контакти",
      "nav.toggle": "Відкрити меню",
      "cta.request": "Запросити пропозицію",
      "cta.capabilities": "Переглянути можливості",
      "cta.viewCase": "Переглянути кейс →",
      "footer.tagline": "Виділені команди виконання для регульованих і критичних програм.",
      "footer.linkedin": "LinkedIn: Extender",
      "footer.rights": "© 2026 Extender. Усі права захищені.",
      "tag.fintech": "Фінтех",
      "tag.enterpriseIT": "Корпоративний IT",
      "tag.gambling": "Азартні ігри/ставки",
      "tag.cloud": "Хмара",
      "tag.compliance": "Комплаєнс",
      "tag.legal": "Юридичний блок",
      "tag.audit": "Аудит",
      "tag.automation": "Автоматизація",
      "tag.legalOps": "Юр. операції",
      "tag.web3": "Web3",
      "case.results": "Результати:",
      "case.budget": "Бюджет:",
      "case.timeline": "Термін:",
      "case.focus": "Фокус:",
      "case.tech": "Технології:",
      "case.duration": "Тривалість:",
      "index.hero.eyebrow": "Команди виконання Extender",
      "index.hero.title": "Виділені команди виконання для складних і ризикових програм.",
      "index.hero.subtitle":
        "Extender проєктує та керує крос‑функціональними командами для регульованого росту, модернізації enterprise IT та критичного комплаєнсу.",
      "index.hero.stat.turnaround": "Підготовка пропозиції",
      "index.hero.stat.roles": "Ролей у команді",
      "index.hero.stat.timeline": "Від старту до результату",
      "index.hero.stat.sla": "Дотримання SLA",
      "index.hero.metric.coverage": "Глобальне покриття",
      "index.hero.metric.throughput": "Зростання продуктивності",
      "index.services.eyebrow": "Послуги",
      "index.services.title": "Команди виконання, що масштабуються під швидкість підприємства.",
      "index.services.subtitle":
        "Ми поєднуємо стратегію, доставку та управління в єдину операційну модель для регульованого росту.",
      "index.services.lead.title": "Лідогенерація / аутрич",
      "index.services.lead.text":
        "Аутбаунд‑системи, дзвінки та SDR‑плейбуки, що формують кваліфікований пайплайн.",
      "index.services.marketing.title": "Маркетинг / SMM / контент",
      "index.services.marketing.text":
        "Постійні контент‑операції, соціальна дистрибуція та звітність по paid performance.",
      "index.services.design.title": "Дизайн / лендинги / креатив",
      "index.services.design.text":
        "Лендинги, бренд‑системи та креатив з фокусом на конверсію.",
      "index.services.automation.title": "IT / автоматизація / боти",
      "index.services.automation.text":
        "Автоматизація процесів, внутрішні інструменти, боти та інтеграції в масштабі.",
      "index.services.audit.title": "Аудит (фінанси, маркетинг, IT)",
      "index.services.audit.text":
        "Незалежні аудити, виявлення прогалин у контролях, витоків бюджету та пріоритетів оптимізації.",
      "index.services.security.title": "Безпека (кібер, дані, ризики)",
      "index.services.security.text":
        "Оцінка безпеки, програми захисту даних і плани зниження ризиків.",
      "index.services.cloud.title": "Хмарні сервіси / сховища / інфраструктура",
      "index.services.cloud.text":
        "Міграція в хмару, стратегія зберігання та надійні інфраструктурні операції.",
      "index.services.blockchain.title": "Блокчейн / крипто‑перевірка",
      "index.services.blockchain.text":
        "Технічна, юридична та фінансова перевірка криптопроєктів і стартапів.",
      "index.services.legal.title": "Юридичний блок і комплаєнс",
      "index.services.legal.text":
        "Контрактне управління, архітектура політик та регуляторна відповідність.",
      "index.how.eyebrow": "Як ми працюємо",
      "index.how.title": "Точна операційна модель з першого дня.",
      "index.how.subtitle":
        "Ми інтегруємось з керівництвом, юристами та техкомандою для прозорих результатів.",
      "index.how.step1.title": "Формування команди",
      "index.how.step1.text":
        "Визначаємо обсяг, підбираємо фахівців і вибудовуємо управління за два тижні.",
      "index.how.step2.title": "Виконання",
      "index.how.step2.text":
        "Працюємо спринтами з прозорою звітністю та контрольними точками якості.",
      "index.how.step3.title": "Масштабування",
      "index.how.step3.text":
        "Збільшуємо потужність за потреби, зберігаючи відповідальність і лідерство.",
      "index.arch.eyebrow": "Архітектура команди",
      "index.arch.title": "Структурне лідерство та розумне масштабування.",
      "index.arch.subtitle":
        "Чітка ієрархія, що синхронізує стратегію, доставку та виконання.",
      "index.arch.lead": "Стратегічний лідер",
      "index.arch.block1": "Лідер блоку 1",
      "index.arch.block2": "Лідер блоку 2",
      "index.arch.block3": "Лідер блоку 3",
      "index.arch.block4": "Лідер блоку 4",
      "index.arch.block5": "Лідер блоку 5",
      "index.arch.core": "Основна команда",
      "index.arch.reserve": "Резервна мережа",
      "index.cases.eyebrow": "Кейси",
      "index.cases.title": "Історії виконання в регульованих галузях.",
      "index.cases.subtitle":
        "Приклади того, як команди Extender забезпечують вимірюваний прогрес у фінтех, enterprise IT та gaming.",
      "index.cases.card1.title": "Глобальна експансія фінтех‑платформи",
      "index.cases.card1.text":
        "Запустили compliance і growth‑команду для регульованого виходу на нові ринки.",
      "index.cases.card2.title": "Модернізація корпоративної хмари",
      "index.cases.card2.text":
        "Перенесли legacy‑інфраструктуру у захищене мульти‑регіональне хмарне середовище.",
      "index.cases.card3.title": "Ігрова платформа з готовністю до комплаєнсу",
      "index.cases.card3.text":
        "Запустили операційну команду ставок із жорстким аудитом і юридичною підтримкою.",
      "index.cta.eyebrow": "Давайте створювати",
      "index.cta.title": "Готові масштабувати наступну програму?",
      "index.cta.subtitle":
        "Опишіть обсяг робіт — ми запропонуємо виділену команду виконання за 48 годин.",
      "contact.hero.eyebrow": "Контакти",
      "contact.hero.title": "Запросіть пропозицію від Extender.",
      "contact.hero.subtitle":
        "Опишіть вимоги — ми сформуємо правильну команду для фінтех, enterprise IT або gaming.",
      "contact.next.title": "Що далі?",
      "contact.next.text":
        "Команда опрацює запит, призначить дзвінок і підготує пропозицію за 48 годин.",
      "contact.next.email": "Email:",
      "contact.next.linkedin": "LinkedIn:",
      "contact.next.availability": "Доступність:",
      "cases.hero.eyebrow": "Кейси",
      "cases.hero.title": "Докази виконання корпоративних програм.",
      "cases.hero.subtitle":
        "Ми формуємо виділені команди, які працюють на масштабу enterprise та швидко переводять стратегію в результат.",
      "cases.card1.title": "Глобальна експансія фінтеху",
      "cases.card1.text":
        "Розгорнули compliance, growth та інфраструктурні команди для запуску ринків з регуляторною відповідністю.",
      "cases.card2.title": "Модернізація корпоративної хмари",
      "cases.card2.text":
        "Перенесли legacy‑системи в стійку хмарну архітектуру з 24/7 операціями.",
      "cases.card3.title": "Платформа ставок, готова до комплаєнсу",
      "cases.card3.text":
        "Побудували операційні процеси та юридичну рамку для регульованого запуску.",
      "cases.card4.title": "Програма корпоративних тендерів",
      "cases.card4.text":
        "Вели глобальні тендерні відповіді з централізованою юридичною та операційною підтримкою.",
      "cases.card5.title": "Автоматизація фінансових операцій",
      "cases.card5.text":
        "Впровадили автоматизацію та скоротили закриття місяця з 10 днів до 4.",
      "cases.card6.title": "Мережа блокчейн‑розрахунків",
      "cases.card6.text":
        "Побудували безпечний шар розрахунків і модель управління для партнерів.",
      "cases.cta.eyebrow": "Співпрацюйте з нами",
      "cases.cta.title": "Давайте створимо ваш наступний кейс.",
      "cases.cta.subtitle":
        "Повідомте, де потрібна підтримка виконання, і ми зберемо правильну команду.",
      "capabilities.hero.eyebrow": "Можливості",
      "capabilities.hero.title": "Команди виконання для регульованого росту та складної доставки.",
      "capabilities.hero.subtitle":
        "Extender формує виділені команди, що поєднують стратегію, виконання й управління.",
      "capabilities.lead.title": "Лідогенерація / аутрич",
      "capabilities.lead.p1":
        "Ми будуємо outbound‑воронки: ICP, пошук і збагачення даних, мультиканальні послідовності, комплаєнсний обзвон та чистоту CRM.",
      "capabilities.lead.p2":
        "Команди включають growth‑стратега, SDR‑менеджера, QA‑ліда та enablement‑підтримку.",
      "capabilities.lead.b1": "ICP‑дослідження, списки, збагачення й сегментація.",
      "capabilities.lead.b2": "Скрипти та послідовності для email, дзвінків і LinkedIn.",
      "capabilities.lead.b3": "Скоринг лідів, SLA передачі та автоматизація CRM.",
      "capabilities.lead.b4": "QA‑коучинг, аналітика конверсії та звітність.",
      "capabilities.lead.meta":
        "Результати: ICP‑дек, бібліотека послідовностей, скрипти, KPI‑дашборд, QA‑оцінки.",
      "capabilities.marketing.title": "Маркетинг / SMM / контент",
      "capabilities.marketing.p1":
        "Маркетингові операції: позиціонування, контент‑календар, SMM та paid‑медіа зі звітністю.",
      "capabilities.marketing.p2":
        "Команда поєднує креативну стратегію, управління каналами та аналітику.",
      "capabilities.marketing.b1": "Контент‑стратегія, редакційний календар і план каналів.",
      "capabilities.marketing.b2": "SMM‑управління, модерація спільноти та social‑звітність.",
      "capabilities.marketing.b3": "Performance‑маркетинг з оптимізацією по KPI та CRO.",
      "capabilities.marketing.b4": "Lifecycle‑повідомлення, CRM‑ланцюжки та retention‑програми.",
      "capabilities.marketing.meta":
        "Результати: контент‑календар, план каналів, креативи, KPI‑звітність.",
      "capabilities.design.title": "Дизайн / лендинги / креатив",
      "capabilities.design.p1":
        "Конверсійні дизайн‑системи, лендинги та креатив для довіри enterprise й вимірюваних результатів.",
      "capabilities.design.p2":
        "Команди включають UX/UI, бренд, motion і копірайт для цілей продукту та кампаній.",
      "capabilities.design.b1": "UX‑дослідження, вайрфрейми та швидкі прототипи.",
      "capabilities.design.b2": "Лендинги й мікросайти, оптимізовані під конверсію.",
      "capabilities.design.b3": "Бренд‑системи, UI‑кіти та design tokens.",
      "capabilities.design.b4": "Креатив, моушн і виробництво ассетів.",
      "capabilities.design.meta":
        "Результати: UI‑кіт, лендинги, бібліотека креативів, інтерактивні прототипи.",
      "capabilities.automation.title": "IT / автоматизація / боти",
      "capabilities.automation.p1":
        "Інженери автоматизації створюють внутрішні інструменти, ботів та інтеграції.",
      "capabilities.automation.p2":
        "Прискорюємо доставку, зберігаючи безпеку, управління доступом і стандарти enterprise.",
      "capabilities.automation.b1": "API‑інтеграції, синхронізація даних і ETL‑пайплайни.",
      "capabilities.automation.b2": "RPA та боти для повторюваних операцій.",
      "capabilities.automation.b3": "Внутрішні інструменти, дашборди та оркестрація.",
      "capabilities.automation.b4": "Моніторинг, runbook‑и та документація.",
      "capabilities.automation.meta":
        "Результати: сценарії автоматизації, боти, інтеграційна документація, runbook‑и.",
      "capabilities.audit.title": "Аудит (фінанси, маркетинг, IT)",
      "capabilities.audit.p1":
        "Незалежні аудити фінансів, маркетингових витрат і IT‑архітектури з планом ремедіації.",
      "capabilities.audit.p2": "Аудити включають звіти для керівництва та пріоритизацію ризиків.",
      "capabilities.audit.b1": "Перевірка фінансових контролів і витоків бюджету.",
      "capabilities.audit.b2": "ROI маркетингу, ефективність каналів та атрибуція.",
      "capabilities.audit.b3": "Аудит IT‑архітектури, хмарних витрат і вендор‑ризиків.",
      "capabilities.audit.b4": "Аналіз комплаєнс‑розривів та план виправлень.",
      "capabilities.audit.meta": "Результати: аудиторський звіт, матриця ризиків, план робіт.",
      "capabilities.security.title": "Безпека (кібер, дані, ризики)",
      "capabilities.security.p1":
        "Оцінка безпеки, вразливостей і захист даних по SOC 2, ISO та регіональних стандартах.",
      "capabilities.security.p2":
        "Включає threat‑моделювання, дизайн управління та плани реагування на інциденти.",
      "capabilities.security.b1": "Аудит архітектури безпеки та threat‑моделювання.",
      "capabilities.security.b2": "IAM, захист даних і політики шифрування.",
      "capabilities.security.b3": "Готовність до SOC 2, ISO та аудитів.",
      "capabilities.security.b4": "План реагування на інциденти та tabletop‑сесії.",
      "capabilities.security.meta": "Результати: оцінка безпеки, карта контролів, план IR.",
      "capabilities.cloud.title": "Хмарні сервіси / сховища / інфраструктура",
      "capabilities.cloud.p1":
        "Міграція в хмару, стратегія зберігання та інфраструктурні операції з контролем витрат.",
      "capabilities.cloud.p2":
        "Команда включає архітекторів хмари, DevOps/SRE та фахівців з безпеки.",
      "capabilities.cloud.b1": "Архітектура хмари, планування міграції та виконання.",
      "capabilities.cloud.b2": "Infrastructure as Code, CI/CD та автоматизація.",
      "capabilities.cloud.b3": "Моніторинг, SRE‑покриття та аварійне відновлення.",
      "capabilities.cloud.b4": "FinOps, оптимізація витрат і планування потужностей.",
      "capabilities.cloud.meta":
        "Результати: cloud‑blueprint, IaC‑модулі, runbook‑и, FinOps‑план.",
      "capabilities.blockchain.title": "Блокчейн / крипто‑дью діллідженс",
      "capabilities.blockchain.p1":
        "Технічний і юридичний due diligence для блокчейн‑проєктів, крипто‑стартапів і токенізованих ініціатив.",
      "capabilities.blockchain.p2":
        "Підходить інвесторам і enterprise‑партнерам, яким потрібна ясність до рішення.",
      "capabilities.blockchain.b1": "Ревʼю смарт‑контрактів і перевірки безпеки.",
      "capabilities.blockchain.b2": "Токеноміка, казначейство й оцінка governance.",
      "capabilities.blockchain.b3": "Регуляторна відповідність, KYC/AML і оцінка ризику.",
      "capabilities.blockchain.b4": "Перевірка бізнес‑моделі та ринку.",
      "capabilities.blockchain.meta":
        "Результати: звіт due diligence, рейтинг ризику, memo go/no‑go.",
      "capabilities.legal.title": "Юридичний блок і комплаєнс",
      "capabilities.legal.p1":
        "Юридичні операції для enterprise‑доставки: контракти, закупівлі, регуляторна готовність.",
      "capabilities.legal.p2":
        "Підтримка регульованих ринків, включно з фінтех і gambling, у різних юрисдикціях.",
      "capabilities.legal.b1": "MSA/SOW, закупівлі та правки умов.",
      "capabilities.legal.b2": "Регуляторна карта, ліцензування та комплаєнс‑перевірки.",
      "capabilities.legal.b3": "Архітектура політик та внутрішні тренінги.",
      "capabilities.legal.b4": "Due diligence вендорів та підтримка в юрисдикціях.",
      "capabilities.legal.meta":
        "Результати: пакет контрактів, чек‑листи комплаєнсу, юридичні SOP.",
      "documents.hero.eyebrow": "Управління",
      "documents.hero.title": "Документи з права, комплаєнсу та співпраці.",
      "documents.hero.subtitle":
        "Пакет документів для закупівель, регульованої доставки та партнерств.",
      "documents.hero.note":
        "Документи є професійними шаблонами для перевірки юридичними та комплаєнс‑командами.",
      "documents.toc.terms": "Умови",
      "documents.toc.commercials": "Комерційні",
      "documents.toc.privacy": "Приватність",
      "documents.toc.dpa": "DPA",
      "documents.toc.security": "Безпека",
      "documents.toc.sla": "SLA",
      "documents.toc.aup": "Допустиме використання",
      "documents.toc.cookies": "Cookies",
      "documents.toc.cooperation": "Співпраця",
      "documents.toc.faq": "FAQ",
      "documents.library.eyebrow": "Бібліотека документів",
      "documents.library.title": "Повний професійний пакет документів.",
      "documents.library.subtitle":
        "Кожен документ нижче — окремий модуль для закупівель, юристів і безпеки.",
      "documents.card.view": "Відкрити документ",
      "documents.card.terms.title": "Умови обслуговування",
      "documents.card.terms.text": "Основні умови, обсяг, платежі, IP і відповідальність.",
      "documents.card.commercials.title": "Комерційні умови",
      "documents.card.commercials.text": "Що входить у вартість проєкту та опції.",
      "documents.card.privacy.title": "Політика конфіденційності",
      "documents.card.privacy.text": "Збір, використання, зберігання та права даних.",
      "documents.card.dpa.title": "Угода про обробку даних",
      "documents.card.dpa.text": "Обовʼязки процесора та трансграничні гарантії.",
      "documents.card.security.title": "Безпека та комплаєнс",
      "documents.card.security.text": "Контролі, аудити, реагування на інциденти.",
      "documents.card.sla.title": "SLA",
      "documents.card.sla.text": "Доступність, рівні підтримки, ескалації.",
      "documents.card.aup.title": "Політика допустимого використання",
      "documents.card.aup.text": "Обмеження використання для регульованих програм.",
      "documents.card.cookies.title": "Cookie‑політика",
      "documents.card.cookies.text": "Аналітика, вподобання та контроль cookies.",
      "documents.card.cooperation.title": "Співпраця та партнерство",
      "documents.card.cooperation.text": "Модель взаємодії, управління, онбординг.",
      "documents.card.faq.title": "FAQ",
      "documents.card.faq.text": "Відповіді на питання закупівель та доставки.",
      "nav.skip": "Перейти до основного вмісту",
      "title.index": "Extender | Виділені команди виконання",
      "title.capabilities": "Extender | Можливості",
      "title.cases": "Extender | Кейси",
      "title.contact": "Extender | Контакти",
      "title.careers": "Extender | Карʼєра",
      "title.documents": "Extender | Документи",
      "index.hero.stat.timelineValue": "2 дні - 6 тижнів",
      "index.cases.card1.results": "3 ринки запущено",
      "index.cases.card1.timeline": "6 місяців",
      "index.cases.card1.focus": "Комплаєнс + зростання",
      "index.cases.card2.results": "42% економії витрат",
      "index.cases.card2.timeline": "8 місяців",
      "index.cases.card2.focus": "Хмара + безпека",
      "index.cases.card3.results": "0 зауважень аудиту",
      "index.cases.card3.timeline": "4 місяці",
      "index.cases.card3.focus": "Аудит + юридичний блок",
      "contact.next.availabilityValue": "Глобальні команди",
      "cases.card1.duration": "6 місяців",
      "cases.card2.duration": "8 місяців",
      "cases.card3.duration": "4 місяці",
      "cases.card4.duration": "5 місяців",
      "cases.card5.duration": "3 місяці",
      "cases.card6.duration": "7 місяців",
      "capabilities.cta.eyebrow": "Почнемо",
      "capabilities.cta.title": "Потрібна команда компетенцій за 30 днів?",
      "capabilities.cta.subtitle":
        "Поділіться термінами, і ми підготуємо план доставки, узгоджений із цілями enterprise.",
      "documents.terms.eyebrow": "Умови",
      "documents.terms.title": "Умови обслуговування та майстер‑угода (MSA)",
      "documents.terms.meta": "Оновлено: 19 лютого 2026",
      "documents.terms.p1":
        "Ці Умови регулюють усі взаємодії між Extender та Клієнтом. Кожна взаємодія оформлюється через Statement of Work (SOW), де визначено обсяг, результати, терміни та комерційні умови. Якщо SOW суперечить цим Умовам, для відповідного обсягу діє SOW.",
      "documents.terms.scopeTitle": "Обсяг і доставка",
      "documents.terms.p2":
        "Extender надає виділені команди виконання, операційне лідерство та керовану доставку. Уся робота виконується відповідно до узгодженого управління, звітності та вимог комплаєнсу.",
      "documents.terms.li1": "Чітке визначення обсягу, постачання за віхами та погодження з клієнтом.",
      "documents.terms.li2": "Відповідність регуляторним вимогам для фінтеху, enterprise IT та gaming‑програм.",
      "documents.terms.li3": "Призначені лідери та контакти ескалації для кожного проєкту.",
      "documents.terms.ipTitle": "Комерційні умови та IP",
      "documents.terms.p3":
        "Вартість визначається у SOW і сплачується щомісяця або за віхами. Якщо не вказано інше, Клієнт набуває права на фінальні результати після повної оплати, а Extender зберігає права на попередні інструменти, шаблони та ноу‑хау.",
      "documents.terms.confTitle": "Конфіденційність та відповідальність",
      "documents.terms.p4":
        "Сторони погоджуються на взаємну конфіденційність. Відповідальність обмежена прямими збитками та сумою платежів за відповідним SOW, якщо інше не вимагається законом або не погоджено письмово.",
      "documents.terms.asideTitle": "Ключові положення",
      "documents.terms.aside1": "Модель роботи: MSA + SOW на кожну ініціативу.",
      "documents.terms.aside2": "Оплата: щомісяця після факту, якщо SOW не зазначає інше.",
      "documents.terms.aside3": "Права IP: клієнт володіє фінальними результатами.",
      "documents.terms.aside4": "Конфіденційність: взаємний NDA, строк дії 3 роки.",
      "documents.terms.aside5": "Розірвання: повідомлення за 30 днів без причини.",
      "documents.commercials.eyebrow": "Комерційні",
      "documents.commercials.title": "Комерційні умови та обсяг вартості",
      "documents.commercials.meta": "Оновлено: 20 лютого 2026",
      "documents.commercials.p1":
        "Extender виконує проєкти дистанційно. Вартість визначається у SOW і включає основний обсяг виконання, наведений нижче. Додаткові опції доступні за запитом і оплачуються окремо.",
      "documents.commercials.includedTitle": "Входить у вартість проєкту",
      "documents.commercials.included1": "Discovery, збір вимог і дорожня карта доставки.",
      "documents.commercials.included2": "Формування pod‑команди, лідерство та управління проєктом.",
      "documents.commercials.included3": "Виконання погоджених результатів за обраними компетенціями.",
      "documents.commercials.included4": "Контроль якості, комплаєнс‑чекпойнти та щотижнева звітність.",
      "documents.commercials.included5": "Документація, передача знань і сесії передачі.",
      "documents.commercials.included6": "Дистанційна комунікація, ритм зустрічей та оновлення стейкхолдерів.",
      "documents.commercials.addonsTitle": "Додаткові опції (окрема оплата)",
      "documents.commercials.addons1": "SLA покриття 24/7 або прискорені реакції.",
      "documents.commercials.addons2": "Стороннє ПЗ, ліцензії чи закупівля даних.",
      "documents.commercials.addons3": "Медіабюджети, рекламні витрати або комісії майданчиків.",
      "documents.commercials.addons4": "Розширена юридична/регуляторна робота поза узгодженим обсягом.",
      "documents.commercials.addons5": "Прискорені терміни або додатковий персонал.",
      "documents.commercials.p2":
        "Виїзна робота не надається. Якщо потрібна присутність на місці, можемо координувати її з вашими командами або схваленими партнерами.",
      "documents.commercials.asideTitle": "Огляд оплати",
      "documents.commercials.aside1": "Модель роботи: MSA + SOW на кожну ініціативу.",
      "documents.commercials.aside2": "Періодичність оплати: щомісяця або за віхами.",
      "documents.commercials.aside3": "Зміни: оцінюються та затверджуються письмово.",
      "documents.commercials.aside4": "Умови оплати: net 15/30, якщо не зазначено інше.",
      "documents.privacy.eyebrow": "Приватність",
      "documents.privacy.title": "Політика конфіденційності",
      "documents.privacy.meta": "Оновлено: 19 лютого 2026",
      "documents.privacy.p1":
        "Extender збирає бізнес‑контактні дані, комунікації та дані використання для надання послуг, відповіді на запити та покращення доставки. Ми не продаємо персональні дані і передаємо їх лише погодженим субпроцесорам за договором.",
      "documents.privacy.dataTitle": "Дані, які ми збираємо",
      "documents.privacy.data1": "Контактні дані: ім’я, компанія, роль, email і телефон.",
      "documents.privacy.data2": "Дані проєкту: деталі обсягу, терміни та комунікації.",
      "documents.privacy.data3": "Дані використання: аналітичні події та метадані пристроїв.",
      "documents.privacy.rightsTitle": "Ваші права",
      "documents.privacy.p2":
        "Клієнти можуть запросити доступ, виправлення, видалення або експорт персональних даних. Запити обробляються протягом 30 днів після підтвердження та з урахуванням юридичних вимог.",
      "documents.privacy.asideTitle": "Підсумок обробки",
      "documents.privacy.aside1": "Мета: надання послуг, безпека та підтримка.",
      "documents.privacy.aside2": "Правова підстава: виконання договору та законні інтереси.",
      "documents.privacy.aside3": "Зберігання: строк договору + 24 місяці.",
      "documents.privacy.aside4": "Контакт: hello@extender.cards.",
      "documents.dpa.eyebrow": "Обробка даних",
      "documents.dpa.title": "Угода про обробку даних (DPA)",
      "documents.dpa.meta": "Оновлено: 19 лютого 2026",
      "documents.dpa.p1":
        "DPA регулює обробку персональних даних Extender від імені Клієнта. Extender виступає процесором і дотримується документованих інструкцій Клієнта, включно з вимогами щодо трансграничної передачі.",
      "documents.dpa.securityTitle": "Заходи безпеки",
      "documents.dpa.security1": "Рольовий доступ і принцип мінімальних привілеїв.",
      "documents.dpa.security2": "Шифрування під час передачі та зберігання, де це можливо.",
      "documents.dpa.security3": "Безперервний моніторинг і управління вразливостями.",
      "documents.dpa.subTitle": "Субпроцесори та передачі",
      "documents.dpa.p2":
        "Extender веде список схвалених субпроцесорів і повідомляє Клієнта про суттєві зміни. Трансграничні передачі здійснюються із договірними гарантіями (наприклад, SCC), де застосовно.",
      "documents.dpa.asideTitle": "Ключові положення DPA",
      "documents.dpa.aside1": "Контролер: Клієнт. Процесор: Extender.",
      "documents.dpa.aside2": "Аудит: щорічний огляд безпеки за запитом.",
      "documents.dpa.aside3": "Видалення: через 30 днів після завершення робіт.",
      "documents.dpa.aside4": "Повідомлення про інцидент: протягом 72 годин після підтвердження.",
      "documents.security.eyebrow": "Безпека",
      "documents.security.title": "Огляд безпеки та комплаєнсу",
      "documents.security.meta": "Оновлено: 19 лютого 2026",
      "documents.security.p1":
        "Extender веде програму безпеки, узгоджену з визнаними контрольними фреймворками. Управління, доступ і контроль доставки визначаються для кожної взаємодії та переглядаються щоквартально.",
      "documents.security.controlsTitle": "Ключові контролі",
      "documents.security.controls1": "Управління ідентичністю та доступом із обов’язковим MFA.",
      "documents.security.controls2": "Безпечний SDLC, затвердження змін і аудит‑логи.",
      "documents.security.controls3": "Оцінка ризиків постачальників і перевірки безпеки.",
      "documents.security.irTitle": "Реагування на інциденти",
      "documents.security.p2":
        "Виділений лідер з реагування координує локалізацію, повідомлення клієнтів і постінцидентне усунення з фіксованими термінами.",
      "documents.security.asideTitle": "Пакет безпеки",
      "documents.security.aside1": "Оглядова презентація безпеки для закупівель.",
      "documents.security.aside2": "Стандартизований опитувальник оцінки ризиків.",
      "documents.security.aside3": "Плейбуки з пентестів та реакції на вразливості.",
      "documents.sla.eyebrow": "Рівні сервісу",
      "documents.sla.title": "Угода про рівень сервісу (SLA)",
      "documents.sla.meta": "Оновлено: 19 лютого 2026",
      "documents.sla.p1":
        "SLA визначає цілі доступності, реагування та усунення для керованих сервісів. Рівні сервісу налаштовуються за SOW і застосовуються до продакшн‑систем під управлінням Extender.",
      "documents.sla.availabilityTitle": "Цілі доступності",
      "documents.sla.availability1": "99,5% цільовий аптайм на місяць для керованих продакшн‑навантажень.",
      "documents.sla.availability2": "Вікна обслуговування оголошуються щонайменше за 72 години.",
      "documents.sla.availability3": "Сервісні кредити застосовуються у разі невиконання цілей.",
      "documents.sla.supportTitle": "Рівні підтримки",
      "documents.sla.p2":
        "Підтримка охоплює стандартні робочі години з ескалацією 24/7 для критичних інцидентів. Час реакції залежить від критичності та бізнес‑впливу.",
      "documents.sla.asideTitle": "Цілі реагування",
      "documents.sla.aside1": "Severity 1: реакція 1 година, усунення 4 години.",
      "documents.sla.aside2": "Severity 2: реакція 4 години, усунення 24 години.",
      "documents.sla.aside3": "Severity 3: реакція 1 робочий день.",
      "documents.sla.aside4": "Severity 4: реакція 3 робочі дні.",
      "documents.aup.eyebrow": "Допустиме використання",
      "documents.aup.title": "Політика допустимого використання (AUP)",
      "documents.aup.meta": "Оновлено: 19 лютого 2026",
      "documents.aup.p1":
        "Сервіси Extender мають використовуватися законно та відповідно до регуляторних вимог кожної юрисдикції. Клієнти відповідають за наявність необхідних ліцензій для регульованих видів діяльності.",
      "documents.aup.prohibitedTitle": "Заборонене використання",
      "documents.aup.prohibited1": "Несанкціонований доступ, зловживання обліковими даними або скрейпінг даних.",
      "documents.aup.prohibited2": "Поширення шкідливого ПЗ або злонаміреної автоматизації.",
      "documents.aup.prohibited3": "Неліцензована чи незаконна ігрова, фінансова або крипто‑діяльність.",
      "documents.aup.prohibited4": "Порушення санкцій, антикорупційних або AML‑зобов’язань.",
      "documents.aup.asideTitle": "Обов’язки клієнта",
      "documents.aup.aside1": "Підтримувати актуальну комплаєнс‑документацію.",
      "documents.aup.aside2": "Повідомляти Extender про регуляторні зміни.",
      "documents.aup.aside3": "Забезпечувати законність сторонніх джерел даних.",
      "documents.cookies.eyebrow": "Cookies",
      "documents.cookies.title": "Cookie‑політика",
      "documents.cookies.meta": "Оновлено: 19 лютого 2026",
      "documents.cookies.p1":
        "Extender використовує cookies та подібні технології для стабільної роботи сайту, вимірювання залученості та покращення досвіду. Керувати cookies можна в налаштуваннях браузера.",
      "documents.cookies.categoriesTitle": "Категорії cookies",
      "documents.cookies.categories1": "Необхідні cookies для роботи сайту.",
      "documents.cookies.categories2": "Аналітичні cookies для розуміння використання сайту.",
      "documents.cookies.categories3": "Cookies уподобань, що запам’ятовують налаштування користувача.",
      "documents.cookies.optTitle": "Відмова",
      "documents.cookies.p2":
        "Ви можете вимкнути cookies у браузері. Деякі функції можуть бути обмежені при блокуванні необхідних cookies.",
      "documents.cookies.asideTitle": "Аналітика",
      "documents.cookies.aside1": "Google Analytics 4 для агрегованих метрик.",
      "documents.cookies.aside2": "Ми не продаємо персональні дані і не використовуємо крос‑сайт трекінг.",
      "documents.cooperation.eyebrow": "Співпраця",
      "documents.cooperation.title": "Умови співпраці та партнерства",
      "documents.cooperation.meta": "Оновлено: 19 лютого 2026",
      "documents.cooperation.p1":
        "Extender співпрацює з агенціями, консалтингом та enterprise‑командами для реалізації складних програм. Умови співпраці узгоджують відповідальність, звітність і управління.",
      "documents.cooperation.modelTitle": "Модель взаємодії",
      "documents.cooperation.model1": "Один відповідальний лідер доставки на програму.",
      "documents.cooperation.model2": "Спільний операційний ритм з щотижневими апдейтами керівництву.",
      "documents.cooperation.model3": "Спільний реєстр ризиків та комплаєнс‑чекпойнти.",
      "documents.cooperation.govTitle": "Комерційне управління",
      "documents.cooperation.p2":
        "Комерційні схеми включають revenue share, фіксовану оплату доставки або гібридні моделі. Усі умови фіксуються в окремому Partner SOW.",
      "documents.cooperation.asideTitle": "Онбординг партнера",
      "documents.cooperation.aside1": "Взаємний NDA та вимоги щодо обробки даних.",
      "documents.cooperation.aside2": "Чек‑лист перевірки безпеки та комплаєнсу.",
      "documents.cooperation.aside3": "Погодження бренду та комунікацій.",
      "documents.faq.eyebrow": "FAQ",
      "documents.faq.title": "Часті питання щодо закупівель.",
      "documents.faq.subtitle":
        "Якщо потрібен підписаний або кастомний пакет документів, напишіть на hello@extender.cards — відповімо протягом одного робочого дня.",
      "documents.faq.q1": "Ви надаєте повний шаблон MSA та SOW?",
      "documents.faq.a1":
        "Так. Ми надаємо майстер‑угоду з шаблоном SOW, який можна адаптувати під вимоги закупівель і місцеву юрисдикцію.",
      "documents.faq.q2": "Чи можете ви підтримувати регульовану фінтех або gaming‑доставку?",
      "documents.faq.a2":
        "Ми вбудовуємо комплаєнс‑ та аудит‑чекпойнти у кожну взаємодію. Команди доставки відповідають регуляторним вимогам і ліцензійним зобов’язанням.",
      "documents.faq.q3": "Чи підписуєте ви NDA до discovery?",
      "documents.faq.a3":
        "Так. Ми можемо підписати взаємний або односторонній NDA до воркшопів із пропозиції чи технічних обговорень.",
      "documents.faq.q4": "Як ви працюєте із субпідрядниками?",
      "documents.faq.a4":
        "Усі субпідрядники проходять перевірку, укладають договір і дотримуються тих самих вимог конфіденційності та безпеки. Списки субпроцесорів надаються на запит.",
      "documents.faq.q5": "Які підтвердження безпеки ви надаєте?",
      "documents.faq.a5":
        "Ми надаємо огляд безпеки, відповіді на опитувальники ризиків та документацію з реагування на інциденти. Додаткові матеріали доступні під NDA.",
      "documents.faq.q6": "Чи підтримуєте вимоги щодо резидентності даних?",
      "documents.faq.a6":
        "Так. Ми можемо спроєктувати доставку під вимоги резидентності даних і задокументувати всі трансграничні передачі.",
      "documents.faq.q7": "Які типові умови контрактів?",
      "documents.faq.a7":
        "Більшість проєктів стартують із SOW на 3-6 місяців і переходять у довгострокову підтримку. Умови гнучкі та адаптовані під політики закупівель.",
      "documents.faq.q8": "Як швидко ви підготуєте кастомний пакет документів?",
      "documents.faq.a8":
        "Стандартний пакет надаємо протягом 48 годин. Кастомні правки — протягом 3-5 робочих днів.",
      "form.company": "Назва компанії",
      "form.companyPlaceholder": "Extender Inc.",
      "form.email": "Email",
      "form.emailPlaceholder": "name@company.com",
      "form.phone": "Телефон",
      "form.phonePlaceholder": "+38 (___) ___‑__‑__",
      "form.budget": "Бюджет",
      "form.budgetPlaceholder": "Оберіть діапазон",
      "form.timeline": "Терміни",
      "form.timelinePlaceholder": "Запуск у Q2",
      "form.description": "Опис проєкту",
      "form.descriptionPlaceholder": "Розкажіть про цілі, обсяг і поточні виклики.",
      "form.submit": "Надіслати",
      "form.fullName": "Повне ім’я",
      "form.fullNamePlaceholder": "Jane Doe",
      "form.sending": "Надсилання...",
      "form.error.required": "Заповніть усі обов’язкові поля.",
      "form.error.email": "Вкажіть коректну email‑адресу.",
      "form.error.phone": "Вкажіть коректний номер телефону.",
      "form.error.url": "Вкажіть коректний URL.",
      "form.error.submit":
        "Надсилання не вдалося. Спробуйте ще раз або напишіть на hello@extender.cards.",
      "form.success.contact": "Дякуємо за звернення. Ми відповімо протягом одного робочого дня.",
      "form.success.careers": "Дякуємо за заявку. Ми відповімо протягом п’яти робочих днів.",
      "careers.hero.eyebrow": "Карʼєра",
      "careers.hero.title": "Приєднуйтесь до команд, що виконують складні програми.",
      "careers.hero.subtitle":
        "Extender формує команди виконання для критичних галузей. Ми шукаємо досвідчених лідерів доставки.",
      "careers.form.role": "Цікавить роль",
      "careers.form.rolePlaceholder": "Оберіть роль",
      "careers.form.roleLead": "Лідогенерація / аутрич",
      "careers.form.roleMarketing": "Маркетинг / SMM / контент",
      "careers.form.roleDesign": "Дизайн / лендинги / креатив",
      "careers.form.roleAutomation": "IT / автоматизація / боти",
      "careers.form.roleAudit": "Аудит (фінанси / маркетинг / IT)",
      "careers.form.roleSecurity": "Безпека (кібер / дані / ризики)",
      "careers.form.roleCloud": "Хмарні сервіси / інфраструктура",
      "careers.form.roleBlockchain": "Блокчейн / крипто‑дью діллідженс",
      "careers.form.roleLegal": "Юридичний блок / комплаєнс",
      "careers.form.roleOther": "Інше",
      "careers.form.experience": "Рівень досвіду",
      "careers.form.experiencePlaceholder": "Оберіть рівень",
      "careers.form.experience1": "1-3 роки",
      "careers.form.experience2": "3-5 років",
      "careers.form.experience3": "5-8 років",
      "careers.form.experience4": "8+ років",
      "careers.form.location": "Локація / часовий пояс",
      "careers.form.locationPlaceholder": "Berlin (CET)",
      "careers.form.linkedin": "LinkedIn або портфоліо",
      "careers.form.linkedinPlaceholder": "https://linkedin.com/in/username",
      "careers.form.resume": "Посилання на резюме",
      "careers.form.resumePlaceholder": "https://drive.google.com/...",
      "careers.form.message": "Чому Extender?",
      "careers.form.messagePlaceholder":
        "Розкажіть про досвід, бажані індустрії та доступність.",
      "careers.form.submit": "Надіслати заявку",
      "careers.side.title": "Що ми шукаємо",
      "careers.side.text":
        "Ми співпрацюємо з досвідченими операторами, які розуміють регульовані середовища.",
      "careers.side.point1": "Досвід у фінтех, enterprise IT або gaming.",
      "careers.side.point2": "Комфорт зі структурною звітністю та KPI.",
      "careers.side.point3": "Вміння працювати в крос‑функціональних розподілених командах.",
      "careers.side.meta": "Середній цикл розгляду: 5 робочих днів."
    },
    zh: {
      "nav.home": "首页",
      "nav.capabilities": "能力",
      "nav.cases": "案例",
      "nav.documents": "文档",
      "nav.careers": "招聘",
      "nav.contact": "联系",
      "nav.toggle": "打开菜单",
      "cta.request": "请求方案",
      "cta.capabilities": "查看能力",
      "cta.viewCase": "查看案例 →",
      "footer.tagline": "面向受监管与高风险项目的专属执行团队。",
      "footer.linkedin": "LinkedIn：Extender",
      "footer.rights": "© 2026 Extender. 保留所有权利。",
      "tag.fintech": "金融科技",
      "tag.enterpriseIT": "企业IT",
      "tag.gambling": "博彩/体育投注",
      "tag.cloud": "云",
      "tag.compliance": "合规",
      "tag.legal": "法务",
      "tag.audit": "审计",
      "tag.automation": "自动化",
      "tag.legalOps": "法务运营",
      "tag.web3": "Web3",
      "case.results": "结果：",
      "case.budget": "预算：",
      "case.timeline": "周期：",
      "case.focus": "重点：",
      "case.tech": "技术栈：",
      "case.duration": "时长：",
      "index.hero.eyebrow": "Extender 执行团队",
      "index.hero.title": "面向高复杂度与高风险项目的专属执行团队。",
      "index.hero.subtitle":
        "Extender 设计并运营跨职能团队，推动受监管增长、企业 IT 现代化与关键合规交付。",
      "index.hero.stat.turnaround": "方案响应",
      "index.hero.stat.roles": "团队角色",
      "index.hero.stat.timeline": "从启动到交付",
      "index.hero.stat.sla": "SLA 达成率",
      "index.hero.metric.coverage": "全球覆盖",
      "index.hero.metric.throughput": "吞吐提升",
      "index.services.eyebrow": "服务",
      "index.services.title": "为企业速度而打造的可扩展执行团队。",
      "index.services.subtitle": "将战略、交付与治理整合为一体化的执行模型。",
      "index.services.lead.title": "线索挖掘 / 外联",
      "index.services.lead.text": "搭建外呼系统、电话流程和 SDR 手册，持续生成合格线索。",
      "index.services.marketing.title": "营销 / SMM / 内容",
      "index.services.marketing.text": "持续内容运营、社媒分发与付费投放绩效报告。",
      "index.services.design.title": "设计 / 落地页 / 创意",
      "index.services.design.text": "以转化为导向的落地页、品牌系统与创意制作。",
      "index.services.automation.title": "IT / 自动化 / 机器人",
      "index.services.automation.text": "流程自动化、内部工具、机器人与系统集成。",
      "index.services.audit.title": "审计（财务 / 营销 / IT）",
      "index.services.audit.text": "独立审计，识别控制缺口、成本泄漏与优化重点。",
      "index.services.security.title": "安全（网络 / 数据 / 风险）",
      "index.services.security.text": "安全评估、数据保护计划与风险缓解方案。",
      "index.services.cloud.title": "云服务 / 存储 / 基础设施",
      "index.services.cloud.text": "云迁移、存储策略与可靠的基础设施运维。",
      "index.services.blockchain.title": "区块链 / 加密尽调",
      "index.services.blockchain.text": "对加密项目和初创公司的技术、法律与财务进行尽调。",
      "index.services.legal.title": "法务与合规",
      "index.services.legal.text": "合同治理、政策架构与跨地区监管合规。",
      "index.how.eyebrow": "工作方式",
      "index.how.title": "从第一天开始的精确运营模型。",
      "index.how.subtitle": "与管理层、法务和技术团队协同，交付可衡量成果。",
      "index.how.step1.title": "组建团队",
      "index.how.step1.text": "明确范围、组建团队，并在两周内完成治理对齐。",
      "index.how.step2.title": "执行",
      "index.how.step2.text": "敏捷工作流，透明汇报与质量关卡。",
      "index.how.step3.title": "扩展",
      "index.how.step3.text": "按需扩容，同时保持责任边界与领导力。",
      "index.arch.eyebrow": "团队架构",
      "index.arch.title": "结构化领导与智能扩展。",
      "index.arch.subtitle": "清晰的层级架构，统一战略、交付与执行。",
      "index.arch.lead": "战略负责人",
      "index.arch.block1": "模块负责人 1",
      "index.arch.block2": "模块负责人 2",
      "index.arch.block3": "模块负责人 3",
      "index.arch.block4": "模块负责人 4",
      "index.arch.block5": "模块负责人 5",
      "index.arch.core": "核心团队",
      "index.arch.reserve": "备选人才网络",
      "index.cases.eyebrow": "案例",
      "index.cases.title": "受监管行业的执行案例。",
      "index.cases.subtitle": "展示 Extender 团队在金融科技、企业 IT 与博彩领域的成果。",
      "index.cases.card1.title": "金融科技全球扩张",
      "index.cases.card1.text": "搭建合规与增长团队，支持跨区域扩张。",
      "index.cases.card2.title": "企业云现代化",
      "index.cases.card2.text": "将遗留基础设施迁移到安全的多区域云环境。",
      "index.cases.card3.title": "合规就绪的博彩平台",
      "index.cases.card3.text": "建立投注运营团队，严格审计与法务覆盖。",
      "index.cta.eyebrow": "携手打造",
      "index.cta.title": "准备扩大下一个项目规模？",
      "index.cta.subtitle": "告诉我们范围，我们将在 48 小时内提出专属执行团队方案。",
      "contact.hero.eyebrow": "联系",
      "contact.hero.title": "向 Extender 请求方案。",
      "contact.hero.subtitle": "说明需求，我们将为金融科技、企业 IT 或博彩项目组建团队。",
      "contact.next.title": "接下来会发生什么？",
      "contact.next.text": "我们将评估需求，安排沟通，并在 48 小时内提供方案。",
      "contact.next.email": "邮箱：",
      "contact.next.linkedin": "LinkedIn：",
      "contact.next.availability": "可用性：",
      "cases.hero.eyebrow": "案例",
      "cases.hero.title": "企业级项目执行成果。",
      "cases.hero.subtitle": "我们构建专属团队，在企业规模下快速将战略落地。",
      "cases.card1.title": "金融科技全球扩张",
      "cases.card1.text": "部署多区域合规与增长团队，支持受监管市场启动。",
      "cases.card2.title": "企业云现代化",
      "cases.card2.text": "将遗留系统迁移至稳定的云架构，实现 24/7 运维。",
      "cases.card3.title": "合规就绪的博彩平台",
      "cases.card3.text": "打造合规运营流程与法务框架。",
      "cases.card4.title": "企业招投标支持计划",
      "cases.card4.text": "为全球招投标响应提供法务与运营支持。",
      "cases.card5.title": "财务流程自动化",
      "cases.card5.text": "将月结周期从 10 天缩短至 4 天。",
      "cases.card6.title": "区块链结算网络",
      "cases.card6.text": "构建安全结算层与治理模型，支持企业伙伴。",
      "cases.cta.eyebrow": "与我们合作",
      "cases.cta.title": "让我们打造你的下一个案例。",
      "cases.cta.subtitle": "告诉我们需要的执行支持，我们将匹配合适团队。",
      "capabilities.hero.eyebrow": "能力",
      "capabilities.hero.title": "面向受监管增长与复杂交付的执行团队。",
      "capabilities.hero.subtitle": "Extender 组建融合战略、执行与治理的专属团队。",
      "capabilities.lead.title": "线索挖掘 / 外联",
      "capabilities.lead.p1":
        "构建完整的 outbound 引擎：ICP、数据获取与清洗、多渠道序列、合规外呼与 CRM 规范。",
      "capabilities.lead.p2": "团队包含增长策略、SDR 负责人、QA 负责人和培训支持。",
      "capabilities.lead.b1": "ICP 研究、名单构建、数据丰富与分层。",
      "capabilities.lead.b2": "邮件、电话与 LinkedIn 外联脚本与序列。",
      "capabilities.lead.b3": "线索评分、交接 SLA 与 CRM 自动化。",
      "capabilities.lead.b4": "QA 复盘、转化分析与报告。",
      "capabilities.lead.meta": "交付物：ICP 文档、序列库、脚本、KPI 仪表盘、QA 评分。",
      "capabilities.marketing.title": "营销 / SMM / 内容",
      "capabilities.marketing.p1":
        "全漏斗营销运营：定位、内容日历、SMM 与付费媒体执行。",
      "capabilities.marketing.p2": "结合创意策略、渠道管理与数据分析提升效果。",
      "capabilities.marketing.b1": "内容策略、编辑日历与渠道计划。",
      "capabilities.marketing.b2": "SMM 管理、社区运营与社媒报告。",
      "capabilities.marketing.b3": "绩效投放与 KPI 驱动优化。",
      "capabilities.marketing.b4": "生命周期消息与留存运营。",
      "capabilities.marketing.meta": "交付物：内容日历、渠道计划、创意资产、KPI 报告。",
      "capabilities.design.title": "设计 / 落地页 / 创意",
      "capabilities.design.p1": "以转化为导向的设计系统、落地页与创意制作。",
      "capabilities.design.p2": "团队包含 UX/UI、品牌、动效与文案。",
      "capabilities.design.b1": "UX 研究、线框与快速原型。",
      "capabilities.design.b2": "转化优化的落地页与微站。",
      "capabilities.design.b3": "品牌系统、UI 组件与设计规范。",
      "capabilities.design.b4": "活动创意、动效与资产制作。",
      "capabilities.design.meta": "交付物：UI 组件库、落地页、创意库、交互原型。",
      "capabilities.automation.title": "IT / 自动化 / 机器人",
      "capabilities.automation.p1": "打造内部工具、机器人与系统集成，减少运营摩擦。",
      "capabilities.automation.p2": "加速交付，同时保持安全与治理标准。",
      "capabilities.automation.b1": "API 集成、数据同步与 ETL 流水线。",
      "capabilities.automation.b2": "RPA 与机器人开发。",
      "capabilities.automation.b3": "内部工具、仪表盘与流程编排。",
      "capabilities.automation.b4": "监控、运行手册与文档。",
      "capabilities.automation.meta": "交付物：自动化流程、机器人脚本、集成文档、runbook。",
      "capabilities.audit.title": "审计（财务 / 营销 / IT）",
      "capabilities.audit.p1": "独立审计财务、营销支出与 IT 架构，输出整改计划。",
      "capabilities.audit.p2": "提供管理层级别的风险报告与优先级。",
      "capabilities.audit.b1": "财务控制与成本泄漏分析。",
      "capabilities.audit.b2": "营销 ROI、渠道效率与归因审查。",
      "capabilities.audit.b3": "IT 架构、云成本与供应商风险评估。",
      "capabilities.audit.b4": "合规差距分析与整改规划。",
      "capabilities.audit.meta": "交付物：审计报告、风险矩阵、整改路线图。",
      "capabilities.security.title": "安全（网络 / 数据 / 风险）",
      "capabilities.security.p1": "对齐 SOC 2、ISO 等标准的安全评估与数据保护方案。",
      "capabilities.security.p2": "包含威胁建模、治理设计与事件响应计划。",
      "capabilities.security.b1": "安全架构审查与威胁建模。",
      "capabilities.security.b2": "IAM、数据保护与加密政策。",
      "capabilities.security.b3": "SOC 2、ISO 审计准备。",
      "capabilities.security.b4": "事件响应演练与桌面推演。",
      "capabilities.security.meta": "交付物：安全评估、控制地图、IR 预案。",
      "capabilities.cloud.title": "云服务 / 存储 / 基础设施",
      "capabilities.cloud.p1": "云迁移、存储策略与基础设施运维，兼顾成本治理。",
      "capabilities.cloud.p2": "团队包含云架构师、DevOps/SRE 与安全专家。",
      "capabilities.cloud.b1": "云架构、迁移规划与执行。",
      "capabilities.cloud.b2": "基础设施即代码、CI/CD 与自动化。",
      "capabilities.cloud.b3": "监控、SRE 覆盖与灾备。",
      "capabilities.cloud.b4": "FinOps 成本优化与容量规划。",
      "capabilities.cloud.meta": "交付物：云蓝图、IaC 模块、runbook、FinOps 方案。",
      "capabilities.blockchain.title": "区块链 / 加密尽调",
      "capabilities.blockchain.p1": "为区块链项目与加密初创提供技术与法律尽调。",
      "capabilities.blockchain.p2": "适用于投资人、企业合作伙伴及受监管运营方。",
      "capabilities.blockchain.b1": "智能合约审查与安全检查。",
      "capabilities.blockchain.b2": "Tokenomics、资金与治理验证。",
      "capabilities.blockchain.b3": "监管合规、KYC/AML 与风险评分。",
      "capabilities.blockchain.b4": "商业模式与市场验证。",
      "capabilities.blockchain.meta": "交付物：尽调报告、风险评级、go/no‑go 备忘。",
      "capabilities.legal.title": "法务与合规",
      "capabilities.legal.p1": "企业交付法务：合同、采购流程、监管就绪与政策管理。",
      "capabilities.legal.p2": "支持金融科技与博彩等受监管市场。",
      "capabilities.legal.b1": "MSA/SOW 拟定、采购支持与条款修订。",
      "capabilities.legal.b2": "监管映射、许可与合规检查。",
      "capabilities.legal.b3": "政策体系与内部培训。",
      "capabilities.legal.b4": "供应商尽调与跨境支持。",
      "capabilities.legal.meta": "交付物：合同包、合规清单、法务 SOP。",
      "documents.hero.eyebrow": "治理",
      "documents.hero.title": "法律、合规与合作文档。",
      "documents.hero.subtitle": "为采购、受监管交付和合作准备的文档包。",
      "documents.hero.note": "这些文档为专业模板，供法务与合规团队审阅。",
      "documents.toc.terms": "条款",
      "documents.toc.commercials": "商务",
      "documents.toc.privacy": "隐私",
      "documents.toc.dpa": "DPA",
      "documents.toc.security": "安全",
      "documents.toc.sla": "SLA",
      "documents.toc.aup": "可接受使用",
      "documents.toc.cookies": "Cookies",
      "documents.toc.cooperation": "合作",
      "documents.toc.faq": "FAQ",
      "documents.library.eyebrow": "文档库",
      "documents.library.title": "完整专业文档包。",
      "documents.library.subtitle": "下列每份文档可单独提供给采购、法务与安全审查。",
      "documents.card.view": "查看文档",
      "documents.card.terms.title": "服务条款",
      "documents.card.terms.text": "范围、付款、知识产权与责任。",
      "documents.card.commercials.title": "商务条款",
      "documents.card.commercials.text": "项目费用包含项与附加项。",
      "documents.card.privacy.title": "隐私政策",
      "documents.card.privacy.text": "数据收集、使用、保留与权利。",
      "documents.card.dpa.title": "数据处理附录",
      "documents.card.dpa.text": "处理方义务与跨境保障。",
      "documents.card.security.title": "安全与合规",
      "documents.card.security.text": "控制框架、审计与事件响应。",
      "documents.card.sla.title": "服务级别协议",
      "documents.card.sla.text": "可用性目标、支持等级与升级机制。",
      "documents.card.aup.title": "可接受使用政策",
      "documents.card.aup.text": "受监管项目的使用限制。",
      "documents.card.cookies.title": "Cookie 政策",
      "documents.card.cookies.text": "分析、偏好与 Cookie 控制。",
      "documents.card.cooperation.title": "合作与伙伴关系",
      "documents.card.cooperation.text": "合作模式、治理与 onboarding。",
      "documents.card.faq.title": "FAQ",
      "documents.card.faq.text": "采购与交付常见问题。",
      "nav.skip": "跳到主要内容",
      "title.index": "Extender | 专业执行团队",
      "title.capabilities": "Extender | 能力",
      "title.cases": "Extender | 案例",
      "title.contact": "Extender | 联系方式",
      "title.careers": "Extender | 招聘",
      "title.documents": "Extender | 文档",
      "index.hero.stat.timelineValue": "2天 - 6周",
      "index.cases.card1.results": "3个市场上线",
      "index.cases.card1.timeline": "6个月",
      "index.cases.card1.focus": "合规 + 增长",
      "index.cases.card2.results": "节省成本 42%",
      "index.cases.card2.timeline": "8个月",
      "index.cases.card2.focus": "云 + 安全",
      "index.cases.card3.results": "0 项审计发现",
      "index.cases.card3.timeline": "4个月",
      "index.cases.card3.focus": "审计 + 法务",
      "contact.next.availabilityValue": "全球团队",
      "cases.card1.duration": "6个月",
      "cases.card2.duration": "8个月",
      "cases.card3.duration": "4个月",
      "cases.card4.duration": "5个月",
      "cases.card5.duration": "3个月",
      "cases.card6.duration": "7个月",
      "capabilities.cta.eyebrow": "开始",
      "capabilities.cta.title": "30天内需要能力团队吗？",
      "capabilities.cta.subtitle": "分享你的时间线，我们将提供与企业目标对齐的交付计划。",
      "documents.terms.eyebrow": "条款",
      "documents.terms.title": "服务条款与主服务协议",
      "documents.terms.meta": "更新于：2026年2月19日",
      "documents.terms.p1":
        "本条款适用于 Extender 与客户之间的所有合作。每个合作通过工作说明书（SOW）定义范围、交付物、周期与商业条款。如 SOW 与本条款冲突，以该 SOW 为准。",
      "documents.terms.scopeTitle": "范围与交付",
      "documents.terms.p2":
        "Extender 提供专属执行团队、运营领导和托管式交付。所有工作在约定的治理、报告与合规要求下进行。",
      "documents.terms.li1": "明确范围定义、按里程碑交付并获得客户验收。",
      "documents.terms.li2": "满足金融科技、企业 IT 与博彩项目的监管要求。",
      "documents.terms.li3": "每个项目设定负责人和升级联系人。",
      "documents.terms.ipTitle": "商务与知识产权",
      "documents.terms.p3":
        "费用在 SOW 中约定，按月或按里程碑计费。除非另有说明，客户在全额付款后拥有最终交付物，Extender 保留既有工具、模板与专有知识的权利。",
      "documents.terms.confTitle": "保密与责任",
      "documents.terms.p4":
        "双方同意相互保密。责任限于直接损失，并以适用 SOW 下已支付费用为上限，除非法律要求或另有书面约定。",
      "documents.terms.asideTitle": "关键条款",
      "documents.terms.aside1": "合作模式：MSA + 每项计划的 SOW。",
      "documents.terms.aside2": "计费：除 SOW 另行规定外按月后付。",
      "documents.terms.aside3": "知识产权：客户拥有最终交付物。",
      "documents.terms.aside4": "保密：互签 NDA，存续期 3 年。",
      "documents.terms.aside5": "终止：提前 30 天通知即可终止。",
      "documents.commercials.eyebrow": "商务",
      "documents.commercials.title": "商务条款与计费范围",
      "documents.commercials.meta": "更新于：2026年2月20日",
      "documents.commercials.p1":
        "Extender 远程交付项目。价格在 SOW 中定义，包含下列核心执行范围。可选增值项按需提供并单独计费。",
      "documents.commercials.includedTitle": "项目费用包含",
      "documents.commercials.included1": "发现阶段、需求收集与交付路线图。",
      "documents.commercials.included2": "专属 pod 配置、领导与项目管理。",
      "documents.commercials.included3": "按选定能力交付约定成果。",
      "documents.commercials.included4": "质量保证、合规检查点与周度报告。",
      "documents.commercials.included5": "文档、知识移交与交接会议。",
      "documents.commercials.included6": "远程协作、会议节奏与干系人更新。",
      "documents.commercials.addonsTitle": "可选增值（单独计费）",
      "documents.commercials.addons1": "7×24 SLA 覆盖或加速响应。",
      "documents.commercials.addons2": "第三方软件、许可或数据采购。",
      "documents.commercials.addons3": "投放预算、广告费用或平台手续费。",
      "documents.commercials.addons4": "超出范围的法律/监管工作。",
      "documents.commercials.addons5": "加急周期或额外人员需求。",
      "documents.commercials.p2": "不提供现场工作。如需现场支持，可与贵司团队或授权合作伙伴协调。",
      "documents.commercials.asideTitle": "计费概览",
      "documents.commercials.aside1": "合作模式：MSA + 每项计划的 SOW。",
      "documents.commercials.aside2": "计费节奏：按月或按里程碑。",
      "documents.commercials.aside3": "变更请求：范围确认并书面批准。",
      "documents.commercials.aside4": "付款条款：未注明则为 net 15/30。",
      "documents.privacy.eyebrow": "隐私",
      "documents.privacy.title": "隐私政策",
      "documents.privacy.meta": "更新于：2026年2月19日",
      "documents.privacy.p1":
        "Extender 收集商务联系信息、沟通记录和使用数据，用于提供服务、回应请求并改进交付。我们不出售个人数据，仅在合同约束下向批准的子处理方共享。",
      "documents.privacy.dataTitle": "我们收集的数据",
      "documents.privacy.data1": "联系数据：姓名、公司、职位、邮箱与电话。",
      "documents.privacy.data2": "项目数据：范围细节、时间线与沟通记录。",
      "documents.privacy.data3": "使用数据：分析事件与设备元数据。",
      "documents.privacy.rightsTitle": "你的权利",
      "documents.privacy.p2":
        "客户可请求访问、更正、删除或导出个人数据。经核验后 30 天内处理，并遵循法律义务。",
      "documents.privacy.asideTitle": "处理概要",
      "documents.privacy.aside1": "目的：服务交付、安全与支持。",
      "documents.privacy.aside2": "法律依据：合同履行与合法利益。",
      "documents.privacy.aside3": "保留期限：合同期 + 24 个月。",
      "documents.privacy.aside4": "联系：hello@extender.cards。",
      "documents.dpa.eyebrow": "数据处理",
      "documents.dpa.title": "数据处理附录（DPA）",
      "documents.dpa.meta": "更新于：2026年2月19日",
      "documents.dpa.p1":
        "DPA 规范 Extender 代表客户处理个人数据的方式。Extender 作为处理方，遵循客户的书面指令，包括跨境传输要求。",
      "documents.dpa.securityTitle": "安全措施",
      "documents.dpa.security1": "基于角色的访问控制与最小权限。",
      "documents.dpa.security2": "传输与静态加密（如适用）。",
      "documents.dpa.security3": "持续监控与漏洞管理。",
      "documents.dpa.subTitle": "子处理方与传输",
      "documents.dpa.p2":
        "Extender 维护经批准的子处理方清单，并在重大变更时通知客户。跨境传输遵循合同保障（如适用的 SCC）。",
      "documents.dpa.asideTitle": "DPA 要点",
      "documents.dpa.aside1": "控制方：客户。处理方：Extender。",
      "documents.dpa.aside2": "审计权：按请求提供年度安全评审。",
      "documents.dpa.aside3": "删除：合作结束后 30 天内。",
      "documents.dpa.aside4": "泄露通知：确认后 72 小时内。",
      "documents.security.eyebrow": "安全",
      "documents.security.title": "安全与合规概览",
      "documents.security.meta": "更新于：2026年2月19日",
      "documents.security.p1":
        "Extender 运行与业界控制框架一致的安全计划。治理、访问与交付控制按合作定义，并按季度复审。",
      "documents.security.controlsTitle": "核心控制",
      "documents.security.controls1": "身份与访问管理，强制 MFA。",
      "documents.security.controls2": "安全 SDLC、变更审批与审计日志。",
      "documents.security.controls3": "供应商风险评估与安全审查。",
      "documents.security.irTitle": "事件响应",
      "documents.security.p2":
        "专职事件响应负责人协调遏制、客户通知与事后修复，并有明确时间线。",
      "documents.security.asideTitle": "安全包",
      "documents.security.aside1": "用于采购的安全概览演示。",
      "documents.security.aside2": "标准化风险评估问卷。",
      "documents.security.aside3": "渗透测试与漏洞响应手册。",
      "documents.sla.eyebrow": "服务等级",
      "documents.sla.title": "服务级别协议（SLA）",
      "documents.sla.meta": "更新于：2026年2月19日",
      "documents.sla.p1":
        "SLA 定义托管服务的可用性、响应与修复目标。服务等级按 SOW 定制，适用于 Extender 管理的生产系统。",
      "documents.sla.availabilityTitle": "可用性目标",
      "documents.sla.availability1": "托管生产负载月度可用性目标 99.5%。",
      "documents.sla.availability2": "维护窗口至少提前 72 小时通知。",
      "documents.sla.availability3": "未达标时提供服务抵扣/补偿。",
      "documents.sla.supportTitle": "支持等级",
      "documents.sla.p2":
        "支持覆盖标准工作时间，关键事件提供 7×24 升级响应。响应时间与严重性及业务影响匹配。",
      "documents.sla.asideTitle": "响应目标",
      "documents.sla.aside1": "Severity 1：1 小时响应，4 小时缓解。",
      "documents.sla.aside2": "Severity 2：4 小时响应，24 小时缓解。",
      "documents.sla.aside3": "Severity 3：1 个工作日响应。",
      "documents.sla.aside4": "Severity 4：3 个工作日响应。",
      "documents.aup.eyebrow": "可接受使用",
      "documents.aup.title": "可接受使用政策（AUP）",
      "documents.aup.meta": "更新于：2026年2月19日",
      "documents.aup.p1":
        "Extender 的服务必须合法使用并符合各司法辖区的适用法规。客户应确保其受监管活动具备相应许可。",
      "documents.aup.prohibitedTitle": "禁止事项",
      "documents.aup.prohibited1": "未经授权的访问、凭证滥用或数据抓取。",
      "documents.aup.prohibited2": "传播恶意软件或恶意自动化。",
      "documents.aup.prohibited3": "未获许可或非法的博彩、金融或加密活动。",
      "documents.aup.prohibited4": "违反制裁、反贿赂或反洗钱义务。",
      "documents.aup.asideTitle": "客户义务",
      "documents.aup.aside1": "维护准确的合规文件。",
      "documents.aup.aside2": "告知 Extender 监管变化。",
      "documents.aup.aside3": "确保第三方数据来源合法。",
      "documents.cookies.eyebrow": "Cookies",
      "documents.cookies.title": "Cookie 政策",
      "documents.cookies.meta": "更新于：2026年2月19日",
      "documents.cookies.p1":
        "Extender 使用 cookies 等技术以保持网站性能、衡量参与度并改善体验。你可以在浏览器设置中管理 cookies。",
      "documents.cookies.categoriesTitle": "Cookie 分类",
      "documents.cookies.categories1": "保障站点功能的必要 cookies。",
      "documents.cookies.categories2": "用于了解站点使用情况的分析 cookies。",
      "documents.cookies.categories3": "记住用户设置的偏好 cookies。",
      "documents.cookies.optTitle": "选择退出",
      "documents.cookies.p2":
        "你可以在浏览器中禁用 cookies。若屏蔽必要 cookies，部分功能可能受限。",
      "documents.cookies.asideTitle": "分析",
      "documents.cookies.aside1": "使用 Google Analytics 4 的汇总指标。",
      "documents.cookies.aside2": "不出售个人数据，不进行跨站追踪。",
      "documents.cooperation.eyebrow": "合作",
      "documents.cooperation.title": "合作与伙伴关系条款",
      "documents.cooperation.meta": "更新于：2026年2月19日",
      "documents.cooperation.p1":
        "Extender 与机构、咨询公司及企业团队合作交付复杂项目。合作条款对职责、报告与治理进行对齐。",
      "documents.cooperation.modelTitle": "合作模式",
      "documents.cooperation.model1": "每个项目设立单一交付负责人。",
      "documents.cooperation.model2": "联合运营节奏，按周向高层更新。",
      "documents.cooperation.model3": "共享风险清单与合规检查点。",
      "documents.cooperation.govTitle": "商务治理",
      "documents.cooperation.p2":
        "商务结构包括收入分成、固定交付费用或混合模式。所有合作条款均记录在专属 Partner SOW 中。",
      "documents.cooperation.asideTitle": "伙伴入驻",
      "documents.cooperation.aside1": "互签 NDA 与数据处理要求。",
      "documents.cooperation.aside2": "安全与合规评审清单。",
      "documents.cooperation.aside3": "品牌与沟通内容审批。",
      "documents.faq.eyebrow": "FAQ",
      "documents.faq.title": "采购常见问题。",
      "documents.faq.subtitle":
        "如需签署版或定制文档包，请发送邮件至 hello@extender.cards，我们将在一个工作日内回复。",
      "documents.faq.q1": "是否提供完整的 MSA 和 SOW 模板？",
      "documents.faq.a1":
        "是的。我们提供主服务协议以及可根据采购要求和当地司法辖区调整的 SOW 模板。",
      "documents.faq.q2": "能支持受监管的金融科技或博彩交付吗？",
      "documents.faq.a2":
        "我们在每次合作中加入合规与审计检查点，交付团队与监管义务和许可要求对齐。",
      "documents.faq.q3": "在发现阶段之前可以签 NDA 吗？",
      "documents.faq.a3":
        "可以。我们可在方案研讨或技术讨论前签署互签或单方 NDA。",
      "documents.faq.q4": "如何管理分包商？",
      "documents.faq.a4":
        "所有分包商经过审核并签约，遵守同等保密与安全要求。可按需提供子处理方清单。",
      "documents.faq.q5": "提供哪些安全证明材料？",
      "documents.faq.a5":
        "我们提供安全概览、风险评估回复及事件响应文档。更多材料可在 NDA 下提供。",
      "documents.faq.q6": "支持数据驻留要求吗？",
      "documents.faq.a6":
        "支持。我们可按数据驻留要求设计交付，并记录所有跨境传输。",
      "documents.faq.q7": "常见合同条款周期是怎样的？",
      "documents.faq.a7":
        "大多数合作从 3–6 个月的 SOW 开始，随后进入长期支持。条款灵活，可按采购政策调整。",
      "documents.faq.q8": "定制文档包需要多久？",
      "documents.faq.a8":
        "标准文档包 48 小时内交付；定制修订通常 3–5 个工作日。",
      "form.company": "公司名称",
      "form.companyPlaceholder": "Extender Inc.",
      "form.email": "邮箱",
      "form.emailPlaceholder": "name@company.com",
      "form.phone": "电话",
      "form.phonePlaceholder": "+1 (555) 123-4567",
      "form.budget": "预算",
      "form.budgetPlaceholder": "选择区间",
      "form.timeline": "时间计划",
      "form.timelinePlaceholder": "计划在 Q2 上线",
      "form.description": "项目描述",
      "form.descriptionPlaceholder": "请描述目标、范围和当前挑战。",
      "form.submit": "提交",
      "form.fullName": "姓名",
      "form.fullNamePlaceholder": "Jane Doe",
      "form.sending": "发送中...",
      "form.error.required": "请填写所有必填字段。",
      "form.error.email": "请输入有效的邮箱地址。",
      "form.error.phone": "请输入有效的电话号码。",
      "form.error.url": "请输入有效的 URL。",
      "form.error.submit": "提交失败。请重试或发送邮件至 hello@extender.cards。",
      "form.success.contact": "感谢您的请求，我们将在一个工作日内回复。",
      "form.success.careers": "感谢您的申请，我们将在五个工作日内回复。",
      "careers.hero.eyebrow": "招聘",
      "careers.hero.title": "加入交付复杂项目的团队。",
      "careers.hero.subtitle": "Extender 构建高要求行业的执行团队，寻找经验丰富的交付负责人。",
      "careers.form.role": "感兴趣的岗位",
      "careers.form.rolePlaceholder": "选择岗位",
      "careers.form.roleLead": "线索挖掘 / 外联",
      "careers.form.roleMarketing": "营销 / SMM / 内容",
      "careers.form.roleDesign": "设计 / 落地页 / 创意",
      "careers.form.roleAutomation": "IT / 自动化 / 机器人",
      "careers.form.roleAudit": "审计（财务 / 营销 / IT）",
      "careers.form.roleSecurity": "安全（网络 / 数据 / 风险）",
      "careers.form.roleCloud": "云服务 / 基础设施",
      "careers.form.roleBlockchain": "区块链 / 加密尽调",
      "careers.form.roleLegal": "法务 / 合规",
      "careers.form.roleOther": "其他",
      "careers.form.experience": "经验级别",
      "careers.form.experiencePlaceholder": "选择级别",
      "careers.form.experience1": "1-3 年",
      "careers.form.experience2": "3-5 年",
      "careers.form.experience3": "5-8 年",
      "careers.form.experience4": "8+ 年",
      "careers.form.location": "所在地 / 时区",
      "careers.form.locationPlaceholder": "柏林（CET）",
      "careers.form.linkedin": "LinkedIn 或作品集",
      "careers.form.linkedinPlaceholder": "https://linkedin.com/in/username",
      "careers.form.resume": "简历链接",
      "careers.form.resumePlaceholder": "https://drive.google.com/...",
      "careers.form.message": "为什么选择 Extender？",
      "careers.form.messagePlaceholder": "请介绍您的经验、偏好行业和可用时间。",
      "careers.form.submit": "提交申请",
      "careers.side.title": "我们寻找的标准",
      "careers.side.text": "我们与经验丰富的运营专家合作，他们理解受监管环境并重视交付。",
      "careers.side.point1": "具备金融科技、企业 IT 或博彩经验。",
      "careers.side.point2": "熟悉结构化报告与 KPI。",
      "careers.side.point3": "能够在跨职能分布式团队中工作。",
      "careers.side.meta": "平均审核周期：5 个工作日。"
    }
  };

  const supportedLangs = ["en", "ru", "uk", "zh"];
  let currentLang = "en";

  const getTranslation = (lang, key) => {
    if (!lang || !translations[lang]) return "";
    return translations[lang][key] || "";
  };

  const applyTranslations = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (!el.dataset.i18nDefault) {
        el.dataset.i18nDefault = el.textContent;
      }
      const key = el.dataset.i18n;
      const value = lang === "en" ? "" : getTranslation(lang, key);
      el.textContent = value || el.dataset.i18nDefault;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      if (!el.dataset.i18nPlaceholderDefault) {
        el.dataset.i18nPlaceholderDefault = el.getAttribute("placeholder") || "";
      }
      const key = el.dataset.i18nPlaceholder;
      const value = lang === "en" ? "" : getTranslation(lang, key);
      el.setAttribute("placeholder", value || el.dataset.i18nPlaceholderDefault);
    });
  };

  const setLanguage = (lang) => {
    const nextLang = supportedLangs.includes(lang) ? lang : "en";
    currentLang = nextLang;
    document.documentElement.lang = nextLang;
    try {
      localStorage.setItem("extenderLang", nextLang);
    } catch (error) {
      // ignore storage errors
    }
    applyTranslations(nextLang);
    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === nextLang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  };

  const storedLang = (() => {
    try {
      return localStorage.getItem("extenderLang");
    } catch (error) {
      return null;
    }
  })();

  const browserLang = (navigator.language || "en").slice(0, 2);
  const initialLang = supportedLangs.includes(storedLang)
    ? storedLang
    : supportedLangs.includes(browserLang)
      ? browserLang
      : "en";

  setLanguage(initialLang);

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });

  // Mobile navigation toggle
  if (header && navToggle && navMenu) {
    const openMenu = () => {
      header.classList.add("open");
      navMenu.style.maxHeight = `${navMenu.scrollHeight}px`;
      navToggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      header.classList.remove("open");
      navMenu.style.maxHeight = "0px";
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      if (header.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          closeMenu();
        }
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        navMenu.style.maxHeight = "";
        header.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      } else if (header.classList.contains("open")) {
        navMenu.style.maxHeight = `${navMenu.scrollHeight}px`;
      }
    });
  }

  // Smooth scroll for on-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Reveal sections on scroll
  const revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Capabilities accordion toggles
  document.querySelectorAll(".cap-item").forEach((item) => {
    const button = item.querySelector(".cap-toggle");
    const content = item.querySelector(".cap-content");
    if (!button || !content) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(!isOpen));
      if (!isOpen) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = "0px";
      }
    });
  });

  document.querySelectorAll(".cap-content img").forEach((img) => {
    const updateHeight = () => {
      const item = img.closest(".cap-item");
      const content = img.closest(".cap-content");
      if (item && content && item.classList.contains("open")) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    };

    if (img.complete) {
      updateHeight();
    } else {
      img.addEventListener("load", updateHeight);
    }
  });

  // Form validation (contact + careers)
  document.querySelectorAll(".js-form").forEach((form) => {
    const errorEl = form.querySelector("[data-form-message='error']");
    const successEl = form.querySelector("[data-form-message='success']");
    const submitButton = form.querySelector("button[type='submit']");
    const getText = (key, fallback) => getTranslation(currentLang, key) || fallback;
    const getSubmitLabel = () =>
      submitButton ? submitButton.textContent : getText("form.submit", "Submit");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const showError = (message) => {
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add("error");
      }
      if (successEl) {
        successEl.textContent = "";
        successEl.classList.remove("success");
      }
    };

    const showSuccess = (message) => {
      if (successEl) {
        successEl.textContent = message;
        successEl.classList.add("success");
      }
      if (errorEl) {
        errorEl.textContent = "";
        errorEl.classList.remove("error");
      }
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const requiredFields = Array.from(form.querySelectorAll("[required]"));
      for (const field of requiredFields) {
        if (!field.value || !field.value.trim()) {
          showError(getText("form.error.required", "Please complete all required fields."));
          field.focus();
          return;
        }
      }

      const emailField = form.querySelector("input[type='email']");
      if (emailField && !emailPattern.test(emailField.value.trim())) {
        showError(getText("form.error.email", "Please provide a valid email address."));
        emailField.focus();
        return;
      }

      const phoneField = form.querySelector("input[type='tel']");
      if (phoneField && phoneField.value.trim() && phoneField.value.trim().length < 7) {
        showError(getText("form.error.phone", "Please provide a valid phone number."));
        phoneField.focus();
        return;
      }

      const urlFields = Array.from(form.querySelectorAll("input[type='url']"));
      for (const field of urlFields) {
        if (field.value.trim()) {
          try {
            new URL(field.value.trim());
          } catch (error) {
            showError(getText("form.error.url", "Please provide a valid URL."));
            field.focus();
            return;
          }
        }
      }

      const endpoint = form.getAttribute("data-endpoint");
      const hasEndpoint = endpoint && endpoint.trim() !== "";
      const successKey = form.getAttribute("data-success-key");
      const successMessage =
        (successKey && getTranslation(currentLang, successKey)) ||
        form.getAttribute("data-success") ||
        "Thanks for reaching out. We'll respond within one business day.";

      const finalize = () => {
        form.reset();
        showSuccess(successMessage);
      };

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = getText("form.sending", "Sending...");
      }

      const submitLabel = getSubmitLabel();

      if (hasEndpoint) {
        const formData = new FormData(form);
        fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            if (!response.ok && response.status >= 400) {
              throw new Error("Network response was not ok");
            }
            finalize();
          })
          .catch(() => {
            showError(
              getText(
                "form.error.submit",
                "Submission failed. Please try again or email hello@extender.cards."
              )
            );
          })
          .finally(() => {
            if (submitButton) {
              submitButton.disabled = false;
              submitButton.textContent = submitLabel;
            }
          });
        return;
      }

      finalize();
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitLabel;
      }
    });
  });
})();
