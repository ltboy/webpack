/**
 * koa2 server 入口
 * Created by zdliuccit on 2018/7/6.
 */
const Koa = require('koa');
const koaCompress = require('koa-compress')();

const staticMiddleWare = require('../middleWare/static-middleware');
// const errorMiddleware = require('../middleWare/middle/errorMiddleWare');
// const proxyMiddleWare = require('../middleWare/middle/proxyMiddleWare');
const vueKoaSSR = require('./koa.vue.ssr');

const appConfig = require('../app.config');

const uri = `http://127.0.0.1:${appConfig.appPort}`;

// koa server
const app = new Koa();

// 中间件,
const middleWares = [
  // 压缩响应
  koaCompress,
  // 错误处理
  // errorMiddleware,
  // // 静态资源中间件
  staticMiddleWare()
];
middleWares.forEach((middleware) => {
  if (!middleware) {
    return;
  }
  app.use(middleware);
});

// vue ssr处理
vueKoaSSR(app, uri);

// http代理中间件
// app.use(proxyMiddleWare());

console.log(`\n> Starting server... ${uri} \n`);

// 错误处理
app.on('error', (err) => {
  console.error('Server error: \n%s\n%s ', err.stack || '');
});

app.listen(appConfig.appPort);