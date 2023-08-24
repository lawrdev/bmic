import React from "react";
import {
  DarkMode,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "gatsby";

export const CustomMenu = ({
  children,
  title,
  link,
  isMenu,
}: {
  children: React.ReactNode;
  title: string;
  link?: string;
  isMenu?: React.ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        aria-label={title}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {!isMenu ? (
          <DarkMode>
            <Text
              fontFamily={"heading"}
              fontSize={"sm"}
              fontWeight={700}
              letterSpacing={"widest"}
              textTransform={"uppercase"}
              color={"white"}
            >
              {link ? <Link to={link}>{title}</Link> : title}
            </Text>
          </DarkMode>
        ) : (
          isMenu
        )}
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        p={0}
        borderRadius="12px"
        boxShadow={"lg"}
      >
        {children}
      </MenuList>
    </Menu>
  );
};
