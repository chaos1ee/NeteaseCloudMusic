<template>
    <div class="cloud-comment">
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
                        <div class="footer clearfix">
                            <span class="ago">{{comment.time | formatTime }}</span>
                            <a class="rep" href="javascript:void(0)">回复</a>
                            <span class="likedCount" v-if="comment.likedCount > 0">({{comment.likedCount}})</span>
                            <a class="thumb-up" href="javascript:void(0)">赞</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="pagination">
            <el-pagination background small @current-change="handleCurrentChange" :page-size="20" layout="prev, pager,next" :total="comments.total" prev-text="上一页" next-text="下一页"></el-pagination>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cloud-comment {
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
      } // 热评（待开发）
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
        } // 评论列表
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
            .footer {
              margin-top: 15px;
              color: #888;
              .ago {
                float: left;
              }
              .thumb-up,
              .rep,
              .likedCount {
                float: right;
                color: #888;
              }
              .thumb-up {
                width: 15px;
                height: 14px;
                text-indent: -999px;
                margin-right: 10px;
                background: url("../assets/image/icon2.png") no-repeat -150px 0;
              }
              .likedCount {
                height: 20px;
                line-height: 15px;
                color: #000;
                margin-right: 10px;
              }
            }
          }
        }
      } // 分页
      .pagination {
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
      }
    }
</style>

<script>
    import {
      format,
      subDays,
      differenceInMinutes,
      differenceInHours,
      differenceInDays,
      differenceInMonths,
      differenceInYears
    } from "date-fns";

    export default {
      name: "Comment",
      props: ["id", "type"],
      data() {
        return {
          comments: {},
          offset: 0
        };
      },
      created() {
        this.fetchComment();
      },
      filters: {
        // 根据距离现在的时间返回不同的时间格式
        formatTime(time) {
          let now = new Date();
          let diffInMinutes = differenceInMinutes(now, time);
          let foo = subDays(now, 0);
          let diff = differenceInDays(now, foo);
          if (diffInMinutes < 1) {
            return "刚刚";
          } else {
            let diffInHours = differenceInHours(now, time);
            if (diffInHours < 1) {
              return diffInMinutes + "分钟前";
            } else {
              let diffInDays = differenceInDays(now, time);
              let formated = format(time, "H:mm");
              if (diffInDays == -0) {
                return formated;
              } else if (diffInDays == 1) {
                return "昨天" + formated;
              } else if (diffInDays == 2) {
                return "前天" + formated;
              } else {
                let diffInMonths = differenceInMonths(now, time);
                if (diffInMonths < 1) {
                  return diffInDays + "天前";
                } else {
                  let diffInYears = differenceInYears(now, time);
                  if (diffInYears < 1) {
                    return diffInMonths + "个月前";
                  } else {
                    return diffInYears + "年前";
                  }
                }
              }
            }
          }
        }
      },
      methods: {
        // 切换页面时更新偏移量，然后根据id与偏移量请求对应评论
        handleCurrentChange(val) {
          this.offset = val - 1;
          this.fetchComment();
        },

        // 通过歌单id获取歌单评论
        fetchComment() {
          let url = "";
          if (+this.type === 1) {
            url = "/comment/playlist";
          } else if (+this.type === 2) {
            url = "/comment/album";
          } else {
            return;
          }
          this.axios
            .get(url, {
              params: {
                id: this.id,
                offset: this.offset * 20
              }
            })
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