let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test:/\.(jpg|png|gif)/,
        use:'url-loader'
      }
    ]
  },
  devtool:'source-map',
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    proxy:{
      "/api": "http://127.0.0.1:3000"
    }
  }
}