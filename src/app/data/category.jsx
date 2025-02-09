export const holidays = [
  {
    id: 1,
    name: "8 Марта",
    date: "08-03", // формат "день-месяц"
    description: "Международный женский день",
  },
  {
    id: 2,
    name: "14 февраля",
    date: "14-02",
    description: "День святого Валентина",
  },
  {
    id: 3,
    name: "23 февраля",
    date: "23-02",
    description: "День защитника Отечества",
  },
  {
    id: 4,
    name: "1 сентября",
    date: "01-09",
    description: "День знаний",
  },
  {
    id: 5,
    name: "День матери",
    date: "11-05",
    description: "День для почитания матерей",
  },
  {
    id: 6,
    name: "Татьянин день",
    date: "25-01",
    description: "Праздник студентов",
  },
  {
    id: 7,
    name: "День учителя",
    date: "05-10", // Обычно в России 5 октября
    description: "Праздник для учителей",
  },
  {
    id: 8,
    name: "Новый год",
    date: "01-01",
    description: "Праздник, который отмечают по всему миру.",
  },
];


export const flowerCategories = [
  {
    id: 1,
    name: "Праздничные букеты",
    imageSrc: 'https://th.bing.com/th/id/OIP.koXCiaa3s0GPI2134y2bjgHaHa?rs=1&pid=ImgDetMain',
    imageAlt: "Праздничные букеты",
    subcategories: [
      { id: 101, name: "День Святого Валентина" },
      { id: 102, name: "8 Марта" },
      { id: 103, name: "23 Февраля" },
      { id: 104, name: "1 Сентября" },
      { id: 105, name: "День Учителя" },
      { id: 106, name: "День Матери" },
      { id: 107, name: "Новый год" },
    ],
  },
  {
    id: 2,
    name: "Букеты по случаю",
    imageSrc: 'https://th.bing.com/th/id/OIP.xJ0kVuQYcbRS5gwOFpxk2AHaHa?rs=1&pid=ImgDetMain',
    imageAlt: "Букеты по случаю",
    subcategories: [
      { id: 201, name: "День рождения" },
      { id: 202, name: "Свадьба" },
      { id: 203, name: "Юбилей" },
      { id: 204, name: "Выражение соболезнования" },
    ],
  },
  {
    id: 3,
    name: "Популярные цветы",
    imageSrc: 'https://th.bing.com/th/id/OIP.1SOTn3L3nnAQ7n3YJF1iZwHaHB?rs=1&pid=ImgDetMain',
    imageAlt: "Популярные цветы",
    subcategories: [
      { id: 301, name: "Розы" },
      { id: 302, name: "Подсолнухи" },
      { id: 303, name: "Полевые цветы" },
      { id: 304, name: "Хризантемы" },
      { id: 305, name: "Зелень и декоративные растения" },
    ],
  },
  {
    id: 4,
    name: "Цветы для интерьера",
    imageSrc: 'https://th.bing.com/th/id/OIP.T3Yhs1qntn-ML8W98tfKQwHaF9?rs=1&pid=ImgDetMain',
    imageAlt: "Цветы для интерьера",
    subcategories: [
      { id: 401, name: "Офисные композиции" },
      { id: 402, name: "Для дома" },
      { id: 403, name: "Для ресторанов" },
    ],
  },
  {
    id: 5,
    name: "Специальные предложения",
    imageSrc: 'https://th.bing.com/th/id/OIP.DDNbwwGhNGB2c_2Y7qhuUgHaHa?rs=1&pid=ImgDetMain',
    imageAlt: "Специальные предложения",
    subcategories: [
      { id: 501, name: "Готовые наборы с подарками" },
      { id: 502, name: "Цветы в горшках" },
      { id: 503, name: "Авторские букеты" },
    ],
  },
];