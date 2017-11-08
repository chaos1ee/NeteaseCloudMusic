import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: 0,
    count: 0
  },
  mutations: {
    display(state, index) {
      state.nav = index;
    }
  }
})
