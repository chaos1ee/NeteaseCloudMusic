<template>
  <div class="banner">
    <el-carousel trigger="click" height="336px">
      <el-carousel-item v-for="item in banner" :key="item.targetId">
        <img :src="item.pic">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 982px;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: "banner",
  props: ["banner"]
};
</script>
