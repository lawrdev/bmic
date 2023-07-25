import React from "react";
import { ReactNode, FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../organisms/Header";
import Footer from "../organisms/Footer";

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
