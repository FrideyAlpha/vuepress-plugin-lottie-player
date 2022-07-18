<template>
<lottie-player
  ref="lottieObject"
  :autoplay="autoplay"
  :controls="controls"
  :background="background"
  :loop="loop"
  :mode="mode"
  :speed="speed"
  :src="src"
  :style="style"
></lottie-player>
</template>

<script>
import * as LottiePlayer from "@lottiefiles/lottie-player"

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
    controls: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: 'transparent',
    },
    mode: {
      type: String,
      default: 'normal',
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
