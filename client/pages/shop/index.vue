<template>
  <div class="page">
    <div class="banner">
      <img v-cdn-src="banner[platform]" alt="" srcset="">
    </div>
    <div class="layout-main">
      <div v-once class="shop-online">
        <h4 class="center">ONLINE STORE</h4>
        <ul class="shop-online-list center-block">
          <li v-for="(item,i) in online" :key="i" class="shop-online-item">
            <span class="name ell">{{ item.name }}</span>
            <span class="address ell"><a :href="item.address" class="link-line" target="_blank">{{ item.address }}</a></span>
          </li>
        </ul>
      </div>
      <div class="shop-offline">
        <h4 class="center">OFFLINE STORE</h4>
        <ul class="shop-offline-list center-block">
          <li v-for="(item,i) in offline" :key="i" class="shop-offline-item">
            <img v-cdn-src="item.img" alt="item.name">
            <div class="info">
              <h4>{{ item.name }}</h4>
              <div class="address">
                <div class="not-p">
                  <p>{{ item.openHours }}</p>
                  <p>地址:{{ item.address }}</p>
                </div>
              </div>
              <!-- <div class="tel">{{ item.tel }}</div> -->
            </div>
          </li>
        </ul>
      </div>
      <button v-if="hasNext" class="btn btn-lg action-lg" @click="more">更多门店</button>
    </div>
  </div>
</template>
<script>
import config from '@/config/shop.config';
const max = 5;
export default {
  data() {
    return {
      banner: {
        pc: 'img/shop-banner-1.png',
        mobile: 'img/shop-banner-1-m.jpg'
      },
      page: 1,
      online: config.shop.online
    };
  },
  computed: {
    offline() {
      let length =
        this.page * max < config.shop.offline.length
          ? this.page * max
          : config.shop.offline.length;
      return config.shop.offline.slice(0, length);
    },
    hasNext() {
      return this.page * max < config.shop.offline.length;
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
.shop-online-list {
  li {
    line-height: 40px;
    height: 40px;
    padding-left: 70px;
    position: relative;
    &:nth-child(n + 2) {
      box-sizing: content-box;
      margin-top: 20px;
    }
    &::before {
      display: inline-block;
      width: 40px;
      height: 40px;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-image: url('~assets/img/icon.png');
      background-color: #ddd;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 50%;
      vertical-align: middle;
      opacity: 0.6;
    }
  }
  .name {
    width: 150px;
  }
  .address {
    text-indent: 10px;
  }
}
.shop-offline-item {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  background: #f7f7f7;
  box-sizing: border-box;
  &:nth-child(n + 2) {
    margin-top: 20px;
  }
  .info {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    letter-spacing: 2px;
    p{
      font-family: PingFangSC-Thin;
    }
  }
  .address {
    margin-bottom: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid #999;
    position: relative;
    width: 100%;
    &::before {
      background-image: url('~assets/img/icon-address.png');
    }
  }
  .tel {
    position: relative;
    &::before {
      background-image: url('~assets/img/icon-tel.png');
    }
  }
  .tel::before,
  .address::before {
    display: block;
    content: '';
    position: absolute;
    width: 23px;
    height: 23px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    top: 0;
    left: -43px;
  }
}
.layout-pc {
  .shop-online-list {
    padding-left: 145px;
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .shop-offline-list {
    width: 1000px;
  }
  .shop-online {
    margin-bottom: 60px;
  }
  .shop-offline,
  .shop-online {
    h4 {
      margin-bottom: 60px;
    }
  }
  .shop-offline-item {
    height: 400px;
    &:nth-child(odd) {
      img {
        order: 2;
      }
    }
    img {
      height: 400px;
      width: 280px;
    }
    .info {
      padding-left: 150px;
      padding-right: 165px;
    }
  }
  .action-lg {
    margin-top: 50px;
  }
}
.layout-mobile {
  .shop-online-list {
    margin: 30px 0;
    li {
      line-height: 1.5;
      padding-left: 130px;
      padding-right: 60px;
      &::before {
        left: 60px;
      }
      .name {
        width: auto;
      }
      .address {
        text-indent: 0;
      }
    }
    span {
      display: block;
    }
  }
  .shop-offline {
    h4 {
      margin-bottom: 20px;
    }
    .shop-offline-item {
      width: 280px;
      margin: 20px auto 0;
      flex-direction: column;
      .info {
        padding: 20px 64px 37px;
      }
      h4 {
        font-size: 14px;
      }
    }

    img {
      height: 250px;
      width: 280px;
    }
  }
  .action-lg {
    margin-top: 30px;
  }
}
</style>
