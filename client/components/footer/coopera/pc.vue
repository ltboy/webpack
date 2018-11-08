<template>
  <div class="">
    <div class="coopera clearfl">
      <div class="item">
        <div class="title">大客户团购</div>
        <div class="tooltip">
          <i class="tooltip-arrow"></i>
          <span class="body">
            <span>hzsiyinli@corp.netease.com</span>
            <span>hzshenmengchan@corp.netease.com</span>
          </span>
        </div>
      </div>
      <div class="item">
        <div class="title">商务合作</div>
        <div class="tooltip">
          <i class="tooltip-arrow"></i>
          <span class="body">hzwangming1@corp.netease.com</span>
        </div>
      </div>
      <div class="item">
        <div class="title">媒体访问</div>
        <div class="tooltip">
          <i class="tooltip-arrow"></i>
          <span class="body">hzwangming1@corp.netease.com</span>
        </div>
      </div>
    </div>
    <div>
      <p class="tel">客服热线：400-6805-163</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.coopera {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.item {
  float: left;
  position: relative;
  color: #666;
  padding: 0 10px;
  &:nth-child(n + 2) {
    margin-left: 50px;
  }
  &:hover {
    .tooltip {
      display: block;
    }
    .title {
      color: #222;
      box-shadow: inset 0 -1px #222;
    }
  }
}
.tel {
  text-align: center;
}
.title {
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}
.tooltip {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 5px;
  display: none;
}
.tooltip-arrow {
  border-width:0 5px 5px;
  border-color: transparent;
  border-style: solid;
  border-bottom-color: #dedede;
  top: 0;
  left: 50%;
  margin-left: -5px;
  position: absolute;
  &::after{
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    content: " ";
    margin-left: -6px;
    z-index: 1;
    top: 1px;
    border-top-width: 0;
    border-bottom-color: #fff;
  };
}
.body {
  display: block;
  padding: 5px 25px;
  border: 1px solid #dedede;
  background-color: #fff;
  border-radius: 4px;
}
</style>
