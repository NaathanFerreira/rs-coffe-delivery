import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

export function CheckoutFormHeader() {
  return (
    <Flex gap={2} alignItems="baseline">
      <Icon as={MdLocationPin} width="22px" height="22px" color="orange.500" />
      <Text color="gray.400" fontFamily="Roboto" fontSize="1rem">
        Endereço de entrega <br />
        <Text color="gray.300" fontSize=".9rem" fontFamily="Roboto">
          Informe o endereço onde deseja receber seu pedido
        </Text>
      </Text>
    </Flex>
  );
}
