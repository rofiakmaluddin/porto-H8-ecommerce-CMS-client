<template>
  <div id="home">
    <Sidebar />
    <CategoryContainer />
    <div style="width: 100%;" id="itemSection">
      <div class="display-4 categoryName p-3"><b class="p-2">{{ chosenCategory }}</b></div>
      <ItemContainer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import CategoryContainer from '@/components/CategoryContainer'
import ItemContainer from '@/components/ItemContainer'
export default {
  name: 'Home',
  components: {
    Sidebar,
    CategoryContainer,
    ItemContainer
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    chosenCategory () {
      return this.$store.state.chosenCategory
    }
  },
  created () {
    this.$store.dispatch('fetchAllProduct', false)
  }
}
</script>

<style>
  #home{
    height: 100%;
    width: 100%;
    display: flex;
  }
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
  .black{
    color: black;
  }
  #category{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 13em;
    height: 100%;
    overflow: auto;
    background-color: lightgrey;
  }
  a{
    text-decoration: none;
  }
  .categoryName{
    font-size: 3em;
  }
</style>
