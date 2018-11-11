<template>
  <div class="page article">
    <h3 v-if="article.title" class="title">{{ article.title }}</h3>
    <div class="aspect-box" aspect='900/350'>
      <div class="aspect-box__content">
        <img v-cdn-src="article.img" alt="" class="banner">
      </div>
    </div>
    <div v-for="(section,i) in article.section" :key="i" class="section">
      <h5 class="tit">{{ section.tit }}</h5>
      <p v-for="(p,j) in section.txt" :key="j">{{ p }}</p>
      <div v-if="section.video" class="video-container">
        <video v-cdn-src="section.video"></video>
      </div>
      <div v-if="section.img&&section.img.list.length" class="img-container">
        <div class="img">
          <img v-cdn-src="img" v-for="(img,k) in section.img.list" :key="k" alt="">
        </div>
        <div v-if="section.img.alt" class="section-alt">
          <div>{{ section.img.alt }}</div>
        </div>
      </div>
    </div>
    <router-link to="/news">
      <button class="btn btn-lg action-lg">更多资讯</button>
    </router-link>
  </div>
</template>
<script>
import config from '@/config/news.config';
export default {
  computed: {
    article() {
      let news = config.map.find(item => item.id === this.$route.params.id);
      return news || config.map[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  height: 100%;
  margin: 0 auto;
}
[aspect='900/350']{
  position: relative;
  aspect-ratio: '900:350';
  overflow: hidden;
}
.title,
.tit {
  text-align: center;
}
.title,
.motto,
.tit .section p {
  padding: 0 15px;
}
.title {
  font-size: 32px;
  font-family: SourceHanSerifSC-Regular;
  line-height: 35px;
  margin-bottom: 30px;
}
.tit {
  font-size: 24px;
  line-height: 35px;
}

.section p {
  line-height: 20px;
  margin-top: 30px;
  font-size: 14px;
}
.video-container,
.img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  img,
  video {
    height: 100%;
  }
}

.layout-pc {
  .page {
    width: 900px;
    margin: 0 auto;
  }
  .title {
    margin-top: 30px;
  }
  .motto {
    padding: 0 185px;
  }
  .section {
    margin-bottom: 50px;
  }
  .img {
    height: 176px;
    img:nth-child(n + 2) {
      margin-left: 8px;
    }
  }
  .video {
    height: 350px;
  }
  .alt {
    padding: 25px 0 0;
    div {
      padding-bottom: 10px;
    }
  }
  .video-container,
  .img {
    margin-top: 50px;
  }
}
.layout-mobile {
  .page {
    width: 100%;
  }
  p,
  .img-container {
    padding: 0 15px;
  }
  .title {
    margin-top: 15px;
  }
  .section {
    margin-bottom: 30px;
  }
  .video-container,
  .img {
    margin-top: 30px;
  }
  .img {
    height: 165px;
  }
  .video {
    height: 250px;
  }
  .alt {
    padding: 10px 15px 0;
    div {
      padding-bottom: 5px;
    }
  }
}
</style>
