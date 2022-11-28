import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";

function DefaultLayout() {
  return (
    <Box width="100%" maxW={1360} marginX="auto">
      <Header />
      <Outlet />
    </Box>
  );
}

export default DefaultLayout;
