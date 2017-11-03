<template>
  <div class="container">
    <div class="colContainer">
      <img :src="introduction.image" :alt="introduction.name">
    </div>
    <div class="colContainer personDetails">
      <h1> {{introduction.name}} </h1>
      <h2> {{introduction.jobTitle}} </h2>
      <h3> {{introduction.workPlace}} </h3>
      <h3> {{introduction.location}} </h3>
    </div>
    <div  class="colContainer personText">
      <h3> {{introduction.summary}}</h3>
    </div>
    <div class="colContainer linkButtons">
      <a target="_blank" :href="contact.github">GitHub</a>
      <a :href="contact.mailto">{{contact.email}}</a>
      <a target="_blank" :href="contact.linkedin">LinkedIn</a>
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
    background: #333333;
    overflow: hidden;
  }

  .colContainer {
    box-sizing: border-box;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    float: left;
    width: 33%;
    margin-left: 0%;
    right: auto;
    left: auto;
  }

  .colContainer img {
    border-radius: 20em;
    height: 15em;
    width: 15em;
  }

  .colContainer h4 {
    max-width: 30em;
  }

  .linkButtons {
    width:100%;
    margin-top:2em;
    margin-bottom: 2em;
    padding-left: 7em;
    max-width: none;
  }

  .personDetails {
    margin-top: 2em;
    width: 30%;
  }
  .personText {
    margin-top: 5em;
    width: 30%;
  }
  a {
    float:left;
    margin: 0 0.5em 0 0;
    /*margin: 5px;
    margin-bottom: 2%;
    */
    /*font-size: 1em;*/
    color: white;
    padding: 1em;
    background: linear-gradient(to right,#56ccf2,#2f80ed);
    border-radius: 1em;
    border: none;
    display: inline-block;
    text-decoration: none;
    -webkit-transition: all ease 0.8s;
  	-moz-transition: all ease 0.8s;
  	 transition: all ease 0.8s;
  }
  a:nth-child(4n+1) {
    background:linear-gradient(to right,#2f80ed,#96c93d);
  }
  a:nth-child(4n+2) {
    background:linear-gradient(to right,#96c93d,#ffa971);
  }
  a:nth-child(4n+3) {
    background:linear-gradient(to right,#ffa971,#d116ca);
  }


  a:hover{
    box-shadow: inset 0 0 0 100px #56ccf9;
  }

  h1, h2, h3, h4 {
    color: white;
  }

</style>
