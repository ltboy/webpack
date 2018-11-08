/**
 * 运行于浏览器
 * Created by zdliu on 2018/7/6.
 * */
import Vue from 'vue';
import './plugins/index';
import {
  createApp
} from './index';
const {
  app,
  router,
  store
} = createApp();

// a global mixin that calls `asyncData` when a route component's params change
Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const {
      asyncData
    } = this.$options;
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next);
    } else {
      next();
    }
  },
  computed: {
    platform() {
      return this.$store.getters.getPlatform;
    }
  }
});

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);
    let diffed = false;
    const activated = matched.filter((c, i) => diffed || (diffed = (prevMatched[i] !== c)));
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _);
    if (!asyncDataHooks.length) {
      return next();
    }

    Promise.all(asyncDataHooks.map(hook => hook({
      store,
      route: to
    })))
      .then(() => {
        next();
      })
      .catch(next);
  });

  app.$mount('#app');
});
