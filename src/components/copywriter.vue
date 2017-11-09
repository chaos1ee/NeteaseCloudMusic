<template>
  <p class="copywriter">
    <slot name="copywriter"></slot>
  </p>
</template>

<style lang="scss" scoped>
.copywriter {
  width: 100%;
  margin-top: 3px;

  a {
    color: #999;
  }
}
</style>

<script>
export default {
  name: "copywriter"
};
</script>

