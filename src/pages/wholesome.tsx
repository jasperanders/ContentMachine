import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import IndexPage from "../components/wrapper/IndexPage";
import { AbsoluteCenter, Center, Code } from "@chakra-ui/react";

const Index = ({ data }) => {
  return (
    <AbsoluteCenter>
      ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣀⣀⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
      <br />
      ⠄⠄⠄⠄⠄⠄⠄⢀⣤⣶⠶⠛⠋⠉⠉⠉⠉⠉⠉⠙⠛⠳⠶⣤⣀⠄⠄⠄⠄⠄⠄⠄
      <br />
      ⠄⠄⠄⠄⠄⣠⣾⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠛⣦⠄⠄⠄⠄⠄
      <br />
      ⠄⠄⠄⢀⣼⠟⠄⠄⠄⠄⠄⠄⠄⠄⣀⣀⡀⠄⠄⠄⠄⠄⠄⠄⣀⣤⣈⡳⡄⠄⠄⠄
      <br />
      ⠄⠄⢠⡾⠃⠄⠄⠄⠄⠄⠄⠠⣴⡾⠛⠉⠉⠂⠄⠄⠄⠄⠄⠄⠄⠄⠙⢀⡹⣆⠄⠄
      <br />
      ⠄⠄⡿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⢿⡿⠄⠄⠈⢻⡀⠄
      <br />
      ⠄⢸⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⢠⠄⠄⠄⠄⠄⠄⡇⠄⠄⠰⢎⡇⠄
      <br />
      ⠄⣼⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡈⠉⠄⡄⠄⠄⢀⣀⣤⣾⣧⣤⣄⣥⡾⣿⠄
      <br />
      ⠄⢸⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠙⠶⠶⠶⠿⠟⠉⠁⠄⠄⠈⡹⠁⠄⣿⠄
      <br />
      ⠄⠈⢇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⠇⠄
      <br />
      ⠄⠄⠈⠑⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡴⠏⠄⠄
      <br />
      ⠄⠄⠄⠄⠄⠄⠄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣤⠟⠄⠄⠄⠄
      <br />
      ⠄⠄⠄⠄⠄⠄⠄⠄⠁⠒⠄⠤⠄⢀⣀⣀⣀⣀⣀⣤⣤⡤⠶⠞⠛⠉⠄⠄⠄⠄⠄⠄
      <br />
      ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
      <br />⠀
    </AbsoluteCenter>
  );
};

export default Index;
