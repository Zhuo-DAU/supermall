<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="category-content">
      <scroll id="list-scroll" ref="scroll1">
        <CategoryAside
          :category-list="categoryList" @itemClick="itemClick"
          />
      </scroll>
      <scroll id="info-scroll" ref="scroll2">
        <CategoryInfo
          :category-info="categoryInfo"
          @infoImageLoad="infoImageLoad"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import NavBar from "@/components/common/navbar/NavBar";
import GoodsList from "@/components/content/goods/GoodsList";

import CategoryAside from "@/views/category/childrenComps/categoryAside";
import CategoryInfo from "@/views/category/childrenComps/categoryInfo";

import {getCategoryList, getCategoryInfo} from "@/network/category";
import {debounce} from "@/common/utils";

export default {
  name: "Category",
  components: {
    CategoryInfo,
    GoodsList,
    CategoryAside,
    NavBar,
    Scroll
  },
  data(){
    return{
      categoryList: [],
      maitKey: 3627,
      categoryInfo: []
    }
  },
  created() {
    // 获取分类列表
    this.getCategoryList();
    this.getCategoryInfo();
  },
  methods: {
    getCategoryList() {
      getCategoryList().then(res => {
        this.categoryList = res.data.category.list
      });
    },
    getCategoryInfo() {
      getCategoryInfo(this.maitKey).then(res => {
        this.categoryInfo = res.data.list
      })
    },
    infoImageLoad() {
      let refresh1 = debounce(this.$refs.scroll1.refresh, 50)
      let refresh2 = debounce(this.$refs.scroll2.refresh, 50)
      refresh1();
      refresh2();
    },
    itemClick(maitKey) {
      this.maitKey = maitKey;
      this.getCategoryInfo();
    }
  }
}
</script>

<style scoped>
#category {
  height: 100vh;
}
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.category-content {
  display: flex;
  height: calc(100% - 49px - 44px);
  overflow: hidden;
}
#list-scroll {
  width: 25%;
}
#info-scroll {
  width: 75%;
}
</style>
