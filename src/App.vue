<template>
  <div id="app">
    <cloud-header></cloud-header>
    <router-view></router-view>
    <cloud-footer></cloud-footer>
  </div>
</template>

<script>
import CloudHeader from "./components/header/header";
import CloudFooter from "./components/footer/footer";

export default {
  name: "home",
  components: {
    CloudHeader,
    CloudFooter
  }
};
</script>

<style lang="scss">
@import "../static/style/reset.scss";
@import "../static/style/common.scss";

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 12px;
}

#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
