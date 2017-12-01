<template>
  <div id = "snow" class = "container">
    <div>
      <div class="container">
        <h1 class="center" style="color:white;"> Julians Önskelista </h1>
        <h5 class="center">
          Bilderna och länkarna är bara för att
          visa vad jag menar. <br>
          Önskar mig inte dom produkterna specifikt.
        </h5>
      </div>
      <ul>
        <li v-for="wish in wishes" v-on:click="selectProject(wish.url, wish.title)">
          <div class="listContainer">
            <h4>{{wish.title}}</h4>
            <p>
              {{wish.description}}
            </p>
            <img :src=wish.image :alt="wish.title">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
  export default {
    name: 'Wishlist',
    data () {
      return {
        wishes: [
          {
            title: 'Vattenflaska',
            description: 'En vattenflaska med samma funktionalitet som på bilden, behöver inte alls vara den modellen eller färgen.',
            url: 'http://www.pricerunner.se/pl/501-4062436/Camping-och-Friluftsliv/Camelbak-Eddy-Bottle-750ml-priser',
            image: 'https://images.pricerunner.com/product/400x400/1517617310/Camelbak-Eddy-Bottle-750ml.jpg'
          },
          {
            title: 'Ryggsäck',
            description: 'Med plats för laptop. Gillar stilen och kompaktheten till den på bilden.',
            url: 'https://www.zalando.se/rains-ryggsaeck-black-ri051h001-q11.html',
            image: 'https://mosaic01.ztat.net/vgs/media/pdp-gallery/RI/05/1H/00/1Q/11/RI051H001-Q11@10.jpg'
          },
          {
            title: 'Bruna boots',
            description: 'Bruna boots med snöre i liknande stil. Gärna för lätt höst/vår och lätt vinter.',
            url: 'https://www.zalando.se/tommy-hilfiger-snoerstoevletter-dark-mustard-to112l000-o11.html',
            image: 'https://mosaic01.ztat.net/vgs/media/pdp-gallery/TO/11/2L/00/0O/11/TO112L000-O11@12.jpg'
          }
        ]
      }
    },
    methods: {
      selectProject: function (url, title) {
        window.open(url, '_blank')
        this.$ga.event({
          eventCategory: 'Projects',
          eventAction: 'click',
          eventLabel: '' + title,
          eventValue: 123
        })
      }
    }
  }
</script>

<style scoped >

.center{
  text-align: center;
  margin: 0 auto;
  width: 30%
}

.container {
  width:100%;
  padding-top: 2em;
  overflow: hidden;
}

h1, h2, h3, h4, p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
  text-align: left;
}
h1, h2, h3, h4 {
  font-size: 1.3em;
  text-transform: uppercase;
  width: 60%;
  margin-right: 0em;
}
h5 {
  font-size: 1.1em;
  color: white
}

p {
  font-size: 1.2em;
  float: left;
  width: 60%
}

ul {
  list-style-type: none;
}

li {
  height: 30%;
  width:  80%;
  padding: 1em 3em 1em 3em;
  margin-left: 2%;
  margin-top: 1%;
  margin-bottom: 1%;
  display: inline - block;
  border-radius: 1em;
  border-style: solid;
  box-sizing: border-box;
  cursor: pointer;

  background: #999;
  box-shadow: 0 0 1px transparent;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
   transition: all ease 0.3s;

}

li:nth-child(2n+1) {
  background: rgb(100, 170, 100);
}

li:hover{
  /*Should put in some shadow instead, cards*/
  box-shadow: 0em 0em 2em gray;

}

img {
  width: 12em;
  height: 12em;
  float:right;
}

/* CSS for devices with viewing area smaller than 1700px */
@media screen and (max-width: 1700px) {
  ul {
    width: 60%;
    height: 100%;
    margin: auto;
    padding: 1em;
  }
  li {
    min-height: 20em;
    height: 22em;
    width: 100%;
    margin: 1em auto;
  }
  h1, h2, h3, h4 {
    font-size: 1.8em;
  }
  h2, h3, h4 {
    font-size: 1.7em;
  }
  p {
    font-size: 1.6em;
  }

}

#snow{
	background: #333;
	font-family: Androgyne;
	background-image: url('http://www.wearewebstars.dk/codepen/img/s1.png'), url('http://www.wearewebstars.dk/codepen/img//s2.png'), url('http://www.wearewebstars.dk/codepen/img//s3.png');
	height: 100%;
	left: 0;
	top: 0;
	width: 100%;
	z-index:1;
	-webkit-animation: snow 10s linear infinite;
	-moz-animation: snow 10s linear infinite;
	-ms-animation: snow 10s linear infinite;
	animation: snow 10s linear infinite;
}
@keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}
@-moz-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 400px 1000px, 200px 400px, 100px 300px;}
}
@-webkit-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}
@-ms-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}

</style>
