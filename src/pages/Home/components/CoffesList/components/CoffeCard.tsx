import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { CoffeData } from "../../../../../types/coffe";
import { CardBuySection } from "./CardBuySection";

interface CoffeCardProps {
  coffe: CoffeData;
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      bgColor="gray.100"
      textAlign="center"
      px={5}
      borderRadius="6px 36px"
    >
      <Image src={coffe.img} marginTop="-30px" />
      <HStack spacing={2} margin={3}>
        {coffe.categories.map((categry) => (
          <Text
            backgroundColor="orange.50"
            borderRadius="100px"
            padding="4px 8px"
            fontFamily="Roboto"
            fontSize=".8rem"
            fontWeight="700"
            lineHeight="130%"
            color="orange.500"
          >
            {categry}
          </Text>
        ))}
      </HStack>
      <Text
        my={2}
        fontWeight="700"
        fontSize="1.2rem"
        lineHeight="130%"
        color="gray.400"
      >
        {coffe.name}
      </Text>
      <Text
        fontFamily="Roboto"
        fontSize=".9rem"
        lineHeight="130%"
        color="gray.200"
        my={2}
      >
        {coffe.description}
      </Text>
      <CardBuySection coffe={coffe} />
    </Flex>
  );
}
