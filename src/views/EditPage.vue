<template>
  <div style="max-width:30em" class="shadow p-3 mt-5 mb-5 bg-white rounded container">
    <div ><a @click.prevent="backBtn" href="">Back</a></div>
    <h2>Update The Product</h2>
    <br>
    <div v-if="errors.length !== 0" class="alert alert-danger" role="alert">
      {{ errors }}
    </div>
    <form @submit.prevent="updateProduct">
      <div class="form-floating mb-3">
        <input v-model="editData.name" type="text" class="form-control" placeholder="T-Shirt">
        <label>Product Name</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="editData.imgUrl" type="text" class="form-control" placeholder="https://image.com">
        <label>Image URL</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="editData.price" type="number" class="form-control" placeholder="500000">
        <label>Price</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="editData.stock" type="number" class="form-control" placeholder="50">
        <label>Stock</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="editData.category" type="text" class="form-control" placeholder="Fashion">
        <label>Category</label>
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
      editData: {
        name: '',
        imgUrl: '',
        price: 0,
        stock: 0,
        category: '',
        id: 0
      }
    }
  },
  methods: {
    updateProduct () {
      this.editData.id = this.product.id
      this.$store.dispatch('updateProduct', this.editData)
      this.$router.push('/').catch(err => { console.log(err) })
    },
    backBtn () {
      this.editData = {
        name: '',
        imgUrl: '',
        price: 0,
        stock: 0,
        category: ''
      }
      this.$router.push('/').catch(err => { console.log(err) })
    }
  },
  computed: {
    errors () {
      return this.$store.state.errors
    },
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.editData.imgUrl = this.product.img_url
    this.editData.name = this.product.name
    this.editData.price = this.product.price
    this.editData.stock = this.product.stock
    this.editData.category = this.product.category
    console.log(this.editData, '>>> dihalaman edit')
  }
}
</script>

<style>

</style>
