import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';
import context from './modules/context';
Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    modules: {
      test,
      context
    }
  });
}
