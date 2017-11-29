<template>
  <div class="playlist-detail">
    <div class="loading" v-if="loading">
      加载中，请稍候...
    </div>
    <div class="error" v-if="error">
      加载出错，请返回
    </div>

    <div class="content" v-if="playlist">
      <common-layout>
        <div slot="left">
          <div class="pl-info">
            <div class="pl-avatar">
              <img :src="playlist.playlist.coverImgUrl">
            </div>
            <div class="pl-bl">
              <div class="pl-title">
                <div class="logo"></div>
                <span>{{ playlist.playlist.name }}</span>
              </div>
              <div class="pl-creator">
                <img class="creator-icon" :src="playlist.playlist.creator.avatarUrl" alt="">
                <span class="nickname ft-brk">{{playlist.playlist.creator.nickname}}</span>
                <span class="create-time">{{ playlist.playlist.createTime | timeFormat }}创建</span>
              </div>
              <div class="pl-btns">
                <a class="pl-btn-play">
                  <i>
                    <em>播放</em>
                  </i>
                </a>
                <a class="pl-btn-add_to_list" href="javascrpt:void(0)"></a>
                <a class="pl-btn-add_to_collection" href="javascrpt:void(0)">收藏数:{{playlist.playlist.subscribedCount}}</a>
                <a class="pl-btn-share" href="javascrpt:void(0)"> 分享数:{{ playlist.playlist.shareCount}}</a>
                <a class="pl-btn-comment" href="javascrpt:void(0)"> 评论数:{{ playlist.playlist.commentCount}}</a>
              </div>
              <div class="pl-tags">
                <span>标签：</span>
                <a class="pl-tag-name" href="javascript:void(0)" v-for="(tag,index) in playlist.playlist.tags" :key="index">{{ tag }}</a>
              </div>
              <pre class="pl-intro-dot" v-if="collapse">介绍：{{ playlist.playlist.description | textFormat }}</pre>
              <pre class="pl-intro-more" v-else>介绍：{{ playlist.playlist.description |textFormat }}</pre>
              <a class="pl-intro-switch" href="javascript:void(0)" @click="toggle">{{ collapse ? '展开 ↓' : '收起 ↑' }}</a>
            </div>
          </div>
          <div class="pl-list">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore veniam et vitae, quibusdam assumenda porro aut sunt cupiditate repellat debitis perspiciatis eligendi beatae aperiam quam obcaecati doloremque consequatur perferendis!
          </div>
          <div class="pl-comment">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore veniam et vitae, quibusdam assumenda porro aut sunt cupiditate repellat debitis perspiciatis eligendi beatae aperiam quam obcaecati doloremque consequatur perferendis!
          </div>
        </div>
        <div slot="right">
          <div class="pl-aside">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore veniam et vitae, quibusdam assumenda porro aut sunt cupiditate repellat debitis perspiciatis eligendi beatae aperiam quam obcaecati doloremque consequatur perferendis!
          </div>
        </div>
      </common-layout>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .playlist-detail {
    min-height: 700px;
    height: 100%;
    .loading,
    .error {
      min-height: 700px;
      line-height: 700px;
      color: red;
      font-size: 16px;
      text-align: center;
    }
    width: 100%;
    .pl-info {
      height: 280px;
      padding-top: 30px;
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
          padding-bottom: 10px;
          display: table;
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
            color: #999;
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
            padding: 5px 10px;
            margin-right: 10px;
            border-radius: 5px;
            border: 1px solid #000;
            background-color: red;
            &:hover {
              background-color: #fff;
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
    .pl-aside {
      float: right;
      width: 178px;
      border-right: 1px solid #ccc;
    }
  }
</style>

<script>
  import { format } from "date-fns";
  import CommonLayout from "../components/common-layout";

  export default {
    name: "PlaylistDetail",
    components: {
      CommonLayout
    },
    data() {
      return {
        loading: false,
        collapse: true,
        error: null,
        playlist: null
      };
    },
    created() {
      this.fetchList();
    },
    filters: {
      timeFormat(time) {
        return format(time, "YYYY-MM-DD ");
      },
      textFormat(text) {
        console.log(text);
        return text;
      }
    },
    watch: {
      $route: "fetchList"
    },
    methods: {
      toggle() {
        this.collapse = !this.collapse;
      },
      fetchList() {
        this.error = this.playlist = null;
        this.loading = true;
        this.axios
          .get("/playlist/detail?id=" + this.$route.params.id)
          .then(res => {
            this.loading = false;
            this.playlist = res.data;
          })
          .catch(err => {
            this.error = err.toString();
            console.error(err.message);
          });
      }
    }
  };
</script>