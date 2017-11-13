<template>
  <div class="playbar" ref="player" @mouseenter="playerShow" @mouseleave="playerHide">
    <div class="p-wr">
      <div class="bg"></div>
      <div class="p-right">
        <a class="locker" href="javascript:void(0)" @click.self="lock"></a>
      </div>
      <div class="blank"></div>
      <div class="player">
        <div class="btns">
          <a class="prev" href="javascript:void(0)">上一曲</a>
          <a class="ply" @click="playOrPause" href="javascript:void(0)">播放</a>
          <a class="next" href="javascript:void(0)">下一曲</a>
        </div>
        <div class="m-cover">
          <img :src="playing.coverImg">
          <a class="msk" href="javascript:void(0)"></a>
        </div>
        <div class="play">
          <div class="words">
            <span class="title ft-brk">{{playing.name}}</span>
            <span class="artist ft-brk">{{playing.artist}}</span>
          </div>
          <div class="progress">
            <div class="barbg">
              <div class="rdy"> </div>
              <div class="cur">
                <span class="btn">
                  <i></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="ctrl"></div>
      </div>
      <div class="hand">展开播放条</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.playbar {
  position: fixed;
  bottom: -47px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.2s ease-out;

  &.active {
    bottom: 0;
  }
}

.bg,
.p-right,
.blank,
.locker,
.msk {
  background: url("/static/image/playbar.png") no-repeat 9999px 9999px;
}

.p-wr {
  width: 100%;
  height: 53px;
  position: relative;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 83px);
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
    background-image: url("/static/image/playbar.png");
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

  .ply.pause {
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

    .barbg,
    .rdy,
    .cur {
      width: 493px;
      background-image: url("/static/image/statbar.png");
      background-repeat: no-repeat;
    }

    .barbg {
      width: 493px;
      height: 9px;
      background-position: right 0;
    }

    .rdy {
      width: 0;
      height: 9px;
      background-position: right -30px;
    }

    .cur {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 9px;
      background-position: left -66px;
    }
    .btn {
      position: absolute;
      top: -7px;
      right: -13px;
      width: 22px;
      height: 24px;
      margin-left: -11px;
      background-position: 0 -250px;
      background: url("/static/image/ply_btn.png") no-repeat;
    }

    i {
      visibility: hidden;
      position: absolute;
      left: 5px;
      top: 5px;
      width: 12px;
      height: 12px;
      background: url("/static/image/loading.gif");
    }
  }
}
</style>

<script>
import { mapState } from "vuex";

export default {
  name: "playBar",
  data() {
    return {
      // 锁定状态
      locked: false,
      // Audio实例对象
      audio: {},
      playing: {
        coverImag: null,
        name: "",
        artist: ""
      }
    };
  },
  created() {
    this.createAudioContext();
  },
  computed: mapState({
    playList: state => state.playList
  }),
  watch: {
    playList: function() {
      this.playing.name = this.playList[0].name;
      this.playing.artist = this.playList[0].ar[0].name;
      this.playing.coverImg = this.playList[0].al.picUrl;
    }
  },
  methods: {
    playerShow() {
      if (!this.locked) {
        this.$refs.player.classList.add("active");
      }
    },
    playerHide() {
      if (!this.locked) {
        this.$refs.player.classList.remove("active");
      }
    },
    lock() {
      if (!this.locked) {
        this.locked = true;
        this.$refs.player.classList.add("active", "locked");
      } else {
        this.locked = false;
        this.$refs.player.classList.remove("active", "locked");
      }
    },
    createAudioContext() {
      this.audio = new Audio();
      this.audio.preload = true;
      this.audio.controls = false;
    },
    playOrPause() {
      //if(this.audio.paused)
      let id = this.playList[0].id;
      this.playing.name = this.playList[0].name;
      this.playing.artist = this.playList[0].ar[0].name;
      this.playing.coverImg = this.playList[0].al.picUrl;
      this.getMusicUrl(id)
        .then(url => {
          this.audio.src = url;
          this.audio.play();
        })
        .catch(err => {
          console.error(err.message);
        });
    },
    playNext() {},
    playPrev() {},
    // 返回一个promise对象
    // resolved 返回音乐url
    getMusicUrl(id) {
      return new Promise((resolve, reject) => {
        this.axios
          .get("/api/music/url?id=" + id)
          .then(res => {
            resolve(res.data.data[0].url);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
</script>
