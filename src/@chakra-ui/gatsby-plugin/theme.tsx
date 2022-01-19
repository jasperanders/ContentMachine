import { extendTheme } from "@chakra-ui/react";
import "@fontsource/playfair-display/900.css"; // Weight 500 with all styles included.
import "@fontsource/fira-code/600.css"; // Weight 500 with all styles included.
import "@fontsource/fira-code/400.css"; // Weight 500 with all styles included.
import "@fontsource/dosis/700.css"; // Weight 500 with all styles included.
import "@fontsource/arvo/400.css"; // Weight 500 with all styles included.
import { Heading, Box, Text, Link, Table, Code } from "./components";

const theme = extendTheme({
  fonts: {
    logo: "arvo",
    heading: "Fira Code",
    mono: "Fira Code",
  },
  colors: {
    primary: "#1d3557",
    secondary: "#457b9d",
    secondaryLight: "#b3e8db",
    lightGradient: "rgba(36, 123, 252, 0.05)",
    warning: "#e63946",
    backgroundLight: "#f1faee",
    black: "#444444",
  },
  borders: {
    base: "0.5rem solid #333",
  },
  components: {
    Heading,
    Box,
    Text,
    Link,
    Table,
    Code,
  },
});

export default theme;
