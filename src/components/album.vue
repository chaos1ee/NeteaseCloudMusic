<template>
  <div class="album">
    <div class="album-cover" @mouseover="showPlayBtn" @mouseout="hidePlayBtn">
      <img class="album-img" :src="album.picUrl">
      <router-link class="album-msk" :to="{name: 'AlbumDetail' , params: {id: album.id}}" tag="a" replace></router-link>
      <a class="play-btn" v-show="playBtnShow" href="javscript:void(0)"></a>
    </div>
    <p class="album-name ft-brk">{{ album.name }}</p>
    <p class="album-artist ft-brk">{{ album.artist.name}}</p>
  </div>
</template>

<style lang="scss">
  .album {
    display: inline-block;
    width: 118px;
    height: 150px;
    margin-left: 12px;
    .album-cover {
      position: relative;
      width: 100px;
      height: 100px;
      margin-bottom: 7px;
      .album-img {
        width: 100%;
        height: 100%;
      }
      .album-msk {
        position: absolute;
        top: 0;
        left: 0;
        width: 118px;
        height: 100px;
        background: url("../assets/image/coverall.png") no-repeat 0 -570px;
      }
      .play-btn {
        position: absolute;
        left: 75px;
        bottom: 5px;
        width: 22px;
        height: 22px;
        background: url("../assets/image/iconall.png") no-repeat 0 -85px;
      }
    }
    .album-name {
      width: 90%;
      line-height: 19px;
      overflow: hidden;
    }
    .album-artist {
      width: 90%;
      line-height: 18px;
      overflow: hidden;
      color: #666;
    }
  }
</style>

<script>
  export default {
    name: "Album",
    props: ["album"],
    data() {
      return {
        playBtnShow: false
      };
    },
    methods: {
      showPlayBtn() {
        this.playBtnShow = true;
      },
      hidePlayBtn() {
        this.playBtnShow = false;
      }
    }
  };
</script>