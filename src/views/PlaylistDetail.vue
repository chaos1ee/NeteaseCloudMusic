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
        <div class="left-wrapper" slot="left">
          <playlist-top :playlist="playlist"></playlist-top>
          <playlist-content :playlist="playlist"></playlist-content>
          <playlist-comment :playlist="playlist"></playlist-comment>
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
  import PlaylistTop from "../components/playlist-top";
  import PlaylistContent from "../components/playlist-content";
  import PlaylistComment from "../components/playlist-comment";

  export default {
    name: "PlaylistDetail",
    components: {
      CommonLayout,
      PlaylistTop,
      PlaylistContent,
      PlaylistComment
    },
    data() {
      return {
        loading: false,
        error: null,
        playlist: null
      };
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