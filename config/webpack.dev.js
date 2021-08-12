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
  devServer: {
    contentBase: path.resolve(__dirname, '../example/src'),
    open: true,
  },
})
