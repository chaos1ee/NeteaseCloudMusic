<template>
  <div class="home">
    <banner :banner="banner"></banner>
    <common-layout>
      <div slot="left">
        <hot-recommend :covers="hot"></hot-recommend>
        <new-album :albums="newAlbum"></new-album>
        <bill :bills="bills"></bill>
      </div>
      <div slot="right">
        <div class="login">
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a href="javscript:void(0)">用户登录</a>
        </div>
        <div class="singer">
        </div>
      </div>
    </common-layout>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    .login {
      height: 126px;
      background: url("../assets/image/index.png") no-repeat 0 0;
      p {
        width: 205px;
        margin: 0 auto;
        padding-top: 16px;
        padding-bottom: 16px;
        line-height: 22px;
        color: #666;
      }
      a {
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        background: url("../assets/image/index.png") no-repeat 0 -195px;
        &:hover {
          background-position: -110px -195px;
        }
      }
    }
  }
</style>

<script>
  import Banner from "../components/banner";
  import CommonLayout from "../components/common-layout";
  import HotRecommend from "../components/hot-recommend";
  import NewAlbum from "../components/new-album";
  import Bill from "../components/bill";

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
      CommonLayout,
      HotRecommend,
      NewAlbum,
      Bill
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
      // 访问对象API中的全部接口
      accessAll() {
        let temp = [];
        _.forEach(API, value => {
          temp.push(this.axios.get(value));
        });
        return temp;
      },
      // 异步并行获取数据并分别保存到各个对象中
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