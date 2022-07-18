import Lottie from './lottie.vue'

export default async ({ Vue, isServer }) => {
  if (!isServer) {
    await import('@lottiefiles/vue-lottie-player').then(module => {
        Vue.use(module.default);
    });
}
  Vue.component('Lottie', Lottie)
}