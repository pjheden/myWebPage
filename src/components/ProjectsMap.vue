<template >
  <svg>
    <g>
      <ProjectCircle
        v-for="(project, index) in projects"
        :key="title"
        :index="index"
        :r = "20">
      </ProjectCircle>
    </g>
  </svg>
</template>

<script >
  import ProjectCircle from '@/components/ProjectCircle'
  export default {
    name: 'ProjectsMap',
    component: ProjectCircle,
    data () {
      return { // TODO: Use same list as in ProjectList.vue, inject it somehow
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
        }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>