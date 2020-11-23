<template>
  <div id="category-aside">
    <ul v-for="(item, index) in categoryList">
      <li
        class="aside-item"
        :key="index"
        :class="{selected: index === currentIndex}"
        @click="itemClick(index)">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "categoryAside",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      categoryList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('itemClick', this.categoryList[index].maitKey)
      }
    }
  }
</script>

<style scoped>
#category-aside {
  background: #eee;
}
.aside-item {
  text-align: center;
  font: 100%/3em sans-serif;
  box-sizing: border-box;
}
.selected {
  color: var(--color-tint);
  font-weight: bold;
  background: #fff;
  border-left: 2px solid var(--color-tint);
}
</style>
