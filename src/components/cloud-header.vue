<template>
  <div class="cloud-header">
    <div class="top">
      <div class="top-wrapper">
        <h1 class="logo">
          <a href="javascript:void(0)"></a>
        </h1>

        <div class="topnav">
          <ul>
            <router-link class="arrow-up-red" :to="{name: 'Discover'}" tag="li">
              <a>发现音乐</a>
            </router-link>
            <router-link class="arrow-up-red" :to="{name: 'Music'}" tag="li">
              <a>我的音乐</a>
            </router-link>
            <router-link class="arrow-up-red" :to="{name: 'Friend'}" tag="li">
              <a>朋友</a>
            </router-link>
            <router-link class="arrow-up-red" :to="{name: 'Shop'}" tag="li">
              <a>商城</a>
            </router-link>
            <router-link class="arrow-up-red" :to="{name: 'Musician'}" tag="li">
              <a>音乐人</a>
            </router-link>
            <router-link class="arrow-up-red" :to="{name: 'Download'}" tag="li">
              <a>下载客户端</a>
            </router-link>
          </ul>
        </div>

        <div class="login">
          <el-dropdown :show-timeout="0" :hide-timeout="0">
            <span class="el-dropdown-link">登录</span>
            <i class="arrow-down"></i>
            <el-dropdown-menu class="dropmenu" slot="dropdown">
              <el-dropdown-item>
                <i class="icon-mb"></i>
                <em>手机号登录</em>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <i class="icon-wx"></i>
                <em>微信登录</em>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <i class="icon-qq"></i>
                <em>QQ登录</em>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <i class="icon-sina"></i>
                <em>新浪微博登录</em>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <i class="icon-net"></i>
                <em>网易邮箱账号登录</em>
              </el-dropdown-item>
              <div class="arrow-up"></div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$topbarImg: "/static/image/topbar.png";
$toplistImg: "/static/image/toplist.png";

.cloud-header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;

  .top {
    position: relative;
    height: 70px;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
    background-color: #242424;
  }

  .top-wrapper {
    width: 1100px;
    margin: 0 auto;
  }

  .logo {
    width: 176px;
    height: 69px;
    float: left;
    background-image: url($topbarImg);
    background-position: 0 0;
    background-repeat: no-repeat;
  }

  .topnav {
    float: left;

    li {
      float: left;
      list-style: none;

      &.active::after {
        visibility: visible;
      }

      a {
        font-size: 1.2em;
        display: block;
        padding: 0 19px;
        text-align: center;
        line-height: 70px;

        &:hover {
          background-color: #000;
        }
      }
    }
  }

  .login {
    float: right;
    position: relative;
    height: 45px;
    margin: 20px 0 0 20px;
    padding: 0 22px 0 0;
    background-image: url($topbarImg);
    background-position: right -46px;

    .arrow-down {
      position: absolute;
      top: -8px;
      left: 50%;
      width: 14px;
      height: 8px;
      margin-left: -7px;
      background-image: url($toplistImg);
      background-position: -20px 0;
    }
  }
}
</style>

<script>
export default {
  name: "cloud-header"
};
</script>
