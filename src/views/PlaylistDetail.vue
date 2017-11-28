<template>
  <div class="playlist-detail">
    <div class="pl-main clearfix">
      <div class="pl-content">
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
              <span class="create-time">{{playlist.playlist.createTime}}创建</span>
            </div>
            <div class="pl-btns">
              <div class="pl-btn-play"></div>
              <div class="pl-btn-add_to_list"></div>
              <div class="pl-btn-add_to_collection">{{playlist.playlist.subscribedCount}}</div>
              <div class="pl-btn-share">{{ playlist.playlist.shareCount}}
                <div class="pl-btn-comment">{{ playlist.playlist.commentCount}}</div>
              </div>
            </div>
            <div class="pl-tags">
              <span>标签：</span>
              <span class="pl-tag-name" v-for="(tag,index) in playlist.playlist.tags" :key="index">{{ tag }}</span>
            </div>
            <div class="pl-intro">
              <span>介绍：</span>
              <span>{{ playlist.playlist.description }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="pl-list">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore veniam et vitae, quibusdam assumenda porro aut sunt cupiditate repellat debitis perspiciatis eligendi beatae aperiam quam obcaecati doloremque consequatur perferendis!
    </div>
    <div class="pl-comment">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore veniam et vitae, quibusdam assumenda porro aut sunt cupiditate repellat debitis perspiciatis eligendi beatae aperiam quam obcaecati doloremque consequatur perferendis!
    </div>
    <div class="pl-aside">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore veniam et vitae, quibusdam assumenda porro aut sunt cupiditate repellat debitis perspiciatis eligendi beatae aperiam quam obcaecati doloremque consequatur perferendis!
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
  .playlist-detail {
    width: 100%;
    .pl-main {
      width: 980px;
      margin: 0 auto;
      .pl-content {
        float: left;
        width: 798px;
        border: 1px solid #ccc;
        border-top: none;
        border-bottom: none;
        .pl-info {
          height: 300px;
          padding: 50px 40px 0;
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
              height: 40px;
              .creator-icon {
                float: left;
                width: 40px;
                height: 40px;
              }
              .nickname {
                float: left;
                max-width: 200px;
                height: 40px;
                line-height: 40px;
                font-size: 12px;
                color: #0c73c2;
              }
              .create-time {
                display: table-cell;
                vertical-align: middle;
                font-size: 10px;
                color: #999;
              }
            }
          }
        }
      }
      .pl-aside {
        float: right;
        width: 399px;
        border-right: 1px solid #ccc;
      }
    }
  }
</style>

<script>
  export default {
    name: "PlaylistDetail",
    data() {
      return {
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
        this.axios
          .get("/playlist/detail?id=" + this.$route.params.id)
          .then(res => (this.playlist = res.data))
          .catch(err => {
            console.error(err.message);
          });
      }
    }
  };
</script>