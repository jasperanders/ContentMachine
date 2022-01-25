import { IconButton } from "@chakra-ui/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import { navigate } from "gatsby-link";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import FileDrawer from "../fileDrawer";

export default function Blog({ pageContext }) {
  const { frontmatter, body } = pageContext.post;
  const { title, omitBackButton } = frontmatter;

  return (
    <Flex alignItems="flex-start">
      <FileDrawer alignSelf="start" />

      <Container my="4rem" maxW="3xl">
        {!omitBackButton && (
          <IconButton
            aria-label="go back"
            variant="ghost"
            icon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            mb="1rem"
          />
        )}
        <Heading variant="blogTitle">{title}</Heading>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Flex>
  );
}
