const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'MyLib',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', 'jsx', 'js']
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ]
  }
};
