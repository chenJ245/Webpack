// 线上环境
// const merge = require('webpack-merge');
// const commonConfig = require('./webpack.common');
const MiniCssExtranctPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
  mode: 'production', //development 开发环境 production 线上
  devtool: 'cheap-module-source-map', // 对业务和其他模块代码进行source-map的生成以eval的形式
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtranctPlugin.loader, // 最后挂载
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtranctPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtranctPlugin({
      fiename: '[name].css',
      chunkFilename: '[name].chunk.css'
    })
  ],
  output: {
    filename: '[name].[contenthash].js', // 打包的路径为 dist 文件夹下的 名字为 entry 下的名字
    chunkFilename: '[name].[contenthash].js',
  }
}

// module.exports = merge(commonConfig, prodConfig);
module.exports = prodConfig;
