const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const serveConf = require('./server')

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
    chunkFilename: '[name].bundle.js',
    filename: "[name].js"
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
    ignored: /node_modules/
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
    // our additional options
    moduleTrace: false,
    errorDetails: true
  },
  target: 'web',
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

module.exports = clientConf