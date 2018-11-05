<template>
<div class="body">
  <h1> Watering System 2.0 </h1>
  <div id="checkboxes">
    <label>Status:</label>
    <ul>
      <li><input type="checkbox" checked> Planning </li>
      <li><input type="checkbox" checked> Acquire parts </li>
      <li><input type="checkbox" checked> Build the system</li>
      <li><input type="checkbox" checked> Calibrate</li>
      <li><input type="checkbox" checked> Documentation / Blog</li>
    </ul>
  </div>
  <div class="content">
    <hr />
    <h4>Planning - 2018/08/25</h4>
    <img :src="getImgUrl('waterer_plans')" alt="Drawings" />
    <p>
      The idéa is to create a automatic watering system for multiple plants. <br /> It will provide water upon need. The trigger for pumping water can be done in many ways, two possible solutions we have thought of are to calibrate a time-interval or
      use a humidity sensor. <br /> The latter of the two would also need to be calibrated, a certain treshold has to be found and set.
    </p>
  </div>

  <div class="content">
    <hr />
    <h4>Testing the components - 2018/10/early October</h4>
    <img :src="getImgUrl('soldering')" alt="Soldering" />
    <p>
      All the parts are finally here. After recieving the water pump I just had
      to try it.
      <br />
      In all honesty, I've never worked with pumps before and hardly know how
      to control them. Thanks to my horder tendencies, I managed to find an old
      Apple Ipad cable, which I cut open and soldered the cable with my relay.
      Effectively creating a power source for the relay and pump.
      <br />
      It works! I shouldn't be suprised, should I? Never the less, I was amazed
      as I pumped water back and forth between bowls.
    </p>
  </div>

  <div class="content">
    <hr />
    <h4>Building - 2018/10/late October</h4>
    <video width = "500" height = "300" controls>
       <source :src="getVideoUrl('waterer_finish_video')" type = "video/mp4">
       This browser doesn't support video tag.
    </video>
    <img :src="getImgUrl('waterer_finish')" alt="System" />
    <p>
      At this point I knew how everything worked and all the question marks was answered.
      Now it was just a matter of putting it togheter and building a system.
      <br />
      My idéa was to begin with something simple. Creating a simple python script,
      which runs the pump for X seconds every other day.
      <br />
      Above the results are shown, and effectiely my chili plant gets to see sunlight
      another day.
    </p>
  </div>
</div>
</template>

<script >
export default {
  name: 'AutomaticWatering',
  methods: {
    getImgUrl: function (pet) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + pet + '.png')
    },
    getVideoUrl: function (pet) {
      var images = require.context('../assets/', false, /\.mp4$/)
      return images('./' + pet + '.mp4')
    }
  }
}
</script>

<style scoped >
.body {
  background-color: #3D9970;
  color: white;
  padding-top: 5%;
  padding-bottom: 5%;
}

.body h1,h2,h3,h4 {
  margin-top: 0;
}

#checkboxes {
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  border: lightgray solid 2px;
}

#checkboxes label {
  font-size: 25px;
}

#checkboxes ul {
  margin: 0;
  list-style: none;
  text-align: left;
}


.content {
  display: inline-block;
  width: 50%;
  margin: 2% 10% 10% 10%;
}

.content img {
  width: 300px;
  height: 300px;
}

p {
  text-align: left;
}
</style>
