import {
  Box,
  HStack,
  chakra,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useColor } from "../../hooks/useColor";
import {
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Container from "../atoms/Container";

export default function Footer() {
  const { bg, bgGray, color100, color200 } = useColor();

  return (
    <Box
      bg={bg}
      py={4}
      color={color100}
      w={"full"}
      borderTop={"1px solid transparent"}
      borderTopColor={"#ddd"}
    >
      <Container>
        <Stack
          w={"full"}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            © {new Date().getFullYear()} A simple Bmi Calculator. @lawrdev
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Github"} href={"#"}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={"Gmail"} href={"#"}>
              <FaGoogle />
            </SocialButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  const { bg } = useColor();

  return (
    <chakra.button
      bg={bg}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: bg,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
