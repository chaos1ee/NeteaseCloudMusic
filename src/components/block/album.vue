<template>
  <div class="album">
    <div class="inner">
      <el-carousel height="180px" trigger="click" :autoplay="false" indicator-position="none" arrow="always">
        <el-carousel-item v-for="(item,index) in 2" :key="item">
          <ul v-for="item in picked[index]" :key="item.id">
            <li>
              <img :src="item.picUrl">
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.album {
  position: relative;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;

  .inner {
    height: 184px;
    padding-left: 16px;
    background: #f5f5f5;
    border: 1px solid #fff;
    img {
      width: 100px;
      height: 100px;
    }
  }
  li {
    float: left;
    width: 140px;
    height: 204px;
    padding: 0 0 30px 42px;
    line-height: 1.4;
    list-style: none;
  }
}
</style>

<script>
import BlockItem from "./block-item";

export default {
  name: "album",
  props: ["album"],
  data() {
    return {
      picked: []
    };
  },
  created() {
    this.processData();
  },
  methods: {
    /** 
       * @description 从album中随机抽取10张专辑。 
       * @returns 取出的专辑组成的数组 
       */
    processData() {
      this.picked.push(_.slice(this.album, 0, 5), _.slice(this.album, 5, 10));
    }
  },
  components: {
    BlockItem
  }
};
</script>
