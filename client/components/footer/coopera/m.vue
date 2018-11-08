<template>
  <tabs class="tab">
    <tab-item label="大客户团购" index="0" height="40">
      <div class="not-p">
        <p class="tel">邮箱：hzsiyinli@corp.netease.com</p>
        <p class="tel">邮箱：hzshenmengchan@corp.netease.com</p>
        <p class="tel">客服热线：400-6805-163</p>
      </div>
    </tab-item>
    <tab-item label="商务合作" index="1" height="40">
      <div class="not-p">
        <p class="tel">邮箱：hzwangming1@corp.netease.com</p>
        <p class="tel">客服热线：400-6805-163</p>
      </div>
    </tab-item>
    <tab-item label="媒体访问" index="2" height="40">
      <div class="not-p">
        <p class="tel">邮箱：hzwangming1@corp.netease.com</p>
        <p class="tel">客服热线：400-6805-163</p>
      </div>
    </tab-item>
  </tabs>
</template>
<script>
import Tabs from '@/components/tab/tab';
import TabItem from '@/components/tab/tabItem';
export default {
  components: {
    Tabs,
    TabItem
  }
};
</script>
<style lang="scss" scoped>
</style>
