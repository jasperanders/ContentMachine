import { FaBluetoothB } from "react-icons/fa";

export const Heading = {
  baseStyle: {
    color: "primary",
    my: "2rem",
  },
  variants: {
    logo: {
      fontFamily: "arvo",
      color: "back"
    },
    subHeading: {
      fontFamily: "mono",
      fontStyle: "italic",
      textAlign: "center",
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
