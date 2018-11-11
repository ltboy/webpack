const serverPlatform = {
  computed: {
    platform() {
      return this.$ssrContext.platform;
    }
  }
};
const clientPlatform = {
  computed: {
    platform() {
      return this.$store.getters.getPlatform;
    }
  }
};

export default process.env.VUE_ENV === 'server' ? serverPlatform : clientPlatform;
