<template>
  <div class="news-page">
    <div class="banner">
      <img v-cdn-src="banner[platform]" />
    </div>
    <div class="layout-main">
      <div v-if="platform=='pc'" class="news-wall news-item">
        <router-link :to="'/news/detail/'+wall.id" class="link-block">
          <img v-cdn-src="wall.img||defaultImg" alt="">
        </router-link>
        <div class="desc">
          <div class="desc-txt">
            <h4>{{ wall.tag }}</h4>
            <p class="sub-tag">{{ wall.subTag }}</p>
          </div>
          <router-link :to="'/news/detail/'+wall.id" class="link-btn" style="padding:5px">
            <button class="btn-more"></button>
          </router-link>
        </div>
      </div>
      <div v-else class="news-item news-item-section">
        <div class="aside">
          <router-link :to="'/news/detail/'+wall.id">
            <img v-cdn-src="wall.img||defaultImg">
          </router-link>
        </div>
        <div class="section not-p">
          <p class="news-time">{{ wall.date }}</p>
          <router-link :to="'/news/detail/'+wall.id">
            <h4 class="news-title ell">{{ wall.title }}</h4>
          </router-link>
          <div v-if="platform=='pc'" class="news-section">
            <p>{{ wall.paragraph||wall.section[0].txt[0] }}</p>
          </div>
          <router-link :to="'/news/detail/'+wall.id">
            <button class="btn btn-default">查看更多</button>
          </router-link>
        </div>
      </div>
      <div v-for="news in newslist" :key="news.id" class="news-item news-item-section">
        <div class="aside">
          <router-link :to="'/news/detail/'+news.id">
            <img v-cdn-src="news.img||defaultImg">
          </router-link>
        </div>
        <div class="section not-p">
          <p class="news-time">{{ news.date }}</p>
          <router-link :to="'/news/detail/'+news.id">
            <h4 class="news-title ell">{{ news.title }}</h4>
          </router-link>
          <div v-if="platform=='pc'" class="news-section">
            <p>{{ news.paragraph||news.section[0].txt[0] }}</p>
          </div>
          <router-link :to="'/news/detail/'+news.id">
            <button class="btn btn-default">查看更多</button>
          </router-link>
        </div>
      </div>
      <button v-if="hasNext" class="btn btn-lg action-lg" @click="more">更多资讯</button>
    </div>
  </div>
</template>
<script>
import config from '@/config/news.config';
const max = 4;
export default {
  data() {
    return {
      page: 1,
      defaultImg: config.default,
      banner: config.banner,
      wall: config.map[0]
    };
  },
  computed: {
    newslist() {
      let length =
        this.page * max < config.map.length
          ? this.page * max
          : config.map.length;
      return config.map.slice(1, length + 1);
    },
    hasNext() {
      return this.page * max < config.map.length;
    }
  },
  methods: {
    more() {
      this.page = this.page + 1;
    }
  }
};
</script>
<style lang="scss" scoped>
.news-wall {
  margin-top: 60px;
  position: relative;
  height: 440px;
  .desc {
    top: 30px;
    left: 90px;
    min-width: 60px;
    position: absolute;
    &-txt {
      writing-mode: vertical-lr;
      p,
      h4 {
        color: #fff;
      }
    }
    h4 {
      letter-spacing: 6px;
      margin-right: 20px;
    }
    p {
      margin-top: 0;
      letter-spacing: 2px;
    }
  }
  img {
    width: 100%;
    height: 440px;
  }
  .btn-more {
    margin-top: 15px;
  }
}

.layout-pc {
  .news-item {
    margin-bottom: 50px;
    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }
  .news-item-section {
    height: 264px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    .aside {
      // width: 400px;
      flex: 0 0 400px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .section {
      margin-left: 90px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
  .news-time {
    width: 183px;
    height: 35px;
    font-size: 24px;
    font-family: SourceHanSerifTC-SemiBold;
    font-weight: 600;
    color: rgba(34, 34, 34, 1);
    line-height: 35px;
    letter-spacing: 2px;
  }
  .news-title {
    width: 492px;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 28px;
    letter-spacing: 2px;
  }
  .news-section {
    width: 593px;
    height: 50px;
    font-size: 14px;
    font-family: PingFangSC-Thin;
    color: rgba(102, 102, 102, 1);
    line-height: 20px;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .news-section p {
    float: right;
    margin-left: -5px;
    width: 100%;
    word-break: break-all;
  }
  .news-section::before {
    float: left;
    width: 5px;
    content: '';
    height: 40px;
  }
  .news-section::after {
    float: right;
    content: '. . .';
    background: #fff;
    height: 25px;
    line-height: 25px;
    /* 为三个省略号的宽度 */
    width: 3em;
    /* 使盒子不占位置 */
    margin-left: -3em;
    /* 移动省略号位置 */
    position: relative;
    left: 100%;
    top: -20px;
    padding-right: 5px;
  }
}
.layout-mobile {
  .layout-main {
    padding: 15px;
  }
  .news-item {
    margin-bottom: 20px;
    .aside {
      img {
        width: 100%;
      }
    }
    .btn {
      margin-top: 10px;
    }
    .section {
      .news-time {
        font-family: Helvetica;
        color: #000;
        line-height: 17px;
        margin-top: 10px;
        letter-spacing: 1px;
      }
      .news-title {
        font-size: 12px;
        line-height: 17px;
        margin-top: 5px;
        font-family: PingFangSC-Regular;
      }
      .news-section {
        color: #666;
        margin-top: 5px;
        margin-bottom: 10px;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
