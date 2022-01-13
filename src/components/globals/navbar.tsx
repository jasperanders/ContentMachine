import React from "react";
import { Box, Link, Text, Stack, Icon } from "@chakra-ui/react";
import { LocalizedLink as GLink, useLocalization } from "gatsby-theme-i18n";
import { useLocation } from "@reach/router";
import { headerLinks, supportedLanguages } from "../../../config";

import { FaBars, FaTimes } from "react-icons/fa";

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} mt="1rem" onClick={toggle}>
      {isOpen ? (
        <Icon boxSize={6} color="black" as={FaTimes} />
      ) : (
        <Icon boxSize={6} color="black" as={FaBars} />
      )}
    </Box>
  );
};

const MenuItem = ({ children, to = "/", color = "secondary", ...rest }) => {
  return (
    <Link as={GLink} to={to} fontSize="xl" color={color} {...rest}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export const Navigation = ({ isOpen }) => {
  const { locale } = useLocalization();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {headerLinks.map(({ name, to }) => (
          <MenuItem to={to}>{name}</MenuItem>
        ))}

        {supportedLanguages.length > 1 &&
          supportedLanguages.map((language: string) => (
            <MenuItem
              to={location.pathname.replace(/(de\/)|(en\/)/g, "")}
              color={locale === language ? "black" : "gray"}
              language={language}
            >
              {language.toUpperCase()}
            </MenuItem>
          ))}
      </Stack>
    </Box>
  );
};
