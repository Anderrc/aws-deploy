const dotenv = require('dotenv');

let activeEnv = process.env.ENVIRONMENT || "local";
console.log('::::::::::::::::::::::activeEnv ' + activeEnv);
dotenv.config({ path: `./src/env/.env.${activeEnv}` });

const envVariablesConfig = require('./src/config/env-config');

module.exports = {
  pathPrefix: "/button-pipeline",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gats-buttons",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    envVariablesConfig
  ],
};

// exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
//   const config = getConfig()
//   config.node = {
//       fs: 'empty'
//   }
// }