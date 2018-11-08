<template>
  <div class="page">
    <div class="banner">
      <img v-cdn-src="banner[platform]" alt="">
    </div>

    <div class="layout-wrap">
      <div class="layout-main layout-row">
        <div class="aside">
          <ul>
            <router-link class="link" to="#section-1">
              <li>味&nbsp;央&nbsp;品&nbsp;牌</li>
            </router-link>
            <router-link class="link" to="#section-2">
              <li>品&nbsp;牌&nbsp;故&nbsp;事</li>
            </router-link>
            <router-link class="link" to="#section-3">
              <li>味 央 理 念</li>
            </router-link>
            <router-link class="link" to="#section-4">
              <li>猪 小 花</li>
            </router-link>
          </ul>
        </div>
        <div class="main article">
          <div id="section-1" class="section">
            <div class="block-1 block-position">
              <div class="content">
                <h4>味央品牌</h4>
                <p>网易味央，是网易旗下农业品牌，专注于提供高品质肉类生产及行业解决方案，通过创新技术引领现代农业革新，为中国消费者提供安全、美味的优质食品。</p>
                <p>网易味央将互联网思维根植现代农业，创造性地为食品安全、农业生产模式输出等问题带来全新解决思路。在满足大众及专业市场需求的同时，让国人安心共享更高品质的生活。</p>
              </div>
              <img v-cdn-src="'img/brand-1.png'" class="figure-block figure-left figure-gl" alt="">
            </div>
            <div class="flex-1">
              <div class="mt30">
                <img v-cdn-src="'img/brand-2.png'" class="figure" alt="">
              </div>
              <div class="mt30">
                <p><strong>品牌愿景</strong></p>
                <p>所有的突破，源自对高效农业的追求和对安心品质的一贯承诺。网易味央秉承网易一贯严谨态度，致力于探索一条开放创新、持续友好的科学农业道路，为国人创造安心分享的品质生活。</p>
                <p><strong>品牌价值观</strong></p>
                <div class="not-p mt30">
                  <p>· 专注 - 对现代农业和食品安全的关切与专注，推动网易味央持续向前。</p>
                  <p>· 创新 - 将自主创新与国际新兴技术相融合，网易味央以探索之姿驭变革之势。</p>
                  <p>· 分享 - 从好的产品，到好的生活，网易味央惠及大众，初心不变。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="layout-wrap bg-gray pb50 pt50">
      <div class="layout-main layout-row">
        <div class="main">
          <div id="section-2" class="section">
            <div class="block-position block-2">
              <div class="content">
                <h4>品牌故事</h4>
                <p> “企业家最好的慈善，就是提供有品质的产品和服务。我们期待网易味央可以通过自己的技术和匠心对中国社会产生积极的影响，让国人吃到真正安心、美味的好猪肉。”</p>
                <p>网易CEO - 丁磊</p>
              </div>
              <img v-cdn-src="'img/brand-3.png'" class="figure-block" alt="">
            </div>
            <p><strong>7年跨界，初心不变</strong></p>
            <p>面对国内的养殖水平和环境普遍不够理想，国人吃到嘴里的猪肉品质和安全欠佳的现状，网易决定投身现代农业。2009年初，丁磊先生宣布进军养猪业。此后，网易携来自欧洲、美国和国内多名业内顶尖专家，深入世界养猪强国考察、交流，投入的资金不计其数。</p>
            <p><strong>安心品质，不懈追求</strong></p>
            <p>2011年“网易味央”品牌正式启用。借用“未央”未尽的含义，表达网易味央在新农业模式的创新和食品安全探索上不会停歇。“味央"之意，不仅在于口感和味道，更在于对安全和品质的不懈追求。</p>
            <p>为了找到一块合适的养殖场地，网易味央携专家组带着一份900分制的考评表，考察了48处地块，综合考量水源、土地、空气等十几项标准。最终决定将网易的第一个自有猪场建在“联合国人居奖”唯一获得县安吉。这里被誉为“竹海之乡”，远离外界污染，植被覆盖率达70%以上。</p>
            <div v-if="platform=='pc'" class="figure-flex figure-flex-2 mt50">
              <img v-cdn-src="'img/brand-4.png'" alt="">
              <img v-cdn-src="'img/brand-5.png'" alt="">
            </div>
            <div v-else class="figure-flex figure-flex-2 mt50">
              <img v-cdn-src="'img/brand-4-m.png'" alt="">
              <img v-cdn-src="'img/brand-5-m.png'" alt="">
            </div>
            <div class="section-alt">
              <div>“零污染”环保处理系统</div>
            </div>
            <p><strong>科技创新，实现可持续发展</strong></p>
            <p>网易味央从一开始就决定要走一条高效绿色的养殖之路。为了实现养殖与环境的和谐发展。网易味央创新研发了“猪马桶”，通过对动物天性的研究，教会猪只定点排泄，彻底的解决了传统养殖粪污收集的难题。配合“零污染”环保处理系统，将养殖过程中所产生的粪污进行高效回收和集中处理。这是养殖业的重大突破。</p>
            <p><strong>幸福养殖，产出安心好猪肉</strong></p>
            <p>要口感好和味道好，必须要有时间的积累和健康的猪只来提供。为从源头保障猪肉口感和品质，网易味央优选有“国宝”之誉的太湖黑猪，采用慢养300天的养殖方式，定制化饲喂。此外，还通过改善猪群生长环境，提高猪只生活条件，让猪可以自由享受表达天性的愉悦。猪生活得幸福健康，才能真正保证猪肉的安全和美味。</p>
            <p>2016年年底，网易味央猪肉正式上市，成功引爆市场。透明化养殖的理念，也让网易味央安吉猪场开创了中国养猪业的历史，成为了中国史上第一家公开直播的猪场。</p>
            <div v-if="platform=='pc'" class="figure-flex figure-flex-2 mt50">
              <img v-cdn-src="'img/brand-6.png'" alt="">
              <img v-cdn-src="'img/brand-7.png'" alt="">
            </div>
            <div v-else class="figure-flex figure-flex-2 mt50">
              <img v-cdn-src="'img/brand-6-m.png'" alt="">
              <img v-cdn-src="'img/brand-7-m.png'" alt="">
            </div>
            <div class="section-alt">
              <div>网易味央每只猪都有唯一耳标</div>
            </div>
            <p><strong>创未来，造安心品质生活</strong></p>
            <p>经过7年探索，网易味央已经形成了独具创新的养殖模式，并将在全国范围内复制拓展。2018年，网易味央（高安）现代农业产业园的投产标志着网易味央模式开创的全新征程。网易味央始终相信，用创新的科技养殖出更安心美味的猪肉，将为中国现代农业创造更多可能。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="layout-main layout-row">
      <div class="main mt50">
        <h4 id="section-3">味央理念</h4>
        <tabs class="mt30">
          <tab-item label="安心承诺" index="0" height="185">
            <div class="not-p">
              <p>用心沉淀7年，只为安心享用每1天。从自营现代农场到用户的餐桌，无论是卫生清洁的养殖环境，还是系统全面的饲喂数据，网易味央所做的一切都在围绕食品安全做全方位考量。以全程可控的生产体系与创新定制的智能管理，为国人打造真正安全、健康、高品质的产品体验。</p>
            </div>
            <div class="not-p mt30">
              <p>· 清洁卫生的生活环境，减少猪只患病几率</p>
              <p>· 幸福养殖保障猪群健康快乐，提升天然免疫力</p>
              <p>· 猪只电子身份信息记录，个体化饲喂、出栏管理</p>
            </div>
          </tab-item>
          <tab-item label="幸福养殖" index="1" height="235">
            <div class="not-p">
              <p>猪更快乐，人更安心。网易味央严格执行国际领先的动物福利标准，养殖全程遵从动物天性表达，关注猪只本身的饮食与营养，为其从出生到育肥量身定制生长环境，减少疾病发生，保障每只网易味央黑猪的身心健康，品质稳定 。</p>
            </div>
            <p>网易味央坚持对幸福养殖的践行与理念普及，努力为中国消费者创造安心美味的全新体验。</p>
            <div class="not-p mt30">
              <p>· 科学饲喂、全面营养</p>
              <p>· 舒适环境、减少束缚</p>
              <p>· 独特布局、天性表达</p>
            </div>
          </tab-item>
          <tab-item label="科技环保" index="2" height="205">
            <div class="not-p">
              <p>创新养殖模式，实现人、猪、环境和谐与可持续发展。2011年，养猪项目正式落户获得“联合国人居奖”的浙江省湖州市安吉县，从猪场选址、猪舍建设，到日常生产的环保处理及能源节约，网易味央用科学的态度和创新的技术践行对自然保护的坚定承诺。以现代科技还青山绿水和谐共存，网易味央致力成为农业可持续发展之路的行业标杆。</p>
            </div>
            <div class="not-p mt30">
              <p>· 环保 - “零污染”环保处理工艺，排泄物气味控制、高效收集和处理</p>
              <p>· 节能 - 土地资源、水资源节约，减少能源消耗</p>
              <p>· 循环 - 种养结合，与产地农作物、产业生态循环</p>
            </div>
          </tab-item>
          <tab-item label="惠及大众" index="3" height="235">
            <div class="not-p">
              <p>真正的实惠，是予人安心，予己回味。网易味央以分享作为品牌基因，不仅基于美好食物本身所寄托的家庭关爱、社会关切，更是抱着立足科学，融入生活的态度，致力将安心、美味、高品质的猪肉产品端上更多国人的餐桌，真正惠及大众。</p>
            </div>
            <p>在开放创新、持续友好的品牌愿景下，网易味央以互联网基因重塑农产品生产、销售模式，用匠人之心为中国现代农业注入一股清流，分享更多创新的可能。</p>
            <div class="not-p mt30">
              <p>· 更亲民 - 真正高品、信赖无忧</p>
              <p>· 更亲近 - 真正省心、便捷直达</p>
            </div>
          </tab-item>
        </tabs>
        <hr class="mt50 extra" />
      </div>
    </div>

    <div class="layout-main layout-row">
      <div class="main mt50">
        <h4 id="section-4">网易味央猪小花</h4>
        <tabs class="mt30">
          <tab-item label="小花简介" index="0" height="451">
            <div class="not-p">
              <p>猪小花是网易味央原创虚拟黑猪形象，也是网易味央幸福养殖理念多元展示。</p>
              <p>猪小花人称网易厂花，猪届黑富美，拥有优渥的生活：住3300亩的新房，听专属音乐大碟，餐具来自德国订制，从出生的一刻就享受着精心调配的营养餐食......</p>
            </div>
            <p>“猪小花”出过音乐专辑、MV、表情包，曾和一线明星杨洋联合直播，和上海时装周模特同台走秀，是中国互联网圈极具号召力的网红。</p>
            <div v-if="platform=='pc'" class="figure-flex figure-flex-2 mt50">
              <img v-cdn-src="'img/brand-8.png'" alt="">
              <img v-cdn-src="'img/brand-9.png'" alt="">
            </div>
            <div v-else class="figure-flex figure-flex-2 mt50">
              <img v-cdn-src="'img/brand-8-m.png'" alt="">
              <img v-cdn-src="'img/brand-9-m.png'" alt="">
            </div>
            <div class="section-alt">
              <div>猪小花IP形象</div>
            </div>
          </tab-item>
          <tab-item label="专属表情包" index="1" height="71">
            <div class="not-p">
              <p>2016年11月，“猪小花”表情包上线微信和易信，可爱的萌态形象，一上线就在大家高频使用的微信聊天场景中大受欢迎。</p>
            </div>
          </tab-item>
          <tab-item label="年会说相声" index="2" height="71">
            <div class="not-p">
              <p>2016年年会，猪小花穿大褂说相声，八卦点评互联网圈大佬。</p>
            </div>
          </tab-item>
          <tab-item label="参加直播" index="3" height="122">
            <div class="not-p">
              <p>2017年1月，在倩女幽魂总决赛直播中，猪小花与男神杨洋亲密互动。</p>
            </div>
            <p>2017年双11， 猪小花直播拱奖送福利。</p>
          </tab-item>
          <tab-item label="音乐专辑" index="4" height="71">
            <div class="not-p">
              <p>2017年3月，猪小花的《网易味央黑猪宇宙大碟》在网易云音乐全新上线。</p>
            </div>
          </tab-item>
          <tab-item label="时装周" index="5" height="92">
            <div class="not-p">
              <p>2017年4月，猪小花受邀出席上海“华帝食尚节”。</p>
              <p>候场化妆、红毯签到、嘉宾互动，并压轴登台亮相，萌动全场。</p>
            </div>
          </tab-item>
          <tab-item label="首席卖萌官" index="6" height="71">
            <div class="not-p">
              <p>2017年12月，网易味央入驻京东生鲜，猪小花出任京东生鲜事业部的临时卖萌总监。</p>
            </div>
          </tab-item>
        </tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from '@/components/tab/tab';
import TabItem from '@/components/tab/tabItem';
export default {
  components: {
    Tabs,
    TabItem
  },
  data() {
    return {
      banner: {
        pc: 'img/brand-banner-1.png',
        mobile: 'img/brand-banner-1-m.jpg'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.flex-1 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .figure-flex {
    margin-top: 30px;
  }
}
h4 {
  font-family: SourceHanSerifSC-Regular;
}
.figure-flex {
  justify-content: space-between;
}
.layout-pc {
  .block-position {
    position: relative;
    .content {
      width: 406px;
    }
    .figure-block {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .block-2 {
    margin-bottom: 110px;
  }
  .flex-1 {
    flex-direction: column;
  }
}
.layout-mobile {
  .layout-main {
    padding: 0 15px;
  }
  .figure-block {
    width: 100%;
    margin-top: 20px;
  }
  .flex-1 {
    flex-direction: column-reverse;
  }
  .figure-flex-2{
    img{
      width: 50%;
    }
  }
}
</style>
