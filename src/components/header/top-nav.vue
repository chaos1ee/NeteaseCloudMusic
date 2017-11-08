<template>
  <ul class="top-nav">
    <router-link v-for="(route ,key) in routes" :key="key" :to="{name: key}" tag="li">
      <span>
        <a href="javascript:void(0)">
          <em>{{ route }}</em>
          <sub class="bg-topbar">&nbsp;</sub>
        </a>
      </span>
    </router-link>
  </ul>
</template>

<style lang="scss" scoped>
.top-nav {
  float: left;

  li,
  span,
  a,
  em {
    float: left;
    height: 70px;
    font-size: 14px;
  }

  li {
    position: relative;

    a {
      padding: 0 19px;
      text-align: center;
      line-height: 70px;

      &:hover {
        background-color: #000;
      }
    }

    sub {
      display: block;
      position: absolute;
      left: 50%;
      top: 64px;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      overflow: hidden;
      background-position: -226px 0;
      visibility: hidden;
    }

    &.active sub {
      visibility: visible;
    }
  }
}
</style>

<script>
export default {
  name: "top-nav",
  data() {
    return {
      routes: {
        Home: "发现音乐",
        Music: "我的音乐",
        Friend: "我的朋友",
        Shop: "商城",
        Musician: "音乐人",
        Download: "下载客户端"
      }
    };
  }
};
</script>
