const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

console.log(process.argv);

function findParam(param){
  let result = '';
  process.argv.forEach((argv)=>{
      if(argv.indexOf('--' + param) === -1) return;
      result = argv.split('=')[1];
  });
  return  result;
}

const customparam1 = findParam('customparam1');

console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  entry: {
    'index': './examples/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ]
  },

  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    contentBase: './dist',
    historyApiFallback: true
  }
};
