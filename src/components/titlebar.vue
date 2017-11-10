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
  background: url("/static/image/index.png") no-repeat -225px -156px;
  border-bottom: 2px solid #c10d0c;
}
</style>


<script>
export default {
  name: "title-bar"
};
</script>
