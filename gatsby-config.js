module.export = {
    plugins: [
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `your_space_id`,
        accessToken: `your_access_token`,
      },
    },
  ]
}