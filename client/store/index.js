import Vue from 'vue';
import Vuex from 'vuex';
import context from './modules/context';
Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    modules: {
      context
    }
  });
}
