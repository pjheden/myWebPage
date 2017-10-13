<template>
  <div class="container">
    <div class="colContainer">
      <h1> Julian Hedén </h1>
      <h2> Computer Science student </h2>
      <h2> Royale Institute of Technology, KTH </h2>
      <h3> Lorem Ipsum </h3>
    </div>
    <div  class="colContainer">
      <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum imperdiet porta. Quisque semper dolor lectus, sit amet feugiat sem malesuada in. Vestibulum non tempus nisl. Quisque ultrices id ante nec vulputate. Etiam ultricies pulvinar quam sed accumsan. Quisque varius felis libero, id eleifend diam lobortis et. Ut quis pellentesque nulla, at bibendum urna. Aenean convallis lectus nisl, vel feugiat erat tempus aliquam. In efficitur lectus sed est commodo, eu dignissim libero dapibus.</h4>
    </div>
    <div class="colContainer linkButtons">
      <a target="_blank" href="https://github.com/pjheden">GitHub</a>
      <a target="_blank" href="https://www.linkedin.com/in/julian-hed%C3%A9n-b7b2ba110/">LinkedIn</a>
      <a href="mailto:julianheden@gmail.com">Email</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .container {
    width:100%;
    padding-top: 6em;
    padding-bottom:20em;
  }

  .colContainer {
    box-sizing: border-box;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    float: left;
    width: 50%;
    margin-left: 0%;
    right: auto;
    left: auto;
  }

  .colContainer h4 {
    max-width: 30em;

  }

  .linkButtons {
    width:100%;
    margin-top:2em;
    margin-bottom: 2em;
    max-width: none;
  }

  a {
    margin: 5px;
    margin-bottom: 2%;
    font-size: 1rem;
    color: white;
    padding: 1em;
    background: linear-gradient(to right,#56ccf2,#2f80ed);
    border-radius: 5px;
    border: none;
    display: inline-block;
    text-decoration: none;
    -webkit-transition: all ease 0.8s;
  	-moz-transition: all ease 0.8s;
  	 transition: all ease 0.8s;
  }

a:hover{
  box-shadow: inset 0 0 0 100px #56ccf9;
}

</style>
