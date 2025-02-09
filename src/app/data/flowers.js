const bouquets = [
  {
    title: "Красные розы",
    description:
      "Символизируют страстную любовь и романтику. Идеальны для Дня святого Валентина, годовщин и свадеб.",
    events: ["#День святого Валентина", "#Годовщина", "#Свадьба"],
    image:
      "https://th.bing.com/th/id/R.1911f069e1b42776736a0829e88c51a3?rik=e014vIj8fOYBLQ&pid=ImgRaw&r=0",
  },
  {
    title: "Белые розы",
    description:
      "Олицетворяют чистоту и невинность. Подходят для свадеб, крещений и других торжественных мероприятий.",
    events: ["#Свадьба", "#Крещение", "#Торжественное мероприятие"],
    image:
      "https://th.bing.com/th/id/OIP.fjM95c5hrEAQ839UeGwcmgHaJ4?rs=1&pid=ImgDetMain",
  },
  {
    title: "Розовые розы",
    description:
      "Выражают благодарность и признательность. Отличный выбор для Дня матери, юбилеев и дней рождения.",
    events: ["#День матери", "#Юбилей", "#День рождения"],
    image:
      "https://th.bing.com/th/id/OIP.jG-HbPf-brQQDFyxc426TwHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Желтые розы",
    description:
      "Символизируют дружбу и радость. Подходят для поздравлений с успехами, праздников и дней рождения.",
    events: ["#Поздравление с успехом", "#Праздник", "#День рождения"],
    image:
      "https://th.bing.com/th/id/OIP.QGPS8q0pDXCM0OnJQf8s2AHaEo?rs=1&pid=ImgDetMain",
  },
  {
    title: "Пионы",
    description:
      "Ассоциируются с роскошью и изобилием. Идеальны для свадеб, юбилеев и других значимых событий.",
    events: ["#Свадьба", "#Юбилей", "#Значимое событие"],
    image:
      "https://th.bing.com/th/id/OIP.cnOSbraZedD1cN5f0DuR5gHaEX?rs=1&pid=ImgDetMain",
  },
  {
    title: "Тюльпаны",
    description:
      "Символизируют весну и обновление. Отличный выбор для 8 марта, Пасхи и начала весны.",
    events: ["#8 марта", "#Пасха", "#Начало весны"],
    image:
      "https://th.bing.com/th/id/OIP.Ee8k8Y4w9MJuERKu0DtNegHaGF?rs=1&pid=ImgDetMain",
  },
  {
    title: "Орхидеи",
    description:
      "Олицетворяют экзотику и изысканность. Подходят для юбилеев, свадеб и корпоративных мероприятий.",
    events: ["#Юбилей", "#Свадьба", "#Корпоратив"],
    image:
      "https://th.bing.com/th/id/OIP.mnhfIBopblHC7BtVqKeLmAHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Гортензии",
    description:
      "Символизируют благодарность и понимание. Идеальны для свадеб, юбилеев и дней рождения.",
    events: ["#Свадьба", "#Юбилей", "#День рождения"],
    image:
      "https://th.bing.com/th/id/OIP.fyODRygfWi48FJMeaqSH6wHaEo?rs=1&pid=ImgDetMain",
  },
  {
    title: "Лилии",
    description:
      "Олицетворяют чистоту и возвышенность. Подходят для свадеб, юбилеев и религиозных праздников.",
    events: ["#Свадьба", "#Юбилей", "#Религиозный праздник"],
    image:
      "https://th.bing.com/th/id/OIP.8iPUTu316LOsDjWzF0224wHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Гвоздики",
    description:
      "Символизируют любовь и уважение. Отличный выбор для Дня матери, юбилеев и дней рождения.",
    events: ["#День матери", "#Юбилей", "#День рождения"],
    image:
      "https://th.bing.com/th/id/OIP.pEXRYhIFDGpDAt88HWJ2TAHaFj?rs=1&pid=ImgDetMain",
  },
  {
    title: "Подсолнухи",
    description:
      "Олицетворяют счастье и тепло. Идеальны для летних праздников, дней рождения и корпоративов.",
    events: ["#Летний праздник", "#День рождения", "#Корпоратив"],
    image:
      "https://th.bing.com/th/id/OIP.HIBb4SKDL28BAhCusQ0OZwHaEl?rs=1&pid=ImgDetMain",
  },
  {
    title: "Герберы",
    description:
      "Символизируют радость и оптимизм. Подходят для дней рождения, юбилеев и корпоративных мероприятий.",
    events: ["#День рождения", "#Юбилей", "#Корпоратив"],
    image:
      "https://th.bing.com/th/id/OIP.oc2McRIXrAXdcosyZ984MAHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Ирисы",
    description:
      "Олицетворяют верность и надежду. Идеальны для свадеб, юбилеев и дней рождения.",
    image:
      "https://th.bing.com/th/id/OIP.vm2StL0bgo0WrVcTP8LSVAHaEb?rs=1&pid=ImgDetMain",
    events: ["#Свадьба", "#Юбилей", "#День рождения"],
  },
  {
    title: "Фрезии",
    description:
      "Символизируют невинность и дружбу. Отличный выбор для 8 марта, Дня матери и дней рождения.",
    events: ["#8 марта", "#День матери", "#День рождения"],
    image:
      "https://th.bing.com/th/id/OIP.k5snFIMnnC3wLgTdjWK7WgHaFj?rs=1&pid=ImgDetMain",
  },
  {
    title: "Гиацинты",
    description:
      "Олицетворяют весну и обновление. Подходят для Пасхи, 8 марта и начала весны.",
    events: ["#Пасха", "#8 марта", "#Начало весны"],
    image:
      "https://th.bing.com/th/id/R.b0416ef2c6a01ba687cb9ef85e10a1bf?rik=pW74Cb8pJKv8Bw&pid=ImgRaw&r=0",
  },
  {
    title: "Нарциссы",
    description:
      "Символизируют возрождение и новые начинания. Идеальны для Пасхи, 8 марта и начала весны.",
    events: ["#Пасха", "#8 марта", "#Начало весны"],
    image:
      "https://th.bing.com/th/id/OIP.OSGXVwA59tf179xD4PkXjQHaEK?rs=1&pid=ImgDetMain",
  },
  {
    title: "Лаванда",
    description:
      "Олицетворяет спокойствие и гармонию. Подходит для свадеб, юбилеев и религиозных праздников.",
    events: ["#Свадьба", "#Юбилей", "#Религиозный праздник"],
    image:
      "https://th.bing.com/th/id/OIP.kfmilbhS3DgSmtVv-qubwAHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Гипсофила",
    description:
      "Символизирует невинность и чистоту. Отличный выбор для свадеб, крещений и других торжественных мероприятий.",
    events: ["#Свадьба", "#Крещение", "#Торжественное мероприятие"],
    image:
      "https://th.bing.com/th/id/OIP.Zwwod6OSiNOu_zUP_q447AHaFk?rs=1&pid=ImgDetMain",
  },
  {
    title: "Альстромерии",
    description:
      "Олицетворяют дружбу и взаимопонимание. Подходят для дней рождения, юбилеев и корпоративных мероприятий.",
    events: ["#День рождения", "#Юбилей", "#Корпоратив"],
    image:
      "https://th.bing.com/th/id/R.f9c753507363d66f6980326f45cfa71b?rik=cl7c2uahCcSsNA&pid=ImgRaw&r=0",
  },
  {
    title: "Каллы",
    description:
      "Символизируют элегантность и изысканность. Идеальны для свадеб, юбилеев и других значимых событий.",
    events: ["#Свадьба", "#Юбилей", "#Значимое событие"],
    image:
      "https://th.bing.com/th/id/OIP.cjPzsns2CKBAZoSO5RS5IwHaFj?rs=1&pid=ImgDetMain",
  },
];

export default bouquets;
