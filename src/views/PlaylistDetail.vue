<template>
  <div class="playlist-detail">
    <div class="loading" v-if="loading">
      加载中，请稍候...
    </div>
    <div class="error" v-if="error">
      加载出错，请返回...
    </div>
    <div class="content" v-if="playlist">
      <common-layout>
        <div class="wrapper" slot="left">
          <div class="info clearfix">
            <div class="avatar">
              <img :src="playlist.playlist.coverImgUrl">
            </div>
            <div class="cnt">
              <my-title :name="playlist.playlist.name"></my-title>
              <div class="creator">
                <img class="creator-icon" :src="playlist.playlist.creator.avatarUrl" alt="">
                <span class="nickname ft-brk">{{playlist.playlist.creator.nickname}}</span>
                <span class="create-time">{{ playlist.playlist.createTime | timeFormat }}创建</span>
              </div>
              <button-group>
                <span slot="collect">{{ playlist.playlist.subscribedCount}}</span>
                <span slot="share">{{ playlist.playlist.shareCount}}</span>
                <span slot="comment">{{ playlist.playlist.commentCount }}</span>
              </button-group>
              <div class="tags">
                <span>标签：</span>
                <a class="tag-name" href="javascript:void(0)" v-for="(tag,index) in playlist.playlist.tags" :key="index">
                  <em>{{ tag }}</em>
                </a>
              </div>
              <div class="intro-wr">
                <introduction :intro="playlist.playlist.description"></introduction>
              </div>
            </div>
          </div>
          <list :list="playlist.playlist.tracks" :count="playlist.playlist.playCount"></list>
          <comment :id="playlist.playlist.id" :type="1"></comment>
        </div>
        <div slot="right">
          <div class="pl-aside"></div>
        </div>
      </common-layout>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .playlist-detail {
    width: 100%;
    min-height: calc(100vh - 246px);
    .loading,
    .error {
      min-height: 700px;
      line-height: 700px;
      color: red;
      font-size: 16px;
      text-align: center;
    }
    .wrapper {
      padding: 40px 30px 0;
      .info {
        padding-bottom: 40px;
      }
      .avatar {
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
      .cnt {
        float: right;
        margin-left: 10px;
        .creator {
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
      }
    }
    .tags {
      width: 400px;
      height: 40px;
      margin-top: 20px;
      overflow: hidden;
      .tag-name {
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
  }
</style>

<script>
  import CommonLayout from "../components/common-layout";
  import MyTitle from "../components/my-title";
  import ButtonGroup from "../components/button-group";
  import Introduction from "../components/introduction";
  import List from "../components/list";
  import Comment from "../components/comment.vue";
  import { format } from "date-fns";

  export default {
    name: "PlaylistDetail",
    components: {
      CommonLayout,
      MyTitle,
      ButtonGroup,
      Introduction,
      List,
      Comment
    },
    data() {
      return {
        loading: false,
        error: null,
        playlist: null
      };
    },
    filters: {
      timeFormat(time) {
        return format(time, "YYYY-MM-DD");
      }
    },
    created() {
      this.fetchList();
    },
    watch: {
      $route: "fetchList"
    },
    methods: {
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