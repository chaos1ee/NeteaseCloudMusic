<template>
  <div class="cover">
    <img class="cp" :src="item.picUrl"></img>
    <router-link class="msk" :to="'/playlist/' + item.id" tag="a"></router-link>
    <div class="bottom">
      <span @click="updateList" class="icon-play"></span>
      <span class="icon-headset"></span>
      <span class="count">{{ count }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
  import { mapMutations, mapActions } from "vuex";

  const IS_MUSIC = 0;
  const IS_RADIO = 1;

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
    },
    methods: {
      ...mapMutations(["addToPlayList"]),
      ...mapActions(["fetchList"]),
      updateList() {
        if (this.item.type != undefined && this.item.type == 1) {
          this.$store.commit("getRadio", this.item);
        } else {
          this.$store.dispatch("getMusic", this.item);
        }
      }
    }
  };
</script>