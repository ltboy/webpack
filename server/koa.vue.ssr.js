/**
 * vue koa2 ssr中间件
 * Created by zdliuccit on 2018/7/6.
 */
const fs = require('fs');
const path = require('path');
const LRU = require('lru-cache');
const {
  createBundleRenderer
} = require('vue-server-renderer');
const isProd = process.env.NODE_ENV !== 'development';
const setUpDevServer = require('./setup.dev.server');
let esAsync = require('es5-async-await/async');
var esAwait = require('es5-async-await/await');

module.exports = function (app, uri) {
  const renderData = (ctx, renderer) => {
    const UA = ctx.request.header['user-agent'];
    let platform = 'pc';
    if (UA.match(/Android/i) ||
      UA.match(/webOS/i) ||
      UA.match(/iPhone/i) ||
      UA.match(/iPad/i) ||
      UA.match(/iPod/i) ||
      UA.match(/BlackBerry/i) ||
      UA.match(/Windows Phone/i)
    ) {
      platform = 'mobile';
    }
    const context = {
      url: ctx.url,
      title: '网易味央官网',
      platform
    };
    return new Promise((resolve, reject) => {
      renderer.renderToString(context, (err, html) => {
        if (err) {
          return reject(err);
        }
        resolve(html);
      });
    });
  };

  function createRenderer(bundle, options) {
    return createBundleRenderer(bundle, Object.assign(options, {
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      basedir: resolve('dist'),
      runInNewContext: false
    }));
  }

  function resolve(dir) {
    return path.resolve(__dirname, '..', dir);
  }

  let renderer;
  if (isProd) {
    // prod mode
    const template = fs.readFileSync(resolve('dist/index.html'), 'utf-8');
    const bundle = require(resolve('dist/vue-ssr-server-bundle.json'));
    const clientManifest = require(resolve('dist/vue-ssr-client-manifest.json'));
    renderer = createRenderer(bundle, {
      template,
      clientManifest
    });
  } else {
    // dev mode
    setUpDevServer(app, uri, (bundle, options) => {
      try {
        renderer = createRenderer(bundle, options);
      } catch (e) {
        console.log('\nbundle error', e);
      }
    });
  }
  app.use(esAsync((ctx, next) => {
    if (!renderer) {
      ctx.type = 'html';
      ctx.body = '版本正在更新,请稍后重试11';
      return;
    }
    let html, status;
    try {
      status = 200;
      html = esAwait(renderData(ctx, renderer));
    } catch (e) {
      console.log('\n ERROR:', e);
      if (e.code === 404) {
        status = 404;
        html = '404 | Not Found';
      } else {
        status = 500;
        html = '500 | Internal Server Error';
      }
    }
    ctx.type = 'html';
    ctx.status = status || ctx.status;
    ctx.body = html;
  }));
};
