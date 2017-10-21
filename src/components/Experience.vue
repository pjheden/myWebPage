<template>
  <div class='mainContainer'>
    <!-- Education -->
    <ul>
      <li v-for="edu in education">
        <h4 class="title">
          {{edu.title}}
        </h4>
        <div class='leftContainer'>
          <p class="location">
            {{edu.educatedAt}}
          </p>
          <p class="duration">
            {{edu.duration}}
          </p>
        </div>
        <p class="description">
          {{edu.description}}
        </p>
      </li>
    </ul>
    <!-- Work -->
    <ul>
      <li v-for="exp in experience">
        <h4 class="title">
          {{exp.workAt}}
        </h4>
        <div class='leftContainer'>
          <p class="location">
            {{exp.position}}
          </p>
          <p class="duration">
            {{exp.duration}}
          </p>
        </div>
        <p class="description">
          {{exp.description}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script >
  export default {
    name: 'Experience',
    props: {
      education: Array,
      experience: Array
    }
  }
</script>

<style scoped >

  .mainContainer {
  }

  h1, h2, h3, h4, p {
    font-family: "Trebuchet MS", Verdana, sans-serif;
    color: rgb(255, 255, 255);
    text-align: left;
  }

  ul {
    list-style-type: none;
    overflow: hidden;
  }

  li {
    float:left;
    border-radius: 1em;
    background:#40484b;
    height: 50%;
    width: 30%;
    margin: 1%;
  }

  .title {
    width: 100%;
    background:linear-gradient(to right, #f25656, #ed962f);
    padding-top: 1em;
    padding-bottom: 1em;
  }
  .leftContainer {
    float:left;
  }
  .description {
    float:right;
    width: 50%;
  }
</style>
