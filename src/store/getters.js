
export default {
//初始值为0
totalCount(state){
  return state.shopCart.reduce((preTotal,food)=>preTotal+food.count,0)
},
  //购物车总价格
  totalPrice(state){
  return state.shopCart.reduce((preTotal,food)=>preTotal+food.count*food.price,0)
  }



}
