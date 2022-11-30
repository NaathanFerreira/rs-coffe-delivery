import { SimpleGrid } from "@chakra-ui/react";
import { MdShoppingCart, MdCoffee } from "react-icons/md";
import { GoPackage, GoClock } from "react-icons/go";
import { InfoItems } from "./InfoItems";

export function IntroductionInfoItems() {
  return (
    <SimpleGrid
      columns={2}
      mt={10}
      spacing={3}
      justifyItems="flex-start"
      maxW="80%"
    >
      <InfoItems
        icon={MdShoppingCart}
        label="Compra simples e segura"
        color="orange.500"
      />
      <InfoItems
        icon={GoPackage}
        label="Embalagem mantém o café intacto"
        color="gray.300"
      />
      <InfoItems
        icon={GoClock}
        label="Entrega rápida e rastreada"
        color="orange.300"
      />
      <InfoItems
        icon={MdCoffee}
        label="O café chega fresquinho até você"
        color="purple.500"
      />
    </SimpleGrid>
  );
}
