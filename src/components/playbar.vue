<template>
  <div class="m-bar">
    <div class="playbar" ref="player" @mouseenter="playerShow" @mouseleave="playerHide" :class="{active: isActive, locked: isLocked}">
      <div class="p-wr">
        <div class="bg"></div>
        <div class="p-right">
          <a class="locker" href="javascript:void(0)" @click.self="lock"></a>
        </div>
        <div class="blank"></div>
        <div class="player">
          <div class="btns">
            <a class="prev" @click="playPrev" href="javascript:void(0)">上一曲</a>
            <a class="ply" :class="{paused: isPaused}" @click="playPause" href="javascript:void(0)">播放</a>
            <a class="next" @click="playNext" href="javascript:void(0)">下一曲</a>
          </div>
          <div class="m-cover">
            <img :src="cover">
            <a class="msk" href="javascript:void(0)"></a>
          </div>
          <div class="play">
            <div class="words">
              <span class="title ft-brk">{{ name}}</span>
              <span class="artist ft-brk">{{artist}}</span>
            </div>
            <div class="progress">
              <el-slider class="progress-bar" v-model="disX" :show-tooltip="false" height="9px"></el-slider>
              <span class="time">
                <em>{{ currentTime | timeFormat}}</em>
                / {{ duration | timeFormat}}
              </span>
            </div>
          </div>
          <div class="ctrl">
            <el-slider v-show="volumeBarShow" class="volume-bar" height="93px" vertical v-model="volume" :show-tooltip="false"></el-slider>
            <a @click="volumeBarToggle" class="icon-vol" href="javascript:void(0)"></a>
            <a class="icon-loop" href="javascript:void(0)"></a>
            <span class="add">
              <a @click="showList" class="icon-list" href="javascript:void(0)">{{playList.length}}</a>
            </span>
          </div>
        </div>
      </div>
      <div class="hand">展开播放条</div>

      <play-list v-show="listShow" :currentTime="currentTime"></play-list>
    </div>
  </div>
</template>

