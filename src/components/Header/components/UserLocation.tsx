import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";

export function UserLocation() {
  return (
    <Flex
      alignItems="center"
      color="purple.500"
      background="purple.50"
      py={2}
      px={3}
      borderRadius="6px"
    >
      <Icon as={MdLocationOn} w="22px" h="22px" color="purple.500" />
      <Text fontFamily="Roboto" fontSize=".9rem" fontWeight="400">
        Porto Alegre, RS
      </Text>
    </Flex>
  );
}
