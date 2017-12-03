<template>
  <div class="title">
    <div class="logo"></div>
    <span>{{ name }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .title {
    display: table;
    padding-bottom: 10px;
    .logo {
      display: inline-block;
      width: 64px;
      height: 24px;
      background: url("../assets/image/icon.png") no-repeat 0 -243px;
    }
    span {
      display: table-cell;
      font-size: 20px;
      font-weight: 500;
      vertical-align: middle;
      color: #000;
    }
  }
</style>

<script>
  export default {
    name: "MyTitle",
    props: ["name"]
  };
</script>
