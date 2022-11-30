import { Flex, Text } from "@chakra-ui/react";
import { CheckoutFormFields } from "./components/CheckoutFormFields";
import { CheckoutFormHeader } from "./components/CheckoutFormHeader";

export function CheckoutForm() {
  return (
    <Flex direction="column" gap={3}>
      <Text fontSize="1.1rem" fontWeight="700">
        Complete seu pedido
      </Text>
      <Flex
        background="gray.100"
        borderRadius="6px"
        padding="2rem"
        width="100%"
        direction="column"
      >
        <CheckoutFormHeader />
        <CheckoutFormFields />
      </Flex>
    </Flex>
  );
}
