<template>
  <div class="page">
    <div class="banner">
      <img v-cdn-src="banner[platform]" />
    </div>
    <div class="layout-row layout-main">
      <div class="aside">
        <ul>
          <router-link class="link" to="#section-1">
            <li>公司简介</li>
          </router-link>
          <router-link class="link" to="#section-2">
            <li>发展历程</li>
          </router-link>
          <router-link class="link" to="#section-3">
            <li>联系我们</li>
          </router-link>
          <router-link class="link" to="#section-4">
            <li>加入我们</li>
          </router-link>
        </ul>
      </div>
      <div class="main article">
        <div id="section-1" class="section">
          <h4>公司简介</h4>
          <p>网易味央，是网易旗下农业品牌，专注于提供高品质肉类生产及行业解决方案，通过创新技术引领现代农业革新，为中国消费者提供安全、美味的优质食品。</p>
          <p>网易味央将互联网思维根植现代农业，创造性地为食品安全、农业生产模式输出等问题带来全新解决思路。在满足大众及专业市场需求的同时，让国人安心共享更高品质的生活。</p>
        </div>
        <div id="section-2" class="section">
          <h4>发展历程</h4>
          <div class="motto-box">
            <div class="motto not-p extra">
              <small>WEIYAN</small>
              <h4 style="margin:7px 0">跨界七年</h4>
              <i class="arrow-icon"></i>
              <div style="height:15px"></div>
              <p>初心不变</p>
            </div>
            <div class="img-container">
              <img v-cdn-src="'img/about-1.png'" alt="">
              <img v-cdn-src="'img/about-2.png'" alt="">
            </div>
            <div style="width:15px;background:#fff;height:100%;" class="extra-p"></div>
          </div>
          <p v-for="(item, i) in timeline" :key="i">{{ item }}</p>
        </div>
        <div id="section-3" class="section">
          <h4>联系我们</h4>
          <p>我们秉承网易一贯严谨态度，致力于探索一条开放创新、持续友好的科学农业道路，为国人创造安心分享的品质生活。</p>
          <div class="not-p">
            <p>浙江味央科技有限公司</p>
            <p>地址：浙江省杭州市滨江区网商路599号</p>
            <p>区邮政编码：310052</p>
            <p>咨询热线：400-6805-163</p>
            <p>服务时间：9:30-18:30（节假日除外）</p>
          </div>
          <div class="not-p">
            <p>品牌合作：hzwangming1@corp.netease.com</p>
            <p>媒体垂询：hzwangming1@corp.netease.com</p>
          </div>
        </div>
        <div id="section-4" class="section">
          <div class="img-box">
            <div class="img-cotainer">
              <img v-cdn-src="'img/about-3.png'" alt="">
            </div>
            <div class="more">
              <h5>TEAM</h5>
              <a href="https://hr.163.com/position/list.do?positionName=%E5%86%9C%E4%B8%9A%E4%BA%8B%E4%B8%9A%E9%83%A8">
                <div class="btn"><span>更 多 团 队 介 绍</span></div>
              </a>
            </div>
          </div>
          <h4>加入我们</h4>
          <p>网易味央是中国互联网跨界农业的革新力量，我们的团队拥有多源的职业经历，汇聚了互联网及农业等领域众多的综合人才。 </p>
          <p>网易味央珍视每一个怀揣热忱的同道中人，为每一个渴望专注、创新与突破的员工提供广阔并极具吸引力的职业发展前景。 在这里，未来不需要参考，只需要勇敢去创造！</p>
          <p>邮箱：chenjihuan@corp.netease.com</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: {
        pc: 'img/about_banner.png',
        mobile: 'img/about_banner-m.jpg'
      },
      timeline: [
        '2009 网易创始人丁磊先生宣布投身现代农业，网易味央肩负使命而生',
        '2009-2011 养猪团队深入世界养猪强国、调研国内外优秀猪种、拜访业内专家、整合技术信息',
        '2011 网易“味央”品牌正式启用，养猪项目落户浙江省湖州市安吉县',
        '2016 网易味央（安吉）现代农业产业园2.0版投产，全球首创的“味央模式”上线运营',
        '2016 网易味央黑猪肉正式上市，“黑五”首猪拍卖价27.7万，造就中国身价最高互联网黑猪',
        '2017 网易味央全民养猪众筹成功募集金额1919万元，成为中国农业众筹总额第一项目',
        '2017 中国农业部部长韩长赋考察网易味央（安吉）现代农业产业园，对味央模式给予充分肯定',
        '2017 网易味央宣布完成1.6亿元人民币A轮融资，由美团点评、创新工场领投京东战略投资',
        '2017 网易味央宣布与江西省政府战略合作，共推网易味央养殖模式',
        '2017 网易味央（高安）现代农业产业园奠基，标志着网易味央迈开了模式复制的第一步',
        '2018 网易味央发布“味享计划”，打造精细化、体验化、场景化的猪肉“新消费”样板'
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.motto-box {
  background: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.motto {
  padding: 185px 35px 30px 30px;
  p {
    color: #999;
  }
}
.img-container {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section:not(:last-child) {
  border-bottom: 1px solid #dedede;
}
.img-box {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  height: 350px;
  img {
    height: 100%;
  }
  .more {
    min-width: 44px;
    text-align: center;
    h5 {
      text-align: center;
      letter-spacing: 3px;
    }
    a {
      display: inline-block;
      text-align: center;
    }
  }
}
.btn {
  border: 1px solid #222;
  box-sizing: border-box;
  text-align: center;
  &::after {
    height: 100%;
    vertical-align: middle;
    display: inline-block;
    content: '';
  }
  span {
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    writing-mode: vertical-lr;
  }
}
small {
  font-size: 6px;
}
.section-3 {
  .not-p {
    margin-top: 25px;
  }
}
.layout-pc {
  .img-box {
    margin-bottom: 30px;
  }
  .motto-box {
    margin: 50px 0;
  }
  .more {
    margin-left: 110px;
    .btn {
      margin-top: 100px;
      width: 56px;
      height: 230px;
    }
  }
  .section:not(:last-child) {
    padding-bottom: 50px;
  }
}
.layout-mobile {
  .article {
    margin-right: 5px;
  }
  .section {
    p {
      padding-right: 15px;
    }
  }
  .motto-box {
    margin: 30px 0;
    height: 176px;
    img {
      height: 176px;
      flex: 1;
    }
  }
  .img-container {
    img {
      width: 20%;
    }
  }
  .img-box {
    height: 182px;
    margin-bottom: 30px;
    .img-cotainer {
      width: 145px;
      height: 182px;
      text-align: center;
      overflow: hidden;
      img {
        display: inline-block;
        height: 100%;
        margin: 0 -100%;
      }
    }
    .more {
      margin-left: 53px;
    }
    .btn {
      height: 140px;
      width: 28px;
      margin-top: 20px;
    }
  }
  .section:not(:last-child) {
    padding-bottom: 20px;
  }
}
</style>
