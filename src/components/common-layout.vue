<template>
    <div class="module">
        <div class="module-bg clearfix">
            <div class="m-left">
                <div class="wr">
                    <div class="wr2">
                        <slot name="left"></slot>
                    </div>
                </div>
            </div>
            <div class="m-right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .module {
      width: 100%;
      background: #f5f5f5;
      .module-bg {
        width: 980px;
        min-height: calc(100vh - 216px);
        margin: 0 auto;
        border: 1px solid #d3d3d3;
        border-width: 0 1px;
        background: url("../assets/image/wrap1.png") repeat-y 100% 100%;
      }
      .m-left {
        float: left;
        width: 100%;
        margin-right: -250px;
        .wr {
          margin-right: 251px;
        }
        .wr2 {
          padding: 20px 20px 40px;
        }
      }
      .m-right {
        float: right;
        width: 250px;
        zoom: 1;
      }
    }
</style>

<script>
    export default {
      name: "CommonLayout"
    };
</script>