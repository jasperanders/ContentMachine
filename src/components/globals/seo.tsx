import React, { FC } from "react";
import Helmet from "react-helmet";

const SEO_DATA = {
  description: "",
  title: "",
  url: "",
  author: "Jasper Anders",
  keywords: ["devops"],
};

const SEO: FC<{ title: string; meta?: any }> = ({ title, meta }) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(", ")} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="de" />
    </Helmet>
  );
};

export default SEO;
