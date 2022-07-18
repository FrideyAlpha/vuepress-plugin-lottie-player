<template>
<lottie-vue-player
  ref="lottieObject"
  :autoplay="autoplay"
  :playercontrols="playercontrols"
  :background-color="backgroundColor"
  :show-color-picker="showColorPicker"
  :loop="loop"
  :mode="mode"
  :speed="speed"
  :src="src"
  :style="style"
></lottie-vue-player>
</template>

<script>


export default {
  props: {
    src: {
      type: String,
      default: 'https://assets9.lottiefiles.com/datafiles/gUENLc1262ccKIO/data.json',
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    showColorPicker: {
      type: Boolean,
      default: false,
    },
    playercontrols: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    mode: {
      type: String,
      default: 'PlayMode.Normal',
    },
    loop: {
      type: Boolean,
      default: true,
    },
    speed: {
      type: Number,
      default: 1,
    },
    height: {
      type: Number,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : "100%",
        height: this.height ? `${this.height}px` : "100%"
      },
    };
  },

  mounted() {
    const lottieObject =this.$refs.lottieObject
    lottieObject.addEventListener("ready", () => {
      this.$emit("lottiePlayerReady", lottieObject);
    })
  },
};
</script>
