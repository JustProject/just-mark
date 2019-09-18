import Vue from 'vue'
import store from './renderer/store'
import router from './renderer/main'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  template: '<router-view class="view"></router-view>'
}).$mount('#app')
