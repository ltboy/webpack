<template>
  <transition name="back-to-top-fade">
    <div v-show="visible" :style="{bottom:bottom,right:right}" class="vue-back-to-top" @click="backToTop">
      <slot>
        <div class="default">
          <span>
            {{ text }}
          </span>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    text: {
      type: String,
      default: 'TOP'
    },
    visibleoffset: {
      type: [String, Number],
      default: 600
    },
    right: {
      type: String,
      default: '10px'
    },
    bottom: {
      type: String,
      default: '30px'
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
    };
    window.addEventListener('scroll', this.catchScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.catchScroll);
  },
  methods: {
    /**
     * Catch window scroll event
     * @return {void}
     */
    catchScroll() {
      this.visible = window.pageYOffset > parseInt(this.visibleoffset);
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop() {
      window.smoothscroll();
      this.$emit('scrolled');
    }
  }
};
</script>
<style scoped>
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: opacity 0.7s;
}
.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
  opacity: 0;
}

.vue-back-to-top {
  position: fixed;
  z-index: 10000;
  cursor: pointer;
}

.vue-back-to-top .default {
  width: 40px;
  height: 40px;
  color: #222;
  font-family: MicrosoftYaHei;
  text-align: center;
  line-height: 38px;
  background-color: #fff;
  border: 1px solid #222;
}
.vue-back-to-top .default:hover{
  background-color: #dedede;
}
</style>
