<template>
  <div class="playlist">
    <div class="loading" v-if="loading">
      加载中，请稍候...
    </div>
    <div class="error" v-if="error">
      加载出错，请返回...
    </div>
    <div class="a-bg" v-if="playlists">
      <div class="inner">
        <div class="header">
          <h1 class="title">全部新碟</h1>
        </div>
        <div class="content clearfix">
          <cover v-for="playlist in  playlists.playlists" :key="playlist.id" :id="playlist.id">
            <img slot="cover" :src="playlist.coverImgUrl">
            <span class="count" slot="count">{{ playlist.playCount}}</span>
            <div class="info" slot="desc">
              <p class="title">{{ playlist.name }}</p>
              <p class="by">by:<a class="creator" href="javascript:void(0)">{{playlist.creator.nickname }}</a></p>
            </div>
          </cover>
        </div>
        <div class="pagination">
          <el-pagination background @current-change="handleCurrentChange" :current-page="offset+1" :page-size="35" layout="prev, pager,next" :total="playlists.total" prev-text="上一页" next-text="下一页"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .playlist {
    min-height: calc(100vh - 246px);
    .loading,
    .error {
      min-height: 700px;
      line-height: 700px;
      color: red;
      font-size: 16px;
      text-align: center;
    }
    .a-bg {
      width: 980px;
      min-height: 700px;
      margin: 0 auto;
      background-color: #fff;
      border: 1px solid #d3d3d3;
      border-width: 0 1px;
      .inner {
        padding: 50px 50px;
        .header {
          height: 40px;
          border-bottom: 2px solid #c20c0c;
          margin-bottom: 40px;
          .title {
            font-size: 26px;
            font-weight: 500;
          }
        }
      }
      .content {
        margin-right: -45px;
      }
      .cover {
        float: left;
        margin-bottom: 20px;
        margin-right: 45px;
      }
      .info {
        width: 140px;
        height: 50px;
        .title {
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .by {
          color: #999;
          a{
            color: #333;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
      .pagination {
        text-align: center;
      }
    }
  }
</style>

<script>
  import Cover from "../components/cover.vue";

  export default {
    name: "Playlist",
    components: {
      Cover,
    },
    data() {
      return {
        playlists: null,
        loading: true,
        error: null,
        offset: 0
      };
    },
    created() {
      this.fetchPlaylists();
    },
    methods: {
      // 切换页面时更新偏移量，然后根据id与偏移量请求对应评论
      handleCurrentChange(val) {
        this.offset = val - 1;
        this.fetchPlaylists();
      },
      // 通过歌单id获取歌单评论
      fetchPlaylists() {
        this.error = this.playlists = null;
        this.axios
          .get("/top/playlist", {
            params: {
              limit: 35,
              order: 'new',
              offset: this.offset * 35
            }
          })
          .then(res => {
            this.loading = false;
            this.playlists = res.data;
          })
          .catch(err => {
            this.error = err.toString();
            console.error(err.message);
          });
      }
    }
  };
</script>