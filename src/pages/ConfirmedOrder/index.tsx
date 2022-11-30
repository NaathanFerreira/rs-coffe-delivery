import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ConfirmedOrderInfos } from "./components/ConfirmedOrderInfos";

export function ConfirmedOrder() {
  return (
    <Box mt={50}>
      <Text fontWeight="800" fontSize="2rem" color="orange.500">
        Uhu! Pedido confirmado
      </Text>
      <Text fontFamily="Roboto" fontSize="1.2rem" color="gray.400">
        Agora é só aguardar que logo o café chegará até você
      </Text>
      <SimpleGrid columns={2} gap={4} mt={10}>
        <ConfirmedOrderInfos />
        <Flex justifyContent="center">
          <Image src="/imgs/confirmed-order-illustration.png" />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
