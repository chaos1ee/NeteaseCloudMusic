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
      let num =
        this.item.playCount ||
        this.item.playcount ||
        this.item.program.listenerCount;
      return num > 100000 ? _.floor(_.divide(num, 10000)) + "万" : num;
    }
  }
};
</script>
