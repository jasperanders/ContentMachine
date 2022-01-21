import React, { FC } from "react";
import { LocalizedLink as Link } from "gatsby-theme-i18n";

// import Helmet from "react-helmet";

import Logo from "./logo";
import { Flex } from "@chakra-ui/react";
import { MenuToggle, Navigation } from "./navbar";

const Header = ({ logo }: HeaderProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={0}
      direction={["column", "column", "column", "row"]}
      px={16}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      shadow="md"
    >
      {/* <Helmet /> */}
      <Link to="/" aria-label="home">
        {logo}
      </Link>
      {/* <MenuToggle toggle={toggle} isOpen={isOpen} /> */}
      {/* <Navigation isOpen={isOpen} /> */}
    </Flex>
  );
};

interface HeaderProps {
  logo: any;
}

export default Header;
