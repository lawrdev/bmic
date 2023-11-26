import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import HeaderHero from "../components/organisms/Header/hero";
import Layout from "../components/layout";
import { BmiIntro } from "../components/organisms/BmiIntro";
import CalculateBMI from "../components/organisms/CalculateBMI";
import WhatItMeans from "../components/organisms/WhatItMeans";

export type BmiAboutDataProps = {
  allContentfulBmiData: {
    edges: {
      node: {
        desc: { desc: string };
        header: string;
        subheader: string;
      };
    }[];
  };
};

const IndexPage: React.FC<PageProps<BmiAboutDataProps>> = ({
  location,
  data,
}) => {
  // console.log("ddddd", data);

  const aboutBmiData = data.allContentfulBmiData?.edges;

  return (
    <>
      <Layout location={location}>
        <HeaderHero />
        <main>
          <BmiIntro data={aboutBmiData} />

          <CalculateBMI />

          <WhatItMeans />
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home | BMICalc</title>;

export const query = graphql`
  {
    allContentfulBmiData {
      edges {
        node {
          header
          subheader
          desc {
            desc
          }
        }
      }
    }
  }
`;
