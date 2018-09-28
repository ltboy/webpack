'use strict'

const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const baseConfig = require('./base.conf.js')
// const config = require('./config.js')
module.exports = merge(baseConfig, {
    mode: 'production',
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'
    //             ]
    //         },
    //         {
    //             test: /\.scss$/,
    //             use: [
    //                 MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'
    //             ]
    //         }
    //     ]
    // },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 chunks: 'initial',
    //                 minChunks: 2,
    //                 maxInitialRequests: 5, // The default limit is too small to showcase the effect
    //                 minSize: 0 // This is example is too small to create commons chunks
    //             },
    //             vendor: {
    //                 test: /node_modules/,
    //                 chunks: 'initial',
    //                 name: 'vendor',
    //                 priority: 10,
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: '[name][hash:6].css',
    //         chunkFilename: "[chunkname][hash:6].css"
    //     })
    // ]
})