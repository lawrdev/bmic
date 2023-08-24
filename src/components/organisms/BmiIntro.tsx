import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Container from "../atoms/Container";
import { AboutBmiDataType } from "../../utils/types";

export function BmiIntro({ data }: { data: AboutBmiDataType[] }) {
  const bg = useColorModeValue("white", "sec100");
  const bgGray = useColorModeValue("gray100", "sec300");
  const color100 = useColorModeValue("blackAlpha900", "white300");
  const color200 = useColorModeValue("blackAlpha900", "white100");

  return (
    <section>
      <Box pt={"113px"} pb={"40px"} bg={bgGray}>
        <Container>
          <Text
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
            color={color200}
            fontFamily={"heading"}
            fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
            letterSpacing={".2rem"}
          >
            BODY MASS INDEX
          </Heading>
        </Container>
      </Box>

      <Box bg={bg} py={4}>
        <Container>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            mollitia neque illum? Quaerat quas eveniet eaque earum? Numquam
            vitae architecto odit repellendus accusamus. Voluptas deserunt
            itaque quaerat aut. Quas, eveniet! Sit debitis nobis possimus
            recusandae rem. In labore officia iste id placeat nesciunt, vero
            quod voluptatem reprehenderit itaque neque dignissimos nostrum quas
            quae laborum dolor mollitia fugit fuga. Minus, hic!
          </Text>
        </Container>
      </Box>
    </section>
  );
}
