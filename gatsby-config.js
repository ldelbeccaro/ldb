module.exports = {
  siteMetadata: {
    title: 'Laura Del Beccaro',
    description: 'Hi! I\'m a Software Engineer currently working on a problem in the new hire onboarding/HR space. Have any questions about onboarding or think your process could be improved? Contact me.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-stylus',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `karla\:400,500`,
        ],
      },
    },
  ],
}
