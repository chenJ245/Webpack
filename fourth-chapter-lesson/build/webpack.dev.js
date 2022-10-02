// 开发环境
const webpack = require('webpack');
// const merge = require('webpack-merge');
// const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development', //development 开发环境 production 线上
  devtool: 'cheap-module-eval-source-map', // 对业务和其他模块代码进行source-map的生成以eval的形式
  devServer: { // webpack dev server 代码调试更方便
    contentBase: './dist', // 启动服务的文件地址
    open: true, // 是否自动打开浏览器
    port: 8080, // 端口号
    hot: true // 是否支持 html 技术
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader', // 最后挂载
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
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js', // 打包的路径为 dist 文件夹下的 名字为 entry 下的名字
    chunkFilename: '[name].js',
  }
}

// module.exports = merge(commonConfig, devConfig)
module.exports = devConfig;
