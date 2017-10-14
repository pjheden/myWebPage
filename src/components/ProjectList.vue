<template >
  <div class="container">
    <!-- <h1> Projects </h1>
    <hr> -->
    <div>
      <ul>
        <li v-for="project in projects" v-on:click="selectProject(project.title)">
          <div class="listContainer">
            <img src="../assets/logo.png" :alt="project.title">
            <h4>{{project.title}}</h4>
            {{project.description}}
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script >
  export default {
    name: 'ProjectList',
    props: {
      projects: Array
    },
    methods: {
      // TODO: Change the projects list to contain a bool, if its local or external routing
      // and change the function based on that. so window.open if external, and router.push for internal
      // Local project routing
      selectProject: function (projectName) {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .container{
    background:linear-gradient(90deg, rgba(231, 225, 148, 0.37), white 50%, rgba(231, 225, 148, 0.37));
  }

  h1, h2 {
    font - weight: normal;
  }

  ul {
    list - style - type: none;
    list-style-type: none;
    display: table;
    padding: 1em 0em 5em 5em;
  }

  li {
    height: 18em;
    width:  30em;
    padding: 1em 3em 1em 3em;
    margin: 1em 3em 1em 3em;
    display: inline - block;
    border-radius: 1em;
    float: left;
    right: auto;
    left: auto;
    box-sizing: border-box;
    min-height: 1px;

    box-shadow: 0 0 1px transparent;
    -webkit-transition: all ease 0.3s;
  	-moz-transition: all ease 0.3s;
  	 transition: all ease 0.3s;

  }

  /*li:nth-child(odd) {
    background: #EFEEEE;
  }*/

  li:nth-child(4n+1) {
    background:linear-gradient(to right,#2f80ed,#56ccf2);
  }
  li:nth-child(4n+2) {
    background:linear-gradient(to right,#56ccf2,#96c93d);
  }
  li:nth-child(4n+3) {
    background:linear-gradient(to right,#96c93d,#e8d139);
  }
  li:nth-child(4n+0) {
    background:linear-gradient(to right,#e8d139,#ffa971);
  }

  li:hover{
    /*Should put in some shadow instead, cards*/
    box-shadow: 0em 0em 4em black;


  }

  img {
    float: left;
    width: 6em;
    height: 6em;
    margin-left: 1em;
  }


</style>
