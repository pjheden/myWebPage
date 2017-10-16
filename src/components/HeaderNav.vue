<template >
  <div id='navDiv'>
    <nav>
        <ul>
          <li class = "leftNav clouds" >
            <BinaryClouds></BinaryClouds>
          </li>
          <li class = "leftNav" >
            <h1>
              Per Julian Hedén
            </h1>
          </li>
          <li
            v-for="(item, index) in items">
            <a href="#"> {{item.text}} </a>
            <!-- <router-link :to="item.href">{{item.text}}</router-link> -->
          </li>
        </ul>
      </nav>
  </div>
</template>

<script >
  import BinaryClouds from './BinaryClouds'

  // Add listener to scrollwheel for transparency animation
  function changeCss () {
    var bodyElement = document.querySelector('#navDiv')
    this.scrollY < 300 ? bodyElement.style['background-color'] = 'transparent' : bodyElement.style['background-color'] = '#333333'
  }

  window.addEventListener('scroll', changeCss, false)

  // Export component
  export default {
    name: 'HeaderNav',
    components: {
      BinaryClouds
    },
    props: {
      items: Array
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

  div {
    z-index: 1000;
    overflow: hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    background-color: transparent;
    -webkit-transition: all linear 0.8s;
    -moz-transition: all linear 0.8s;
     transition: all linear 0.8s;
  }

  div:before {
  }

  ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;

  }

  li {
      float: right;
  }

  li a {
      display: block;
      color: white;
      text-align: center;
      padding: 1.50em 2em;
      text-decoration: none;
  }

  li a:hover {
      background-color: #111111;
  }

  .leftNav {
    float:left;
    color: white;
    padding-left: 5em;
  }

  .clouds {
    padding-top: 0.70em;
  }

</style>
