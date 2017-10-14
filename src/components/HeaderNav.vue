<template >
  <div>
    <nav>
        <ul>
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
  export default {
    name: 'HeaderNav',
    props: {
      items: Array
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

  div {
    overflow: hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
  }

  ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333333;
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

</style>
