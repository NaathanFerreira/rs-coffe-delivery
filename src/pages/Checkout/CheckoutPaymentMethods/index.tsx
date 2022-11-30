import { Flex } from "@chakra-ui/react";
import { PaymentMethodsHeader } from "./components/PaymentMethodsHeader";
import { PaymentMethodsOptions } from "./components/PaymentMethodsOptions";

export function CheckoutPaymentMethods() {
  return (
    <Flex
      background="gray.100"
      borderRadius="6px"
      padding="2rem"
      width="100%"
      direction="column"
    >
      <PaymentMethodsHeader />
      <PaymentMethodsOptions />
    </Flex>
  );
}
