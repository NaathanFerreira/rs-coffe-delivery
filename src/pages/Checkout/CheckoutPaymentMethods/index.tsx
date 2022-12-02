import { Flex, Text } from "@chakra-ui/react";
import { PaymentMethodsHeader } from "./components/PaymentMethodsHeader";
import { PaymentMethodsOptions } from "./components/PaymentMethodsOptions";
import { useFormContext } from "react-hook-form";

export function CheckoutPaymentMethods() {
  const {
    formState: { errors },
  } = useFormContext();

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
      {!!errors.metodoPagamento && (
        <Text color="red">{errors.metodoPagamento.message?.toString()}</Text>
      )}
    </Flex>
  );
}
