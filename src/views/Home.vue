<template>
  <div class="home">
    <banner :banner="banner"></banner>
    <div class="discover-module clearfix">
      <div class="m-left">
        <div class="wr">
          <div class="wr2">
            <hot-recommend :covers="hot"></hot-recommend>
            <new-album :albums="newAlbum"></new-album>
            <new-bill :bills="bills"></new-bill>
          </div>
        </div>
      </div>
      <div class="mr"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 100%;
    background: #f5f5f5;
  }

  .discover-module {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background: url("../assets/image/wrap1.png") repeat-y 100% 100%;
  }

  .m-left {
    float: left;
    width: 100%;
    margin-right: -250px;
  }

  .wr {
    margin-right: 251px;
  }

  .wr2 {
    padding: 20px 20px 40px;
  }
</style>

<script>
  import Banner from "../components/banner";
  import HotRecommend from "../components/hot-recommend";
  import NewAlbum from "../components/new-album";
  import NewBill from "../components/new-bill";

  import { mapState, mapMutations } from "vuex";

  const API = {
    banner: "/banner",
    music: "/personalized",
    radio: "/personalized/djprogram",
    newAlbum: "/top/album?limit=10",
    bill1: "/top/list?idx=3",
    bill2: "/top/list?idx=0",
    bill3: "/top/list?idx=2"
  };

  export default {
    components: {
      Banner,
      HotRecommend,
      NewAlbum,
      NewBill
    },
    data() {
      return {
        banner: [],
        hot: [],
        personalized: [],
        newAlbum: [],
        bills: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      /** 
                 * @description 访问对象API中的全部接口
                 */
      accessAll() {
        let temp = [];
        _.forEach(API, value => {
          temp.push(this.axios.get(value));
        });
        return temp;
      },
      /** 
                 * @description 异步并行获取数据并分别保存到各个对象中 
                 */
      fetchData() {
        this.axios.all(this.accessAll()).then(
          this.axios.spread(
            (banner, music, radio, newAlbum, bill1, bill2, bill3) => {
              // banner栏
              this.banner = banner.data.banners;
              // 热门推荐
              let data = _.concat(
                _.slice(music.data.result, 0, 5),
                _.slice(radio.data.result, 0, 3)
              );
              this.moveItem(data, 3, 5);
              this.moveItem(data, 5, 6);
              this.hot = data;
              // 个性化推荐（改版页面已经飞起该模块）
              //this.personalized = personalized.data.recommend;
              // 新碟上架
              this.newAlbum = newAlbum.data.albums;
              // 榜单
              this.bills = _.concat(
                bill1.data.result,
                bill2.data.result,
                bill3.data.result
              );
              //console.log(this.bills);
              _.forEach(this.bill, (value, index) => {
                value.tracks.splice(10);
              });
            }
          )
        );
      },
      /** @description 移动数组中的项 
                 * @param {array} arr - 给定数组 
                 * @param {number} to - 该项在数组中要移到的位置
                 * @param {number} from- 该项在数组中的起始位置
                 */
      moveItem(arr, to, from) {
        arr.splice(to, 0, ...arr.splice(from, 1));
      }
    }
  };
</script>