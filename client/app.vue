<template>
  <div class="app" :class="platform==='pc'?'platform-pc':'platform-mob'">
    <router-view></router-view>
  </div>
</template>
<script>
// import detectmob from './utils/platform';
// const platform = detectmob() ? 'mob' : 'pc';
export default {
  data() {
    return {
      platform: 'pc'
    };
  },
  mounted() {

  }
};
</script>
