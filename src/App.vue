<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <HeaderNav :items="items"></HeaderNav>
    <!-- <Slideshow :projects="data.projects"></Slideshow> -->
    <Home :contact="data.contactData" :introduction="data.introduce"></Home>
    <ProjectList :projects="data.projects"></ProjectList>
    <Contact :contact="data.contactData"></Contact>
  </div>
</template>

<script>
// Import components
import HeaderNav from '@/components/HeaderNav'
// Import Slideshow from '@/components/Slideshow'
import Home from '@/components/Home'
import ProjectList from '@/components/ProjectList'
import Contact from '@/components/Contact'

// Import data
import ResumeData from '@/data'

export default {
  name: 'app',
  components: {
    HeaderNav,
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
          id: 'homeItem',
          icon: 'home' // Remember to import
        },
        {
          href: '/projects',
          text: 'Projects',
          id: 'projectItem',
          icon: 'briefcase' // Remember to import
        },
        {
          href: '/contact',
          text: 'Contact',
          id: 'contactItem',
          icon: 'connectdevelop' // Remember to import
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
