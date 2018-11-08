<template>
  <div class="page layout-main">
    <h4 class="center">猪爸餐厅介绍</h4>
    <div class="page-motto section">
      <img v-cdn-src="'img/pigpa/logo.png'" class="avatars" />
      <p class="source">关于猪爸</p>
      <p class="motto">高端猪肉体验店<br />美食APP热门排行榜餐厅</p>
    </div>
    <div class="section">
      <p>“猪爸”餐厅是网易味央与外婆家餐饮集团联合打造的高端猪肉体验店，也是中国首家高端猪肉体验店。餐厅设计讲究，装修风格质感十足。</p>
      <p>餐厅的招牌红烧肉、美颜脚圈、豆腐白切肉等招牌菜，将网易味央黑猪肉儒糯、胶质丰富、味道鲜美等特点最大程度的展现给食客。</p>
      <p>凭借创新的料理方式以及独特的风味口感，“猪爸”餐厅迅速在美食APP的热门餐厅排行中名列前茅，深受吃货们的好评，成为杭城的新一代网红餐厅。</p>
    </div>
    <div class="img-box">
      <img v-cdn-src="'img/pigpa/1.png'" alt="">
      <img v-cdn-src="'img/pigpa/2.png'" alt="">
      <img v-cdn-src="'img/pigpa/3.png'" alt="">
      <img v-cdn-src="'img/pigpa/4.png'" alt="">
    </div>
    <div class="section-alt">
      <div>猪爸地址：浙江省杭州市延安路353号嘉里中心3层</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-motto {
  background: #f7f7ff;
  padding: 40px 0;
  text-align: center;

  .avatars {
    width: 94px;
    height: 94px;
    margin: 0 auto;
  }

  .source {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 14px;
    color: #222;
  }

  .motto {
    color: #999;
    font-size: 12px;
    line-height: 20px;
  }
}
.img-box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  img {
    flex-grow: 1;
    flex-shrink: 0;
  }
}
.page-motto{
  font-family: PingFang-SC-Light;
}
.layout-pc {
  .layout-main {
    width: 900px;
  }
  .img-box {
    margin-bottom: 25px;
    img {
      &:nth-child(n + 2) {
        margin-left: 8px;
      }
    }
  }
  .section,
  .img-box {
    margin-top: 50px;
  }
  .page > h4 {
    margin-top: 30px;
  }
}
.layout-mobile {
  .section,
  .img-box {
    margin-top: 30px;
  }
  .section,
  .img-box,
  .section-alt {
    padding-left: 17px;
    padding-right: 17px;
  }
  .page > h4 {
    margin-top: 20px;
  }
  .img-box {
    margin-bottom: 10px;
    img {
      width: 40%;
    }
  }
}
</style>
