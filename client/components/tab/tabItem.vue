<template>
  <div :class="className" class="tabs-item">
    <div :class="{ 'is-active': isActive }" class="tabs-label" @click="changeTab">
      <span>{{ label }}</span>
      <i class="icon extra-dis"></i>
    </div>
    <div v-show="isActive" :style="{ height: clientHeight }" class="tab-content">
      <div ref="item" :class="{ 'is-active': isActive }" class="tab-pane">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: '',
      required: true
    },
    index: {
      type: String,
      default: '',
      required: true
    },
    height: {
      type: String,
      default: 'auto'
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    clientHeight() {
      return this.platform === 'pc' ? this.height + 'px' : 'auto';
    }
  },
  beforeCreate() {
    this.isTabPane = true;
  },
  methods: {
    changeTab() {
      this.$parent.handleSelect(this.index);
    },
    onActivated() {
      this.isActive = true;
    },
    deActivated() {
      this.isActive = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-pane {
  color: #666;
  &::after {
    display: block;
    content: '';
    height: 100%;
  }
}
.tabs-label {
  font-size: 18px;
  span,
  .icon {
    display: inline-block;
  }
  .icon {
    width: 15px;
    height: 15px;
    position: relative;
    margin-top: 15px;
    &::after,
    &::before {
      background-color: #4e4e4e;
      display: block;
      content: '';
      position: absolute;
    }
    &::before {
      width: 15px;
      left: 0;
      top: 7px;
      height: 1px;
    }
    &::after {
      height: 15px;
      width: 1px;
      top: 0;
      left: 7px;
    }
  }
}
.is-active {
  .icon {
    transform: rotate(45deg);
    transform-origin: center center;
    transition: all 0.25s ease;
  }
}
.layout-pc {
  .tabs-item {
    display: block;
    float: left;
    &:nth-child(n + 2) {
      .tabs-label {
        margin-left: 50px;
      }
    }
  }
  .tabs-label {
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
  .tabs-label.is-active,
  .tabs-label:hover {
    box-shadow: inset 0 -1px #222;
    color: #222;
  }
  .tab-pane {
    position: absolute;
    width: 100%;
    left: 0;
    top: 30px;
    margin-top: 50px;
  }
  .tab-list {
    li {
      float: left;
      font-size: 18px;
      &:nth-child(n + 2) {
        margin-left: 50px;
      }
    }
    .is-active {
      box-shadow: inset 0 -1px #222;
      color: #222;
    }
  }
}

.layout-mobile {
  .tabs-label {
    line-height: 44px;
    border-bottom-width: 1px;
    border-style: solid;
    border-bottom-color: #dedede;
    position: relative;
    .icon {
      float: right;
    }
  }
  .tab-pane {
    padding: 15px 0;
  }
  .is-active {
    border-bottom-color: transparent;
  }
}
</style>
