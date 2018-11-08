import Vue from 'vue'
import Vuex from 'vuex'
import detectPlatform from '../utils/detect-platform'
import platformModule from './modules/platform'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    platformModule
  },
  strict: process.env.NODE_ENV !== 'production',
  actions: {
    nuxtServerInit({ commit }, { req }) {
      let platform = detectPlatform(req.headers['user-agent']);
      commit('SET_PLATFROM', platform)
    }
  }
})

export default store
