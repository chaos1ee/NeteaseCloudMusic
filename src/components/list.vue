<template>
  <div class="list">
    <div class="title">
      <h2 v-if="count">歌曲列表</h2>
      <h2 v-else>包含歌曲列表</h2>
      <span class="trackcount">{{list.length}}首歌</span>
      <div class="playcount" v-if="count">播放:
        <span>{{ count }}</span>
        次
      </div>
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>歌曲标题</th>
            <th>时长</th>
            <th>歌手</th>
            <th v-if="count">专辑</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(track, index) in list" :key="track.id">
            <td>
              <span class="num">{{index+1}}</span>
              <i class="icon tab-icon-play"></i>
            </td>
            <td>
              <div>
                <a class="name" href="javascript:void(0)">{{track.name}}</a>
              </div>
            </td>
            <td @mouseover="showBtns(index)" @mouseout="hideBtns(index)">
              <a class="duration" href="javascript:void(0)" v-if="itemIndex !== index">{{track.dt | timeFormat}}</a>
              <div v-else>
                <a class="icon icon-add" href="javascript:void(0)">添加</a>
                <a class="icon icon-collect" href="javascript:void(0)">收藏</a>
                <a class="icon icon-share" href="javascript:void(0)">分享</a>
                <a class="icon icon-down" href="javascript:void(0)">下载</a>
              </div>
            </td>
            <td>
              <div>
                <a class="artist" href="javascrip:void(0)">{{track.ar[0].name}}</a>
              </div>
            </td>
            <td v-if="count">
              <div>
                <a class="album" href="javascrip:void(0)">{{track.al.name}}</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .list {
    width: 100%;
    .icon {
      float: left;
      width: 18px;
      height: 16px;
      margin: 10px 0 0 4px;
      text-indent: -999px;
      background-image: url("../assets/image/table.png");
      background-repeat: no-repeat;
      &.icon-collect {
        background-position: 0 -174px;
        &:hover {
          background-position: -20px -174px;
        }
      }
      &.icon-share {
        background-position: 0 -195px;
        &:hover {
          background-position: -20px -195px;
        }
      }
      &.icon-down {
        background-position: -81px -174px;
        &:hover {
          background-position: -104px -174px;
        }
      }
    }
    .icon-add {
      background: url("../assets/image/icon.png") no-repeat 0 -700px;
      &:hover {
        background-position: -22px -700px;
      }
    }
    .title {
      height: 30px;
      h2 {
        float: left;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        font-weight: 500;
      }
      .trackcount {
        float: left;
        margin-top: 12px;
        margin-left: 20px;
      }
      .playcount {
        float: right;
        height: 30px;
        line-height: 30px;
        span {
          color: #c20c0c;
          font-weight: bold;
        }
      }
    }
    .table {
      border-top: 2px solid #c20c0c;
      table {
        width: 100%;
        border: 1px solid #d3d3d3;
        border-top: 0;
        th,
        td {
          vertical-align: middle;
          text-align: left;
          text-indent: 6px;
        }
        th {
          height: 34px;
          color: #666;
          font-weight: normal;
          background: url("../assets/image/table.png") repeat-x 0 0;
          border-right: 1px solid #d3d3d3;
          border-bottom: 1px solid #d3d3d3;
          &:last-child {
            border-right: 0;
          }
        }
        // 表格条纹
        tbody tr:nth-child(odd) td {
          background-color: #f7f7f7;
        }
        a {
          color: #666;
        }
        td {
          height: 30px;
          div {
            width: 100%;
            height: 30px;
            overflow: hidden;
            line-height: 30px;
            .name,
            .artist,
            .album {
              width: 130px;
              height: 30px;
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
        th:nth-child(1),
        td:nth-child(1) {
          width: 74px;
          color: #999;
          text-indent: 15px;
          .num {
            float: left;
            width: 10px;
            height: 30px;
            line-height: 30px;
          }
          .tab-icon-play {
            float: right;
            width: 17px;
            height: 17px;
            margin-top: 7px;
            margin-right: 10px;
            background-position: 0 -103px;
            &:hover {
              cursor: pointer;
              background-position: 0 -128px;
            }
          }
        }
        th:nth-child(3),
        td:nth-child(3) {
          width: 110px;
        }
        th:nth-child(4),
        td:nth-child(4) {
          width: 100px;
        }
        th:nth-child(5),
        td:nth-child(5) {
          width: 150px;
        }
      }
    }
  }
</style>

<script>
  import formatTime from "../assets/js/formatTime";

  export default {
    name: "List",
    props: ["list", "count"],
    data() {
      return {
        itemIndex: -1
      };
    },
    filters: {
      timeFormat(time) {
        return formatTime(time / 1000);
      }
    },
    methods: {
      showBtns(index) {
        this.itemIndex = index;
      },
      hideBtns(index) {
        this.itemIndex = -1;
      }
    }
  };
</script>