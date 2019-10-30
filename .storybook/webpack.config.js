const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  
  config.plugins.push(new CaseSensitivePathsPlugin());

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  
  config.resolve.extensions.push('.js', '.jsx');

  config.module.rules.push({
    test: /\.(js|jsx)$/,
    use: ['babel-loader'],
    exclude: /node_modules/
  });

  // Return the altered config
  return config;
};
