<template>
  <div id="category" class="pt-4">
    <button @click.prevent="goToAddPage" style="max-width: 7em;" type="button" class="btn btn-primary">Create New</button>
    <div id="categoryContainer" class="mt-3">
      <ul>
        <li @click.prevent="chooseCategory(false)"><a href="">All Categories</a></li>
        <li
        v-for="(category, index) in categories"
        :key="index"
        @click.prevent="chooseCategory(category)"
        ><a href="">{{ category }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    chooseCategory (category) {
      this.$store.dispatch('fetchAllProduct', category)
    },
    goToAddPage () {
      this.$router.push('/addPage').catch(err => console.log(err))
    }
  },
  created () {
    this.$store.dispatch('fetchAllProduct')
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
