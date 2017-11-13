<template>
  <div class="cover">
    <img class="cp" :src="item.picUrl"></img>
    <a class="msk" :href="'/playlist?'+item.id"></a>
    <div class="bottom">
      <span @click="getList" class="icon-play"></span>
      <span class="icon-headset"></span>
      <span class="count">{{ count }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import { mapMutations } from "vuex";

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
    // 获取歌单内所有歌曲
    getList() {
      this.axios
        .get("/api/playlist/detail?id=" + this.item.id)
        .then(res => {
          this.$store.commit("addToPlayList", res.data.playlist.tracks);
        })
        .catch(err => {
          throw new Error(err.name + ":" + err.message);
        });
    }
  }
};
</script>
