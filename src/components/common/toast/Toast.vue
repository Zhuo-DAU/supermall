<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return{
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration=2000) {
        this.message = message;
        this.isShow = true;

        setTimeout(() => {
          this.message = '';
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;

    z-index: 999;

    transform: translate(-50%, -50%);
    background-color: rgba(100, 100, 100, .75);
    color: #ffffff;
    padding: 10px;
  }
</style>
