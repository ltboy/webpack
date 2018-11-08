<template>
  <component :is="com"></component>
</template>
<script>
import navigatorDefault from './nav-default.vue';
import navigatorIndex from './nav-index.vue';
import navigatorMobile from './nav-m.vue';
export default {
  components: {
    navigatorDefault,
    navigatorIndex,
    navigatorMobile
  },
  computed: {
    router() {
      return this.$route.name;
    },
    com() {
      if (this.platform && this.router) {
        if (this.platform === 'pc') {
          return this.router === 'index' ? navigatorIndex : navigatorDefault;
        } else {
          return navigatorMobile;
        }
      } else {
        return navigatorDefault;
      }
    }
  }
};
</script>
