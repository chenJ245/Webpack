const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 开发环境
  devtool: 'cheap-module-eval-source-map', // 对业务和其他模块代码进行source-map的生成以eval的形式
  entry: {
    main: './src/index.js', // 入口文件 路径是后面的地址 文件名还是 main
  },
  devServer: { // webpack dev server 代码调试更方便
    contentBase: './dist', // 启动服务的文件地址
    open: true, // 是否自动打开浏览器
    port: 8080, // 端口号
    hot: true, // 是否支持 html 技术
    hotOnly: true, // 不刷新浏览器
    historyApiFallback: true,
    proxy: {
      '/react/api': {
        target: 'http://www.dell-lee.com', // 请求代理
        secure: false, // 可以对 https生效
        pathRewrite: { // 重写
          'header.json': 'demo.json'
        },
        changeOrigin: true, // 可以支持多域名访问
        Headers: { // 自定义模拟行为
          host: 'www.dell-lee.com',
        }
      }
    }
  },
  module: { // 文件的打包方式是 模块
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/, // 忽略第三方模块的代码 可以加快打包速度
      loader: 'babel-loader', // 配置放在 .babelrc 文件下
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
    },
    {
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
    // webpack 4 的写法
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js', // 打包的路径为 dist 文件夹下的 名字为 entry 下的名字
    path: path.resolve(__dirname, 'dist')
  }
}