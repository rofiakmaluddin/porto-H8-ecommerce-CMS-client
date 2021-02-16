<template>
  <div id="home">
    <Sidebar />
    <Category />
    <ItemContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Category from '@/components/Category.vue'
import ItemContainer from '../components/ItemContainer.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Category,
    ItemContainer
  }
}
</script>

<style>
  #home{
    height: 100%;
    display: flex;
  }
</style>
