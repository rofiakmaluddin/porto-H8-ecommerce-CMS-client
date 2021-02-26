<template>
  <div style="max-width:30em" class="shadow p-3 mt-5 mb-5 bg-white rounded container">
    <div ><a @click="backBtn" href="">Back</a></div>
    <h2>Add a Product</h2>
    <br>
    <div v-if="errors.length !== 0" class="alert alert-danger" role="alert">
      {{ errors }}
    </div>
    <form @submit.prevent="addProduct">
      <div class="form-floating mb-3">
        <input v-model="addData.name" type="text" class="form-control" placeholder="T-Shirt">
        <label>Product Name</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="addData.imgUrl" type="text" class="form-control" placeholder="https://image.com">
        <label>Image URL</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="addData.price" type="number" class="form-control" placeholder="500000">
        <label>Price</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="addData.stock" type="number" class="form-control" placeholder="50">
        <label>Stock</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="addData.category" type="text" class="form-control" placeholder="Fashion">
        <label>Category</label>
      </div>
      <br>
      <button class="btn btn-success" type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPage',
  data () {
    return {
      addData: {
        name: '',
        imgUrl: '',
        price: 0,
        stock: 0,
        category: ''
      }
    }
  },
  methods: {
    backBtn () {
      this.$router.push('/').catch(err => { console.log(err) })
    },
    addProduct () {
      this.$store.dispatch('addProduct', this.addData)
      this.$router.push('/').catch(err => { console.log(err) })
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
