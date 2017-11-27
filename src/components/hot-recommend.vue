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
                <cover :item="item"></cover>
                <describe>
                    <a slot="desc" :href="'/playlist?'+item.id">{{item.name}}</a>
                </describe>
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
        }
      }
    }
</style>


<script>
    import Describe from "./desc";
    import TitleBar from "./title-bar";
    import Cover from "./cover";

    export default {
      name: "HotRecommend",
      props: ["covers"],
      components: {
        TitleBar,
        Cover,
        Describe
      }
    };
</script>
