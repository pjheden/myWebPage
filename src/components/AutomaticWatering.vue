<template>
<div class="body">
  <h1> Watering System 2.0 </h1>
  <div id="checkboxes">
    <label>Status:</label>
    <ul>
      <li><input type="checkbox" checked> Planning </li>
      <li><input type="checkbox" checked> Acquire parts </li>
      <li><input type="checkbox"> Build the system</li>
      <li><input type="checkbox"> Calibrate to perfection</li>
      <li><input type="checkbox"> Documentation / Blog</li>
    </ul>
  </div>
  <div class="content">
    <h4>2018/08/25</h4>
    <img :src="getImgUrl('waterer_plans')" alt="Drawings" />
    <p>
      The idéa is to create a automatic watering system for multiple plants. <br /> It will provide water upon need. The trigger for pumping water can be done in many ways, two possible solutions we have thought of are to calibrate a time-interval or
      use a humidity sensor. <br /> The latter of the two would also need to be calibrated, a certain treshold has to be found and set.
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
    }
  }
}
</script>

<style scoped >
.body {
  background-color: white;
  margin-top: 5%;
  margin-bottom: 5%;
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
  width: 74%;
  padding: 3%;
  margin: 2% 10% 10% 10%;
  background-color: lightgray;
}

.content img {
  width: 300px;
  height: 300px;
}
</style>
