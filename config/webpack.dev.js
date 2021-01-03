const path = require('path')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')

module.exports = merge(webpackBase, {
  mode: 'development',
  entry: path.resolve(__dirname, '../example/src/index.js'),
  output: {
    path: path.resolve(__dirname, '../example/src'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   exclude: /\.min\.css$/,
      //   loader: ['style-loader', 'css-loader?modules'],
      // },
      // {
      //   test: /\.min\.css$/,
      //   loader: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../example/src'),
    open: true,
  },
})