<style lang="scss">
  .m-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0;
    z-index: 9999;
  }

  .playbar {
    position: absolute;
    top: -7px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    transition: all 0.2s ease-out;
    &.active {
      top: -53px;
    }
  }

  .bg,
  .p-right,
  .blank,
  .locker,
  .msk {
    background: url("../assets/image/playbar.png") no-repeat 9999px 9999px;
  }

  .p-wr {
    width: 100%;
    height: 53px;
    position: relative;
  }

  .bg {
    //position: absolute;
    top: 0;
    left: 0; //width: calc(100vw - 83px);
    height: 47px;
    margin-right: 68px;
    padding-top: 6px;
    background-position: 0 0;
    background-repeat: repeat-x;
  }

  .p-right {
    position: absolute;
    top: -14px;
    right: 15px;
    width: 53px;
    height: 67px;
    z-index: 1000;
    background-position: 0 -380px;
  } // 未上锁状态
  .locker {
    display: block;
    width: 18px;
    height: 18px;
    margin: 6px 0 0 17px;
    background-position: -80px -380px;
    &:hover {
      background-position: -80px -400px;
    }
  } // 上锁状态
  .playbar.locked .locker {
    background-position: -100px -380px;
    &:hover {
      background-position: -100px -400px;
    }
  }

  .blank {
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    height: 53px;
    background-position: 0 0;
    background-repeat: repeat-x;
  }

  .hand {
    position: absolute;
    top: -10px;
    width: 100%;
    height: 20px;
    cursor: pointer;
    font-size: 0;
  }

  .player {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 980px;
    height: 47px;
    margin-left: -497.5px;
  }

  .btns {
    float: left;
    width: 137px;
    padding-top: 6px;
    a {
      display: block;
      float: left;
      width: 28px;
      height: 28px;
      margin-right: 8px;
      margin-top: 5px;
      text-indent: -9999px;
      background-image: url("../assets/image/playbar.png");
      background-repeat: no-repeat;
      cursor: pointer;
      z-index: 10000;
    }
    .prev {
      background-position: 0 -130px;
      &:hover {
        background-position: -30px -130px;
      }
    }
    .ply {
      width: 36px;
      height: 36px;
      margin-top: 0;
      background-position: 0 -204px;
      &:hover {
        background-position: -40px -204px;
      }
    }
    .ply.paused {
      background-position: 0 -165px;
      &:hover {
        background-position: -40px -165px;
      }
    }
    .next {
      background-position: -80px -130px;
      &:hover {
        background-position: -110px -130px;
      }
    }
  }

  .m-cover {
    float: left;
    position: relative;
    width: 34px;
    height: 34px;
    margin: 6px 15px 0 0;
    img {
      width: 34px;
      height: 34px;
    }
    .msk {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
  }

  .play {
    float: left;
    position: relative;
    width: 608px;
    .words {
      height: 28px;
      overflow: hidden;
      color: #e8e8e8;
      text-shadow: 0 1px 0 #171717;
      line-height: 28px;
    }
    .title {
      float: left;
      max-width: 300px;
    }
    .artist {
      float: left;
      max-width: 220px;
      margin-left: 15px;
      color: #9b9b9b;
    }
    .progress {
      width: 493px;
      position: relative;
      .time {
        position: absolute;
        top: -3px;
        right: -95px;
        color: #797979;
        text-shadow: 0 1px 0 #121212;
      }
      em {
        text-align: left;
        color: #a1a1a1;
      }
    }
  }

  .progress-bar {
    width: 493px;
    height: 9px;
    background-position: right 0;
    &,
    .el-slider__runway .el-slider__bar {
      background-image: url("../assets/image/statbar.png");
      background-repeat: no-repeat;
    }
    .el-slider__runway {
      margin: 0;
      height: 9px;
      background: transparent;
    }
    .el-slider__bar {
      height: 9px;
      background-color: inherit;
      background-position: left -66px;
    }
    .el-slider__button-wrapper {
      top: -7px;
      width: 22px;
      height: 24px;
      background: url("../assets/image/iconall.png") 0 -250px;
      .el-slider__button {
        background-color: transparent;
        border: 0;
        width: 22px;
        height: 24px;
        border-radius: 0;
      }
    }
  }

  .ctrl,
  .icon-vol,
  .icon-loop,
  .icon-list,
  .volume-bar {
    background-image: url("../assets/image/playbar.png");
    background-repeat: no-repeat;
  }

  .ctrl {
    float: left;
    position: relative;
    width: 113px;
    padding-left: 13px;
    background-position: -147px -238px;
    .volume-bar.el-slider {
      position: absolute;
      top: -113px;
      left: 9px;
      clear: both;
      width: 32px;
      height: 113px;
      background-position: 0 -503px;
      .el-slider__runway {
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 101px;
        margin: 10px 0;
        background-color: transparent;
      }
      .el-slider__bar {
        height: 93px;
        margin: 0 14px 0;
        background-color: #c20c0c;
      }
      .el-slider__button-wrapper {
        left: 7px;
        width: 18px;
        height: 20px;
        background-image: url("../assets/image/iconall.png");
        background-position: -40px -250px;
        background-repeat: no-repeat;
      }
      .el-slider__button {
        width: 18px;
        height: 20px;
        border: 0;
        background-image: url("../assets/image/iconall.png");
        background-position: -40px -250px;
        background-repeat: no-repeat;
        background-color: transparent;
        &:hover,
        &.dragging {
          transform: scale(1) !important;
        }
      }
    }
    .icon-vol {
      float: left;
      width: 25px;
      height: 25px;
      margin: 11px 2px 0 0;
      text-indent: -999px;
      background-position: -2px -248px;
    }
    .icon-loop {
      float: left;
      width: 25px;
      height: 25px;
      margin: 11px 2px 0 0;
      text-indent: -999px;
      background-position: -66px -344px;
    }
    .add {
      float: left;
      width: 59px;
      height: 36px;
      position: relative;
    }
    .icon-list {
      display: block;
      width: 38px;
      height: 25px;
      margin: 11px 2px 0 0;
      padding-left: 21px;
      background-position: -42px -68px;
      line-height: 27px;
      text-align: center;
      color: #666;
      text-shadow: 0 1px 0 #080707;
      text-indent: 0;
    }
  }
</style>

<script>
  import { mapState, mapMutations } from "vuex";
  import PlayList from "./playlist";

  const PROGRESS_LENGTH = 493;

  export default {
    name: "playBar",
    components: {
      PlayList
    },
    data() {
      return {
        isActive: false,
        isLocked: false,
        isPaused: true,
        disX: 0,
        time: 0,
        volume: 50,
        currentTime: 0,
        volumeBarShow: false,
        listShow: false
      };
    },
    created() {
      this.initAudio();
    },
    updated() {},
    computed: {
      ...mapState(["playList", "index"]),
      cover() {
        return this.playList.length > 0 ? this.playList[this.index].cover : null;
      },
      artist() {
        return this.playList.length > 0 ? this.playList[this.index].artist : null;
      },
      name() {
        return this.playList.length > 0 ? this.playList[this.index].name : null;
      },
      duration() {
        return this.playList.length > 0
          ? this.playList[this.index].duration
          : null;
      }
    },
    watch: {
      // 监听歌单是否有变化
      playList() {
        this.fetchAudioAndPlay(this.playList[this.index].id);
      },
      // 监听index，每当变化时切换歌曲
      index(newIndex) {
        this.fetchAudioAndPlay(this.playList[this.index].id);
      }
    },
    filters: {
      timeFormat(time) {
        let m = _.floor(_.floor(time) / 60);
        let s = _.floor(_.floor(time) % 60);
        if (m < 10) m = "0" + m;
        if (s < 10) s = "0" + s;
        return m + ":" + s;
      }
    },
    methods: {
      ...mapMutations(["changeIndex"]),
      playerShow() {
        if (!this.isLocked) {
          this.isActive = true;
        }
      },
      playerHide() {
        if (!this.isLocked) {
          this.isActive = false;
        }
      },
      lock() {
        if (!this.isLocked) {
          this.isActive = true;
          this.isLocked = true;
        } else {
          this.isActive = false;
          this.isLocked = false;
        }
      },
      showList() {
        this.listShow = !this.listShow;
      },
      volumeBarToggle() {
        this.volumeBarShow = !this.volumeBarShow;
      },
      initAudio() {
        this.audio = new Audio();
        //this.audio.autoplay = true;
        this.audio.preload = "auto";
        //this.audio.addEventListener("canplay", () => {
        //  this.duration = this.audio.duration;
        //});
        this.audio.addEventListener("timeupdate", () => {
          this.audio.volume = _.round(this.volume / 100, 1);
          this.currentTime = this.audio.currentTime;
          this.disX = this.audio.currentTime / this.audio.duration * 100;
        });

        this.audio.addEventListener("ended", () => {
          this.playNext();
        });
      },
      playPause() {
        if (this.audio.paused) {
          if (this.audio.src) {
            this.isPaused = true;
            this.audio.play();
          }
        } else {
          this.isPaused = false;
          this.audio.pause();
        }
      },
      // 三种播放模式(待开发)
      // 1 单曲循环 loop
      // 2 随机播放 random
      // 3 顺序播放 order
      playNext() {
        let index = this.index;
        let len = this.playList.length;
        index == len - 1 ? (index = 0) : index++;
        this.$store.commit("changeIndex", index);
      },
      playPrev() {
        let index = this.index;
        let len = this.playList.length;
        index == 0 ? (index = len - 1) : index--;
        this.$store.commit("changeIndex", index);
      },
      // 通过音乐Id获取音乐url
      fetchAudioAndPlay(id) {
        this.axios
          .get("/music/url?id=" + id)
          .then(res => res.data.data[0].url)
          .then(url => {
            this.audio.src = url;
            return this.audio.play();
          })
          .catch(err => {
            console.error(err.message);
          });
      }
    }
  };
</script>