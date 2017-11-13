import Vue from 'vue'
import Vuex from 'vuex'

import home from './api/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playList: []
  },
  mutations: {
    addToPlayList(state, list) {
      state.playList = list;
    }
  }
})
