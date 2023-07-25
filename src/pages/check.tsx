import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Button,
  HStack,
  // @ts-ignore
  useColorMode,
} from "@chakra-ui/react";

const CheckPage: React.FC<PageProps> = () => {
  return <Box as="main">CHECK PAGE hereeee</Box>;
};

export default CheckPage;

export const Head: HeadFC = () => <title>Check Page</title>;
