import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import  './filter'
import Split from './components/Split/Split.vue'
//注册全局组件标签
Vue.component('Split',Split)
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
