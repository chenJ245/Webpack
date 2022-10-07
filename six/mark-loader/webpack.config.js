const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  resolveLoader: {
    modules: ['node_modules', './loaders'] // 文件的查找路径 先去 node_modules查找如果有直接用 没有就用 ./loaders下的东西
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [
        {
          loader: './loaders/replaceLoader',
        },
        {
          loader: './loaders/replaceLoaderAsync',
          options: {
            name: 'qifei'
          }
        },
      ]
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}