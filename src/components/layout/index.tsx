import "./layout.css";
import "swiper/css";
import "swiper/css/pagination";
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

import React, { ReactNode, FC, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Footer from "../organisms/Footer";
import { Header } from "../organisms/Header";

const Layout: FC<{ children: ReactNode; location: any }> = ({
  children,
  location,
}) => {
  const data = useStaticQuery(graphql`
    query siteDets {
      sitePage {
        path
      }
    }
  `);

  // console.log("drrrrrr", data);
  const isHome = location.pathname! === "/";
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode === "dark" ? "#1A202C" : "#fff"}>
      <Flex
        direction={"column"}
        minHeight={"100vh"}
        w={"full"}
        alignItems={"flex-start"}
        gap={"0px"}
      >
        <Header isHome={isHome} />
        <main>{children}</main>

        <Box mt={"auto"} w={"full"}>
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
