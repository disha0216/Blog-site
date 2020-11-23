/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "The Hippie Girl",
    description: "This will have description for better SEO This will have description for better SEO This will have description for better SEO This will have description for better SEO This will have description for better SEO This will have description for better SEO "


  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/image`,
      },
    },
     `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`,
     `gatsby-transformer-remark`,
     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ufrsdgwfte31`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `eXvKiUHZN1e3TfuXYy01W9AGCphezXzoRDtcpDczFc0`,
      },
    },
  ],
}
