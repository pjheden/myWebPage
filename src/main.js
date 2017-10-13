import Vue from 'vue'
import App from './App'
import router from './router'
import scroller from './scroller'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  scroller,
  render: h => h(App)
})
