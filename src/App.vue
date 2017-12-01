<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
}

 /* Ghost debug*/
/*
* {
  background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important;
}*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2, h3, h4 {
  font-size: 1.3em;
}
p {
  font-size: 1.2em;
}

a {
  font-size: 1em;
}

/* CSS for devices with viewing area smaller than 1700px */
@media screen and (max-width: 1700px) {
  h1, h2, h3, h4 {
    font-size: 1.8em;
  }
  p {
    font-size: 1.7em;
  }

  a {
    font-size: 1.4em;
  }
}
</style>
