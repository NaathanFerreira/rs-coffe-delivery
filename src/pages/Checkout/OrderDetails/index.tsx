import { Button, Flex, Text } from "@chakra-ui/react";
import { OrderItemsList } from "./components/OrderItemsList";
import { OrderSummary } from "./components/OrderSummary";

export function OrderDetails() {
  return (
    <Flex direction="column" gap={3}>
      <Text fontSize="1.1rem" fontWeight="700">
        Cafés selecionados
      </Text>
      <Flex
        background="gray.100"
        borderRadius="6px"
        padding="2rem"
        width="100%"
        direction="column"
      >
        <OrderItemsList />
        <OrderSummary />
        <Button
          type="submit"
          bg="orange.300"
          borderRadius="6px"
          color="white.50"
          fontWeight="700"
          width="100%"
        >
          CONFIRMAR PEDIDO
        </Button>
      </Flex>
    </Flex>
  );
}
