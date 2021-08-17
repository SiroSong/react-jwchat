const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')
const path = require('path')

module.exports = merge(webpackBase, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/components/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    libraryTarget: 'umd', // 采用通用模块定义
    // libraryExport: 'default', // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
})
