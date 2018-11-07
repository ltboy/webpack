const state = {
  platform: 'pc'
};

const getters = {
  getPlatform: state => state.platform
};

const mutations = {
  UPDATEPLATFORM: (state, payload) => {
    state.platform = payload;
  }
};

const actions = {
  updateplatform({ state, commit }, payload) {
    commit('UPDATEPLATFORM', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
