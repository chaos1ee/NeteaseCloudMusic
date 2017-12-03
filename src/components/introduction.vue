<template>
  <div class="intro">
    <pre class="collapased" v-if="collapased"><slot name="title"></slot>{{ intro }}</pre>
    <pre v-else ><slot name="title"></slot>{{ intro }}</pre>
    <a class="switch" href="javascript:void(0)" @click="toggle">{{ collapased ? '展开 ↓' : '收起 ↑' }}</a>
  </div>
</template>

<style lang="scss">
  .intro {
    width: 400px;
    pre {
      line-height: 22px;
      color: #333;
      white-space: pre-wrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .collapased {
      height: 66px;;
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

