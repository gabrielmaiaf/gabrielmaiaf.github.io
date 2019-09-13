const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack(config, options) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
};

module.exports = withTypescript(withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]__[hash:base64:5]"
  },
}),
  nextConfig
)