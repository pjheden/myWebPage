<template>
  <circle
    :cx="cx"
    :cy="cy"
    :r="r"
  >
  </circle>
</template>

<script>
  export default {
    name: 'ProjectCircle',
    props: {
      index: Number,
      r: Number
    },
    computed: {
      cx: function () {
        console.log('cx: ' + this.index + ' r: ' + this.r)
        return 100 + this.index * 5 / 2 * this.r
      },
      cy: function () {
        switch (this.index % 3) {
          case 0:
            return 100
          case 1:
            return 100 + 25
          case 2:
            return 100 + 50
        }
        return 100
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  circle {
    fill: transparent;
    stroke: #555;
  }
</style>