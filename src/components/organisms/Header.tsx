import React from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Box w={"100vw"}>
      <HStack w={"full"} justifyContent={"space-between"}>
        <Text fontSize={"xl"}>LOGO HEREEEEE</Text>

        <HStack>
          <Button>Check Your BMI</Button>
        </HStack>
      </HStack>
    </Box>
  );
}
