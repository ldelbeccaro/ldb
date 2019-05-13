module.exports = {
  siteMetadata: {
    title: 'Laura Del Beccaro',
    description:
      'Cofounder & CEO of Sora - a new HR automation tool that that makes it easy to personalize employee onboarding, offboarding, and key moments in between.',
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
        fonts: [`karla\:400,500`],
      },
    },
  ],
}
