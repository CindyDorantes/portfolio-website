/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true | {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      ssr: true,
      // Enabled by default.
    },
  },
  output: 'export',
}
 
module.exports = nextConfig
