/*
* 全局自定义过滤器*/
import Vue from 'vue'
import moment from 'moment'
Vue.filter('dateString',function(value,format='YYYY-MM-DD HH:mm:ss'){
  return moment(value).format(format)
})
