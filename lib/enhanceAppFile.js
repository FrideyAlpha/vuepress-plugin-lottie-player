import LottieVuePlayer from "@lottiefiles/vue-lottie-player"
import Lottie from './lottie.vue'

export default ({ Vue }) => {
  Vue.use(LottieVuePlayer)
  Vue.component('Lottie', Lottie)
}