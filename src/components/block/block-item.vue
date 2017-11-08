<template>
  <div class="item">
    <div class="item-cover">
      <img class="item-pic" :src="item.picUrl">
      <a class="item-musk" :href="'/playlist?'+item.id"></a>
      <div class="item-bottom">
        <a class="icon-play" href="javascript:void(0)"></a>
        <span class="icon-headset"></span>
        <span class="count">{{ count}}</span>
      </div>
    </div>
    <p class="item-desc">
      <a :href="'/playlist?'+item.id">{{ item.name }}</a>
    </p>
    <p class="item-copywriter" v-show="copywriterShow">
      <a :href="'/playlist?'+item.id">{{ item.copywriter }}</a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.item {
  .item-cover {
    position: relative;
    width: 140px;
    height: 140px;

    .item-pic {
      display: block;
      width: 100%;
      height: 100%;
    }

    .item-musk {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("/static/image/coverall.png");
      background-position: 0 0;
      background-repeat: no-repeat;
    }

    .item-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      background-image: url("/static/image/coverall.png");
      background-position: 0 -537px;

      .icon-play {
        float: right;
        position: absolute;
        right: 10px;
        bottom: 5px;
        width: 16px;
        height: 17px;
        background-image: url("/static/image/iconall.png");
        background-position: 0 0;
        background-repeat: no-repeat;
      }

      .icon-headset {
        float: left;
        width: 14px;
        height: 11px;
        background-image: url("/static/image/iconall.png");
        background-position: 0 -24px;
        background-repeat: no-repeat;
        margin: 9px 5px 9px 10px;
      }

      .count {
        float: left;
        margin-top: 7px;
        color: #ccc;
        line-height: 1.4;
      }
    }
  }

  .item-desc,
  .item-copywriter {
    width: 100%;
    margin: 8px 0 3px;
  }

  .item-desc a {
    font-size: 14px;
    color: #000;
  }
  .item-copywriter a {
    font-size: 12px;
    color: #999;
  }
}
</style>

<script>
export default {
  name: "area-item",
  props: ["item"],
  computed: {
    count() {
      let count =
        this.item.playCount ||
        this.item.playcount ||
        this.item.program.listenerCount;
      return count > 100000 ? _.floor(count / 10000) + "万" : count;
    },
    copywriterShow() {
      return this.item.copywriter && this.item.type === 1 && this.item.creator;
    }
  }
};
</script>
