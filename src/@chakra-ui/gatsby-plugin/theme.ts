// src/@chakra-ui/gatsby-plugin/theme.js
import {
  ComponentStyleConfig,
  ThemeConfig,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "3xl",
    textTransform: "uppercase",
    fontWeight: 500,
    fontFamily: "heading",
    _active: { transform: "scale(0.95)" },
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
  },
  defaultProps: {},
};
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = {
  // styles: {
  //   global: (props: any) => ({
  //     // body: {
  //     //   backgroundColor: mode(
  //     //     props.colorMode === "dark" ? "black" : "white",
  //     //     "black"
  //     //   )(props),
  //     // color: mode("#111", "#EDF2F7")(props),
  //     // },
  //   }),
  // },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    primary: "#EF494B",
    sec: "#2D2D2D",
    sec100: "#2D3748",
    sec200: "#59616F",
    sec300: "#1A202C",
    white300: "#A0AEC0",
    white200: "#EDF2F7",
    white100: "#F7FAFC",
    gray100: "#F5F5F5",

    main: {
      50: "#ffe5e5",
      100: "#fdb7b8",
      200: "#f6898b",
      300: "#f15b5d",
      400: "#eb2e2f",
      500: "#d21616",
      600: "#a40e10",
      700: "#76080b",
      800: "#480305",
      900: "#1e0000",
    },
  },

  components: {
    Button,
  },
  config,
};

export default extendTheme(
  theme,
  withDefaultColorScheme({ colorScheme: "main" })
);
