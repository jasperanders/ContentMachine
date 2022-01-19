const {
  author,
  siteTitle,
  siteShortTitle,
  siteDescription,
  siteIcon,
  siteUrl,
  defaultLanguage,
} = require("./config/index.js");

module.exports = {
  siteMetadata: {
    author: author,
    title: siteTitle,
    description: siteDescription,
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-remark-images`,
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteShortTitle,
        start_url: `/`,
        display: `minimal-ui`,
        icon: siteIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
          {
            resolve: "gatsby-remark-obsidian",
            // options: {
            //   titleToURL: (title) => `/${title}`,
            // },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", ".cache", "public", "gatsby-browser.js"],
        // Any eslint-webpack-plugin options below
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /diagrams/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `${defaultLanguage}`,
        configPath: require.resolve(`./i18n/config.json`),
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./i18n/react-intl/de.json`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
