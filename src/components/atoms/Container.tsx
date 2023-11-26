import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

export default function Container({
  children,
  boxProps,
}: {
  children: React.ReactNode;
  boxProps?: BoxProps;
}) {
  return (
    <Box className={"container"} {...boxProps}>
      {children}
    </Box>
  );
}
