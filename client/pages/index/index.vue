<template>
  <div class="page page-index">

    <!-- banner -->

    <div class="pc-banner" style="width:100%">
      <slider :options="banner.options">
        <slideritem v-for="(item, index) in banner.slider[platform]" :key="index">
          <img v-cdn-src="item.url" v-if="item.type=='img'" class="slider" style="width:100%" width="100" />
        </slideritem>
      </slider>
    </div>

    <div class="layout-main">
      <!-- 介绍 -->
      <div class="layout-wrap recommend-wrap">
        <div class="recommend-com layout-main">
          <div v-for="(item, i) in recommend.list" :key="i" class="recomend-item">
            <img v-cdn-src="item.img" :alt="item.title">
            <router-link :to="item.url">
              <div class="recommend-msg">
                <div class="recommend-msg-order ff-suk">{{ item.order }}</div>
                <h4 class="recommend-msg-title">{{ item.title }}</h4>
                <p class="recommend-msg-intro extra">{{ item.intro }}</p>
                <div class="more">
                  <span style="color:#fff;">MORE</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="recommend-more layout-main">
          <div class="more-tit flex-center extra">更多<br />介绍</div>
          <router-link v-for="(more,i) in recommend.more" :key="i" :to="more.url">
            <div class="more-item center">
              <h4 class="title">{{ more.title }}</h4>
              <div class="not-p">
                <p class="intro">{{ more.intro }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- 菜谱 -->
      <component :is="cookebook" />
      <!-- 资讯 -->
      <div class="news-slider">
        <m-title v-if="platform!=='pc'" title="味央资讯" link="/news" sub="NEWS" style="margin-top:15px;padding-right:15px" />
        <slider ref="newsSlider" :options="newsoption" tabindex="0">
          <slideritem v-for="(item, index) in newsList" :key="index" class="news-slider-item">
            <div class="react-box">
              <router-link :to="'/news/detail/'+item.id" class="no-drag">
                <img v-cdn-src="item.img||newsDefault" class="slider" />
              </router-link>
            </div>
            <div class="msg">
              <h4 v-if="platform=='pc'">味央资讯</h4>
              <p v-if="platform=='mobile'" class="date">{{ item.date }}</p>
              <p class="ell">{{ item.title }}</p>
            </div>
          </slideritem>
        </slider>

        <div v-if="platform=='pc'" class="action">
          <i class="pre" @click="slider(-1)"></i>
          <i class="next" @click="slider(1)"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from '@/config/index.config';
import newsList from '@/config/news.config';
import MTitle from './title';
let newsLength = 4;
export default {
  components: {
    MTitle,
    cCookbook: () =>
      import(/* webpackChunkName: "pc-com" */ './cookbook/cookbook'),
    mCookbook: () =>
      import(/* webpackChunkName: "m-com" */ './cookbook/cookbook-m')
  },
  data() {
    return {
      ...config,
      newsDefault: newsList.default,
      newsoption: {
        pagination: false,
        loop: true,
        autoplay: 5000
      }
    };
  },
  computed: {
    newsList() {
      return newsList.map.length <= newsLength
        ? newsList.map
        : newsList.map.splice(0, newsLength);
    },
    cookebook() {
      return this.platform !== 'mobile' ? 'cCookbook' : 'mCookbook';
    }
  },
  methods: {
    slider(dir) {
      if (dir === -1) {
        this.$refs.newsSlider.$emit('slidePre');
      } else {
        this.$refs.newsSlider.$emit('slideNext');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';
// 介绍
.recommend-wrap {
  background: #f7f7f7;
}
.recommend-com {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.recommend-msg-title,
.recommend-msg-intro,
.recommend-msg .more,
.recommend-msg,
.recommend-msg-order {
  position: absolute;
}
.recomend-item {
  position: relative;
  cursor: pointer;
  flex-grow: 1;
  flex-shrink: 1;
  &:hover {
    .recommend-msg {
      background: rgba($color: #000000, $alpha: 0.35);
    }
  }
}
.recommend-msg {
  background: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: #fff;
  h4,
  p {
    color: #fff;
  }
}
.recommend-msg .more {
  color: #fff;
  width: 180px;
  cursor: pointer;
}
.recommend-msg .more span {
  position: relative;
  height: 6px;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
  transition-delay: 0;
  left: 0px;
  top: 28px;
}
.recommend-msg .more::after {
  content: '';
  display: block;
  border-bottom: 1px solid #fff;
  transition: all 0.3s ease;
  width: 140px;
  height: 35px;
  background-image: url('../../assets/img/icon.png');
  background-repeat: no-repeat;
  background-size: 12px 5px;
  background-position-x: -20px;
  background-position-y: center;
}
.recommend-msg .more:hover {
  &::after {
    width: 100%;
    background-position-x: 0;
  }
  & span {
    left: 30px;
  }
}
.recommend-more {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.action {
  i {
    display: block;
    width: 12px;
    height: 20px;
    cursor: pointer;
    padding: 10px;
    background: url('../../assets/img/icon-right.png') no-repeat;
    background-position: center center;
    position: absolute;
    z-index: 10000;
    top: 50%;
    transform: translateY(-50%);
  }
  .pre {
    left: 10px;
    transform: rotate(180deg);
  }
  .next {
    right: 10px;
  }
}

.layout-pc {
  .recommend-msg {
    background: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    h4,
    p {
      color: #fff;
    }
  }
  .recommend-msg .more {
    left: 50px;
    bottom: 50px;
  }
  .recommend-msg-order {
    font-size: 60px;
    line-height: 96px;
    top: 20px;
    left: 50px;
  }
  .recommend-msg-title {
    left: 50px;
    top: 37.6%;
  }
  .recommend-msg-intro {
    left: 50px;
    top: 50%;
  }
  .recommend-more {
    height: 178px;
  }
  .more-tit {
    border: 1px solid #666;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    font-size: 18px;
    line-height: 20px;
  }
  .more-item {
    cursor: pointer;
    .title {
      font-size: 24px;
    }
  }
  .recomend-item {
    overflow: hidden;
    width: 33.33%;
    transition: flex 0.8s cubic-bezier(0.5, 0, 0.1, 1);
  }
  .recommend-msg-intro {
    width: 390px;
    letter-spacing: 1px;
    transition: transform 0.8s cubic-bezier(0.5, 0, 0.1, 1);
    opacity: 0;
    transform: translate3d(-60px, 40px, 0);
  }
  .recomend-item:hover {
    flex-shrink: 0;
    width: auto;
    .recommend-msg-intro {
      transform: translate3D(0, 0, 0);
      opacity: 1;
    }
  }
  .news-slider {
    position: relative;
    img {
      width: 1090px;
      height: 350px;
    }
  }
  .news-slider-item {
    display: block;
    font-size: inherit;
    position: relative;
    h4,
    p {
      color: #fff;
      text-align: left;
    }
    .msg {
      position: absolute;
      top: 106px;
      left: 775px;
    }
    p {
      width: 238px;
      white-space: pre-wrap;
    }
  }
}
// 移动端

.layout-mobile {
  .recommend-com {
    flex-wrap: wrap;
  }
  .recomend-item {
    width: 50%;
    overflow: hidden;
    @include flexContainer(188, 170);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .recommend-msg-order {
      top: 5px;
      left: 30px;
      font-size: 40px;
      line-height: 76px;
      color: #fff;
    }
    .recommend-msg-title {
      top: 81px;
      left: 30px;
    }
    .recommend-msg .more {
      left: 30px;
      bottom: 30px;
    }
    &:first-child {
      width: 100%;
      @include flexContainer(375, 250);
      .recommend-msg-order {
        top: 55px;
      }
      .recommend-msg-title {
        top: 141px;
      }
    }
  }
  .recommend-more {
    height: 140px;
  }
  .more-item {
    border: 1px solid #666;
    border-radius: 50%;
    height: 75px;
    width: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      font-size: 18px;
      line-height: 26px;
    }
  }
  .news-slider {
    padding-left: 15px;
    /deep/ .slider-wrapper {
      align-items: flex-start;
    }
    .news-slider-item {
      width: 77%;
      &:nth-child(n + 2) {
        margin-left: 5px;
      }
    }
    .react-box {
      @include flexContainer(280, 250);
      width: 100%;
      position: relative;
      overflow: hidden;
    }
    img {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .msg {
      text-align: center;
      margin-top: 10px;
      p {
        margin: 0;
        color: #000;
        text-align: left;
      }
      .date {
        font-size: 14px;
        line-height: 20px;
        font-weight: 900;
        margin-bottom: 5px;
        font-family: SourceHanSerifTC-SemiBold;
      }
    }
  }
}
</style>
