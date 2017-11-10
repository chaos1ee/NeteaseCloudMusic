<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/header";
import MyFooter from "./components/footer";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    MyHeader,
    MyFooter
  },
  created() {
    // this.$store.dispatch("fetchData");
  }
};
</script>

<style lang="scss">
@import "../static/style/reset.scss";
@import "../static/style/common.scss";

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
