import React from "react";
import { Box } from "@chakra-ui/react";
import { Nav } from "./nav";

export function Header() {
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} zIndex={50} top={0} left={0} right={0}>
        <Nav />
      </Box>
    </Box>
  );
}
