import { Flex, Text } from "@chakra-ui/react";
import { CoffeData } from "../../../../../types/coffe";
import { BuySectionActions } from "./BuySectionActions";

interface CardBuySection {
  coffe: CoffeData;
}

export function CardBuySection({ coffe }: CardBuySection) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      my={5}
    >
      <Flex alignItems="center">
        <Text fontFamily="Roboto" fontSize=".9rem" color="gray.300">
          R$
        </Text>
        <Text fontWeight="800" fontSize="1.4rem" ml={1}>
          {coffe.price}
        </Text>
      </Flex>
      <BuySectionActions />
    </Flex>
  );
}
