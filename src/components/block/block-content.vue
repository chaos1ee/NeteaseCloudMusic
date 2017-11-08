<template>
  <div class="block-content clearfix">
    <ul>
      <li v-for="card in blockContent" :key="card.id">
        <block-card :card="card"></block-card>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.block-content {
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
import BlockCard from "./block-card";

export default {
  name: "block-content",
  props: ["blockContent"],
  components: {
    BlockCard
  }
};
</script>
