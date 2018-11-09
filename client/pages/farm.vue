<template>
  <div class="page">
    <div class="banner">
      <img v-cdn-src="banner[platform]" alt="">
    </div>
    <div class="layout-row layout-main">
      <div class="aside">
        <ul>
          <router-link class="link" to="#section-1">
            <li>安 吉 产 业 园</li>
          </router-link>
          <router-link class="link" to="#section-2">
            <li>高 安 产 业 园</li>
          </router-link>
        </ul>
      </div>
      <div class="main article">
        <div id="section-1" class="section">
          <div class="block block-1">
            <div class="article">
              <h4>网易味央（安吉）现代农业产业园</h4>
              <p>2016年，网易味央的第一个自有猪场——网易味央（安吉）现代农业产业园正式投产。网易味央（安吉）现代农业产业园占地面积1200亩，约有120亩直接用于黑猪养殖。猪舍应用了现代化农业技术，智能化运作6个人管理2万头猪。园区内保持着原始竹林、板栗林、茶园等植被，远离外界污染。《舌尖上的中国》总顾问大赞其有如安缦酒店。</p>
              <p>为了使猪能有一个优质的生长环境，产业园选址的初期，网易携来自欧洲、美国和国内多名业内顶尖专家，考察48个优质农场备选地。综合考虑地质、水源、土壤、生物安全等因素，最终将猪场落在曾获得“联合国人居奖”的安吉。这里被誉为“竹海之乡”，植被覆盖率达70%以上。</p>
            </div>
            <img v-cdn-src="'img/fram-1.png'" alt="" srcset="" class="figures">
          </div>
          <div class="block block-2">
            <div id="hbxt" class="dt">
              <div class="motto not-p" style="margin-right:48px;">
                <h4 v-if="platform=='pc'" v-html="'零<br/>污染</br>环保科技'"></h4>
                <h4 v-else>零污染环保科技</h4>
                <i v-if="platform=='pc'" class="arrow-icon" style="margin:8px 0;"></i>
                <small class="left">WEIYAN</small>
              </div>
              <img v-cdn-src="'img/fram-2.png'" alt="">
              <img v-cdn-src="'img/fram-3.png'" class="mr-8" alt="">
            </div>
            <p class="article">网易味央自主创新的全球唯一猪用厕所，解决了猪舍拥挤、脏臭等问题，实现猪群进食、排泄、休息分开，有利于更好地保持猪舍清洁卫生，减少疾病发生。配合猪用厕所的环保处理系统占地小、处理高效，处理终水水质超过自来水标准，且部分回用于冲洗猪舍和猪马桶，真正实现“零污染”。</p>
            <div id="xfyz" class="tags-block">
              <div class="tag-block not-p extra">
                <h4>环境</h4>
                <p>冬暖夏凉</p>
              </div>
              <div class="tag-block not-p extra">
                <h4>饮食</h4>
                <p>谷饲慢养300天</p>
              </div>
              <div class="tag-block not-p extra">
                <h4>严选</h4>
                <p>源头保证猪肉安全</p>
              </div>
              <div class="motto not-p" style="margin-left:70px;">
                <h4 v-if="platform=='pc'" v-html="'幸福<br/>养殖<br/>理念'"></h4>
                <h4 v-else>幸福养殖理念</h4>
                <i v-if="platform=='pc'" class="arrow-icon" style="margin:8px 0;"></i>
                <small class="right">WEIYAN</small>
              </div>
            </div>
            <div class="article">
              <p>为了让猪生活得更健康，网易味央不断改善猪群生长环境，提高猪只生活条件，为猪群提供超过普通猪场的猪均面积，其中大部分面积为舒适、干燥的实心躺卧面积，并且地面经过防滑处理。在猪舍结构设计中为猪群引入天然紫外线杀菌，采用智能通风系统，让猪舍保持冬暖夏凉和洁净。</p>
              <p>网易味央为猪只定制了300天的饮食计划，5种以上营养方案。日常饲料中不添加抗生素和重金属，转而通过添加益生菌和生物制品来提高猪群免疫力。同时通过谷物、杂粮、果蔬搭配营养三餐，引进德国进口全自动液态饲喂系统科学饲喂。不但易于猪粮营养的充分吸收，还可避免因空气杂尘引起的呼吸道疾病。</p>
              <p>为了真正保障猪群的身心健康，网易味央为各阶段的猪群提供可供翻弄的材料和玩具箱，提高环境丰富度，不剪牙，不断尾、听音乐，让猪可以自然享受表达天性的愉悦，从源头保证猪肉安全。</p>
            </div>
          </div>
        </div>
        <div id="section-2" class="section article">
          <h4>网易味央（高安）现代农业产业园</h4>
          <img v-cdn-src="'img/fram-4.png'" alt="" class="section-banner">
          <p>网易味央（高安）现代农业产业园占地面积超过3300亩，2017年奠基，2018年建成。园内的170亩大水库为猪场形成天然生态调节保护屏障。产业园年出栏黑猪15万头，是中国单场规模最大的黑猪养殖场。</p>
          <p>作为集智能养殖、观光交流、种养结合为一体的世界先进的现代农业产业园，设有环保处理中心、种养结合示范中心、参观交流展示中心和果蔬生态种植等创新板块。产业园采用多种环保处理技术相结合，完整解决养殖环保问题，并将有机肥用于园区蔬果种植，作物可通过液态料饲喂设备供黑猪食用，真正实现种养循环一体化。</p>
          <p>作为网易味央模式迈开复制的第一步，网易味央（高安）现代农业产业园在规模、产能、动物福利、环保处理等方面全面优化，一举创下“中国最美猪场”、“中国单场规模最大的黑猪养殖场”、“中国动物福利最好的规模养殖场”、“中国环保处理最全面的规模养殖场”等至少四个中国第一，成为中国乃至世界未来猪场极具价值的范例。</p>
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
        pc: 'img/farm-banner-1.png',
        mobile: 'img/farm-banner-1-m.jpg'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.article{
  p,&p{
    letter-spacing: 2px;
  }
}
.block-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  .motto {
    margin-right: 48px;
  }
}
.block-2 .dt {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  height: 175px;
}
.motto {
  background: #f7f7f7;
  width: 147px;
  box-sizing: border-box;
  padding-top: 22px;
  padding-left: 18px;
  position: relative;
  h4 {
    font-size: 18px;
    line-height: 26px;
  }
  small {
    font-size: 12px;
    line-height: 18px;
    transform: scale(0.5);
    position: absolute;
    letter-spacing: 12px;
    font-family: SourceHanSerifSC;
  }
}
.tags-block {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 176px;
  margin-top: 30px;
  .tag-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p{
      color: #222;
      line-height: 20px;
    }
  }
}
.section-banner {
  margin-top: 30px;
}
.layout-pc {
  .block {
    margin-bottom: 50px;
  }
  .block-1 .figures {
    padding-left: 150px;
  }
  .block-2 {
    .mr-8 {
      margin-left: 8px;
    }
  }
  .motto {
    small {
      bottom: 28px;
      &.left {
        left: -14px;
        transform-origin: left;
      }
      &.right {
        right: -14px;
        transform-origin: right;
      }
    }
  }
}
.layout-mobile {
  .aside {
    display: none;
  }
  .figures {
    margin: 20px 0 30px;
  }
  .article {
    padding: 0 15px;
    img {
      width: 100%;
    }
  }
  h4 {
    text-align: center;
  }
  .block-1,
  .block-2 .dt,
  .tags-block {
    display: block;
  }
  .block-2 .dt,
  .tags-block {
    height: auto;
  }
  .motto {
    width: 210px;
    padding: 0;
    margin: 0 auto !important;
    height: 30px;
    text-align: center;
    position: relative;
    h4 {
      margin: 0 !important;
    }
    small {
      bottom: -9px;
      left: 50%;
      display: inline-block;
      transform: translateX(-50%) scale(0.5);
    }
  }
  .dt img:nth-of-type(1) {
    margin-top: 30px;
  }
}
</style>
