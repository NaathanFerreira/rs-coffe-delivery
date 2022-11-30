import { Box, Circle, Flex, Icon, Text } from "@chakra-ui/react";
import { GoClock } from "react-icons/go";
import { MdLocationPin, MdOutlineAttachMoney } from "react-icons/md";

export function InfoItems() {
  return (
    <>
      <Flex alignItems="center" gap={4}>
        <Circle size="35px" bgColor="purple.500">
          <Icon as={MdLocationPin} color="gray.50" />
        </Circle>
        <Flex direction="column">
          <Text fontFamily="Roboto" fontSize="1.1rem" color="gray.300">
            Entrega em{" "}
            <Box display="inline" fontWeight="700">
              Rua João Daniel Martinelli, 102
            </Box>
          </Text>
          <Text fontFamily="Roboto" color="gray.300">
            Farrapos - Porto Alegre, RS
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" gap={4}>
        <Circle size="35px" bgColor="orange.300">
          <Icon as={GoClock} color="gray.50" />
        </Circle>
        <Flex direction="column">
          <Text fontFamily="Roboto" fontSize="1.1rem" color="gray.300">
            Previsão de entrega
          </Text>
          <Text fontFamily="Roboto" color="gray.300" fontWeight="700">
            20 min - 30 min
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" gap={4}>
        <Circle size="35px" bgColor="orange.500">
          <Icon as={MdOutlineAttachMoney} color="gray.50" />
        </Circle>
        <Flex direction="column">
          <Text fontFamily="Roboto" fontSize="1.1rem" color="gray.300">
            Pagamento na entrega
          </Text>
          <Text fontFamily="Roboto" color="gray.300" fontWeight="700">
            Cartão de Crédito
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
