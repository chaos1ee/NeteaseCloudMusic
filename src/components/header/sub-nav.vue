<template>
  <div v-if="show" class="sub-nav">
    <div class="wrapper">
      <ul class="nav">
        <router-link v-for="(route ,key) in routes" :key="key" :to="{name: key}" tag="li">
          <a href="javascript:void(0)">
            <em>{{ route }}</em>
          </a>
        </router-link>
      </ul>
    </div>
  </div>
  <div v-else class="n-nav"></div>
</template>

<style lang="scss" scoped>
.sub-nav,
.n-nav {
  z-index: 100;
  box-sizing: border-box;
  background: #c20c0c;
  border-bottom: 1px solid #a40011;
}

.sub-nav {
  height: 35px;

  .wrapper {
    width: 1100px;
    height: 34px;
    margin: 0 auto;
    position: relative;

    ul {
      float: left;
      padding-left: 180px;

      li {
        float: left;
        height: 34px;
        text-align: center;

        a {
          float: left;
          height: 34px;
          text-align: center;
          color: #fff;

          em {
            display: inline-block;
            height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            border-radius: 20px;
            line-height: 21px;
          }
        }
      }
    }
  }
}

.n-nav {
  height: 5px;
}
</style>

<script>
export default {
  name: "sub-nav",
  data() {
    return {
      routes: {
        Discover: "推荐",
        TopList: "排行榜",
        PlayList: "歌单",
        DJRadio: "主播电台",
        Artist: "歌手",
        Album: "新碟上架"
      },
      show: true
    };
  },
  watch: {
    $route(to, from) {
      if (_.indexOf(_.keys(this.routes), to.name) > -1 || to.name == "Home") {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
</script>
