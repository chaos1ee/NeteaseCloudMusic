<template>
    <div class="album-info clearfix">
        <div class="clearfix">
            <div class="album-avatar">
                <img :src="album.picUrl">
            </div>
            <div class="bl">
                <div class="title">
                    <div class="logo"></div>
                    <span>{{ album.name }}</span>
                </div>
                <div class="singer">
                    歌手：
                    <span>{{album.artist.name}}</span>
                </div>
                <div class="time">发行时间：{{album.publishTime | timeFormat}}</div>
            </div>
        </div>

        <div class="intro">
            <pre class="pl-intro-dot" v-if="collapse">专辑介绍：{{ album.description | textFormat }}</pre>
            <pre class="pl-intro-more" v-else>专辑介绍：{{ album.description |textFormat }}</pre>
            <a class="pl-intro-switch" href="javascript:void(0)" @click="toggle">{{ collapse ? '展开 ↓' : '收起 ↑' }}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .album-info {
      height: 100%;
      padding-top: 30px;
      padding-bottom: 30px;
      color: #999;
      a {
        color: #999;
      }
      .album-avatar {
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
      .bl {
        float: left;
        min-height: 230px;
        margin-left: 30px;
        .title {
          display: table;
          padding-bottom: 10px;
          .logo {
            display: inline-block;
            width: 64px;
            height: 24px;
            background: url("../../assets/image/icon.png") no-repeat 0 -243px;
          }
          span {
            display: table-cell;
            font-size: 20px;
            font-weight: 500;
            vertical-align: middle;
            color: #000;
          }
        }
        .singer {
        }
      }

      pre {
        line-height: 15px;
        white-space: pre-wrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .pl-intro-dot {
        height: 100px;
      }
      .pl-intro-switch {
        margin-top: 10px;
        color: #0c73c2;
      }
    }
</style>

<script>
    import { format } from "date-fns";
    export default {
      name: "PlaylistInfo",
      props: ["album"],
      data() {
        return {
          collapse: true
        };
      },
      filters: {
        timeFormat(time) {
          return format(time, "YYYY-MM-DD ");
        },
        textFormat(text) {
          return text;
        }
      },
      methods: {
        toggle() {
          this.collapse = !this.collapse;
        }
      }
    };
</script>