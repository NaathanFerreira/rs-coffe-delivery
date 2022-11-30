import { Link } from "react-router-dom";
import { Circle, Icon, IconButton } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { MdShoppingCart } from "react-icons/md";

export function CartIconButton() {
  return (
    <Link to="/checkout">
      <IconButton
        ml={2}
        aria-label="Cart Icon Button"
        css={css`
          position: relative !important;
        `}
        background="orange.50"
        // simulate a badge component
        icon={
          <>
            <Icon as={MdShoppingCart} w="22px" h="22px" color="orange.500" />
            <Circle
              size="20px"
              color={"white.50"}
              position={"absolute"}
              top={"-8px"}
              right={"-8px"}
              fontSize="1rem"
              fontWeight="700"
              fontFamily="Roboto"
              bgColor="orange.500"
              zIndex={9999}
            >
              3
            </Circle>
          </>
        }
      />
    </Link>
  );
}
