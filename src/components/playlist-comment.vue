<template>
    <div class="playlist-comment">
        <div class="header clearfix">
            <h3 class="title">评论</h3>
            <span class="total">共{{comments.total}}条评论</span>
        </div>
        <div class="top-comment">

        </div>
        <div class="new-comment">
            <h4 class="title">最新评论</h4>
            <span class="total">({{comments.total}})</span>
            <ul class="comment-list">
                <li v-for="comment in comments.comments" :key="comment.commentId">
                    <a class="avatar" href="javascript:void(0)">
                        <img :src="comment.user.avatarUrl">
                    </a>
                    <div class="main">
                        <a class="nickname" href="javascript:void(0)">{{comment.user.nickname}}</a>
                        <p class="content">：{{comment.content}}</p>
                        <div class="replay" v-if="comment.beReplied.length != 0">
                            <div class="nickname">
                                {{comment.beReplied[0].user.nickname}}
                            </div>
                            <p>：{{comment.beReplied[0].content}}</p>
                        </div>
                        <div class="footer">
                            <span class="ago">{{comment.time | formatTime }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .playlist-comment {
      padding-top: 50px;
      .header {
        height: 30px;
        line-height: 30px;
        border-bottom: 2px solid #c20c2c;
        .title {
          float: left;
          font-size: 20px;
          font-weight: 500;
        }
        .total {
          float: left;
          height: 28px;
          margin-top: 2px;
          margin-left: 20px;
          color: #333;
        }
      }
      // 热评（待开发）
      .hot-comment {
      }
      .new-comment {
        padding-top: 30px;

        .title {
          float: left;
          color: #333;
          font-size: 12px;
          font-weight: 700;
        }

        .total {
          font-weight: 700;
          color: #333;
        }
        // 评论列表
        .comment-list {
          li {
            padding: 15px 0;
            border-top: 1px dotted #ccc;
          }
          .avatar {
            float: left;
            width: 50px;
            height: 50px;
            margin-right: -100px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .main {
            overflow: hidden;
            line-height: 20px;
            margin-left: 60px;
            word-wrap: break-word;
            .nickname {
              float: left;
              color: #0c73c2;
            }
            .replay {
              padding: 8px 19px;
              margin-top: 10px;
              line-height: 20px;
              background: #f4f4f4;
              border: 1px solid #dedede;
              color: #888;
            }
          }
        }
      }
    }
</style>

<script>
    import { format, formatDistance, subDays } from "date-fns";

    export default {
      name: "PlaylistComment",
      props: ["playlist"],
      data() {
        return {
          comments: {}
        };
      },
      created() {
        this.fetchComment(this.playlist.playlist.id);
      },
      filters: {
        formatTime(time) {
          console.log(typeof formatDistance);
          return formatDistance(subDays(new Date(), 3), new Date());
        }
      },
      methods: {
        // 通过歌单id获取歌单评论
        fetchComment(id) {
          this.axios
            .get("/comment/playlist?id=" + id)
            .then(res => {
              this.comments = res.data;
            })
            .catch(err => {
              console.error(err.message);
            });
        }
      }
    };
</script>