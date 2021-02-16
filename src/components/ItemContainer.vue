<template>
  <div id="itemContainer">
    <div id="categoryName">Food</div>
    <div id="items">
      <div class="itemPhoto">Photo</div>
      <ul class="itemDesc">
        <li class="itemName">Nasi Goreng</li>
        <li class="itemImgUrl">https://img.com</li>
        <li class="itemActions">
          <button>Edit</button> <button>Delete</button>
        </li>
      </ul>
      <div class="itemStock">50</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #itemContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  #items{
    display: flex;
  }
</style>
