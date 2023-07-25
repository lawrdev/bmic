import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Button,
  HStack,
  // @ts-ignore
  useColorMode,
} from "@chakra-ui/react";

const IndexPage: React.FC<PageProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="main">
      <HStack py={12}>
        <p>hdjdjdj</p>
      </HStack>
      <Button onClick={toggleColorMode} colorScheme="main" alignSelf="center">
        Toggle Color Mode
      </Button>

      <Button>YOOOOO</Button>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
