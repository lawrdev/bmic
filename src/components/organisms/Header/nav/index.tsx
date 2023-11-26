import React from "react";
import {
  Box,
  DarkMode,
  HStack,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";
import Container from "../../../atoms/Container";
import { Logo } from "../../../atoms/Logo";
import { Link } from "gatsby";
import { FiGithub } from "react-icons/fi";
import MenuButton from "../../../atoms/buttons/Menu";
import { TRANSITION_FAST } from "../../../../constants";

const navData = [
  { label: "Home", link: "/" },
  { label: "Calculate", link: "/calculate" },
  { label: "About", link: "#about" },
];

export function Nav({ isHome }: { isHome: boolean }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      w={"100vw"}
      border={"1px solid transparent"}
      borderBottomColor={
        isHome
          ? "transparent"
          : colorMode === "light"
          ? "#2D3748"
          : "whiteAlpha.300"
      }
      bg={isHome ? "none" : colorMode === "light" ? "sec" : "sec300"}
    >
      <Container>
        <HStack
          mt={4}
          w={"full"}
          justifyContent={"space-between"}
          height={"55px"}
        >
          <Box
            order={{ base: 2, md: 1 }}
            display={{ base: "none", md: "block" }}
          >
            <Logo
              color={
                isHome ? "#fff" : colorMode === "light" ? "#EDF2F7" : "#A0AEC0"
              }
            />
          </Box>

          <HStack
            spacing={8}
            order={{ base: 3, md: 2 }}
            display={{ base: "none", lg: "flex" }}
            alignItems={'flex-end'}
          >
            {navData.map((op, index) => (
              <Box key={index}>
                <Text
                  fontFamily={"heading"}
                  fontSize={"sm"}
                  fontWeight={700}
                  letterSpacing={"widest"}
                  textTransform={"uppercase"}
                  color={
                    isHome
                      ? "#fff"
                      : colorMode === "light"
                      ? "white200"
                      : "white300"
                  }
                  _hover={{
                    color: isHome
                      ? "#fff"
                      : colorMode === "light"
                      ? "primary"
                      : "#fff",
                  }}
                  transition={TRANSITION_FAST}
                >
                  <Link to={op.link}>{op.label}</Link>
                </Text>
              </Box>
            ))}
          </HStack>

          <Box order={{ base: 1, md: 3 }}>
            <HStack spacing={6}>
              <Box display={{ base: "none", md: "block" }}>
                <IconButton
                  variant={"unstyled"}
                  minWidth={0}
                  minHeight={0}
                  height={"fit-content"}
                  aria-label="toggle theme"
                  icon={
                    colorMode === "dark" ? (
                      <BiMoon
                        fontSize={"1.5rem"}
                        color={isHome ? "#fff" : "#A0AEC0"}
                      />
                    ) : (
                      <BiSun
                        fontSize={"1.5rem"}
                        color={isHome ? "#fff" : "#EDF2F7"}
                      />
                    )
                  }
                  onClick={toggleColorMode}
                />
              </Box>
              <Box display={{ base: "none", md: "block" }} cursor={"pointer"}>
                <FiGithub
                  fontSize={"1.5rem"}
                  color={
                    isHome
                      ? "#fff"
                      : colorMode === "light"
                      ? "#EDF2F7"
                      : "#A0AEC0"
                  }
                />
              </Box>

              <Box>
                <MenuButton isHome={isHome} colorMode={colorMode} />
              </Box>
            </HStack>
          </Box>

          <HStack order={2} display={{ base: "flex", md: "none" }} spacing={7}>
            <IconButton
              variant={"unstyled"}
              minWidth={0}
              minHeight={0}
              height={"fit-content"}
              aria-label="toggle theme"
              icon={
                colorMode === "dark" ? (
                  <BiMoon
                    fontSize={"1.5rem"}
                    color={isHome ? "#fff" : "#A0AEC0"}
                  />
                ) : (
                  <BiSun
                    fontSize={"1.5rem"}
                    color={isHome ? "#fff" : "#EDF2F7"}
                  />
                )
              }
              onClick={toggleColorMode}
            />

            <Box cursor={"pointer"}>
              <FiGithub
                fontSize={"1.5rem"}
                color={
                  isHome
                    ? "#fff"
                    : colorMode === "light"
                    ? "#EDF2F7"
                    : "#A0AEC0"
                }
              />
            </Box>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
