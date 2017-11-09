import home from '../api/home'

const state = {
  all: []
}

const getters = {
  allData: state => state.all
}

const mutations = {
  accessAll() {
    let temp = [];
    _.forEach(home, value => {
      temp.push(axios.get(value));
    });
    return temp;
  },
  save() {

  }
}

const actions = {
  getAllData({
    commit
  }) {
    axios.all(commit('accessAll')).then(
      axios.spread(
        (banner, music, radio, personalized, album, bill1, bill2, bill3) => {

          contex.state.banner = banner.data.banners;

          // 热门推荐
          let data = _.concat(
            _.slice(music.data.result, 0, 5),
            _.slice(radio.data.result, 0, 3)
          );
          //this._moveItem(data, 3, 5);
          //this._moveItem(data, 5, 6);

          contex.state.hot = data;

          // 个性化推荐
          contex.state.personalized = personalized.data.recommend;

          // 新碟上架
          context.state.album = album.data.albums;

          // 榜单
          context.state.bill = _.forEach(
            _.concat(
              bill1.data.result,
              bill2.data.result,
              bill3.data.result
            ), (value, index) => {
              value.tracks.splice(10);
            });
        }
      )
    )
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
