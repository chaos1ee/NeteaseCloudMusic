<template>
  <div class="subnav clearfix">
    <div class="subnav-1" v-if="show">
      <ul>
        <router-link :to="{ name: '' }">

        </router-link>
        <li class="subnav-item">
          <a href="/#">推荐</a>
        </li>
        <li class="subnav-item">
          <a href="/#">排行榜</a>
        </li>
        <li class="subnav-item">
          <a href="/#">歌单</a>
        </li>
        <li class="subnav-item">
          <a href="/#">主播电台</a>
        </li>
        <li class="subnav-item">
          <a href="/#">歌手</a>
        </li>
        <li class="subnav-item">
          <a href="/#">新碟上架</a>
        </li>
      </ul>
    </div>
    <div v-else class="subnav-2"></div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
  props: ["show"],
  data() {
    return {
      activePage: ""
    };
  },
  watch: {
    route(to, from) {
      this.activePage = to.path;
      console.log(this.activePage);
    }
  }
};
</script>

<style lang="scss" scoped>
.subnav {
  width: 100%;
  background-color: #c20c0c;

  .subnav-1,
  .subnav-2 {
    width: 1100px;
    margin: 0 auto;
  }

  .subnav-1 {
    height: 34px;
  }

  .subnav-2 {
    height: 5px;
    background-color: #c20c0c;
  }

  li {
    float: left;
    list-style: none;
    font-size: 12px;
    color: #fff;
  }
}
</style>
