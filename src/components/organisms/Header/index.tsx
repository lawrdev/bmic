import React from "react";
import { Box } from "@chakra-ui/react";
import { Nav } from "./nav";

export function Header({ isHome }: { isHome: boolean }) {
  return (
    <Box position={"relative"}>
      <Box
        position={isHome ? "absolute" : "relative"}
        zIndex={50}
        top={0}
        left={0}
        right={0}
      >
        <Nav isHome={isHome} />
      </Box>
    </Box>
  );
}
