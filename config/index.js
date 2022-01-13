module.exports = {
  //-- SITE SETTINGS -----
  author: "Jasper Anders",
  institution: "Jasper Anders",
  siteTitle: "Building a Dev-Ops Pipeline",
  siteShortTitle: "Devops", // Used as logo text in header, footer, and splash scree
  siteDescription: "",
  siteUrl: "https://devops.jasperanders.xyz",
  siteLanguage: "en",
  siteIcon: "content/globals/assets/favicon.png", // Relative to gatsby-config fil
  seoTitleSuffix: "", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}
  defaultLanguage: "en",
  supportedLanguages: ["en"],
  //-- NAVIGATION SETTINGS -----
  footerLinks: [
    {
      name: "Privacy Statement",
      to: "/privacy",
    },
    {
      name: "Imprint",
      to: "/imprint",
    },
  ],
  headerLinks: [
    {
      name: "Docs",
      to: "/docs",
    },
  ],
};
