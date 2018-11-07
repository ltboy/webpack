/**
 * koa2 server 入口
 */
require('@babel/polyfill');
const Koa = require('koa');
const koaCompress = require('koa-compress')();

const staticMiddleWare = require('../middleWare/static-middleware');
const vueKoaSSR = require('./koa.vue.ssr');

const appConfig = require('../app.config');

const uri = `http://127.0.0.1:${appConfig.appPort}`;

// koa server
const app = new Koa();

// 中间件,
const middleWares = [
  // 压缩响应
  koaCompress,
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

console.log(`\n> Starting server... ${uri} \n`);

// 错误处理
app.on('error', (err) => {
  console.error('Server error: \n%s\n%s ', err.stack || '');
});

app.listen(appConfig.appPort);
