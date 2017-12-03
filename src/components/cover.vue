<template>
  <div class="cover">
    <slot name="cover"></slot>
    <router-link class="msk" :to="{name: 'PlaylistDetail', params: {id: playlistId}}" tag="a"></router-link>
    <div class="bottom">
      <span @click="updateList" class="icon-play"></span>
      <span class="icon-headset"></span>
      <slot name="desc"></slot>
    </div>
    <slot name="desc"></slot>
  </div>
</template>

<style lang="scss" scoped>
.icon-play {
  float: right;
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background-image: url("../assets/image/iconall.png");
  background-position: 0 0;
  background-repeat: no-repeat;
}

.icon-headset {
  float: left;
  width: 14px;
  height: 11px;
  background-image: url("../assets/image/iconall.png");
  background-position: 0 -24px;
  background-repeat: no-repeat;
  margin: 9px 5px 9px 10px;
}

.cover {
  position: relative;
  display: block;
  width: 140px;
  height: 140px;
  .bottom,
  .msk {
    background-image: url("../assets/image/coverall.png");
    background-repeat: no-repeat;
  }
  .icon-play,
  .icon-headset {
    background-image: url("../assets/image/iconall.png");
    background-repeat: no-repeat;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 0 0;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
  }
  .icon-play {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background-position: 0 0;
    cursor: pointer;
  }
  .icon-headset {
    float: left;
    widows: 14px;
    height: 11px;
    background-position: 0 -24px;
  }
  .count {
    float: left;
    margin-top: 7px;
    color: #ccc;
  }
}
</style>

<script>
  import { mapMutations, mapActions } from "vuex";
  import Storage from "../assets/js/storage";

  const IS_MUSIC = 0;
  const IS_RADIO = 1;

  export default {
    name: "Cover",
    props: ["playlistId"],
    methods: {
      ...mapMutations(["addToPlayList"]),
      ...mapActions(["fetchList"]),
      updateList() {
        if (this.item.type != undefined && this.item.type == 1) {
          this.$store.commit("getRadio", this.item);
        } else {
          this.$store.dispatch("getMusicList", this.item);
        }
      }
    }
  };
</script>