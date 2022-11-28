import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: {
      "50": "#f1e9c9 ",
      "500": "#C47F17",
    },
    purple: {
      "50": "#EBE5F9",
      "400": "#4B2995",
      "500": "#8047F8",
    },
    gray: {
      "50": "#fafafa",
    },
    white: {
      "50": "#FFFFFF",
    },
  },
  fonts: {
    heading: `"Baloo 2", cursive`,
    body: `"Baloo 2", cursive`,
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});
