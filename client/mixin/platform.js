export default {
  computed: {
    platform() {
      return this.$store.getters.getPlatform;
    }
  }
};
