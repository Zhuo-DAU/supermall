<template>
 <div class="base-info" v-if="Object.keys(goods).length !== 0">
   <div class="info-title">{{goods.title}}</div>
   <div class="info-price">
     <span class="n-price">{{goods.newPrice}}</span>
     <span class="o-price">{{goods.oldPrice}}</span>
     <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
   </div>
   <div class="info-other">
     <span>{{goods.columns && goods.columns[0]}}</span>
     <span>{{goods.columns && goods.columns[1]}}</span>
     <span>{{goods.services && goods.services[goods.services.length-1].name}}</span>
   </div>
   <div class="info-service">
     <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
       <img :src="goods.services[index-1].icon" alt="">
       <span>{{goods.services[index-1].name}}</span>
     </span>
   </div>
 </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 10px 10px 20px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title{
    color: #222;
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .n-price{
    font-size: 24px;
    margin-right: 8px;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 13px;
    margin-right: 4px;
    text-decoration: line-through;
  }

  .info-price .discount{
    background: var(--color-tint);
    color: #fff;
    font-size: 12px;
    padding: 2px;
    font-weight: bold;
    border-radius: 8px;
    position: relative;
    top: -8px;
  }

  .info-other {
    margin-top: 14px;
    font-size: 15px;
    display: flex;
    color: #999;
    padding-bottom: 10px;
    justify-content: space-between;
    border-bottom: solid 2px rgba(100, 100, 100, .08);
  }

  .info-service {
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--color-text);
  }
  .info-service img {
    width: 12px;
    height: 12px;
    vertical-align: middle;
  }
</style>
