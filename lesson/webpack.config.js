const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          // placeholder 占位符
          name: '[name].[ext]',
          outputPath: 'images/',
          limit: 10240
        }
      }
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: true
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}