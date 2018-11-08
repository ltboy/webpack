<template>
  <div :class="{show: show}" class="nav">
    <div class="top-bar layout-main">
      <div class="menu-icon" @click="menu">
        <span class="i"></span>
      </div>
      <h1 class="logo">
        <img src="//agtech-img.nos-eastchina1.126.net/weiyang_web/img/logo.png" alt="网易味央" style="width:123px" />
      </h1>
    </div>
    <div class="nav-content">
      <ul>
        <li v-for="(item, i) in router" v-if="item.url!=='/'" :key="i" class="link link-line">
          <router-link :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
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
  },
  beforeDestory() {
    this.show = false;
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';
.nav {
  position: relative;
}
.top-bar {
  width: 1090px;
  position: absolute;
  height: 0;
  top: 0;
  z-index: 100;
  left: 50%;
  margin: 0 auto;
  transform: translateX(-50%);
  .menu-icon {
    position: absolute;
    left: 0;
    top: 60px;
  }
  .logo {
    position: absolute;
    right: 0;
    top: 60px;
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
.menu-icon {
  .i {
    top: 14px;
  }
  .i::after,
  .i::before {
    content: '';
    left: 0;
    transform-origin: center center;
    transition: all 0.25s ease;
  }
  .i::before {
    top: -10px;
  }
  .i::after {
    top: 10px;
  }
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
}

.link {
  a {
    color: inherit;
    padding: 0 10px;
    display: inline-block;
  }
  font-size: 18px;
}
.link:hover {
  box-shadow: inset 1px 0 #000;
}
.show {
  .nav-content {
    display: flex;
  }
}
.nav-content {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  @include flexContainer(1920, 588);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.96);
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 30px;
      a {
        writing-mode: vertical-lr;
        letter-spacing: .25em;
      }
    }
  }
}
</style>
