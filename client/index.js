import Vue from 'vue';
import App from './app.vue';
import {
  createStore
} from './store/index.js';
import {
  createRouter
} from './router.js';
import './assets/style/index.scss';
// config配置文件
import titleMixin from './mixin/title.mixin';
import platformMixin from './mixin/platform';

Vue.mixin(titleMixin);
Vue.mixin(platformMixin);
// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp() {
  // 创建 router 实例
  const router = createRouter();
  // 创建 store 实力
  const store = createStore();

  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    store,
    render: h => h(App)
  });
  return {
    app,
    router,
    store
  };
}
