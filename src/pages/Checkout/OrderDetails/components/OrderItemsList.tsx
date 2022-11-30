import { Divider, VStack } from "@chakra-ui/react";
import { CoffeData } from "../../../../types/coffe";
import { OrderItem } from "./OrderItem";

const cart: CoffeData[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    img: "/imgs/expTradicional.png",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    categories: ["TRADICIONAL"],
    quantity: 1,
  },
  {
    id: 2,
    name: "Expresso Americano",
    img: "/imgs/expAmericano.png",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    categories: ["TRADICIONAL"],
    quantity: 2,
  },
];

export function OrderItemsList() {
  return (
    <VStack spacing={10}>
      {cart.map((orderItem) => {
        return (
          <>
            <OrderItem orderItem={orderItem} />
            <Divider />
          </>
        );
      })}
    </VStack>
  );
}
