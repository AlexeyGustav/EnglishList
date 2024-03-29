// Объект слов
const dct = {
  separate: { en: 'Separate', ru: 'Отдельный, разделять' },
  class: { en: 'Class', ru: 'Класс' },
  variable: { en: 'Variable', ru: 'Переменная' },
  example: { en: 'Example', ru: 'Пример' },
  property: { en: 'Property', ru: 'Свойство' },
  versatile: { en: 'Versatile', ru: 'Разносторонний, разнообразный, многофункциональный' },
  explanation: { en: 'Explanation', ru: 'Объяснение' },
  experience: { en: 'Experience', ru: 'Опыт' },
  theme: { en: 'Theme', ru: 'Тема' },
  maintenance: { en: 'Maintenance', ru: 'Поддержка' },
  folder: { en: 'Folder', ru: 'Папка' },
  bundle: { en: 'Bundle', ru: 'Пакет' },
  feature: { en: 'Feature', ru: 'Характеристика, особенность, черта' },
  response: { en: 'Response', ru: 'Ответ, реакция' },
  particular: { en: 'In particular', ru: 'В частности' },
  chapter: { en: 'Chapter', ru: 'Глава' },
  simple: { en: 'Simple', ru: 'Простой' },
  precise: { en: 'Precise', ru: 'Точный, чёткий' },
  current: { en: 'Current', ru: 'Текущий' },
  useless: { en: 'Useless', ru: 'Ненужный' },
  allow: { en: 'Allow', ru: 'Разрешать, допускать, позволять' },
  fiddle: { en: 'Fiddle', ru: 'Играть, Скрипка' },
  perform: { en: 'Perform', ru: 'Выполнять' },
  explicitly: { en: 'Explicitly', ru: 'Явно, однозначно' },
  especially: { en: 'Especially', ru: 'Особенно, в особенности' },
  previous: { en: 'Previous', ru: 'Предыдущий' },
  thoroughly: { en: 'Thoroughly', ru: 'Тщательно, детально' },
  scheme: { en: 'Scheme', ru: 'Схема' },
  field: { en: 'Field', ru: 'Поле, область' },
  necessary: { en: 'Necessary', ru: 'Необходимый' },
  therefore: { en: 'Therefore', ru: 'Поэтому' },
  string: { en: 'String', ru: 'Сторка' },
  definition: { en: 'Definition', ru: 'Определение' },
  implement: { en: 'Implement', ru: 'Реализация, внедрение' },
  simplicity: { en: 'For simplicity', ru: 'Для простоты' },
  thus: { en: 'Thus', ru: 'Таким образом, следовательно' },
  speaking: { en: 'Strictly speaking', ru: 'Строго говоря' },
  blatant: { en: 'Blatant', ru: 'Явный, грубый' },
  assignment: { en: 'Assignment', ru: 'Задание, присвоение' },
  defence: { en: 'Defence', ru: 'Защита' },
  prohibit: { en: 'Prohibit', ru: 'Запрещать, препятствовать' },
  invocation: { en: 'Invocation', ru: 'Вызов, Просьба' },
  revert: { en: 'Revert', ru: 'Возвращаться' },
  credentials: { en: 'Credentials', ru: 'Учётные данные' },
  apropriate: { en: 'Apropriate', ru: 'Адаптировать, соответствовать' },
  fortunately: { en: 'Fortunately', ru: 'К счастью' },
  persistent: { en: 'Persistent', ru: 'Стойкий, постоянный' },
  constraint: { en: 'Constraint', ru: 'Ограничение' },
  comprehensive: { en: 'Comprehensive', ru: 'Комплексный, Всесторонний' },
  stuff: { en: 'Stuff', ru: 'Вещи, материал' },
  layout: { en: 'Layout', ru: 'Макет, разметка' },
  guest: { en: 'Guest', ru: 'Гость' },
  rudimentary: { en: 'Rudimentary', ru: 'Элементарный' },
  suffice: { en: 'Suffice', ru: 'Удовлетворять, быть достаточным' },
  anyway: { en: 'Anyway', ru: 'В любом случае' },
  introduce: { en: 'Introduce', ru: 'Представлять, вводить' },
  mention: { en: 'Mention', ru: 'Упоминание' },
  although: { en: 'Although', ru: 'Хоть, хотя' },
  validation: { en: 'Validation', ru: 'Проверка' },
  boilerplate: { en: 'Boilerplate', ru: 'Шаблон' },
  password: { en: 'Password', ru: 'Пароль' },
  correspond: { en: 'Correspond', ru: 'Переписываться, соответствовать' },
  conclude: { en: 'Conclude', ru: 'Завершать, заканчиваться' },
  closure: { en: 'Closure', ru: 'Закрытие' },
  cumbersome: { en: 'Cumbersome', ru: 'Тяжелый, громоздкий' },
  briefly: { en: 'Briefly', ru: 'Кратко, вкратце' },
  probably: { en: 'Probably', ru: 'Наверное, возможно' },
  forbid: { en: 'Forbid', ru: 'Запрещать' },
  template: { en: 'Template', ru: 'Шаблон' },
  encapsulation: { en: 'Encapsulation', ru: 'Инкапсуляция' },
  inheritancе: { en: 'Inheritancе', ru: 'Наследование, наследство' },
  polymorphism: { en: 'Polymorphism', ru: 'Полиморфизм' },
  reference: { en: 'Reference', ru: 'Ссылка, справка' },
  exception: { en: 'Exception', ru: 'Исключение' },
  namespace: { en: 'Namespace', ru: 'Именное пространство' },
  performance: { en: 'Performance', ru: 'Представление' },
  predefine: { en: 'Predefine', ru: 'Предопределение' },
  selection: { en: 'Selection', ru: 'Выбор' },
  requirement: { en: 'Requirement', ru: 'Требование' },
  request: { en: 'Request', ru: 'Запрос' },
  up: { en: 'Sign up', ru: 'Зарегестрироваться' },
  overloading: { en: 'Overloading', ru: 'Перезагрузка' },
  loop: { en: 'Loop', ru: 'Цикл' },
  function: { en: 'Function', ru: 'Функция' },
  newbie: { en: 'Newbie', ru: 'Новичок' },
  bugbear: { en: 'Bugbear', ru: 'Ошибка' },
  network: { en: 'Network', ru: 'Сеть' },
  execute: { en: 'Execute', ru: 'Выполнять, запускать' },
  benefit: { en: 'Benefit', ru: 'Выгода, польза' },
  purpose: { en: 'Purpose', ru: 'Цель' },
  descendant: { en: 'Descendant', ru: 'Потомок' },
  denote: { en: 'Denote', ru: 'Обозначать' },
  deny: { en: 'Deny', ru: 'Отрицать' },
  permission: { en: 'Permission', ru: 'Разрешение' },
  assumption: { en: 'Assumption', ru: 'Предположение' },
  afterwards: { en: 'Afterwards', ru: 'Впоследствии, потом' },
  preliminary: { en: 'Preliminary', ru: 'Предварительный' },
  consecutive: { en: 'Consecutive', ru: 'Последовательный' },
  breakdown: { en: 'Breakdown', ru: 'Разрушение' },
  excerpt: { en: 'Excerpt', ru: 'Выписка' },
  elaborate: { en: 'Elaborate', ru: 'Разрабатывать' },
  column: { en: 'Column', ru: 'Колонка, столбец' },
  hinder: { en: 'Hinder', ru: 'Препятствовать' },
  concise: { en: 'Concise', ru: 'Краткий, немногословный' },
  prerequisite: { en: 'Prerequisite', ru: 'Предпосылка' },
  restriction: { en: 'Restriction', ru: 'Ограничение, запрет' },
  relieve: { en: 'Relieve', ru: 'Освобождать' },
  solution: { en: 'Solution', ru: 'Решение' },
  embodiment: { en: 'Embodiment', ru: 'Воплощение' },
  misleading: { en: 'Misleading', ru: 'Вводящий в заблуждение' },
  clunky: { en: 'Clunky', ru: 'Неуклюжий' },
  settings: { en: 'Settings', ru: 'Настройки' },
  utilize: { en: 'Utilize', ru: 'Утилизировать' },
  essentially: { en: 'Essentially', ru: 'По существу' },
  bind: { en: 'Bind', ru: 'Связывать' },
  reset: { en: 'Reset', ru: 'Сброс, обнуление' },
  single: { en: 'Single quotes', ru: 'Одинарные кавычки' },
  omit: { en: 'Omit', ru: 'Пропускать' },
  robust: { en: 'Robust', ru: 'Крепкий' },
  ensure: { en: 'Ensure', ru: 'Обеспечивать' },
  which: { en: 'Which', ru: 'Kоторый'},
  impact: { en: 'Impact', ru: 'Влияние'},
  vote: { en: 'Vote', ru: 'Голос, выбор (избирательный)'},
  rules: { en: 'Rules ', ru: 'Правила'},
  harm: { en: 'Harm ', ru: 'Вред'},
  society: { en: 'Society', ru: 'Общество'},
  spread: { en: 'Spread', ru: 'Распространение'},
  wrong: { en: 'Wrong', ru: 'Неправильность, заблуждение'},
  safe: { en: 'Safe', ru: 'Безопастность'},
  advertising: { en: 'Advertising', ru: 'Реклама'},
  side: { en: 'Better side', ru: 'Лучшая сторона'},
  Use: { en: 'Use', ru: 'Использовать'},
  application: { en: 'App - application', ru: 'Приложение'},
  Show: { en: 'Show', ru: 'Показывать'},
  har: { en: 'To my mind, I think, In my opinion', ru: 'На мой взгляд, я думаю, по моему мнению'},
  Gather: { en: 'Gather', ru: 'Собирать'},
  Count: { en: 'Count', ru: 'Подсчитывать'},
  Choose: { en: 'Choose', ru: 'Выбор'},
  Lazy: { en: 'Lazy', ru: 'Ленивый'},
  Violate: { en: 'Violate', ru: 'Нарушать'},
  sid: { en: 'Break the rules', ru: 'Нарушать правила'},
  Quit: { en: 'Quit', ru: 'Уволиться'},
  Celebrate: { en: 'Celebrate', ru: 'Праздновать'},
  Gatherings: { en: 'Gatherings', ru: 'Встречи, посиделки'},
  Mean: { en: 'Mean', ru: 'Означать'},
  Instead: { en: 'Instead', ru: 'Вместо'},
  Exchange: { en: 'Exchange', ru: 'Замена'},
  Their: { en: 'Their', ru: 'Их'},
  Own: { en: 'Own', ru: 'Собственный'},
  Hurt: { en: 'Hurt', ru: 'Ранить'},
  Still: { en: 'Still', ru: 'Ещё'},

  Spend: { en: 'Spend', ru: 'Тратить'},
  Other: { en: 'Other', ru: 'Праздновать'},
  Turn: { en: 'Turn', ru: 'Выключить'},
  lot: { en: 'A lot of', ru: 'Очень много'},
  They: { en: 'They', ru: 'Они'},
  Freeze: { en: 'Freeze', ru: 'Замерзать'},
  Degrees: { en: 'Degrees', ru: 'Градусы'},
  // Celebrate: { en: 'Celebrate', ru: 'Праздновать'},
  // Celebrate: { en: 'Celebrate', ru: 'Праздновать'},
  
}



document.addEventListener('click', e => {
  const o = e.target
  const k = o.dataset.key
  if (!k) return
  e.preventDefault()
  let l = o.dataset.lang
  l = l === 'en' ? 'ru' : 'en'
  o.dataset.lang = l
  o.textContent = dct[k][l]
})




