<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
    <play-bar></play-bar>
  </div>
</template>

<script>
  import MyHeader from "./components/header";
  import MyFooter from "./components/footer";
  import PlayBar from "./components/play-bar";
  import { mapActions } from "vuex";

  export default {
    name: "home",
    components: {
      MyHeader,
      MyFooter,
      PlayBar
    }
  };
</script>

<style lang="scss">
  @import "./assets/style/reset.scss";
  @import "./assets/style/common.scss";
  html {
    overflow-y: scroll;
  }

  html,
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 12px;
  }

  #app {
    width: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>