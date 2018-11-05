<template>
  <div class="body">
    <div class = "header">
      <h1>Dev Blog - DH2650 Computer Game Design</h1>
      <h2>By Julian Hedén</h2>
    </div>
    <!-- TODO create template based post -->

    <div class="container">
      <hr />
      <h4> Ideas, 2018-11-01</h4>
      <p>
          What to do, what to do... <br />
          We had so many idéas in all kinds of directions,
          and quickly realized that we had to find some method to
          converge to some final agreed upon game idea. <br />
          <br />
          We began creating a simple list of agreed upon points:
          <ul>
            <li> No VR </li>
            <li> Local versus / multiplayer </li>
            <li> Console Controllers </li>
            <li> Arcade like </li>
            <li> Party games </li>
          </ul>
          This worked out great, slowly the list of plausible ideas grow shorter and shorter.
          Until we found a idéa everyone was excited about, and proposals for features
          came faster than what we could write down. <br />
          Taking inspiration from Warlock (A WC3 mod), we decided upon a arena
          game with cars. Where the core concept is to bump each other out of the map.
      </p>
    </div>

    <div class="container">
      <hr />
      <h4> First steps, 2018-11-05</h4>
      <p>
        First meeting with the full group. Great! Everyone seems to take their roles
        in the team in a natural way, and this looks to be a well oiled machine.
        <br />
        Good ideas of how the work flow should work are discussed, even some buzz words
        are thrown out there. Agile development, sprints and even test driven development.
        We discuss and set up todos, decide on the next meeting and prepares for
        the concept presentation on Thursday.
        <br />
        Lastly we drew up something visual for the core game. The most basic and doable idea.
        And most importantly(!), we started discussing the name for the project..
      </p>
    </div>
  </div>
</template>

<script >
  export default {
    name: 'DevBlog'
  }
  // TODO create post vector somewhere, so i can add posts simple
</script>

<style scoped >

.body {
    background-color: #3D9970;
    color:white;
}

.header {
  padding-top: 2em;
}
.header h1 {
  margin: 0 auto;
}

.container {
  display: inline-block;
  width: 50%;
}

p {
  text-align: left;
}

.gray {
  background-color: lightgray;
}

</style>
