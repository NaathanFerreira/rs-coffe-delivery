import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: {
      "50": "#f1e9c9 ",
      "300": "#DBAC2C",
      "500": "#C47F17",
    },
    purple: {
      "50": "#EBE5F9",
      "400": "#4B2995",
      "500": "#8047F8",
    },
    gray: {
      "50": "#fafafa",
      "75": "#EEEDED",
      "100": "#F3F2F2",
      "150": "#E6E5E5",
      "200": "#8D8686",
      "300": "#574F4D",
      "400": "#403937",
      "600": "#272221",
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
