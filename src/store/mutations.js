import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS, RECEIVE_USER_INFO,
  RECEIVE_SHOP_GOODS,RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from "./mutation-type";
export default{
  [RECEIVE_ADDRESS](state,{address}){
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo=userInfo
  },
  [RECEIVE_SHOP_GOODS](state,{shopGoods}){
    state.shopGoods=shopGoods
  },
  [RECEIVE_SHOP_RATINGS](state,{shopRatings}){
    state.shopRatings=shopRatings
  },
  [RECEIVE_SHOP_INFO](state,{shopInfo}){
    state.shopInfo=shopInfo
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
  if(food.count){
    food.count++
  }else{
    Vue.set(food,'count',1)
    //加入到shopCart数组
    state.shopCart.push(food)
  }
  },
    [DECREMENT_FOOD_COUNT] (state, {food}) {
      if(food.count) { // 加一个限制
        food.count--
        if(food.count===0){
          //将其从购物车数组中删除
          state.shopCart.splice(state.shopCart.indexOf(food),1)
        }
      }

    },
  [CLEAR_CART](state) {
    // 将所有food的count置为0
    state.shopCart.forEach(food => food.count = 0)
    // 将购物车重置为空数组
    state.shopCart = []
  }



}

