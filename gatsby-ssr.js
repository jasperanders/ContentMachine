/*eslint-disable react/display-name */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
 import React from "react";
 import { MDXProvider } from "@mdx-js/react";
 import {
   Link,
   Text,
   Table,
   Tbody,
   Tr,
   Th,
   Td,
   Heading,
   Center,
   UnorderedList,
   OrderedList,
   ListItem,
   Alert,
 } from "@chakra-ui/react";
 import Layout from "./src/components/globals/layout";
 require("prismjs/themes/prism.css");
 
 export const wrapPageElement = ({ element, props }) => {
   return <Layout {...props}>{element}</Layout>;
 };
 
 export const wrapRootElement = ({ element }) => {
   return (
     <MDXProvider
       components={{
         blockquote: ({ ...props }) => (
           <Alert
             as="blockquote"
             variant={"left-accent"}
             colorScheme="teal"
             bg={"transparent"}
             {...props}
           />
         ),
         p: ({ ...props }) => <Text variant="mdxText" {...props} />,
         ul: ({ ...props }) => (
           <UnorderedList pl="1rem" variant="mdxText" {...props} />
         ),
         ol: ({ ...props }) => (
           <OrderedList pl="1rem" variant="mdxText" {...props} />
         ),
         li: ListItem,
         table: ({ ...props }) => (
           <Center overflowX="scroll">
             <Table {...props} minWidth="min-content" />,
           </Center>
         ),
         tr: Tr,
         th: Th,
         td: Td,
         tbody: Tbody,
         a: Link,
         h1: ({ ...props }) => (
           <Heading as="h1" variant="majorHeading" {...props} />
         ),
         h2: ({ ...props }) => <Heading as="h2" variant="H2" {...props} />,
         h3: ({ ...props }) => <Heading as="h3" variant="H3" {...props} />,
       }}
     >
       {element}
     </MDXProvider>
   );
 };
 