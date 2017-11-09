import Vue from 'vue'
import Vuex from 'vuex'

import home from './api/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // nav保存的是激活状态的上部导航的索引
    nav: 0,
    // subnav保存的是激活状态的下部导航的索引
    subnav: 0,

  },
  mutations: {
    // 改变处于激活状态的上部导航的索引
    toogle1(state, index) {
      state.nav = index;
      state.subnav = 0
    },
    // 改变处于激活状态的下部导航的索引
    toogle2(state, index) {
      state.subnav = index;
    },
    accessAll() {
      let temp = [];
      _.forEach(home, value => {
        temp.push(this.axios.get(value));
      });
      return temp;
    }
  }
})
