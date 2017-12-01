import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import ProjectsMap from '@/components/ProjectsMap'
import Checkers from '@/components/Checkers'
import Wishlist from '@/components/Wishlist'
import Personalpage from '@/components/Personalpage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Personalpage
    },
    {
      path: '/map',
      name: 'ProjectsMap',
      component: ProjectsMap
    },
    {
      path: '/checkers',
      name: 'Checkers',
      component: Checkers
    },
    {
      path: '/Wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
    {
      path: '*',
      name: 'Home',
      component: Personalpage
    }
  ]
})
