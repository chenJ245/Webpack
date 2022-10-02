// 公共文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const commonConfig = {
  // }
  // module.exports = {
  entry: {
    main: './src/index.js', // 入口文件 路径是后面的地址 文件名还是 main
  },
  module: { // 文件的打包方式是 模块
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/, // 忽略第三方模块的代码 可以加快打包速度
      use: [{
        loader: 'babel-loader',// 配置放在 .babelrc 文件下
      }, {
        loader: 'imports-loader?this=>window'// 加载过程先走 Imports 然后改变this指向
      }]
    }, {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          // placeholder 占位符
          name: '[name].[ext]',
          outputPath: 'images/',
          limit: 10240 // 文件大小 要求 小于 10240B
        }
      }
    },
    {
      test: /\.(woff2|woff|ttf)$/,
      use: {
        loader: 'file-loader',
      }
    }]
  },
  // manifest js和js文件的关系
  plugins: [
    // webpack 4 的写法
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../') // 配置绝对路径
    }),
    new webpack.ProvidePlugin({
      $: 'jquery', // 如果我的一个模块中使用了 $ 这个字符串我就会在模块里自动的帮你引入 jquery
      _join: ['lodash', 'join']
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime' // 抽离关系代码
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all', // 默认值是 async 就是默认只对异步代码
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    }
  },
  performance: false,
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
}