import React, { FC } from "react";
import { graphql } from "gatsby";

import { Heading } from "@chakra-ui/react";
import SEO from "../globals/seo";
import { siteTitle } from "../../../config";

const IndexPage: FC<{ props?: any }> = ({ ...props }) => {
  return (
    <>
      <SEO title={siteTitle} />
      <Heading>Hello World</Heading>
    </>
  );
};

export default IndexPage;
