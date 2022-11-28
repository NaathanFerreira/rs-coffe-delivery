import { Box, Flex } from "@chakra-ui/react";
import { CartIconButton } from "./components/CartIconButton";
import { Logo } from "./components/Logo";
import { UserLocation } from "./components/UserLocation";

export function Header() {
  return (
    <Flex as="header" justifyContent="space-between" paddingY={6}>
      <Logo />
      <Box display="flex" alignItems="center">
        <UserLocation />
        <CartIconButton />
      </Box>
    </Flex>
  );
}
