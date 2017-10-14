<template>
  <div>
    <h1> Get in touch with me </h1>
    <hr>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" name="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" name="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea type="text" name="message" v-model="message" />
      </div>
      <input class="button" type="submit" value="Submit">
    </form>
    <div>
      <h3>Email me!</h3>
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
</style>
