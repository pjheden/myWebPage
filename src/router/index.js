import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import ProjectsMap from '@/components/ProjectsMap'
import Checkers from '@/components/Checkers'
import Wishlist from '@/components/Wishlist'
import Personalpage from '@/components/Personalpage'
import AutomaticWatering from '@/components/AutomaticWatering'
import DevBlog from '@/components/DevBlog'

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
      path: '/automatic_watering',
      name: 'AutomaticWatering',
      component: AutomaticWatering
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
    {
      path: '/Wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
    {
      path: '/DevBlog',
      name: 'DevBlog',
      component: DevBlog
    },
    {
      path: '/devblog',
      name: 'DevBlog',
      component: DevBlog
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
      path: '*',
      name: 'Home',
      component: Personalpage
    }
  ]
})
