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
    H2: {
      mt: "4rem",
      fontFamily: "mono",
      // textAlign: "center",
      fontSize: "3xl",
    },
    H3: {
      fontFamily: "mono",
      // textAlign: "center",
      fontSize: "2xl",
      mb: "0.5rem",
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
  blockquote: {
    my: "2rem",
    color: "red",
  },
};

export const Text = {
  baseStyle: {
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
