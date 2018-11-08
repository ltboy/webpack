<template>
  <div class="header">
    <ul class="nav layout-main">
      <li>
        <router-link to="/" exact class="link link-line">首页</router-link>
      </li>
      <li v-for="(item, i) in router" :key="i">
        <router-link :to="item.url" class="link link-line">{{ item.name }}</router-link>
      </li>
      <h1 class="logo">
        <img src="//agtech-img.nos-eastchina1.126.net/weiyang_web/img/logo.png" alt="网易味央" style="width:123px" />
      </h1>
    </ul>
  </div>
</template>
<script>
import router from '@/config/router.config.js';
export default {
  data() {
    return {
      router
    };
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 106px;
  border-bottom: 1px solid #dedede;
}
.nav {
  display: flex;
  height: 100%;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
  .link {
    font-size: 14px;
    padding: 5px;
    color: #222;
  }
}

.router-link-exact-active {
  box-shadow: inset 0 -1px #222;
}
</style>
