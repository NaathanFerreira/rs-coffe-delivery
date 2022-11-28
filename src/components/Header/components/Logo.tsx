import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Link to="/">
      <Image src="/imgs/logo.svg" />
    </Link>
  );
}
