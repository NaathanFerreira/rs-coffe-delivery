import { Circle, Flex, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface InfoItemsProps {
  icon: ElementType;
  label: string;
  color: string;
}

export function InfoItems({ icon, label, color }: InfoItemsProps) {
  return (
    <Flex alignItems="center">
      <Circle size="35px" bgColor={color}>
        <Icon as={icon} color="gray.50" />
      </Circle>
      <Text fontFamily="Roboto" fontSize="1.1rem" color="gray.300" ml={2}>
        {label}
      </Text>
    </Flex>
  );
}
