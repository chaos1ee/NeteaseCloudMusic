<template>
  <div class="block-header">
    <div class="block-icon"></div>
    <h2 class="title">{{ blockHeader.title }}</h2>
    <div class="sub-title" v-if="blockHeader.subTitle">
      <ul>
        <li v-for="(subTitle, index) in blockHeader.subTitle" :key="index">
          <a href="javascript:void(0)">{{ subTitle }}</a>
        </li>
      </ul>
    </div>
    <div class="more" v-if="blockHeader.more">
      <a href="javascript:void(0)">更多</a>
      <i class="more-icon"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-header {
  height: 33px;
  padding: 0 10px 0 34px;
  background: url("/static/image/index.png") no-repeat -225px -156px;
  border-bottom: 2px solid #c10d0c;

  .title {
    float: left;
    line-height: 28px;
    font-size: 20px;
    font-weight: 400;
  }

  .sub-title {
    float: left;
    margin: 7px 0 0 20px;

    li {
      float: left;
      position: relative;
      list-style: none;
      padding: 0 15px;

      &::after {
        display: block;
        position: absolute;
        top: 5px;
        right: 0;
        content: "";
        width: 1px;
        height: 10px;
        background-color: #ccc;
      }
      &:last-child::after {
        display: none;
      }

      a {
        color: #666;
        line-height: 18px;
      }
    }
  }

  .more {
    float: right;
    margin-top: 9px;
    a {
      color: #666;
      vertical-align: middle;
    }
    .more-icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
      background-image: url("/static/image/index.png");
      background-repeat: no-repeat;
    }
  }
}
</style>

<script>
export default {
  name: "block-header",
  props: ["blockHeader"]
};
</script>
