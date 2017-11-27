<template>
  <div class="playlist-detail">

  </div>
</template>

<style>
  .playlist-detail {
  }
</style>

<script>
  export default {
    name: "PlaylistDetail",
    data() {
      return {
        list: []
      };
    },
    created() {
      this.fetchList(this.$route.params.id);
    },
    methods: {
      fetchList(id) {
        this.axios
          .get("/playlist/detail?id=" + id)
          .then(res => {
            if (res.data.playlist != undefined) {
              let data = [];
              this.list = _.forEach(res.data.playlist.tracks, item => {
                let temp = {};
                temp.name = item.name;
              });
            }
          })
          .catch(err => {
            console.error(err.message);
          });
      }
    }
  };
</script>