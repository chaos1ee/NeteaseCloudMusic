<template>
    <div class="new-bill">
        <title-bar class="t-bar">
            <a slot="title" class="bt">榜单</a>
            <div slot="more" class="more">
                <a href="javascript:void(0)">更多</a>
                <i class="icon"></i>
            </div>
        </title-bar>
        <div class="b-list">
            <dl class="b-block" v-for="(item ,index) in bills" :key="item.id">
                <dt class="top">
                    <div class="b-cover">
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
</template>

<style lang="scss" scoped>
    .new-bill {
      .b-list {
        height: 472px;
        margin-top: 20px;
        padding-left: 1px;
        background: url("../assets/image/index_bill.png") no-repeat;
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
        img {
          width: 100%;
          height: 100%;
        }
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
          background-image: url("../assets/image/index.png");
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
    import TitleBar from "./title-bar";
    export default {
      name: "NewBill",
      props: ["bills"],
      components: {
        TitleBar
      }
    };
</script>
