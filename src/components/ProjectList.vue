<template >
  <div class="container">
    <!-- <h1> Projects </h1>
    <hr> -->
    <div>
      <ul>
        <li v-for="project in projects" v-on:click="selectProject(project.url)">
          <div class="listContainer">
            <h4>{{project.title}}</h4>
            <p>
              {{project.description}}
            </p>
            <img :src="getImgUrl(project.image)" :alt="project.title">
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
      selectProject: function (url) {
        window.open(url, '_blank')
      },
      getImgUrl: function (pet) {
        var images = require.context('../assets/', false, /\.png$/)
        return images('./' + pet + '.png')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

  h1, h2, h3, h4, p {
    font-family: "Trebuchet MS", Verdana, sans-serif;
    color: white;
    text-align: left;
  }
  h1, h2, h3, h4 {
    font-size: 1.3em;
    text-transform: uppercase;
    width: 100%;
  }
  p {
    font-size: 1.2em;
    width: 50%;
    float: left;
  }

  ul {
    list-style-type: none;
    display: table;
  }

  li {
    height: 12%;
    width:  30%;
    padding: 1em 3em 1em 3em;
    margin-left: 2%;
    margin-top: 1%;
    margin-bottom: 1%;
    display: inline - block;
    border-radius: 1em;
    float: left;
    box-sizing: border-box;
    cursor: pointer;

    box-shadow: 0 0 1px transparent;
    -webkit-transition: all ease 0.3s;
  	-moz-transition: all ease 0.3s;
  	 transition: all ease 0.3s;

  }

  li:nth-child(6n+1) {
    background:linear-gradient(to right,#2f80ed,#56ccf2);
  }
  li:nth-child(6n+2) {
    background:linear-gradient(to right,#56ccf2,#96c93d);
  }
  li:nth-child(6n+3) {
    background:linear-gradient(to right,#96c93d,#e8d139);
  }
  li:nth-child(6n+4) {
    background:linear-gradient(to right,#e8d139,#ffa971);
  }
  li:nth-child(6n+5) {
    background:linear-gradient(to right,#ffa971,#d16016);
  }
  li:nth-child(6n+0) {
    background:linear-gradient(to right,#d16016,#d116ca);
  }


  li:hover{
    /*Should put in some shadow instead, cards*/
    box-shadow: 0em 0em 2em gray;

  }

  img {
    float: right;
    width: 10em;
    height: 10em;
    border-radius:5em;
  }


</style>
