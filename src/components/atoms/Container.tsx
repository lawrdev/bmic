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
    <Box
      px={{ base: "24px", lg: "50px" }}
      maxWidth={"1380px"}
      width={"100%"}
      mx={"auto"}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
