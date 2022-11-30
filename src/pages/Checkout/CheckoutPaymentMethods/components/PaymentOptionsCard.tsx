import { Flex, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface PaymentOptionsCardProps {
  icon: ElementType;
  label: string;
  isSelected?: boolean;
  setCardAsSelected: (peymentMethod: string) => void;
}

export function PaymentOptionsCard({
  icon,
  label,
  isSelected,
  setCardAsSelected,
}: PaymentOptionsCardProps) {
  const boderColorIfSelected = isSelected ? "purple.500" : "none";

  return (
    <Flex
      _hover={{
        cursor: "pointer",
      }}
      onClick={() => setCardAsSelected(label)}
      border={`2px solid transparent`}
      borderColor={boderColorIfSelected}
      gap={2}
      alignItems="center"
      bg="gray.150"
      borderRadius="6px"
      padding="1rem"
    >
      <Icon as={icon} color="purple.500" fontSize="1rem" />
      <Text fontFamily="Roboto" fontSize=".8rem" color="gray.300">
        {label}
      </Text>
    </Flex>
  );
}
