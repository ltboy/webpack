<template>
  <div class="cookbook">
    <m-title title="美味猪肉" link="/cookbook" sub="COOKBOOK" class="mt50" />
      <slider :options="option">
        <slideritem v-for="item in config" :key="item.id" class="news-slider-item">
          <div class="react-box">
            <router-link v-for="(asset,i) in item.assets" :key="i" :to="'/cookbook/detail/'+item.name" class="no-drag link-block">
              <img v-cdn-src="asset.src" v-if="asset.type=='img'" />
              <video v-cdn-src="asset.src" v-else />
            </router-link>
          </div>
        </slideritem>
      </slider>
  </div>

</template>

<script>
import config from './config';
import MTitle from '../title';
export default {
  components: {
    MTitle
  },
  data() {
    return {
      config,
      option: {
        loop: true
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.cookbook {
  padding: 0 15px;
  overflow: hidden;
}
.react-box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  .link-block {
    &:first-child {
      width: 100%;
      margin-bottom: 10px;
    }
    &:nth-child(n + 2) {
      width: 50%;
    }
    img {
      width: 100%;
    }
  }
}
</style>
