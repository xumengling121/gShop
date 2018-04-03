import {RECEIVE_SHOPS,RECEIVE_CATEGORYS,RECEIVE_ADDRESS} from './mutation-type'
import {reqAddress,reqShopList,reqFoodList} from '../api'
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
}
