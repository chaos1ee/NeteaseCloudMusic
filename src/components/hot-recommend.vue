<template>
    <div class="hot-recommend">
        <title-bar>
            <a slot="title" class="bt">热门推荐</a>
            <div slot="subtitle" class="st">
                <a class="bsl" href="javascript:void(0)">华语</a>
                <a class="bsl" href="javascript:void(0)">流行</a>
                <a class="bsl" href="javascript:void(0)">摇滚</a>
                <a class="bsl" href="javascript:void(0)">民谣</a>
                <a class="bsl" href="javascript:void(0)">电子</a>
            </div>
            <div slot="more" class="more">
                <a href="javascript:void(0)">更多</a>
                <i class="icon"></i>
            </div>
        </title-bar>
        <ul class="bc clearfix">
            <li v-for="(item,key) in covers" :key="key">
                <cover :id="item.id">
                    <img :src="item.picUrl" slot="cover">
                </cover>
                <div class="desc">
                    <i class="radio-icon" v-if="item.type == 1"></i>
                    <router-link :to="{name: 'PlaylistDetail', params: {id: item.id}}">{{item.name}}</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .hot-recommend {
      width: 100%;
      height: 523px;
      .bc {
        margin: 20px 0 0 -42px;
        li {
          float: left;
          width: 140px;
          height: 204px;
          overflow: hidden;
          padding: 0 0 30px 42px;
          line-height: 1.4;
          .desc {
            width: 100%;
            margin: 8px 0 3px;
            font-size: 14px;
            .radio-icon {
              display: inline-block;
              position: relative;
              top: 3px;
              width: 35px;
              height: 15px;
              background: url("../assets/image/icon.png") no-repeat -31px -658px;
            }
          }
        }
      }
    }
</style>


<script>
    import TitleBar from "./title-bar";
    import Cover from "./cover";

    export default {
      name: "HotRecommend",
      props: ["covers"],
      components: {
        TitleBar,
        Cover
      }
    };
</script>