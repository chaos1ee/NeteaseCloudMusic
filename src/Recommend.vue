<template>
  <div class="recommend">
    <div class="banner">
      <el-carousel trigger="click" height="336px">
        <el-carousel-item v-for="item in banners" :key="item.targetId">
          <img :src="item.pic">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="discover-module clearfix">
      <div class="left">
        <div class="left-wrapper">
          <div class="left-inner">
            <block :block="hot"></block>
            <block :block="personalized"></block>
            <block :block="album"></block>
            <block :block="bill"></block>
          </div>
        </div>
      </div>
      <div class="righ">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  background: #f5f5f5;

  .banner {
    width: 982px;
    margin: 0 auto;
    .el-carousel__item {
      text-align: center;
      img {
        height: 336px;
      }
    }
  }

  .discover-module {
    width: 982px;
    margin: 0 auto;
    .left {
      float: left;
      width: 980px;
      margin-right: -250px;

      .left-wrapper {
        margin-right: 250px;
        background-color: #fff;
        .left-inner {
          padding: 20px 20px 40px;
        }
      }
    }
  }
}
/** 自定义el-carousel **/

.el-carousel__arrow {
  width: 37px;
  height: 63px;
  border-radius: 0;
  i {
    margin-left: -5px;
    font-size: 50px;
  }
}

.el-carousel__indicator {
  &.is-active button {
    background-color: #c20c0c;
  }
  button {
    width: 6px;
    height: 6px;
    margin: 0 8px;
    border-radius: 3px;
  }
}
</style>

<script>
import Block from "./components/block/block";

const SUCCESS = 200;

const API = {
  banner: "/api/banner",
  music: "/api/personalized",
  radio: "/api/personalized/djprogram",
  personalized: "/api/recommend/resource",
  album: "/api/top/album?limit=10",
  bill1: "/api/top/list?idx=3",
  bill2: "/api/top/list?idx=0",
  bill3: "/api/top/list?idx=2"
};

export default {
  data() {
    return {
      banners: [],
      hot: {
        header: {
          title: "热门推荐",
          subTitle: ["华语", "流行", "摇滚", "民谣", "电子"],
          more: true
        },
        type: 0,
        data: []
      },
      personalized: {
        header: {
          title: "个性化推荐",
          more: false
        },
        type: 1,
        data: []
      },
      album: {
        header: {
          title: "新碟上架",
          more: true
        },
        type: 2,
        data: []
      },
      bill: {
        header: {
          title: "榜单",
          more: true
        },
        type: 3,
        data: []
      }
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
          (banner, music, radio, personalized, album, bill1, bill2, bill3) => {
            // banner栏
            this.banners = banner.data.banners;

            // 热门推荐
            let data = _.concat(
              _.slice(music.data.result, 0, 5),
              _.slice(radio.data.result, 0, 3)
            );
            this._moveItem(data, 3, 5);
            this._moveItem(data, 5, 6);
            this.hot.data = data;

            // 个性化推荐
            this.personalized.data = personalized.data.recommend;

            // 新碟上架
            this.album.data = album.data.albums;

            // 榜单

            this.bill.data = _.concat(
              bill1.data.result,
              bill2.data.result,
              bill3.data.result
            );
            _.forEach(this.bill.data, (value, index) => {
              value.tracks.splice(10);
            });
          }
        )
      );
    },

    /**
       * @description 移动数组中的项
       * @param {array} arr - 给定数组
       * @param {number} to - 该项在数组中要移到的位置
       * @param {number} from- 该项在数组中的起始位置
       */
    _moveItem(arr, to, from) {
      arr.splice(to, 0, ...arr.splice(from, 1));
    }
  },
  components: {
    Block
  }
};
</script>
