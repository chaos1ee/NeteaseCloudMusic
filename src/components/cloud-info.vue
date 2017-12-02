<template>
  <div class="cloud-info clearfix">
    <div class="pl-avatar">
      <img :src="info.coverImgUrl">
    </div>
    <div class="pl-bl">
      <div class="pl-title">
        <div class="logo"></div>
        <span>{{ info.name }}</span>
      </div>
      <div class="pl-creator">
        <img class="creator-icon" :src="info.creator.avatarUrl" alt="">
        <span class="nickname ft-brk">{{info.creator.nickname}}</span>
        <span class="create-time">{{ info.createTime | timeFormat }}创建</span>
      </div>
      <div class="pl-btns">
        <a class="pl-btn-play">
          <i>
            <em>播放</em>
          </i>
        </a>
        <a class="pl-btn-add_to_list" href="javascrpt:void(0)"></a>
        <a class="pl-btn-add_to_collection" href="javascrpt:void(0)">收藏数:{{info.subscribedCount}}</a>
        <a class="pl-btn-share" href="javascrpt:void(0)"> 分享数:{{ info.shareCount}}</a>
        <a class="pl-btn-comment" href="javascrpt:void(0)"> 评论数:{{ info.commentCount}}</a>
      </div>
      <div class="pl-tags">
        <span>标签：</span>
        <a class="pl-tag-name" href="javascript:void(0)" v-for="(tag,index) in info.tags" :key="index">
          <em>{{ tag }}</em>
        </a>
      </div>
      <pre class="pl-intro-dot" v-if="collapse">介绍：{{ info.description | textFormat }}</pre>
      <pre class="pl-intro-more" v-else>介绍：{{ info.description |textFormat }}</pre>
      <a class="pl-intro-switch" href="javascript:void(0)" @click="toggle">{{ collapse ? '展开 ↓' : '收起 ↑' }}</a>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .cloud-info {
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    color: #999;

    a {
      color: #999;
    }
    .pl-avatar {
      float: left;
      width: 194px;
      height: 194px;
      padding: 2px;
      border: 1px solid #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .pl-bl {
      float: left;
      width: 410px;
      margin-left: 30px;
      .pl-title {
        display: table;
        padding-bottom: 10px;
        .logo {
          display: inline-block;
          width: 64px;
          height: 24px;
          background: url("../assets/image/icon.png") no-repeat 0 -243px;
        }
        span {
          display: table-cell;
          font-size: 20px;
          font-weight: 500;
          vertical-align: middle;
          color: #000;
        }
      }
      .pl-creator {
        width: 400px;
        height: 35px;
        .creator-icon {
          float: left;
          width: 35px;
          height: 35px;
        }
        .nickname {
          float: left;
          max-width: 200px;
          height: 35px;
          line-height: 35px;
          margin-left: 20px;
          font-size: 12px;
          color: #0c73c2;
        }
        .create-time {
          float: left;
          height: 35px;
          line-height: 35px;
          margin-left: 20px;
          font-size: 10px;
        }
      }
      .pl-btns {
        width: 420px;
        height: 40px;
        margin-top: 20px;
        a {
          display: inline-block;
        }
        .pl-btns-play {
          float: left;
          height: 31px;
          overflow: hidden;
          text-align: center;
          cursor: pointer;
          background: url("../assets/image/button2.png") no-repeat right -428px;
          i {
            display: inline-block;
            height: 31px;
            line-height: 31px;
            padding: 0 7px 0 8px;
            vertical-align: top;
            text-align: center;
            cursor: pointer;
            background: url("../assets/image/button2.png") no-repeat 0 -387px;
          }
        }
      }
      .pl-tags {
        width: 400px;
        height: 40px;
        overflow: hidden;
        .pl-tag-name {
          display: inline-block;
          margin-right: 10px;
          padding-right: 10px;
          background: url("../assets/image/button2.png") no-repeat right -27px;
          &:hover {
            background-position: right -1430px;
            em {
              background-position: 0 -1400px;
            }
          }
          em {
            display: block;
            height: 22px;
            padding-left: 10px;
            line-height: 22px;
            background: url("../assets/image/button2.png") no-repeat 0 0;
          }
        }
      }
      pre {
        width: 410px;
        line-height: 15px;
        white-space: pre-wrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .pl-intro-dot {
        height: 45px;
      }
      .pl-intro-switch {
        float: right;
        margin-top: 10px;
        color: #0c73c2;
      }
    }
  }
</style>

<script>
  import { format } from "date-fns";
  export default {
    name: "CloudInfo",
    props: ["info"],
    data() {
      return {
        collapse: true
      };
    },
    filters: {
      timeFormat(time) {
        return format(time, "YYYY-MM-DD ");
      },
      textFormat(text) {
        return text;
      }
    },
    methods: {
      toggle() {
        this.collapse = !this.collapse;
      }
    }
  };
</script>
