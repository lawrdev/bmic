import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box } from "@chakra-ui/react";

const CalculatePage: React.FC<PageProps> = () => {
  return (
    <>
      <Box as="main" fontFamily={"heading"}>
        CHECK PAGE hereeee GGGGG
      </Box>
    </>
  );
};

export default CalculatePage;

export const Head: HeadFC = () => <title>Check Page</title>;
