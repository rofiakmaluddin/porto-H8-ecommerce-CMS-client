<template>
  <div id="sidebar" class="bg-dark">
    <div id="topBar" class="p-3">
      <div class="white">Home</div>
      <div class="white">Show Category</div>
    </div>
    <div id="botBar" class="p-3">
      <div class="white">Logout</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #sidebar{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 9em;
    height: 100%;
  }
  .white{
    color: white;
  }
</style>
