'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PreloadWebpackPlguin = require('preload-webpack-plugin')
const config = require('./config');
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name][hash:6].js',
    publicPath: config.baseUrl
  },
  resolve: {
    alias: {
      '@': 'src'
    },
    extensions: ['.js', '.jsx', '.ts'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(jsx?)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader']
      },
      // {
      //   test: /\.jsx?$/,
      //   include: [path.resolve(__dirname, '..', 'src')],
      //   loader: 'babel-loader',
      //   exclude: [/node_modules/]
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      BASE_URL: config.baseUrl,
      minify: {
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true,
      }
    }),
    new PreloadWebpackPlguin({
      rel: 'preload',
      include: 'initial',
    }),
    new PreloadWebpackPlguin({
      rel: 'prefetch',
      include: 'asyncChunks'
    }),
    CopyWebpackPlugin([
      {
        from: 'public',
      }, // 顾名思义，from 配置来源，to 配置目标路径
    ])
  ]
}
