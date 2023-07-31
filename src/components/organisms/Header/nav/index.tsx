import React from "react";
import {
  Box,
  Button,
  DarkMode,
  HStack,
  Image,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { HiOutlineSun } from "react-icons/hi";
import Container from "../../../atoms/Container";
import { Logo } from "../../../atoms/Logo";
import { Link } from "gatsby";
import { FiGithub } from "react-icons/fi";
import MenuButton from "../../../atoms/buttons/Menu";

const navData = [
  { label: "Home", link: "/" },
  { label: "Calculate", link: "/calculate" },
  { label: "About", link: "#about" },
];

export function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w={"100vw"}>
      <Container>
        <HStack w={"full"} justifyContent={"space-between"} height={"98px"}>
          <Box
            order={{ base: 2, md: 1 }}
            display={{ base: "none", md: "block" }}
          >
            <Logo />
          </Box>

          <HStack
            spacing={8}
            order={{ base: 3, md: 2 }}
            display={{ base: "none", md: "flex" }}
          >
            {navData.map((op, index) => (
              <Box key={index}>
                <DarkMode>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"sm"}
                    fontWeight={700}
                    textTransform={"uppercase"}
                    color={"white"}
                  >
                    <Link to={op.link}>{op.label}</Link>
                  </Text>
                </DarkMode>
              </Box>
            ))}
          </HStack>

          <Box order={{ base: 1, md: 3 }}>
            <HStack spacing={7}>
              <Box display={{ base: "none", md: "block" }}>
                <DarkMode>
                  <FiGithub fontSize={"1.4rem"} color={"white"} />
                </DarkMode>
              </Box>
              <MenuButton onClick={() => {}} />
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
