import {RECEIVE_SHOPS,RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,RECEIVE_USER_INFO,
  RECEIVE_SHOP_GOODS,RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOP_INFO,
  DECREMENT_FOOD_COUNT,INCREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-type'
import {reqAddress,reqShopList,
  reqFoodList, reqShopGoods,
  reqShopInfo, reqShopRatings} from '../api'
import {reqUserInfo} from "../api/index";
export default{
  //异步获取地址
  async getAddress({commit,state}){
    //得到经纬度值
    const {latitude,longitude}=state
    //异步获取address
    const result= await reqAddress(latitude+','+longitude)
    if(result.code===0){
      const address=result.data
      //提交commutation
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品分类
  async getCategorys({commit}){

    //异步获取address
    const result= await reqFoodList()
    if(result.code===0){
      const categorys=result.data
      //提交commutation
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    //得到经纬度值
    const {latitude,longitude}=state
    //异步获取address
    const result= await reqShopList(latitude+','+longitude)
    if(result.code===0){
      const shops=result.data
      //提交commutation
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //存储指定的用户
  saveUserInfo({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //异步获取用户信息
  async getUserInfo({commit}){
    const result=await reqUserInfo()
    if(result.code===0){
      const userInfo=result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  //异步获取商家信息
  async getShopGoods({commit}, cb) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const shopGoods = result.data
      commit(RECEIVE_SHOP_GOODS, {shopGoods})
      // 通知组件更新了状态
      cb && cb()
    }
  },

  // 异步获取商家评价列表
  // 异步获取商家评论列表
  async getShopRatings({commit},cb) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const shopRatings = result.data
      commit(RECEIVE_SHOP_RATINGS, {shopRatings})
      // 通知组件更新了状态
      cb && cb()
    }
  },
  // 异步获取商家商品列表
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const shopInfo = result.data
      commit(RECEIVE_SHOP_INFO, {shopInfo})
    }
  },
  updateFoodCount ({commit}, {food, isAdd}) {
    if(isAdd) { // 增加
      commit(INCREMENT_FOOD_COUNT, {food})
    } else { // 减少
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  // 清空购物车
  clearCart ({commit}) {
    commit(CLEAR_CART)
  }



}
