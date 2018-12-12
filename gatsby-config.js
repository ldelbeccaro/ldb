module.exports = {
  siteMetadata: {
    title: 'Laura Del Beccaro',
    description: 'Cofounder & CEO of Honu - a tool that helps founders and HR teams customize and automate their new hire onboarding processes',
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
