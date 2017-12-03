<template>
  <div class="header">
    <div class="top">
      <div class="top-wrapper clearfix">
        <h1 class="logo bg-topbar">
          <a href="javascript:void(0)"></a>
        </h1>
        <el-menu :default-active="'/'" class="topnav" mode="horizontal" @select="handleSelect" background-color="#242424" text-color="#ccc" :router="true" active-text-color="#fff">
          <el-menu-item index="/">
            <span>
              <em>发现音乐</em>
              <sub class="bg-topbar">&nbsp;</sub>
            </span>
          </el-menu-item>
          <el-menu-item index="/music">
            <span>
              <em>我的音乐</em>
              <sub class="bg-topbar">&nbsp;</sub>
            </span>
          </el-menu-item>
          <el-menu-item index="/friend">
            <span>
              <em>朋友</em>
              <sub class="bg-topbar">&nbsp;</sub>
            </span>
          </el-menu-item>
          <el-menu-item index="/shop">
            <span>
              <em>商城</em>
              <sub class="bg-topbar">&nbsp;</sub>
            </span>
          </el-menu-item>
          <el-menu-item index="/musician">
            <span>
              <em>音乐人</em>
              <sub class="bg-topbar">&nbsp;</sub>
            </span>
          </el-menu-item>
          <el-menu-item index="/download">
            <span>
              <em>下载客户端</em>
              <sub class="bg-topbar">&nbsp;</sub>
            </span>
          </el-menu-item>
        </el-menu>
        <div class="login">
          <el-dropdown :show-timeout="0" :hide-timeout="0">
            <span class="el-dropdown-link">登录</span>
            <i class="arrow-down bg-topList"></i>
            <el-dropdown-menu class="dropmenu" slot="dropdown">
              <el-dropdown-item>
                <i class="icon-mb"></i>
                <em>手机登录</em>
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="icon-wx"></i>
                <em>微信登录</em>
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="icon-qq"></i>
                <em>QQ登录</em>
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="icon-sina"></i>
                <em>新浪微博登录</em>
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="icon-net"></i>
                <em>网易邮箱账号登录</em>
              </el-dropdown-item>
              <div class="arrow-up"></div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div v-if="subShow" class="sub">
      <div class="wrapper">
        <el-menu :default-active="'/discover'" class="subnav" mode="horizontal" background-color="#c20c0c" text-color="#ccc" active-text-color="#fff" router>
          <el-menu-item index="/discover">
            <span>
              <em>推荐</em>
            </span>
          </el-menu-item>
          <el-menu-item index="/discover/toplist">
            <span>
              <em>排行榜</em>
            </span>
          </el-menu-item>
          <el-menu-item index="/discover/playlist">
            <span>
              <em>歌单</em>
            </span>
          </el-menu-item>
          <el-menu-item index="/discover/djradio">
            <span>
              <em>主播电台</em>
            </span>
          </el-menu-item>
          <el-menu-item index="/discover/artist">
            <span>
              <em>歌手</em>
            </span>
          </el-menu-item>
          <el-menu-item index="/discover/album/0">
            <span>
              <em>新碟上架</em>
            </span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div v-else class="subhide"></div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
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
      background-position: 0 0;
    }
  }

  .topnav {
    float: left;
    .el-menu-item {
      position: relative;
      height: 70px;
      &.is-active,
      &:hover {
        background-color: #000 !important;
      }
    }
    span {
      float: left;
      line-height: 70px;
    }
    em {
      float: left;
      height: 70px;
    }
    sub {
      display: block;
      position: absolute;
      left: 50%;
      top: 64px;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      overflow: hidden;
      background-position: -226px 0;
      visibility: hidden;
    }
    .el-menu-item.is-active sub {
      visibility: visible;
    }
  }

  .login {
    float: right;
    position: relative;
    height: 45px;
    margin: 20px 0 0 20px;
    padding: 0 22px 0 0;
    background-position: right -46px;
  }

  .sub,
  .subhide {
    z-index: 100;
    box-sizing: border-box;
    background: #c20c0c;
    border-bottom: 1px solid #a40011;
  }

  .subhide {
    height: 5px;
  }

  .sub {
    height: 35px;
    .wrapper {
      width: 1100px;
      height: 34px;
      margin: 0 auto;
      position: relative;
    }
    .el-menu {
      float: left;
      padding-left: 180px;
    }
    .el-menu-item {
      float: left;
      height: 34px;
      padding: 0;
      text-align: center;
      &:hover {
        background-color: #c20c0c !important;
        em {
          background-color: #9b0909;
        }
      }
      &.is-active em {
        background-color: #9b0909;
      }
      span {
        float: left;
        height: 34px;
      }
      em {
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        line-height: 21px;
        font-size: 12px;
      }
    }
  }
</style>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    name: "my-header",
    data() {
      return {
        subShow: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if (key === "/") {
          this.subShow = true;
        } else {
          this.subShow = false;
        }
      }
    }
  };
</script>
