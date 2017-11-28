<template>
  <div class="new-album">
    <title-bar class="t-bar">
      <a slot="title" class="bt">新碟上架</a>
      <div slot="more" class="more">
        <a href="javascript:void(0)">更多</a>
        <i class="icon"></i>
      </div>
    </title-bar>
    <el-carousel height="184px" trigger="click" :autoplay="false" i ndicator-position="none" arrow="always" indicator-position="none">
      <el-carousel-item>
        <album v-for="album in albums1" :key="album.id" :album="album"></album>
      </el-carousel-item>
      <el-carousel-item>
        <album v-for="album in albums2" :key="album.id" :album="album"></album>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss">
  .new-album {
    height: 243px;
    margin-bottom: 30px;
    .el-carousel {
      height: 186px;
      margin: 20px 0 37px;
      border: 1px solid #d3d3d3;
      overflow: hidden;
      .el-carousel__container {
        height: 184px;
        background: #f5f5f5;
        border: 1px solid #fff;
        .el-carousel__arrow--left,
        .el-carousel__arrow--right {
          width: 40px;
          height: 40px;
          color: #000;
          background: transparent;
        }
        .el-carousel__arrow--left {
          left: -10px;
        }
        .el-carousel__arrow--right {
          right: -10px;
        }
        .el-carousel__item {
          box-sizing: border-box;
          width: 100%;
          height: 184px;
          padding-top: 28px;
          margin-left: 15px;
        }
      }
    }
  }
</style>

<script>
  import TitleBar from "./title-bar";
  import Album from "./album";

  export default {
    name: "NewAlbum",
    components: {
      TitleBar,
      Album
    },
    props: ["albums"],
    computed: {
      albums1() {
        return _.slice(this.albums, 0, 5);
      },
      albums2() {
        return _.slice(this.albums, 5, 10);
      }
    }
  };
</script>