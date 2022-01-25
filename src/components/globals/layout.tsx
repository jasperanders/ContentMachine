import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Flex, Heading } from "@chakra-ui/react";
import Logo from "./logo";
import FileDrawer from "./fileDrawer";

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh" justifyContent="space-between">
      <Header logo={<Logo />} />
      <Flex direction="column" alignItems="space-evenly" flexGrow={1}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
