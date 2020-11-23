<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="itemClick">
        <i class="icon select" :class="{selected: isSelect}"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-middle cart" @click="addToCart">加入购物车</div>
    <div class="bar-right buy">购买</div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data() {
      return {
        isSelect: false
      }
    },
    methods: {
      itemClick() {
        this.isSelect = !this.isSelect;
      },
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
 .bottom-bar {
   height: 49px;
   background-color: #fff;
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;

   display: flex;
   text-align: center;
   font-size: 15px;
 }

 .bar-left {
   flex: 3;
   display: flex;
 }
 .bar-left>div {
   flex: 1;
 }
 .bar-left .icon {
   display: block;
   width: 22px;
   height: 22px;
   margin: 7px auto 2px;
   background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
 }
 .bar-left .text {
   font-size: 13px;
 }

 .bar-left .service {
   background-position: 0 -54px;
 }

 .bar-left .shop {
   background-position: 0 -98px;
 }
 .bar-left .selected {
   background-position: 0 -27px;
 }
 .bar-middle {
   background: #ffe817;
   color: #333;
   flex: 2;
   line-height: 49px;
 }

 .bar-right {
   flex: 2;
   background-color: #f69;
   line-height: 49px;
   color: #fff;
 }
</style>
