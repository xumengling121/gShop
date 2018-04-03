import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 声明使用插件
Vue.use(Vuex)  // 所有组件对象都多了一个属性: $store


// 向外暴露store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
