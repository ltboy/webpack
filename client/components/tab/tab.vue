<template>
  <div :class="className" class="tabs clearfl">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Tabs',
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tabPanes: [],
      selectedIndex: 0
    };
  },
  watch: {
    activeIndex(val) {
      this.selectedIndex = val;
    }
  },
  mounted() {
    this.tabPanes = this.$children.filter(child => child.isTabPane);
    this.handleSelect(this.activeIndex, true);
  },
  methods: {
    handleSelect(index, first) {
      if (index === -1) {
        return;
      }
      console.log(index);
      if (this.selectedIndex !== -1) {
        this.tabPanes[this.selectedIndex].deActivated();
      }
      if (index === this.selectedIndex) {
        this.selectedIndex = -1;
        return;
      }
      this.selectedIndex = index;
      this.tabPanes[index].onActivated(index);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs {
  position: relative;
}
</style>
