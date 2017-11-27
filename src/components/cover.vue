<template>
  <div class="cover">
    <img class="cp" :src="item.picUrl"></img>
    <a class="msk" :href="'/discover/playlist?'+item.id"></a>
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
      // 获取歌单内所有歌曲
      getList() {
        if (this.item.type == IS_MUSIC) {
          this.axios
            .get("/playlist/detail?id=" + this.item.id)
            .then(res => {
              let data = [];
              // 筛选数据，存入vuex
              _.forEach(res.data.playlist.tracks, track => {
                let temp = {};
                temp.id = track.id;
                temp.type = 0;
                temp.name = track.name;
                temp.cover = track.al.picUrl;
                temp.artist = track.ar[0].name;
                temp.duration = _.floor(track.dt / 1000);
                data.push(temp);
              });
              this.$store.commit("addToPlayList", data);
            })
            .catch(err => {
              console.error(err.name + ":" + err.message);
            });
        } else if (this.item.type == IS_RADIO) {
          console.log(this.item);
          let data = [];
          let temp = {};
          temp.id = this.item.program.mainSong.id;
          temp.type = 1;
          temp.name = this.item.name;
          temp.cover = this.item.picUrl;
          temp.artist = this.item.program.mainSong.artists[0].name;
          temp.duration = _.floor(this.item.program.duration / 1000);
          data.push(temp);
          this.$store.commit("addToPlayList", data);
        } else {
          console.log("不能获取歌单信息");
        }
      }
    }
  };
</script>
