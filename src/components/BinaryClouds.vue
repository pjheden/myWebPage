<template>
  <div class='container'>
      <!-- Front cloud -->
      <div class='backCloud circle large middle'></div>
      <div class='backCloud circle small right'></div>
      <div class='backCloud bottomLine'></div>
      <!-- Back cloud -->
      <div class='frontCloud circle medium left'></div>
      <div class='frontCloud circle large middle'></div>
      <div class='frontCloud circle small right'></div>
      <div class='frontCloud bottomLine'></div>
      <!-- Rain -->
      <ul v-for="line in rainlines">
        <li v-for="drop in line">
          {{drop}}
        </li>
      </ul>
  </div>
</template>

<script >
  export default {
    name: 'BinaryClouds',
    data () {
      return {
        rainlines: [
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
      }
    }
  }
</script>

<style scoped >
  @-webkit-keyframes fall {
    from {
      top: 0%;
    }
    to {
      top:200%;
    }
  }
  @keyframes fall {
    from {
      top: 0%;
    }
    to {
      top:200%;
    }
  }

  .container {
    width: 7em;
    height: 3em;
    position: relative;
    overflow: hidden;

    margin: auto;
  }

  ul {
    list-style-type: none;
    position: relative;
    text-shadow: 1em -1em gray;
    font-family: "Times New Roman", Times, serif;
    font-size: 0.55em;

    top:15%;
    height: 47%;
    right:135%;
  }

  li {
    position:relative;
    top:0%;
  }

  li:nth-child(8n+0){
    left:8em;
    animation-name: fall;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    -webkit-animation-name: fall; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite;
  }
  li:nth-child(8n+1){
    left:12em;
    animation-name: fall;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    -webkit-animation-name: fall; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite;
  }
  li:nth-child(8n+2){
    left:16em;
    animation-name: fall;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    -webkit-animation-name: fall; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 3s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite;
  }
  li:nth-child(8n+3){
    left:18em;
    animation-name: fall;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    -webkit-animation-name: fall; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite;
  }
  li:nth-child(8n+4){
    left:8em;
    animation-name: fall;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    -webkit-animation-name: fall; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite;
  }
  li:nth-child(8n+5){
    left:12em;
    animation-name: fall;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    -webkit-animation-name: fall; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite;
  }
  li:nth-child(8n+6){
    left:16em;
    animation-name: fall;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    -webkit-animation-name: fall; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 3s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite;
  }
  li:nth-child(8n+7){
    left:18em;
    animation-name: fall;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    -webkit-animation-name: fall; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: infinite;
  }

  .frontCloud {
    background: rgba(236, 245, 247, 1);
    z-index: 2;
  }

  .backCloud {
    background: rgba(225, 223, 232, 1);
    z-index: 1;
  }

  .bottomLine {
    width: 80%;
    height: 20%;
    position: absolute;
    top: 40%;

    -webkit-border-radius: 10em 10em 10em 10em;
    -moz-border-radius: 10em 10em 10em 10em;
    border-radius: 10em 10em 10em 10em;
  }

  .backCloud.bottomLine {
    top: 36%;
    right: 10%;
  }

  .circle {
    position: absolute;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }

  .small {
    width: 20%;
    height: 30%;
  }

  .medium {
    width: 30%;
    height: 40%;
  }

  .large {
    width: 35%;
    height: 50%;
  }

  .frontCloud.left {
    top: 10%;
    left: 10%;
  }
  .frontCloud.middle {
    top: 0%;
    left: 27%;
  }
  .frontCloud.right {
    top: 25%;
    right: 27%;
  }

  .backCloud.middle {
    top: 1%;
    left: 37%;
  }
  .backCloud.right {
    top: 26%;
    right: 17%;
  }
</style>
