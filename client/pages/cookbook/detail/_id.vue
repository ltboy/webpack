<template>
  <div class="page">
    <div v-for="(item,i) in imgList" :key="i" class="layout-main">
      <img v-cdn-src="item" alt="">
    </div>
  </div>
</template>
<script>
import { detail } from '@/config/cookbook.config';
export default {
  computed: {
    imgList() {
      let name = this.$route.params.id;
      let imgList = detail.filter(item => item.name === name);
      return imgList.length
        ? imgList[0][this.platform]
        : detail[0][this.platform];
    }
  }
};
</script>
<style lang="scss" scoped>
.layout-pc {
  .layout-main {
    overflow: hidden;
    text-align: center;
  }
  img {
    display: inline-block;
    margin: 0 -100%;
  }
}
.layout-mobile {
  .page {
    margin-bottom: -30px;
  }
  .layout-main {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
