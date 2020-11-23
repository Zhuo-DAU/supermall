import {ADD_COUNTER, ADD_TO_CART} from "@/store/mutation-types";

export default {
  addCart(context, payload) {
    // 判断购物车里是否有该商品
    return new Promise((resolve, reject) =>{
      let product = context.state.cartList.find(item => item.iid === payload.iid)
      if (product) {
        context.commit(ADD_COUNTER, product)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload)
        resolve('添加购物车成功')
      }
    })
  },
}
