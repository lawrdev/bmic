import "./layout.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import React from "react";

import { ReactNode, FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "../organisms/Footer";
import { Header } from "../organisms/Header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex
      direction={"column"}
      minHeight={"100vh"}
      w={"full"}
      alignItems={"flex-start"}
      gap={"0px"}
    >
      <Header />
      {children}

      <Box mt={"auto"}>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
