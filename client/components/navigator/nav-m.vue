<template>
  <div :class="{show: show,absolute:$route.name=='index'}" class="nav">
    <div class="top-bar layout-main">
      <h1 class="logo">
        <router-link to="/">
          <img src="//agtech-img.nos-eastchina1.126.net/weiyang_web/img/logo.png" alt="网易味央" />
        </router-link>
      </h1>
      <div class="menu-icon" @click="menu">
        <span class="i"></span>
      </div>
    </div>
    <div class="nav-content">
      <h1 class="logo">
        <router-link to="/" @click="menu">
          <img src="//agtech-img.nos-eastchina1.126.net/weiyang_web/img/logo.png" alt="网易味央" style="width:72px;" />
        </router-link>
      </h1>
      <div class="empty"></div>
      <div class="des">
        <h5>慢 养 3 0 0 天</h5>
        <h5 style="margin-top:10px;">安 心 每 一 口</h5>
      </div>
      <div class="empty"></div>
      <ul>
        <li v-for="(item, i) in router" v-if="item.url!=='/'" :key="i" class="link">
          <span class="link-line" @click="menu">
            <router-link :to="item.url">{{ item.name }}</router-link>
          </span>
        </li>
      </ul>
      <div class="empty"></div>
      <div class="footer not-p">
        <p><em style="font-size:1.2em;vertical-align:middle">&copy; </em>2016 网易味央 浙ICP备15006614号</p>
        <p>浙公网安备 33052302000141号</p>
      </div>
      <div class="empty"></div>
    </div>
  </div>
</template>
<script>
import router from '@/config/router.config';
export default {
  data() {
    return {
      show: false,
      router
    };
  },
  methods: {
    menu() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';
.nav {
  position: relative;
}

.top-bar {
  width: 100%;
  height: 44px;
  padding: 0 20px;
  position: absolute;
  left: 0;
  z-index: 100;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 25px;
    width: 60px;
    img {
      display: block;
      width: 60px;
      height: 25px;
    }
  }
}
.absolute {
  .top-bar {
    height: 0;
    top: 22px;
  }
}
.menu-icon {
  position: relative;
  cursor: pointer;
  width: 30px;
  height: 30px;
}
.menu-icon .i,
.i::after,
.i::before {
  width: 28px;
  height: 2px;
  background: #000;
  display: block;
  position: absolute;
}
.i::after,
.i::before {
  transition: all 0.25s ease;
}
.menu-icon {
  .i {
    top: 14px;
    transform-origin: right center;
  }
  .i::after,
  .i::before {
    content: '';
    left: 0;
    transform-origin: center center;
  }
  .i::before {
    top: -10px;
  }
  .i::after {
    top: 10px;
  }
}

.link {
  a {
    color: inherit;
    padding: 0 10px;
    display: inline-block;
  }
  text-align: left;
  font-size: 14px;
}

.show {
  .menu-icon {
    .i {
      width: 0;
    }
    .i::before {
      transform: rotate(45deg) translate(7px, 7px);
    }
    .i::after {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  }
  .top-bar {
    .logo {
      visibility: hidden;
    }
  }
  .nav-content {
    transform: translateX(0);
  }
}
.nav-content {
  transform: translateX(-100%);
  transition: transform 0.2s ease;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  padding-top: 50px;
  padding-left: 37px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  ul {
    li {
      margin-top: 13px;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .des {
    h5 {
      font-size: 24px;
      line-height: 25px;
      text-align: justify;
    }
  }
  .empty {
    flex-grow: 1;
  }
  .footer {
    color: #999;
    margin-top: 10px;
  }
}
</style>
