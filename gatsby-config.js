const redish = `#48c5c1`

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.techdialogue.org`,
    title: "TechDialogue",
    author: "Satish Krishnaraj",
    homeCity: "Austin",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-arengu-forms`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-134761933-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "TechDialogue",
        short_name: "TechDialogue",
        icon: "static/logo.png",
        start_url: "/",
        background_color: redish,
        theme_color: redish,
        display: "minimal-ui",
      },
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
  ],
}
