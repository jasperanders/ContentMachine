import React, { FC } from "react";
import { graphql } from "gatsby";

import { Heading } from "@chakra-ui/react";
import SEO from "../globals/seo";
import { siteTitle } from "../../../config";
// import oTreeArchitecture from "../../../../content/resources/00 Getting Started/diagrams/oTreeArchitecture.drawio.svg";
import oTreeArchitecture from "../../../content/resources/00 Getting Started/diagrams/oTreeArchitecture.drawio.svg";

const IndexPage = ({ ...props }) => {
  return (
    <>
      <SEO title={siteTitle} />

      <Heading>Hello World!</Heading>
      <oTreeArchitecture />
    </>
  );
};

export default IndexPage;
