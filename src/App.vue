<template>
  <div id="app">
    <my-header></my-header>
    <keep-alive include="a">
      <router-view></router-view>
    </keep-alive>
    <my-footer></my-footer>
    <player-bar></player-bar>
  </div>
</template>

<script>
  import MyHeader from "./components/header";
  import MyFooter from "./components/footer";
  import PlayerBar from "./components/player-bar";
  import { mapMutations } from "vuex";
  import Strorage from "./assets/js/storage";

  export default {
    name: "home",
    components: {
      MyHeader,
      MyFooter,
      PlayerBar
    },
    methods: {
      ...mapMutations(["login"]),
      checkLogin() {
        if (Strorage.get("login") != null) {
          this.$store.commit("login");
        }
      }
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