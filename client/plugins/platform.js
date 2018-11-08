/**
 * 2018-10-26
 */
import Vue from 'vue';
const platformMixin = {
  computed: {
    platform() {
      return this.$store.getters.platform;
    }
  }
};

Vue.mixin(platformMixin);
