import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";

const CalculatePage: React.FC<PageProps> = ({ children, location }) => {
  return (
    <>
      <Layout location={location}>
        <Box as="main" fontFamily={"heading"}>
          CHECK PAGE hereeee GGGGG
        </Box>
      </Layout>
    </>
  );
};

export default CalculatePage;

export const Head: HeadFC = () => <title>Check Page</title>;
