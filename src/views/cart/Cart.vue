<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="wrapper" ref="scroll">
      <CartList/>
    </scroll>
    <CartBottomBar/>
  </div>
</template>

<script>
  import CartBottomBar from "@/views/cart/childrenComps/CartBottomBar";
  import CartList from "@/views/cart/childrenComps/CartList";

  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";

  import {mapGetters} from 'vuex'


  export default {
    name: "Cart",
    components: {
      CartBottomBar,
      NavBar,
      Scroll,
      CartList
    },
    computed: {
      ...mapGetters(['cartLength'])
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

  .wrapper {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>
