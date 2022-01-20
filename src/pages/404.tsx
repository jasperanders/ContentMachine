import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Container, Heading } from "@chakra-ui/layout";

const NotFoundPage = () => {
  useEffect(() => {
  }, []);
  return (
    <Container>
      <Heading>Not found. 404</Heading>
    </Container>
  );
};

export default NotFoundPage;
