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

    <div class="container">
      <hr />
      <h4> Wheel Collider, 2018-11-10</h4>
      <p>
        Car physics. A central part of our game. It needs to feel good to drive our cars,
        it has to be responsive and fun. Realisitc? Who cares!
        <br />
        How do I do this? Oh right, Unity has a built in component. Excellent! I should have known,
        Unity always have a built in component for all your needs. A quick two hours and it's already done.
        A initial implementation of course, refining can be a lifetime project. There are more variables
        than i bother reading, but it already feels decent. Put some rotation on top of that (For turning and driving),
        sometimes things just goes so fluently...
      </p>
    </div>

    <div class="container">
      <hr />
      <h4> Speedy Gonzales, 2018-11-12</h4>
      <p>
        Thinks are happening in rapid development. Even though it seems like our team size
        is constantly sinking (From 5 to practically 3.5), our progress is increasing.
        It could be all the hours we are putting in, but it's hard not to. Suddenly the line between
        school and hobbies are mighty thin.
        <br />
        Working in a team is great (sometimes). You don't have to do everything yourself. Wonderful.
      </p>
    </div>

    <div class="container">
      <hr />
      <h4> Passing variables between Scenes, 2018-11-13</h4>
      <p>
        Players join and select cars in the Menu Scene, now let's just pass this
        to our game scene and we are have the pipeline done. Shouldn't be hard right?
        Well, it is. How can there not be a better solution for this?
        <br />
        My Google research tells me that there are two methods to do this,
        none of which makes me sleep well at night.
        The first one is to write your data to a file and read it again, no way!
        The second is to create a static file (scary), fine. It's a quick fix,
        but it hurts.
      </p>
    </div>

    <div class="container">
      <hr />
      <h4> Oh god, What have I've done? 2018-11-14</h4>
      <p>
        Sound. An Important factor, to say the least. Often left for the very last sprint.
        This time we discussed it early, and someone jokingly suggest I should
        be our sound generator. I quickled agreed to this (as I've thought about it before),
        but have I really thought it through? Well, as I am recording the sounds I am not sure if I should laugh or cry.
        Files are recorded and uploaded to Trello. We'll see!
      </p>
    </div>

    <div class="container">
      <hr />
      <h4> In the land of the blind, the one-eyed man is king 2018-11-23</h4>
      <p>
        Turns out that it is hard to make things look pretty.
        It's a skill rare amongst the computer science department. In our group,
         it turns out that I am the most qualified for the job (and that is a first).
        Trial and error is the name of the game,
        I take inspiration from wherever I can find and try over and over again until it's acceptable.
        Note, "acceptable" and not good.
        I might have greater confidence in my artistic side after this project, we'll see!
      </p>
    </div>


    <div class="container">
      <hr />
      <h4> Meeting, Coding, Preperation 2018-11-27</h4>
      <p>
        Adding new stuff is simple. It is the refining and fine tuning that takes time, and is a a lot less fun.
        UI, driving, weapons and so on.
        Minor bugs here and there. We are having an autumn cleaning before winter comes.
        <br />
        Oh, and we finally added some of the sounds today. Here is a preview:
      </p>
      <audio controls>
        <source :src="getAudioUrl('collision3')" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>
      <audio controls>
        <source :src="getAudioUrl('intro')" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>
      <audio controls>
        <source :src="getAudioUrl('thrust')" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>
    </div>

  </div>
</template>

<script >
  export default {
    name: 'DevBlog',
    methods: {
      getImgUrl: function (pet) {
        var images = require.context('../assets/', false, /\.png$/)
        return images('./' + pet + '.png')
      },
      getAudioUrl: function (pet) {
        var images = require.context('../assets/', false, /\.mp3/)
        return images('./' + pet + '.mp3')
      },
      getVideoUrl: function (pet) {
        var images = require.context('../assets/', false, /\.mp4$/)
        return images('./' + pet + '.mp4')
      }
    }
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
