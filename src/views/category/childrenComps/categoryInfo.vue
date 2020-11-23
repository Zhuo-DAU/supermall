<template>
  <div id="category-info">
    <ul>
      <li v-for="(item, index) in categoryInfo" :key="index" class="info-item">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="infoImageLoad">
          <span>{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "categoryInfo",
    props: {
      categoryInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      infoImageLoad() {
        this.$emit('infoImageLoad')
      }
    }
  }
</script>

<style scoped>
#category-info ul {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
}
.info-item {
  width: 30%;
  margin: 1em 0;
}
.info-item img{
  width: 100%;
}
</style>
