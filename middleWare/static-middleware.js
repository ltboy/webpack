/**
 * 设置静态资源请求目录和设置缓存
 * @return {Promise.<void>}
 */
const path = require('path');
const serverStatic = require('koa-static-plus');

module.exports = function (filename) {
  console.log(path.join(__dirname, '..', filename));
  return serverStatic(path.join(__dirname, '..', filename), {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    gzip: true,
    pathPrefix: '/static',
    setHeaders: (res, path) => {
      // 'Access-Control-Allow-Origin': '*'
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
  });
};
