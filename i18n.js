(function () {
    'use strict';

    window.I18N = {
        ru: {
            // ── shared nav ─────────────────────────────────────────
            'nav.home':        'Главная',
            'nav.guide':       'Гайд',
            'nav.commands':    'Команды',
            'nav.updates':     'Обновления',
            'nav.bot':         '⚔️ Бот',

            // ── shared footer ──────────────────────────────────────
            'footer.home':    'Главная',
            'footer.guide':   'Гайд',
            'footer.commands': 'Команды',

            // ── changelog ─────────────────────────────────────────
            'changelog.meta.title':   'SportBot — История обновлений',
            'changelog.meta.desc':    'История обновлений SportBot — новые функции, улучшения и исправления по месяцам.',
            'changelog.meta.og_title':'SportBot — История обновлений',
            'changelog.meta.og_desc': 'Следи за развитием бота — новые фичи, баланс, исправления по месяцам.',

            'changelog.hero.h1':      'История <span>обновлений</span>',
            'changelog.hero.p':       'Новые функции, улучшения и исправления — всё что появилось в боте',

            'changelog.tag.feat':    'Новое',
            'changelog.tag.fix':     'Фикс',
            'changelog.tag.balance': 'Баланс',
            'changelog.tag.ui':      'UI',

            // ── index ──────────────────────────────────────────────
            'index.meta.title':    'SportBot - Фитнес RPG бот в Telegram | Превращай тренировки в игру',
            'index.meta.desc':     'Геймифицированный фитнес-бот для Telegram. 121+ достижений, рейд-боссы, монстры, приключения, гильдия с квестами. Отжимания, подтягивания, приседания, пресс — всё в одном месте!',
            'index.meta.og_title': 'SportBot - Фитнес RPG бот в Telegram',
            'index.meta.og_desc':  'Превращай тренировки в эпическое приключение! 121+ достижений, рейд-боссы, игровые награды.',
            'index.meta.tw_title': 'SportBot - Фитнес RPG бот',
            'index.meta.tw_desc':  'Геймифицированный фитнес в Telegram',

            'index.hero.subtitle':  'Превращай тренировки в эпическое приключение! Гильдия с квестами, личные монстры, рейд-боссы, достижения и RPG-истории — всё в одном боте.',
            'index.hero.btn_play':  '⚔️ Начать игру',
            'index.hero.btn_guide': '📖 Полное руководство',

            'index.stats.achievements': 'Достижений',
            'index.stats.ranks':        'Уровней рангов',
            'index.stats.exercises':    'Типа упражнений',
            'index.stats.users':        'Пользователей',
            'index.stats.reps':         'Повторений выполнено',
            'index.reps_suffix':        'к+',
            'index.reps_suffix_mid':    'к',

            'index.features.title':    'Ключевые возможности',
            'index.features.subtitle': 'Всё что нужно для мотивированных тренировок в одном боте',

            'index.feat1.title': '121+ Достижений',
            'index.feat1.desc':  'Разблокируй уникальные достижения за серии тренировок, рекорды и прогресс. Каждое достижение награждает игровыми монетами!',
            'index.feat2.title': 'Боевая система',
            'index.feat2.desc':  'Сражайся с личными монстрами соло, участвуй в кооперативных рейд-боссах всем сообществом и выходи на Арену PvP в дуэлях 1v1. Каждая тренировка наносит урон — побеждай и получай награды!',
            'index.feat3.title': 'Персональная программа',
            'index.feat3.desc':  'Бот строит индивидуальный план тренировок с прогрессией нагрузки. Выполняй — и с каждой неделей становишься сильнее.',
            'index.feat4.title': 'RPG-приключения',
            'index.feat4.desc':  'Проходи интерактивные истории с разветвлёнными сюжетами и испытаниями. Выполняй физические челленджи прямо внутри сюжета!',
            'index.feat5.title': 'Гильдия героев',
            'index.feat5.desc':  'Принимай ежедневные квесты, покупай зелья урона в магазине гильдии и получай золото за победы над монстрами!',
            'index.feat6.title': 'AR-тренировки',
            'index.feat6.desc':  'Тренируйся прямо через камеру — бот считает повторения в реальном времени с помощью дополненной реальности. Поддержка 4 упражнений!',
            'index.feat7.title': 'Режим Выживания',
            'index.feat7.desc':  'Интенсивный режим тренировки с нарастающей сложностью. Держись как можно дольше — каждый раунд требует больше повторений!',
            'index.feat8.title': 'СТАЛИОН — тёмный СССР',
            'index.feat8.desc':  'Альтернативный бот в сеттинге «СССР × некрогаз»: заражённые монстры, Некро-Титаны, рейд-боссы и советская эстетика. Для любителей тёмного лора!',

            'index.social.title':    'Реальные результаты',
            'index.social.subtitle': 'Игроки, которые тренировались каждый день',

            'index.s1.stat':    '2 → 22',
            'index.s1.label':   'подтягивания за 6 месяцев',
            'index.s1.text':    'Начинал с 2 подтягиваний. Полгода ежедневных боёв с монстрами — и личный рекорд вырос до 22.',
            'index.s2.stat':    '20 000 + 10 000',
            'index.s2.label':   'отжиманий и подтягиваний суммарно',
            'index.s2.text':    '20 000 отжиманий и 10 000 подтягиваний — не за один раз, а шаг за шагом, убивая боссов каждый день.',
            'index.s3.stat':    '1 000',
            'index.s3.label':   'отжиманий за один день',
            'index.s3.text':    'Год тренировок в боте — и однажды просто сделал 1 000 отжиманий за день. Потому что мог.',
            'index.s4.stat':    '−5 кг',
            'index.s4.label':   'сброшенного веса',
            'index.s4.text':    'Просто уничтожал монстров каждый день. Не думал о диете — думал об убийстве боссов. Минус 5 кг.',

            'index.app.title':    'Всё прямо в Telegram',
            'index.app.subtitle': 'Никаких сторонних приложений — Mini App встроен в чат',

            'index.screen1': 'Профиль героя',
            'index.screen2': 'Битва с монстром',
            'index.screen3': 'Лидерборд',
            'index.screen4': 'Календарь',
            'index.screen5': 'Достижения',
            'index.screen6': 'Лавка',
            'index.screen7': 'Сообщество',

            'index.raid.title':    '<span style="color: var(--primary);">Рейд-боссы</span>',
            'index.raid.subtitle': 'Кооперативные события, где все пользователи атакуют одного общего босса. Каждая тренировка наносит урон — побеждай вместе с сообществом!',
            'index.cta.h2':        'Готов начать свою фитнес-битву?',
            'index.cta.btn':       '⚔️ Начать игру',

            'index.footer.about.title':  'О проекте',
            'index.footer.about.text':   'SportBot — геймифицированный фитнес-бот для Telegram, который превращает тренировки в эпическое RPG-приключение.',
            'index.footer.links.title':  'Быстрые ссылки',
            'index.footer.links.start':  'Запустить бота',
            'index.footer.links.guide':  'Полное руководство',
            'index.footer.links.log':    'История обновлений',
            'index.footer.bots.title':   'Наши боты',
            'index.footer.bots.sportbot': '⚔️ SportBot — фитнес RPG',
            'index.footer.bots.stalion':  '☣️ СТАЛИОН — тёмный СССР',
            'index.footer.bots.stalion_launch': '→ Запустить СТАЛИОН',
            'index.footer.copy':         '© 2026 SportBot. Все права защищены.',

            // ── guide ─────────────────────────────────────────────
            'guide.meta.title':    'Руководство SportBot | Полная документация',
            'guide.meta.desc':     'Полное руководство по SportBot: ранги, достижения, боевая система, гильдия, AR-тренировки, режим выживания и все возможности бота.',
            'guide.meta.og_title': 'Руководство SportBot',
            'guide.meta.og_desc':  'Полная документация: ранги, достижения, боевая система, гильдия, RPG-приключения.',

            'guide.hero.h1':        '📖 Полное руководство',
            'guide.hero.p':         'Всё что нужно знать о SportBot — от первых шагов до легендарных достижений',

            'guide.nav.commands':   'Команды',
            'guide.nav.ranks':      'Ранги',
            'guide.nav.achievements':'Достижения',
            'guide.nav.battles':    'Битвы',
            'guide.nav.guild':      'Гильдия',
            'guide.nav.social':     'Рейтинг',
            'guide.nav.adventure':  'Приключение',
            'guide.nav.all_commands':'📖 Все команды',
            'guide.nav.updates':    '🆕 Обновления',

            'guide.toc.title':       'Содержание',
            'guide.toc.commands':    'Команды и профиль',
            'guide.toc.ranks':       'Система рангов и опыт',
            'guide.toc.achievements':'Достижения',
            'guide.toc.monsters':    'Монстры и рейд-боссы',
            'guide.toc.guild':       'Гильдия — квесты и зелья',
            'guide.toc.adventure':   'RPG-приключения',
            'guide.toc.camera':      'AR-тренировки через камеру',
            'guide.toc.minimal':     'Минималистичная тема',
            'guide.toc.stalion':     'СТАЛИОН — тёмный СССР',
            'guide.toc.social':      'Рейтинг, отряд, подписки',
            'guide.toc.arena':       'Арена PvP',
            'guide.toc.settings':    'Настройки',

            // ── commands ─────────────────────────────────────────
            'commands.meta.title':    'SportBot — Полное руководство по командам',
            'commands.meta.desc':     'Полный справочник команд SportBot: тренировки, статистика, боевая система, достижения, гильдия и настройки.',
            'commands.meta.og_title': 'SportBot — Команды',
            'commands.meta.og_desc':  'Полный справочник всех команд бота.',

            'commands.nav.commands':    'Команды',
            'commands.nav.ranks':       'Ранги',
            'commands.nav.achievements':'Достижения',
            'commands.nav.battles':     'Битвы',
            'commands.nav.guide':       '📖 Руководство',
        },

        en: {
            // ── shared nav ─────────────────────────────────────────
            'nav.home':        'Home',
            'nav.guide':       'Guide',
            'nav.commands':    'Commands',
            'nav.updates':     'Updates',
            'nav.bot':         '⚔️ Bot',

            // ── shared footer ──────────────────────────────────────
            'footer.home':    'Home',
            'footer.guide':   'Guide',
            'footer.commands': 'Commands',

            // ── changelog ─────────────────────────────────────────
            'changelog.meta.title':   'SportBot — Update History',
            'changelog.meta.desc':    'SportBot update history — new features, improvements and fixes by month.',
            'changelog.meta.og_title':'SportBot — Update History',
            'changelog.meta.og_desc': 'Follow the bot\'s development — new features, balance changes, fixes by month.',

            'changelog.hero.h1':      'Update <span>History</span>',
            'changelog.hero.p':       'New features, improvements and bug fixes — everything that appeared in the bot',

            'changelog.tag.feat':    'New',
            'changelog.tag.fix':     'Fix',
            'changelog.tag.balance': 'Balance',
            'changelog.tag.ui':      'UI',

            // ── index ──────────────────────────────────────────────
            'index.meta.title':    'SportBot - Fitness RPG Bot in Telegram | Turn Workouts into a Game',
            'index.meta.desc':     'Gamified fitness bot for Telegram. 121+ achievements, raid bosses, monsters, adventures, guild quests. Push-ups, pull-ups, squats, crunches — all in one bot!',
            'index.meta.og_title': 'SportBot - Fitness RPG Bot in Telegram',
            'index.meta.og_desc':  'Turn workouts into an epic adventure! 121+ achievements, raid bosses, in-game rewards.',
            'index.meta.tw_title': 'SportBot - Fitness RPG Bot',
            'index.meta.tw_desc':  'Gamified fitness in Telegram',

            'index.hero.subtitle':  'Turn workouts into an epic adventure! Guild quests, personal monsters, raid bosses, achievements and RPG stories — all in one bot.',
            'index.hero.btn_play':  '⚔️ Start Playing',
            'index.hero.btn_guide': '📖 Full Guide',

            'index.stats.achievements': 'Achievements',
            'index.stats.ranks':        'Rank Levels',
            'index.stats.exercises':    'Exercise Types',
            'index.stats.users':        'Users',
            'index.stats.reps':         'Reps Completed',
            'index.reps_suffix':        'k+',
            'index.reps_suffix_mid':    'k',

            'index.features.title':    'Key Features',
            'index.features.subtitle': 'Everything you need for motivated workouts in one bot',

            'index.feat1.title': '121+ Achievements',
            'index.feat1.desc':  'Unlock unique achievements for workout streaks, records and progress. Each achievement rewards in-game coins!',
            'index.feat2.title': 'Combat System',
            'index.feat2.desc':  'Fight personal monsters solo, join cooperative raid bosses with the whole community, and enter the PvP Arena for 1v1 duels. Every workout deals damage — win and earn rewards!',
            'index.feat3.title': 'Personal Program',
            'index.feat3.desc':  'The bot builds an individual training plan with progressive overload. Train daily — and get stronger every week.',
            'index.feat4.title': 'RPG Adventures',
            'index.feat4.desc':  'Complete interactive stories with branching plots and challenges. Do physical challenges right inside the storyline!',
            'index.feat5.title': 'Heroes\' Guild',
            'index.feat5.desc':  'Accept daily quests, buy damage potions at the guild shop and earn gold for defeating monsters!',
            'index.feat6.title': 'AR Workouts',
            'index.feat6.desc':  'Train right through your camera — the bot counts reps in real time using augmented reality. Supports 4 exercises!',
            'index.feat7.title': 'Survival Mode',
            'index.feat7.desc':  'Intense workout mode with increasing difficulty. Hold on as long as possible — each round demands more reps!',
            'index.feat8.title': 'STALION — Dark USSR',
            'index.feat8.desc':  'An alternate bot set in a "USSR × necrogas" universe: infected monsters, Necro-Titans, raid bosses and Soviet aesthetics. For dark lore fans!',

            'index.social.title':    'Real Results',
            'index.social.subtitle': 'Players who trained every single day',

            'index.s1.stat':    '2 → 22',
            'index.s1.label':   'pull-ups in 6 months',
            'index.s1.text':    'Started with 2 pull-ups. Half a year of daily battles with monsters — and my personal record reached 22.',
            'index.s2.stat':    '20,000 + 10,000',
            'index.s2.label':   'push-ups and pull-ups total',
            'index.s2.text':    '20,000 push-ups and 10,000 pull-ups — not all at once, but step by step, slaying bosses every day.',
            'index.s3.stat':    '1,000',
            'index.s3.label':   'push-ups in one day',
            'index.s3.text':    'A year of training in the bot — and one day I just did 1,000 push-ups. Because I could.',
            'index.s4.stat':    '−5 kg',
            'index.s4.label':   'weight lost',
            'index.s4.text':    'Just destroyed monsters every day. Didn\'t think about diet — thought about killing bosses. Minus 5 kg.',

            'index.app.title':    'All Right in Telegram',
            'index.app.subtitle': 'No third-party apps — Mini App is built right into the chat',

            'index.screen1': 'Hero Profile',
            'index.screen2': 'Monster Battle',
            'index.screen3': 'Leaderboard',
            'index.screen4': 'Calendar',
            'index.screen5': 'Achievements',
            'index.screen6': 'Shop',
            'index.screen7': 'Community',

            'index.raid.title':    '<span style="color: var(--primary);">Raid Bosses</span>',
            'index.raid.subtitle': 'Cooperative events where all users attack one shared boss. Every workout deals damage — win together with the community!',
            'index.cta.h2':        'Ready to start your fitness battle?',
            'index.cta.btn':       '⚔️ Start Playing',

            'index.footer.about.title':  'About',
            'index.footer.about.text':   'SportBot — a gamified fitness bot for Telegram that turns workouts into an epic RPG adventure.',
            'index.footer.links.title':  'Quick Links',
            'index.footer.links.start':  'Launch Bot',
            'index.footer.links.guide':  'Full Guide',
            'index.footer.links.log':    'Update History',
            'index.footer.bots.title':   'Our Bots',
            'index.footer.bots.sportbot': '⚔️ SportBot — Fitness RPG',
            'index.footer.bots.stalion':  '☣️ STALION — Dark USSR',
            'index.footer.bots.stalion_launch': '→ Launch STALION',
            'index.footer.copy':         '© 2026 SportBot. All rights reserved.',

            // ── guide ─────────────────────────────────────────────
            'guide.meta.title':    'SportBot Guide | Full Documentation',
            'guide.meta.desc':     'Complete SportBot guide: ranks, achievements, combat system, guild, AR workouts, survival mode and all bot features.',
            'guide.meta.og_title': 'SportBot Guide',
            'guide.meta.og_desc':  'Full documentation: ranks, achievements, combat system, guild, RPG adventures.',

            'guide.hero.h1':        '📖 Full Guide',
            'guide.hero.p':         'Everything you need to know about SportBot — from first steps to legendary achievements',

            'guide.nav.commands':    'Commands',
            'guide.nav.ranks':      'Ranks',
            'guide.nav.achievements':'Achievements',
            'guide.nav.battles':    'Battles',
            'guide.nav.guild':      'Guild',
            'guide.nav.social':     'Leaderboard',
            'guide.nav.adventure':  'Adventure',
            'guide.nav.all_commands':'📖 All Commands',
            'guide.nav.updates':    '🆕 Updates',

            'guide.toc.title':       'Contents',
            'guide.toc.commands':    'Commands & Profile',
            'guide.toc.ranks':       'Rank System & XP',
            'guide.toc.achievements':'Achievements',
            'guide.toc.monsters':    'Monsters & Raid Bosses',
            'guide.toc.guild':       'Guild — Quests & Potions',
            'guide.toc.adventure':   'RPG Adventures',
            'guide.toc.camera':      'AR Workouts via Camera',
            'guide.toc.minimal':     'Minimalist Theme',
            'guide.toc.stalion':     'STALION — Dark USSR',
            'guide.toc.social':      'Leaderboard, Squad, Subscriptions',
            'guide.toc.arena':       'PvP Arena',
            'guide.toc.settings':    'Settings',

            // ── commands ─────────────────────────────────────────
            'commands.meta.title':    'SportBot — Full Commands Reference',
            'commands.meta.desc':     'Complete SportBot command reference: workouts, stats, combat system, achievements, guild and settings.',
            'commands.meta.og_title': 'SportBot — Commands',
            'commands.meta.og_desc':  'Complete reference for all bot commands.',

            'commands.nav.commands':    'Commands',
            'commands.nav.ranks':       'Ranks',
            'commands.nav.achievements':'Achievements',
            'commands.nav.battles':     'Battles',
            'commands.nav.guide':       '📖 Guide',
        }
    };

    var _lang = 'ru';

    window.applyLang = function (lang) {
        if (lang !== 'ru' && lang !== 'en') return;
        _lang = lang;
        var dict = window.I18N[lang];

        // 1. DOM replacement via data-i18n
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // 2. Meta tags
        function setMeta(id, value) {
            var el = document.getElementById(id);
            if (!el || !value) return;
            if (el.tagName === 'TITLE') { el.textContent = value; }
            else { el.setAttribute('content', value); }
        }
        // Detect current page prefix from body data-page attribute
        var page = document.body.getAttribute('data-page') || '';
        setMeta('meta-title',   dict[page + '.meta.title']);
        setMeta('meta-desc',    dict[page + '.meta.desc']);
        setMeta('og-title',     dict[page + '.meta.og_title']);
        setMeta('og-desc',      dict[page + '.meta.og_desc']);
        setMeta('og-locale',    lang === 'en' ? 'en_US' : 'ru_RU');
        setMeta('tw-title',     dict[page + '.meta.tw_title']);
        setMeta('tw-desc',      dict[page + '.meta.tw_desc']);

        // 3. html lang
        document.documentElement.lang = lang;

        // 4. commands.html section swap
        var ruSec = document.getElementById('commands-ru');
        var enSec = document.getElementById('commands-en');
        if (ruSec && enSec) {
            ruSec.style.display = lang === 'ru' ? '' : 'none';
            enSec.style.display = lang === 'en' ? '' : 'none';
        }

        // 4b. changelog.html section swap
        var clRu = document.getElementById('changelog-ru');
        var clEn = document.getElementById('changelog-en');
        if (clRu && clEn) {
            clRu.style.display = lang === 'ru' ? '' : 'none';
            clEn.style.display = lang === 'en' ? '' : 'none';
        }

        // 5. switcher button label — shows CURRENT language with flag
        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = lang === 'ru' ? '🇷🇺 RU' : '🇬🇧 EN';
            btn.classList.toggle('lang-active-en', lang === 'en');
        }

        // 6. reps counter suffix (index.html)
        var repsEl = document.getElementById('reps-count');
        if (repsEl && repsEl._finalValue !== undefined) {
            repsEl.textContent = repsEl._finalValue + (dict['index.reps_suffix'] || 'k+');
        }

        // 9. Persist
        try { localStorage.setItem('sb_lang', lang); } catch (e) {}
        window._currentLang = lang;
    };

    window.toggleLang = function () {
        window.applyLang(_lang === 'ru' ? 'en' : 'ru');
    };

    // Boot
    (function boot() {
        var stored;
        try { stored = localStorage.getItem('sb_lang'); } catch (e) {}
        var lang;
        if (stored === 'ru' || stored === 'en') {
            lang = stored;
        } else {
            var bl = (navigator.language || 'ru').toLowerCase();
            lang = bl.startsWith('en') ? 'en' : 'ru';
        }
        window._currentLang = lang;
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () { window.applyLang(lang); });
        } else {
            window.applyLang(lang);
        }
    })();
})();
