import { CoffeData } from "./types/coffe";

export const coffes: CoffeData[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    img: "/imgs/expTradicional.png",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    categories: ["TRADICIONAL"],
    quantity: 5,
  },
  {
    id: 2,
    name: "Expresso Americano",
    img: "/imgs/expAmericano.png",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    categories: ["TRADICIONAL"],
    quantity: 5,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    img: "/imgs/expCremoso.png",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    categories: ["TRADICIONAL"],
    quantity: 5,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    img: "/imgs/expGelado.png",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    categories: ["TRADICIONAL", "GELADO"],
    quantity: 5,
  },
  {
    id: 5,
    name: "Café com Leite",
    img: "/imgs/cafLeite.png",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    categories: ["TRADICIONAL", "COM LEITE"],
    quantity: 5,
  },
  {
    id: 6,
    name: "Latte",
    img: "/imgs/latte.png",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    categories: ["TRADICIONAL", "COM LEITE"],
    quantity: 5,
  },
  {
    id: 7,
    name: "Capuccino",
    img: "/imgs/capuccino.png",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    categories: ["TRADICIONAL", "COM LEITE"],
    quantity: 5,
  },
  {
    id: 8,
    name: "Macchiato",
    img: "/imgs/macchiato.png",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    categories: ["TRADICIONAL", "COM LEITE"],
    quantity: 5,
  },
];
