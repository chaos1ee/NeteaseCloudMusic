<template>
  <div class="nav">
    <ul>
      <router-link :to="{name: 'Discover'}" tag="li">
        <a>发现音乐</a>
      </router-link>
      <router-link :to="{name: 'Music'}" tag="li">
        <a>我的音乐</a>
      </router-link>
      <router-link :to="{name: 'Friend'}" tag="li">
        <a>朋友</a>
      </router-link>
      <router-link :to="{name: 'Shop'}" tag="li">
        <a>商城</a>
      </router-link>
      <router-link :to="{name: 'Musician'}" tag="li">
        <a>音乐人</a>
      </router-link>
      <router-link :to="{name: 'Download'}" tag="li">
        <a>下载客户端</a>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topnav {
  float: left;
  top: 64px;
  left: 50%;
  width: 12px;
  height: 7px;
  margin-left: -6px;
  background-image: url("/static/image/topbar.png");
  background-position: -226px 0;
  overflow: hidden;
  li {
    float: left;
    list-style: none;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      visibility: hidden;
      top: 64px;
      left: 50%;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      background-image: url("/static/image/topbar.png");
      background-position: -226px 0;
      overflow: hidden;
    }
    &.active::after {
      visibility: visible;
    }
    a {
      font-size: 1.2em;
      display: block;
      padding: 0 19px;
      text-align: center;
      line-height: 70px;
      &:hover {
        background-color: #000;
      }
    }
  }
}
</style>

<script>
export default {
  name: "top-nav"
};
</script>
