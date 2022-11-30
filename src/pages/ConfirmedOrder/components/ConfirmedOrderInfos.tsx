import { Box, Flex } from "@chakra-ui/react";
import { InfoItems } from "./InfoItems";

export function ConfirmedOrderInfos() {
  return (
    <Box
      borderRadius="6px 36px"
      background="linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);"
      p={1}
    >
      <Flex
        height="100%"
        direction="column"
        gap={10}
        alignItems="flex-start"
        p="2rem"
        bg="gray.50"
        borderRadius="6px 36px"
      >
        <InfoItems />
      </Flex>
    </Box>
  );
}
