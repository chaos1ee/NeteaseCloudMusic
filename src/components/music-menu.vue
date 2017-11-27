<template>
  <div class="music-menu">
    <div class="listhd">
      <div class="listhdc">
        <h4>播放列表
          <span>{{ '('+ playList.length +')'}}</span>
        </h4>
        <a href="javascript:void(0)" class="clear">
          <span class="icon-del"></span>清除
        </a>
        <p class="title">{{title}}</p>
        <span class="close">关闭</span>
      </div>
    </div>
    <div class="listbd">
      <v-bar wrapper="listbdc" vBar="bline" vBarInternal="scrol">
        <ul ref="musicList">
          <li v-for="(track, idx) in playList" :key="track.id" :class="{playing: idx == index}" @click="changeIndex(idx)">
            <div class="col col-1">
              <div :class="{'ico-play': idx == index}"></div>
            </div>
            <div class="col col-2">{{ track.name }}</div>
            <div class="col col-3"></div>
            <div class="col col-4">
              <span title="artist">{{ track.artist }}</span>
            </div>
            <div class="col col-5">{{ track.duration | timeFormat}}</div>
            <div class="col col-6"></div>
          </li>
        </ul>
      </v-bar>
      <div class="msk2"></div>
      <v-bar wrapper="lyric" vBar="bline" vBarInternal="scrol">
        <div v-if="lyric">
          <p v-for="(line, index) in lyric" ref="lines" :key="index">
            {{ line[1] }}
          </p>
        </div>
        <div v-else>
          <p style="lineHeight:270px;">纯音乐，请欣赏</p>
        </div>
      </v-bar>
    </div>
  </div>
</template>

