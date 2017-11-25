// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueVirtualScroller from 'vue-virtual-scroller'
// 自定义element-ui样式表
import '../static/style/element-variables.scss'
// 按需引入element-ui组件
import { Menu, MenuItem, Dropdown, DropdownMenu, DropdownItem, Carousel, CarouselItem, Slider } from 'element-ui'

Vue.use(VueAxios, axios)
Vue.use(VueVirtualScroller)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Slider)

Vue.config.productionTip = false

const _ = require('lodash')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})