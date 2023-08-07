import React from "react";
import { Box, BoxProps, DarkMode, Text } from "@chakra-ui/react";
import { Link } from "gatsby";

export function Logo({
  color = "#fff",
  boxProps,
}: {
  color?: string;
  boxProps?: BoxProps;
}) {
  return (
    <Link to={"/"}>
      <Box
        border={`2px solid ${color}`}
        borderRadius={"sm"}
        py={1.5}
        px={2}
        cursor={"pointer"}
        {...boxProps}
      >
        <Text
          color={color}
          fontFamily={"heading"}
          fontSize={"10px"}
          textTransform={"uppercase"}
          fontWeight={700}
          letterSpacing={"3px"}
          lineHeight={"12px"}
        >
          BMI
        </Text>
        <Text
          color={color}
          fontFamily={"heading"}
          fontSize={"10px"}
          textTransform={"uppercase"}
          fontWeight={700}
          letterSpacing={"3px"}
          lineHeight={"12px"}
        >
          CAL
        </Text>
      </Box>
    </Link>
  );
}
