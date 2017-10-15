<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <HeaderNav :items="items"></HeaderNav>
    <!-- <Slideshow :projects="data.projects"></Slideshow> -->
    <Home :contact="data.contactData" :introduction="data.introduce"></Home>
    <BinaryClouds></BinaryClouds>
    <ProjectList :projects="data.projects"></ProjectList>
    <Contact :contact="data.contactData"></Contact>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
// import Slideshow from '@/components/Slideshow'
import BinaryClouds from '@/components/BinaryClouds'
import Home from '@/components/Home'
import ProjectList from '@/components/ProjectList'
import Contact from '@/components/Contact'

import ResumeData from '@/data'

export default {
  name: 'app',
  components: {
    HeaderNav,
    BinaryClouds,
    Home,
    ProjectList,
    Contact
  },
  data () {
    return {
      data: ResumeData,
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
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
