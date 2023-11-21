import { useColorModeValue } from "@chakra-ui/react";

export const useColor = () => {
  const bg = useColorModeValue("white", "sec100");
  const bgGray = useColorModeValue("gray100", "sec300");
  const color100 = useColorModeValue("blackAlpha900", "white300");
  const color200 = useColorModeValue("blackAlpha900", "white100");

  return {
    bg,
    bgGray,
    color100,
    color200,
  };
};
