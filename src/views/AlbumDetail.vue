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
        <div class="left-wrapper" slot="left">
          <album-info :album="album.album"></album-info>
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
    .left-wrapper {
      padding: 0 20px;
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
  import AlbumInfo from "../components/album-detail/album-info";
  import List from "../components/list";
  import Comment from "../components/comment";
  export default {
    name: "AlbumDetail",
    components: {
      CommonLayout,
      AlbumInfo,
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