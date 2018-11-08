/**
 * koa2 server 入口
 */
const Koa = require('koa');
const koaCompress = require('koa-compress')();

const staticMiddleWare = require('../middleWare/static-middleware');
const vueKoaSSR = require('./koa.vue.ssr');

const appConfig = require('../app.config');

const uri = `http://127.0.0.1:${appConfig.appPort}`;
const isProd = process.env.NODE_ENV !== 'development';
// koa server
const app = new Koa();
let filename = isProd ? 'dist/static' : 'static';
// 中间件,
let middleWares = [
  // 压缩响应
  koaCompress,
  staticMiddleWare(filename)
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
