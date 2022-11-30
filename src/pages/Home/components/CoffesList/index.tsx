import { SimpleGrid, Text } from "@chakra-ui/react";
import { coffes } from "../../../../db";
import { CoffeCard } from "./components/CoffeCard";

export function CoffestList() {
  return (
    <>
      <Text fontSize="2rem" fontWeight="800" color="gray.400" mb={10}>
        Nossos cafés
      </Text>
      <SimpleGrid columns={4} spacing={20} py={10}>
        {coffes.map((coffe) => (
          <CoffeCard coffe={coffe} />
        ))}
      </SimpleGrid>
    </>
  );
}
