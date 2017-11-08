<template>
  <div class="cloud-header">
    <div class="top">
      <div class="top-wrapper">
        <logo></logo>
        <top-nav></top-nav>
        <login></login>
      </div>
    </div>
    <sub-nav></sub-nav>
  </div>
</template>

<style lang="scss" scoped>
$topbarImg: "/static/image/topbar.png";
$toplistImg: "/static/image/toplist.png";

.cloud-header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;

  .top {
    position: relative;
    height: 70px;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
    background-color: #242424;

    .top-wrapper {
      width: 1100px;
      margin: 0 auto;
    }
  }
}
</style>

<script>
import Logo from "./logo";
import TopNav from "./top-nav";
import Login from "./login";
import SubNav from "./sub-nav";

export default {
  name: "cloud-header",
  components: {
    Logo,
    TopNav,
    Login,
    SubNav
  }
};
</script>
