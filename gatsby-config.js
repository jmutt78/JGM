require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const wordpressUrl = `https://entra.flywheelsites.com/graphql`;

module.exports = {
  siteMetadata: {
    title: `Justin McIntosh`,
    siteUrl: 'https://jgmsoft.io',
    description: `Justin McIntosh is a freelance developer and entreprenur. Book now!`,
    author: `Justin McIntosh`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphql`,
        fieldName: `wpgraphql`,
        url: wordpressUrl,
      },
    },
  ],
};
// {
//   resolve: `gatsby-plugin-google-analytics`,
//   options: {
//     // The property ID; the tracking code won't be generated without it
//     trackingId: `${process.env.GATSBY_GOOGLE}`,
//     // Defines where to place the tracking script - `true` in the head and `false` in the body
//     head: true,
//   },
// },
// `gatsby-plugin-emotion`,
// `gatsby-plugin-jss`,

// {
//   resolve: 'gatsby-plugin-react-svg',
//   options: {
//     rule: {
//       include: /assets/,
//     },
//   },
// },
// {
//   resolve: `gatsby-source-filesystem`,
//   options: {
//     name: `images`,
//     path: `${__dirname}/src/images`,
//   },
// },

// `gatsby-transformer-sharp`,
// `gatsby-plugin-sharp`,
// {
//   resolve: `gatsby-plugin-manifest`,
//   options: {
//     name: `gatsby-starter-default`,
//     short_name: `starter`,
//     start_url: `/`,
//     background_color: `#663399`,
//     theme_color: `#663399`,
//     display: `minimal-ui`,
//     icon: `assets/logo.svg`, // This path is relative to the root of the site.
//   },
// },
