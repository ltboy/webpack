<template>
  <div v-once class="cookbook layout-main">
    <div v-for="(item,i) in config" :key="i" class="cookbook-item">
      <div class="cook-food">
        <img v-cdn-src="item.assets[0].src" v-if="item.assets[0].type=='img'" :alt="item.name" srcset="" style="height:100%;width:350px;" />
        <video v-cdn-src="item.assets[0].src" v-if="item.assets[0].type=='video'" :alt="item.name" srcset="" style="height:100%;width:350px;" />
      </div>
      <div class="cook-direction-wrap">
        <div class="cook-direction">
          <router-link :to="'/cookbook/detail/'+item.name">
            <div class="food-name">
              <h4 class="prefix">{{ item.prefix }}</h4>
              <h4 class="name">{{ item.name }}</h4>
            </div>
          </router-link>
          <router-link :to="'/cookbook/detail/'+item.name" class="link"><span class="tag">COOKBOOK</span></router-link>
          <div class="food-desc ff-light">{{ item.desc }}</div>
        </div>
      </div>
      <div class="food-material-1">
        <img v-cdn-src="item.assets[1].src" />
      </div>
      <div class="food-material-2">
        <img v-cdn-src="item.assets[2].src" />
        <div>
          <router-link to="/cookbook" class="link-btn"><button class="btn btn-default">查看更多</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from './config';
export default {
  data() {
    return {
      config
    };
  }
};
</script>
<style lang="scss" scoped>
.cookbook {
  margin-top: 50px;
}
.tag {
  font-size: 16px;
  color: #999;
}
.cookbook-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 440px;
  margin-bottom: 50px;
}
.food-material-1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}
.food-material-2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cook-direction-wrap {
  flex-grow: 1;
}
.cook-direction {
  width: 210px;
  height: 408px;
  border-bottom: 4px solid #000;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 65px;
}
.food-name {
  font-size: 24px;
  color: #222;
}
.link {
  margin: 20px 0 60px;
  display: inline-block;
}
.food-desc {
  color: #666;
  line-height: 25px;
}
.cookbook-item:nth-child(odd) {
  .link-btn {
    float: right;
  }
}
.cookbook-item:nth-child(even) {
  .cook-food {
    order: 4;
  }
  .food-material-1 {
    order: 1;
  }
  .cook-direction-wrap {
    order: 2;
  }
  .food-material-2 {
    order: 3;
    margin-right: 20px;
  }
}
</style>
