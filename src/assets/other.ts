const categories: string[] = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const options: {id: number; name: string; property: string;}[] = [
  {
    id: 1,
    name: "популярности",
    property: "rating",
  },
  {
    id: 2,
    name: "цене",
    property: "price",
  },
  {
    id: 3,
    name: "алфавиту",
    property: "title",
  },
];

const arrTypePizza: string[] = ["Тонкое", "Традиционное", "Пышное"];

export const obj = {
  categories,
  options,
  arrTypePizza,
};
