import { Flex, Grid } from "@chakra-ui/react";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutPaymentMethods } from "./CheckoutPaymentMethods";
import { OrderDetails } from "./OrderDetails";

export function Checkout() {
  return (
    <Grid templateColumns="60% 40%" gap={6} mt={50}>
      <Flex direction="column" gap={4}>
        <CheckoutForm />
        <CheckoutPaymentMethods />
      </Flex>
      <OrderDetails />
    </Grid>
  );
}
