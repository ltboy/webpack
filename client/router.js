import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export function createRouter() {
  const router = new Router({
    mode: 'history',
    fallback: false,
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return {
          selector: to.hash
        };
      }
      return {
        x: 0,
        y: 0
      };
    }
  });

  router.beforeEach((to, from, next) => {
    /* todo */
    next();
  });

  router.afterEach((route) => {
    /* todo */
  });
  return router;
}
