<template >
  <div >
    <h1> Projects </h1>
    <hr>
    <div>
      <ul>
        <li v-for="project in projects" v-on:click="selectProject(project.title)">
          <img src="../assets/logo.png" :alt=project.title>
          <h4>{{project.title}}</h4>
          {{project.description}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script >
  export default {
    name: 'ProjectList',
    data () {
      return {
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
        }, {
          title: 'Checkers AI',
          image: 'checkers',
          description: 'An AI that is an expert in checkers'
        }
        ]
      }
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
  h1, h2 {
    font - weight: normal;
  }

  ul {
    list - style - type: none;
    padding: 0;
    width: 40%;
    list-style-type: none;
    display: table;
    margin: 0 auto;
  }

  li {
    display: inline - block;
    height: 90%;
    padding: 1em 0 1em 0;
  }

  li:nth-child(odd) {
    background: #EFEEEE;
  }

  li:hover {
    background: #676666;
    /*Should put in some shadow instead, cards*/
  }

  img {
    float: left;
    width: 6em;
    height: 6em;
    margin-left: 1em;
  }

  /* CSS for devices with viewing area smaller than 600px */
  @media screen and (max-width: 600px) {
    .class {
      background: #000;
    }

  }


</style>
