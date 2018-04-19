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
            title: 'Google Home',
            description: 'Smart Home!',
            url: 'https://www.prisjakt.nu/produkt.php?p=3934372',
            image: 'http://cdn.shopify.com/s/files/1/0908/5452/products/Google_Home_1_Front_grande.png'
          },
          {
            title: 'Tofflor',
            description: 'Var tvungen att slänga mina gamla, och har varit frusen på fötterna i hela mars. Önskar mig några varma och sköna, som bara kommer användas inomhus.',
            url: 'https://www.footway.se/shepherd-jessica-17237-00.html',
            image: 'https://artimg.footway.com/01/172/17237-00/up/705/705/17237-00.png'
          },
          {
            title: 'Factfulness av Hans Rosling',
            description: 'Hans Roslings senaste/sista bok, svenska eller engelska.',
            url: 'https://www.bokus.com/bok/9789127149946/factfulness-tio-knep-som-hjalper-dig-forsta-varlden/',
            image: 'http://www.speakers.pl/media/pictures/profile/4502.png'
          },
          {
            title: 'Ljusterapilampa ',
            description: 'Har blivit rekommenderat en sådan lamp ett bra tag nu, och tror det ska vara bra för en datornörd!',
            url: 'https://konsumentmagasinet.se/ljusterapilampa-test/',
            image: 'https://i.ebayimg.com/images/g/IfEAAOSwVqlaSKo4/s-l300.png'
          },
          {
            title: 'Smartwatch',
            description: 'Har länge försökt hitta på en bra ursäkt för att köpa en Smartwatch, något användningsområde eller liknande. Har inte lyckats, men önskar mig en ändå. Det är rätt coolt. Jag måste göra lite research på vilka som är bra, och prova att dom passar armen. Återkommer!',
            url: 'https://www.techradar.com/news/wearables/every-android-wear-smartwatch-in-the-world-today-1288283',
            image: 'https://d30y9cdsu7xlg0.cloudfront.net/png/197364-200.png'
          },
          {
            title: 'Nya bågar',
            description: 'Det är dags att byta bågar. Ta mig ut på glasögon-shopping, med fashionråd.',
            url: 'https://www.misterspex.se/',
            image: 'https://media.fyndiq.se/product/3a/ca/91/872be72a7904542e16fe0b8cd1b1b15fe4/original.png'
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
  padding: 1em 3em 1em 3em;
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
