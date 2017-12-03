<template>
  <div class="intro">
    <pre class="collapased" v-if="collapased">介绍：{{ intro }}</pre>
    <pre v-else >介绍：{{ intro }}</pre>
    <a class="switch" href="javascript:void(0)" @click="toggle">{{ collapased ? '展开 ↓' : '收起 ↑' }}</a>
  </div>
</template>

<style lang="scss">
  .intro {
    width: 400px;
    pre {
      line-height: 15px;
      white-space: pre-wrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .collapased {
      height: 75px;;
    }
    .switch {
      float: right;
      margin-top: 10px;
      color: #0c73c2;
    }
  }
</style>

<script>
  export default {
    name: "Introduction",
    props: ['intro'],
    data() {
      return {
        collapased: true
      };
    },
    methods: {
      toggle() {
        this.collapased = !this.collapased;
      }
    }
  };
</script>

