import { Text } from "@chakra-ui/react";

export function IntroductionTitle() {
  return (
    <>
      <Text fontSize="3rem" fontWeight="800" lineHeight="130%" color="gray.600">
        Encontre o café perfeito para qualquer hora do dia
      </Text>
      <Text
        mt={2}
        fontFamily="Roboto"
        fontSize="1.4rem"
        lineHeight="130%"
        color="gray.400"
      >
        Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
      </Text>
    </>
  );
}
