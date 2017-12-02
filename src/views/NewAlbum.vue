<template>
  <div class="new-albums">
    <div class="a-bg">
      <div class="inner">
        <div class="header">
          <h1 class="title">全部新碟</h1>
        </div>
        <album v-for="album in albums.albums" :key="album.id" :album="album"></album>
        <div class="pagination">
          <el-pagination background @current-change="handleCurrentChange" :page-size="35" layout="prev, pager,next" :total="albums.total" prev-text="上一页" next-text="下一页"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .new-albums {
    min-height: calc(100vh - 246px);
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
        .album {
          width: 153px;
          height: 178px;
          margin-left: 28px;
          margin-bottom: 20px;
          .album-cover {
            width: 130px;
            height: 130px;
            .album-msk {
              width: 153px;
              height: 130px;
              background-position: 0 -845px;
            }
            .play-btn {
              left: 100px;
              bottom: -2px;
              width: 28px;
              height: 28px;
              background-position: 0 -140;
            }
          }
        }

        .album:nth-child(5n + 2) {
          margin-left: 0;
        }
      }
      .pagination {
        text-align: center;
      }
    }
  }
</style>

<script>
  import Album from "../components/album.vue";

  export default {
    name: "NewAlbum",
    components: {
      Album
    },
    data() {
      return {
        albums: {},
        offset: 0
      };
    },
    created() {
      this.fetchAlbums();
    },
    methods: {
      // 切换页面时更新偏移量，然后根据id与偏移量请求对应评论
      handleCurrentChange(val) {
        this.offset = val - 1;
        this.fetchAlbums();
      },
      // 通过歌单id获取歌单评论
      fetchAlbums() {
        this.offset;
        this.axios
          .get("/top/album", {
            params: {
              limit: 35,
              offset: this.offset * 35
            }
          })
          .then(res => {
            this.albums = res.data;
          })
          .catch(err => {
            console.error(err.message);
          });
      }
    }
  };
</script>