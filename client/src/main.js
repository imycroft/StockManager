import 'material-design-icons/iconfont/material-icons.css'
import 'typeface-roboto/index.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
