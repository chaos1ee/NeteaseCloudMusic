import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const IS_MUSIC = 0;
const IS_RADIO = 1;

import { formatMusicData, formatDjData } from './js/formatData.js';
import Storage from './js/storage.js';

export default new Vuex.Store({
  state: {
    // 播放列表
    playList: [],
    // 正在播放的歌曲在播放列表中的索引
    index: 0
  },
  mutations: {
    // 更新索引
    changeIndex(state, index) {
      state.index = index;
    },
    // 在播放列表中注入项
    getRadio(state, item) {
      state.playList.push(formatDjData(item));
      state.index = state.playList.length - 1;
    },
    // 更新播放列表
    updateList(state, list) {
      state.index = 0;
      state.playList = list;
    },
    // 清空播放列表
    clearList(state) {
      state.playList = [];
    }
  },
  actions: {
    getMusic({ commit, state }, item) {
      this._vm.axios
        .get("/playlist/detail?id=" + item.id)
        .then(res => {
          if (res.data.playlist.tracks != undefined) {
            let temp = [];
            _.forEach(res.data.playlist.tracks, track => {
              temp.push(formatMusicData(track));
            });
            commit('updateList', temp);
          }
        })
        .catch(err => {
          console.error(err.name + ":" + err.message);
        });
    }
  }
})