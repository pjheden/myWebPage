<template>
  <div class="container">
    <div class="colContainer">
      <h1> {{introduction.name}} </h1>
      <h2> {{introduction.jobTitle}} </h2>
      <h2> {{introduction.workPlace}} </h2>
      <h3> {{introduction.location}} </h3>
    </div>
    <div  class="colContainer">
      <h4> {{introduction.summary}}</h4>
    </div>
    <div class="colContainer linkButtons">
      <a target="_blank" :href="contact.github">GitHub</a>
      <a target="_blank" :href="contact.linkedin">LinkedIn</a>
      <a :href="contact.mailto">{{contact.email}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      introduction: Object,
      contact: Object
    }
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
