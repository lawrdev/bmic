import {
  Box,
  Button,
  Menu,
  MenuList,
  MenuButton as ChakraMenuButton,
  useDisclosure,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsDot } from "react-icons/bs";
import { useTrail, animated, config, useSpring } from "@react-spring/web";
import { TRANSITION_FAST, TRANSITION_SLOW } from "../../../constants";
import { Link } from "gatsby";

const menus = [
  { label: "Home", link: "/" },
  { label: "Calculate", link: "#calculateBMI" },
  { label: "About", link: "/" },
];
export default function MenuButton({
  isHome,
  colorMode,
}: {
  isHome: boolean;
  colorMode: "dark" | "light";
}) {
  const [trails, api] = useTrail(
    3,
    () => ({
      from: { scale: 1, y: 0 },
      to: [
        { scale: 1.5, y: -1 },
        { scale: 1, y: 0 },
      ],
      config: config.stiff,
    }),
    []
  );

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <VStack
      // bg={"green.200"}
      // h={"75px"}
      justifyContent={"center"}
    >
      <Menu isOpen={isOpen} onClose={onClose} gutter={20}>
        <ChakraMenuButton
          aria-label="Menu"
          onClick={onToggle}
          onMouseEnter={() => {
            api.start({
              from: { scale: 1, y: 0 },
              to: [
                { scale: 1.5, y: -1 },
                { scale: 1, y: 0 },
              ],
              config: config.stiff,
            });
          }}
        >
          <Box
            minWidth={0}
            minHeight={0}
            height={"fit-content"}
            border={
              isHome
                ? "2px solid #fff"
                : colorMode === "light"
                ? "2px solid #EDF2F7"
                : "2px solid #A0AEC0"
            }
            borderRadius={"md"}
            px={2}
            py={2}
          >
            <Box className="menu_toggle">
              <animated.div
                id="bar1"
                className="bars"
                style={{
                  backgroundColor: isHome
                    ? "#fff"
                    : colorMode === "light"
                    ? "#EDF2F7"
                    : "#A0AEC0",
                  ...trails[0],
                }}
              ></animated.div>
              <animated.div
                id="bar2"
                className="bars"
                style={{
                  backgroundColor: isHome
                    ? "#fff"
                    : colorMode === "light"
                    ? "#EDF2F7"
                    : "#A0AEC0",
                  ...trails[1],
                }}
              ></animated.div>
              <animated.div
                id="bar3"
                className="bars"
                style={{
                  backgroundColor: isHome
                    ? "#fff"
                    : colorMode === "light"
                    ? "#EDF2F7"
                    : "#A0AEC0",
                  ...trails[2],
                }}
              ></animated.div>
            </Box>
          </Box>
        </ChakraMenuButton>

        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          p={0}
          borderRadius="xs"
          backdropFilter={"blur(8px)"}
          boxShadow={"lg"}
          minWidth={"180px"}
        >
          <Box py={3}>
            <VStack px={4} w={"full"} alignItems={"flex-start"} spacing={"3px"}>
              {menus.map((op, index) => (
                <HStack
                  key={index}
                  role={"group"}
                  w={"full"}
                  cursor={"pointer"}
                  spacing={0}
                >
                  <Box
                    transform={`translateX(-20px)`}
                    opacity={0}
                    _groupHover={{
                      opacity: 1,
                      transform: "translateX(0px)",
                      transition: TRANSITION_SLOW,
                    }}
                    transition={TRANSITION_FAST}
                  >
                    <BsDot fontSize={"1.7rem"} color={"#D21616"} />
                  </Box>
                  <Text
                    fontWeight={400}
                    fontFamily={"heading"}
                    transform={`translateX(-20px)`}
                    _groupHover={{
                      color: "main.500",
                      transform: "translateX(0px)",
                    }}
                    transition={TRANSITION_FAST}
                    textTransform={"uppercase"}
                    fontSize={"xs"}
                    cursor={"pointer"}
                  >
                    <Link to={op.link}>{op.label}</Link>
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </MenuList>
      </Menu>
    </VStack>
  );
}
