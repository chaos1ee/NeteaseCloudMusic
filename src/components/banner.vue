<template>
  <div class="banner" ref="banner">
    <div class="banner-inner">
      <el-carousel trigger="click" height="336px" @change="toggleBannerBgColor($event)">
        <el-carousel-item v-for="item in banner" :key="item.targetId">
          <img :src="item.pic">
        </el-carousel-item>
      </el-carousel>
      <div class="download">
        <a class="btn" href="javascript:void(0)"></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .banner {
    height: 336px;
    .banner-inner {
      position: relative;
      width: 982px;
      height: 336px;
      margin: 0 auto;
      .el-carousel {
        position: absolute;
        top: 0;
        left: 0;
        width: 730px;
        height: 336px;
        .el-carousel__item {
          position: absolute;
          top: 0;
          right: 0;
          width: 730px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .download {
        position: absolute;
        top: 0;
        right: 0;
        width: 254px;
        height: 336px;
        background: url("../assets/image/download.png") no-repeat 0 0;
        .btn {
          display: block;
          width: 215px;
          height: 56px;
          margin: 212px 0 0 19px;
          background: url("../assets/image/download.png") no-repeat 0 9999px;
          &:hover {
            background-position: 0 -340px;
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    name: "banner",
    props: ["banner"],
    data() {
      return {
        color: ["#88837d", "#200f19", "#000000", "#000000", "#ffffff", "#464d57"]
      };
    },
    methods: {
      toggleBannerBgColor(index) {
        this.$refs.banner.style.backgroundColor = this.color[index];
      }
    }
  };
</script>