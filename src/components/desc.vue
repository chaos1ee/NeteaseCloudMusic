<template>
  <p class="desc">
    <slot name="slgon"></slot>
    <slot name="desc"></slot>   
  </p>
</template>

<style lang="scss" scoped>
.desc {
  width: 100%;
  margin: 8px 0 3px;
  font-size: 14px;
  .normal {
    display: inline-block;
    max-width: 100%;
    max-height: 36px;
    vertical-align: middle;
  }
}
</style>

<script>
export default {
  name: "describe"
};
</script>
