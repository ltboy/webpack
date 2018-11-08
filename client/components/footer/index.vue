<template>
  <div class="footer mt50">
    <div class="com cooperative">
      <h4 v-if="platform=='pc'" class="com_title">项目合作</h4>
      <coopera />
    </div>
    <div class="layout_footer-wrap">
      <footer class="layout_footer layout-main fs12">
        <div class="scan">
          <div class="scan-item scan-item-weibo">
            <div class="scan-icon" @click="modalChange(true,'weibo')" />
            <div class="scan-img-wrap">
              <div class="scan-img">
                <img v-cdn-src="'img/scan-weibo.png'" alt="微博">
                <p>关注微博</p>
              </div>
            </div>
          </div>
          <div class="scan-item scan-item-weixin">
            <div class="scan-icon" @click="modalChange(true,'weixin')" />
            <div class="scan-img-wrap">
              <div class="scan-img">
                <img v-cdn-src="'img/scan-weixin.jpg'" alt="微信">
                <p>关注微信</p>
              </div>
            </div>
          </div>
        </div>
        <div class="copy">
          <span><em style="font-size:1.5em;vertical-align:middle">&copy; </em>2016 网易味央 浙ICP备15006614号</span><span style="padding:0 10px" /><span>浙公网安备 33052302000141号</span>
        </div>
        <div class="about">
          <a v-for="(item, i) in link" :key="i" :href="item.href" class="link" target="_blank">{{ item.txt }}</a>
        </div>
      </footer>
    </div>
    <div v-if="platform!=='pc'" v-show="modal" class="modal" @click="modalChange(false)">
      <div class="modal-body" @click.stop>
        <i class="close-icon" @click="modalChange(false)"></i>
        <div>
          <img v-cdn-src="scanImg[modalType].img" alt="">
          <div>
            <span>{{ scanImg[modalType].txt }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import footerConfig from '@/config/footer.config';
import Coopera from './coopera';
export default {
  components: {
    Coopera
  },
  data() {
    return {
      modal: false,
      scanImg: {
        weixin: {
          img: 'img/scan-weixin.jpg',
          txt: '扫码关注公众号'
        },
        weibo: {
          img: 'img/scan-weibo.png',
          txt: '扫码关注微博'
        }
      },
      modalType: 'weixin',
      ...footerConfig
    };
  },
  computed: {
    activeIndex() {
      return this.platform === 'pc' ? 0 : -1;
    }
  },
  methods: {
    modalChange(status, type) {
      this.modal = status;
      if (type) {
        this.modalType = type;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
.layout_footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.layout_footer-wrap {
  width: 100%;
  border-top: 1px solid $border-lv-3-color;
}
.copy {
  color: $color-lv-2;
}
.about .link:nth-child(n + 2) {
  margin-left: 20px;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  li {
    margin: 0 10px;
  }
}
.tel {
  margin-top: 0;
  text-align: center;
  line-height: 20px;
  color: #222;
}
.scan {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &-item {
    position: relative;
    &-weibo {
      .scan-icon {
        background-image: url('../../assets/img/icon-weibo-1.png');
      }
    }
    &-weixin {
      .scan-icon {
        background-image: url('../../assets/img/icon-weixin-1.png');
      }
    }
  }
  &-item:nth-child(n + 2) {
    margin-left: 50px;
  }
  &-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &-img {
    &-wrap {
      padding-bottom: 12px;
      bottom: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: none;
    }
    padding: 10px 12px 15px;
    border: 1px solid $border-lv-3-color;
    background-color: #fff;
    p {
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
      line-height: 1;
      margin-top: 4px;
    }
    img {
      display: block;
      width: 58px;
      // height: 55px;
    }
  }
}

.com {
  max-width: 1090px;
  margin: 0 auto;
  &_title {
    text-align: center;
    font-size: 24px;
    color: $color-black;
    font-weight: 400;
    margin-bottom: 20px;
  }
}
.layout-pc {
  .tab {
    & {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
    /deep/ .tabs-label {
      font-size: 14px;
    }
    /deep/ .tab-pane {
      margin-top: 20px;
    }
  }
  .scan {
    &-item {
      position: relative;
      &:hover {
        .scan-img-wrap {
          display: block;
        }
        .scan-weibo {
          .scan-icon {
            background-image: url('../../assets/img/icon-weibo.png');
          }
        }
        .scan-weibo {
          .scan-icon {
            background-image: url('../../assets/img/icon-weixin.png');
          }
        }
      }
    }
  }
  .layout_footer-wrap {
    margin-top: 50px;
    height: 110px;
  }
}
.layout-mobile {
  .com {
    padding: 0 50px;
  }
  .footer {
    background: #f7f7f7;
    padding-top: 15px;
  }
  .layout_footer-wrap {
    border: 0;
  }
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999999;
}
.modal-body {
  background: #fff;
  width: 87%;
  box-sizing: border-box;
  padding: 40px 80px 38px;
  position: relative;
  img{
    width: 100%;
    margin-bottom: 10px;
  }
  span {
    display: inline-block;
    width: 100%;
    font-size: 18px;
    line-height: 25px;
    color: #222;
    text-align: justify;
    height: 25px;
    padding: 0 13px;
    box-sizing: border-box;
    &::after {
      display: inline-block;
      width: 100%;
      height: 0;
      overflow: hidden;
      content: '';
    }
  }
  .close-icon {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 12px;
    height: 12px;
    padding: 5px;
    background: url('../../assets/img/times.png') no-repeat;
    background-position: center center;
  }
}
</style>
<style>
/* 移动适配 */
.layout-mobile .layout_footer {
  flex-direction: column;
  justify-content: flex-start;
  padding: 18px 0;
}
.layout-mobile .copy span {
  text-align: center;
  display: block;
}
.layout-mobile .scan {
  order: 1;
}
.layout-mobile .about {
  order: 2;
  margin: 20px 0;
}
.layout-mobile .copy {
  order: 3;
}
</style>
