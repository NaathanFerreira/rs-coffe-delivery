import { Flex, Image } from "@chakra-ui/react";
import { IntroductionInfoItems } from "./IntroductionInfoItems";
import { IntroductionTitle } from "./IntroductionTitle";

export function Introduction() {
  return (
    <Flex py={50} justifyContent="space-between">
      <Flex direction="column">
        <IntroductionTitle />
        <IntroductionInfoItems />
      </Flex>
      <Image src="/imgs/coffe.png" alt="A image of a cup of coffe" />
    </Flex>
  );
}
