function getTitle (vm) {
  const { title } = vm.$options;
  if (title) {
    return typeof title === 'function' ? title.call(vm) : title;
  }
}

/**
 * 生产环境 server处理
 */
const serverTitleMixin = {
  created () {
    const title = getTitle(this);
    if (title) this.$ssrContext.title = title || '网易味央';
  }
};

/**
 * 开发环境 正常处理
 */
const clientTitleMixin = {
  mounted () {
    const title = getTitle(this);
    if (title) document.title = title || '网易味央';
  }
};

export default process.env.VUE_ENV === 'server' ? serverTitleMixin : clientTitleMixin;
