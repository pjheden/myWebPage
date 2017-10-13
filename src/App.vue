<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <HeaderNav></HeaderNav>
    <Home></Home>
    <ProjectList></ProjectList>
    <Contact></Contact>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
import Home from '@/components/Home'
import ProjectList from '@/components/ProjectList'
import Contact from '@/components/Contact'

export default {
  name: 'app',
  components: {
    HeaderNav,
    Home,
    ProjectList,
    Contact
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
  margin-top: 60px;
}
</style>
