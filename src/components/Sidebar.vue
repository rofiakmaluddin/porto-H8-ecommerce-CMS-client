<template>
  <div id="sidebar" class="bg-dark">
      <div id="topBar" class="p-3">
        <div class="white">Home</div>
      </div>
      <div id="botBar" class="p-3">
        <div @click.prevent="logout"><a class="white" href="">Logout</a></div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' }).catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
