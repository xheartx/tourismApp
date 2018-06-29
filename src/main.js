// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' // 解决移动端点击300ms延迟
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图插件
import 'swiper/dist/css/swiper.css'

import 'styles/reset.css' // 样式初始化
import 'styles/border.css' // 解决1像素边框
import 'styles/iconfont.css' // 图标

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
