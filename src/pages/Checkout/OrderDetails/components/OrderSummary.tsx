import { Flex, Text, VStack } from "@chakra-ui/react";

export function OrderSummary() {
  return (
    <VStack spacing={2} my={6}>
      <Flex justifyContent="space-between" width="100%">
        <Text fontSize=".9rem" color="gray.200">
          Total de itens
        </Text>
        <Text fontSize="1rem" color="gray.200">
          R$ 28,70
        </Text>
      </Flex>
      <Flex justifyContent="space-between" width="100%">
        <Text fontSize=".9rem" color="gray.200">
          Entrega
        </Text>
        <Text fontSize="1rem" color="gray.200">
          R$ 3,50
        </Text>
      </Flex>
      <Flex justifyContent="space-between" width="100%">
        <Text fontWeight="700" fontSize="1.2rem" color="gray.400">
          Total
        </Text>
        <Text fontWeight="700" fontSize="1.2rem" color="gray.400">
          R$ 33,20
        </Text>
      </Flex>
    </VStack>
  );
}
