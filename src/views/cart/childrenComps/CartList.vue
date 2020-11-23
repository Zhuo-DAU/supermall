<template>
  <div class="cart-list">
    <CartListItem
      v-for="(item,index) in cartList"
      :product="item"
      :key="index"
    />
  </div>
</template>

<script>
  import CartListItem from "@/views/cart/childrenComps/CartListItem";

  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed:{
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>

</style>
