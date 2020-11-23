<template>
  <div class="detail">
    <detail-nav-bar
      class="detail-nav"
      ref="nav"
      @titleClick="titleClick"
    />
    <scroll
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3">
      <detail-swiper :top-images="topImages" @swiperImageLoad="swiperImageLoad"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-goods-info :goods-info="detailInfo" @goodsInfoImgLoad="goodsInfoImgLoad"/>
      <detail-goods-param ref="params" :goods-params="goodsParams"/>
      <detail-comments-info ref="comments" :comment-info="commentInfo"/>
      <goods-list ref="recommends" :goods="recommends"/>
    </scroll>
    <DetailBottomBar @addToCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
  import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
  import DetailGoodsParam from "@/views/detail/childComps/DetailGoodsParam";
  import DetailCommentsInfo from "@/views/detail/childComps/DetailCommentsInfo";
  import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

  import Scroll from "@/components/common/scroll/Scroll";
  import GoodsList from "@/components/content/goods/GoodsList";

  import {getDetailMultidata, getRecommend, Goods, GoodsParam, Shop} from "@/network/detail";
  import {itemListenerMixin, backTopMixin} from "@/common/mixin";



  export default {
    name: "Detail",
    components: {
      DetailShopInfo,
      DetailBaseInfo,
      DetailNavBar,
      DetailSwiper,
      DetailCommentsInfo,
      DetailGoodsParam,
      DetailGoodsInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shopInfo: {},
        detailInfo: {},
        goodsParams: {},
        commentInfo: {},
        recommends: [],
        themeTopY: [],
        currentIndex: 0
      }
    },
    created() {
      this.iid = this.$route.query.iid

      // 请求详情页数据
      getDetailMultidata(this.iid).then(res => {
        const data = res.result
        // 获取轮播图
        this.topImages = data.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 获取商家信息
        this.shopInfo = new Shop(data.shopInfo)

        // 获取商品详细信息
        this.detailInfo = data.detailInfo

        // 获取商品参数信息
        this.goodsParams = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 获取商品评论信息
        this.commentInfo = data.rate

      })

      // 请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    mounted() {
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      swiperImageLoad() {
        this.$refs.scroll.refresh();
      },
      goodsInfoImgLoad() {
        this.$refs.scroll.refresh();

        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.comments.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
        this.themeTopY.push(Number.MAX_VALUE)
      },
      contentScroll(position) {
        // 判断是否显示backTop
        this.isShowBackTop = (-position.y) > 1000;

        const positionY = -position.y
        let length = this.themeTopY.length
        for (let i=0; i<length-1; i++) {
          if ((this.currentIndex !== i) && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

      },
      titleClick(index) {
        let target = this.themeTopY[index]
        this.$refs.scroll.scrollTo(0, -target)
      },
      addToCart() {
        const product = {}
        // 获取商品信息
        product.title = this.goods.title;
        product.image = this.topImages[0];
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        // 将商品添加进购物车
        // 提示信息
        this.$store.dispatch('addCart', product).then(res => {
          this.$toast.show(res)
        })
      }
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .wrapper {
    height: calc(100% - 44px - 49px);
    background-color: #fff;
    overflow: hidden;
  }
</style>
