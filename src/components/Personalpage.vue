<template>
  <div id="personal">
    <HeaderNav :items="items"></HeaderNav>
    <Home :contact="data.contactData" :introduction="data.introduce"></Home>
    <ProjectList></ProjectList>
    <Contact :contact="data.contactData"></Contact>
    <!-- <Slideshow :projects="data.projects"></Slideshow> -->
    <!-- <Experience :experience="data.experiences" :education="data.educations"></Experience> -->
  </div>
</template>

<script>
// Import components
import HeaderNav from '@/components/HeaderNav'
import Home from '@/components/Home'
import Experience from '@/components/Experience'
import ProjectList from '@/components/ProjectList'
import Contact from '@/components/Contact'

// Import data
import ResumeData from '@/data'

export default {
  name: 'Personalpage',
  components: {
    HeaderNav,
    Home,
    Experience,
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
html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
}


h1, h2, h3, h4 {
  font-size: 1.3em;
}
p {
  font-size: 1.2em;
}

a {
  font-size: 1em;
}

/* CSS for devices with viewing area smaller than 1700px */
@media screen and (max-width: 1700px) {
  h1, h2, h3, h4 {
    font-size: 1.8em;
  }
  p {
    font-size: 1.7em;
  }

  a {
    font-size: 1.4em;
  }
}
</style>
