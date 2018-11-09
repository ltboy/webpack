<template>
  <div class="title not-p clearfl">
    <h4 class="fl">{{ title }}<div class="small">{{ sub }}</div>
    </h4>
    <router-link :to="link">
      <p class="fr">更多<i class="icon-r"></i></p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    sub: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 20px;
  .small {
    font-size: 12px;
    line-height: 14px;
    color: #999;
  }
  p {
    font-size: 14px;
    color: #222;
    line-height: 43px;
  }
}
</style>
