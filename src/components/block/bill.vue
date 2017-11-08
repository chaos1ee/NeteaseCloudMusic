<template>
  <div class="bill">
    <dl class="bill-list" v-for="(item ,index) in bill" :key="item.id">
      <dt class="bill-top">
        <div class="bill-cover">
          <img class="cover-img" :src="item.coverImgUrl">
          <a class="cover-musk" href="javascript:void(0)"></a>
        </div>
        <div class="bill-title">
          <a href="javascript:void(0)">
            <h3>{{ item.name }}</h3>
          </a>
          <div class="btn">
            <a class="btn-play" href="javascript:void(0)"></a>
            <a class="btn-add" href="javascript:void(0)"></a>
          </div>
        </div>
      </dt>
      <dd class="bill-detail">
        <ol class="detail-list">
          <li class="list-item" v-for="(track,index) in item.tracks" :key="track.id">
            <span class="item-num">{{ index + 1}}</span>
            <a class="item-name" href="javascript:void(0)">{{ track.name }}</a>
          </li>
        </ol>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
.bill {
  height: 472px;
  margin-top: 20px;
  background: url("/static/image/index_bill.png");

  .bill-list {
    float: left;
    width: 230px;
    padding: 0;
    margin: 0;

    .bill-top {
      height: 100px;
      padding: 20px 0 0 19px;

      .bill-cover {
        float: left;
        width: 80px;
        height: 80px;
        position: relative;

        .cover-img {
          display: block;
          width: 100%;
          height: 100%;
        }

        .cover-musk {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
          background-image: url("/static/image/coverall.png");
          background-position: -145px -57px;
          background-repeat: no-repeat;
        }
      }

      .bill-title {
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
      }
    }

    .bill-detail {
      .detail-list {
        height: 319px;
        margin-left: 50px;
        line-height: 32px;

        .list-item {
          height: 32px;
          list-style: none;

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
    }
  }
}
</style>

<script>
export default {
  props: ["bill"],
  data() {
    return {
      tracks: []
    };
  }
};
</script>
