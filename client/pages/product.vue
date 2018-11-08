<template>
  <div class="page">
    <div class="pc-banner" style="width:100%">
      <slider autoplay>
        <slideritem v-for="(item, index) in slider" :key="index">
          <img v-cdn-src="item" class="slider" style="width:100%" width="100" />
        </slideritem>
      </slider>
    </div>
    <div v-once class="layout-main">
      <!-- 菜谱推荐 -->
      <router-link :to="cookbook.href">
        <div class="cookie">
          <div class="aside-tit">
            <h4 class="tit">{{ cookbook.title }}</h4>
            <div class="sup-tit">{{ cookbook.suptitle }}</div>
          </div>
          <img v-cdn-src="cookbook.src" alt="">
        </div>
      </router-link>
      <div class="product-item-1 product-item mt50">
        <div class="top">
          <div class="msg">
            <h4>{{ product[0].tit }}</h4>
            <div class="not-p">
              <p v-html="product[0].supTit"></p>
            </div>
          </div>
          <a :href="product[0].href" class="link-block" target="_blank">
            <div class="pro-item">
              <img v-cdn-src="product[0].img" :alt="product[0].tit" class="img-lg">
              <div class="toast not-p">
                <p>{{ product[0].tit }}</p>
                <div class="action-sm">立即购买</div>
              </div>
            </div>
          </a>
        </div>
        <div class="list">
          <a v-for="(item, i) in product[0].item" :key="i" :href="product[0].href" :class="{'extra':i>=2}" target="_blank" class="img-sm">
            <div class="pro-item">
              <img v-cdn-src="item.src" :alt="product[0].tit">
              <div class="toast not-p">
                <p>{{ product[0].tit }}</p>
                <div class="action-sm">立即购买</div>
              </div>
            </div>
          </a>
        </div>
        <a :href="product[0].href">
          <div class="more">
            <span></span>
          </div>
        </a>
      </div>

      <div class="product-item-2 product-item mt50">
        <div class="top">
          <div class="msg">
            <h4>{{ product[1].tit }}</h4>
            <div class="not-p mt10">
              <p v-html="product[1].supTit"></p>
            </div>
          </div>
          <a :href="product[1].href" class="extra">
            <div class="more">
              <span></span>
            </div>
          </a>
        </div>
        <div class="list">
          <a v-for="(item, i) in product[1].item" :key="i" :href="product[0].href" :class="{'extra':i>=2}" class="line-block img-sm" target="_blank">
            <div class="pro-item">
              <img v-cdn-src="item.src">
              <div class="toast not-p">
                <p>{{ product[1].tit }}</p>
                <div class="action-sm">立即购买</div>
              </div>
            </div>
          </a>
        </div>
        <a :href="product[1].href" class="extra-dis more-r">
          <div class="more">
            <span></span>
          </div>
        </a>
      </div>

      <div class="product-item-3 product-item mt50">
        <div class="top">
          <div class="msg">
            <h4>{{ product[2].tit }}</h4>
            <div class="not-p mt10">
              <p v-html="product[2].supTit"></p>
            </div>
          </div>
          <a :href="product[2].href" class="extra">
            <div class="more">
              <span></span>
            </div>
          </a>
        </div>
        <div class="list">
          <a v-for="(item, i) in product[2].item" :key="i" :href="product[2].href" class="line-block img-sm" target="_blank">
            <div class="pro-item">
              <img v-cdn-src="item.src">
              <div class="toast not-p">
                <p>{{ product[2].tit }}</p>
                <div class="action-sm">立即购买</div>
              </div>
            </div>
          </a>
        </div>
        <a :href="product[2].href" class="extra-dis">
          <div class="more">
            <span></span>
          </div>
        </a>
      </div>

      <div class="product-item-4 product-item mt50">
        <div class="top">
          <div class="msg">
            <h4>{{ product[3].tit }}</h4>
            <div class="not-p mt10">
              <p v-html="product[3].supTit"></p>
            </div>
            <a :href="product[2].href" class="extra">
              <div class="more">
                <span></span>
              </div>
            </a>
          </div>
        </div>
        <div class="list">
          <a v-for="(item, i) in product[3].item" :key="i" :href="product[3].href" class="line-block img-sm" target="_blank">
            <div class="pro-item">
              <img v-cdn-src="item.src">
              <div class="toast not-p">
                <p>{{ product[3].tit }}</p>
                <div class="action-sm">立即购买</div>
              </div>
            </div>
          </a>
        </div>
        <a :href="product[3].href" class="extra-dis more-r">
          <div class="more">
            <span></span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: {
        pc: ['img/product/ban-1.png'],
        mobile: ['img/product/ban-1-m.jpg']
      },
      cookbook: {
        href: '/cookbook',
        src: 'img/product/cooke-1-1.png',
        title: '美味的猪肉',
        suptitle: '网易味央黑猪肉美食菜'
      },
      product: [
        {
          tit: '黑猪肉',
          supTit: '谷饲慢养 300天， 软糯胶质的<br/>口感，鲜嫩多汁，美味极致',
          img: 'img/product/1-1.png',
          href: 'https://www.kaola.com/brand/2167.html',
          item: [
            {
              src: 'img/product/1-2.png'
            },
            {
              src: 'img/product/1-3.png'
            },
            {
              src: 'img/product/1-4.png'
            }
          ]
        },
        {
          tit: '黑猪肉礼盒',
          supTit: '优选黑猪人气稀缺部位<br/>有骨有肉，营养均衡',
          img: '',
          href: 'https://www.kaola.com/brand/2167.html',
          item: [
            {
              src: 'img/product/2-1.png'
            },
            {
              src: 'img/product/2-2.png'
            },
            {
              src: 'img/product/2-3.png'
            }
          ]
        },
        {
          tit: '黑猪肉衍生品',
          supTit: '甄选黑猪优质部位，匠心精制；最大程度保留黑猪肉的营养鲜香',
          img: '',
          href: 'https://www.kaola.com/brand/2167.html',
          item: [
            {
              src: 'img/product/3-1.png'
            },
            {
              src: 'img/product/3-2.png'
            },
            {
              src: 'img/product/3-3.png'
            }
          ]
        },
        {
          tit: '黑猪肉礼品卡',
          supTit: '佳节送礼、员工福利、商务馈赠<br/>彰显品位的挑剔之选',
          img: '',
          href: 'https://www.kaola.com/brand/2167.html',
          item: [
            {
              src: 'img/product/4-1.png'
            },
            {
              src: 'img/product/4-2.png'
            },
            {
              src: 'img/product/4-3.png'
            }
          ]
        }
      ]
    };
  },
  computed: {
    slider() {
      return this.banner[this.platform];
    }
  }
};
</script>
<style lang="scss" scoped>
.cookie {
  position: relative;
  .aside-tit {
    position: absolute;
    color: #fff;
    &::after {
      content: '';
      display: block;
      background: url('../assets/img/icon.png') no-repeat, #efefef;
      background-position: center center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      opacity: 0.6;
    }
    .tit {
      color: #fff;
    }
    .sup-tit {
      line-height: 18px;
    }
  }
}
.more {
  position: relative;
  width: 180px;
  cursor: pointer;
}
// 左侧
.more span {
  position: absolute;
  display: block;
  width: 31px;
  height: 19px;
  background: url('../assets/img/more.png') no-repeat;
  background-position: 0 bottom;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
  transition-delay: 0;
  left: 0px;
  top: 0;
}
.more::after {
  content: '';
  display: block;
  border-bottom: 1px solid #222;
  transition: all 0.3s ease;
  width: 140px;
  height: 30px;
  background-image: url('../assets/img/icon.png');
  background-repeat: no-repeat;
  background-size: 12px 5px;
  background-position-x: -20px;
  background-position-y: center;
}
.more:hover {
  &::after {
    width: 100%;
    background-position-x: 0;
  }
  & span {
    left: 30px;
  }
}
// 右侧
.product-item {
  &::after {
    clear: both;
    content: '';
    height: 0;
    overflow: hidden;
    display: block;
  }
}
.more-r {
  float: right;
}
.layout-pc .product-item-3,
.more-r {
  .more {
    background-position: right bottom;
    height: 31px;
    & span {
      left: auto;
      right: 0;
    }
  }
  .more::after {
    background-position-x: 200px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .more:hover {
    &::after {
      width: 100%;
      transform-origin: right center;
      background-position-x: right;
    }
    & span {
      right: 30px;
    }
  }
}
.pro-item {
  position: relative;
  .toast {
    position: absolute;
    display: none;
    padding: 10px 35px;
    background: #fff;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    .action-sm {
      margin: 5px auto 0;
      height: 16px;
      width: 70px;
      border-radius: 20px;
      border: 1px solid #999;
      font-size: 12px;
      line-height: 14px;
    }
  }
  &:hover {
    .toast {
      display: block;
    }
  }
}
.link-block {
  display: block;
}
.layout-pc {
  p {
    font-size: 14px;
    line-height: 20px;
  }
  .aside-tit {
    top: 42px;
    left: 90px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    &::after {
      position: absolute;
      left: 0;
      top: 195px;
    }
    .tit {
      width: 25px;
    }
    .sup-tit {
      margin-left: 14px;
      width: 16px;
    }
  }
  .product-item-1 {
    .top {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-content: flex-start;
      .msg {
        writing-mode: vertical-lr;
        h4 {
          margin-right: 20px;
        }
      }
    }
    .list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 8px;
    }
  }
  .product-item-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .top {
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      justify-content: center;
    }
    .list {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      .link-block {
        margin-left: 8px;
      }
    }
  }
  .product-item-3 {
    .top {
      overflow: hidden;
      .msg {
        text-align: right;
      }
      .more {
        float: right;
      }
    }
    .list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 20px;
    }
  }
  .product-item-4 {
    position: relative;
    .top {
      position: absolute;
    }
    .list {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: flex-start;
      .line-block:nth-child(3) {
        margin-right: 50px;
        align-self: flex-end;
      }
    }
  }
}
.layout-mobile {
  p {
    line-height: 18px;
  }
  .cookie {
    padding: 0 13px;
    .aside-tit {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &::after {
        margin: 10px auto 0;
      }
    }
    img {
      width: 100%;
    }
  }
  .more {
    margin-left: 8px;
  }
  .more-r {
    margin-right: 8px;
  }
  .product-item {
    .msg {
      text-align: center;
      margin-bottom: 15px;
    }
  }
  .img-lg {
    width: 100%;
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    .img-sm {
      display: block;
      width: 45%;
      margin-top: 5px;
      flex-grow: 1;
      background: #f7f7f7;

      &:nth-child(3) {
        margin-left: 5px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .product-item-3,
  .product-item-4 {
    .img-sm {
      &:first-child {
        width: 100%;
      }
    }
  }
  .more {
    margin-top: 10px;
  }
  .product-item-1 {
    h4 {
      margin-bottom: 10px;
    }
  }
  .product-item-1,
  .product-item-2 {
    .img-sm {
      &:first-child {
        width: 45%;
      }
      &:nth-child(2) {
        margin-left: 5px;
      }
    }
  }
}
</style>
