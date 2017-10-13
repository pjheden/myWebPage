<template>
  <div>
      <slider animation="fade" height="20em">
        <slider-item v-for="(project, index) in projects" :key="index" :on-click="selectProject(project.title)">
          <div style="backgroundColor: #777d9e; width:100%; height:100%;">
            <p style="line-height: 280px; font-size: 5rem; text-align: center;">{{project.title}}</p>
          </div>
        </slider-item>
      </slider>
  </div>
</template>

<script >
  import { Slider, SliderItem } from 'vue-easy-slider'

  export default {
    name: 'Slidershow',
    components: {
      Slider,
      SliderItem
    },
    props: {
      projects: Array
    },
    methods: {
      selectProject: function (projectName) {
        // TODO:
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  div {
    width:100%;
    margin: 0 auto;
  }
  p {
    margin: 0;
  }
</style>
