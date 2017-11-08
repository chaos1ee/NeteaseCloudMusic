<template>
  <div id="app">
    <!-- 头部组件 -->
    <cloud-header></cloud-header>
    <!-- 网页主体 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <cloud-footer></cloud-footer>
  </div>
</template>

<script>
import CloudHeader from "./components/header/header";
import CloudFooter from "./components/footer/footer";
// import {mapMutations} from "vuex";

export default {
  name: "home",
  data() {
    return {
      subnavShow: true
    };
  },
  methods: {
    // ...mapMutations(["getPath"])
  },
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
