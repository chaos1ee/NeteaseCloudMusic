<template>
    <div class="new-album">
        <title-bar class="t-bar">
            <a slot="title" class="bt">新碟上架</a>
            <div slot="more" class="more">
                <a href="javascript:void(0)">更多</a>
                <i class="icon"></i>
            </div>
        </title-bar>
        <el-carousel height="184px" trigger="click" :autoplay="false" i ndicator-position="none" arrow="always">
            <el-carousel-item>
                <div class="album" v-for="album in albums1" :key="album.id">
                    <div class="album-cover">
                        <img class="album-img" :src="album.picUrl">
                        <a class="album-msk" href="javascript:void(0)"></a>
                    </div>
                    <p class="album-name ft-brk">{{ album.name }}</p>
                    <p class="album-artist ft-brk">{{ album.artist.name}}</p>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="album" v-for="album in albums2" :key="album.id">
                    <div class="album-cover">
                        <img class="album-img" :src="album.picUrl">
                        <a class="album-msk" href="javascript:void(0)"></a>
                    </div>
                    <p class="album-name ft-brk">{{ album.name }}</p>
                    <p class="album-artist ft-brk">{{ album.artist.name}}</p>
                </div>
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
          .el-carousel__item {
            box-sizing: border-box;
            width: 100%;
            height: 184px;
            padding-top: 28px;
            margin-left: 15px;
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
          }
        }
      }
    }
</style>

<script>
    import TitleBar from "./title-bar";
    export default {
      name: "NewAlbum",
      components: {
        TitleBar
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