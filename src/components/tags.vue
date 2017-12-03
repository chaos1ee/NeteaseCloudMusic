<template>
    <div class="tags">
        <span>标签：</span>
        <a class="tag-name" href="javascript:void(0)" v-for="(tag,index) in info.tags" :key="index">
            <em>{{ tag }}</em>
        </a>
    </div>
</template>

<style lang="scss" scoped>
    .tags {
      width: 400px;
      height: 40px;
      overflow: hidden;
      .tag-name {
        display: inline-block;
        margin-right: 10px;
        padding-right: 10px;
        background: url("../assets/image/button2.png") no-repeat right -27px;
        &:hover {
          background-position: right -1430px;
          em {
            background-position: 0 -1400px;
          }
        }
        em {
          display: block;
          height: 22px;
          padding-left: 10px;
          line-height: 22px;
          background: url("../assets/image/button2.png") no-repeat 0 0;
        }
      }
    }
</style>