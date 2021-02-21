<template>
  <div id="loginPage" style="max-width:25em" class="shadow p-3 mt-5 mb-5 bg-white rounded container">
    <h2>Login to E-Commerce CMS</h2>
    <br>
    <div v-if="errors.length !== 0" class="alert alert-danger" role="alert">
      {{ errors }}
    </div>
    <form @submit.prevent="login">
      <div class="form-floating mb-3">
        <input v-model="email" type="email" class="form-control" placeholder="name@mail.com">
        <label>Email address</label>
      </div>
      <div class="form-floating">
        <input v-model="password" type="password" class="form-control" placeholder="Password">
        <label>Password</label>
      </div>
      <br>
      <button class="btn btn-success" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      this.email = ''
      this.password = ''
    }
  },
  computed: {
    errors () {
      return this.$store.state.errors
    }
  }
}
</script>

<style>

</style>
