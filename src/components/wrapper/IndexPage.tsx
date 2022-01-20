import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";

import { Heading } from "@chakra-ui/react";
import SEO from "../globals/seo";
import { siteTitle } from "../../../config";
// import TreeArchitecture from "../../../../content/resources/00 Getting Started/diagrams/oTreeArchitecture.drawio.svg";

const IndexPage = ({ ...props }) => {
  useEffect(() => {
    navigate("/00-motivation/");
  }, []);
  return (
    <>
      <SEO title={siteTitle} />
      <Heading>Redirecting...</Heading>
    </>
  );
};

export default IndexPage;
