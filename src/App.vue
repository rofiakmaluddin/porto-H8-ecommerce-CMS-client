<template>
  <div id="app">
      <button @click="goToLogin">Login</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin () {
      this.$router.push('Login').catch(err => { console.log(err) })
    }
  }
}
</script>

<style>
  html, body {
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>
