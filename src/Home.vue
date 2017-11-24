<template>
  <div class="home">
    <banner :banner="banner"></banner>
    <div class="discover-module clearfix">
      <div class="m-left">
        <div class="wr">
          <div class="wr2">
            <div class="hot">
              <title-bar>
                <a slot="title" class="bt">热门推荐</a>
                <div slot="subtitle" class="st">
                  <a class="bsl" href="javascript:void(0)">华语</a>
                  <a class="bsl" href="javascript:void(0)">流行</a>
                  <a class="bsl" href="javascript:void(0)">摇滚</a>
                  <a class="bsl" href="javascript:void(0)">民谣</a>
                  <a class="bsl" href="javascript:void(0)">电子</a>
                </div>
                <div slot="more" class="more">
                  <a href="javascript:void(0)">更多</a>
                  <i class="icon"></i>
                </div>
              </title-bar>
              <ul class="bc clearfix">
                <li v-for="(item,key) in hot" :key="key">
                  <cover :item="item"></cover>
                  <describe>
                    <a slot="desc" :href="'/playlist?'+item.id">{{item.name}}</a>
                  </describe>
                </li>
              </ul>
            </div>
            <div class="new">
              <title-bar class="t-bar">
                <a slot="title" class="bt">新碟上架</a>
                <div slot="more" class="more">
                  <a href="javascript:void(0)">更多</a>
                  <i class="icon"></i>
                </div>
              </title-bar>
              <div class="newAlbum">
                <div class="inner">
                  <el-carousel height="180px" trigger="click" :autoplay="false" indicator-position="none" arrow="always">
                    <el-carousel-item v-for="(item,index) in 2" :key="item">
                      <ul v-for="item in newAlbum" :key="item.id">
                        <li>
                          <img :src="item.picUrl">
                        </li>
                      </ul>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
            <div class="bill">
              <title-bar class="t-bar">
                <a slot="title" class="bt">榜单</a>
                <div slot="more" class="more">
                  <a href="javascript:void(0)">更多</a>
                  <i class="icon"></i>
                </div>
              </title-bar>
              <div class="b-list">
                <dl class="b-block" v-for="(item ,index) in bill" :key="item.id">
                  <dt class="top">
                    <div class="b-cover cover">
                      <img :src="item.coverImgUrl">
                      <a class="b-msk msk" href="javascript:void(0)"></a>
                    </div>
                    <div class="b-title">
                      <a href="javascript:void(0)">
                        <h3>{{ item.name }}</h3>
                      </a>
                      <div class="btn">
                        <a class="btn-play" href="javascript:void(0)"></a>
                        <a class="btn-add" href="javascript:void(0)"></a>
                      </div>
                    </div>
                  </dt>
                  <dd class="b-detail">
                    <ol class="detail-list">
                      <li class="list-item" v-for="(track,index) in item.tracks" :key="track.id">
                        <span class="item-num">{{ index + 1}}</span>
                        <a class="item-name" href="javascript:void(0)">{{ track.name }}</a>
                      </li>
                    </ol>
                  </dd>
                </dl>
              </div>
            </div>
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
    background: url("/static/image/wrap1.png") repeat-y 100% 100%;
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

  .hot {
    width: 100%;
    height: 523px;
  }

  .new {
    height: 243px;
  }

  .t-bar {
    .bt {
      float: left;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
    .st {
      float: left;
      margin: 7px 0 0 20px;
      a {
        color: #666;
      }
    }
    .more {
      float: right;
      margin-top: 9px;
      a {
        color: #666;
      }
      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        vertical-align: middle;
        background: url("/static/image/index.png") no-repeat 0 -240px;
      }
    }
  }

  .bc {
    margin: 20px 0 0 -42px;
    li {
      float: left;
      width: 140px;
      height: 204px;
      overflow: hidden;
      padding: 0 0 30px 42px;
      line-height: 1.4;
    }
  }

  .newAlbum {
    position: relative;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .inner {
      height: 184px;
      padding-left: 16px;
      background: #f5f5f5;
      border: 1px solid #fff;
      img {
        width: 100px;
        height: 100px;
      }
    }
    li {
      float: left;
      width: 140px;
      height: 204px;
      padding: 0 0 30px 42px;
      line-height: 1.4;
      list-style: none;
    }
  }

  .bill {
    .b-list {
      height: 472px;
      margin-top: 20px;
      padding-left: 1px;
      background: url("/static/image/index_bill.png") no-repeat;
    }
    .b-block {
      float: left;
      width: 230px;
    }
    .b-block:nth-child(3) {
      width: 228px;
    }
    .top {
      height: 100px;
      padding: 20px 0 0 19px;
    }
    .b-cover {
      float: left;
      width: 80px;
      height: 80px;
      position: relative;
      .b-msk {
        background-position: -145px -57px;
      }
    }
    .b-title {
      float: left;
      width: 116px;
      margin: 6px 0 0 10px;
      a {
        color: #333;
        h3 {
          width: 100%;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
    }
    .btn {
      margin-top: 10px;
      .btn-play,
      .btn-add {
        float: left;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        text-indent: -9999px;
        background-image: url("/static/image/index.png");
        background-repeat: no-repeat;
      }
      .btn-play {
        background-position: -267px -205px;
      }
      .btn-add {
        background-position: -300px -205px;
      }
    }
    .b-detail {
      .detail-list {
        height: 319px;
        margin-left: 50px;
        line-height: 32px;
      }
      .list-item {
        height: 32px;
        list-style: none;
      }
      .item-num {
        float: left;
        position: relative;
        width: 35px;
        height: 32px;
        margin-left: -35px;
        text-align: center;
        color: #666;
        font-size: 16px;
      }
      .item-name {
        float: left;
        width: 170px;
        height: 32px;
        vertical-align: middle;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
  }
</style>

<script>
  import Banner from "./components/banner";
  import TitleBar from "./components/titlebar";
  import Cover from "./components/cover";
  import Describe from "./components/desc";
  import Copywriter from "./components/copywriter";
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
      TitleBar,
      Cover,
      Describe,
      Copywriter
    },
    data() {
      return {
        banner: [],
        hot: [],
        personalized: [],
        newAlbum: [],
        bill: []
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
              // 个性化推荐
              //this.personalized = personalized.data.recommend;
              // 新碟上架
              this.newAlbum = newAlbum.data.newAlbums;
              // 榜单
              this.bill = _.concat(
                bill1.data.result,
                bill2.data.result,
                bill3.data.result
              );
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