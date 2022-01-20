import { IconButton } from "@chakra-ui/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Heading } from "@chakra-ui/layout";
import { navigate } from "gatsby-link";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

export default function Blog({ pageContext }) {
  const { frontmatter, body } = pageContext.post;
  const { title } = frontmatter;

  return (
    <Container my="4rem" maxW="3xl">
      <IconButton
        aria-label="go back"
        variant="ghost"
        icon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        mb="1rem"
      />
      <Heading variant="blogTitle">{title}</Heading>
      <MDXRenderer>{body}</MDXRenderer>
    </Container>
  );
}
