<template>
  <div style="max-width:30em" class="shadow p-3 mt-5 mb-5 bg-white rounded container">
    <div>Back</div>
    <h2>Edit Product</h2>
    <br>
    <form @submit.prevent="editProduct">
      <div class="form-floating mb-3">
        <input v-model="name" type="text" class="form-control" placeholder="T-Shirt">
        <label>Product Name</label>
      </div>
      <div class="form-floating">
        <input v-model="img_url" type="text" class="form-control" placeholder="https://image.com">
        <label>Image URL</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="price" type="number" class="form-control" placeholder="500000">
        <label>Price</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="stock" type="number" class="form-control" placeholder="50">
        <label>Stock</label>
      </div>
      <br>
      <button class="btn btn-success" type="submit">Edit Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditPage',
  data () {
    return {
      name: '',
      img_url: '',
      price: '',
      stock: ''
    }
  }
}
</script>

<style>

</style>
