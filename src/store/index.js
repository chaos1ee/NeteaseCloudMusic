import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const IS_MUSIC = 0;
const IS_RADIO = 1;

import { formatMusicData, formatDjData } from '../assets/js/formatData.js';
import Storage from '../assets/js/storage';

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
    // 更新播放列表
    updateList(state, list) {
      state.index = 0;
      state.playList = list;
    }
  },
  actions: {
    // 根据id检查localstorage中是否存在歌单，不存在的时候才向服务器请求
    getMusicList({ commit, state }, item) {
      if (Storage.get(item.id) !== null) {
        commit('updateList', JSON.parse(Storage.get(item.id)));
      } else {
        this._vm.axios
          .get("/playlist/detail?id=" + item.id)
          .then(res => {
            if (res.data.playlist.tracks != undefined) {
              let temp = [];
              _.forEach(res.data.playlist.tracks, track => {
                temp.push(formatMusicData(track));
              });
              commit('updateList', temp);
              Storage.save(item.id, JSON.stringify(temp));
            }
          })
          .catch(err => {
            console.error(err.name + ":" + err.message);
          });
      }

    }
  }
})