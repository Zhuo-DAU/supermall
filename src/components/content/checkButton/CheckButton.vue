<template>
  <div class="check-button">
    <img src="~assets/img/cart/tick.svg" alt=""
         :class="{select: isSelect}">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isSelect: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .check-button img{
    border: 1px solid #999;
    border-radius: 50%;
    padding: 2px;
  }
  .select {
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>
