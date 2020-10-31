module.exports = {
  pathPrefix: '/mdx-deck',
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-mdx',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: '/decks',
      },
    },
  ],
}