const state = {
  platform: 'pc'
};
const mutations = {
  SET_PLATFROM(state, payload) {
    state.platform = payload;
  }
};
const getters = {
  platform: (state) => state.platform
};
export default {
  state,
  mutations,
  getters
};
