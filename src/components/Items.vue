<template>
<div>
  <div
    class="items"
    v-for="product in products"
    :key="product.id"
    >
      <div class="itemPhoto p-3"><img :src="product.img_url" alt="product"></div>
      <ul class="itemDesc m-0 p-3">
        <li class="h3 itemName p-2">{{ product.name }}</li>
        <li class="itemImgUrl p-2">{{ product.img_url }}</li>
        <li class="itemActions p-2">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button @click.prevent="fetchProduct(product.id)" type="button" class="btn btn-warning">Edit</button>
            <button @click.prevent="destroy(product.id)" type="button" class="btn btn-danger">Delete</button>
          </div>
        </li>
        <li class="itemPrice p-2">{{ product.price }}</li>
      </ul>
      <div class="text-center itemStock p-5">
        <div><b>Stock</b></div>
        {{ product.stock }}
      </div>
    </div>
</div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    destroy (id) {
      this.$store.dispatch('destroy', id)
    },
    fetchProduct (id) {
      this.$store.dispatch('fetchProduct', id)
    }
  }
}
</script>

<style>

</style>
