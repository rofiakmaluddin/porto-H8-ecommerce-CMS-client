<template>
  <div id="category">
    <button>Create New</button>
    <div id="categoryContainer">
      <ul>
        <li>All Categories</li>
        <li>Food</li>
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Toys</li>
        <li>Other Categories</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #category{
    display: flex;
    flex-direction: column;
    max-width: 15em;
    height: 100%;
  }
</style>
