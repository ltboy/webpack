/**
 * webpack base配置
 * Created by zdliu on 2018/7/6.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const appConfig = require('./../app.config');

const isProd = process.env.NODE_ENV === 'production';
// 版本号
const appVersion = new Date().getTime();

function resolve(dir) {
  return path.resolve(__dirname, '..', dir);
}

module.exports = function () {
  const config = {
    devtool: isProd ? false : '#cheap-module-source-map',
    // 输出模块配置
    output: {
      // 输出到这个目录下
      path: resolve('dist'),
      // 生成的文件名, [name] 即为entry配置中的key
      filename: 'static/js/[name].[chunkhash:8].js',
      // 异步模块文件名
      chunkFilename: 'static/js/[name][chunkhash:8].js',
      publicPath: isProd ? '/' : '/dist/'
    },
    // 寻找模块时的一些缺省设置
    resolve: {
      // 补充扩展名
      extensions: ['.js', '.vue', '.json'],
      // 别名，可以直接使用别名来代表设定的路径以及其他
      alias: {
        vue: 'vue/dist/vue.esm.js',
        '@': resolve('client'),
        '~': resolve('client')
      }
    },
    module: {
      rules: [{
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            // 去除模板中的空格
            preserveWhitespace: false,
            loaders: {
              css: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader'],
              stylus: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader',
                {
                  loader: 'stylus-loader',
                  options: isProd ? {} : {
                    sourceMap: 'inline'
                  }
                }
              ]
            }
          }
        }, 'eslint-loader']
      },
      // js,jsx 转译
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // },
      // 图片资源 gif|jpg|jpeg|png|bmp|svg|ico
      {
        test: /\.(gif|jpg|jpeg|png|bmp|svg|ico)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1,
            name: 'static/assets/images/[name].[hash:8].[ext]'
          }
        }]
      },
      // 字体文件 woff|woff2|eot|ttf
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 小于8912字节的文件,返回dataurl
            limit: 8912,
            // 生成的文件名,[name]为原始文件名,[hash:8]为根据文件内容生成8位md5值,[ext]为原始文件扩展名
            name: 'static/assets/font/[name].[hash:8].[ext]'
          }
        }]
      }
      ].concat(appConfig.webpack.rules || [])
    },
    performance: {
      maxEntrypointSize: 300000,
      hints: false
    },
    plugins: [
      // // 读取HTML模板文件，并输出HTML文件，开发环境实际输出到内存中
      new HtmlWebpackPlugin({
        appVersion,
        filename: 'index.html',
        template: path.resolve(__dirname, '..', 'index.template.ejs'),
        inject: !isProd
      }),
      new VueLoaderPlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  };
  if (isProd) {
    config.plugins = (config.plugins || []).concat([
      // 分离css文件
      new MiniCssExtractPlugin({
        filename: 'static/assets/style/[name][contenthash:6].css',
        chunkFilename: 'static/assets/style/[name][contenthash:6].css'
      }),
      // 限制文件最小KB
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 20000
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          // postcss那边已经处理过autoprefixer了，这里把它关掉，否则会导致浏览器前缀兼容范围问题
          autoprefixer: false,
          discardComments: {
            removeAll: true
          }
        }
      })
    ]);
  }
  return config;
};
