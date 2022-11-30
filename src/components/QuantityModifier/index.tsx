import { Flex, Icon } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { RiSubtractFill } from "react-icons/ri";

export function QuantityModifier() {
  return (
    <Flex
      bg="gray.150"
      borderRadius="6px"
      justifyContent="center"
      alignItems="center"
      gap={3}
      px={2}
    >
      <Icon
        as={RiSubtractFill}
        color="purple.500"
        _hover={{ cursor: "pointer" }}
      />
      2
      <Icon as={FiPlus} color="purple.500" _hover={{ cursor: "pointer" }} />
    </Flex>
  );
}
