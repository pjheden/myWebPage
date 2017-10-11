import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProjectList from '@/components/ProjectList'
import Contact from '@/components/Contact'
import ProjectsMap from '@/components/ProjectsMap'
import Checkers from '@/components/Checkers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectList
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
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
    }
  ]
})
