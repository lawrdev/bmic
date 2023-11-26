import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Container from "../atoms/Container";
import { BmiAboutDataProps } from "../../pages";
import { useColor } from "../../hooks/useColor";

export function BmiIntro({
  data,
}: {
  data: BmiAboutDataProps["allContentfulBmiData"]["edges"];
}) {
  const { bg, bgGray, color100, color200 } = useColor();

  // console.log("this dataaa", data);

  return (
    <section>
      <Box py={"72px"} bg={bgGray}>
        <Container>
          <Text
            textAlign={"center"}
            mb={"10px"}
            textTransform={"uppercase"}
            fontWeight={500}
            color={color100}
            fontFamily={"heading"}
            letterSpacing={".2rem"}
            fontSize={"sm"}
          >
            WHAT IS BMI
          </Text>
          <Heading
            as={"h1"}
            textAlign={"center"}
            color={color200}
            fontFamily={"heading"}
            fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
            letterSpacing={".2rem"}
          >
            BODY MASS INDEX
          </Heading>
        </Container>

        <Container>
          <Text
            textAlign={"center"}
            mt={"32px"}
            fontSize={"sm"}
            lineHeight={"tall"}
            color={color100}
          >
            {data[0]?.node?.desc?.desc || "N/a"}
          </Text>
        </Container>
      </Box>
    </section>
  );
}
