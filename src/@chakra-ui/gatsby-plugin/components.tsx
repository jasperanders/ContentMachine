import { FaBluetoothB } from "react-icons/fa";

export const Heading = {
  baseStyle: {
    color: "primary",
    textAlign: "left",
    my: "2rem",
  },
  variants: {
    logo: {
      fontFamily: "arvo",
      color: "back",
    },
    subHeading: {
      fontFamily: "mono",
      fontStyle: "italic",
      // textAlign: "center",
      fontSize: "4xl",
    },
    blogTitle: {
      mb: "1rem",
    },
    dateHeading: {
      fontSize: "3xl",
      color: "warning",
      fontFamily: "mono",
    },
    toc: {
      fontSize: "lg",
      mt: "4",
      mb: "2",
    },
  },
};

export const Box = {
  baseStyle: {
    color: "backgroundLight",
  },
};

export const Text = {
  baseStyle: {
    fontSize: "lg",
    marginTop: "1rem",
    [`strong`]: {
      color: "warning",
    },
  },
  variants: {
    mdxText: {
      mb: "1rem",
    },
  },
};

export const Link = {
  baseStyle: {
    fontSize: "lg",
    color: "secondary",
    fontWeight: "bold",
  },
};

export const Table = {
  variants: {
    scrollTable: {
      minWidth: "900px",
      overflow: "scroll",
    },
  },
};

export const Code = {
  baseStyle: {
    p: 4,
    w: "100%",
    borderRadius: "lg",
    overflowX: "scroll",
  },
};
