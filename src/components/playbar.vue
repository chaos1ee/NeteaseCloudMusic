<template>
  <div class="playbar" ref="player" @mouseenter="playerShow" @mouseleave="playerHide">
    <transition name="fade">
      <div class="p-wr">
        <div class="bg"></div>
        <div class="p-right">
          <a class="locker" href="javascript:void(0)" @click.self="lock"></a>
        </div>
        <div class="blank"></div>
        <div class="player"></div>
        <div class="hand">展开播放条</div>
      </div>
    </transition>
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
.locker {
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
}

// 未上锁状态
.locker {
  display: block;
  width: 18px;
  height: 18px;
  margin: 6px 0 0 17px;
  background-position: -80px -380px;

  &:hover {
    background-position: -80px -400px;
  }
}

// 上锁状态
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
</style>

<script>
export default {
  name: "playBar",
  data() {
    return {
      locked: false
    };
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
        this.$refs.player.classList.add("active");
        this.$refs.player.classList.add("locked");
        console.log("locked");
      } else {
        this.locked = false;
        this.$refs.player.classList.remove("active");
        this.$refs.player.classList.remove("locked");
        console.log("unlocked");
      }
    }
  }
};
</script>
