<template >
  <div>
    <nav>
        <ul>
          <li
            v-for="item in items">
            <router-link :to="item.href">{{item.text}}</router-link>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script >
  export default {
    name: 'HeaderNav',
    data () {
      return {
        items: [
          {
            href: '/',
            text: 'Home'
          },
          {
            href: '/projects',
            text: 'Projects'
          },
          {
            href: '/contact',
            text: 'Contact'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111111;
}

</style>