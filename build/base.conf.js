'use strict'

const HtmlWebpackPlugin = require('webpack-clean-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config');

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'dist',
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
                test: /\.jsx?$/,
                include: ['./src'],
                loader: 'babel-loader',
                exclude: ['node_modules']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.resolve('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.resolve('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.resolve('fonts/[name].[hash:7].[ext]')
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            minify: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true
            }
        }),
        CopyWebpackPlugin([
            {
                from: 'public',
            }, // 顾名思义，from 配置来源，to 配置目标路径
        ])
    ]
}