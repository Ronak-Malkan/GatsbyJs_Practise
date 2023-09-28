/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
   siteMetadata: {
      title: `GatsbyTrial`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   plugins: [
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: `blog`,
            path: `${__dirname}/blog`,
         },
      },
      "gatsby-plugin-mdx",
   ],
};
