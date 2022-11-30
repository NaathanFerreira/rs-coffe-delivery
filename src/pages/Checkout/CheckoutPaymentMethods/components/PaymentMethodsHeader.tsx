import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdOutlineAttachMoney } from "react-icons/md";

export function PaymentMethodsHeader() {
  return (
    <Flex gap={2} alignItems="baseline">
      <Icon
        as={MdOutlineAttachMoney}
        width="22px"
        height="22px"
        color="purple.500"
      />
      <Text color="gray.400" fontFamily="Roboto" fontSize="1rem">
        Pagamento <br />
        <Text color="gray.300" fontSize=".9rem" fontFamily="Roboto">
          O Pagamento é feito na entrega. Escolha a forma que deseja pagar
        </Text>
      </Text>
    </Flex>
  );
}
