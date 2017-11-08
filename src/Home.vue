<template>
  <div class="home">

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
import CloudHeader from "./components/header/cloud-header";
import CloudFooter from "./components/cloud-footer";
// import { mapMutations } from "vuex";

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

<style lang="scss" scoped>
.content {
  position: absolute;
  top: 70px;
  width: 100%;
}
</style>
