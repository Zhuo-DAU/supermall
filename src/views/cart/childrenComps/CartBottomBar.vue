<template>
  <div class="cart-bottom-bar">
    <div class="check">
      <CheckButton class="check-all" :isSelect="isSelectAll" @click.native="selectClick"/>
      <span class="text">全选</span>
    </div>
    <div class="price">合计{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去计算 ({{checkLength}})</div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice(){
        return "￥" + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.$store.state.cartList.length === 0) return false;
        return !this.$store.state.cartList.find(item => !item.checked)
      }
    },
    methods: {
      selectClick(){
        if(this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checked=false)
        }else {
          this.$store.state.cartList.forEach(item => item.checked=true)
        }
      },
      calcClick() {
        if(!this.isSelectAll) {
          this.$toast.show('请选择购买的商品')
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    display: flex;

    height: 40px;
    line-height: 40px;

  }

  .cart-bottom-bar .check{
    display: flex;
    width: 80px;
    padding: 0 5px;

    align-items: center;
  }

  .check .text{
    margin-left: 5px;
  }
  .check-all {
    margin-top: 5px;
  }
  .price {
    flex: 1;

    text-align: center;
  }

  .calculate {
    width: 100px;
    background-color: red;
    text-align: center;
    color: #fff;
  }
</style>
