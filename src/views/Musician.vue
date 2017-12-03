<template>
  <div class="musician">
    <div class="main">
      <div class="pic"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .musician {
    width: 100%;
    background-color: #fefefe;
    .main {
      width: 980px;
      min-height: calc(100vh - 216px);
      box-sizing: border-box;
      margin: 0 auto;
      background-color: #fff;
      border: 1px solid #dedede;
      border-width: 0 1px;
      .pic {
        width: 807px;
        height: 268px;
        padding-top: 104px;
        margin: 0 auto;
        background: url("../assets/image/mymusic.png") no-repeat 0 104px;
      }
    }
  }

</style>
<script>
  export default {
    name: "musician"
  };
</script>


