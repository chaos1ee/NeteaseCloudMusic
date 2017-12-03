<template>
  <div class="album-detail">
    <div class="loading" v-if="loading">
      加载中，请稍候...
    </div>
    <div class="error" v-if="error">
      加载出错，请返回...
    </div>
    <div class="content" v-if="album">
      <common-layout>
        <div class="wrapper" slot="left">
          <div class="info clearfix">
            <div class="top clearfix">
              <div class="avatar">
                <img :src="album.album.picUrl">
              </div>
              <div class="cnt">
                <my-title :name="album.album.name"></my-title>
                <div class="singer">
                  歌手：
                  <span>{{album.album.artist.name}}</span>
                </div>
                <div class="time">发行时间：{{ album.album.publishTime | timeFormat }}</div>
                <button-group>
                  <span slot="collect">{{ album.album.subscribedCount}}</span>
                  <span slot="share">{{ album.album.shareCount}}</span>
                  <span slot="comment">{{ album.album.commentCount }}</span>
                </button-group>
              </div>
            </div>
            <introduction :intro="album.album.description">
              <p class="intro-title" slot="title">专辑介绍：</p>
            </introduction>
          </div>
          <list :list="album.songs"></list>
          <comment :id="album.album.id" :type="2"></comment>
        </div>
        <div slot="right">
          <div class="pl-aside"></div>
        </div>
      </common-layout>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .album-detail {
    min-height: calc(100vh - 246px);
    width: 100%;
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
        float: left;
        width: 408px;
        margin-left: 20px;
      }
    }
    .intro {
      width: 100%;
      margin-top: 20px;
      .intro-title{
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 700;
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
  import CommonLayout from "../components/common-layout";
  import MyTitle from "../components/my-title";
  import ButtonGroup from "../components/button-group";
  import Introduction from "../components/introduction";
  import List from "../components/list";
  import Comment from "../components/comment";
  import { format } from "date-fns";

  export default {
    name: "AlbumDetail",
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
        album: null
      };
    },
    created() {
      this.fetchAlbum();
    },
    watch: {
      $route: "fetchAlbum"
    },
    filters: {
      timeFormat(time) {
        return format(time, "YYYY-MM-DD");
      }
    },
    methods: {
      fetchAlbum() {
        this.error = this.album = null;
        this.loading = true;
        this.axios
          .get("/album?id=" + this.$route.params.id)
          .then(res => {
            this.loading = false;
            this.album = res.data;
          })
          .catch(err => {
            console.error(err.message);
          });
      }
    }
  };
</script>