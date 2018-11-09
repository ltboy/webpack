'use strict';

const expressMiddleware = require('webpack-dev-middleware');
let esAsync = require('es5-async-await/async');
let esAwait = require('es5-async-await/await');

function middleware(doIt, req, res) {
  const {
    end: originalEnd
  } = res;

  return new Promise((resolve) => {
    res.end = function end() {
      originalEnd.apply(this, arguments);
      resolve(0);
    };
    doIt(req, res, () => {
      resolve(1);
    });
  });
}

module.exports = (compiler, option) => {
  const doIt = expressMiddleware(compiler, option);

  const koaMiddleware = esAsync(function (ctx, next) {
    const {
      req
    } = ctx;
    const locals = ctx.locals || ctx.state;

    ctx.webpack = doIt;

    const runNext = esAwait(middleware(doIt, req, {
      end(content) {
        ctx.body = content;
      },
      locals,
      setHeader() {
        ctx.set.apply(ctx, arguments);
      }
    }));

    if (runNext) {
      esAwait(next());
    }
  });

  Object.keys(doIt).forEach(p => {
    koaMiddleware[p] = doIt[p];
  });

  return koaMiddleware;
};
