const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');
const { config } = require('process');

const makePlugins = (configs) => {
  const plugins = [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    })
  ];

  Object.keys(configs.entry).forEach(item => {
    plugins.push(new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: `${item}.html`,
      chunks: ['runtime', 'vendors', item]
    })
    )
  });

  const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
  files.forEach(file => {
    if (/.*\.dll.js/.test(file)) { // test() 检查文件类型 在这里的意思是 是否匹配写的格式
      plugins.push(new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, '../dll', file) // 添加内容
      }))
    }
    if (/.*\.manifest.json/.test(file)) {
      plugins.push(new webpack.DllReferencePlugin({  //结合传过来的文件 去和你需要引入的文件做匹配 然后直接引入就不需要去分析 node_modules 了
        manifest: path.resolve(__dirname, '../dll', file)
      }))
    }
  })

  return plugins;
}

const configs = {
  entry: {
    index: './src/index.js',
    list: './src/list.js',
    detail: './src/detail.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // mainFiles: ['index', 'child'],
    // alias: {
    //   qifei: path.resolve(__dirname, '../src/child')
    // }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      // exclude: /node_modules/, 换种写法 意思相同
      include: path.resolve(__dirname, '../src'),
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 10240
        }
      }
    }, {
      test: /\.(eot|ttf|svg)$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        }
      }
    }
  },
  performance: false,
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}

configs.plugins = makePlugins(configs);

module.exports = configs