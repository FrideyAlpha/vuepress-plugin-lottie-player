const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@fridey_alpha/vuepress-plugin-lottie-player',
  enhanceAppFiles: [
    path.resolve(__dirname, './lib/enhanceAppFile.js')
  ]
})
