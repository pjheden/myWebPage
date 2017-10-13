<template>
  <div>
    <h1> Julian Hedén </h1>
    <div class = "sliderContainer">
      <slider animation="fade">
        <slider-item v-for="(project, index) in projects" :key="index">
          <div style="backgroundColor: #777d9e; width:100%; height:100%;">
            <p style="line-height: 280px; font-size: 5rem; text-align: center;">{{project.title}}</p>
          </div>
        </slider-item>
      </slider>
  </div>

    <hr>
    <h2> Computer Science student </h2>
    <h2> Royale Institute of Technology, KTH </h2>
    <h3> Lorem Ipsum </h3>
    <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum imperdiet porta. Quisque semper dolor lectus, sit amet feugiat sem malesuada in. Vestibulum non tempus nisl. Quisque ultrices id ante nec vulputate. Etiam ultricies pulvinar quam sed accumsan. Quisque varius felis libero, id eleifend diam lobortis et. Ut quis pellentesque nulla, at bibendum urna. Aenean convallis lectus nisl, vel feugiat erat tempus aliquam. In efficitur lectus sed est commodo, eu dignissim libero dapibus.</h4>
    <a taget="_blank" href="https://github.com/pjheden">GitHub</a>
    <a taget="_blank" href="https://www.linkedin.com/in/julian-hed%C3%A9n-b7b2ba110/">LinkedIn</a>
  </div>
</template>

<script >
  import { Slider, SliderItem } from 'vue-easy-slider'

  export default {
    name: 'Home',
    components: {
      Slider,
      SliderItem
    },
    props: {
      projects: Array
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.sliderContainer {
  width:40%;
  margin: 0 auto;
}
  p {
    margin: 0;
  }
</style>
