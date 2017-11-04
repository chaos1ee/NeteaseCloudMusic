<template>
  <div class="discover">
    <div class="subnav">
      <div class="subnav-wrapper clearfix">
        <div class="subnav">
          <ul>
            <router-link class="arrow-up-red" :to="{name: 'Recommend'}" tag="li">
              <a>推荐</a>
            </router-link>
            <router-link :to="{name: 'Rank'}" tag="li">
              <a>排行榜</a>
            </router-link>
            <router-link :to="{name: 'List'}" tag="li">
              <a>歌单</a>
            </router-link>
            <router-link :to="{name: 'Radio'}" tag="li">
              <a>主播电台</a>
            </router-link>
            <router-link :to="{name: 'Singer'}" tag="li">
              <a>歌手</a>
            </router-link>
            <router-link :to="{name: 'Album'}" tag="li">
              <a>新碟上架</a>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "discover"
};
</script>

<style lang="scss" scoped>
.discover {
  width: 100%;

  .subnav {
    width: 100%;
    background-color: #c20c0c;

    .subnav-wrapper {
      width: 1100px;
      margin: 0 auto;
      font-size: 12px;
      color: #fff;
      border-bottom: 1px solid #a40011;
    }

    .subnav {
      float: left;
      height: 34px;
      padding-left: 180px;

      li {
        float: left;
        list-style: none;
        text-align: center;

        a {
          display: inline-block;
          height: 20px;
          color: #fff;
          padding: 0 13px;
          margin: 7px 17px 0;
          line-height: 21px;
          border-radius: 20px;
        }
        &.active a {
          background-color: #9b0909;
        }
      }
    }
  }
}
</style>
