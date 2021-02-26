<template>
  <div class="itemContainer" >
    <Items />
  </div>
</template>

<script>
import Items from '@/components/Items'
export default {
  components: {
    Items
  }
}
</script>

<style>
  .itemContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 85%;
    overflow: auto;
  }
  .items{
    display: flex;
    justify-content: space-between;
  }
  .items ul li{
    list-style-type: none;
  }
  img{
    width: 200px;
  }
</style>
