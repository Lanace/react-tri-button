const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

console.log(process.argv);

function findPara(param){
  let result = '';
  process.argv.forEach((argv)=>{
      if(argv.indexOf('--' + param) === -1) return;
      result = argv.split('=')[1];
  });
  return  result;
}

const customparam1 = findPara('customparam1');

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
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'production',
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
