const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://jlangy.github.io/next-gh-pages-template/' : '',
};