<style lang="scss">
  .music-menu {
    position: absolute;
    left: 50%;
    bottom: 47px;
    width: 986px;
    height: 301px;
    margin-left: -493px;
    .listhd {
      height: 41px;
      padding: 0 5px;
      background: url("../assets/image/playlist_bg.png") 0 0 no-repeat;
    }
  }

  .listhdc {
    position: relative;
    height: 40px;
    h4 {
      position: absolute;
      left: 25px;
      top: 0;
      height: 39px;
      line-height: 39px;
      font-size: 14px;
      color: #e2e2e2;
    }
    .clear {
      position: absolute;
      left: 490px;
      top: 12px;
      height: 15px;
      line-height: 15px;
      cursor: pointer;
      color: #ccc;
      .icon-del {
        float: left;
        width: 13px;
        height: 16px;
        background-position: -51px 0;
        background-image: url("../assets/image/playlist.png");
        background-repeat: no-repeat;
        margin: 1px 6px 0 0;
      }
    }
    .title {
      position: absolute;
      top: 0;
      left: 595px;
      width: 346px;
      height: 39px;
      line-height: 39px;
      color: #fff;
      font-size: 14px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
    .close {
      position: absolute;
      top: 6px;
      right: 8px;
      width: 30px;
      height: 30px;
      overflow: hidden;
      text-indent: -999px;
      cursor: pointer;
      background-position: -195px 9px;
      background-image: url("../assets/image/playlist.png");
      background-repeat: no-repeat;
    }
  }

  .col {
    float: left;
    padding-left: 10px;
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    cursor: pointer;
  }

  .listbd {
    position: absolute;
    left: 0;
    top: 41px;
    width: 976px;
    height: 260px;
    padding: 0 5px;
    overflow: hidden;
    background-position: -1014px 0;
    background-repeat: repeat-y;
    background-image: url("../assets/image/playlist_bg.png");
    .listbdc {
      position: absolute;
      left: 2px;
      top: 0;
      z-index: 4;
      height: 260px;
      width: 564px;
      color: #ccc;
      overflow: hidden;
      ul {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        li {
          float: left;
          width: 100%;
          height: 28px;
          &.playing {
            background-color: rgba(0, 0, 0, 0.3);
            color: #fff;
          }
          .col-1 {
            width: 10px;
            .ico-play {
              width: 10px;
              height: 13px;
              margin-top: 8px;
              background-position: -182px 0;
              background-image: url("../assets/image/playlist.png");
              background-repeat: no-repeat;
            }
          }
          .col-2 {
            width: 256px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .col-3 {
            position: relative;
            width: 78px;
          }
          .col-4 {
            width: 70px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .col-5 {
            width: 35px;
          }
          .col-6 {
            width: 37px;
            padding-left: 6px;
          }
        }
      }
    }
    .lyric {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 4;
      width: 422px;
      height: 260px;
      overflow: hidden;
      p {
        color: #989898;
        word-wrap: break-word;
        text-align: center;
        line-height: 32px;
        height: auto !important;
        transition: color 0.7s linear;
      }
    }
    .msk2 {
      position: absolute;
      top: 2;
      z-index: 3;
      width: 420px;
      height: 250px;
      background: #121212;
      opacity: 0.01;
    }
    .bline {
      width: 6px;
      background-color: #000;
      opacity: 0.5;
      .scrol {
        width: 4px;
        border-radius: 5px;
        cursor: pointer;
        background-color: #a6a6a6;
        border: 1px solid #a6a6a6;
        opacity: 0.8;
      }
    }
  }
</style>

<script>
  import { mapState, mapMutations } from "vuex";
  import VBar from "v-bar";

  const REGULAR_COLOR = "#989898";
  const ACTIVE_COLOR = "#fff";

  const WH = 260;
  const BH = 40;

  export default {
    name: "MusicMenu",
    props: ["currentTime"],
    components: {
      VBar
    },
    data() {
      return {
        lyric: null,
        top1: 0
      };
    },
    watch: {
      playList() {
        this.lyricRoll();
      },
      index(newIndex) {
        this.lyricRoll();
      },
      // 根据时间线标记正在播放的歌词
      currentTime() {
        let i = 0;
        if (this.lyric) {
          let len = this.lyric.length;
          while (this.currentTime > this.lyric[i][0] && i < len - 1) {
            if (i > 0) this.$refs.lines[i - 1].style.color = REGULAR_COLOR;
            this.$refs.lines[i].style.color = ACTIVE_COLOR;
            i++;
          }
        }
      }
    },
    computed: {
      ...mapState(["playList", "index"]),
      title() {
        if (this.playList.length > 0) {
          return this.playList[this.index].name;
        }
      }
    },
    filters: {
      timeFormat(time) {
        let m = _.floor(_.floor(time) / 60);
        let s = _.floor(_.floor(time) % 60);
        if (m < 10) {
          m = "0" + m;
        }
        if (s < 10) {
          s = "0" + s;
        }
        return m + ":" + s;
      }
    },
    methods: {
      ...mapMutations(["changeIndex"]),
      getLyric(id) {
        this.axios
          .get("/lyric?id=" + id)
          .then(res => {
            this.lyric = this.tLyric = null;
            if (res.data.lrc.lyric != undefined) {
              this.lyric = this.processLyric(res.data.lrc.lyric);
            }
          })
          .catch(err => {
            console.error(err.message);
          });
      },
      // 处理歌词
      // 处理过后的歌词格式
      // [[秒数, 歌词], [秒数, 歌词], ...]
      processLyric(lyric) {
        let pattern = /\[\d{2}:\d{2}\.\d{2,3}\]/g;
        let words = _.slice(_.split(lyric, pattern), 1);
        let result = [];
        let timeStamp = [];
        let time;
        while ((time = pattern.exec(lyric)) !== null) {
          time = time[0].slice(1, -1);
          let temp = time.split(":");
          let m = temp[0];
          let s = temp[1];
          timeStamp.push(Number(m * 60) + Number(s));
        }
        _.forEach(words, (word, index) => {
          let temp = [];
          temp[0] = timeStamp[index];
          temp[1] = word;
          result.push(temp);
        });
        return result;
      },
      // 歌词滚动
      lyricRoll(index) {
        if (this.playList[this.index].type == 0) {
          _.forEach(this.$refs.lines, line => {
            line.style.color = REGULAR_COLOR;
          });
          this.getLyric(this.playList[this.index].id);
        }
      }
    }
  };
</script>