<template>
  <div class="playlist-detail">
    <div class="loading" v-if="loading">
      加载中，请稍后...
    </div>
    <div class="error" v-if="error"> {{ error }}</div>
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
    .loading {
      color: red;
      font-size: 16px;
    }
    width: 100%;
    .pl-info {
      height: 300px;
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
    .pl-aside {
      float: right;
      width: 178px;
      border-right: 1px solid #ccc;
    }
  }
</style>

<script>
  import CommonLayout from "../components/common-layout";

  export default {
    name: "PlaylistDetail",
    components: {
      CommonLayout
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