<template>
  <div class="hot">
    <ul class="clearfix">
      <li v-for="item in hot" :key="item.id">
        <block-item :item="item"></block-item>
      </li>
    </ul>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.hot {
  margin: 20px 0 0 -42px;

  li {
    float: left;
    width: 140px;
    height: 204px;
    padding: 0 0 30px 42px;
    line-height: 1.4;
    list-style: none;
  }
}
</style>

<script>
import BlockItem from "./block-item";

export default {
  name: "hot",
  props: ["hot"],
  components: {
    BlockItem
  }
};
</script>

