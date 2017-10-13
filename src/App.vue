<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- <HeaderNav :items="items"></HeaderNav> -->
    <Slideshow :projects="projects"></Slideshow>
    <Home></Home>
    <ProjectList :projects="projects"></ProjectList>
    <Contact id = "aaa"></Contact>
  </div>
</template>

<script>
// import HeaderNav from '@/components/HeaderNav'
import Slideshow from '@/components/Slideshow'
import Home from '@/components/Home'
import ProjectList from '@/components/ProjectList'
import Contact from '@/components/Contact'

export default {
  name: 'app',
  components: {
    Slideshow,
    Home,
    ProjectList,
    Contact
  },
  data () {
    return {
      items: [
        {
          href: '/',
          text: 'Home',
          id: 'homeItem'
        },
        {
          href: '/projects',
          text: 'Projects',
          id: 'projectItem'
        },
        {
          href: '/contact',
          text: 'Contact',
          id: 'contactItem'
        }
      ],
      projects: [{
        title: 'Last Ship Standing',
        image: 'pirateship',
        description: 'A js game'
      }, {
        title: 'Engineer Your Future',
        image: 'Education Circle',
        description: 'A education tool for deciding your future'
      }, {
        title: 'Kiwi swiper',
        image: 'neuralNet',
        description: 'A tool based on neural network technology to learn and adapt..'
      }, {
        title: 'Checkers AI',
        image: 'checkers',
        description: 'An AI that is an expert in checkers'
      }
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  position-top: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
