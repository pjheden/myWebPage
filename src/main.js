import Vue from 'vue'
import App from './App'
import router from './router'

// Import tooltip
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'
Vue.use(Tooltip)

// Import analytics
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-109380474-1',
  router // Enables page auto tracking
})

// Import smooth scroll
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
