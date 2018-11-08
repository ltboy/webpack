<template>
  <div class="page">
    <div class="banner">
      <img v-cdn-src="banner[platform]" />
    </div>
    <div class="extra-dis tag">
      <h4>菜谱推荐</h4>
      <span>COOKBOOK</span>
    </div>
    <div v-once class="layout-main">
      <div class="section mt60 pb50 extra">
        <p>网易味央秉承网易一贯的严谨态度，以科技养殖方式和幸福养殖理念，保障所产猪肉品质。</p>
        <p>在产品加工环节，我们在恒定低温下进行标准化屠宰分割、包装、冷链运输。为产品长效保鲜，锁住营养。</p>
        <p>在生产过程中，我们设置多个关键控制点和检验检疫关卡，实行全程质量追溯。确保每一份产品从农场到用户餐桌品质如一，安心美味。</p>
        <p>网易味央黑猪谷饲慢养300天，美妙的风味沉淀于肌理。软糯的胶质口感，丰腴肥瘦比，非常适合各式料理烹饪，肉质鲜嫩多汁，每一口都肉香四溢。</p>
      </div>
      <div class="cookbook-list">
        <router-link v-for="item in list" :key="item.name" :to="'/cookbook/detail/'+item.name" class="line-block to-detail">
          <div class="cookbook-item">
            <img v-cdn-src="item.banner" alt="">
            <div :class="{blank:item.color}" class="intro">
              <h4 v-html="getName(item.name)"></h4>
              <div class="extra">{{ item.sub }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <button v-if="hasNext" class="btn btn-lg action-lg mt50" @click="more">更多菜谱</button>
    <button class="btn btn-lg action-lg mt50">
      <router-link to="/shop/pigpa" class="link-block">猪爸餐厅</router-link>
    </button>
  </div>
</template>
<script>
import { list } from '@/config/cookbook.config';
export default {
  data() {
    return {
      banner: {
        pc: 'img/cookbook-ban.png',
        mobile: 'img/cookbook-ban-m.jpg'
      },
      page: 1
    };
  },
  computed: {
    list() {
      let length = this.page * 5 < list.length ? this.page * 5 : list.length;
      return list.slice(0, length);
    },
    hasNext() {
      return this.page * 5 < list.length;
    }
  },
  methods: {
    more() {
      this.page = this.page + 1;
    },
    getName(name) {
      if (this.platform === 'pc') {
        return name;
      } else {
        return name.replace(/^(.{4})(.+)$/gi, '$1<br/>$2');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.section {
  border-bottom: 1px solid #dedede;
  padding-left: 20px;
}
.cookbook-item {
  position: relative;
  width: 100%;
  margin-top: 2px;
  img {
    width: 100%;
  }
  .intro {
    writing-mode: vertical-lr;
    position: absolute;
    letter-spacing: 2px;
    font-family: SourceHanSerifTC-Light;
  }
  h4 {
    font-family: SourceHanSerifTC-Light;
    letter-spacing: 3px;
    &::after {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url('../../assets/img/icon.png') no-repeat, #efefef;
      background-position: center center;
      border-radius: 50%;
      opacity: 0.6;
    }
  }
}
.to-detail {
  h4 {
    color: #fff;
  }
  div {
    color: #999;
  }
  &:nth-child(even) {
    .blank {
      h4 {
        color: #222;
      }
      div {
        color: #666;
      }
    }
  }
}
.tag {
  width: 85%;
  margin: 0 auto;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fff;
  top: -17px;
}
.layout-pc {
  .cookbook-list {
    margin-top: 60px;
  }
  .cookbook-item {
    .intro {
      top: 37px;
    }
    h4 {
      margin-right: 14px;
      &::after {
        margin-top: 20px;
      }
    }
  }
  .to-detail {
    &:nth-of-type(odd) {
      .intro {
        left: 70px;
      }
    }
    &:nth-of-type(even) {
      .intro {
        right: 70px;
      }
    }
  }
}
.layout-mobile {
  .banner {
    margin: 0;
  }
  .to-detail {
    h4 {
      font-size: 12px;
      line-height: 17px;
      &::after {
        width: 10px;
        height: 10px;
        background-size: 6px 6px;
        position: absolute;
        left: 2px;
        bottom: -20px;
      }
    }
    .intro {
      top: 18px;
    }
    &:nth-of-type(odd) {
      .intro {
        left: 40px;
      }
    }
    &:nth-of-type(even) {
      .intro {
        right: 40px;
      }
    }
  }
}
</style>
