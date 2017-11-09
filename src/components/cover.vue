<template>
  <div class="cover">
    <img class="cp" :src="item.picUrl"></img>
    <a class="msk" :href="'/playlist?'+item.id"></a>
    <div class="bottom">
      <span class="icon-play"></span>
      <span class="icon-headset"></span>
      <span class="count">{{ count }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: "card",
  props: ["item"],
  computed: {
    count() {
      return _.floor(_.divide(this.item.playCount, 10000)) + "万";
    }
  }
};
</script>
