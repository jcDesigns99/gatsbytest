module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-sass`,
        options: {
          precision: 8,
        },
      },
      {
      resolve: `gatsby-source-wordpress`,
          options: {
            // your wordpress source
            baseUrl: `whatsinmygarden.com`,
            protocol: `http`,
            // is it hosted on wordpress.com,
            // or self-hosted?
            hostingWPCOM: false,
            // does your site use the Advanced 
            // Custom Fields Plugin?
            useACF: true,
              auth: {
        // If auth.user and auth.pass are filled, then the source plugin will be allowed
        // to access endpoints that are protected with .htaccess.
        htaccess_user: "TheGardener",
        htaccess_pass: "RjVEny4AW29lD",
        htaccess_sendImmediately: false,
            },},
        },
    ],
}
