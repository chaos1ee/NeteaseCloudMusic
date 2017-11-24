import Vue from 'vue'
import Vuex from 'vuex'

import home from './api/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 播放列表
    playList: [],
    // 正在播放的歌曲在播放列表中的索引
    index: 0
  },
  mutations: {
    // 更新播放列表
    addToPlayList(state, list) {
      state.playList = list;
      state.index = 0;
    },
    // 更新索引
    changeIndex(state, index) {
      state.index = index;
    }
  }
})