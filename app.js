(() => {
  'use strict';
  const KEY = 'lingoleaf_state_v1';
  const units = window.COURSE_UNITS || [];
  const allItems = units.flatMap(u => u.items);
  const itemMap = Object.fromEntries(allItems.map(item => [item.id, item]));
  const $app = document.getElementById('app');
  const $toast = document.getElementById('toast');
  const $file = document.getElementById('import-file');

  const words = {
    he: {
      subtitle:'אנגלית, בקצב שלך', hello:'היי', welcome:'איזה כיף שחזרת!', start:'מתחילים ללמוד', startCourse:'להתחיל שיעור', resume:'ממשיכים ללמוד', today:'היום', lessons:'שיעורים', review:'חזרות', progress:'התקדמות', settings:'הגדרות',
      nice:'הדרך שלך לאנגלית בטוחה יותר מתחילה כאן.', heroEyebrow:'התרגול היומי שלך', heroTitle:'קצת בכל יום.', heroTitle2:'הרבה יותר ביטחון.', heroDesc:'תרגול קצר, האזנה אמיתית וחזרה חכמה. בלי לחץ ובלי עומס.',
      todayGoal:'היעד היומי', minutes:'דקות', progressToday:'פעילות היום', sentences:'משפטים', doneLessons:'שיעורים שהושלמו', accuracy:'דיוק בתשובות', streak:'רצף ימים', day:'יום', xp:'נקודות',
      yourPath:'מסלול הלימוד שלך', viewAll:'לכל השיעורים', dailyPractice:'אימון קצר', dailyPracticeDesc:'כמה שאלות לחיזוק מה שלמדת', beginPractice:'מתחילים', reviewWords:'מילים לחזרה', reviewDesc:'מילים שכדאי לרענן בזיכרון', goReview:'לתרגול חוזר',
      level:'רמה', phrases:'משפטים', completed:'הושלם', inProgress:'בתרגול', notStarted:'טרם התחיל', all:'הכול', basic:'מתחילים', nextLevel:'ממשיכים', lessonOverview:'השיעור שלך', tapReveal:'לחצו להצגת התרגום', showTranslation:'הצג תרגום', hideTranslation:'הסתר תרגום',
      listen:'השמיעו באנגלית', nextCard:'למשפט הבא', previous:'הקודם', startQuiz:'למבחן קצר', practiceNow:'תרגלו את השיעור', grammarTip:'טיפ קטן לדקדוק',
      speak:'נסו לומר בעצמכם', speakTitle:'תרגול דיבור', speakPrompt:'השמיעו את המשפט ואז נסו לומר אותו בקול.', startMic:'לחצו למיקרופון', listening:'מקשיב...', micUnsupported:'זיהוי דיבור אינו נתמך בדפדפן הזה. עדיין אפשר להאזין ולחזור על המשפט בקול.', micPermission:'לא ניתן להפעיל את המיקרופון. בדקו הרשאות או נסו בדפדפן אחר.',
      speechHeard:'זוהו המילים', speechGood:'יופי! המילים שזוהו מתאימות למשפט.', speechTry:'נסו שוב ולהגות את המשפט לאט.', speechNote:'זו השוואת מילים שנקלטו, לא בדיקת מבטא מקצועית.', close:'סגירה',
      selectCorrect:'בחרו את התרגום המתאים', selectEnglish:'בחרו את המשפט באנגלית', listenAndChoose:'האזינו ובחרו את התרגום', listenAgain:'השמיעו שוב', writeEnglish:'כתבו את המשפט באנגלית', writeHint:'כתבו את הניסוח שלמדתם בשיעור', enterAnswer:'הקלידו כאן באנגלית...', check:'בדיקה', nextQuestion:'לשאלה הבאה', correct:'בדיוק!', incorrect:'כמעט! ממשיכים ללמוד', rightAnswer:'התשובה הנכונה', quizDone:'כל הכבוד! סיימתם', quizResult:'עניתם נכון על', of:'מתוך', finish:'חזרה לבית', repeatQuiz:'לתרגל שוב', goToLessons:'עוד שיעורים',
      noReview:'אין מילים שממתינות לחזרה 🎉', noReviewDesc:'כשתלמדו שיעור ותענו על שאלות, המילים יופיעו כאן בזמן המתאים.', exploreLessons:'בחרו שיעור', reviewTitle:'חוזרים וזוכרים', reviewSubtitle:'חזרות קצרות עוזרות לזכור לאורך זמן.', flipCard:'לחצו כדי לחשוף את התרגום', iKnew:'ידעתי', again:'לתרגל שוב', reviewFinished:'סיימתם את החזרה!', reviewFinishedDesc:'כל חזרה קטנה מחזקת את הזיכרון.', continueLearning:'המשיכו ללמוד',
      progressTitle:'ההתקדמות שלכם', progressSubtitle:'כל יום קטן הופך להישג גדול.', yourStats:'המספרים שלכם', thisWeek:'השבוע האחרון', practiced:'משפטים שתורגלו', mastered:'מילים שנקלטו', yourAchievements:'ההישגים שלכם', firstStep:'צעד ראשון', fiveLessons:'חמישה שיעורים', tenWords:'10 משפטים שנקלטו', threeDays:'3 ימי לימוד ברצף', recentLessons:'התקדמות בשיעורים', noProgress:'השלימו שיעור ראשון כדי לראות כאן התקדמות.',
      settingsTitle:'המרחב שלכם', settingsSubtitle:'התאימו את הלמידה בדיוק אליכם.', learners:'לומדים', changeUser:'החלפת משתמש', active:'פעיל', addLearner:'הוספת לומד/ת', yourName:'איך קוראים לך?', namePlaceholder:'השם שלך', create:'יצירת פרופיל', chooseLanguage:'שפת האפליקציה', languageNote:'השיעורים והתרגומים מותאמים לשפה שתבחרו.', sound:'האזנה והגייה', soundSpeed:'מהירות דיבור', slow:'איטית', normal:'רגילה', fast:'מהירה', accent:'מבטא מועדף', american:'אמריקאי', british:'בריטי', testSound:'בדיקת קול',
      backup:'שמירה וגיבוי', backupDesc:'ההתקדמות נשמרת במכשיר בלבד. מומלץ לשמור גיבוי מדי פעם.', export:'ייצוא גיבוי', import:'ייבוא גיבוי', reset:'מחיקת התקדמות בפרופיל', resetConfirm:'למחוק את כל ההתקדמות בפרופיל הנוכחי? לא ניתן לבטל פעולה זו ללא גיבוי.', importConfirm:'לייבא את הגיבוי? הנתונים הנוכחיים יוחלפו. כדאי לייצא אותם קודם.', deleteProfile:'מחיקת פרופיל', deleteConfirm:'למחוק את הפרופיל וההתקדמות שלו?',
      about:'על האפליקציה', aboutText:'LingoLeaf עובדת בחינם, בלי חשבון ובלי שרת. חלק מאפשרויות הקול תלויות בדפדפן ובמכשיר.', madeBy:'Made with care · LingoLeaf',
      onboardingTag:'נעים להכיר • Nice to meet you', onboardingTitle:'אנגלית שמרגישה טבעית.', onboardingDesc:'לומדים קצת בכל יום, מקשיבים, מתרגלים ומתקדמים — בדרך שנוחה לכם.', chooseMyLanguage:'באיזו שפה נוח לך ללמוד?', onboardingNote:'אפשר להחליף שפה ולהוסיף לומדים נוספים בכל רגע.', startJourney:'יוצאים לדרך', profileNameRequired:'יש להזין שם כדי להמשיך.', backupReady:'הגיבוי נשמר בקובץ.', backupLoaded:'הגיבוי נטען בהצלחה.', backupError:'לא ניתן לטעון את הקובץ. ודאו שזה גיבוי תקין.', audioUnavailable:'הקראה אינה זמינה בדפדפן זה.', offline:'המידע נשמר במכשיר', studyNow:'בואו נתחיל', profile:'פרופיל', learningLanguage:'שפת לימוד', doneToday:'מעולה, התקדמתם היום!', practice:'תרגול', training:'אימון', sample:'דוגמה', welcomeAgain:'ברוכים הבאים!',
      installTip:'להתקנה בנייד: פתחו את האתר בדפדפן ובחרו ״הוספה למסך הבית״.', noActivity:'לא היו אימונים ביום הזה', days:'ימים', notAvailable:'לא זמין כרגע'
    },
    ru: {
      subtitle:'Английский в твоём ритме', hello:'Привет', welcome:'Рады снова тебя видеть!', start:'Начать учиться', startCourse:'Начать урок', resume:'Продолжить', today:'Сегодня', lessons:'Уроки', review:'Повторение', progress:'Прогресс', settings:'Настройки',
      nice:'Твой путь к уверенному английскому начинается здесь.', heroEyebrow:'Твоя ежедневная практика', heroTitle:'Понемногу каждый день.', heroTitle2:'Больше уверенности.', heroDesc:'Короткие уроки, аудирование и умное повторение. Без стресса и перегруза.',
      todayGoal:'Цель на день', minutes:'мин', progressToday:'Активность сегодня', sentences:'фраз', doneLessons:'Пройдено уроков', accuracy:'Точность ответов', streak:'Дней подряд', day:'день', xp:'Баллы',
      yourPath:'Твой учебный путь', viewAll:'Все уроки', dailyPractice:'Быстрая тренировка', dailyPracticeDesc:'Закрепи то, что уже выучил(а)', beginPractice:'Начать', reviewWords:'Повторить фразы', reviewDesc:'Фразы, которые пора освежить в памяти', goReview:'Повторить',
      level:'Уровень', phrases:'фраз', completed:'Пройден', inProgress:'В процессе', notStarted:'Не начат', all:'Все', basic:'Начальный', nextLevel:'Продолжаем', lessonOverview:'Твой урок', tapReveal:'Нажми, чтобы увидеть перевод', showTranslation:'Показать перевод', hideTranslation:'Скрыть перевод',
      listen:'Слушать по-английски', nextCard:'Следующая фраза', previous:'Назад', startQuiz:'Мини-тест', practiceNow:'Проверить знания', grammarTip:'Грамматика без сложностей',
      speak:'Попробуй произнести', speakTitle:'Практика речи', speakPrompt:'Послушай фразу и попробуй сказать её вслух.', startMic:'Включить микрофон', listening:'Слушаю...', micUnsupported:'Распознавание речи не поддерживается в этом браузере. Но можно слушать и повторять вслух.', micPermission:'Не удалось включить микрофон. Проверь разрешения или попробуй другой браузер.',
      speechHeard:'Распознано', speechGood:'Отлично! Распознанные слова совпадают с фразой.', speechTry:'Попробуй ещё раз, чуть медленнее.', speechNote:'Сравниваются распознанные слова, а не качество произношения.', close:'Закрыть',
      selectCorrect:'Выбери правильный перевод', selectEnglish:'Выбери фразу на английском', listenAndChoose:'Послушай и выбери перевод', listenAgain:'Послушать ещё раз', writeEnglish:'Напиши фразу на английском', writeHint:'Введи ту фразу, которую выучил(а) на уроке', enterAnswer:'Пиши на английском...', check:'Проверить', nextQuestion:'Следующий вопрос', correct:'Верно!', incorrect:'Почти! Продолжаем учиться', rightAnswer:'Правильный ответ', quizDone:'Отлично! Урок завершён', quizResult:'Правильных ответов', of:'из', finish:'На главную', repeatQuiz:'Пройти ещё раз', goToLessons:'Другие уроки',
      noReview:'Сейчас нечего повторять 🎉', noReviewDesc:'После уроков и упражнений здесь будут появляться фразы для повторения.', exploreLessons:'Выбрать урок', reviewTitle:'Повторяй и запоминай', reviewSubtitle:'Короткие повторения помогают надолго запомнить фразы.', flipCard:'Нажми, чтобы увидеть перевод', iKnew:'Помню', again:'Повторить ещё', reviewFinished:'Повторение завершено!', reviewFinishedDesc:'Каждый повтор укрепляет память.', continueLearning:'Продолжить обучение',
      progressTitle:'Твои успехи', progressSubtitle:'Каждый маленький шаг приближает к цели.', yourStats:'Твоя статистика', thisWeek:'Последние 7 дней', practiced:'Фраз отработано', mastered:'Освоено фраз', yourAchievements:'Твои достижения', firstStep:'Первый шаг', fiveLessons:'Пять уроков', tenWords:'10 освоенных фраз', threeDays:'3 дня подряд', recentLessons:'Успехи по урокам', noProgress:'Пройди первый урок, чтобы увидеть прогресс.',
      settingsTitle:'Твоё пространство', settingsSubtitle:'Настрой приложение под себя.', learners:'Ученики', changeUser:'Сменить ученика', active:'Активен', addLearner:'Добавить ученика', yourName:'Как тебя зовут?', namePlaceholder:'Твоё имя', create:'Создать профиль', chooseLanguage:'Язык интерфейса', languageNote:'Все переводы и подсказки будут на выбранном языке.', sound:'Аудирование и речь', soundSpeed:'Скорость речи', slow:'Медленно', normal:'Обычно', fast:'Быстро', accent:'Предпочитаемый акцент', american:'Американский', british:'Британский', testSound:'Проверить голос',
      backup:'Резервная копия', backupDesc:'Прогресс хранится только на этом устройстве. Рекомендуем иногда сохранять копию.', export:'Скачать копию', import:'Восстановить копию', reset:'Сбросить прогресс профиля', resetConfirm:'Удалить весь прогресс текущего профиля? Без резервной копии его нельзя восстановить.', importConfirm:'Восстановить резервную копию? Текущие данные будут заменены. Рекомендуем сначала сохранить их.', deleteProfile:'Удалить профиль', deleteConfirm:'Удалить профиль и весь его прогресс?',
      about:'О приложении', aboutText:'LingoLeaf работает бесплатно, без регистрации и сервера. Некоторые голосовые функции зависят от устройства и браузера.', madeBy:'Made with care · LingoLeaf',
      onboardingTag:'Приятно познакомиться • Nice to meet you', onboardingTitle:'Английский без лишних сложностей.', onboardingDesc:'Немного практики каждый день: слушай, говори, учись — в удобном для себя ритме.', chooseMyLanguage:'На каком языке тебе удобнее учиться?', onboardingNote:'Язык можно изменить, а новых учеников добавить в любое время.', startJourney:'Начать обучение', profileNameRequired:'Введи имя, чтобы продолжить.', backupReady:'Резервная копия сохранена.', backupLoaded:'Резервная копия восстановлена.', backupError:'Не удалось открыть файл. Проверь, что это правильная копия.', audioUnavailable:'Синтез речи недоступен в этом браузере.', offline:'Данные хранятся на устройстве', studyNow:'Начнём!', profile:'Профиль', learningLanguage:'Язык обучения', doneToday:'Отличная работа сегодня!', practice:'Практика', training:'Тренировка', sample:'Пример', welcomeAgain:'Добро пожаловать!',
      installTip:'Чтобы установить: открой сайт в браузере и выбери «Добавить на главный экран».', noActivity:'В этот день не было практики', days:'дней', notAvailable:'Пока недоступно'
    }
  };

  const svgPaths = {
    home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"/>',
    book:'<path d="M12 7v14m0-14C9 5 5 4 2 5v14c3-1 7 0 10 2m0-14c3-2 7-3 10-2v14c-3-1-7 0-10 2"/>',
    layers:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="m8 9 4-3 4 3M8 15l4 3 4-3"/>',
    chart:'<path d="M3 3v18h18M7 17v-5m5 5V7m5 10v-8"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.1 1.1-2.4 2.4-1.1-1.1a8 8 0 0 1-2.1.9V20h-3.4v-1.6a8 8 0 0 1-2.1-.9l-1.1 1.1L6 16.2l1.1-1.1a8 8 0 0 1-.9-2.1H4.6V9.6h1.6a8 8 0 0 1 .9-2.1L6 6.4 8.4 4l1.1 1.1a8 8 0 0 1 2.1-.9V2.6H15v1.6a8 8 0 0 1 2.1.9L18.2 4l2.4 2.4-1.1 1.1a8 8 0 0 1 .9 2.1H22V13h-1.6a8 8 0 0 1-1 2Z" transform="translate(-.3 .7) scale(.95)"/>',
    arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
    back:'<path d="m15 18-6-6 6-6"/>',
    sound:'<path d="M11 5 6 9H3v6h3l5 4V5Zm4 4a5 5 0 0 1 0 6m3-9a9 9 0 0 1 0 12"/>',
    mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    close:'<path d="M18 6 6 18M6 6l12 12"/>',
    chevron:'<path d="m9 18 6-6-6-6"/>',
    flame:'<path d="M12 22c5 0 8-3.2 8-7.5 0-3.6-2.2-6-3.7-7.1.3 3.1-2 3.8-2 3.8 0-4.1-1.2-6.6-4.2-9.2-.2 4.6-3.4 6.6-4.3 8.9A8 8 0 0 0 12 22Z"/>',
    star:'<path d="m12 2 3 6.5 7 .9-5.2 5 .9 7.1-5.7-3.3-5.7 3.3.9-7.1-5.2-5 7-.9L12 2Z"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users:'<circle cx="9" cy="8" r="3"/><path d="M2 20a7 7 0 0 1 14 0m1-15a3 3 0 0 1 0 6m3 9a7 7 0 0 0-3-5.6"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    download:'<path d="M12 3v12m-4-4 4 4 4-4M4 18v3h16v-3"/>',
    upload:'<path d="M12 17V5m-4 4 4-4 4 4M4 18v3h16v-3"/>',
    rotate:'<path d="M20 11a8 8 0 1 0-2 6m2-6V5m0 6h-6"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    medal:'<circle cx="12" cy="9" r="6"/><path d="m8 15-1 7 5-3 5 3-1-7"/>',
    spark:'<path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2Z"/>',
    eye:'<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    lightbulb:'<path d="M9 18h6m-5 3h4M8 15a7 7 0 1 1 8 0l-1 3H9l-1-3Z"/>',
    shield:'<path d="M12 2 4 5v6c0 5.4 3 8.5 8 11 5-2.5 8-5.6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    trash:'<path d="M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6m5 4v7m4-7v7"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4m8-4v4M3 10h18"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
    edit:'<path d="m4 20 4-.8L20 7l-3-3L5 16l-1 4ZM15 6l3 3"/>',
    headphone:'<path d="M3 14v-3a9 9 0 0 1 18 0v3m-18 0h4v7H5a2 2 0 0 1-2-2v-5Zm18 0h-4v7h2a2 2 0 0 0 2-2v-5Z"/>'
  };
  const icon = (name, size=20, extra='') => `<svg class="ic ${extra}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${svgPaths[name] || svgPaths.spark}</svg>`;
  const safe = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const initialProgress = () => ({completed:{}, words:{}, activity:{}, xp:0, totalAnswers:0, correctAnswers:0, attempts:{}});
  const load = () => { try { const obj=JSON.parse(localStorage.getItem(KEY)); if(obj&&Array.isArray(obj.profiles)&&obj.settings)return obj; } catch{} return {profiles:[],activeId:null,settings:{rate:0.88,accent:'en-US'}}; };
  let state=load();
  const ui = {view:'home', modal:null, lessonId:null, cardIndex:0, revealed:false, quiz:null, reviewQueue:[], reviewIndex:0, reviewReveal:false, lessonFilter:'all', speechStatus:'', speechText:'', newLang:'he', onboardLang:'he'};
  let recognition=null,toastTimeout=null;
  const current = () => state.profiles.find(p=>p.id===state.activeId) || state.profiles[0] || null;
  const lang = () => current() ? (current().locale === 'ru' ? 'ru' : 'he') : ui.onboardLang;
  const t = key => words[lang()]?.[key] ?? words.he[key] ?? key;
  const persist = () => { try { localStorage.setItem(KEY,JSON.stringify(state)); } catch { showToast(lang()==='ru'?'Недостаточно места для сохранения':'אין די מקום לשמירת הנתונים'); } };
  const pad = n=>String(n).padStart(2,'0');
  const dayKey = date => `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`;
  const todayKey=()=>dayKey(new Date());
  const lastSeven = () => Array.from({length:7},(_,i)=>{const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()-6+i);return {key:dayKey(d),date:d};});
  const dayOfWeek = (d) => new Intl.DateTimeFormat(lang()==='ru'?'ru-RU':'he-IL',{weekday:'short'}).format(d);
  const wordRecord = id => {const p=current().progress; if(!p.words[id])p.words[id]={known:0,due:Date.now(),seen:Date.now()}; return p.words[id];};
  const touchWord=id=>{if(!current().progress.words[id]){wordRecord(id);persist();}};
  const markWord=(id,known)=>{const r=wordRecord(id);r.known=known?Math.min(10,(r.known||0)+1):0;const days=[0,1,3,7,14,30,60];r.due=Date.now()+(known?days[Math.min(r.known,days.length-1)]*86400000:600000); persist();};
  const dueWords=()=>Object.entries(current().progress.words).filter(([id,r])=>itemMap[id] && (Number(r.due)||0)<=Date.now()).sort((a,b)=>a[1].due-b[1].due).map(([id])=>id);
  const completedCount=()=>Object.keys(current().progress.completed).length;
  const accuracy=()=>{const p=current().progress;return p.totalAnswers?Math.round(p.correctAnswers/p.totalAnswers*100):0;};
  const streak=()=>{let n=0;const p=current().progress.activity;let d=new Date();d.setHours(12,0,0,0);if(!p[dayKey(d)])d.setDate(d.getDate()-1);while(p[dayKey(d)]>0){n++;d.setDate(d.getDate()-1);}return n;};
  const todayActivity=()=>current().progress.activity[todayKey()]||0;
  const nextUnit=()=>units.find(u=>!current().progress.completed[u.id])||units[0];
  const getUnit=id=>units.find(u=>u.id===id);
  const profileInitial=name=>Array.from(String(name).trim())[0]?.toUpperCase() || 'L';
  const pct=(a,b)=>b?Math.round(a/b*100):0;
  const progressWidth=n=>Math.min(100,Math.max(0,n));
  const showToast=message=>{if(!$toast)return;$toast.textContent=message;$toast.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$toast.classList.remove('visible'),3500);};
  const logo=()=>`<div class="brand-lockup"><div class="brand-logo"><img src="./icons/icon-192.png" alt="" width="45" height="45"></div><div class="brand-text"><img class="brand-original-wordmark" src="./assets/lingoleaf-original-wordmark.png" alt="LingoLeaf" width="144" height="30"><small>${t('subtitle')}</small></div></div>`;
  const go=(view)=>{if(recognition){try{recognition.abort();}catch{}recognition=null;}ui.view=view;ui.modal=null;ui.speechStatus='';ui.speechText='';render();window.scrollTo({top:0,behavior:'instant'});};
  const newProfile=(name,locale)=>{const id='p_'+Date.now()+'_'+Math.floor(Math.random()*100000);const profile={id,name:name.trim().slice(0,40),locale,createdAt:Date.now(),progress:initialProgress()};state.profiles.push(profile);state.activeId=id;persist();ui.modal=null;go('home');};
  const brandBadge=()=>`<span class="capsule">${icon('spark',14)} LingoLeaf</span>`;

  function renderOnboard(){
    const l=ui.onboardLang;
    const text=words[l];
    return `<main class="onboard-wrap">
      <div class="onboard-art"><div class="art-dots"></div><div class="onboard-art-top"><span class="art-pill">Learn · Listen · Speak</span><div class="brand-logo jumbo"><img src="./icons/icon-192.png" alt="" width="53" height="53"></div></div><div class="art-word">Hello<span>!</span></div><div class="art-mini">${l==='ru'?'Твой английский начинается здесь':'האנגלית שלך מתחילה כאן'} <span>✦</span></div><div class="art-bubbles"><span>Hi!</span><span>How are you?</span><span>Great!</span></div></div>
      <section class="onboard-form"><div class="onboard-brand">${logo()}</div><div class="eyebrow">${safe(text.onboardingTag)}</div><h1>${safe(text.onboardingTitle)}</h1><p class="muted on-intro">${safe(text.onboardingDesc)}</p>
        <form id="onboard-form" class="stack-form"><label class="field-label">${safe(text.chooseMyLanguage)}</label><div class="language-selector"><button type="button" data-action="onboard-lang" data-lang="he" class="language-tile ${l==='he'?'selected':''}"><span class="lang-flag">🇮🇱</span><span>עברית</span>${l==='he'?icon('check',16):''}</button><button type="button" data-action="onboard-lang" data-lang="ru" class="language-tile ${l==='ru'?'selected':''}"><span class="lang-flag">🇷🇺</span><span>Русский</span>${l==='ru'?icon('check',16):''}</button></div>
        <label class="field-label" for="first-name">${safe(text.yourName)}</label><input id="first-name" name="name" class="input" maxlength="40" autocomplete="given-name" placeholder="${safe(text.namePlaceholder)}" required>
        <button type="submit" class="btn btn-primary btn-lg full">${safe(text.startJourney)} ${icon('arrow',19)}</button></form><p class="fine-print">${safe(text.onboardingNote)}</p>
      </section></main>`;
  }

  function renderShell(){
    const p=current();const active=ui.view;
    const navItems=[['home','home','today'],['lessons','book','lessons'],['review','layers','review'],['progress','chart','progress'],['settings','settings','settings']];
    return `<div class="app-shell">
      <header class="site-header"><div class="header-inner"><button class="unbutton brand-click" data-action="go" data-view="home" aria-label="LingoLeaf home">${logo()}</button><div class="header-actions"><div class="header-streak" title="${safe(t('streak'))}">${icon('flame',17)} <b>${streak()}</b></div><button class="profile-chip" data-action="profiles" aria-label="${safe(t('changeUser'))}"><span class="avatar">${safe(profileInitial(p.name))}</span><span class="profile-name">${safe(p.name)}</span>${icon('chevron',15)}</button></div></div></header>
      <div class="shell-body"><aside class="desktop-sidebar"><nav aria-label="Primary navigation" class="side-nav">${navItems.map(([v,i,k])=>`<button class="side-link ${active===v?'active':''}" data-action="go" data-view="${v}">${icon(i,19)}<span>${safe(t(k))}</span></button>`).join('')}</nav><div class="sidebar-foot">${icon('shield',17)}<span>${safe(t('offline'))}</span></div></aside>
      <main id="main-content" class="page-content">${renderPage()}</main></div>
      <nav class="bottom-nav" aria-label="Bottom navigation">${navItems.map(([v,i,k])=>`<button class="bottom-link ${active===v?'active':''}" data-action="go" data-view="${v}" aria-current="${active===v?'page':'false'}">${icon(i,22)}<span>${safe(t(k))}</span></button>`).join('')}</nav>
      ${ui.modal?renderModal():''}
    </div>`;
  }
  const renderPage=()=>({home:renderHome,lessons:renderLessons,lesson:renderLesson,quiz:renderQuiz,review:renderReview,progress:renderProgress,settings:renderSettings})[ui.view]?.()||renderHome();
  function renderHome(){
    const p=current(), next=nextUnit(), done=completedCount(), goal=Math.min(100,todayActivity()/8*100), mastered=Object.values(p.progress.words).filter(w=>(w.known||0)>=2).length;
    const shown=[next,...units.filter(u=>u.id!==next.id && !p.progress.completed[u.id]).slice(0,2)];
    return `<section class="hello-row"><div><div class="eyebrow">${safe(t('welcome'))}</div><h1>${safe(t('hello'))}, ${safe(p.name)} <span class="wave">✳</span></h1><p class="muted">${safe(t('nice'))}</p></div><span class="date-pill">${icon('calendar',16)} ${new Intl.DateTimeFormat(lang()==='ru'?'ru-RU':'he-IL',{day:'numeric',month:'long'}).format(new Date())}</span></section>
      <section class="hero-card"><div class="hero-content"><div class="eyebrow hero-kicker">${icon('spark',15)} ${safe(t('heroEyebrow'))}</div><h2>${safe(t('heroTitle'))}<br><span>${safe(t('heroTitle2'))}</span></h2><p>${safe(t('heroDesc'))}</p><button class="btn btn-bright" data-action="open-lesson" data-id="${next.id}">${done?t('resume'):t('startCourse')} ${icon('arrow',19)}</button></div><div class="hero-illustration" aria-hidden="true"><div class="leaf-orbit one">✦</div><div class="leaf-orbit two">✳</div><div class="hero-speech">How are you<span>?</span></div><div class="hero-small-speech">I'm great!</div><div class="hero-circles"></div></div></section>
      <section class="stat-strip"><div class="stat-tile"><div class="stat-icon green">${icon('target',20)}</div><b>${done}<small>/${units.length}</small></b><span>${safe(t('doneLessons'))}</span></div><div class="stat-tile"><div class="stat-icon orange">${icon('flame',20)}</div><b>${streak()}<small> ${safe(t('day'))}</small></b><span>${safe(t('streak'))}</span></div><div class="stat-tile"><div class="stat-icon purple">${icon('star',20)}</div><b>${p.progress.xp}</b><span>${safe(t('xp'))}</span></div></section>
      <section class="daily-card"><div class="daily-icon">${icon('target',23)}</div><div class="daily-main"><div class="section-minor"><b>${safe(t('todayGoal'))}</b><span>${Math.min(8,todayActivity())}/8 ${safe(t('sentences'))}</span></div><div class="track"><span style="width:${goal}%"></span></div><div class="tiny muted">${safe(goal>=100?t('doneToday'):t('progressToday'))}</div></div></section>
      <section class="section-stack"><div class="section-heading"><h2>${safe(t('yourPath'))}</h2><button class="text-link" data-action="go" data-view="lessons">${safe(t('viewAll'))} ${icon('chevron',16)}</button></div><div class="lesson-mini-list">${shown.map(u=>lessonMini(u)).join('')}</div></section>
      <section class="quick-grid"><div class="quick-card q-mint"><div class="quick-top">${icon('headphone',24)}<span class="chip">${safe(t('practice'))}</span></div><h3>${safe(t('dailyPractice'))}</h3><p>${safe(t('dailyPracticeDesc'))}</p><button class="btn btn-dark" data-action="quick-quiz">${safe(t('beginPractice'))} ${icon('arrow',17)}</button></div><div class="quick-card q-lavender"><div class="quick-top">${icon('layers',24)}<span class="chip">${dueWords().length} ${safe(t('phrases'))}</span></div><h3>${safe(t('reviewWords'))}</h3><p>${safe(t('reviewDesc'))}</p><button class="btn btn-outline" data-action="go" data-view="review">${safe(t('goReview'))} ${icon('arrow',17)}</button></div></section>
      <div class="page-footer">${safe(t('madeBy'))}</div>`;
  }
  function lessonMini(unit){
    const completed=current().progress.completed[unit.id];const attempts=current().progress.attempts[unit.id]||0;
    return `<button class="lesson-mini" data-action="open-lesson" data-id="${unit.id}"><span class="lesson-emoji" style="background:${unit.color}">${unit.emoji}</span><span class="lesson-mini-body"><b>${safe(unit.title[lang()])}</b><small>${unit.level} · ${unit.items.length} ${safe(t('phrases'))}</small></span><span class="lesson-status ${completed?'is-done':attempts?'is-progress':''}">${completed?icon('check',17):icon('chevron',19)}</span></button>`;
  }
  function renderLessons(){
    const filtered=units.filter(u=>ui.lessonFilter==='all'||u.level===ui.lessonFilter);
    return `<div class="page-head"><div class="eyebrow">${safe(t('yourPath'))}</div><h1>${safe(t('lessons'))}</h1><p class="muted">${units.length} ${safe(t('lessons'))} · ${allItems.length} ${safe(t('phrases'))} · A1–B2</p></div><div class="filter-tabs" role="group" aria-label="${safe(t('level'))}">${[['all',t('all')],['A1',t('basic')+' · A1'],['A2',t('nextLevel')+' · A2'],['B1','B1 · '+(lang()==='ru'?'Средний уровень':'בינוני')],['B2','B2 · '+(lang()==='ru'?'Продвинутый':'מתקדמים')]].map(([id,label])=>`<button class="filter-btn ${ui.lessonFilter===id?'active':''}" data-action="filter" data-filter="${id}">${safe(label)}</button>`).join('')}</div>
      <div class="lessons-grid">${filtered.map((u)=>{const completed=current().progress.completed[u.id],attempts=current().progress.attempts[u.id]||0;return `<button class="unit-card" data-action="open-lesson" data-id="${u.id}"><div class="unit-cover" style="background:${u.color}"><span class="unit-cover-emoji">${u.emoji}</span><span class="unit-level">${u.level}</span></div><div class="unit-body"><div class="unit-title-row"><h3>${safe(u.title[lang()])}</h3>${completed?`<span class="unit-check">${icon('check',17)}</span>`:''}</div><p>${safe(u.subtitle[lang()])}</p><div class="unit-meta"><span>${icon('book',15)} ${u.items.length} ${safe(t('phrases'))}</span><span class="unit-badge">${safe(completed?t('completed'):attempts?t('inProgress'):t('notStarted'))}</span></div></div></button>`}).join('')}</div>`;
  }
  function openLesson(id){if(!getUnit(id))return;ui.lessonId=id;ui.cardIndex=0;ui.revealed=false;ui.speechStatus='';ui.speechText='';go('lesson');}
  function renderLesson(){
    const unit=getUnit(ui.lessonId)||units[0];const item=unit.items[ui.cardIndex];
    return `<div class="crumb"><button class="back-btn" data-action="go" data-view="lessons">${icon('back',19)} ${safe(t('lessons'))}</button><span>${unit.level} · ${safe(unit.title[lang()])}</span></div>
      <div class="lesson-head"><div class="lesson-banner" style="background:${unit.color}">${unit.emoji}</div><div><div class="eyebrow">${safe(t('lessonOverview'))} · ${unit.level}</div><h1>${safe(unit.title[lang()])}</h1><p class="muted">${safe(unit.subtitle[lang()])}</p></div></div>
      <div class="lesson-layout"><div class="lesson-main"><div class="card-counter"><span>${String(ui.cardIndex+1).padStart(2,'0')} / ${unit.items.length}</span><span>${safe(t('phrases'))}</span></div><div class="track lesson-track"><span style="width:${pct(ui.cardIndex+1,unit.items.length)}%"></span></div>
      <article class="flashcard"><span class="word-label">ENGLISH · ${unit.level}</span><div class="flashcard-center"><h2 dir="ltr" lang="en">${safe(item.en)}</h2><button class="sound-button" data-action="speak" data-text="${safe(item.en)}" aria-label="${safe(t('listen'))}">${icon('sound',25)}<span>${safe(t('listen'))}</span></button></div><div class="flashcard-translation ${ui.revealed?'revealed':''}">${ui.revealed?`<p lang="${lang()}">${safe(item[lang()])}</p>`:`<button class="reveal-link" data-action="reveal">${icon('eye',18)} ${safe(t('showTranslation'))}</button>`}</div></article>
      <div class="card-actions"><button class="btn btn-subtle" data-action="prev-card" ${ui.cardIndex===0?'disabled':''}>${icon('back',17)} ${safe(t('previous'))}</button><button class="btn btn-primary" data-action="next-card">${ui.cardIndex===unit.items.length-1?t('startQuiz'):t('nextCard')} ${icon('arrow',19)}</button></div>
      <div class="practice-actions"><button class="outline-action" data-action="open-speaking">${icon('mic',19)} ${safe(t('speak'))}</button><button class="outline-action" data-action="start-quiz" data-id="${unit.id}">${icon('target',19)} ${safe(t('practiceNow'))}</button></div>
      </div><aside class="lesson-side"><div class="tip-card"><div class="tip-icon">${icon('lightbulb',22)}</div><h3>${safe(t('grammarTip'))}</h3><p>${safe(unit.tip[lang()])}</p></div><div class="lesson-side-illus"><div>✦</div><span>Small steps,<br>big progress.</span></div></aside></div>`;
  }
  function normalizeAnswer(str){return String(str||'').toLowerCase().normalize('NFKC').replace(/[’‘]/g,"'")
    .replace(/\bi'm\b/g,'i am').replace(/\byou're\b/g,'you are').replace(/\bwe're\b/g,'we are').replace(/\bthey're\b/g,'they are')
    .replace(/\bit's\b/g,'it is').replace(/\bi'll\b/g,'i will').replace(/\bwon't\b/g,'will not').replace(/\bdon't\b/g,'do not').replace(/\bdoesn't\b/g,'does not').replace(/\bdidn't\b/g,'did not')
    .replace(/\bcan't\b/g,'cannot').replace(/\blet's\b/g,'let us').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();}
  const randomize=a=>{const arr=[...a];for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;};
  function makeQuiz(id,quick=false){
    const unit=getUnit(id)||units[0];
    const learned=Object.keys(current().progress.words).map(id=>itemMap[id]).filter(Boolean);
    let selected=quick?randomize(learned.length>=4?learned:unit.items).slice(0,8):unit.items;
    const types=['choice','listen','write','choose-en','listen','choice','write','choose-en'];
    const questions=selected.map((item,i)=>{
      const mode=types[i%types.length];const pool=(quick?allItems:unit.items).filter(other=>other.id!==item.id);const wrong=randomize(pool).filter(other=>other.en!==item.en&&other[lang()]!==item[lang()]).slice(0,3);
      const options=randomize([item,...wrong]);
      return {itemId:item.id,mode,options:options.map(o=>o.id)};
    });
    ui.quiz={unitId:id,quick,questions,index:0,score:0,answered:false,userAnswer:null,correct:false,done:false};go('quiz');
  }
  function recordAnswer(itemId,correct){
    const p=current().progress;p.totalAnswers++;if(correct){p.correctAnswers++;p.xp+=10;}else p.xp+=2;
    p.activity[todayKey()]=(p.activity[todayKey()]||0)+1;
    markWord(itemId,correct);
  }
  function submitAnswer(value){
    const q=ui.quiz;if(!q||q.answered||q.done)return;
    const question=q.questions[q.index],item=itemMap[question.itemId];
    const correct=question.mode==='write'?normalizeAnswer(value)===normalizeAnswer(item.en):String(value)===item.id;
    q.answered=true;q.userAnswer=value;q.correct=correct;if(correct)q.score++;
    recordAnswer(item.id,correct);render();
  }
  function advanceQuiz(){const q=ui.quiz;if(!q||!q.answered)return;
    if(q.index===q.questions.length-1){q.done=true;const p=current().progress;if(!q.quick){const previous=p.completed[q.unitId];p.completed[q.unitId]={best:Math.max(q.score,previous?.best||0),last:q.score,finishedAt:Date.now()};p.attempts[q.unitId]=(p.attempts[q.unitId]||0)+1;p.xp+=30;}persist();}
    else{q.index++;q.answered=false;q.correct=false;q.userAnswer=null;}render();
  }
  function renderQuiz(){
    const q=ui.quiz;if(!q)return renderLessons();
    if(q.done)return renderQuizDone(q);
    const question=q.questions[q.index],item=itemMap[question.itemId];
    const heading=question.mode==='listen'?t('listenAndChoose'):question.mode==='write'?t('writeEnglish'):question.mode==='choose-en'?t('selectEnglish'):t('selectCorrect');
    const enPrompt=question.mode==='choice'?`<h2 dir="ltr" lang="en">${safe(item.en)}</h2>`:question.mode==='listen'?`<div class="listen-figure">${icon('headphone',39)}<div class="sound-wave"><i></i><i></i><i></i><i></i><i></i></div></div><button class="btn btn-primary listen-btn" data-action="speak" data-text="${safe(item.en)}">${icon('sound',20)} ${safe(t('listenAgain'))}</button>`:`<h2 class="translated-prompt">${safe(item[lang()])}</h2>`;
    const answerArea=question.mode==='write'?`<form id="write-answer-form"><input class="input writing-input" id="english-answer" placeholder="${safe(t('enterAnswer'))}" ${q.answered?'disabled':''} dir="ltr" lang="en" spellcheck="false" autocomplete="off" autocapitalize="sentences"><p class="tiny muted">${safe(t('writeHint'))}</p>${!q.answered?`<button class="btn btn-primary full quiz-check" type="submit">${safe(t('check'))} ${icon('check',18)}</button>`:''}</form>`:
      `<div class="choices-grid">${question.options.map((id,i)=>{const o=itemMap[id];const text=question.mode==='choose-en'?o.en:o[lang()];const selected=q.userAnswer===id;const right=id===item.id;return `<button class="choice ${q.answered?(right?'correct':selected?'wrong':''):''}" data-action="answer" data-id="${safe(id)}" ${q.answered?'disabled':''}><span class="choice-letter">${['A','B','C','D'][i]}</span><span dir="${question.mode==='choose-en'?'ltr':'auto'}" ${question.mode==='choose-en'?'lang="en"':''}>${safe(text)}</span>${q.answered&&right?icon('check',17):''}</button>`;}).join('')}</div>`;
    return `<div class="quiz-page"><div class="crumb"><button class="back-btn" data-action="go" data-view="${q.quick?'home':'lesson'}">${icon('back',19)} ${safe(t('previous'))}</button><span>${safe(t('training'))}</span></div>
      <div class="quiz-topline"><span class="eyebrow">${safe(t('practice'))} ${q.quick?'· '+t('dailyPractice'):'· '+safe(getUnit(q.unitId).title[lang()])}</span><b>${q.index+1} / ${q.questions.length}</b></div><div class="track"><span style="width:${pct(q.index+(q.answered?1:0),q.questions.length)}%"></span></div>
      <div class="quiz-panel"><div class="question-head"><span class="question-index">${String(q.index+1).padStart(2,'0')}</span><h1>${safe(heading)}</h1></div><div class="question-content">${enPrompt}</div>${answerArea}
      ${q.answered?`<div class="feedback ${q.correct?'feedback-good':'feedback-bad'}"><div class="feedback-title">${icon(q.correct?'check':'info',19)} <b>${safe(t(q.correct?'correct':'incorrect'))}</b></div><div>${safe(t('rightAnswer'))}: <strong dir="ltr" lang="en">${safe(item.en)}</strong></div><div class="tiny">${safe(item[lang()])}</div></div><button class="btn btn-primary full continue-btn" data-action="next-question">${safe(t('nextQuestion'))} ${icon('arrow',18)}</button>`:''}</div></div>`;
  }
  function renderQuizDone(q){
    const p=Math.round(q.score/q.questions.length*100);
    return `<div class="result-page"><div class="result-glow">✦</div><div class="result-medal">${icon('medal',51)}</div><div class="eyebrow">${safe(t('quizDone'))}</div><h1>${q.score} <span>/ ${q.questions.length}</span></h1><p>${safe(t('quizResult'))} ${q.score} ${safe(t('of'))} ${q.questions.length} · ${p}%</p><div class="result-progress"><div class="result-ring" style="--percent:${p}"><div>${p}%</div></div></div><div class="result-actions"><button class="btn btn-primary full" data-action="go" data-view="home">${safe(t('finish'))} ${icon('arrow',18)}</button><button class="btn btn-outline full" data-action="repeat-quiz">${icon('rotate',18)} ${safe(t('repeatQuiz'))}</button><button class="text-link centered" data-action="go" data-view="lessons">${safe(t('goToLessons'))}</button></div></div>`;
  }
  function startReview(){ui.reviewQueue=dueWords().slice(0,24);ui.reviewIndex=0;ui.reviewReveal=false;}
  function renderReview(){
    if(ui.reviewQueue.length===0||ui.reviewIndex>=ui.reviewQueue.length){
      const done=ui.reviewIndex>0;
      return `<div class="page-head"><div class="eyebrow">${safe(t('reviewTitle'))}</div><h1>${safe(t('review'))}</h1><p class="muted">${safe(t('reviewSubtitle'))}</p></div><div class="empty-state"><div class="empty-illustration">${done?'🏆':'🌱'}</div><h2>${safe(t(done?'reviewFinished':'noReview'))}</h2><p>${safe(t(done?'reviewFinishedDesc':'noReviewDesc'))}</p><button class="btn btn-primary" data-action="go" data-view="${done?'home':'lessons'}">${safe(t(done?'continueLearning':'exploreLessons'))} ${icon('arrow',18)}</button></div>`;
    }
    const item=itemMap[ui.reviewQueue[ui.reviewIndex]];
    return `<div class="page-head"><div class="eyebrow">${safe(t('reviewTitle'))}</div><h1>${safe(t('review'))}</h1><p class="muted">${safe(t('reviewSubtitle'))}</p></div><div class="review-wrap"><div class="review-counter">${ui.reviewIndex+1} / ${ui.reviewQueue.length}</div><div class="track"><span style="width:${pct(ui.reviewIndex,ui.reviewQueue.length)}%"></span></div>
      <div class="review-flipcard"><div class="eyebrow">ENGLISH</div><h2 dir="ltr" lang="en">${safe(item.en)}</h2><button class="sound-button" data-action="speak" data-text="${safe(item.en)}">${icon('sound',23)} ${safe(t('listen'))}</button><div class="review-translation">${ui.reviewReveal?`<h3>${safe(item[lang()])}</h3>`:`<button class="reveal-link" data-action="review-reveal">${icon('eye',19)} ${safe(t('showTranslation'))}</button>`}</div></div>
      ${ui.reviewReveal?`<div class="review-buttons"><button class="btn btn-soft-red" data-action="review-mark" data-known="false">${icon('rotate',18)} ${safe(t('again'))}</button><button class="btn btn-primary" data-action="review-mark" data-known="true">${icon('check',18)} ${safe(t('iKnew'))}</button></div>`:`<p class="muted center small">${safe(t('flipCard'))}</p>`}</div>`;
  }
  function renderProgress(){
    const p=current().progress, done=completedCount(), mastered=Object.values(p.words).filter(w=>(w.known||0)>=2).length;
    const awards=[['star',t('firstStep'),done>0],['book',t('fiveLessons'),done>=5],['layers',t('tenWords'),mastered>=10],['flame',t('threeDays'),streak()>=3]];
    const week=lastSeven(),max=Math.max(8,...week.map(d=>p.activity[d.key]||0));
    return `<div class="page-head"><div class="eyebrow">${safe(t('progressTitle'))}</div><h1>${safe(t('progress'))}</h1><p class="muted">${safe(t('progressSubtitle'))}</p></div>
      <div class="metrics-grid"><div class="metric-card"><span class="metric-icon mint">${icon('book',21)}</span><b>${done}<small> / ${units.length}</small></b><span>${safe(t('doneLessons'))}</span></div><div class="metric-card"><span class="metric-icon violet">${icon('target',21)}</span><b>${accuracy()}<small>%</small></b><span>${safe(t('accuracy'))}</span></div><div class="metric-card"><span class="metric-icon apricot">${icon('flame',21)}</span><b>${streak()}</b><span>${safe(t('streak'))}</span></div><div class="metric-card"><span class="metric-icon sky">${icon('layers',21)}</span><b>${mastered}</b><span>${safe(t('mastered'))}</span></div></div>
      <section class="insights-card"><div class="section-heading"><h2>${safe(t('thisWeek'))}</h2><span class="insight-total">${week.reduce((sum,d)=>sum+(p.activity[d.key]||0),0)} ${safe(t('practiced'))}</span></div><div class="week-chart">${week.map(d=>{const count=p.activity[d.key]||0;const h=Math.max(6,Math.round(count/max*100));return `<div class="week-col" title="${safe(dayOfWeek(d.date))}: ${count}"><span class="week-number">${count||''}</span><div class="week-bar-track"><div class="week-bar ${d.key===todayKey()?'today-bar':''}" style="height:${h}%"></div></div><span class="week-label">${safe(dayOfWeek(d.date))}</span></div>`;}).join('')}</div></section>
      <section class="section-stack"><h2 class="section-alone">${safe(t('yourAchievements'))}</h2><div class="achievements">${awards.map(([ic,label,ok])=>`<div class="achievement ${ok?'unlocked':''}"><span class="award-icon">${icon(ic,24)}</span><b>${safe(label)}</b>${ok?`<span class="award-check">${icon('check',13)}</span>`:''}</div>`).join('')}</div></section>
      <section class="section-stack"><h2 class="section-alone">${safe(t('recentLessons'))}</h2><div class="lesson-mini-list">${units.filter(u=>p.completed[u.id]).length?units.filter(u=>p.completed[u.id]).map(u=>lessonMini(u)).join(''):`<div class="empty-mini">${safe(t('noProgress'))}</div>`}</div></section>`;
  }
  function renderSettings(){
    const profile=current(),speed=state.settings.rate,accent=state.settings.accent;
    return `<div class="page-head"><div class="eyebrow">${safe(t('settingsSubtitle'))}</div><h1>${safe(t('settings'))}</h1><p class="muted">${safe(t('settingsSubtitle'))}</p></div>
      <div class="settings-layout"><div class="setting-panel"><div class="settings-section-title">${icon('users',20)} <h2>${safe(t('learners'))}</h2></div><button class="profile-setting" data-action="profiles"><span class="avatar large">${safe(profileInitial(profile.name))}</span><span class="profile-setting-name"><b>${safe(profile.name)}</b><small>${profile.locale==='he'?'🇮🇱 עברית':'🇷🇺 Русский'}</small></span><span class="link-mini">${safe(t('changeUser'))} ${icon('chevron',16)}</span></button><button class="subtle-row" data-action="add-profile">${icon('plus',18)} ${safe(t('addLearner'))}</button></div>
      <div class="setting-panel"><div class="settings-section-title">${icon('book',20)} <h2>${safe(t('chooseLanguage'))}</h2></div><p class="setting-description">${safe(t('languageNote'))}</p><div class="language-selector setting-languages"><button data-action="change-lang" data-lang="he" class="language-tile ${profile.locale==='he'?'selected':''}"><span class="lang-flag">🇮🇱</span><span>עברית</span>${profile.locale==='he'?icon('check',16):''}</button><button data-action="change-lang" data-lang="ru" class="language-tile ${profile.locale==='ru'?'selected':''}"><span class="lang-flag">🇷🇺</span><span>Русский</span>${profile.locale==='ru'?icon('check',16):''}</button></div></div>
      <div class="setting-panel"><div class="settings-section-title">${icon('headphone',20)} <h2>${safe(t('sound'))}</h2></div><div class="settings-label">${safe(t('soundSpeed'))}</div><div class="segment-group">${[[0.72,t('slow')],[0.88,t('normal')],[1.08,t('fast')]].map(([n,label])=>`<button class="segment ${Math.abs(speed-n)<.01?'active':''}" data-action="rate" data-rate="${n}">${safe(label)}</button>`).join('')}</div><div class="settings-label">${safe(t('accent'))}</div><div class="segment-group">${[['en-US',t('american')],['en-GB',t('british')]].map(([id,label])=>`<button class="segment ${accent===id?'active':''}" data-action="accent" data-accent="${id}">${safe(label)}</button>`).join('')}</div><button class="subtle-row" data-action="speak" data-text="Hello! Welcome to LingoLeaf.">${icon('sound',18)} ${safe(t('testSound'))}</button></div>
      <div class="setting-panel"><div class="settings-section-title">${icon('shield',20)} <h2>${safe(t('backup'))}</h2></div><p class="setting-description">${safe(t('backupDesc'))}</p><div class="backup-buttons"><button class="btn btn-outline" data-action="export">${icon('download',18)} ${safe(t('export'))}</button><button class="btn btn-outline" data-action="import">${icon('upload',18)} ${safe(t('import'))}</button></div><button class="danger-link" data-action="reset">${icon('rotate',16)} ${safe(t('reset'))}</button><button class="danger-link" data-action="delete-profile">${icon('trash',16)} ${safe(t('deleteProfile'))}</button></div>
      <div class="setting-panel info-panel"><img class="about-brand-image" src="./assets/lingoleaf-original-full.png" alt="LingoLeaf" loading="lazy"><div class="settings-section-title">${icon('info',20)} <h2>${safe(t('about'))}</h2></div><p class="setting-description">${safe(t('aboutText'))}</p><p class="setting-description">${safe(t('installTip'))}</p><small>${safe(t('madeBy'))}</small></div></div>`;
  }
  function renderModal(){
    if(ui.modal==='profiles'){
      return `<div class="modal-scrim" data-action="close-modal"><section class="modal-sheet" role="dialog" aria-modal="true" aria-label="${safe(t('learners'))}"><div class="modal-top"><h2>${safe(t('learners'))}</h2><button class="icon-button" data-action="close-modal">${icon('close',20)}</button></div><div class="profile-options">${state.profiles.map(p=>`<button class="profile-option ${p.id===state.activeId?'selected':''}" data-action="switch-profile" data-id="${safe(p.id)}"><span class="avatar">${safe(profileInitial(p.name))}</span><span><b>${safe(p.name)}</b><small>${p.locale==='he'?'🇮🇱 עברית':'🇷🇺 Русский'}</small></span>${p.id===state.activeId?`<span class="profile-check">${icon('check',18)}</span>`:''}</button>`).join('')}</div><button class="btn btn-primary full" data-action="add-profile">${icon('plus',18)} ${safe(t('addLearner'))}</button></section></div>`;
    }
    if(ui.modal==='add-profile'){
      return `<div class="modal-scrim" data-action="close-modal"><section class="modal-sheet" role="dialog" aria-modal="true" aria-label="${safe(t('addLearner'))}"><div class="modal-top"><h2>${safe(t('addLearner'))}</h2><button class="icon-button" data-action="close-modal">${icon('close',20)}</button></div><form id="new-profile-form" class="stack-form"><label class="field-label" for="new-name">${safe(t('yourName'))}</label><input id="new-name" class="input" name="name" maxlength="40" placeholder="${safe(t('namePlaceholder'))}" required><label class="field-label">${safe(t('chooseLanguage'))}</label><div class="language-selector"><button type="button" class="language-tile ${ui.newLang==='he'?'selected':''}" data-action="new-lang" data-lang="he">🇮🇱 עברית ${ui.newLang==='he'?icon('check',16):''}</button><button type="button" class="language-tile ${ui.newLang==='ru'?'selected':''}" data-action="new-lang" data-lang="ru">🇷🇺 Русский ${ui.newLang==='ru'?icon('check',16):''}</button></div><button class="btn btn-primary full btn-lg" type="submit">${safe(t('create'))} ${icon('arrow',18)}</button></form></section></div>`;
    }
    if(ui.modal==='speaking'){
      const unit=getUnit(ui.lessonId),item=unit?.items[ui.cardIndex];
      if(!item)return '';
      const supported=!!(window.SpeechRecognition||window.webkitSpeechRecognition);
      return `<div class="modal-scrim" data-action="close-modal"><section class="modal-sheet speech-modal" role="dialog" aria-modal="true" aria-label="${safe(t('speakTitle'))}"><div class="modal-top"><h2>${safe(t('speakTitle'))}</h2><button class="icon-button" data-action="close-modal">${icon('close',20)}</button></div><p class="muted">${safe(t('speakPrompt'))}</p><div class="speak-sentence" dir="ltr" lang="en">${safe(item.en)}</div><button class="btn btn-outline full" data-action="speak" data-text="${safe(item.en)}">${icon('sound',20)} ${safe(t('listen'))}</button><button class="btn btn-primary full" data-action="mic" ${!supported?'disabled':''}>${icon('mic',20)} ${safe(ui.speechStatus==='listening'?t('listening'):t('startMic'))}</button>${!supported?`<p class="tiny muted">${safe(t('micUnsupported'))}</p>`:''}${ui.speechStatus==='error'?`<p class="tiny error-msg">${safe(t('micPermission'))}</p>`:''}${ui.speechText?`<div class="recognized"><span>${safe(t('speechHeard'))}</span><b dir="ltr">${safe(ui.speechText)}</b><p>${safe(normalizeAnswer(ui.speechText)===normalizeAnswer(item.en)?t('speechGood'):t('speechTry'))}</p><small>${safe(t('speechNote'))}</small></div>`:''}</section></div>`;
    }
    return '';
  }

  function speak(text){
    if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){showToast(t('audioUnavailable'));return;}
    window.speechSynthesis.cancel();
    const utter=new SpeechSynthesisUtterance(text);
    utter.lang=state.settings.accent;utter.rate=state.settings.rate;utter.pitch=1;
    const available=window.speechSynthesis.getVoices();
    const exact=available.find(v=>v.lang.toLowerCase()===state.settings.accent.toLowerCase() && v.localService);
    const fallback=available.find(v=>v.lang.toLowerCase()===state.settings.accent.toLowerCase())||available.find(v=>v.lang.toLowerCase().startsWith('en'));
    if(exact||fallback)utter.voice=exact||fallback;
    window.speechSynthesis.speak(utter);
  }
  function startMic(){
    const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!Speech){showToast(t('micUnsupported'));return;}
    if(recognition){try{recognition.abort();}catch{}recognition=null;}
    try{
      const recog=new Speech();recognition=recog;recog.lang=state.settings.accent;recog.interimResults=false;recog.continuous=false;recog.maxAlternatives=1;
      recog.onresult=e=>{ui.speechText=e.results?.[0]?.[0]?.transcript||'';ui.speechStatus='done';recognition=null;render();};
      recog.onerror=()=>{ui.speechStatus='error';recognition=null;render();};
      recog.onend=()=>{if(ui.speechStatus==='listening'){ui.speechStatus='';render();}recognition=null;};
      ui.speechText='';ui.speechStatus='listening';render();recog.start();
    }catch{ui.speechStatus='error';recognition=null;render();}
  }
  function exportBackup(){
    const json=JSON.stringify({format:'lingoleaf-v1',exportedAt:new Date().toISOString(),state},null,2);
    const blob=new Blob([json],{type:'application/json'});const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download=`lingoleaf-backup-${todayKey()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);showToast(t('backupReady'));
  }
  async function importBackup(file){
    if(!file)return;
    try{
      if(file.size>2000000)throw new Error('large');const obj=JSON.parse(await file.text());const payload=obj.state;
      if(obj.format!=='lingoleaf-v1'||!payload||!Array.isArray(payload.profiles)||payload.profiles.length>30||!payload.settings)throw new Error('bad format');
      if(!payload.profiles.every(p=>p&&typeof p.id==='string'&&typeof p.name==='string'&&p.name.length<=100&&['he','ru'].includes(p.locale)&&p.progress&&typeof p.progress==='object'))throw new Error('bad profile');
      if(!confirm(t('importConfirm')))return;
      state={profiles:payload.profiles,activeId:payload.activeId,settings:{rate:[.72,.88,1.08].includes(Number(payload.settings.rate))?Number(payload.settings.rate):.88,accent:['en-US','en-GB'].includes(payload.settings.accent)?payload.settings.accent:'en-US'}};
      for(const p of state.profiles){p.progress={...initialProgress(),...p.progress};if(!p.progress.words||typeof p.progress.words!=='object')p.progress.words={};if(!p.progress.activity||typeof p.progress.activity!=='object')p.progress.activity={};if(!p.progress.completed||typeof p.progress.completed!=='object')p.progress.completed={};}
      if(!current()&&state.profiles.length)state.activeId=state.profiles[0].id;
      persist();go('home');showToast(t('backupLoaded'));
    }catch(err){console.warn('Invalid backup',err);showToast(t('backupError'));}
    finally{$file.value='';}
  }

  function render(){
    const p=current();if(p&&!state.activeId){state.activeId=p.id;persist();}
    const l=lang();document.documentElement.lang=l;document.documentElement.dir=l==='he'?'rtl':'ltr';
    document.title='LingoLeaf · '+words[l].subtitle;
    $app.innerHTML=p?renderShell():renderOnboard();
  }
  document.addEventListener('click', event=>{
    const btn=event.target.closest('[data-action]');if(!btn)return;
    const action=btn.dataset.action;
    if(action==='close-modal' && btn.classList.contains('modal-scrim') && event.target!==btn)return;
    switch(action){
      case 'go': if(btn.dataset.view==='review')startReview();go(btn.dataset.view);break;
      case 'onboard-lang':{const field=document.getElementById('first-name');const name=field?.value||'';ui.onboardLang=btn.dataset.lang;render();const repl=document.getElementById('first-name');if(repl)repl.value=name;break;}
      case 'open-lesson':openLesson(btn.dataset.id);break;
      case 'filter':ui.lessonFilter=btn.dataset.filter;render();break;
      case 'reveal':ui.revealed=true;touchWord(getUnit(ui.lessonId).items[ui.cardIndex].id);render();break;
      case 'next-card':{const unit=getUnit(ui.lessonId);touchWord(unit.items[ui.cardIndex].id);if(ui.cardIndex>=unit.items.length-1){makeQuiz(unit.id);break;}ui.cardIndex++;ui.revealed=false;render();break;}
      case 'prev-card':if(ui.cardIndex>0){ui.cardIndex--;ui.revealed=false;render();}break;
      case 'speak':speak(btn.dataset.text||'');break;
      case 'open-speaking':ui.speechStatus='';ui.speechText='';ui.modal='speaking';render();break;
      case 'mic':startMic();break;
      case 'start-quiz':makeQuiz(btn.dataset.id);break;
      case 'quick-quiz':makeQuiz(nextUnit().id,true);break;
      case 'answer':submitAnswer(btn.dataset.id);break;
      case 'next-question':advanceQuiz();break;
      case 'repeat-quiz':makeQuiz(ui.quiz.unitId,ui.quiz.quick);break;
      case 'review-reveal':ui.reviewReveal=true;render();break;
      case 'review-mark':markWord(ui.reviewQueue[ui.reviewIndex],btn.dataset.known==='true');current().progress.activity[todayKey()]=(current().progress.activity[todayKey()]||0)+1;persist();ui.reviewIndex++;ui.reviewReveal=false;render();break;
      case 'profiles':ui.modal='profiles';render();break;
      case 'close-modal':if(recognition){try{recognition.abort();}catch{}recognition=null;}ui.modal=null;render();break;
      case 'add-profile':ui.newLang=lang();ui.modal='add-profile';render();break;
      case 'new-lang':{const name=document.getElementById('new-name')?.value||'';ui.newLang=btn.dataset.lang;render();const input=document.getElementById('new-name');if(input)input.value=name;break;}
      case 'switch-profile':state.activeId=btn.dataset.id;persist();go('home');break;
      case 'change-lang':current().locale=btn.dataset.lang;persist();render();break;
      case 'rate':state.settings.rate=Number(btn.dataset.rate);persist();render();break;
      case 'accent':state.settings.accent=btn.dataset.accent;persist();render();break;
      case 'export':exportBackup();break;
      case 'import':$file.click();break;
      case 'reset':if(confirm(t('resetConfirm'))){current().progress=initialProgress();persist();render();}break;
      case 'delete-profile':if(!confirm(t('deleteConfirm')))break;state.profiles=state.profiles.filter(p=>p.id!==current().id);state.activeId=state.profiles[0]?.id||null;persist();go('home');break;
    }
  });
  document.addEventListener('submit',event=>{
    if(event.target.id==='onboard-form'){
      event.preventDefault();const name=(new FormData(event.target).get('name')||'').trim();if(!name){showToast(t('profileNameRequired'));return;}newProfile(name,ui.onboardLang);
    } else if(event.target.id==='new-profile-form'){
      event.preventDefault();const name=(new FormData(event.target).get('name')||'').trim();if(!name){showToast(t('profileNameRequired'));return;}newProfile(name,ui.newLang);
    } else if(event.target.id==='write-answer-form'){
      event.preventDefault();const value=document.getElementById('english-answer')?.value||'';if(!value.trim())return;submitAnswer(value);
    }
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&ui.modal){ui.modal=null;render();}});
  $file.addEventListener('change',e=>importBackup(e.target.files?.[0]));
  if('serviceWorker' in navigator&&window.location.protocol.startsWith('http')){
    window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(err=>console.debug('SW:',err)));
  }
  render();
})();
