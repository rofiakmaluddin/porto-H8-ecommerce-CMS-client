<template>
  <div id="loginPage" style="max-width:25em" class="shadow p-3 mt-5 mb-5 bg-white rounded container">
    <h2>Login to E-Commerce CMS</h2>
    <br>
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
import axios from '@/api/axios'
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
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email: this.email,
          password: this.password
        }
      }).then(({ data }) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      }).then(_ => {
        this.email = ''
        this.password = ''
      })
    }
  }
}
</script>

<style>

</style>
