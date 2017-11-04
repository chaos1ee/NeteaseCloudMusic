<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "../static/style/reset.scss";
@import "../static/style/common.scss";

html,
body {
  margin: 0;
  padding: 0;
  font-size: 12px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
