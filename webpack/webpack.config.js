const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const serveConf = require('./server')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

clientConf =  {
  mode: 'development',
  // webpack hot reloader
  name: 'client',
  // Файл, с которого начинается клиентская часть
  devtool: 'inline-source-map',
  entry: {
    client: './ssr/client.js'
  },
  // Директория, в которой будет лежать билд webpack'а
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    chunkFilename: '[name]-[chunkhash:8].bundle.js',
    filename: "[name]-[chunkhash:8].js"
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
  // Используем babel-loader для компиляции кода из ECMAScript в понятный браузеру
  // JavaScript. Полученные файлы будут находиться в директории /public
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
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
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1600,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: true,
      })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          chunks: 'all',
          reuseExistingChunk: true,
        },
        styles: {
          test: /\.css$/,
          chunks: 'all',
          reuseExistingChunk: true,
        }
      }
    }
  },
  stats: {
    // copied from `'minimal'`
    all: false,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true,
    children: false,
    timings: true,
    // our additional optionsy
    moduleTrace: false,
    errorDetails: true
  },
  target: 'web',
  plugins: [
    new CleanWebpackPlugin({
        // dry: true,
        verbose: false,
        cleanStaleWebpackAssets: true
    }),
    new ExtractTextPlugin({
      filename: './style.css',
      allChunks: true,
      disable: false,
    }),
  ]
}

module.exports = clientConf