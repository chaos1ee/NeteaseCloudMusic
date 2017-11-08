<template>
  <div class="personalized clearfix">
    <ul class="clearfix">
      <li v-for="item in personalized" :key="item.id">
        <block-item :item="item"></block-item>
      </li>
    </ul>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.personalized {
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
  name: "personalized",
  props: ["personalized"],
  components: {
    BlockItem
  }
};
</script>


