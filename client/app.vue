<template>
  <div :class="'layout-'+platform" class="layout">
    <navigator />
    <router-view/>
    <com-footer />
    <div v-if="platform==='pc'" :style="{top:scanTop+'px'}" class="help-scan help extra">
      <div class="icon"></div>
      <div class="scan">
        <img v-cdn-src="'img/scan-weixinmini.jpg'" alt="">
      </div>
    </div>
    <backtoTop v-if="platform==='pc'" />
  </div>
</template>
<script>
import footer from '@/components/footer';
import navigator from '@/components/navigator';
import backtoTop from '@/components/backtoTop';
export default {
  components: {
    comFooter: footer,
    navigator,
    backtoTop
  },
  data() {
    return {
      top: false,
      scanTop: 648
    };
  },
  computed: {},
  mounted() {
    if (this.platform === 'mobile') {
      document.documentElement.style.fontSize = '12px';
    } else {
      document.documentElement.style.fontSize = '14px';
    }
    this.getScanTop();
  },
  methods: {
    getScanTop() {
      let top = (document.body.clientWidth * 588) / 1920 + 60 || 648;
      this.scanTop =
        window.innerHeight - 150 > top ? top : window.innerHeight - 150;
    }
  }
};
</script>

<style lang='scss'>
.layout {
  width: 100%;
  &-pc {
    min-width: 1200px;
  }
  .help-scan {
    position: fixed;
    right: 10px;
    cursor: pointer;
    z-index: 99999;
    .icon {
      width: 40px;
      height: 40px;
      background-repeat: no-repeat;
      background-image: url('./assets/img/icon-scan.png');
    }
    .scan {
      width: 100px;
      position: absolute;
      right: 40px;
      top: 0;
      padding-right: 10px;
      display: none;
      img {
        width: 100%;
      }
    }
    &:hover {
      .icon {
        background-image: url('./assets/img/icon-scan-hot.png');
      }
      .scan{
        display: block;
      }
    }
  }
}
</style>
