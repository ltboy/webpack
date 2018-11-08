/**
 * 开发环境使用本地资源
 */
import Vue from 'vue';
import config from '@/config/default.config';
Vue.directive('cdn-src', function (el, binding) {
  let baseUrl = process.env.NODE_ENV === 'development' ? '/' : config.baseUrl;
  let src = binding.value ? baseUrl + binding.value : '/';
  el.src = src;
});
