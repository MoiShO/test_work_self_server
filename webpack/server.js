const nodeExternals = require('webpack-node-externals')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    'index.js': path.resolve(__dirname, '../app.js')
  },
  resolve: {
    // Обработчики для разного типа расширений
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    alias: {
      '~': path.resolve('src/')
    },
    mainFields: ['main'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/style.css',
      allChunks: true,
      disable: false,
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: false,
    }),
    ]
}

module.exports = serverConfig