import Vue from 'vue'
import Vuex from 'vuex'

import home from './api/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 播放列表
    playList: []
  },
  mutations: {
    addToPlayList(state, list) {
      state.index = 0;
      state.playList = list;
    }
  }
})
