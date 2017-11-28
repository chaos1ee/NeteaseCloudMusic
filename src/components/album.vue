<template>
    <div class="album">
        <div class="album-cover">
            <img class="album-img" :src="album.picUrl">
            <a class="album-msk" href="javascript:void(0)"></a>
        </div>
        <p class="album-name ft-brk">{{ album.name }}</p>
        <p class="album-artist ft-brk">{{ album.artist.name}}</p>
    </div>
</template>

<style lang="scss" scoped>
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
      props: ["album"]
    };
</script>