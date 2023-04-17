import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#73CF71",
    black: "#090C11",
    gray: {
      "100": "#F5F5F9",
      "500": "#595959",
    },
    green: "#00AB3F",
    red: "#D50003",
  },
  fonts: {
    heading: "'Nunito', sans-serif",
    body: "'Nunito-Regular', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#F5F5F9",
        width: "100%",
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});
