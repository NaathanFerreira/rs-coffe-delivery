import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { RiSubtractFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { QuantityModifier } from "../../../../../components/QuantityModifier";

export function BuySectionActions() {
  return (
    <Flex gap={2}>
      <QuantityModifier />
      <Link to="/checkout">
        <IconButton aria-label="Shopping cart icon button" bg="purple.400">
          <Icon
            as={MdShoppingCart}
            width="22px"
            height="22px"
            color="gray.100"
          />
        </IconButton>
      </Link>
    </Flex>
  );
}
