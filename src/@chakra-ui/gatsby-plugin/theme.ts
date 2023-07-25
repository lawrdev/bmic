// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = {
  colors: {
    primary: "#d49945",

    main: {
      50: "#fff3e0",
      100: "#f3ddbd",
      200: "#e8c696",
      300: "#deb06e",
      400: "#d49945",
      500: "#bb802d",
      600: "#916321",
      700: "#684717",
      800: "#3f2b09",
      900: "#1a0d00",
    },
  },
};

export default extendTheme(
  theme,
  withDefaultColorScheme({ colorScheme: "main" })
);
