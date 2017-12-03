<template>
    <div class="creator">
        <img class="creator-icon" :src="avatar">
        <span class="nickname ft-brk">{{nickname}}</span>
        <span class="create-time">{{ time | timeFormat }}创建</span>
    </div>
</template>

<style lang="scss" scoped>
    .creator {
      width: 400px;
      height: 35px;
      .creator-icon {
        float: left;
        width: 35px;
        height: 35px;
      }
      .nickname {
        float: left;
        max-width: 200px;
        height: 35px;
        line-height: 35px;
        margin-left: 20px;
        font-size: 12px;
        color: #0c73c2;
      }
      .create-time {
        float: left;
        height: 35px;
        line-height: 35px;
        margin-left: 20px;
        font-size: 10px;
      }
    }
</style>

<script>
    import { format } from "date-fns";
    export default {
      name: "Creator",
      props: ["avatar", "nickname", "time"],
      filters: {
        timeFormat(time) {
          return format(time, "YYYY-MM-DD ");
        }
      }
    };
</script>
