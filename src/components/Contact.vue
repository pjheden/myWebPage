<template>
  <div class="container">
    <h1> Get In Touch </h1>
    <hr>
    <h4> Feel free to say Hi! </h4>
    <form name="contactform" method="post" action="https://formspree.io/julianheden@gmail.com">
      <div class="form-group">
        <label for="name">NAME</label>
        <input class="contact_field" type="text" name="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="_replyto">EMAIL</label>
        <input class="contact_field" type="email" name="_replyto" v-model="email" />
      </div>
      <div class="form-group">
        <label for="message">MESSAGE</label>
        <textarea class="contact_field msg_field" type="text" name="message" v-model="message" />
      </div>
      <input class="button alge" type="submit" value="SEND MESSAGE">
    </form>
    <div class="emailContainer">
      <h3>Per Julian Hedén</h3>
      <p>{{contact.email}}</p>
    </div>
  </div>
</template>

<script >
  export default {
    name: 'Contact',
    props: {
      contact: Object
    },
    data () {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      isValidName: function () {
        console.log('valid name')
        var spaceless = this.name.replace(/\s/g, '') // remove all spaces
        var noNumRegex = new RegExp('/^([^0-9]*)$/')
        return spaceless.length > 0 && noNumRegex
      },
      isValidEmail: function () {
        return this.email.indexOf('@') > 0
      },
      isValidMessage: function () {
        return this.message.length > 0
      }
    }

    // https://stackoverflow.com/questions/271171/sending-emails-with-javascript/271172#271172
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .container {
    padding-top:5em;
    padding-bottom: 5em;
    background: #1b1b1b;
    color:white;
  }

  form {
    width: 30em;
    margin: 2em auto;
    padding: 0;
  }

  hr {
    width: 10%;
  }

  label {
    float:left;
  }

  .contact_field {
    padding-top: 1%;
    padding-bottom: 0.25%;
    margin-bottom: 5%;
    background: 0 0;
    width: 100%;
    border: none;
    border-bottom: 0.1em rgba(203, 230, 249, 0.75) solid;
    font-size: 1em;
    line-height: 1.3;
    color: #f2f2f2;
    resize: none;
    display: block;
  }

  .msg_field {
    height: 5em;
  }

  .button {
    display: flex;
    overflow: hidden;

    margin: 2em auto;
    padding: 1.25em 2em;

    cursor: pointer;
    user-select: none;
    transition: all 60ms ease-in-out;
    text-align: center;
    white-space: nowrap;
    text-transform: capitalize;

    color: #fff;
    border: 0 none;
    border-radius: 4px;

  }

  .button:hover {
    transition: all 60ms ease;
    opacity: .85;
  }

  .button.alge {
    color: #f2f2f2;
    background: #7999a9;
  }

  .emailContainer {
    margin: 2em auto;
    margin-top: 5em;
    width: 15em;
    height: 7em;
    color: #f2f2f2;
    border: 0.25em rgba(230, 217, 217, 0.5) solid;
    border-radius: 3em;
  }
</style>
