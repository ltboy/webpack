<template>
  <div class="demo-home">
    <h1>Webpack4 + Vue2 + Koa2 构建SSR应用脚手架</h1>
    <div class="demo-warp">
      <div class="img-logo"></div>
      <div class="demo-js">
        <p><a href="https://koa.bootcss.com" target="_blank" title="Koa 2.5.2">Koa 2.5.3</a></p>
        <p><a href="https://vuejs.org" target="_blank" title="Vue 2.5.17">Vue 2.5.17</a></p>
        <p><a href="https://webpack.github.io" target="_blank" title="Webpack 4.16.5">Webpack 4.20.2</a></p>
      </div>
      <ul class="func-ul">
        <li><a @click="$router.push('/test/data')" href="javascrip:void(0);">Vuex数据处理</a></li>
        <li><a @click="$router.push('/test/ajax')" href="javascrip:void(0);">Axios ajax数据接口请求</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  title: 'Webpack4 + Vue2 + Koa2 构建SSR应用脚手架'
};
</script>
