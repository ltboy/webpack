<template>
  <component :is="com" />
</template>
<script>
export default {
  components: {
    cCookbook: () => import(/* webpackChunkName: "pc-com" */ './pc'),
    mCookbook: () => import(/* webpackChunkName: "m-com" */ './m')
  },
  computed: {
    com() {
      return this.platform !== 'mobile' ? 'cCookbook' : 'mCookbook';
    }
  }
};
</script>
