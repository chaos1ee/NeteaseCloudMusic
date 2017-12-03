<template>
    <div class="btn-group clearfix">
        <a class="btn btn-play clearfix">
            <i>
                <em class="ply"></em>播放
            </i>
        </a>
        <a class="btn add-to-player" href="javascrpt:void(0)"></a>
        <a class="btn collect" href="javascrpt:void(0)">
            <i class="btn">
                <slot name="collect"></slot>
            </i>
        </a>
        <a class="btn share" href="javascrpt:void(0)">
            <i class="btn">
                <slot name="share"></slot>
            </i>
        </a>
        <a class="btn download" href="javascript:void(0)">
            <i class="btn">
                <em>下载</em>
            </i>
        </a>
        <a class="btn comment" href="javascrpt:void(0)">
            <i class="btn">
                <slot name="comment"></slot>
            </i>
        </a>
    </div>
    </div>
</template>


<style lang="scss" scoped>
    .btn-group {
      margin-top: 25px;
      margin-right: -10px;
      .btn,
      .btn i,
      .ply {
        float: left;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
        background: url("../assets/image/button2.png") no-repeat 0 9999px;
      }
      .btn {
        padding: 0 5px 0 0;
        white-space: nowrap;
      }
      .btn-play {
        float: left;
        color: #fff;
        background-position: right -428px;
        &:hover {
          background-position: right -510px;
        }
        i {
          padding: 0 7px 0 8px;
          background-position: 0 -387px;
          color: #fff;
          font-style: normal;
          .ply {
            float: left;
            width: 20px;
            height: 18px;
            margin: 6px 2px 2px 0;
            background-position: 0 -1622px;
            overflow: hidden;
          }
        }
      }
      .add-to-player {
        width: 31px;
        margin-left: -3px;
        margin-right: 5px;
        background-position: 0 -1588px;
        &:hover {
          background-position: -40px -1588px;
        }
      }

      .collect,
      .share,
      .download,
      .comment {
        min-width: 23px;
        margin-right: 6px;
        background-position: right -1020px;
        &:hover {
          background-position: right -1106px;
        }
        i {
          padding-right: 2px;
          padding-left: 28px;
        }
      }
      .collect i {
        background-position: 0 -977px;
      }

      .share i {
        background-position: 0 -1225px;
      }
      .download i {
        background-position: 0 -2761px;
      }
      .comment i {
        background-position: 0 -1465px;
      }
    }
</style>

<script>
    export default {
      name: "ButtonGroup"
    };
</script>