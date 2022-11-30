import { Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { QuantityModifier } from "../../../../components/QuantityModifier";
import { CoffeData } from "../../../../types/coffe";

interface OrderItemProps {
  orderItem: CoffeData;
}

export function OrderItem({ orderItem }: OrderItemProps) {
  return (
    <Flex gap={4} height="80px" width="100%">
      <Image src={orderItem.img} boxSize="80px" />
      <Flex direction="column" gap={2}>
        <Text fontFamily="Roboto" fontSize="1rem" color="gray.400">
          {orderItem.name}
        </Text>
        <Flex gap={2}>
          <QuantityModifier />
          <Button
            fontFamily="Roboto"
            fontWeight="400"
            fontSize=".8rem"
            color="gray.300"
            bg="gray.150"
            padding="0px 8px"
            borderRadius="6px"
            leftIcon={
              <Icon as={RiDeleteBin6Line} fontSize=".9rem" color="purple.500" />
            }
          >
            REMOVER
          </Button>
        </Flex>
      </Flex>
      <Text
        width="100%"
        textAlign="end"
        fontFamily="Roboto"
        fontWeight="700"
        color="gary.300"
      >
        R$ {orderItem.price}
      </Text>
    </Flex>
  );
}
