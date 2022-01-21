import { Container, Heading, VStack, Link, Box } from "@chakra-ui/react";
import { useStaticQuery, Link as GLink, graphql } from "gatsby";
import React from "react";
import slugify from "slugify";

export default function FileDrawer() {
  const { allMdx: data } = useStaticQuery(
    graphql`
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/resources/" } }
          sort: { fields: fileAbsolutePath, order: ASC }
        ) {
          nodes {
            parent {
              ... on File {
                name
                relativePath
              }
            }
            slug
          }
        }
      }
    `
  );

  const entries = data.nodes;
  entries.map((entry) => {
    entry.path = entry.parent.relativePath.split("/");
    entry.heading = entry.path.reverse()[1];
  });

  return (
    <Container
      bg={"secondaryLight"}
      m={"2rem"}
      boxShadow={"lg"}
      pb="3rem"
      borderRadius={"lg"}
    >
      <Heading>Contents</Heading>

      {entries.map((entry, i) => {
        let printHeading = false;
        if (i === 0 || entries[i - 1].heading !== entry.heading) {
          printHeading = true;
        }

        return (
          <Box key={entry.parent.name}>
            {printHeading && (
              <Heading key={entry.heading} variant="toc">
                {entry.heading}
              </Heading>
            )}
            <Link
              as={GLink}
              ml={"4"}
              key={entry.slug}
              to={`/${slugify(entry.parent.name, { lower: true })}`}
            >
              {entry.parent.name}
            </Link>
            <br />
          </Box>
        );
      })}
    </Container>
  );
}
