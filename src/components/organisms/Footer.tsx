import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box py={4}>
      <HStack w={"full"} justifyContent={"center"}>
        <Text>BMI Calculator</Text>
      </HStack>
    </Box>
  );
}
