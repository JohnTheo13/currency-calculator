module.exports = {
  lintOnSave: false,
  devServer: {
    port: 3000
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_functions.scss";
        `
      }
    }
  }
}
