<template>
  <div class="recommends">
    <div class="recommends-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommondView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommends {
    display: flex;
    text-align: center;
    padding: 10px 0 20px 0;
    border-bottom: 10px solid #eee;
  }
  .recommends-item img{
    width: 68px;
    height: 68px;
    margin-bottom: 10px;
  }
  .recommends .recommends-item {
    flex: 1;
  }
</style>
