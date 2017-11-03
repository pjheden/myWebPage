import Vue from 'vue'
import App from './App'
import router from './router'

// Import tooltip
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'
Vue.use(Tooltip)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})