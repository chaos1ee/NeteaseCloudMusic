<template>
  <ul class="nav">
    <slot name="item" v-for="(item, key, index) in items" :item="item"></slot>
  </ul>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: "MyNav",
  props: ["items"]
};
</script>
