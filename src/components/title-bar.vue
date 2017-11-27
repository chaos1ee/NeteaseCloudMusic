<template>
  <div class="t-bar">
    <slot name="title"></slot>
    <slot name="subtitle"></slot>
    <slot name="more"></slot>
  </div>
</template>

<style lang="scss" scoped>
  .t-bar {
    height: 33px;
    padding: 0 10px 0 34px;
    background: url("../assets/image/index.png") no-repeat -225px -156px;
    border-bottom: 2px solid #c10d0c;
    .bt {
      float: left;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
    .st {
      float: left;
      margin: 7px 0 0 20px;
      a {
        color: #666;
      }
    }
    .more {
      float: right;
      margin-top: 9px;
      a {
        color: #666;
      }
      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        vertical-align: middle;
        background: url("../assets/image/index.png") no-repeat 0 -240px;
      }
    }
  }
</style>


<script>
  export default {
    name: "TitleBar"
  };
</script>