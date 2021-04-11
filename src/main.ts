import Vue from 'vue'
import App from './App.vue'
import translate from './utils/translate'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    t: function (text: string): string {
      return translate(text)
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
