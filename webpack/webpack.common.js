const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
  path: path.join(__dirname, '/dist'),
  filename: 'index_bundle.js'
},
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
      options: {
        outputPath: './src/images',
      },
    }
  ]
},
plugins:[
  new HtmlWebpackPlugin(
    {
      template: './src/index.html'
    }
  )
]
}
